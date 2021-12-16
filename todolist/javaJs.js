

function isInputEmpty() {

}
let things = [];

function stopExecution(e) {
  e.preventDefault();
  return;
}

function setFormMessage(message) {
  const messageBox = document.querySelector('.list');
  messageBox.innerHTML = "+ " + message;
  messageBox.style.fontWeight = 'bold';
  //messageBox.style.display = 'block';
}

let lengthThings = 0;
function keepData(event) {
  const thingToDo = document.querySelector('#text-input').value;
  things[lengthThings] = thingToDo;
  setFormMessage(things[lengthThings]);
  lengthThings++;
  console.log(thingToDo);
  return stopExecution(event);
}
