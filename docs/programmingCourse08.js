﻿//08

// 描画ライブラリ
function fillSquare(x, y, r, g, b, context) {
  context.fillStyle = "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")";
  context.fillRect(x, y, 10, 10);
}

const gazoDataStr = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111000000000000000000000000000000000000000000000111010000000000000000000000000000000000000000000111001000000000000000000000000000000000000000000011000010000000000000000011000000000000000000000001100000100000000000000011110000000000000000000000110000001000000000000001100100000000000000000000001000000001110000000000110001000000000000000000000000000000000111110000010000010000000000000000000000000000000000000011111100000110000000000000000000000000001000000000000000000000100000000000000000000000000010000000000000000000000000000000000000000111000000110000000000000110000000000000000000000001000000000100000000000111000000000000000000000000000000000001100000000011000000000000000000000000000000001110001000000001100000000011000000000011110000000110010000000001110000000000010000000000000110000001111100000000110011100000000010000000000000111000011111000000000000111000000000110000000000000011000011110000000000001011000000000100000000111000000000101000000000000010110000000001100000000001100000001100000000000001111100000000001000000000001111000010000000000000011110000000000010000000000000000000000000000000000000000000000000000000000000000000000000011100000000000000000000000000000001110000000000011101000000000000000111111111100000000011110000000110010000000000000000000000001110000000000000000001111100000000000000000000000000110000001000000000001000000000000000000000000000000010000010000000000110000000000000000011111000000000000000111000000001000000000000000000000001110000000000000011000000110000000000000000000000000011000000000000000000011100000000000000000000000000001100000000000000111101000000000000000000000000000000100000000000000000011110000000000000000111100000000000000000000000000000000000000000000000000111000000000000000000000000000000000000000000001100011000000000000000000000000000000111100000001110000001100000000000000000000000000000000111111110000000001100000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
const gazoData = gazoDataStr.split('');


window.onload = function () {
  // 最初から表示される
  let canvas, context, i;

  // 2.画像表示の準備（四角形の描画について）
  canvas = document.getElementById('ID1248');
  context = canvas.getContext('2d');
                      // R G Bの順。0から255で設定
  context.fillStyle = "rgb(255, 255, 255)";
  context.fillRect(50, 10, 30, 30);


  // 3.画像表示の準備その2（描画関数の導入）
  canvas2 = document.getElementById('ID1250');
  context2 = canvas2.getContext('2d');

  for (i = 0; i < 10; i++) {
    fillSquare(10 * i, 0, 20 * i, 0, 20 * i, context2);
  }
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
