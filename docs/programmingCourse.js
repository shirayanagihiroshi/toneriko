// Workerの中身を定義
const workerCode = `
  // console.logを上書き（メインに送る）
  console.log = (...args) => postMessage({ type: 'log', message: args.join(' ') });

  // 配列比較関数 スレッドが違うのでここにも記載
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

  onmessage = (e) => {
    try {
      // 受け取ったコードを Function として実行
      const userFunc = new Function(e.data.testcontents);
      const v = userFunc(); // 実行
      postMessage({ type     : 'done',
                    retval   : v,
                    resultid : e.data.resultid });
    } catch (err) {
      postMessage({ type     : 'error',
                    message  : err.message,
                    resultid : e.data.resultid });
    }
  };
`;

let worker;
let timerid = null;

// Workerを生成し、メッセージハンドラを設定する関数
function createWorker() {
  const blob = new Blob([workerCode], { type: "application/javascript" });
  worker = new Worker(URL.createObjectURL(blob));

  // 新しいWorkerインスタンスにメッセージハンドラを設定
  worker.onmessage = (e) => {
    const data = e.data;
    if (data.type === "debug") {
      console.log('Debug from Worker:', data.message);
      return;
    }

    if (data.type === "log") {
      const obj = document.querySelector(data.resultid);
      if (obj) {
        obj.innerHTML += `<br>ログ: ${data.message}`;
      }
    } else if (data.type === "error") {
      setResult(data.resultid, '×(' + data.message + ')');
    } else if (data.type === "done") {
      if (data.retval == true) {
        setResult(data.resultid, '○');
      } else {
        setResult(data.resultid, '×');
      }
    }

    // 無限ループ監視用タイマーをキャンセル
    if (timerid) {
      clearTimeout(timerid);
      timerid = null;
    }
  };
}

// 最初に一度Workerを生成する
createWorker();

function postMessageToWorker(obj){
  // Workerにコードを送信
  worker.postMessage(obj);
}

// 実行結果を設定する。
function setResult(idstr, resultstr) {
  let obj = document.querySelector(idstr);
  obj.innerHTML = '結果:' + resultstr;
}

// ユーザの入力が正しいか確認する処理 worker版
// confirmationTemplateとパラメータはほぼ同じだが、
//    return Function (codeStr)();
// を
//    return codeStr;
// と変更すること
function confirmationTemplateEx(questionID, resultID, confirmationF) {
  let textField = document.querySelector(questionID);

  // パターンマッチでダメなことが分かるなら、その時点で結果が分かる。
  if (confirmationF(textField.value) == false) {
    setResult(resultID, '×(問題文の指示に従ってね)');

  // ある程度真っ当なコードはweb Workerで検査
  } else {
    postMessageToWorker({
      testcontents : confirmationF(textField.value),
      resultid     : resultID
    });

    // タイムアウト（無限ループ対策）
    timerid = setTimeout(() => {
      createWorker();
      setResult(resultID, '×(無限ループを検出しました)');
    }, 2000);
  }
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
