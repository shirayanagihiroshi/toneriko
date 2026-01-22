//13

const prepare = [
  "CREATE TABLE students (seitoID INT, gakunen INT, class INT, bangou INT, name TEXT, height INT, weight INT);",
  "INSERT INTO students VALUES (1001, 1, 1, 1 ,'A子', 150, 50);",
  "INSERT INTO students VALUES (1002, 1, 1, 2 ,'B子', 152, 51);",
  "INSERT INTO students VALUES (1003, 1, 1, 3 ,'C子', 149, 51);"
  ];

async function sqlPractice(strs, showstr) {
  try {
    // sql.jsライブラリをロードします
    // locateFileは、sql-wasm.wasmファイルの場所をブラウザに伝えます。
    const SQL = await initSqlJs({
      locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${file}`
    });

    // データベースを作成します (インメモリ)
    const db = new SQL.Database();

    // SQLクエリを実行します
    let i;
    for (i = 0; i < strs.length; i++) {
      db.run(strs[i]);
    }

    // SELECTクエリを実行します
    const res = db.exec(showstr);
    console.log(res);
    /*
    if (res.length > 0) {
      // 結果を表示するためにテーブルを構築します
      const resultTable = document.createElement('table');
      resultTable.innerHTML = `
        <thead>
          <tr>${res[0].columns.map(col => `<th>${col}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${res[0].values.map(row => `<tr>${row.map(val => `<td>${val}</td>`).join('')}</tr>`).join('')}
        </tbody>
      `;
      outputElement.innerHTML += 'クエリ結果:<br>';
      outputElement.appendChild(resultTable);
    } else {
      outputElement.innerHTML += 'クエリの結果が見つかりませんでした。<br>';
    }
*/

    // データベースを閉じます
    db.close();

  } catch (err) {
    console.error("SQL.js 例外:", err);
  }
}



window.onload = function () {
}

// 例題1　SQLを実行してチェックする
function kakunin01() {
  sqlPractice(prepare, "SELECT * FROM students");
/*
  confirmationTemplate('#inputBox01', '#result01', function (testStr) {

    if (testStr == "まず") {
      return true; 
    } else {
      return false;
    }
  });
*/
}

