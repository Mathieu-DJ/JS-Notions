
var F = function() {
   this.a = 1;
   this.b = 2;
}

F.prototype.c = "bar";
var o = new F();
console.log("o.b           " + o.b);
console.log("o.c           " + o.c);
console.log("F.prototype.b " + F.prototype.b);
console.log("F.prototype.c " + F.prototype.c);

function doSomething(){}
doSomething.prototype.foo = "bar";
/*var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);*/
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
