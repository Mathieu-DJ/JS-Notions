for(var index = 0 ; index < 5 ; index++) {
  setTimeout(function() {
    console.log("with side effect", index); //print 5 à chaque itération
  }, 1000);
}

function recreateLocalScope(localIndex) {
  return function() {
      console.log("no side effect", localIndex);
  };
}

for(var index = 0 ; index < 5 ; index++) {
  setTimeout(recreateLocalScope(index), 1000); //print 1 2 3 4 5 
}