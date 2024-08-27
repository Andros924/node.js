
function greet(name) {
    return `Hello, ${name}!`;
}

module.exports = greet;


const greetFunction = require('./common');

const message = greetFunction('alessandro Developer');
console.log(message);
