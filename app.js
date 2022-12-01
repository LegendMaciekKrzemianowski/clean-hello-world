const { greet } = require('./controller');
const [greetKind, target] = process.argv.slice(2);

greet({ greetKind, target });