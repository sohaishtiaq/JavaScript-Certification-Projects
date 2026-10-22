function initQueue() {
  return {
    collection: []
  };
}

function enqueue(queue, element) {
  queue.collection.push(element);
}

function dequeue(queue) {
  return queue.collection.shift();
}

function front(queue) {
  return queue.collection[0];
}

function size(queue) {
  return queue.collection.length;
}

function isEmpty(queue) {
  return queue.collection.length === 0;
}

function print(queue) {
  console.log(queue.collection);
}
