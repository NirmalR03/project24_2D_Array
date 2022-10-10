const row = 3, column = 4;
var arr = [];
for (var i=0;i<row;i++) {
	arr[i] = [];

	for (var j=0;j<column;j++) {
		arr[i][j] = prompt("Value for Array");
	}
}
console.log(arr);