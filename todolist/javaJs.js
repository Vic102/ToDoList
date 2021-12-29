let countColor = 0;

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
  const messageBox = document.querySelector('.list');
  if (message == "") {
    return;
  }
  messageBox.innerHTML += '<li>' + message + '</li>';
  const listElement = document.getElementsByClassName('li');

  if (countColor % 2 == 0) {
    listElement.backgroundColor = '#f9f9f9';
  } else {
    listElement.backgroundColor = '#eeeeee';
  }
  countColor++;

}

function keepData(event) {
  const thingToDo = document.querySelector('#text-input');
  setFormMessage(thingToDo.value);
  thingToDo.value = "";
  return stopExecution(event);
}
