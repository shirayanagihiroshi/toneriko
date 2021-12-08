'use strict';

//------モジュールスコープ変数s--------
  const fs       = require('fs'),
        iconv    = require('iconv-lite');
  let   answer, records, record, data, str, i, j;

//------ユーティリティメソッドs--------
  // ア,イ,ウ,エ,オ,カ,キ,ク,ケ,コ,サ,シ,ス,セ,ソ,タ,チ,ツ,テ,ト,ナ,ニ,ヌ,ネ,ノ,ハ,ヒ,フ,ヘ,ホ
  // 答えの設定
  // 得点を与える問題ごとに要素を作る
  // ans   : 正解(配列)
  // score : 配点
  // kind  : 0 指定の解のみ許容
  //         1 順不同でよい(この場合は上記scoreをそれぞれに与える)
  answer = [{ans   : [5],
             score : 2,
             kind  : 0},
             {ans  : [1,1,0,0],
             score : 2,
             kind  : 0},
             {ans  : [3],
             score : 3,
             kind  : 0},
             {ans  : [1,9,0],
             score : 3,
             kind  : 0}
           ];
//------ユーティリティメソッドe--------

//------メイン部s--------
  if ( process.argv[2] != null ) {   // コマンドライン引数でcsvファイル名を指定
     data = fs.readFileSync(process.argv[2]);
     if ( data != null ) {
       str = iconv.decode(data, 'Shift_JIS');

       records = str.split(/\n/);        // 改行で区切る。これが一人分。
       for (i = 0; i < records.length; i++) {
         let markPos = 2, //マー君の仕様上、最初は通番、次はIDで、2から回答の内容
             personScore = 0;
         record = records[i].split(','); // さらにコンマで区切る。これがマーク単位。
                                         // 一人分を採点できる形にしたもの
         // 答えを設定したかたまり毎のloop
         for (j = 0; j < answer.length; j++) {
           let k, incorrectFlg = false;

           // 指定の解(の順)のみ許容
           if ( answer[j].kind == 0 ) {
             for (k = 0; k < answer[j].ans.length; k++, markPos++) {
               if ( answer[j].ans[k] != record[markPos]) {
                 incorrectFlg = true;
               }
             }
             if (!incorrectFlg) {
               personScore += answer[j].score;
             }

           // 順不同
           } else if ( answer[j].kind == 0)  {

           }
         }
         console.log(record[0] + ':' + personScore);
       }
     }
  } else {
    console.log("ファイル名を指定してください。例 node scoring xxxx.csv");
  }
//------メイン部e--------
