Square = (function () {
    "use strict";

    var colors = ["green"],
        currentColorIndex = 0,
        squareElement,
        initialize = function ()
        {
            squareElement = document.getElementById("box");
        },
        clickHandler = function () {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            squareElement.style.backgroundColor = colors[currentColorIndex];
        };

    return {
        initialize: initialize,
        clickHandler: clickHandler
    };
}());

Square.initialize();
