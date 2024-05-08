// 例題1　実行してみてチェックする
function kakunin01() {
  confirmationTemplate('#inputBox01', '#result01', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(fizzbuzz(1) == "-"     && fizzbuzz(2) == "-"    && fizzbuzz(3) == "fizz"  &&' +
      '   fizzbuzz(4) == "-"     && fizzbuzz(5) == "buzz" && fizzbuzz(6) == "fizz"  &&' +
      '   fizzbuzz(7) == "-"     && fizzbuzz(8) == "-"    && fizzbuzz(9) == "fizz"  &&' +
      '   fizzbuzz(10) == "buzz" && fizzbuzz(11) == "-"   && fizzbuzz(12) == "fizz" &&' +
      '   fizzbuzz(13) == "-"    && fizzbuzz(14) == "-"   && fizzbuzz(15) == "fizzbuzz" &&' +
      '   fizzbuzz(16) == "-"    && fizzbuzz(17) == "-"   && fizzbuzz(18) == "fizz" &&' +
      '   fizzbuzz(19) == "-"    && fizzbuzz(20) == "buzz" && fizzbuzz(21) == "fizz" ) {'  +
      '  r = true;'         +
      '} else {'            +
      '  r = false;'        +
      '}'                   +
      'return r';
    return Function (codeStr)();
  });
}

