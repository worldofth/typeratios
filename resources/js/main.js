(function readyIIFE(global, ready){
    global.ready = ready;
})(window, function(cb){
    "use strict";
    if(document.readyState != 'loading'){
        cb();
    }else if(document.addEventListener){
        document.addEventListener('DOMContentLoaded', cb);
    }else{
        document.attachEvent('onreadystatechange', function(){
            if(document.readyState == 'complete'){
                cb();
            }
        });
    }
});

/* globals window, document, IframeController */
(function(){
	"use strict";

	var width = {};
	var baseCssBlock ={};
	var inlineCssBlock = {};
	var cssTextArea = {};
	var htmlTextArea = {};
    var testSlider = {};

    function init(){
        IframeController.init('iframe');

        setupBaseIframe();
        setupHead();
        setupBody();
		setupWidth();
        setupSliders();
    }

    function setupBaseIframe(){
        IframeController.addCssFile('resources/css/iframe.css');
    }

    function setupHead(){
        inlineCssBlock = IframeController.getLessBlock();
		cssTextArea = IframeController.createInputArea('#css', inlineCssBlock);
    }

    function setupBody(){
		htmlTextArea = IframeController.createInputArea('#markdown', IframeController, true);
    }

	function setupWidth(){
		baseCssBlock = IframeController.getLessBlock();

		width = document.querySelector('#width');

        width.addEventListener('change', function(){
            baseCssBlock.setVariables({
                "width": this.value+"px"
            })
            .setCss('div{ width: @width; margin: 0 auto; }', true);
        });

		baseCssBlock.setVariables({
			"width": 700+"px"
		})
		.setCss('div{ width: @width; margin: 0 auto; }', true);
	}

    function setupSliders(){
        testSlider = newSlider('.fontSize', 'fontSize');
    }

    ready(function(){
        init();
    });
}());

