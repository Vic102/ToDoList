
function stopExecution(e) {
  e.preventDefault();
  return;
}

function setFormMessage(message) {
  const messageBox = document.querySelector('.list');
  if (message == "") {
    return;
  }
  messageBox.innerHTML += "<li>" + message + '</li>';
}

function keepData(event) {
  const thingToDo = document.querySelector('#text-input');
  setFormMessage(thingToDo.value);
  thingToDo.value = "";
  return stopExecution(event);
}
