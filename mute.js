if (!global.loggers) {
	global.loggers = [];
}

function attach() {
	console.log = function() {};
	console.info = function() {};
	console.warn = function() {};
	console.error = function() {};
}

module.exports = {
	attach: function(logger) {
		attach();
		global.loggers.push(logger);
		return this;
	},

	disableConsole: function(bool) {
		global.hideConsoleLog = !!bool;
		return this;
	}
}
