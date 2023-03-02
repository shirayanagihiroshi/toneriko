'use strict';

//------モジュールスコープ変数s--------
  const fs       = require('fs'),
        iconv    = require('iconv-lite'),
        outputFile = 'scoringResult.csv';
  let   answer, records, data, str, i, j;

  // ア,イ,ウ,エ,オ,カ,キ,ク,ケ,コ,サ,シ,ス,セ,ソ,タ,チ,ツ,テ,ト,ナ,ニ,ヌ,ネ,ノ,ハ,ヒ,フ,ヘ,ホ
  // 答えの設定
  // 得点を与える問題ごとに要素を作る
  // ans   : 正解(配列)
  // score : 配点
  // kind  : 0 指定の解のみ許容
  //         1 順不同でよい(この場合は上記scoreをそれぞれに与える)
  answer = [{ans  : [2],         score : 1, kind : 0}, // 1
             {ans : [4],         score : 1, kind : 0},
             {ans : [6],         score : 1, kind : 0},
             {ans : [1],         score : 1, kind : 0},
             {ans : [9],         score : 1, kind : 0},
             {ans : [7],         score : 1, kind : 0},

             {ans : [2],         score : 1, kind : 0}, // 2
             {ans : [5],         score : 1, kind : 0},
             {ans : [6,7],       score : 1, kind : 1},
             {ans : [3],         score : 1, kind : 0},

             {ans : [2],         score : 1, kind : 0}, // 3
             {ans : [4],         score : 1, kind : 0},
             {ans : [1],         score : 1, kind : 0},
             {ans : [3],         score : 1, kind : 0},

             {ans : [3],         score : 1, kind : 0}, // 4
             {ans : [1],         score : 1, kind : 0},
             {ans : [2],         score : 1, kind : 0},

             {ans : [2],         score : 1, kind : 0}, // 5
             {ans : [1,3],       score : 1, kind : 1},

             {ans : [9],         score : 1, kind : 0}, // 6
             {ans : [1],         score : 1, kind : 0},
             {ans : [2],         score : 1, kind : 0},
             {ans : [5],         score : 1, kind : 0},
             {ans : [6],         score : 1, kind : 0},
             {ans : ['A'],       score : 1, kind : 0},
             {ans : ['D'],       score : 1, kind : 0},
             {ans : ['B'],       score : 1, kind : 0},
             {ans : [3],         score : 1, kind : 0},

             {ans : [4],         score : 1, kind : 0}, // 7
             {ans : [5],         score : 1, kind : 0},
             {ans : [1],         score : 1, kind : 0},
             {ans : [2],         score : 1, kind : 0},
             {ans : [3],         score : 1, kind : 0},

             {ans : [3],         score : 1, kind : 0}, // 8
             {ans : [5],         score : 1, kind : 0},
             {ans : [4],         score : 1, kind : 0},
             {ans : [2],         score : 1, kind : 0},
             {ans : [1],         score : 1, kind : 0},

             {ans : [6],         score : 1, kind : 0}, // 9
             {ans : [1],         score : 1, kind : 0},
             {ans : [7],         score : 1, kind : 0},
             {ans : [3],         score : 1, kind : 0},
             {ans : [4],         score : 1, kind : 0},
             {ans : [5],         score : 1, kind : 0},

             {ans : [2],         score : 1, kind : 0}, // 10
             {ans : [5],         score : 1, kind : 0},
             {ans : [7],         score : 1, kind : 0},
             {ans : [1],         score : 1, kind : 0},
             {ans : [6],         score : 1, kind : 0},
             {ans : [3],         score : 1, kind : 0},
             {ans : [4],         score : 1, kind : 0},
             {ans : [9],         score : 1, kind : 0},

             {ans : [2],         score : 1, kind : 0}, // 11
             {ans : [4],         score : 1, kind : 0},
             {ans : [1],         score : 1, kind : 0},
             {ans : [8],         score : 1, kind : 0},
             {ans : [3],         score : 1, kind : 0},
             {ans : [5],         score : 1, kind : 0},
             {ans : [9],         score : 1, kind : 0},
             {ans : [7],         score : 1, kind : 0},

             {ans : [9],         score : 1, kind : 0}, // 12
             {ans : [5],         score : 1, kind : 0},
             {ans : [4],         score : 1, kind : 0},
             {ans : [3],         score : 1, kind : 0},
             {ans : [6],         score : 1, kind : 0},
             {ans : [2],         score : 1, kind : 0},
             {ans : [8],         score : 1, kind : 0},
             {ans : [7],         score : 1, kind : 0}
           ];

//------ユーティリティメソッドs--------
//------ユーティリティメソッドe--------

//------メイン部s--------
  if ( process.argv[2] != null ) {   // コマンドライン引数でcsvファイル名を指定
     data = fs.readFileSync(process.argv[2]);
     if ( data != null ) {
       str = iconv.decode(data, 'Shift_JIS');

       // 結果ファイルの用意
       fs.writeFileSync(outputFile, 'scoringResult\n');

       records = str.split(/\n/);        // 改行で区切る。これが一人分。
       for (i = 0; i < records.length; i++) {
         let markPos = 2, //マー君の仕様上、最初は通番、次はIDで、2から回答の内容
             personScore = 0,
             record = records[i].split(','); // さらにコンマで区切る。これがマーク単位。
                                             // 一人分を採点できる形にしたもの
         // 答えを設定したかたまり毎のloop
         // なお、マイナスなどがあるので、すべて文字列として比較する
         for (j = 0; j < answer.length; j++) {
           let k;

           // 指定の解(の順)のみ許容
           if ( answer[j].kind == 0 ) {
             let incorrectFlg = false;

             for (k = 0; k < answer[j].ans.length; k++, markPos++) {
               if ( String(answer[j].ans[k]) != String(record[markPos]) ) {
                 incorrectFlg = true;
               }
             }
             if (!incorrectFlg) {
               personScore += answer[j].score;
             }

           // 順不同
           } else if ( answer[j].kind == 1)  {
             let lst = [];

             // この回答に対するマーク内容をリストにして
             for (k = 0; k < answer[j].ans.length; k++, markPos++) {
               lst.push( String(record[markPos]) );
             }
             // 該当の正解を含んでいれば加点
             for (k = 0; k < answer[j].ans.length; k++) {
               if ( lst.includes( String(answer[j].ans[k]) ) ) {
                 personScore += answer[j].score;
               }
             }
           }
         }
         // 結果を書き込み
         if (i != 0) {
           fs.appendFileSync(outputFile, record[0] + ',' + record[1] + ',' + String(personScore) + '\n');
         }
       }
     }
  } else {
    console.log("ファイル名を指定してください。例 node scoring xxxx.csv");
  }
//------メイン部e--------
