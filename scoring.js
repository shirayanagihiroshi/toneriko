'use strict';

//------モジュールスコープ変数s--------
  const fs       = require('fs'),
        iconv    = require('iconv-lite');
  let   records, record, data, str, i, j;

//------ユーティリティメソッドs--------
  // 一問ごとのマークシートの個数と正答、得点を設定
  //    ア,イ,ウ,エ,オ,カ,キ,ク,ケ,コ,サ,シ,ス,セ,ソ,タ,チ,ツ,テ,ト,ナ,ニ,ヌ,ネ,ノ,ハ,ヒ,フ,ヘ,ホ
  //and =
//------ユーティリティメソッドe--------

//------メイン部s--------
  if ( process.argv[2] != null ) {   // コマンドライン引数でcsvファイル名を指定
     data = fs.readFileSync(process.argv[2]);
     if ( data != null ) {
       str = iconv.decode(data, 'Shift_JIS');

       records = str.split(/\n/);        // 改行で区切る。これが一人分。
       for (i = 0; i < records.length; i++) {
         record = records[i].split(','); // さらにコンマで区切る。これがマーク単位。
         for (j = 0; j < record.length; j++) {
           console.log(record[j]);
         }
       }
     }
  } else {
    console.log("ファイル名を指定してください。例 node scoring xxxx.csv");
  }
//------メイン部e--------
