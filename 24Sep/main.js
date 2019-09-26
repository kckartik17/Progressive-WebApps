var btn = document
  .getElementById("calculate")
  .addEventListener("click", calculate);

function calculate() {
  salaryOperations.setbasicSalary(parseInt(document.getElementById("basic").value));
  // var basic, hra, da, ta, gs, tax, net;
  // basic = parseInt(document.getElementById("basic").value);
  // hra = basic * 0.3;
  // da = basic * 0.9;
  // ta = basic * 0.2;
  // gs = basic + hra + da + ta;
  // tax = gs * 0.1;
  // net = gs - tax;

  document.getElementById("hra").innerText = salaryOperations.hra();
  document.getElementById("da").innerText = salaryOperations.da();
  document.getElementById("ta").innerText = salaryOperations.ta();
  document.getElementById("gs").innerText = salaryOperations.gs();
  document.getElementById("tax").innerText = salaryOperations.tax();
  document.getElementById("net").innerText = salaryOperations.ns();
}
