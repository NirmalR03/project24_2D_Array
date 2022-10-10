const row = prompt("Enter Rows"), column =prompt("Enter Column");
var arr = [];
for (var i=0;i<row;i++) {
	arr[i] = [];

	for (var j=0;j<column;j++) {
		arr[i][j] = prompt(` Enter Value for Arrays ${row} x ${column}`);
	}
}
console.log(arr);
