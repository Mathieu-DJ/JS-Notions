var array = [1,2,3,4,5,6,7,8,9];

//puissance 2
function reducedPow2(accumulateur, valeurCourante, index, array) {
	array[index] = valeurCourante * valeurCourante
}

//racine carre
function reducedSqrt(accumulateur, valeurCourante, index, array) {
	array[index] = Math.sqrt(valeurCourante)
}

//compteur de valeurs paires
var reducedEven = (accumulateur, valeurCourante) => accumulateur + valeurCourante % 2

array.reduce(reducedPow2);
console.log(array);

array.reduce(reducedSqrt);
console.log(array);

var nb = array.reduce(reducedEven);
console.log(nb);