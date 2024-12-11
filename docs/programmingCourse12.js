//12

const dictionary = ['あ', 'い', 'う', 'え', 'お', 'か', 'が', 'き', 'ぎ', 'く', 'ぐ', 'け', 'げ', 'こ', 'ご', 'さ', 'ざ', 'し', 'じ', 'す', 'ず', 'せ', 'ぜ', 'そ', 'ぞ', 'た', 'だ', 'ち', 'ぢ', 'つ', 'っ', 'づ', 'て', 'で', 'と', 'ど', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ば', 'ぱ', 'ひ', 'び', 'ぴ', 'ふ', 'ぶ', 'ぷ', 'へ', 'べ', 'ぺ', 'ほ', 'ぼ', 'ぽ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゃ', 'ゆ', 'ゅ', 'よ', 'ょ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん', 'A', 'B', 'C'];

window.onload = function () {
}

// 例題1　文字列の比較でチェックする
function kakunin01() {
  confirmationTemplate('#inputBox01', '#result01', function (testStr) {

    if (testStr == "まず") {
      return true; 
    } else {
      return false;
    }
  });
}

// 例題2　文字列の比較でチェックする
function kakunin02() {
  confirmationTemplate('#inputBox02', '#result02', function (testStr) {

    if (testStr == "かお") {
      return true; 
    } else {
      return false;
    }
  });
}

// 例題3　実行してみてチェックする
function kakunin03() {
  confirmationTemplate('#inputBox03', '#result03', function (testStr) {
    let codeStr =
      testStr               +
      ';'                   +
      'let r;'              +
      'if(myEncrypt("ほし")                       == "まず" &&' +
      '   myEncrypt("あおぞら")                   == "えきちれ" &&' +
      '   myEncrypt("うくらいな")                 == "かげれおね" &&' +
      '   myEncrypt("ひかるげんじ")               == "ふぎわさCせ" &&' +
      '   myEncrypt("ちゅうしんきょくげんていり") == "っらかずCぐるげさCどおろ" ){ ' +
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
      'if(myDecrypt("かも")               == "うみ" &&' +
      '   myDecrypt("つおざC")            == "だいこん" &&' +
      '   myDecrypt("かねけぴお")         == "うなぎぱい" &&' +
      '   myDecrypt("えろぜにどをぜ")     == "ありすとてれす" &&' +
      '   myDecrypt("へぎCたCぞおどおろ") == "ふかんぜんせいていり" ){ ' +
      '  r = true;'         +
      '} else {'            +
      '  r = false;'        +
      '}'                   +
      'return r';
    return Function (codeStr)();
  });
}
