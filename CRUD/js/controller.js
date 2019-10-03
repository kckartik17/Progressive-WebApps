window.addEventListener("load", bindEvents);

function bindEvents() {
  document.querySelector("#add").addEventListener("click", addRecord);
}

function addRecord() {
  console.log("Add Record");
}
