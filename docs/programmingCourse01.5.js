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

// 例題1-2　実行してみてチェックする
function kakunin012() {
  confirmationTemplate('#inputBox012', '#result012', function (testStr) {
    let codeStr =
      'function test (z) {'  + // 関数にして呼んでチェック
      'let y = z;'          +
      testStr               +
      'return y;'           +
      '}'                   +
      'if(test(10) == 100 && test(1) == 3 && test(2) == 4 && test(21) == 23) {'+
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
  confirmationTemplateEx('#inputBox02', '#result02', function (testStr) {
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
      return  codeStr;
    } else {
      return false;
    }
  });
}

// 例題3　文字列チェックと実行してみてチェックの併用
function kakunin03() {
  confirmationTemplateEx('#inputBox03', '#result03', function (testStr) {
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
      return  codeStr;
    } else {
      return false;
    }
  });
}
