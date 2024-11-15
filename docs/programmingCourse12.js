//12

window.onload = function () {
}

// 例題1　文字列の比較でチェックする
function kakunin01() {
  confirmationTemplate('#inputBox01', '#result01', function (testStr) {

    if (testStr == "お") {
      return true; 
    } else {
      return false;
    }
  });
}

// 例題2　文字列の比較でチェックする
function kakunin02() {
  confirmationTemplate('#inputBox02', '#result02', function (testStr) {

    if (testStr == "あお") {
      return true; 
    } else {
      return false;
    }
  });
}
