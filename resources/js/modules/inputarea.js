/* globals window, jQuery, CodeMirror */
(function InputAreaIFFE(global, $, cm){
	"use strict";
	
	var InputArea = {
		init: init,
		attachEvents: attachEvents,
		updateIframe: updateIframe
	};
	
	function init(textArea, inputController, isMarkdown){
		var textAreaElement = textArea;
		if(typeof textAreaElement === "string"){
			textAreaElement = $(textAreaElement);
		}
		
		var options = {
			lineNumbers: true,
			indentUnit: 4,
			mode: isMarkdown ? "markdown" : "css"
		};
		this.isMarkdown = isMarkdown;
		this.inputController = inputController;
		this.textArea = cm.fromTextArea(textAreaElement[0], options);
		
		this.attachEvents();
	}
	
	function attachEvents(){
		this.textArea.on('keyup', this.updateIframe.bind(this));	
	}
	
	function updateIframe(){
		if(this.isMarkdown){
			this.inputController.setMarkdown(this.textArea.getValue());
		}else{
			this.inputController.setCss(this.textArea.getValue(), true);
		}
	}
	
	global.IframeController.createInputArea = function(textArea, inputController, isMarkdown){
		var inputArea = Object.create(InputArea);
		inputArea.init(textArea, inputController, isMarkdown);
		return inputArea;
	};
})(window, jQuery, CodeMirror);