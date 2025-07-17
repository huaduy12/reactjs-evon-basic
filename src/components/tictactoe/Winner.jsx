export function calculatorWinner(cells) {
  // cells là một mảng 9 phẩn tử cập nhập giá trị X,O liên tục
  // những vị trí ô dành chiến thắng
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      // trả về người chiến thắng, cells[a,b,c] bằng nhau nên trả về ô nào cũng được
      return cells[a];
    }
  }
  return null;
}
