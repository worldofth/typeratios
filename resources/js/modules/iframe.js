(function IframeModule(global){
    "use strict";
    
    var iframe,
        content,
        head,
        body,
        scripts,
        inlineCss,
        inlineJavascript;
    
    var cssText,
        javascriptText,
        htmlText;
    
    var globalApi = {
        init: init,
        addCssFile: addCssFile,
        addJavascriptFile: addJavascriptFile,
        getCssText: getCssText,
        setCssText: setCssText,
        getJavascriptText: getJavascriptText,
        setJavascriptText: setJavascriptText,
        getHtmlText: getHtmlText,
        setHtmlText: setHtmlText
    };
    
    function init(iframeElement){
        if(typeof iframeElement === "string"){
            iframe = $(iframeElement);
        }else{
            iframe = iframeElement;
        }
        
        content = iframe.contents();
        head = content.find('head');
        body = content.find('body').html('<main></main>').find('main');
        scripts = content.find('body');
        inlineCss = head.append('<style></style>').find('style');
        inlineJavascript = scripts.append('<script></script>');
    }
    
    function addCssFile(cssUrl){
        head.append('<link rel="stylesheet" href="'+cssUrl+'" />');
    }
    
    function addJavascriptFile(jsUrl){
        scripts.append('<script src="'+jsUrl+'"></script>');   
    }
    
    function getCssText(){
        return cssText;   
    }
    
    function setCssText(css){
        cssText = css;
        inlineCss.html(cssText);
    }
    
    function getJavascriptText(){
        return javascriptText;   
    }
    
    function setJavascriptText(js){
        javascriptText = js;
        inlineJavascript.html(javascriptText);
    }
    
    function getHtmlText(){
        return htmlText;   
    }
    
    function setHtmlText(html){
        htmlText = html;
        body.html(htmlText);
    }
    
    global.iframeController = globalApi;
})(window);