"use strict";

var superCoolSubApp = function superCoolSubApp() {
  return console.log("This super cool sub-app was started at " + Date.now().toLocaleString() + "!");
};

var mySubApp = superCoolSubApp;

mySubApp();