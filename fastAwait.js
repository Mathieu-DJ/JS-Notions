function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("fait");
    }, interval);
  });
};

async function timeTest9() {
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  
  console.log("9 secondes");
}
//temps d'exécution de 9 secondes

async function timeTest3() {
  const timeoutPromise1 = timeoutPromise(3000);
  const timeoutPromise2 = timeoutPromise(3000);
  const timeoutPromise3 = timeoutPromise(3000);

  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;
  
  console.log("3 secondes");
}

//temps d'exécution de 3 secondes



//tests
timeTest9().catch((e) => console.log);

timeTest3().catch((e) => console.log);
