
function stopExecution(e) {
  e.preventDefault();
  return;
}
function closeButton() {

}

function setFormMessage(message) {
  const messageBox = document.querySelector('.list');
  if (message == "") {
    return;
  }
  const botonCerrar = "<span> X </span>";
  messageBox.innerHTML += "<li>" + message + closeButton()+ '</li>';
}

function keepData(event) {
  const thingToDo = document.querySelector('#text-input').value;
  setFormMessage(thingToDo);
  document.querySelector('#text-input').value = "";
  return stopExecution(event);
}
