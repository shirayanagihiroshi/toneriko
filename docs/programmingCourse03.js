// 例題1　実行してみてチェックする
function kakunin01() {
  confirmationTemplate('#inputBox01', '#result01', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(plusMinus(-1) == "負の数です" && ' +
      '   plusMinus(0)  == "零です"     && ' +
      '   plusMinus(1)  == "正の数です" ) {' +
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
      'if(myFactorial(1)  == 1 && ' +
      '   myFactorial(2)  == 2 && ' +
      '   myFactorial(3)  == 6 && ' +
      '   myFactorial(4)  == 24 && ' +
      '   myFactorial(5)  == 120 && ' +
      '   myFactorial(10)  == 3628800 ) {' +
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
  reidai3Answer = function (paraA,paraB) {
    let i,
      returnValue = 1;
    for(i = 0; i < paraB; i++) {
      returnValue = returnValue * paraA;
    }
    return returnValue;
  };

  confirmationTemplate('#inputBox03', '#result03', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if( myExp(2,0) == reidai3Answer(2,0) && ' +
      '    myExp(3,1) == reidai3Answer(3,1) && ' +
      '    myExp(4,2) == reidai3Answer(4,2) && ' +
      '    myExp(5,3) == reidai3Answer(5,3) ) {'  +
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
      'if( compareArray(muliple7(1), [7]) &&'                                           +
      '    compareArray(muliple7(2), [7, 14]) &&'                                       +
      '    compareArray(muliple7(5), [7, 14, 21, 28, 35]) &&'                           +
      '    compareArray(muliple7(11), [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77]) ) {' +
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

