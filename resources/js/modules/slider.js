//https://github.com/andreruffert/rangeslider.js/blob/develop/src/rangeslider.js

(function(global, document){

    var Slider = {
        init: function(rangeElement, rangeName){
            this.rangeElement = rangeElement;
            if(typeof this.rangeElement == "string"){
                this.rangeElement = document.querySelector(this.rangeElement);
            }
            this.rangeElement.style.position = 'absolute';
            this.rangeElement.style.width = '1px';
            this.rangeElement.style.height = '1px';
            this.rangeElement.style.overflow = 'hidden';
            this.rangeElement.style.opacity = 0;

            this.fill = document.createElement('div');
            this.fill.classList.add('fill');

            this.handle = document.createElement('div');
            this.handle.classList.add('handle');

            this.range = document.createElement('div');
            this.range.classList.add('range');
            this.range.setAttribute('id', rangeName);

            var range = this.rangeElement.parentNode.insertBefore(this.range, this.rangeElement.nextSibling);
            range.appendChild(this.fill);
            range.appendChild(this.handle);

            this.min = rangeElement.getAttribute('min') || 0;
            this.max = rangeElement.getAttribute('max') || 3;
            this.step = rangeElement.getAttribute('step') || 0.05;
            this.value = rangeElement.value || this.min + (this.min+this.max) /2;

            this.update(true);
        },
        update: function(updateAttributes){
            updateAttributes = updateAttributes || false;

            if(updateAttributes){
                this.min = rangeElement.getAttribute('min') || 0;
                this.max = rangeElement.getAttribute('max') || 3;
                this.step = rangeElement.getAttribute('step') || 0.05;
                this.value = rangeElement.value || this.min + (this.min+this.max) /2;
            }

            this.hanldeWidth =
        }

    };

    global.newSlider = function(rangeElement, rangeName){
        return Object.create(Slider).init(rangeElement, rangeName);
    };

})(window, document);
