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
