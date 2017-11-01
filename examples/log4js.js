var log4js = require('log4js');
//log4js.clearAppenders();
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('/tmp/test.log'))

var logger = log4js.getLogger();
require('../log4js').attach(logger).disableConsole(true);

console.log('First Message Log Message');
console.info('First Message Info Message');
console.error(new Error('Error'));