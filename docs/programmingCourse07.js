//sample
//ある世代と次の世代の対応
let rule = [["111", 0],
            ["110", 1],
            ["101", 0],
            ["100", 1],
            ["011", 1],
            ["010", 0],
            ["001", 1],
            ["000", 0]];

function setRule() {
  let items = ["inputtext00", "inputtext01", "inputtext02", "inputtext03", "inputtext04", "inputtext05", "inputtext06", "inputtext07"];
  let i;

  for(i = 0; i < items.length; i++) {
    obj = document.getElementById(items[i]);
    rule[i][1] = obj.value;
  }
}

function applyRule(left_A, A, right_A) {
  let i;
  let oldGeneration = String(left_A) + String(A) + String(right_A);

  for (i = 0; i < rule.length; i++) {
    if (rule[i][0] == oldGeneration) {
      return rule[i][1];
    }
  }
}

function nextGeneration(world) {
  let newWorld = [];

  for (i = 0; i <= 100; i++) {
    // 世界の左端
    if (i == 0) {
      newWorld[i] = applyRule(0         , world[i], world[i+1]);
    // 世界の右端
    } else if (i == 100) {
      newWorld[i] = applyRule(world[i-1], world[i], 0         );
    // 世界の端でないところ
    } else {
      newWorld[i] = applyRule(world[i-1], world[i], world[i+1]);
    }
  }
  return newWorld;
}

function draw1generation (world, context, offset) {
  let i;
  let rect_size = 5;

  context.clearRect(0,offset,505,rect_size);
  context.fillStyle = "rgb(0, 0, 0)";

  for (i=0; i <= 100; i++) {
    if (world[i] == 1) {
      context.fillRect(i*rect_size, offset, rect_size, rect_size);
    }
  }
}

function cellAutomaton() {
  let world=[];
  let canvas, i;

  // テキストボックスの値を読み込んでルールを更新する
  setRule();

  // オートマトンの世界の初期化
  for (i = 0; i <= 100; i++) {
    world[i] = 0;
  }
  world[50] = 1;

  // 描画準備
  canvas = document.getElementById('ID1246');
  context = canvas.getContext('2d');

  for (i = 0; i < 60; i++) {
    draw1generation(world, context, i*5);
    world = nextGeneration(world);
  }
}

window.onload = function () {
  cellAutomaton();
}

function recalc() {
  cellAutomaton();
}
