window.addEventListener("load", init);

function init() {
  bindEvents();
}

function bindEvents() {
  document.querySelector("#add").addEventListener("click", saveRecord);
}

function saveRecord() {
  var room = new ClassRoom();
  for (let key in room) {
    if (key == "free") {
      room[key] = document.querySelector("#" + key).checked;
      continue;
    }

    if (key != "homeClassRoom") {
      room[key] = document.querySelector("#" + key).value;
      continue;
    }
  }

  room.homeClassRoom.cls = document.querySelector("#cls").value;
  room.homeClassRoom.sec = document.querySelector("#sec").value;

  roomOperations.add(room);
  printTable(roomOperations.rooms);
}

function printTable(rooms) {
  var tbody = document.querySelector("#items");
  tbody.innerHTML = "";
  rooms.forEach(room => printRecord(room));
}

function printRecord(room) {
  var tbody = document.querySelector("#items");
  var tr = tbody.insertRow();
  var index = 0;
  for (let key in room) {
    let cell = tr.insertCell(index);

    if (key == "homeClassRoom") {
      cell.innerText = room[key].cls;
      index++;
    }

    if (key == "free") {
      if (room[key] == true) {
        cell.innerText = "Vacant";
        index++;
      } else {
        cell.innerText = "Class";
        index++;
      }
    } else {
      cell.innerText = room[key];
      index++;
    }
  }

  let cell = tr.insertCell(index);
  cell.innerText = room[key].sec;
}
