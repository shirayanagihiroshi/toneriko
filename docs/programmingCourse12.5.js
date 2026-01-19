//12.5

window.onload = function () {
  let elementsoushin = document.getElementById("hidesoushin");
  // チェックボックスのチェック状態が変わったら実行される
  elementsoushin.addEventListener("change", function () {
    // チェックでアイテムを非表示に
    let objs = document.getElementsByClassName("soushinhimitsu");
    let v;
    if (elementsoushin.checked) {
      v = "none";
    } else {
      v = "inline";
    }
    for (const obj of objs) {
      obj.style.display = v;
    }
  }, false);

  let elementjyushin = document.getElementById("hidejyushin");
  // チェックボックスのチェック状態が変わったら実行される
  elementjyushin.addEventListener("change", function () {
    // チェックでアイテムを非表示に
    let objs = document.getElementsByClassName("jyushinhimitsu");
    let v;
    if (elementjyushin.checked) {
      v = "none";
    } else {
      v = "inline";
    }
    for (const obj of objs) {
      obj.style.display = v;
    }
  }, false);

  /* 10000以上の素数をいくつかしらべる
  let i, j, sosuu;
  sosuu = []
  for (i = 10000; i < 11000; i++) {
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        break;
      }
    }
    if (i ==j) {
      sosuu.push(i);
    }
  }
  */
}

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

// xが負のとき、正に調整する。
function adjustEquation(a, x, b, y) {
  let newx = x;
  let newy = y;
  while (1) {
    if (newx >= 0) {
      return { x: newx, y: newy };
    }
    newx = newx + b;
    newy = newy - a;
  }
}

/**
 * べき乗の剰余 (base^exp % mod) を計算する
 * @param {bigint} base - 底
 * @param {bigint} exp - 指数
 * @param {bigint} mod - 法
 * @returns {bigint} 計算結果
 */
function powerMod(base, exp, mod) {
  let res = 1n;
  base = base % mod;

  while (exp > 0n) {
    // 指数が奇数の場合、現在の底を結果に掛ける
    if (exp % 2n === 1n) {
      res = (res * base) % mod;
    }
    // 底を二乗する
    base = (base * base) % mod;
    // 指数を半分にする（右シフト）
    exp = exp / 2n;
  }
  return res;
}

const dictionary = ['あ', 'い', 'う', 'え', 'お', 'か', 'が', 'き', 'ぎ', 'く', 'ぐ', 'け', 'げ', 'こ', 'ご', 'さ', 'ざ', 'し', 'じ', 'す', 'ず', 'せ', 'ぜ', 'そ', 'ぞ', 'た', 'だ', 'ち', 'ぢ', 'つ', 'っ', 'づ', 'て', 'で', 'と', 'ど', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ば', 'ぱ', 'ひ', 'び', 'ぴ', 'ふ', 'ぶ', 'ぷ', 'へ', 'べ', 'ぺ', 'ほ', 'ぼ', 'ぽ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゃ', 'ゆ', 'ゅ', 'よ', 'ょ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'];

// ひらがなを数値化する。
function hira2suuti(str){
  let i, j, motobunarr, suutika;

  //ひらがな4文字まで
  if (str.length >= 5) {
    return -1;
  }
  
  suutika = "";
  motobunarr = str.split("");

  for (i = 0; i < motobunarr.length; i++) {
    for (j = 0; j < dictionary.length; j++) {
      if (motobunarr[i] == dictionary[j]) {
        suutika = suutika + String(j+10); //2桁ずつにするため、10スタート
        break;
      }
    }
    if (j == dictionary.length) {
      return -1;//ひらなが以外を使っている場合はエラー
    }
  }
  return suutika;
}

// 数値をひらがなにする。
function suuti2hira(number){
  let i, str, ret;

  ret = [];
  str = String(number);

  for (i = 0; i < str.length; i = i+2) {
    ret = ret + dictionary[Number(str[i]) * 10 + Number(str[i+1])-10];
  }
  return ret;
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
  let primep, primeq, koukaikeye, obj;

  test = function (a, x, b, y) {
    return (a * x) + (b * y)
  }

  primep = getSelectValue("primep");

  primeq = getSelectValue("primeq");

  koukaikeye = getSelectValue("koukaikey");

  if (primep == primeq || primeq == koukaikeye || koukaikeye == primep) {
    alert("p, q, eは異なる数を選んでね");
  } else {
    /* 鍵の生成 */
    let temp = solveEquation(koukaikeye, (primep - 1)*(primeq - 1));
    let obj = adjustEquation(koukaikeye, temp.x, (primep - 1)*(primeq - 1), temp.y);
    setTextbox("koukaikeym", String(primep * primeq));
    setTextbox("koukaikeye", String(koukaikeye));
    setTextbox("himitsukey", String(obj.x));
  }
}

function generatesoushindata () {
  let element, keyn, keye, motobun, suutika, angoubun;

  keyn = getSelectValue("koukaikeymsoushin");
  keye = getSelectValue("koukaikeyesoushin");
  element = document.getElementById("motobun");
  motobun = element.value;

  console.log("motobun.length", motobun.length);
  suutika = hira2suuti(motobun);
  if (suutika == -1) {
    alert("元の文はひらがな4文字までです");
  }
  setTextbox("suutikabun", suutika);

  angoubun = Number(powerMod(BigInt(suutika), BigInt(keye), BigInt(keyn)));
  setTextbox("angoubun", String(angoubun));
}

function fukugou() {
  let koukaikeyn = getSelectValue("koukaikeyfukugou");
  let himitsukey2 = getSelectValue("himitsukey2");
  let angoubun2 = getSelectValue("angoubun2");

  let motobun = Number(powerMod(BigInt(angoubun2), BigInt(himitsukey2), BigInt(koukaikeyn)));
  setTextbox("fukugou", motobun);
  setTextbox("fukugou2", suuti2hira(motobun));
}

