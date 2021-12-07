const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
const promise4 = new Promise((resolve, reject) => {
	var max = 100000;
	for(var i = 0; i < max; i++)
		for(let j = i; j < max; j++);
	resolve(i);
});

console.log(promise4);
//expected output: Promise { 100000 }

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo", 100000]

