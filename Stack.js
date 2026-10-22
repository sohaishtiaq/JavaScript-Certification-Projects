function initStack() {
  return {
    collection: []
  };
}

function push(stack, element) {
  stack.collection.push(element);
}

function pop(stack) {
  return stack.collection.pop();
}

function peek(stack) {
  return stack.collection[stack.collection.length - 1];
}

function isEmpty(stack) {
  return stack.collection.length === 0;
}

function clear(stack) {
  stack.collection = [];
}
