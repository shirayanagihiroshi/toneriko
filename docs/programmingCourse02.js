// 例題1　文字列チェックと実行してみてチェックの併用
function kakunin01() {
  confirmationTemplateEx('#inputBox01', '#result01', function (testStr) {
    let pattern = /while/;

    if (testStr.match(pattern)) {
      let codeStr =
        'function test () {' + // 関数にして呼んでチェック
        testStr               +
        'return x;'           +
        '}'                   +
        'if (test()==45) {'   +
        '  r = true;'         +
        '} else {'            +
        '  r = false;'        +
        '}'                   +
        'return r';
      return  codeStr;
    } else {
      return false;
    }
  });
}

// 例題2　実行してみてチェックする
function kakunin02() {
  confirmationTemplate('#inputBox02', '#result02', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(flower[0] == "ばら" && flower[1] == "たんぽぽ" && flower[2] == "すみれ" && flower[3] == "さくら") {'  +
      '  r = true;'         +
      '} else {'            +
      '  r = false;'        +
      '}'                   +
      'return r';
    return Function (codeStr)();
  });
}

// 例題3　実行してみてチェックする
function kakunin03() {
  confirmationTemplateEx('#inputBox03', '#result03', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(oddNumber[0] == 1 &&'   +
      '   oddNumber[1] == 3 &&'   +
      '   oddNumber[2] == 5 &&'   +
      '   oddNumber[3] == 7 &&'   +
      '   oddNumber[4] == 9 &&'   +
      '   oddNumber[5] == 11 &&'  +
      '   oddNumber[6] == 13 &&'  +
      '   oddNumber[7] == 15 &&'  +
      '   oddNumber[8] == 17 &&'  +
      '   oddNumber[9] == 19 ) {' +
      '  r = true;'         +
      '} else {'            +
      '  r = false;'        +
      '}'                   +
      'return r';
    return codeStr;
  });
}

// 例題4　実行してみてチェックする
function kakunin04() {
  confirmationTemplate('#inputBox04', '#result04', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(myMath(0) == 4 &&'   +
      '   myMath(1) == 2 &&'   +
      '   myMath(2) == 2 &&'   +
      '   myMath(3) == 4 &&'   +
      '   myMath(4) == 8) {' +
      '  r = true;'         +
      '} else {'            +
      '  r = false;'        +
      '}'                   +
      'return r';
    return Function (codeStr)();
  });
}

// 例題5　実行してみてチェックする
function kakunin05() {
  confirmationTemplateEx('#inputBox05', '#result05', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(myAdd(5,7) == 18    &&' +
      '   myAdd(3,3) == -1    &&' +
      '   myAdd(2,1) == -1    &&' +
      '   myAdd(10,20) == 165 &&' +
      '   myAdd(0,5) == 15 ) {'   +
      '  r = true;'         +
      '} else {'            +
      '  r = false;'        +
      '}'                   +
      'return r';
    return codeStr;
  });
}
