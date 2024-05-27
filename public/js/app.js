let seconds = 0;
function setTime(time) {
  seconds = time*60;
  document.getElementById("timer").innerHTML = time;
}

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("five").onclick = function () {
    setTime(5);
    
  };
  document.getElementById("ten").onclick = function () {
    setTime(10);
  };
  document.getElementById("fifteen").onclick = function () {
    setTime(15);
  };
  document.getElementById("twenty").onclick = function () {
    setTime(20);
  };
  document.getElementById("start").onclick = function() {
    if(seconds <= 0) {
        return 
    }
    setInterval(() => {
        seconds = seconds-1
        let minutes = Math.floor(seconds/60)
        let segundos = seconds%60
        document.getElementById("timer").innerHTML = minutes+":" + segundos 

    }, 1000);
  }
});

