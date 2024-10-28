﻿//08

// 描画ライブラリ
function fillSquare(x, y, r, g, b, context) {
  context.fillStyle = "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")";
  context.fillRect(x, y, 10, 10);
}

const gazoDataStr = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111000000000000000000000000000000000000000000000111010000000000000000000000000000000000000000000111001000000000000000000000000000000000000000000011000010000000000000000011000000000000000000000001100000100000000000000011110000000000000000000000110000001000000000000001100100000000000000000000001000000001110000000000110001000000000000000000000000000000000111110000010000010000000000000000000000000000000000000011111100000110000000000000000000000000001000000000000000000000100000000000000000000000000010000000000000000000000000000000000000000111000000110000000000000110000000000000000000000001000000000100000000000111000000000000000000000000000000000001100000000011000000000000000000000000000000001110001000000001100000000011000000000011110000000110010000000001110000000000010000000000000110000001111100000000110011100000000010000000000000111000011111000000000000111000000000110000000000000011000011110000000000001011000000000100000000111000000000101000000000000010110000000001100000000001100000001100000000000001111100000000001000000000001111000010000000000000011110000000000010000000000000000000000000000000000000000000000000000000000000000000000000011100000000000000000000000000000001110000000000011101000000000000000111111111100000000011110000000110010000000000000000000000001110000000000000000001111100000000000000000000000000110000001000000000001000000000000000000000000000000010000010000000000110000000000000000011111000000000000000111000000001000000000000000000000001110000000000000011000000110000000000000000000000000011000000000000000000011100000000000000000000000000001100000000000000111101000000000000000000000000000000100000000000000000011110000000000000000111100000000000000000000000000000000000000000000000000111000000000000000000000000000000000000000000001100011000000000000000000000000000000111100000001110000001100000000000000000000000000000000111111110000000001100000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
const gazoData = gazoDataStr.split('');


const colorDataStr = "1111110000000000000000000000000000000000111111100000000000000000000000000000000011111110011111111000000000000000000000001111111000000000000000000000000000000000111111100000000022220000000000000000000001111000011100002002200000000000000000000000000000001110200002200000000000000000000000000000000020000022000000000000000000000001100000002000000220000000000000000000100011000000020000002200000000000000010010000100000002000000022000000000000001001000011000000200000000200000000000000100110000000000020000000002000000000000010001000000000002000000000200000000000001100100000000000200000000020000000000000010000000000000200000000002000000000000001000000000000020000000002200000000000000000000000000002000000000200000000000000000000000000000200000000020000000000000000000000000000220000000022000000000000000000000000000020000000002000000000000000000000000000002000000002200000002000000000000000000000200000002200000022200000000000000000000020000002200002222200000000000000000000002000002000222222020000000000000020000000200002222200220220000000000000002222222222222220222220222000000000000000022022202202202222022222000000333000003002022202222222222022220000333330000003000002202220220220222202033300320030033333333222220222222232233333033323332003323032330333333033330330032303233030333003032303330323033303330332303230333303303300333032300333000323332303330332300300300303230303330003300032303323332303333323303203333230333233332303323032303300323303200320330320330320303323032333323300303300333323333323320033323033330323033303233330323032303303033233033230323030000333032333033303303332330332330033300";
const colorData = colorDataStr.split('');


window.onload = function () {
  // 最初から表示される
  let canvas, context,
      canvas2, context2,
      canvas3, context3,
      i, j;

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

  
  // 3-2.画像表示の準備その3（2重ループ）
  canvas3 = document.getElementById('ID1254');
  context3 = canvas3.getContext('2d');

  for (j = 0; j < 10; j++) {
    for (i = 0; i < 10; i++) {
      console.log("i;",i, "j:",j);
      fillSquare(10 * i, 10 * j, 0, 0, 0, context3);
    }
  }
}

function kakunin01() {
  let canvasClear, contextClear;
  canvasClear = document.getElementById('ID1249');
  contextClear = canvasClear.getContext('2d');
  contextClear.clearRect(0, 0, 150, 150);

  let textField = document.querySelector('#inputBox01');

  Function (textField.value)();

  return;
}

function kakunin02() {
  let canvasClear, contextClear;
  canvasClear = document.getElementById('ID1251');
  contextClear = canvasClear.getContext('2d');
  contextClear.clearRect(0, 0, 100, 10);

  let textField = document.querySelector('#inputBox02');

  Function (textField.value)();

  return;
}

function kakunin03() {
  let canvasClear, contextClear;
  canvasClear = document.getElementById('ID1252');
  contextClear = canvasClear.getContext('2d');
  contextClear.clearRect(0, 0, 500, 500);

  let textField = document.querySelector('#inputBox03');

  Function (textField.value)();

  return;
}

function kakunin04() {
  let canvasClear, contextClear;
  canvasClear = document.getElementById('ID1253');
  contextClear = canvasClear.getContext('2d');
  contextClear.clearRect(0, 0, 400, 400);

  let textField = document.querySelector('#inputBox04');

  Function (textField.value)();

  return;
}
