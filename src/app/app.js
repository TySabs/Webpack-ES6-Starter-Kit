import Rx from 'rxjs';

console.log("Hello Rx:", Rx);

const header = document.getElementById("app-test");

const setHtml = function(content) {
	header.innerHTML = content;
};

const source = Rx.Observable.interval(200).take(11)
	.map(i => ['1', '2', 'webpack', '4', '5', 'dev', '3', '22', 'server', '2', 'App Works!'][i]);

const result = source
	.filter(x => isNaN(x))
	.reduce((x, y) => x + " " + y);

result.subscribe(x => setHtml(x));
