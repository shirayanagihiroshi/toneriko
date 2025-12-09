//10
function getRandom1to100(){
  const array = new Uint16Array(1);
  crypto.getRandomValues(array);
  return (array[0] % 100 + 1);
}

console.log(1-0.99**100);
// 例題1　実行してみてチェックする
function kakunin01() {
  let resultID = '#result01';
  let textField = document.querySelector('#inputBox01');
  let codeStr = textField.value + "return oneGatya()";

  try {
    let result = Function (codeStr)();
    if (result == 1) {
      setResult(resultID, '1');
    } else if (result == 0) {
      setResult(resultID, '0');
    } else {
      setResult(resultID, '1でも0でもない');
    }
  } catch (e) {
    setResult(resultID, '×(' + String(e) + ')');
  }
}

// 例題2　実行してみてチェックする
function kakunin02() {
  let resultID = '#result02';
  let textField1 = document.querySelector('#inputBox01');
  let textField2 = document.querySelector('#inputBox02');
  let codeStr = textField1.value + textField2.value + "return gatya()";

  try {
    let result = Function (codeStr)();
    setResult(resultID, result);
  } catch (e) {
    setResult(resultID, '×(' + String(e) + ')');
  }
}

// 例題3　実行してみてチェックする
function kakunin03() {
  let resultID = '#result03';
  let textField = document.querySelector('#inputBox03');
  let codeStr = textField.value + "return realP()";

  try {
    let result = Function (codeStr)();
    setResult(resultID, result);
  } catch (e) {
    setResult(resultID, '×(' + String(e) + ')');
  }
}
