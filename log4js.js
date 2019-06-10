if (!global.loggers) {
	global.loggers = [];
}

function attach() {
	console._log = console.log;

	console.log = function() {
		for (let x = 0; x < global.loggers.length; x++) {
			global.loggers[x].debug.apply(global.loggers[x], arguments);
			if (!global.hideConsoleLog) {
				console._log.apply(console, arguments);
			}
		}
	};

	console._info = console.info;

	console.info = function() {
		for (let x = 0; x < global.loggers.length; x++) {
			global.loggers[x].info.apply(global.loggers[x], arguments);
			if (!global.hideConsoleLog) {
				console._info.apply(console, arguments);
			}
		}
	};

	console._warn = console.warn;

	console.warn = function() {
		for (let x = 0; x < global.loggers.length; x++) {
			global.loggers[x].warn.apply(global.loggers[x], arguments);
			if (!global.hideConsoleLog) {
				console._warn.apply(console, arguments);
			}
		}
	};

	console._error = console.error;

	console.error = function() {
		for (let x = 0; x < global.loggers.length; x++) {
			global.loggers[x].error.apply(global.loggers[x], arguments);
			if (!global.hideConsoleLog) {
				console._error.apply(console, arguments);
			}
		}
	};
	
	console._debug = console.debug;
	console.debug = console.log;
}

module.exports = {
	attach: function(logger) {
		attach();
		global.loggers.push(logger);
		return this;
	},

	disableConsole: function(bool) {
		global.hideConsoleLog = (bool ? true : false);
		return this;
	}
};
