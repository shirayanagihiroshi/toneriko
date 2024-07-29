// 例題1　実行してみてチェックする
function kakunin01() {
  confirmationTemplate('#inputBox01', '#result01', function (testStr) {
    let codeStr =
      'let y = 100;'        + // あらかじめ別の値を入れておいて変化をみる
      testStr               +
      ';'                   +
      'let r;'              +
      'if(y == 200) {'      +
      '  r = true;'         +
      '} else {'            +
      '  r = false;'        +
      '}'                   +
      'return r';
    return Function (codeStr)();
  });
}

// 例題2　文字列チェックと実行してみてチェックの併用
function kakunin02() {
  confirmationTemplate('#inputBox02', '#result02', function (testStr) {
    let pattern = /for/;

    if (testStr.match(pattern)) {
      let codeStr =
        'function test () {' + // 関数にして呼んでチェック
        "sum = 0;"           +
        testStr              +
        ';'                  +
        'return sum;'        +
        '}'                  +
        'if (test()==210) {' +
        '  r = true;'        +
        '} else {'           +
        '  r = false;'       +
        '}'                  +
        'return r';
      return  Function (codeStr)();
    } else {
      return false;
    }
  });
}

// 例題3　文字列チェックと実行してみてチェックの併用
function kakunin03() {
  confirmationTemplate('#inputBox03', '#result03', function (testStr) {
    let pattern = /for/;

    if (testStr.match(pattern)) {
      let codeStr =
        'function test () {' + // 関数にして呼んでチェック
        "sum = 0;"           +
        testStr              +
        ';'                  +
        'return sum;'        +
        '}'                  +
        'if (test()==275) {' +
        '  r = true;'        +
        '} else {'           +
        '  r = false;'       +
        '}'                  +
        'return r';
      return  Function (codeStr)();
    } else {
      return false;
    }
  });
}
