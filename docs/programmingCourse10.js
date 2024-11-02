//10

// 描画ライブラリ
  function drawPersonA(x, y, person, context) {
    context.fillStyle = person.personColor;
    context.fillRect(x + 5,  y + 1,   9, 9 ); //頭
    context.fillRect(x + 1,  y + 10, 18, 18); //体
    context.fillRect(x + 3,  y + 28,  4, 8 ); //足
    context.fillRect(x + 13, y + 28,  4, 8 ); //足
  }

  function drawPersonB(x, y, person, context) {
    context.fillStyle = person.personColor;
    context.fillRect(x + 5,  y + 1,   9, 9 ); //頭
    context.fillRect(x + 1,  y + 10, 18, 18); //体
    context.fillRect(x + 3,  y + 28,  4, 8 ); //足
    context.fillRect(x + 13, y + 28,  4, 8 ); //足
    context.fillRect(x + 16, y + 1,   3, 9 ); //腕
  }

  // 待ち行列
  let waitList = [];

  function enqueue(p) {
    waitList.push(p);
  }

  function dequeue(p) {
    waitList.shift();
  }

  // 一人を作る
  function makePerson(){
    let r, g, b, waitTime, personColor;
    
    waitTime = 0;
    r = String(getRandam(10, 200));
    g = String(getRandam(10, 200));
    b = String(getRandam(10, 200));
    personColor = "rgb(" + r + "," + g + "," + b + ")";

    return { waitTime    : waitTime,
             personColor : personColor};
  }

  // Math.random()は0以上1未満のランダムな値を生成する
  // getRandam()はn以上m以下の整数値を生成する。
  function getRandam(n, m){
    return Math.floor(Math.random() * (m - (n - 1)) + n);
  }

window.onload = function () {

  let canvas, context;

  canvas = document.getElementById('ID1256');
  context = canvas.getContext('2d');

  let p = makePerson();
  drawPersonA(0, 0, p, context)
}

