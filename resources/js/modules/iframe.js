/* globals window, jQuery, marked*/
(function IframeIFFE(global, document, marked){
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
			iframeElement = document.querySelector(iframe);
		}else{
			iframeElement = iframe;
		}

		iframeContent = iframeElement.contentDocument;
		head = iframeContent.querySelector('head');
		body = iframeContent.querySelector('body');
        html = body.appendChild(document.createElement('div'));
        html.classList.add('page');
	}

	function addCssFile(cssUrl){
        head.innerHTML += '<link rel="stylesheet" href="'+cssUrl+'" />';
		return this;
	}

	function addJavascriptFile(jsUrl){
        body.innerHTML += '<script src="'+jsUrl+'"></script>';
		return this;
    }

	function getNewCssBlock(){
		return {
			block: head.appendChild(document.createElement('style')),
			setCss: function(css){
				this.block.innerHTML = css;
			}
		};
	}

	function setHtml(htmlText){
		html.innerHTML = htmlText;
	}

	function setMarkdown(markdownText){
		html.innerHTML = marked(markdownText);
	}

	global.IframeController = globalApi;
})(window, document, marked);
