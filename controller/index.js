const makeGreet = require('./greet');
const { renderGreeting } = require('../use-case');

module.exports = { greet: makeGreet({ renderGreeting }) };