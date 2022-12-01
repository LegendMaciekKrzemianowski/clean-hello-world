const makeRenderGreeting = require('./render-greeting');
const { presenter } = require('../ui');

module.exports = { renderGreeting: makeRenderGreeting({ presenter }) };