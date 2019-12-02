window.addEventListener("load", init);
function clearAll() {
  itemObject = new Item();
  for (let key in itemObject) {
    document.querySelector("#" + key).value = "";
  }
}

function init() {
  clearAll();
  bindEvents();
}

const sortById = () => printTable(itemOperations.sortById());

function saveRecords() {
  if (localStorage) {
    localStorage.myitems = JSON.stringify(itemOperations.items);
    alert("Data Stored successfully....");
  } else {
    alert("No Local Storage Feature is Supported in your Browser...");
  }
}

function loadRecords() {
  if (localStorage) {
    if (localStorage.myitems) {
      itemOperations.items = JSON.parse(localStorage.myitems);
      printTable(itemOperations.items);
    } else {
      alert("No Data to Load...");
    }
  } else {
    alert("No Local Storage Feature is Supported in your Browser...");
  }
}

function bindEvents() {
  document.querySelector("#save").addEventListener("click", saveRecords);
  document.querySelector("#load").addEventListener("click", loadRecords);
  document.querySelector("#sort").addEventListener("click", sortById);
  document.querySelector("#add").addEventListener("click", addRecord);
}

function addRecord() {
  var item = new Item();
  for (let key in item) {
    item[key] = document.querySelector("#" + key).value;
  }
  itemOperations.add(item);
  printRecord(item);
  console.log("Item Object is ", item);
  clearAll();
}

function printTable(items) {
  var tbody = document.querySelector("#items");
  tbody.innerHTML = "";
  items.forEach(item => printRecord(item));
}
function printRecord(item) {
  var tbody = document.querySelector("#items");
  var tr = tbody.insertRow();
  var index = 0;
  for (let key in item) {
    let cell = tr.insertCell(index);
    cell.innerText = item[key];
    index++;
  }
}
