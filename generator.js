function* puissancesDeDeux() {
	var powValue = -1;
	while(true) {
		yield Math.pow(2, ++powValue);
	}
}

var g1 = puissancesDeDeux();

console.log(g1.next().value); //1
console.log(g1.next().value); //2
console.log(g1.next().value); //4
console.log(g1.next().value); //8
console.log(g1.next().value); //16
console.log(g1.next().value); //32

console.log("--123--");

function* gen123() {
  yield 1;
  yield 2;
  yield 3;
}

var g2 = gen123();
console.log(g2.next().value); //1
console.log(g2.next().value); //2
console.log(g2.return().value); //undefined

console.log("--factorielle--");
function* factorielle() {
	
	var index = 1;
	var sum = 1;
	while(true) {
		console.log(sum);
		yield sum;
		sum = sum * index++;
	}
}


var g3 = factorielle();
g3.next() //1
g3.next() //1
g3.next() //2
g3.next() //6
g3.next() //24
g3.next() //120
g3.next() //720



