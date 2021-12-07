function successCallback(résultat) {
  console.log("L'opération a réussi avec le message : " + résultat);
}

function failureCallback(erreur) {
  console.error("L'opération a échoué avec le message : " + erreur);
}

function faireQqc() {
  return new Promise((successCallback, failureCallback) => {
    console.log("C'est fait");
    // réussir une fois sur deux
    if (Math.random() > .5) {
      successCallback("Réussite");
	  resolve(1);
    } else {
      failureCallback("Échec");
	  resolve(0);
    }
  })
}

const promiseQqc = faireQqc()
promiseQqc.then(successCallback, failureCallback);

