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

// 例題1　文字列チェックと実行してみてチェックの併用
function kakunin01() {
  confirmationTemplate('#inputBox01', '#result01', function (testStr) {
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
      return  Function (codeStr)();
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


