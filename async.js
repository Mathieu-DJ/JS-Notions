function hello() { return "Bonjour" };
console.log(hello());

hello = async function() { return "Bonjour" };
console.log(hello());
hello().then(console.log);