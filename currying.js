function add(a, b) {
	return a + b;
}

function addCurrying(a, b) {
	if(b == undefined) {
		return (b) => {
			return a + b;
		}
	} else {
		return a + b;
	}
}

console.log(add(1, 2)); 		//expect 3
console.log(add(1));     		//expect NaN
console.log(addCurrying(1,2));	//expect 3
console.log(addCurrying(1));	//expect function
foo = addCurrying(1);
console.log(foo(2));			//expect 3