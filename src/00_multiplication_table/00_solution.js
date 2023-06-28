function multiplicationTable(rows, columns) {
  let table = [];
  for (i = 1; i <= rows; i++) {
    let row = [];
    for (j = 0; j <= columns; j++) {
      input = i * j;
      row.push(input);
    }
    table.push(row);
  }
  return table;
}
console.log(multiplicationTable(2, 3));
