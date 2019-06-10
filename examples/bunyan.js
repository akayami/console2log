const bunyan = require('bunyan');
const logger = bunyan.createLogger({name: 'myapp', level: 'debug'});
require('../bunyan').attach(logger).disableConsole(true);

console.log('First Message Log Message');
console.info('First Message Info Message');
console.error(new Error('Error'));
