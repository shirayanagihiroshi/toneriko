﻿//11

window.onload = function () {
}

// 例題1　実行してみてチェックする
function kakunin01() {
  confirmationTemplate('#inputBox01', '#result01', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(convert10([0,0,0,0,0,0,0,0]) ==   0 &&' +
      '   convert10([0,0,0,0,0,0,0,1]) ==   1 &&' +
      '   convert10([0,0,0,0,1,0,0,1]) ==   9 &&' +
      '   convert10([0,1,0,0,0,0,1,0]) ==  66 &&' +
      '   convert10([1,0,0,0,0,0,0,0]) == 128 &&' +
      '   convert10([1,1,1,1,1,1,1,1]) == 255){ ' +
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
      'if(sameNetwork([1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0],' + //192.168.100.10
      '               [1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0],' + //192.168.100.130
      '               [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0])' + //255.255.255.0
      '               == true  &&' +
      '   sameNetwork([1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0],' + //192.168.100.10
      '               [1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0],' + //192.168.100.130
      '               [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0])' + // 255.255.255.192
      '               == false){' +
      '  r = true;'         +
      '} else {'            +
      '  r = false;'        +
      '}'                   +
      'return r';
    return Function (codeStr)();
  });
}
