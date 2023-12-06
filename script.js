var productKey = "9625cacf-f602-4a00-b7b4-5b50c380ce93";
var canvasContainer = document.getElementById("myCanvas");

var context = window.twikit.createContext(productKey, canvasContainer, {
  loaded: function () {
    // Called when the context finished loading.
    console.log("Context loaded!");
  },
  parametersReady: function (parameterContainer) {
    // Called when parameter HTML elements are ready.
    // 'parameterContainer' is a <div> element with parameter HTML elements contained in it.
    document.getElementById("myParameters").appendChild(parameterContainer);
  },
  parameterDataReady: function (parameters) {
    // Called when parameter data is ready.
    // 'parameters' is an array of parameter data.
    console.log("Parameter data ready: ", parameters);
  },
  parameterGroupsDataReady: function (parameters) {
    // Called when parameter data is ready.
    // 'parameters' is an array of parameter data.
    console.log("Parameter groups data ready: ", parameters);
  },
  statusChanged: function (status) {
    // Called while loading the context to report progress.
    // 'status' reports the loading state, either idle(0), loading(1), busy(2), ready(3)
    console.log("Twikbot status changed: ", status);
  },
  twikbotContextReady: function (internalTwikbotContext) {
    // called when the internal context is ready
    console.log("Twikbot context ready!");
  },
});
