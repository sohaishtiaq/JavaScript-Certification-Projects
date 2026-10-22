function initList() {
  return {
    head: null,
    length: 0
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
  let current = list.head;

  while (current !== null) {
    if (current.element === element) {
      return true;
    }

    current = current.next;
  }

  return false;
}

function getAt(list, index) {
  if (index < 0 || index >= list.length) {
    return undefined;
  }

  let current = list.head;
  let i = 0;

  while (current !== null) {
    if (i === index) {
      return current.element;
    }

    current = current.next;
    i++;
  }

  return undefined;
}

function insertAt(list, index, element) {
  if (index < 0 || index > list.length) return;

  const newNode = { element, next: null };

  if (index === 0) {
    newNode.next = list.head;
    list.head = newNode;
  } else {
    let current = list.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  list.length++;
}

function removeAt(list, index) {
  if (index < 0 || index >= list.length) return;

  if (index === 0) {
    list.head = list.head.next;
  } else {
    let current = list.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    current.next = current.next.next;
  }

  list.length--;
}

function clear(list) {
  list.head = null;
  list.length = 0;
}
