var chartData = e.chartData;
var keyVal = chartData.keyVal;

//将原始x值传入，获得模拟刻度线
function toShow(xArr){
  var chartLineData = [];
  chartLineData = xArr.map((x)=>{
    var value = handleVal(x[0]);
    return [
      { coord : [value, 0], name: rds(x[0],2)},
      { coord : [value, 110]}
    ];
  })
console.log(chartLineData)
  var markLine = {
        data : chartLineData, symbol:['',''],
        label:{normal:{position:'start',}} ,
        lineStyle:{normal:{color:'black',width:1,type:'solid',opacity:0.4, }} ,
        animation:false, silent:true,
    };
  return markLine;
}

//文档转换公式(转换值)
function handleVal(value){
 return getPow(value,0.45)-getPow(keyVal,0.45);
}

//文档转换公式(转换数组)
function handleArr(arr){
 var valArr = arr.map((x)=>{
  return [handleVal(x[0]),x[1]];
 });
 return valArr;
}

//========================正式代码=========================

//将三条线的数据转换成界面值
var showAvgArr = handleArr(chartData.avgArr);
var showUpArr = handleArr(chartData.upArr);
var showDownArr = handleArr(chartData.downArr);

var gsAvg = fit(showAvgArr,'折线');
var gsUp = fit(showUpArr,'折线');
var gsDown = fit(showDownArr,'折线');


var ser1 = {
  type : 'line',
  data : gsAvg,
  markLine : toShow(chartData.avgArr)
}

var ser2 = {
  type : 'line',
  data : gsUp
}

var ser3 = {
  type : 'line',
  data : gsDown
}

var series = [ser1, ser2, ser3];

var chart = echarts.init(document.getElementById(e.chartDivId));
chart.clear();
var option = {
  title: {  text: '粗集料筛分曲线图'  },

  xAxis: {name:'筛孔尺寸(mm)' ,  position:'bottom', nameLocation:'middle',nameGap:25, min:0,max:30, splitLine:{show:false,}, axisTick:{show:false,},axisLabel:{show:false,},   },
  yAxis: { name:'累计筛余百分率(%)',position:'left', nameLocation:'end', nameGap:10,  min:0,max:110, splitNumber: 11   },
  series: series,
  animation: false,  //不开启动画，否则保存的图片中没有线条
};
chart.setOption(option);


























//-
