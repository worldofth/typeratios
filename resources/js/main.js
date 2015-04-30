/* globals window, document, iframeController, CodeMirror */
(function(){
	"use strict";
//    var htmlTextArea,
//        cssTextArea;
	
    function init(){
        iframeController.init('iframe');
            
        setupBaseIframe();
        setupHead();
        setupBody();
    }
    
    function setupBaseIframe(){
        iframeController.addCssFile('resources/css/iframe.css');
    }
    
    function setupHead(){
        window.cssTextArea = CodeMirror.fromTextArea(document.getElementById('css'), {
            lineNumbers: true,
            mode: "css",
            theme: "monokai",
        });
        window.cssTextArea.on('keyup', function(){
            less.render(window.cssTextArea.getValue())
                .then(function(output){
                    iframeController.setCssText(output.css);
                },
                function(err){});
        });
    }
    
    function setupBody(){
        window.htmlTextArea = CodeMirror.fromTextArea(document.getElementById('html'), {
            lineNumbers: true,
            mode: "htmlmixed",
            theme: "monokai",
        });
        window.htmlTextArea.on('keyup', function(){
           iframeController.setHtmlText(window.htmlTextArea.getValue());

        });
    }
    
    $(document).ready(function(){
        init(); 
    });
}());

