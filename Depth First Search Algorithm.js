function dfs(graph, root) {
  const visited = [];
  const result = [];

  function visit(node) {
    if (visited[node]) return;

    visited[node] = true;
    result.push(node);

    for (let i = 0; i < graph[node].length; i++) {
      if (graph[node][i] === 1) {
        visit(i);
      }
    }
  }

  visit(root);
  return result;
}
