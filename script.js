// BRIGHTNESS IPO CALC BY MR. V

// Button CLicker Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let R = +document.getElementById("R-in").value;
  let G = +document.getElementById("G-in").value;
  let B = +document.getElementById("B-in").value;

  // PROCESS
  let brightness = Math.sqrt(0.299 * R ** 2 + 0.587 * G ** 2 + 0.114 * B ** 2);
  let msg = `Luminance = ${brightness}`;

  // OUTPUT
  document.getElementById("output").innerHTML = Math.round(brightness);
}
