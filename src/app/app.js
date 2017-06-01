console.log("Hello Joe!");

const header = document.getElementById("test");



var source = ['1', '1', 'foo', '4', '5', 'baz', '3', '22', 'bar', '2'];

var result = source
	.map(x => parseInt(x))
	.filter(x => !isNaN(x))
	.reduce((x, y) => x + y);

header.innerHTML = result;
