
//factory
function Point(x, y) {
	var o = {
		x: x,
		y: y
	}
	
	o.asString = function() {
		return "(" + x + ", " + y + ")";
	}
	
	return o;
}

let f1 = Point(1,1);
let f2 = Point(2,2);

console.log("f1 : " + f1.asString());
console.log("f2 : " + f2.asString());

f1.x = 2;
console.log("f1 : " + f1.asString());
// (1,1)


var test = {}

test.att1 = "valeurInitiale";
console.log(test);
test.att1 = "valeurChangee";
console.log(test);
