function dfsNQueens(n) {
  if (n < 1) return [];

  const solutions = [];
  const board = [];

  function dfs(row) {
    if (row === n) {
      solutions.push([...board]);
      return;
    }

    for (let col = 0; col < n; col++) {
      let safe = true;

      for (let i = 0; i < row; i++) {
        if (
          board[i] === col ||
          Math.abs(board[i] - col) === Math.abs(i - row)
        ) {
          safe = false;
          break;
        }
      }

      if (safe) {
        board[row] = col;
        dfs(row + 1);
        board.pop();
      }
    }
  }

  dfs(0);
  return solutions;
}
