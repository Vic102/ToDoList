
function stopExecution(e) {
  e.preventDefault();
  return;
}
function closeButton() {
  document.querySelector('li').style.display = 'none';
}

function setFormMessage(message) {
  const messageBox = document.querySelector('.list');
  if (message == "") {
    return;
  }
  const botonCerrar = "<span onclick = 'closeButton()'> &times; </span>";
  messageBox.innerHTML += "<li>" + message + botonCerrar+ '</li>';
}

function keepData(event) {
  const thingToDo = document.querySelector('#text-input').value;
  setFormMessage(thingToDo);
  document.querySelector('#text-input').value = "";
  return stopExecution(event);
}
