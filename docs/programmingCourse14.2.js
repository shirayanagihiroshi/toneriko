//14
const mydata=
[{x:20,y:22},
 {x:20,y:26},
 {x:17,y:17},
 {x:18,y:18},
 {x:19,y:17},
 {x:20,y:20},
 {x:21,y:20},
 {x:22,y:22},
 {x:23,y:20},
 {x:24,y:23},
 {x:25,y:24},
 {x:26,y:26},
 {x:27,y:21},
 {x:28,y:27},
 {x:29,y:28},
 {x:30,y:29},
 {x:31,y:29},
 {x:21,y:15},
 {x:25,y:20},
 {x:25,y:31},
 {x:28,y:30},
 {x:18,y:19},
 {x:20,y:18},
 {x:22,y:21},
 {x:24,y:26},
 {x:26,y:28},
 {x:28,y:22},
 {x:24,y:17},
 {x:22,y:27},
 {x:30,y:33}];

// 小数第3位で四捨五入
function roundAt3decimalpoint(x) {
  return (Math.round(x * 100) / 100);
}

window.onload = function () {
}

// 例題1　実行してみてチェックする
function kakunin01() {
  confirmationTemplate('#inputBox01', '#result01', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(roundAt3decimalpoint(zansaSquare(19, 20, 1.3, 0.8)) == 30.25 && ' +
      '   roundAt3decimalpoint(zansaSquare(17, 16, 0.7, 2.2)) ==  3.61 && ' +
      '   roundAt3decimalpoint(zansaSquare(21, 24, 1.1, 1.5)) ==  0.36 ){'  +
      '  r = true;'         +
      '} else {'            +
      '  r = false;'        +
      '}'                   +
      'return r';
    return Function (codeStr)();
  });
}

// 例題2　実行してみてチェックする
function kakunin02() {
  let textField1 = document.querySelector('#inputBox01');

  confirmationTemplate('#inputBox02', '#result02', function (testStr) {
    let codeStr =
      textField1.value        +
      ';'                     +
      testStr                 +
      ';'                     +
      'let temp, r;'          +
      'temp = myPredict();' +
      'if(roundAt3decimalpoint(temp.a) == 0.89 && ' +
      '   roundAt3decimalpoint(temp.b) == 2.05 ) {' +
      '  r = true;'           +
      '} else {'              +
      '  r = false;'          +
      '}'                     +
      'return r';
    return Function (codeStr)();
  });

  let obj = document.querySelector('#result02');
  if (obj.innerHTML == '結果:○') {
    obj.innerHTML = obj.innerHTML + '<br>a:0.89, b:2.05';
  }
}
