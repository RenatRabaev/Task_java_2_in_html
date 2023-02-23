//  task  2

console.log("task  2 :")
console.log('********************');

if (false) {
  var multiplyNum = ''
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    multiplyNum += '\t'
    multiplyNum += i * j
  }
  multiplyNum += '\n'
} console.log(multiplyNum)
console.log('********************');

// task 2 in table
let table = []

console.log("task 2 in table :")
console.log('********************');

// Print to Console 
for (let i = 1; i <= 10; i++) {
  let row = []

  for (let j = 1; j <= 10; j++) {
    row.push(i * j);
  }
  table.push(row);
} console.table(table)

console.log('********************');
// shift + alt + F
// Print in HTML page and mark
console.log("Task 2 : Print in HTML page and mark")
document.write('<table border="1">')
for (let i = 1; i <= 10; i++) {
  document.write('<tr>')
  for (let j = 1; j <= 10; j++) {
    let result = i * j
    if ((result == 50) || (result == 72) || (result == 100)) {
      document.write('<td style="border: 3px solid rgb(11, 460, 100)">' + result + '</td>')
    } else {
      document.write('<td>' + result + '</td>')
    }
  }
  document.write('</tr>')
}
document.write('</table>')
}


console.log('********************');
