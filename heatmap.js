
function heatmap(member, time, num) {

    // Chart.register(ChartDataLabels);

    const mapHeight = member.length; //人数
    const mapWidth = time.length;
    const maxVal = 741;

    // データのランダム生成（追加）
    // const datalist = (function(){
    //     const dlist = []
    //     for(let i=0; i < mapHeight * mapWidth; i++){
    //         dlist.push(Math.random())
    //     }
    //     return dlist
    // })()

    
    // データセットの生成
    const generateDatasets = function () {
        const datasets = [];
        for (let i = mapHeight-1 ; i >= 0; i--) {
            datasets.push({
                label: '生徒' + (i+1),
                data: new Array(mapWidth).fill(1), //時間
                borderWidth: 0.2,
                borderColor: "#FFFFFF",
                // backgroundColor: 'skyblue'
                backgroundColor: generateColor(i)
            })
        }
        return datasets
    }

    // 色配列の生成 (追加）
    const generateColor = function(y){
        const datasetColors = []
        for(let x=0; x<mapWidth; x++){
            // const opa = ((x * y / maxVal)*0.7 + 0.3).toFixed(2);
            let opa = 0;
            if(num[y][x] == 0){
                opa = 0;
            }
            else if(num[y][x] <= 50){
                opa = (num[y][x] / 100 + 0.1).toFixed(1);
            }
            else if(num[y][x] <= 100){
                opa = 0.7;
            }
            else if(num[y][x] <= 150){
                opa = 0.8;
            }
            else if(num[y][x] <= 200){
                opa = 0.9;
            }
            else{
                opa = 1;
            }
            // const opa = ((num[member])*0.7 + 0.3).toFixed(2);
            // const opa = ((datalist[x + (mapHeight-y-1) * mapWidth])*0.7 + 0.3).toFixed(2);
            // datasetColors.push("rgba(135,206,235," + opa + ")"
            datasetColors.push("rgba(255,0,0," + opa + ")")
        }
        return datasetColors
    }


    // データラベルの生成
    // const generateLabels = function () {
    //     let labels = []
    //     for (var i = 1; i < mapWidth + 1; i++) {
    //         labels.push(i)
    //     }
    //     return labels
    // }

    

    console.log(num);

    let ctx = document.getElementById('heatMap').getContext('2d');
    window.heatMap = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time, //generateLabels()
            datasets: generateDatasets(),
        },
        options: {
            responsive: true,
            plugins:{
                title: {
                    display: true,
                    text: 'Heat Map',
                    fontSize: 18,
                },
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            // console.log(num);
                            if (label) {
                                label += ': ';
                                // console.log(context);
                                // console.log(context.datasetIndex);
                                // console.log(context.dataIndex);
                                // console.log(num);
                                // console.log(num[38 - context.datasetIndex][context.dataIndex]);
                                label += num[38 - context.datasetIndex][context.dataIndex];
                                label += '回' ;
                            }
                            return label;
                        },
                    }
                },
                //グラフ内に数字を入れる
                // datalabels: {
                //     color: 'blue',
                //     labels: {
                //         title: null,
                //         value: {
                //             color: 'black',
                //             font: {
                //                 size: "10px",
                //                 weigth: 'bold',
                //             }
                //         }
                //     }
                // },
                // responsive: false,
                // ChartDataLabels,
            },
            animation: false,
            scales: {
                x: {
                    gridLines: {
                        color: '#FFFFFF',
                    },
                    barPercentage: 0.99,
                    categoryPercentage: 0.99,
                    stacked: true,
                    ticks: {
                        min: 0,
                        // display: false,
                    }
                },
                y: {
                    gridLines: {
                        color: '#FFFFFF',
                        zeroLineWidth: 0
                    },
                    stacked: true,
                    ticks: {
                    //     min: 0,
                    //     stepSize: 1,
                        display: false,
                    //     // lavel: member,
                    //     callback: function(tick, member){
                    //         return tick.toString() + '人';
                    //         // return tick.toString() + member;
                    //     }
                    }
                },
                // responsive: false,
                // ticks: {
                //     lavel: [20,22,24,26],
                // }
            },
            
        },
        //グラフ内に数字を入れる
        // plugins: [
        //     ChartDataLabels,
        // ]
    });

    //. クリックイベントハンドラー
    // ctx.addEventListener( 'click', function( evt ){
    //     var item = myChart.getElementByEvent( evt );
    //     var item = myChart.getElementAtEvent( evt );
    //     if( item.length == 0 ){
    //       return;
    //     }
    
    //     item = item[0];
    //     var index = item._index;  //. 配列の何番目のデータがクリックされたか
    //     var item_data = item._chart.config.data.datasets;  //. クリックされたオブジェクトのデータセット
    //     console.log( index );
    //     console.log( item_data );
    // });
}
