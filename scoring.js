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
  answer = [{ans  : [4,8,4,'A',8],    score : 8, kind : 0},
             {ans : [1,4,'B',1,'A'],  score : 8, kind : 0},
             {ans : [7,'A',5,6,'A'],  score : 8, kind : 0},
             {ans : [1,'A',7,4,5],    score : 8, kind : 0},
             {ans : [5,9,8,9,8],      score : 8, kind : 0},
             {ans : [5,1,6],          score : 8, kind : 0},
             {ans : [4],              score : 5, kind : 0},
             {ans : [1,8,5,1,8,5],    score : 8, kind : 0},
             {ans : [6,6,6],          score : 8, kind : 0},
             {ans : ['B',6,1,5],      score : 8, kind : 0},
             {ans : [7,4,3,6],        score : 5, kind : 0},
             {ans : [8,6,4,'C'],      score : 8, kind : 0}
	    
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
// 
