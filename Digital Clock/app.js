function digitalClock() {
  var date = new Date();
  var hours = date.getHours().toString();
  var minutes = date.getMinutes().toString();
  var seconds = date.getSeconds().toString();
  if (hours.length < 2) {
    hours = "0" + hours;
  }
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }
  document.querySelector(
    ".clock"
  ).innerHTML = `<span> ${hours}: ${minutes}: ${seconds} </span>`;
}
setInterval(digitalClock, 1000);
