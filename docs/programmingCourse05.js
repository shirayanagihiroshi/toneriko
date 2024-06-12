//sample
function removeTomato () {
  let element = document.getElementById("ID1234");
  element.remove();
}

function addPotate () {
  let parent = document.getElementById("ID1235");
  let child = document.createElement('li');
  child.innerHTML = "ポテト";
  parent.appendChild(child);
}

function kakunin01() {
  let textField = document.querySelector('#inputBox01');

  Function (textField.value)();

  return;
}

function kakunin02() {
  let textField = document.querySelector('#inputBox02');

  Function (textField.value)();

  return;
}
