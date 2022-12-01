const makeGreet = ({ renderGreeting }) => (greetParams) => renderGreeting(greetParams);

module.exports = makeGreet;