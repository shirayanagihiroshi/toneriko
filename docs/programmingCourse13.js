//13

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

function kakunin03() {
}

function kakunin04() {
}

function kakunin05() {
}
