var theClock = document.querySelector('.dig-clock');

var printTime = function() {

  var currentDate = new Date(); 
  
  var hour = (currentDate.getHours() < 10) ? "0" + currentDate.getHours() : currentDate.getHours();
  var min = (currentDate.getMinutes() < 10) ? "0" + currentDate.getMinutes() : currentDate.getMinutes();
  var sec = (currentDate.getSeconds() < 10) ? "0" + currentDate.getSeconds() : currentDate.getSeconds();

  theClock.innerHTML = hour + ":" + min + ":" + sec;
}

var intervalID = window.setInterval(printTime, 1000);

// ------------------------------------------------------------------


var theHexClock = document.querySelector('.hex-clock');
var theHexClockBackground = document.querySelector('.hex-clock-background');

var printHexTime = function() {

  var currentDate = new Date(); 
  
  var hour = (currentDate.getHours() < 10) ? "0" + currentDate.getHours() : currentDate.getHours();
  var min = (currentDate.getMinutes() < 10) ? "0" + currentDate.getMinutes() : currentDate.getMinutes();
  var sec = (currentDate.getSeconds() < 10) ? "0" + currentDate.getSeconds() : currentDate.getSeconds();

  var hexColor = "#" + hour + min + sec;
  theHexClock.innerHTML = hexColor;
  

  theHexClockBackground.style.backgroundColor = hexColor;
  
}

var intervalID = window.setInterval(printHexTime, 1000);







