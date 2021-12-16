
function stopExecution(e) {
  e.preventDefault();
  return;
}

function setFormMessage(message) {
  const messageBox = document.querySelector('.list');
  if (message == "") {
    return;
  }
  messageBox.innerHTML += "&#9679; " + message + '<br/>';
  messageBox.style.fontWeight = 'bold';
  //messageBox.style.display = 'block';
}


function keepData(event) {
  const thingToDo = document.querySelector('#text-input').value;
  setFormMessage(thingToDo);
  document.querySelector('#text-input').value = "";
  return stopExecution(event);
}
