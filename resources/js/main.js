/* globals window, document */
(function(){
	'use strict';
	
    var iframe = {};
    var iframeContents = {};
    var iframeBody = {};
    var iframeHead = {};
    var style = {};
    
    var htmlTextArea = {};
    var cssTextArea = {};
    
    function init(){
        iframe = $('iframe');
        iframeContents = iframe.contents();
        iframeBody = iframeContents.find('body');
        iframeHead = iframeContents.find('head');
        
        htmlTextArea = $('#html');
        cssTextArea = $('#css');
        
        setupHead();
        setupBody();
    }
    
    function setupHead(){
        style = iframeHead.append('<style></style>').children('style');
        cssTextArea.on('keyup', function(){
            style.html($(this).val());
        });
    }
    
    function setupBody(){
        htmlTextArea.on('keyup', function(){
            iframeBody.html($(this).val());
        });
    }
    
    $(document).ready(function(){
        init(); 
    });
}());

