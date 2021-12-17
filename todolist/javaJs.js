
function stopExecution(e) {
  e.preventDefault();
  return;
}

function buttonChange(event) {
  let content = event.target;
   if (content.innerHTML=='To Do'){
    content.innerHTML='In Progress';
    content.style.backgroundColor = 'yellow';
  }
  else if (content.innerHTML=='In Progress'){
    content.innerHTML='Done';
    content.style.backgroundColor = 'red';
  }
  else {
    content.innerHTML='To Do';
    content.style.backgroundColor = 'lightgreen';
  }
}

function setFormMessage(message) {
  const messageBox = document.querySelector('.list');
  if (message == "") {
    return;
  }
  messageBox.innerHTML += "<li> <button class='common-style' id='myBtn' onclick='buttonChange(event)'>To Do</button> " + " " + message + '</li>';
}

function keepData(event) {
  const thingToDo = document.querySelector('#text-input').value;
  setFormMessage(thingToDo);
  document.querySelector('#text-input').value = "";
  return stopExecution(event);
}
