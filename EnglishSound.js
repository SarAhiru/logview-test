
function table(result, dataLength, member) {
    let table = document.getElementById('targetTable');
    // let member = ['1_student', '2_student', '3_student', '4_student', '5_student'];

    let audioData = new Array(member.length);
    let initial_value = 0;  // 初期化する固定値
    let minute = new Array(member.length);
    let second = new Array(member.length);

    for (var x = 0; x < member.length; x++) {
        // 2次元配列の「列」部分を作成
        audioData[x] = new Array(4);
        for (let y = 0; y < 4; y++) {
            audioData[x][y] = initial_value;   // 初期化
        }
        minute[x] = initial_value;
        second[x] = initial_value;
    }
    for (var x = 0; x < member.length; x++) {
        audioData[x][0] = "生徒_" + (x + 1);
    }
    // console.log(audioData);  //audioData配列は[ユーザー名, 再生回数, 再生時間, 再生コンテンツ数]
    // console.log(minute);
    // console.log(second);

    //ここからデータの分析
    if (dataLength > 0) {
        for (let x = 1; x < dataLength; x++) {
            let logActor = result[x][2]; // actor取得
            let logTarget = result[x][9]; // target取得
            let user = 0;

            if (logTarget.includes('audio end')) {
                console.log("音声再生");
                for (let a = 0; a < member.length; a++) {
                    if (logActor.includes(member[a])) {
                        user = a; //ユーザーの識別
                    }
                }
                audioData[user][1]++; //再生回数のカウントを+1
                //console.log(audioData);

                //再生時間
                // console.log(logTarget);
                let addminute = logTarget.substr(11, 2);
                // console.log(addminute);
                addminute = parseInt(addminute);
                let addsecond = logTarget.substr(13, 2);
                // console.log(addsecond);
                addsecond = parseInt(addsecond);


                minute[user] = minute[user] + addminute;
                second[user] = second[user] + addsecond;
                if (second[user] >= 60) { //60秒を越えていたときの処理
                    minute[user] = minute[user] + 1;
                    second[user] = second[user] - 60;
                }
            }

            if (logTarget.includes('video end')) {
                console.log("動画再生");
                //audioData[0][1] ++ ;
                for (let a = 0; a < member.length; a++) {
                    if (logActor.includes(member[a])) {
                        user = a; //ユーザーの識別
                    }
                }
                audioData[user][1]++; //再生回数のカウントを+1
                //console.log(audioData);

                //再生時間
                // console.log(logTarget);
                let addminute = logTarget.substr(11, 2);
                // console.log(addminute);
                addminute = parseInt(addminute);
                let addsecond = logTarget.substr(13, 2);
                // console.log(addsecond);
                addsecond = parseInt(addsecond);

                minute[user] = minute[user] + addminute;
                second[user] = second[user] + addsecond;
                if (second[user] >= 60) { //60秒を越えていたときの処理
                    minute[user] = minute[user] + 1;
                    second[user] = second[user] - 60;
                }
            }

        }
    }


    //ここに計算式を入れてセルの色変更をする
    //再生回数の最大値ー最小値をした時間を５分割にする
    let count = new Array();
    for (let x = 0; x < member.length; x++) {
        count[x] = audioData[x][1];
    }
    //時間の最大値判定【再生回数】
    let maxcount = count[0];
    for (let x = 0; x < member.length; x++) {
        if (maxcount < count[x]) {
            maxcount = count[x];
        }
    }
    //時間の最小値判定【再生回数】
    let mincount = count[0];
    for (let x = 0; x < member.length; x++) {
        if (mincount > count[x]) {
            mincount = count[x];
        }
    }
    //５分割【再生回数】
    let divecount = (maxcount - mincount) / 5
    console.log(count);
    console.log(divecount);


    //ここに計算式を入れてセルの色変更をする
    //再生時間の最大値ー最小値をした時間を５分割にする
    let time = new Array();
    for (let x = 0; x < member.length; x++) {
        time[x] = minute[x] * 60 + second[x];
    }
    //時間の最大値判定【再生時間】
    let maxtime = time[0];
    for (let x = 0; x < member.length; x++) {
        if (maxtime < time[x]) {
            maxtime = time[x];
        }
    }
    //時間の最小値判定【再生時間】
    let mintime = time[0];
    for (let x = 0; x < member.length; x++) {
        if (mintime > time[x]) {
            mintime = time[x];
        }
    }
    //５分割【再生時間】
    let divetime = (maxtime - mintime) / 5
    console.log(time);
    console.log(divetime);


    //再生時間を表示用に修正
    for (let a = 0; a < member.length; a++) {
        if (second[a] == 0) {
            second[a] = "00";
        }
        else if (second[a] < 10) {
            second[a] = "0" + String(second[a]);
        }
        if (minute[a] < 10) {
            minute[a] = "0" + String(minute[a]);
        }
        audioData[a][2] = minute[a] + ":" + second[a];
    }


    /* ----------------------------
        ここからテーブルの編集コード
       ----------------------------  */

    //テーブルのセルを１行目以外削除する
    while (table.rows[1]) table.deleteRow(1);

    //テーブルのセルを追加する
    for (let x = 0; x < member.length - 1; x++) {
        let newRow = table.insertRow();

        for (let y = 0; y < 4; y++) {
            let newCell = newRow.insertCell();
            let newText = document.createTextNode(audioData[x][y]);


            //再生回数の色分け
            if (y == 1) {
                if (count[x] <= (mincount + divecount)) {
                    newCell.style.backgroundColor = "#ffffff";
                    console.log(1);
                }
                else if (count[x] <= (mincount + divecount * 2)) {
                    newCell.style.backgroundColor = "#ccffd4";//S20
                    console.log(2);
                }
                else if (count[x] <= (mincount + divecount * 3)) {
                    newCell.style.backgroundColor = "#99ffab";//S40
                    console.log(3);
                }
                else if (count[x] <= (mincount + divecount * 4)) {
                    newCell.style.backgroundColor = "#66ff84";//S60
                    console.log(4);
                }
                else if (count[x] <= maxcount) {
                    newCell.style.backgroundColor = "#00ff37";//S100
                    console.log(5);
                }
            }


            //再生時間の色分け
            if (y == 2) {
                if (time[x] <= (mintime + divetime)) {
                    newCell.style.backgroundColor = "#ffffff";
                    // console.log(1);
                }
                else if (time[x] <= (mintime + divetime * 2)) {
                    newCell.style.backgroundColor = "#ffcc99";//S40
                    // console.log(2);
                }
                else if (time[x] <= (mintime + divetime * 3)) {
                    newCell.style.backgroundColor = "#ffb566";//S60
                    // console.log(3);
                }
                else if (time[x] <= (mintime + divetime * 4)) {
                    newCell.style.backgroundColor = "#ff9c32";//S80
                    // console.log(4);
                }
                else if (time[x] <= maxtime) {
                    newCell.style.backgroundColor = "#ff8300";//S100
                    // console.log(5);
                }
            }
            newCell.appendChild(newText);
        }
    }
}
