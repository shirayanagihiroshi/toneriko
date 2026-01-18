//12.5

/**
 * 拡張ユークリッドの互除法を用いて、ax + by = gcd(a, b) を満たす整数x, yを求める
 * @param {number} a 整数
 * @param {number} b 整数
 * @returns {{gcd: number, x: number, y: number}} 最大公約数と、方程式を満たすx, yのオブジェクト
 */
function extendedEuclideanAlgorithm(a, b) {
  if (b == 0) {
    return { gcd: a, x: 1, y: 0 };
  } else {
    const { gcd, x, y } = extendedEuclideanAlgorithm(b, a % b);
    const newX = y;
    const newY = x - Math.floor(a / b) * y;
    return { gcd: gcd, x: newX, y: newY };
  }
}

/**
 * 1次不定方程式 ax + by = 1 を解く
 * @param {number} a 互いに素な整数
 * @param {number} b 互いに素な整数
 * @returns {{x: number, y: number} | null} 解(x, y)のオブジェクト、または解がない場合はnull
 */
function solveEquation(a, b) {
  const result = extendedEuclideanAlgorithm(a, b);
  if (result.gcd != 1) {
    // aとbが互いに素でない場合、ax + by = 1 の整数解は存在しない
    console.error("入力されたaとbは互いに素ではありません。");
    return null;
  }
  return { x: result.x, y: result.y };
}

// プルダウンのIDから、選択されている値を取得する
function getSelectValue(IDstr) {
  let element = document.getElementById(IDstr);
  return Number(element.value);
}

// テキストボックスへ文字列を設定
function setTextbox(IDstr, str) {
  let element = document.getElementById(IDstr);
  element.value = str;
}

function generatekey () {
  let primep, primeq, koukaikey;

  primep = getSelectValue("primep");

  primeq = getSelectValue("primeq");

  koukaikey = getSelectValue("koukaikey");

  if (primep == primeq || primeq == koukaikey || koukaikey == primep) {
    console.log("異なる数を選んでね");
  } else {
    setTextbox("koukaikeym", String(primep * primeq));
  }
  // --- 使用例 ---
const a2 = 8;
const b2 = 3;
const solution2 = solveEquation(a2, b2);
if (solution2) {
   console.log(`\n方程式 ${a2}x + ${b2}y = 1 の解は:`);
   console.log(`x = ${solution2.x}, y = ${solution2.y}`);
   console.log("検算:");
   console.log(`${a2} * (${solution2.x}) + ${b2} * (${solution2.y}) = ${a2 * solution2.x + b2 * solution2.y}`);
}
}

const dictionary = ['あ', 'い', 'う', 'え', 'お', 'か', 'が', 'き', 'ぎ', 'く', 'ぐ', 'け', 'げ', 'こ', 'ご', 'さ', 'ざ', 'し', 'じ', 'す', 'ず', 'せ', 'ぜ', 'そ', 'ぞ', 'た', 'だ', 'ち', 'ぢ', 'つ', 'っ', 'づ', 'て', 'で', 'と', 'ど', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ば', 'ぱ', 'ひ', 'び', 'ぴ', 'ふ', 'ぶ', 'ぷ', 'へ', 'べ', 'ぺ', 'ほ', 'ぼ', 'ぽ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゃ', 'ゆ', 'ゅ', 'よ', 'ょ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん', 'A', 'B', 'C'];

window.onload = function () {
  let element, primep, primeq, koukaikey;
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
