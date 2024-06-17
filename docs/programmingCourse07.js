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

window.onload = function () {
  let world=[];
  let table = document.getElementById("ID1246");
  let tr, td, i, j;

  //オートマトンの世界の初期化
  for (i = 0; i <= 100; i++) {
    world[i] = 0;
  }
  world[50] = 1;

  // 画面表示用テーブルの初期化
  // 静的に<td></td>を沢山書くこともできるが、それは面倒なのでこのように生成
  for (j = 0; j < 60; j++) {
    tr = document.createElement("tr");
    for (i = 0; i <= 100; i++) {
      td = document.createElement("td");
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  // メインの処理
  for (j = 0; j < table.rows.length; j++) {
    for (i = 0; i < table.rows[j].cells.length; i++) {
      let cellColor;
      if (world[i] == 1) {
        cellColor = "black";
      } else {
        cellColor = "#b0e0e6";
      }
      table.rows[j].cells[i].style.backgroundColor = cellColor;
    }
    world = nextGeneration(world);
  }
}
