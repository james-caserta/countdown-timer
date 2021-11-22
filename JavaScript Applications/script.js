
// countdown date
const xmas = "25 Dec 2021";


function countdown() {

  const currentDate = new Date();
  const xmasDate = new Date(xmas);

  const counter = (xmasDate - currentDate) / 1000;

  // Time calculations
  const days = Math.floor(counter / 3600 / 24);
  const hours = Math.floor(counter / 3600) % 24;
  const minutes = Math.floor(counter / 60) % 60;
  const seconds = Math.floor(counter) % 60;

  // Display result
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

}

setInterval(countdown, 1000);


// Timer is finished
if (counter < 0) {
  clearInterval(counter);
  document.getElementById("counter").innerHTML = "No more Christmas :("
}

