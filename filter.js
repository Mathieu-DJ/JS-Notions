var array = [1,2,3,4,5,6,7,8,9];

var filterEven = (elementCourant, index, array) => elementCourant % 2 == 0

console.log(array.filter(filterEven));