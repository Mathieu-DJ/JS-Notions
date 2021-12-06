var tampon = new ArrayBuffer(4*6);
var vue    = new Int32Array(tampon); //tableau fixe

vue.forEach(function(element, index, array) {
	array[index] = index;
});

console.log(vue);
console.log(vue[7]); //Expect undefined

vue[7] = 1;
console.log(vue[7]); //get : undefined