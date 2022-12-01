const makeGreeting = ({ greetKind = 'Hello', target = 'World' }) => ({
    text: `${greetKind} ${target}!`,
});

module.exports = makeGreeting;