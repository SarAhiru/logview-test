//学習者用デジタル教科書　英語　ログ　横軸ラベル作成

function lavel(result, dataLength, choicedate, member) {

  //横軸ラベル作成
  let label = []; // グラフ横軸　配列
  let lognum = 0; //配列番号カウント用

  // let log = []; //グラフ　配列 これではなくて
  // let num = []; //操作回数
  // console.log(num);


  let membernum = 0; //何人目のデータか

  let ftime = 0; //first time
  let judge = 0; //初回かどうかを判断

  let fminute = 0; //グラフの軸ラベル用
  let fhour = 0;

  let startnum = 0;
  let finishnum = 0;



  if (dataLength > 0) {
    for (let x = 1; x < dataLength-1; x++) {
      let logDate = result[x][0]; // ログからdate取得
      
      //横軸時間管理
      let date = new Date(logDate);
      // console.log(date);
      // console.log(date.toLocaleString());
      let judgeYear = date.getFullYear();
      let judgeMonth = date.getMonth() + 1;
      let judgeDay = date.getDate();

      let choiceYear = choicedate.value.substr(0, 4);
      let choiceMonth = choicedate.value.substr(5, 2);
      choiceMonth = parseInt(choiceMonth); //数字に変更
      let choiceDay = choicedate.value.substr(8, 2);
      choiceDay = parseInt(choiceDay); // 数字に変更

      if (choiceYear == judgeYear) {
        if (choiceMonth == judgeMonth) {
          if (choiceDay == judgeDay) {
            finishnum = x;
            //始めだけfirst time(ftime)を設定
            if (judge == 0) {
              startnum = x;
              // log[lognum] = new Array(member.length + 4 + 1); //時間 + 人ごとの操作 + 機能 + 人数
              //初期化
              // num.push(Array(member.length));
              // console.log(member.length);
              // num[x] = 0; //[人数][時間]
              // for(let x = 0; x < member.length ; x++){
              //   num[x][0] = 0; //[時間][人数]
              // }
              // console.log(lognum);
              // console.log(num);

              ftime = new Date(logDate);

              //時間・分をそれぞれ「文字として」切り取り
              fminute = ftime.getMinutes();
              fhour = ftime.getHours();

              //文字を数字に直す変換
              fminute = parseInt(fminute);
              fhour = parseInt(fhour);

              //10より小さい場合には最初に0を付ける
              if (fminute < 10 || fhour < 10) {
                let minute2 = fminute;
                let hour2 = fhour;

                if (fminute < 10) {
                  minute2 = "0" + String(fminute);
                }
                if (fhour < 10) {
                  hour2 = "0" + String(fhour);
                }
                label[0] = hour2 + ":" + minute2;
              }
              else {
                label[0] = fhour + ":" + fminute;
              }
            }
            judge = 1;

            //ここで条件分岐して、一定時間にどのくらい機能を使用したのかを記録
            //！！本当は進んだ分数を引き算で求めて、重複させるだけでいいのかも
            while (date.getTime() >= ftime.getTime()) { //取得した時間がftimeと同じ時間になるまで1分ずつ足し続ける
              ftime.setMinutes(ftime.getMinutes() + 1);
              lognum ++;

              //初期化
              // num.push(Array(member.length));
              // for(let x = 0; x < member.length ; x++){
              //   num[x][lognum] = 0; //[人数][時間]
              // }
              // // log[lognum] = new Array(member.length + 4 + 1); //時間 + 人ごとの操作 + 機能 + 人数
              // console.log(num);

              //分と時間の変更
              fminute = fminute + 1;
              if (fminute >= 60) { //60分より大きい場合の調整
                fminute = 00;
                fhour = fhour + 1;
              }

              //10より小さい場合には最初に0を付ける（数値→文字の変更）
              if (fminute < 10 || fhour < 10) {
                let minute2 = fminute;
                let hour2 = fhour;
                if (fminute < 10) {
                  minute2 = "0" + String(fminute);
                }
                if (fhour < 10) {
                  hour2 = "0" + String(fhour);
                }
                label[lognum] = hour2 + ":" + minute2;
              }
              else {
                label[lognum] = fhour + ":" + fminute;
              }
            }

            // //ここから分析する
            // let logActor = result[x][2]; // actor取得

            // //操作回数
            // membernum = member.indexOf(logActor);
            // num[0][lognum] ++; // num[0]は全体合計
            // num[membernum][lognum] ++;

          }
        }
      }
    }
  }
   console.log(label);
  return [label, startnum, finishnum];
  // return label;
}
