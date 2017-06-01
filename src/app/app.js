console.log("Hello Joe!");

const header = document.getElementById("app-test");

const source = ['1', '1', 'foo', '4', '5', 'baz', '3', '22', 'bar', '2', 'App Works!'];

const result = source
	.filter(x => isNaN(x))
	.reduce((x, y) => x + " " + y + " ");

header.innerHTML = result;
