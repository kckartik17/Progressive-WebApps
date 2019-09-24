var btn = document
  .getElementById("calculate")
  .addEventListener("click", calculate);

function calculate() {
  var basic, hra, da, ta, gs, tax, net;
  basic = parseInt(document.getElementById("basic").value);
  hra = basic * 0.3;
  da = basic * 0.9;
  ta = basic * 0.2;
  gs = basic + hra + da + ta;
  tax = gs * 0.1;
  net = gs - tax;

  document.getElementById("hra").innerText = hra;
  document.getElementById("da").innerText = da;
  document.getElementById("ta").innerText = ta;
  document.getElementById("gs").innerText = gs;
  document.getElementById("tax").innerText = tax;
  document.getElementById("net").innerText = net;
}
