var productKey = 'wheel';
var locale = 'default';
var target = document.getElementById("myCanvas");

var context = window.twikit.createContext(productKey, locale, target , {
    parametersReady: function(parameterContainer) {
        // Called when parameter HTML elements are ready.
        // 'parameterContainer' is a <div> element with parameter HTML elements contained in it.
        document.getElementById("myParameters").appendChild(parameterContainer);
    },
    previewBackgroundColor: '#ccc'  // Used to set the background color of the 3D canvas.
});
