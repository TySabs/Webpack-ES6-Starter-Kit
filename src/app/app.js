console.log("Hello Webpacker!");

const header = document.getElementById("app-test");

const source = ['1', '1', 'webpack', '4', '5', 'dev', '3', '22', 'server', '2', 'App Works!'];

const result = source
	.filter(x => isNaN(x))
	.reduce((x, y) => x + " " + y + " ");

header.innerHTML = result;
