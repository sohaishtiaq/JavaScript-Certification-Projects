const inventory = [];

function findProductIndex(productName) {
  return inventory.findIndex(
    product => product.name === productName.toLowerCase()
  );
}

function addProduct(product) {
  product.name = product.name.toLowerCase();

  const productIndex = findProductIndex(product.name);

  if (productIndex !== -1) {
    inventory[productIndex].quantity += product.quantity;
    console.log(
      `${product.name} quantity updated`
    );
  } else {
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  productName = productName.toLowerCase();

  const productIndex = findProductIndex(productName);

  if (productIndex === -1) {
    console.log(`${productName} not found`);
    return;
  }

  const product = inventory[productIndex];

  if (product.quantity < quantity) {
    console.log(
      `Not enough ${productName} available, remaining pieces: ${product.quantity}`
    );
  } else {
    product.quantity -= quantity;

    console.log(
      `Remaining ${productName} pieces: ${product.quantity}`
    );

    if (product.quantity === 0) {
      inventory.splice(productIndex, 1);
    }
  }
}
