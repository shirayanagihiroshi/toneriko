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

// 配列比較関数
function compareArray(arrayA, arrayB) {
  let retval = false;
  if ( (Array.isArray(arrayA) == true) &&
       (Array.isArray(arrayB) == true) &&
       (arrayA.length == arrayB.length) ) {
    let i, num = arrayA.length;
    for (i = 0; i < num; i++) {
      if (arrayA[i] == arrayB[i]) {
        if(i == num - 1) {
          retval = true;
        }
      } else {
        break;
      }
    }
  }
  return retval;
}
