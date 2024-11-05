//10

  // 待ち行列
  let waitList = [];
  let canvas;
  let context;
  let kyakuTimerId = 0;
  let miseTimerId = 0;
  let countupId = 0;
  let total_time = 0;
  let total_num = 0;

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

  function viewPersons() {
    let i;

    context.clearRect(0, 0, 500, 80);

    for (i = 0; i < waitList.length; i++) {
      drawPersonA(20*i, 0, waitList[i], context);
    }
  }

  function countup() {
    let i;

    for (i = 0; i < waitList.length; i++) {
      waitList[i].waitTime += 100;
    }
  }

  function enqueue(p) {
    waitList.push(p);
  }

  function dequeue() {
    if(waitList.length > 0) {
      p = waitList.shift();
      total_time = total_time + p.waitTime;
      total_num++;

      let obj = document.getElementById('ID1259');
      let heikin = (total_time/1000)/total_num;
      heikin = heikin * 10; //ここからの3行で小数第一位で四捨五入
      heikin = Math.round(heikin);
      heikin = heikin / 10;
      obj.innerHTML = "お客さんの平均待ち時間は" + heikin + "分";
    }
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

  function miseTimer(){
    let mise = document.getElementById('ID1257');
    //100msはほぼ0。0から2倍までの平均がプルダウン指定した値
    miseTimerId = setTimeout(miseTimer, Number(mise.value)*1000);
    dequeue();
    viewPersons();
  }

  function kyakuTimer(){
    let kyaku = document.getElementById('ID1258');
    //100msはほぼ0。0から2倍までの平均がプルダウン指定した値
    let interval = getRandam(100,Number(kyaku.value)*1000*2);
    kyakuTimerId = setTimeout(kyakuTimer, interval);

    enqueue(makePerson());
    viewPersons();
  }

  function buttonClick(){
    clearTimeout(kyakuTimerId);
    clearTimeout(miseTimerId);
    clearTimeout(countupId);
    
    let kyaku = document.getElementById('ID1258');
    let interval = getRandam(100,Number(kyaku.value)*1000*2);
    kyakuTimerId = setTimeout(kyakuTimer, interval);

    let mise = document.getElementById('ID1257');
    miseTimerId = setTimeout(miseTimer, Number(mise.value)*1000);

    countupId = setInterval(countup, 100);
  }

window.onload = function () {
  canvas = document.getElementById('ID1256');
  context = canvas.getContext('2d');

  let yen = 1000000;
  let i;
}

// 例題1　実行してみてチェックする
function kakunin01() {
  confirmationTemplate('#inputBox01', '#result01', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(after50years() == 2691593) {' +
      '  r = true;'         +
      '} else {'            +
      '  r = false;'        +
      '}'                   +
      'return r';
    return Function (codeStr)();
  });
}
