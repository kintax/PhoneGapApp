var APP = (function(module) {
	
	module.AddIt = function(resultObject) {
		var answer = +first.value + +second.value
		resultObject.text(answer);
	};
	
	return module;
}(APP || {}));