var distance = 1000*60*parseInt(sessionStorage.getItem("nop"));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("timer1").innerHTML = minutes +" : " + "00";
var showtimer=false;
function timer(){
// Set the date we're counting down to
var countDownDate = new Date().getTime() + minutes*60*1000+1000;

// Update the count down every 1 second
var x = setInterval(function() {
    if(showtimer==false){
        clearInterval(x);
        //document.getElementById("timer1").innerHTML = "";
        return;
    }
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(seconds<10){
        seconds="0"+seconds;
    }
    else{
        seconds=seconds.toString();
    }
  // Display the result in the element with id="demo"
  document.getElementById("timer1").innerHTML = minutes +" : " + seconds;

  // If the count down is finished, write some text
  if (distance <= 0) {
    clearInterval(x);
    window.location.href="index.html";
    return;
    //document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
}
function stop_timer(){
    showtimer=false;
    window.location.href="index.html";
}
function start_timer(){
    showtimer=true;
    document.getElementById("btn").onclick = stop_timer;
    document.getElementById("btn").innerHTML = "Vote Now";
    timer();
}