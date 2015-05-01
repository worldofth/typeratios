/* globals window, document, IframeController */
(function(){
	"use strict";
	
	var width = {};
	var baseCssBlock ={};
	var inlineCssBlock = {};
	var cssTextArea = {};
	var htmlTextArea = {};
	
    function init(){
        IframeController.init('iframe');
            
        setupBaseIframe();
        setupHead();
        setupBody();
		setupWidth();
		setupResize();
    }
    
    function setupBaseIframe(){
        IframeController.addCssFile('resources/css/iframe.css');
    }
    
    function setupHead(){
		inlineCssBlock = IframeController.getLessBlock();
		cssTextArea = IframeController.createInputArea($('#css'), inlineCssBlock);
    }
    
    function setupBody(){
		htmlTextArea = IframeController.createInputArea($('#markdown'), IframeController, true);
    }
	
	function setupWidth(){
		baseCssBlock = IframeController.getLessBlock();
		
		width = $('#width');
		
		width.on('change', function(){
			baseCssBlock.setVariables({
				"width": $(this).val()+"px"
			})
			.setCss('div{ width: @width; margin: 0 auto; }', true);
		});
		
		baseCssBlock.setVariables({
			"width": 700+"px"
		})
		.setCss('div{ width: @width; margin: 0 auto; }', true);
	}
    
	function setupResize(){
		$('.input-areas').resizable({
			handles: "e",
			minWidth: 200,
			maxWidth: 800,
			alsoResizeReverse: ".output"
		});
		
		$('.markdown-area').resizable({
			handles: "s",
			minHeight: 200,
			alsoResizeReverse: ".css-area"
		});
	}
	
    $(document).ready(function(){
        init(); 
    });
}());

