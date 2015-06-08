	if(window.console == null || window.console == undefined || !window.console)
		console = { log: function() {}, info: function() {}, warn: function() {}, error: function() {}, trace: function() {}, debug: function() {} };
	else if(!console.debug)
		console.debug = function() {};
	