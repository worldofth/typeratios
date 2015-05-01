/* globals window, jQuery, marked*/
(function IframeIFFE(global, $, marked){
	"use strict";
	
	var iframeElement,
		iframeContent,
		head,
		body,
		html;
	
	var globalApi = {
		init: init,
		addCssFile: addCssFile,
		addJavascriptFile: addJavascriptFile,
		getNewCssBlock: getNewCssBlock,
		setHtml: setHtml,
		setMarkdown: setMarkdown
	};
	
	function init(iframe){
		if(typeof iframe === "string"){
			iframeElement = $(iframe);	
		}else{
			iframeElement = iframe;
		}
		
		iframeContent = iframeElement.contents();
		head = iframeContent.find('head');
		body = iframeContent.find('body');
		html = body.append('<div class="page"></div>').find('div');
	}
	
	function addCssFile(cssUrl){
		head.append('<link rel="stylesheet" href="'+cssUrl+'" />');
		return this;
	}
	
	function addJavascriptFile(jsUrl){
        body.append('<script src="'+jsUrl+'"></script>');
		return this;
    }
	
	function getNewCssBlock(){
		return {
			block: head.append('<style></style>').find('style').last(),
			setCss: function(css){
				this.block.html(css);
			}
		};
	}
	
	function setHtml(htmlText){
		html.html(htmlText);
	}
	
	function setMarkdown(markdownText){
		html.html(marked(markdownText));	
	}
	
	global.IframeController = globalApi;
})(window, jQuery, marked);