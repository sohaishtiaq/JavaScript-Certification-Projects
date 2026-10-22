function adjacencyListToMatrix(graph) {
  const nodes = Object.keys(graph);
  const matrix = [];

  for (let i = 0; i < nodes.length; i++) {
    const row = [];

    for (let j = 0; j < nodes.length; j++) {
      if (graph[nodes[i]].includes(Number(nodes[j]))) {
        row.push(1);
      } else {
        row.push(0);
      }
    }

    matrix.push(row);
    console.log(row);
  }

  return matrix;
}
