//sample
function changeColor() {
  let element = document.getElementById("ID1241");
  element.style.color = "blue";
}

function kakunin01() {
  let textField = document.querySelector('#inputBox01');

  Function (textField.value)();

  return;
}

  window.onload = function () {
    let myTimer;
    let myPosition = 0;
    let myDirection = "right";
 
    function myMove(){
      let element = document.getElementById("ID1244");
      if (myDirection == "right") {
        myPosition = myPosition + 5;
        if (myPosition == 100) {
          myDirection = "left";
        }
      } else {
        myPosition = myPosition - 5;
        if (myPosition == 0) {
          myDirection = "right";
        }
      }
      element.style.left = String(myPosition) + "px"; 
    }

    myTimer = setInterval(myMove, 100);
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
