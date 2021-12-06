const s = new Date().getSeconds();

setTimeout(function() {
  // prints
  console.log("Exécuté après " + (new Date().getSeconds() - s) + " secondes.");
}, 500);

while(true) {
  if(new Date().getSeconds() - s >= 2) {
    console.log("Ouf, on a bouclé pendant 2 secondes");
    break;
  }
}