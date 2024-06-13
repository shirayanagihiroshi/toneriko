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

let sampleCountupNumber = 0;
let sampleMyTimer = 0;

function intervalFunction () {
  let element = document.getElementById("ID1238");
  sampleCountupNumber++;
  element.innerHTML = String(sampleCountupNumber);
}

function countupStart() {
  if (sampleMyTimer == 0) {
    sampleMyTimer = setInterval(intervalFunction, 1000);
  }
}

function countupStop() {
  clearInterval(sampleMyTimer);
  sampleMyTimer = 0;
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

function kakunin03() {
  let textField = document.querySelector('#inputBox03');

  Function (textField.value)();

  return;
}
