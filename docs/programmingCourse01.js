// 実行結果を設定する。
function setResult(idstr, resultstr) {
  let obj = document.querySelector(idstr);
  obj.innerHTML = '結果:' + resultstr;
}

// ユーザの入力が正しいか確認する処理
function confirmationTemplate(questionID, resultID, confirmationF) {
  let textField = document.querySelector(questionID);

  try {
    let confirmationResult = confirmationF(textField.value);

    if (confirmationResult) {
      setResult(resultID, '○');
    } else {
      setResult(resultID, '×');
    }
  } catch (e) {
    setResult(resultID, '×(' + String(e) + ')');
  }
}

// 例題1　文字列の比較でチェックする
function kakunin01() {
  confirmationTemplate('#inputBox01', '#result01', function (testStr) {
    let zenkakuSpace = /\u3000+/;         // 全角スペースが1個以上ある
    let pattern = /\s*let\s*height\s*;/;  // \sはスペース、*は0回以上の繰り返し

    if (testStr.match(zenkakuSpace)) {
      return false; 
    } else {
      return testStr.match(pattern);
    }
  });
}

// 例題2　実行してみてチェックする
function kakunin02() {
  confirmationTemplate('#inputBox02', '#result02', function (testStr) {
    let codeStr =
      'maisuu = 0;'         + // あらかじめ別の値を入れておいて変化をみる
      testStr               +
      ';'                   +
      'let r;'              +
      'if(maisuu == 50) {'  +
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
      'schoolname = "";'    + // あらかじめ別の値を入れておいて変化をみる
      testStr               +
      ';'                   +
      'let r;'              +
      'if(schoolname == "日体") {'  +
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
      'function test (yen) {' + // 関数にして何度も呼んでチェック
      testStr                 +
      ';'                   +
      'return kakaku;'        +
      '}'                     +
      'if (test(100)=="安い" && test(999)=="安い" &&' +
      'test(1000)=="高い" &&  test(1001)=="高い") {'  +
      '  r = true;'           +
      '} else {'              +
      '  r = false;'          +
      '}'                     +
      'return r';
    return Function (codeStr)();
  });
}

// 例題5　実行してみてチェックする
function kakunin05() {
  confirmationTemplate('#inputBox05', '#result05', function (testStr) {
    let codeStr =
      'function test (size) {' + // 関数にして何度も呼んでチェック
      testStr                  +
      ';'                      +
      'return message;'        +
      '}'                     +
      'if (test(500)=="big" && test(501)=="big" &&' +
      'test(499)=="normal" &&  test(300)=="normal" &&' + 
      'test(299)=="small" &&  test(0)=="small" ) {'  +
      '  r = true;'           +
      '} else {'              +
      '  r = false;'          +
      '}'                     +
      'return r';
    return Function (codeStr)();
  });
}

// 例題6　文字列チェックと実行してみてチェックの併用
function kakunin06() {
  confirmationTemplate('#inputBox06', '#result06', function (testStr) {
    let pattern = /for/;

    if (testStr.match(pattern)) {
      let codeStr =
        'function test () {' + // 関数にして呼んでチェック
        testStr               +
        ';'                   +
        'return x;'           +
        '}'                   +
        'if (test()==45) {'   +
        '  r = true;'         +
        '} else {'            +
        '  r = false;'        +
        '}'                   +
        'return r';
      return  Function (codeStr)();
    } else {
      return false;
    }
  });
}

