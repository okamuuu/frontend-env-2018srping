var Dog = require('./lib/Dog').default;

var dog1 = new Dog();
var dog2 = new Dog('ruff ruff')

console.log(dog1.say())
console.log(dog2.say())
