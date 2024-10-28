//09

// 描画ライブラリ
function fillSquare(x, y, r, g, b, context) {
  context.fillStyle = "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")";
  context.fillRect(x, y, 10, 10);
}

window.onload = function () {
  
}

function kakunin01() {
  let textField = document.querySelector('#inputBox01');

  let removeSpaceStr = textField.value.replace(/ /g, ""); //正規表現 単に置換すると、最初にマッチしたもののみの置換になる

  if (removeSpaceStr == "1,4,0,2,1,5") {
    setResult("#result01", '○');
  } else {
    setResult("#result01", '×');
  }

  return;
}

function kakunin02() {
  let textField = document.querySelector('#inputBox02');

  let removeSpaceStr = textField.value.replace(/ /g, ""); //正規表現 単に置換すると、最初にマッチしたもののみの置換になる

  if (removeSpaceStr == "1,1,0,0,0,0,1,1,1,0,0") {
    setResult("#result02", '○');
  } else {
    setResult("#result02", '×');
  }

  return;
}
