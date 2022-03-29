//学習者用デジタル教科書　英語　ログ　グラフ生成　[全体合計 １分]

function count(result, dataLength, member, time, startnum, finishnum) {
    //console.log(member);

    let totalnum = []; //全体平均用
    let num = []; // 操作回数
    let membernum = 0; //何人目のデータか

    let datanum = 0; //配列番号カウント用
    let ftime = 0; //first time
    let judge = 0; //初回かどうかを判断
    let fminute = 0; //グラフの軸ラベル用
    let fhour = 0;

    // 初期化
    for (let x = 0; x < time.length; x++) {
        totalnum[x] = 0;
    }
    for (let i = 0; i < member.length; i++) {
        num.push(Array(time.length));
        for (let x = 0; x < time.length; x++) {
            num[i][x] = 0;
        }
    }

    if (dataLength > 0) {
        for (let x = startnum; x <= finishnum; x++) {
            let logDate = result[x][0]; // date取得
            let logActor = result[x][2]; // actor取得

            //console.log(x + "  " + result[x][0]);
            //console.log(x + "  " + result[x][2]);// actor表示

            //今回のデータは何人目の生徒なのか
            membernum = member.indexOf(logActor);
            // console.log(membernum);

            //横軸時間管理
            let date = new Date(logDate);

            //始めだけfirst timeを設定
            if (judge == 0) {
                ftime = new Date(logDate);
                datanum = 1;
                judge = 1;
            }
            else{
                while (date.getTime() > ftime.getTime()) { //1分経過したのかを判断
                    ftime.setMinutes(ftime.getMinutes() + 1);
                    datanum++;
                }
            }
             
            num[membernum][datanum - 1]++;
            // console.log(datanum);
            // totalnum[datanum - 1]++;
        }
    }

    // for (let x = 0; x < time.length; x++) {
    //     totalnum[x] = totalnum[x] / member.length;  //人数で割って平均を出したい
    // }
    console.log(num);
    return num;
}
