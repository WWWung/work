var lbtj = getrs("r.lbtj");
var ylpjz = getrs("r.ylpjz");
var hql = getrs("r.hql");
var hqlpjz = getrs("r.hqlpjz");

function main(str){
 var s1 = getf(e.p1+".s"+str+1);
 var s2 = getf(e.p1+".s"+str+2);
 var s4 = "";
 var num = str=="a"?1:2;
 if(!isDataEmpty(s1)&&!isDataEmpty(s2)){
  if(getAbs(getSub(s1,s2))/getAbs(getAvg(s1,s2))<0.2){
   dis(e.p1+".s"+str+3,true,"");
   s4 = getAvg(s1,s2);
  }else{
   dis(e.p1+".s"+str+3,false);
   var s3 = getf(e.p1+".s"+str+3);
   if(!isDataEmpty(s3)){
     var pce1=getAbs(getSub(s3,s1)) /getAbs(getAvg(s3,s1));
     var pca2=getAbs(getSub(s3,s2)) /getAbs(getAvg(s3,s2));
     if(pce1<=pca2&&pca2<0.2){
       s4 = getAvg(s1,s3);
       vis(e.p1+".cc"+num,false,"");
     }else if(pce1>pca2&&pca2<0.2){
       s4 = getAvg(s2,s3);
       vis(e.p1+".cc"+num,false,"");
     }else if(pce1>0.2&&pca2>0.2){
       s4 = "";
       vis(e.p1+".cc"+num,true,"超差");
     }
   }else{
     s4 = "";
     vis(e.p1+".cc"+num,false,"");
   }
  }
 }
 set(e.p1+".s"+str+4,rds(s4,ylpjz));
}












var gs1 = fit(e.chartData[0],"三次样条");
var gs2 = fit(e.chartData[1],"三次样条");
var gs3 = fit(e.chartData[2],"三次样条");

var series = [];
if(gs1.newSerialData){
 var s1 = {
   type: "line",
   showSymbol:false,
   data: gs1.newSerialData,
   lineStyle:{
    normal:{width:1}
   }
 }
 var sa = {
   type: "line",
   showSymbol:true,
   data: gs1.serialData,
   lineStyle:{
    normal:{width:0}
   }
 }
 series.push(s1);
// series.push(sa);
}
if(gs2.newSerialData){
 var s2 = {
   type: "line",
   showSymbol:false,
   data: gs2.newSerialData,
   lineStyle:{
    normal:{width:1}
   }
 }
 var sb = {
   type: "line",
   showSymbol:true,
   data: gs2.serialData,
   lineStyle:{
    normal:{width:0}
   }
 }
 series.push(s2);
// series.push(sb);
}
if(gs3.newSerialData){
 var s3 = {
   type: "line",
   showSymbol:false,
   data: gs3.newSerialData,
   lineStyle:{
    normal:{width:1}
   }
 }
 var sc = {
   type: "line",
   showSymbol:true,
   data: gs3.serialData,
   lineStyle:{
    normal:{width:0}
   }
 }
 series.push(s3);
 //series.push(sc);
}


console.log(series);
var l1 = gs1.serialData.length-1;
var l2 = gs2.serialData.length-1;
var l3 = gs3.serialData.length-1;

var minX = getMin1copy11(gs1.serialData[0][0],gs2.serialData[0][0],gs3.serialData[0][0]);
var maxX = getMax1(gs1.serialData[l1][0],gs2.serialData[l2][0],gs3.serialData[l3][0]);
minX = Math.floor(minX/100)*100;
maxX = Math.ceil(maxX/100)*100;

var chart = echarts.init(document.getElementById(e.chartDivId ));
chart.clear();

var option = {
 titile:{text:"贯入阻力与测试时间关系图"},
 xAxis:{name:"测试时间(min)",position:'bottom', nameLocation:'middle',nameGap:25,min:minX ,max:maxX ,splitNumber:8},
 yAxis:{name:"贯入阻力(MPa)",position:'left', nameLocation:'end', nameGap:10,min:0,max:40,splitNumber:8},
 series:series
}
chart.setOption(option);










gsArr.forEach((item,index)=>{
  if(item.newSerialData){
   var s1 = {
     type: "line",
     showSymbol:false,
     data: item.newSerialData,
     lineStyle:{
      normal:{width:1}
     }
   }
   var sa = {
     type: "line",
     showSymbol:true,
     data: item.serialData,
     lineStyle:{
      normal:{width:0}
     }
   }
   series.push(s1);
   series.push(sa);
  }
})

if(gs1.newSerialData){
 var s1 = {
   type: "line",
   showSymbol:false,
   data: gs1.newSerialData,
   lineStyle:{
    normal:{width:1,color:"red"}
   }
 }
 var sa = {
   type: "line",
   showSymbol:true,
   data: gs1.serialData,
   lineStyle:{
    normal:{width:0}
   }
 }
 series.push(s1);
 series.push(sa);
}
if(gs2.newSerialData){
 var s2 = {
   type: "line",
   showSymbol:false,
   data: gs2.newSerialData,
   lineStyle:{
    normal:{width:1,color:"black"}
   }
 };
 var sb = {
   type: "line",
   showSymbol:true,
   data: gs2.serialData,
   lineStyle:{
    normal:{width:0}
   }
 };

 series.push(s2);
 series.push(sb);
}
if(gs3.newSerialData){
 var s3 = {
   type: "line",
   showSymbol:false,
   data: gs3.newSerialData,
   lineStyle:{
    normal:{width:1,color:"orangered"}
   }
 }
 var sc = {
   type: "line",
   showSymbol:true,
   data: gs3.serialData,
   lineStyle:{
    normal:{width:0}
   }
 }
 series.push(s3);
 series.push(sc);
}
