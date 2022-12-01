const makeGreeting = require('../greeting/greeting');

const makeRenderGreeting = ({ presenter }) => {
    if (!(
        presenter
        && presenter.hasOwnProperty('render')
        && typeof presenter.render === 'function'
    )) {
        throw new Error('Invalid presenter');
    }

    return (greetParams = {}) => {
        const greeting = makeGreeting(greetParams);
        presenter.render(greeting.text)
    };
}

module.exports = makeRenderGreeting;