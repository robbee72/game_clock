var start = new Date();
var end = new Date();
end.setMinutes(end.getMinutes() +1);
var seconds = ((end - start)/1000) ;
var x = 60;
function secondPassed() {
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
}

function countdown() {
  secondPassed();
    if (seconds != 0) {
      seconds--;
      t = setTimeout("countdown()", 1000);
    }
}

function pause() {
    clearTimeout(t);
};

function reset() {
    pause();
    secondPassed();

};
