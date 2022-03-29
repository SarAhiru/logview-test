//学習者用デジタル教科書　英語　ログ　生徒管理用

function actor(result, dataLength) {

    let actor = []; //操作者管理用　配列
    let actornum = 0; //配列番号カウント用
    let actorJudge = 0; //操作者　重複回避用


    if(dataLength > 0){
        for(let x = 1; x < dataLength-1 ; x++){ //逆順の時にはdataLength-1
          // console.log(result[x][2]);
          let logActor = result[x][2]; // ログからactor取得

            //操作者管理
            if(actor.length != 0){
              for(let i = 0 ; i <= actor.length ; i++){
                if(actor[i] == logActor){ //一致していたら抜ける
                  actorJudge = 1;
                  actornum = i;
                  break;
                }
              }
            }
            if(actorJudge == 0){
              actor.push(logActor);
              actornum = actor.length;
            }
            actorJudge = 0;          
        }
    }
    console.log(actor);
    return actor;
}
