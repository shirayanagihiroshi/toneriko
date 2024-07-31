// 例題1　文字列の比較でチェックする
function kakunin01() {
  confirmationTemplate('#inputBox01', '#result01', function (testStr) {
    if (testStr == "アルゴリズム" || testStr == "algorithm") {
      return true; 
    } else {
      return false;
    }
  });
}

// 例題2　文字列の比較でチェックする
function kakunin02() {
  confirmationTemplate('#inputBox02', '#result02', function (testStr) {
    if (testStr == "プログラミング" || testStr == "programming") {
      return true; 
    } else {
      return false;
    }
  });
}

// 例題3　文字列の比較でチェックする
function kakunin03() {
  confirmationTemplate('#inputBox03', '#result03', function (testStr) {
    if (testStr == "アルゴリズム" || testStr == "algorithm") {
      return true; 
    } else {
      return false;
    }
  });
}
