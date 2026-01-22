//14

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
      'if(myAverage([6, 8]) == 7     && ' +
      '   myAverage([6, 7]) == 6.5   && ' +
      '   myAverage([10, 11, 12, 13, 20, 25, 30, 60]) == 22.625)  {'  +
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
  confirmationTemplate('#inputBox02', '#result02', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(myMode(["りんご", "りんご", "みかん", "ぶどう"]) == "りんご"     && ' +
      '   myMode(["りんご", "みかん","みかん","みかん","みかん"]) == "みかん"   && ' +
      '   myMode(["みかん", "みかん", "みかん", "ぶどう", "ぶどう", "ぶどう", "ぶどう"]) == "ぶどう")  {'  +
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
  confirmationTemplate('#inputBox03', '#result03', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(myMedian([2, 5, 1]) == 2       && ' +
      '   myMedian([1, 9, 8, 3]) == 5.5  && ' +
      '   myMedian([2,1,4,7,2,4,5,8,9,3,6,2,7,5,4,6,9,1,2,5,6,7,7,3,5]) == 5)  {'  +
      '  r = true;'         +
      '} else {'            +
      '  r = false;'        +
      '}'                   +
      'return r';
    return Function (codeStr)();
  });
}

// 例題4　実行してみてチェックする
function kakunin04() {
  confirmationTemplate('#inputBox04', '#result04', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(roundAt3decimalpoint(myVariance([1,3,5,6,7,8,9])) == 6.82 && ' +
      '   roundAt3decimalpoint(myVariance([1,5,3,6,8,4,3,6,2,8,4])) == 4.79 )  {'  +
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
  confirmationTemplate('#inputBox05', '#result05', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(roundAt3decimalpoint(myCC([[5,3],[6,5],[4,7],[10,12],[8,7],[6,9],[9,10],[2,3],[2,5],[7,7]])) == 0.79 && ' +
      '   roundAt3decimalpoint(myCC([[1,10],[2,10],[3,6],[4,6],[5,4],[6,4],[6,3],[8,2],[8,1],[10,3]])) == -0.89 )  {'  +
      '  r = true;'         +
      '} else {'            +
      '  r = false;'        +
      '}'                   +
      'return r';
    return Function (codeStr)();
  });
}
