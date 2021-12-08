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

//en utilisant le parametre de next()

function* logGenerator() {
  console.log(yield);
  console.log(yield);
  console.log(yield);
}

var gen5 = logGenerator();

// le premier appel à next exécute la fonction depuis son
// début jusqu'au premier yield rencontré
gen.next();
gen.next('bretzel');    // bretzel
gen.next('california'); // california
gen.next('mayonnaise'); // mayonnaise

//utilisation de yield*

function* autreGenerateur(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}
function* generateur(i){
  yield i;
  yield* autreGenerateur(i);
  yield i + 10;
}

var gen6 = generateur(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
