//学習者用デジタル教科書　英語　ログ　グラフ生成　[全体合計 １分]

function drawCharttt(member, time, num) {
/*
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
    for(let x = 0; x < time.length ; x++){
      totalnum[x] = 0;
    }
    for(let i = 0 ; i < member.length ; i++){
        num.push(Array(time.length));
        for(let x = 0; x < time.length ; x++){
          num[i][x] = 0;
        }
    }

    if(dataLength > 0){
        for(let x = 1; x < dataLength ; x++){
            let logDate = result[x][0]; // date取得
            let logActor = result[x][2]; // actor取得

            //console.log(x + "  " + result[x][0]);
            //console.log(x + "  " + result[x][2]);// actor表示

            //今回のデータは何人目の生徒なのか
            // for(let i = 0 ; i < member.length ; i++){
            //   if(member[i] == logActor){
            //     membernum = i;
            //     break;
            //   }
            // }
            membernum = member.indexOf(logActor);
            console.log(membernum);

            //横軸時間管理
            let date = new Date(logDate);

            //始めだけfirst timeを設定
            if(judge == 0){
              ftime = new Date(logDate);
              datanum = 1;
            }
            judge = 1;
            
            //ここで条件分岐して、一定時間にどのくらい機能を使用したのかを記録させたい
            
            while(date.getTime() >= ftime.getTime()){ //1分経過したのかを判断
                ftime.setMinutes(ftime.getMinutes() + 1);
                datanum ++;
            }
            num[membernum][datanum-1] ++;
            totalnum[datanum-1] ++;
        }
    }

    for(let x = 0; x < time.length ; x++){
      totalnum[x] = totalnum[x]/member.length;  //人数で割って平均を出したい
    }
*/
console.log(num);

    function generateRandomCode() {
      var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      return myRandomColor;
    }

    const studentDatasets = function () {
      const datasets = []

      for(let i = 0; i < member.length; i++){
        datasets.push({
          label: '生徒' + (i+1),
          data: num[i],
          // backgroundColor: 'rgba(255, 0, 0, 1)',
          backgroundColor: generateRandomCode() ,
        })
      }
      return datasets
    }

    let ctx = document.getElementById('myCharttt').getContext('2d');
    window.myCharttt = new Chart(ctx, {
      //線グラフ
      type: 'bar',
      //データ
      data: {
        labels: time,
        datasets: studentDatasets(),
        /*
        //データセット
        datasets: [{
          label: '全体平均',
          data: num[0], //totalnum,
          backgroundColor: 'rgba(255, 0, 0, 1)',
          borderColor:'rgba(255, 0, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒1',
          data: num[0],
          backgroundColor: 'rgba(0, 255, 0, 1)',
          borderColor:'rgba(0, 255, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒2',
          data: num[1],
          backgroundColor: 'rgba(128, 0, 0, 1)',
          borderColor:'rgba(128, 0, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒3',
          data: num[2],
          backgroundColor: 'rgba(0, 0, 128, 1)',
          borderColor:'rgba(0, 0, 128, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒4',
          data: num[3],
          backgroundColor: 'rgba(128, 128, 0, 1)',
          borderColor:'rgba(128, 128, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒5',
          data: num[4],
          backgroundColor: 'rgba(0, 128, 0, 1)',
          borderColor:'rgba(0, 128, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒6',
          data: num[5],
          backgroundColor: 'rgba(0, 255, 255, 1)',
          borderColor:'rgba(0, 255, 255, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒7',
          data: num[6],
          backgroundColor: 'rgba(0, 128, 128, 1)',
          borderColor:'rgba(0, 128, 128, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒8',
          data: num[7],
          backgroundColor: 'rgba(0, 0, 255, 1)',
          borderColor:'rgba(0, 0, 255, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒9',
          data: num[8],
          backgroundColor: 'rgba(0, 0, 128, 1)',
          borderColor:'rgba(0, 0, 128, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒10',
          data: num[9],
          backgroundColor: 'rgba(255, 0, 255, 1)',
          borderColor:'rgba(255, 0, 255, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒11',
          data: num[10],
          backgroundColor: 'rgba(128, 0, 128, 1)',
          borderColor:'rgba(128, 0, 128, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒12',
          data: num[11],
          backgroundColor: 'rgba(0, 255, 0, 1)',
          borderColor:'rgba(0, 255, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒13',
          data: num[12],
          backgroundColor: 'rgba(128, 0, 0, 1)',
          borderColor:'rgba(128, 0, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒14',
          data: num[13],
          backgroundColor: 'rgba(255, 255, 0, 1)',
          borderColor:'rgba(255, 255, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒15',
          data: num[14],
          backgroundColor: 'rgba(128, 128, 0, 1)',
          borderColor:'rgba(128, 128, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒16',
          data: num[15],
          backgroundColor: 'rgba(0, 128, 0, 1)',
          borderColor:'rgba(0, 128, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒17',
          data: num[16],
          backgroundColor: 'rgba(0, 255, 255, 1)',
          borderColor:'rgba(0, 255, 255, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒18',
          data: num[17],
          backgroundColor: 'rgba(0, 128, 128, 1)',
          borderColor:'rgba(0, 128, 128, 1)',
          borderWidth: 1
        },{
          label: '1_生徒19',
          data: num[18],
          backgroundColor: 'rgba(0, 0, 255, 1)',
          borderColor:'rgba(0, 0, 255, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒20',
          data: num[19],
          backgroundColor: 'rgba(0, 0, 128, 1)',
          borderColor:'rgba(0, 0, 128, 1)',
          borderWidth: 1
        },
        {
          label: '2_生徒21',
          data: num[20],
          backgroundColor: 'rgba(255, 0, 255, 1)',
          borderColor:'rgba(255, 0, 255, 1)',
          borderWidth: 1,
          lavel: true,
          hidden: false,
        },
        {
          label: '1_生徒22',
          data: num[21],
          backgroundColor: 'rgba(128, 0, 128, 1)',
          borderColor:'rgba(128, 0, 128, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒23',
          data: num[22],
          backgroundColor: 'rgba(0, 255, 0, 1)',
          borderColor:'rgba(0, 255, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒24',
          data: num[23],
          backgroundColor: 'rgba(128, 0, 0, 1)',
          borderColor:'rgba(128, 0, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒25',
          data: num[24],
          backgroundColor: 'rgba(255, 255, 0, 1)',
          borderColor:'rgba(255, 255, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒26',
          data: num[25],
          backgroundColor: 'rgba(128, 128, 0, 1)',
          borderColor:'rgba(128, 128, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒27',
          data: num[26],
          backgroundColor: 'rgba(0, 128, 0, 1)',
          borderColor:'rgba(0, 128, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒28',
          data: num[27],
          backgroundColor: 'rgba(0, 255, 255, 1)',
          borderColor:'rgba(0, 255, 255, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒29',
          data: num[28],
          backgroundColor: 'rgba(0, 128, 128, 1)',
          borderColor:'rgba(0, 128, 128, 1)',
          borderWidth: 1
        },{
          label: '1_生徒30',
          data: num[29],
          backgroundColor: 'rgba(0, 0, 255, 1)',
          borderColor:'rgba(0, 0, 255, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒31',
          data: num[30],
          backgroundColor: 'rgba(0, 0, 128, 1)',
          borderColor:'rgba(0, 0, 128, 1)',
          borderWidth: 1
        },
        {
          label: '2_生徒32',
          data: num[31],
          backgroundColor: 'rgba(255, 0, 255, 1)',
          borderColor:'rgba(255, 0, 255, 1)',
          borderWidth: 1,
          lavel: true,
          hidden: false,
        },
        {
          label: '1_生徒33',
          data: num[32],
          backgroundColor: 'rgba(128, 0, 128, 1)',
          borderColor:'rgba(128, 0, 128, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒34',
          data: num[33],
          backgroundColor: 'rgba(0, 255, 0, 1)',
          borderColor:'rgba(0, 255, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒35',
          data: num[34],
          backgroundColor: 'rgba(128, 0, 0, 1)',
          borderColor:'rgba(128, 0, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒36',
          data: num[35],
          backgroundColor: 'rgba(255, 255, 0, 1)',
          borderColor:'rgba(255, 255, 0, 1)',
          borderWidth: 1
        },
        {
          label: '1_生徒37',
          data: num[36],
          backgroundColor: 'rgba(128, 128, 0, 1)',
          borderColor:'rgba(128, 128, 0, 1)',
          borderWidth: 1
        }
      ]*/
      },
      options: {
        scales: {
          x: {
            categoryPercentage: 1.1,
            barPercentage: 1,
          },
          y: {
            ticks: {
              beginAtZero: true
            }
          }
        }
      }
    });
    console.log("表示完了！");
}
