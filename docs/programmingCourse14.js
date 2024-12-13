//14
let canvas, context, myTimer1, myTimer2;
let balls = [];
let graph = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// Math.random()は0以上1未満のランダムな値を生成する
// getRandam()は 0 or 1 をランダムで返す。
function getRandam(){
  if (Math.random() >= 0.5) {
    return 1;
  } else {
    return 0;
  }
}

function createBall () {
  return {x:198, y:0};
}

function removeBall (x, y) {
  return function (target) {
    if (target.x != x || target.y != y) {
      return true;
    } else {
      return false;
    }
  }
}

function x2idx(x) {
  return (x - 3) / 10;
}

function fillrectLine(context, x, y1, y2) {
  context.fillRect(x, y1, 2, y2-y1);
}

function fillrectpoint(context, x, y) {
  context.fillRect(x, y, 2, 2);
}

function fillrectrect(context, x, y) {
  context.fillRect(x, y, 6, 6);
}

function intervalFunction() {
  let i;

  for (i = 0; i < balls.length; i++) {

    // 背景色で上書きして消す
    context.fillStyle = "rgb(176, 224, 230)"; //背景色
    fillrectrect(context, balls[i].x, balls[i].y);

    // ピンが並んでるゾーンなら
    if (balls[i].y < 390) {
      // ピンにぶつかるとき
      if(balls[i].y % 10 == 2) {
        if (getRandam() == 1) {
          balls[i].x = balls[i].x + 5;
        } else {
          balls[i].x = balls[i].x - 5;
        }
      }
      balls[i].y = balls[i].y + 2;

      context.fillStyle = "rgb(255, 0, 0)";
      fillrectrect(context, balls[i].x, balls[i].y);

    // 管に入ったら
    } else {

      // 底に着いたら止まる。(描画してからボールデータを消す)
      if (690 - graph[x2idx(balls[i].x)] * 6 == balls[i].y) {
        context.fillStyle = "rgb(255, 0, 0)";
        fillrectrect(context, balls[i].x, balls[i].y);

        graph[x2idx(balls[i].x)] = graph[x2idx(balls[i].x)] + 1;
        balls = balls.filter(removeBall(balls[i].x, balls[i].y));

      // まだ底についてない
      } else {
        balls[i].y = balls[i].y + 6;
        context.fillStyle = "rgb(255, 0, 0)";
        fillrectrect(context, balls[i].x, balls[i].y);
      }
    }
  }
}

function addBall() {
  balls.push(createBall());
}

window.onload = function () {
  canvas = document.getElementById('ID1260');
  context = canvas.getContext('2d');
                      // R G Bの順。0から255で設定
  context.fillStyle = "rgb(0, 0, 0)";

  let i, j, k;

  // ドットを打つ
  k = 1;
  for (i = 0; i < 39; i++) {
    for (j = 0; j < k; j++) {
      fillrectpoint(context,10 * 20 + 10 * j - 5 * i, 10 * i + 10);
    }
    k++;
  }
  //線を書く
  for (i = 0; i < 41; i++) {
    fillrectLine(context, i * 10, 400, 700);
  }

  // タイマー開始
  myTimer1 = setInterval(intervalFunction, 20);
  myTimer2 = setInterval(addBall, 800);
}

function cancelTimer() {
  clearTimeout(myTimer1)
  clearTimeout(myTimer2)
}
