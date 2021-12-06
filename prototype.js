//prototype
// Forme, la classe parente
function Forme(x,y) {
  this.x = x;
  this.y = y;
}

// Méthode de la classe parente
Forme.prototype.déplacer = function(x, y) {
  this.x += x;
  this.y += y;
};

Forme.prototype.toString = function() {
	return this.x + ", " + this.y;
}

// Rectangle - classe fille
function Rectangle(x,y) {
  // on appelle le constructeur parent
  Forme.call(this, x, y);
}

// La classe fille surcharge la classe parente
Rectangle.prototype = Object.create(Forme.prototype);

// Si on ne définit pas le constructeur avec Rectangle, il récupèrera le constructeur
// Forme (le parent).
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle(2,2);

console.log('instance de Rectangle ? ', (rect instanceof Rectangle));
// true
console.log('une instance de Forme ? ', (rect instanceof Forme));
 // true
rect.déplacer(1, 1);
// Affiche 'Forme déplacée.'

console.log(rect);
