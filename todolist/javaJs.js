let countColor = 0;
let arr = new Array();
let sizeArr = 0;

function setDate(fecha) {
  let year = fecha.getFullYear();
  let month = fecha.getMonth() + 1;
  let day = fecha.getDate();
  let hour = fecha.getHours();
  let minutes = fecha.getMinutes();
  let fullDate = day + "/" + month + "/" + year + " " + hour + ":" + minutes + "h";
  return fullDate;
}

function stopExecution(e) {
  e.preventDefault();
  return;
}

function setColor(countColor) {
  if (countColor % 2 == 0) {
    document.querySelector('.list').backgroundColor = '#f9f9f9';
  } else {
    document.querySelector('.list').backgroundColor = '#eeeeee';
  }
  countColor++;
}

function setFormMessage(message) {
  let fecha = new Date();
  const messageBox = document.querySelector('.list');
  if (message == "") {
    return;
  }
  let newElement = "<li>" + setDate(fecha) + " " + message + '</li>';
  arr[sizeArr] = newElement;
  messageBox.innerHTML += arr[sizeArr];
  sizeArr++;
}

function keepData(event) {
  const thingToDo = document.querySelector('#text-input');
  setFormMessage(thingToDo.value);
  thingToDo.value = "";
  return stopExecution(event);
}
