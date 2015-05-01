/* globals window, jQuery, less*/
(function LessBlockIFFE(global, less){
	"use strict";
	
	var Lessblock = {
		init: init,
		setVariables: setVariables,
		setCss: setCss,
		update: update,
		getError: getError
	};
	
	function init(){
		this.block = global.IframeController.getNewCssBlock();
		this.variables = {
			globalVars: {}	
		};
		this.lessText = "";
		this.error = {};
	}
	
	function setVariables(vars){
		this.variables.globalVars = vars;
		return this;
	}
	
	function setCss(less, toUpdate){
		this.lessText = less;
		if(toUpdate){
			return this.update();	
		}else{
			return this;	
		}
	}
	
	function update(){
		less.render(this.lessText, this.variables)
		.then(lessOutput.bind(this), setError.bind(this));
		return this;
	}
	
	function lessOutput(output){
		this.block.setCss(output.css);
	}
	
	function setError(err){
		this.error = err;	
	}
	
	function getError(){
		return this.error;	
	}
	
	global.IframeController.getLessBlock = function(){
		var lessblock = Object.create(Lessblock);
		lessblock.init();
		return lessblock;
	};
})(window, less);