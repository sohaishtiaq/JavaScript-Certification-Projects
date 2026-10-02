let lunches = [];
function addLunchToEnd(lunches, name) {
  lunches.push(name);
  console.log(`${name} added to the end of the lunch menu.`);
  return lunches;
}

addLunchToEnd(["Pizza", "Tacos"], "Burger");

function addLunchToStart(lunches, name) {
  lunches.unshift(name);
  console.log(`${name} added to the start of the lunch menu.`);
  return lunches;
}

addLunchToStart(["Burger", "Sushi"], "Pizza");

function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.")
  } else {
    let item = lunches.pop();
    console.log(`${item} removed from the end of the lunch menu.`);
    return lunches;
  }
}

removeLastLunch(["Stew", "Soup", "Toast"]);
removeLastLunch(["Sushi", "Pizza", "Noodles"]);

function removeFirstLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.")
  } else {
    let item = lunches.shift();
    console.log(`${item} removed from the start of the lunch menu.`);
    return lunches;
  }
}

removeFirstLunch(["Salad", "Eggs", "Cheese"]);

function getRandomLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches available.");
  } else {
    let randomLunch = lunches[Math.floor(Math.random() * lunches.length)];
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
}

function showLunchMenu(lunches) {
  if (lunches.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${lunches.join(", ")}`) 
  }
}

showLunchMenu(["Greens", "Corns", "Beans"]);
