// 例題1　実行してみてチェックする
function kakunin01() {
  confirmationTemplate('#inputBox01', '#result01', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(checkSeijin({name:"ひろし", age:18}) == "ひろしは成人"   && ' +
      '   checkSeijin({name:"たけし", age:17}) == "たけしは未成年" && ' +
      '   checkSeijin({name:"しげる", age:20}) == "しげるは成人"   && ' +
      '   checkSeijin({name:"aa", age:0}) == "aaは未成年") {' +
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
      'let testData1 = [ {math:10, english:12},  ' +
      '                  {math:20, english:22},  ' +
      '                  {math:30, english:32},  ' +
      '                  {math:40, english:42},  ' +
      '                  {math:50, english:52}]; ' +
      'let testData2 = [ {math:10, english:20},  ' +
      '                  {math:20, english:30},  ' +
      '                  {math:30, english:40},  ' +
      '                  {math:40, english:50},  ' +
      '                  {math:50, english:60},  ' +
      '                  {math:60, english:10}]; ' +
      'let testData3 = [ {math:13, english:10},  ' +
      '                  {math:23, english:20},  ' +
      '                  {math:33, english:30},  ' +
      '                  {math:43, english:40},  ' +
      '                  {math:53, english:50},  ' +
      '                  {math:63, english:60},  ' +
      '                  {math:73, english:70}]; ' +
      'if( mathOrEnglish(testData1) == "english" &&' +
      '    mathOrEnglish(testData2) == "same"    &&' +
      '    mathOrEnglish(testData3) == "math" ) {' +
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
      testStr               +
      ';'                   +
      'let r;'              +
      'let testData1 = [ { name:"ひろし", ' +
      '                    math:5 },      ' +
      '                  { name:"たけし", ' +
      '                    math:95 },     ' +
      '                  { name:"しげる", ' +
      '                    math:94 }];    ' +
      'let testData2 = [ { name:"ひろし", ' +
      '                    math:15 },     ' +
      '                  { name:"たけし", ' +
      '                    math:85 },     ' +
      '                  { name:"しげる", ' +
      '                    math:97 },     ' +
      '                  { name:"たま",   ' +
      '                    math:99 }];    ' +
      'let testData3 = [ { name:"ひろし", ' +
      '                    math:0 },      ' +
      '                  { name:"たけし", ' +
      '                    math:0 },      ' +
      '                  { name:"しげる", ' +
      '                    math:0 },      ' +
      '                  { name:"たま",   ' +
      '                    math:100 },    ' +
      '                  { name:"みけ",   ' +
      '                    math:100 }];   ' +
      'if(goodAtMath(testData1)  == "たけし" && ' +
      '   goodAtMath(testData2)  == "たま" && ' +
      '   goodAtMath(testData3)  == "たま,みけ" ) {' +
      '  r = true;'         +
      '} else {'            +
      '  r = false;'        +
      '}'                   +
      'return r';
    return Function (codeStr)();
  });
}

// 例題4　文字列チェックと実行してみてチェックの併用
function kakunin04() {
  confirmationTemplate('#inputBox04', '#result04', function (testStr) {
    let pattern = /filter/;

    if (testStr.match(pattern)) {
      let codeStr =
        testStr               +
        'if ( compareArray(oddArray([1,2,3,4,5,6,7]), [1,3,5,7])      && ' +
        '     compareArray(oddArray([1]), [1])                        && ' +
        '     compareArray(oddArray([1,3,5,7,9,11]), [1,3,5,7,9,11]) )  {' +
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

