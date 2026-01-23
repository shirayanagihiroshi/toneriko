//13

// グローバルスコープにデータベースインスタンスを保持する変数を宣言
let db;

const prepare = [
  "CREATE TABLE students (studentID INT, name TEXT, address TEXT, height INT, weight INT, clubID INT);",
  "INSERT INTO students VALUES (1001, 'A子', 'HH町', 150, 50, 1);",
  "INSERT INTO students VALUES (1002, 'B子', 'HH町', 162, 58, 3);",
  "INSERT INTO students VALUES (1003, 'C子', 'II町', 149, 51, 4);",
  "INSERT INTO students VALUES (1004, 'D子', 'II町', 155, 53, 4);",
  "INSERT INTO students VALUES (1005, 'E子', 'MM町', 144, 48, NULL);",
  "INSERT INTO students VALUES (1006, 'A男', 'HH町', 160, 62, NULL);",
  "INSERT INTO students VALUES (1007, 'B男', 'II町', 158, 59, 1);",
  "INSERT INTO students VALUES (1008, 'C男', 'MM町', 170, 65, 3);",
  "INSERT INTO students VALUES (1009, 'D男', 'KK町', 154, 49, NULL);",
  "INSERT INTO students VALUES (1010, 'E男', 'KK町', 161, 57, 4);",
  "CREATE TABLE club (clubID INT, clubname TEXT);",
  "INSERT INTO club VALUES (1, 'ソフトボール部');",
  "INSERT INTO club VALUES (2, 'ラクロス部');",
  "INSERT INTO club VALUES (3, '協議プログラミング部');",
  "INSERT INTO club VALUES (4, '学食研究会');",
  "CREATE TABLE composition (studentID INT, nendo INT, gakunen INT, class INT, bangou INT);",
  "INSERT INTO composition VALUES (1001, 2024, 1, 1, 1);",
  "INSERT INTO composition VALUES (1002, 2024, 1, 1, 2);",
  "INSERT INTO composition VALUES (1003, 2024, 1, 1, 3);",
  "INSERT INTO composition VALUES (1004, 2024, 1, 1, 4);",
  "INSERT INTO composition VALUES (1005, 2024, 1, 1, 5);",
  "INSERT INTO composition VALUES (1006, 2024, 1, 2, 1);",
  "INSERT INTO composition VALUES (1007, 2024, 1, 2, 2);",
  "INSERT INTO composition VALUES (1008, 2024, 1, 2, 3);",
  "INSERT INTO composition VALUES (1009, 2024, 1, 2, 4);",
  "INSERT INTO composition VALUES (1010, 2024, 1, 2, 5);",
  "INSERT INTO composition VALUES (1001, 2025, 2, 1, 1);",
  "INSERT INTO composition VALUES (1002, 2025, 2, 2, 1);",
  "INSERT INTO composition VALUES (1003, 2025, 2, 2, 2);",
  "INSERT INTO composition VALUES (1004, 2025, 2, 1, 2);",
  "INSERT INTO composition VALUES (1005, 2025, 2, 2, 3);",
  "INSERT INTO composition VALUES (1006, 2025, 2, 1, 3);",
  "INSERT INTO composition VALUES (1007, 2025, 2, 1, 4);",
  "INSERT INTO composition VALUES (1008, 2025, 2, 2, 4);",
  "INSERT INTO composition VALUES (1009, 2025, 2, 1, 5);",
  "INSERT INTO composition VALUES (1010, 2025, 2, 2, 5);"
  ];

// ページの読み込み完了時にデータベースを初期化する
window.onload = async function () {
  let i;

  try {
    // sql.jsの初期化
    const SQL = await initSqlJs({
      locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${file}`
    });

    // グローバル変数にデータベースインスタンスを格納(インメモリ)
    db = new SQL.Database();

    // 予めある程度のデータを設定する。
    for (i = 0; i < prepare.length; i++) {
      db.run(prepare[i]);
    }

    console.log("データベースが初期化され、グローバル変数に保存されました。");

  } catch (err) {
    console.error("データベースの初期化中にエラーが発生しました:", err);
  }

  // ページが閉じられる（アンロードされる）時にイベントリスナーを登録
  window.addEventListener('unload', function () {
    // グローバル変数dbにデータベースインスタンスが存在するか確認
    if (db) {
      // 存在すれば、closeメソッドを呼び出してリソースを解放する
      db.close();
      console.log("ページが閉じられるため、データベースを閉じました。");
    }
  });
};

function showSQLResult(ele, res) {
  let outputElement = document.getElementById(ele);
  outputElement.innerHTML="";
  if (res.length > 0) {
    // 結果を表示するためにテーブルを構築します
    const resultTable = document.createElement('table');
    // テンプレートリテラルは直接入れ子にできないが、
    // テンプレートリテラル中の埋め込み表現（`${...}`）の中では、入れ子にできる。
    resultTable.innerHTML = `
      <thead>
        <tr>${res[0].columns.map(col => `<th>${col}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${res[0].values.map(row => `<tr>${row.map(val => `<td>${val}</td>`).join('')}</tr>`).join('')}
      </tbody>
    `;
    resultTable.border = 1;
    outputElement.innerHTML += 'クエリ結果:<br>';
    outputElement.appendChild(resultTable);
  } else {
    outputElement.innerHTML += 'クエリの結果が見つかりませんでした。<br>';
  }
}

// SQL(insert等)の発行の練習
// こちらが表示内容を決める
function sqlPractice(inputID, showContents, outputID) {
  try {
    if (db) {
      let sqls = document.getElementById(inputID);
      let sqlarr = sqls.value.split(/\r\n|\n/); // /\r\n|\n/ は正規表現。\r\nか\n

      // SQLクエリを実行します
      let i;
      for (i = 0; i < sqlarr.length; i++) {
        if (sqlarr != "") {
          db.run(sqlarr[i]);
        }
      }

      // SELECTクエリを実行します
      const res = db.exec(showContents);
      showSQLResult(outputID, res);
    }
  } catch (err) {
    let outputElement = document.getElementById(outputID);
    outputElement.innerHTML=err;
  }
}

// SQL(select)の発行の練習
// ユーザが表示内容を決める
function sqlPracticeSelect(inputID, outputID) {
  try {
    if (db) {
      let sql = document.getElementById(inputID);
      // SELECTクエリを実行します
      const res = db.exec(sql.value);
      showSQLResult(outputID, res);
    }
  } catch (err) {
    let outputElement = document.getElementById(outputID);
    outputElement.innerHTML=err;
  }
}

// 例題1　SQLを実行してチェックする
function kakunin01() {
  sqlPracticeSelect("inputBox01", "result01");
}

// 例題2　SQLを実行してチェックする
function kakunin02() {
  sqlPracticeSelect("inputBox02", "result02");
}

// 例題3　SQLを実行してチェックする
function kakunin03() {
  sqlPracticeSelect("inputBox03", "result03");
}

// 例題4　SQLを実行してチェックする
function kakunin04() {
  sqlPracticeSelect("inputBox04", "result04");
}

// 例題5　SQLを実行してチェックする
function kakunin05() {
  sqlPracticeSelect("inputBox05", "result05");
}

// 例題6　SQLを実行してチェックする
function kakunin06() {
  sqlPracticeSelect("inputBox06", "result06");
}

// 例題7　SQLを実行してチェックする
function kakunin07() {
  sqlPracticeSelect("inputBox07", "result07");
}

// 例題8　SQLを実行してチェックする
function kakunin08() {
  sqlPracticeSelect("inputBox08", "result08");
}

// 例題9　SQLを実行してチェックする
function kakunin09() {
  sqlPracticeSelect("inputBox09", "result09");
}
