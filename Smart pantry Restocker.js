const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];


function parseShipment(rawData) {
  const seen = new Set();
  const shipment = [];

  for (const line of rawData) {
    const [sku, name, qty, expires, zone = "general"] = line.split("|");

    if (seen.has(sku)) {
      continue;
    }

    seen.add(sku);

    shipment.push({
      sku,
      name,
      qty: Number(qty),
      expires,
      zone
    });
  }

  return shipment;
}

function planRestock(pantry, shipment) {
  return shipment.map(item => {
    let type;

    if (item.qty <= 0) {
      type = "discard";
    } else if (pantry.some(pantryItem => pantryItem.sku === item.sku)) {
      type = "restock";
    } else {
      type = "donate";
    }

    return { type, item };
  });
}

function groupByZone(actions) {
  return actions.reduce((groups, action) => {
    const zone = action.item.zone;

    if (!groups[zone]) {
      groups[zone] = [];
    }

    groups[zone].push(action);

    return groups;
  }, {});
}

function clonePantry(pantry) {
  return pantry.map(item => ({ ...item }));
}
const parsedShipment = parseShipment(rawData);
const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantryCopy, parsedShipment);
const groupedResult = groupByZone(actions);

console.log(groupedResult);
