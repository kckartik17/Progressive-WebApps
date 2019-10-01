window.addEventListener("load", bindEvent);

function bindEvent() {
  document.getElementById("area").addEventListener("keypress", cal);
}

function cal() {
  calculate.setText(document.getElementById("area").value);
  console.log(document.getElementById("area").value);
  document.getElementById("para").innerText = calculate.para();
  document.getElementById("words").innerText = calculate.words();
  document.getElementById("letters").innerText = calculate.letters();
}
