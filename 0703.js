
// 细集料表观密度试验（容量瓶法）计算说明
var s1 = getf(e.p1+".s1");
var s2 = getdsv("ds.smdsz","sw",s1,"smd");
var sa3 = getf(e.p1+".sa3");
var sb3 = getf(e.p1+".sb3");
var sa4 = getf(e.p1+".sa4");
var sb4 = getf(e.p1+".sb4");
var sa5 = getf(e.p1+".sa5");
var sb5 = getf(e.p1+".sb5");
var sa6 = sa3/(getSub(getSum(sa3,sa5),sa4));
var sb6=sb3/(getSub(getSum(sb3,sb5),sb4));
var s7;
if(getAbs(getSub(sa6,sb6))>0.01){
 s7 = null;
 vis(e.p1+".cc1",true,"超差")；
}else{
 s7=getAvg(sa6,sb6);
 vis(e.p1+".cc1",false,"")；
}
var sa8=sa6*s2;
var sb8=sb6*s2;
var s9;
if(getabs(getsub(sa8,sb8))>0.01){
 s9 = null;
 vis(e.p1+".cc2",true,"超差")；
}else{
 s9=getAvg(sa8,sb8);
 vis(e.p1+".cc2",false,"")；
}

var xdmd = getrs("r.xdmd");
var xdmdcz = getrs("r.xdmdcz");
var bgmd = getrs("r.bgmd");
var bgmdcz = getrs("r.bgmdcz");
set(e.p1+".s2",s2);
if(sa3&&sa4&&sa5){
 set(e.p1+".sa6",rds(sa6,r.xdmd));
 set(e.p1+".sa8",rds(sa8,bgmd));
}
if(sb3&&sb4&&sb5){
 set(e.p1+".sb6",rds(sb6,r.xdmd));
 set(e.p1+".sb8",rds(sb8,r.bgmd));
}

set(e.p1+".s7",rds(s7,bgmdcz));
set(e.p1+".s9",rds(s9,bgmdcz));

//细集料含泥量试验（筛洗法）计算说明

set(e.p2+".l1.bt5",get(e.p2+".l1.bt4"));

var se1 = getf(e.p1+".se1");
var sa2 = getf(e.p1+".sa2");
var sb1 = getf(e.p1+".sb1");
var sb2 = getf(e.p1+".sb2");

var sa3=getSub(se1,sa2)/se1*100;
var sb3=getSub(sb1,sb2)/sb1*100;
var s4;
if(getAbs(getSub(sa3,sb3))>0.5){
 s4 = null;
 vis(e.p1+".cc",true,"超差");
}else{
 s4 = getAvg(sa3,sb3);
 vis(e.p1+".cc",false,"");
}

var hnl = getrs("r.hnl");
var hnlcz = getrs("r.hnlcz");

if(se1&&sa2){
 set(e.p1+".sa3",rds(sa3,hnl));
}

if(sb1&&sb2){
 set(e.p1+".sb3",rds(sb3,hnl));
}
set(e.p1+".s7",rds(s7,hnlcz));



var se1 = getf(e.p1+".se1");
var sb1 = getf(e.p1+".sb1");
var sa5 = getf(e.p2+".4l.sa2");
var sb2 = getf(e.p2+".4l.sb2");
var sa3 = getf(e.p2+".l5.sa3");
var sb3 = getf(e.p2+".l5.sb3");
var sa5 = getf(e.p2+".l7.sa5");
var sb5 = getf(e.p2+".l7.sb5");
var mtjmd = getf(e.p2+".l1.mtjmd");


var sa4=getSub(sa3,se1);
var sb4=getSub(sb3,sb1);
var sa6=getSub(sa5,se1);
var sb4=getSub(sb5,sb1);
var sa7 = sa4/sa2;
var sb7 = sb4/sb2;
var s8=getAvg(sa7,sb7);
var s9=s8/mtjmd*100;
var se10=sa6/sa2;
var sb10=sb6/sb2;
var s11=getAvg(se10,sb10);
var s12=s11/mtjmd*100;

var syzl = getrs("r.syzl");
var djmd = getrs("r.djmd");
var djcdz = getrs("r.djcdz");
var djkxl = getrs("r.djkxl");
var jzmd = getrs("r.jzmd");
var jzcdz = getrs("r.jzcdz");
var jzkxl = getrs("r.jzkxl");

if(se1&&sa2&&sa3&&sa5){
 set(e.p2+".4l.sa4",rds(sa4,syzl));
 set(e.p2+".l8.sa6",rds(sa6,syzl));
 set(e.p2+".l9.sa7",rds(sa7,djmd));
 set(e.p2+".l11.se10",rds(se10,jzmd));
}
if(sb1&&sb2&&sb3&&sb5){
 set(e.p2+".4l.sb4",rds(sb4,syzl));
 set(e.p2+".l8.sb6",rds(sb6,syzl));
 set(e.p2+".l9.sb7",rds(sb7,djmd));
 set(e.p2+".l11.sb10",rds(sb10,jzmd));
}

if((se1&&sa2&&sa3&&sa5)||(sb1&&sb2&&sb3&&sb5)){
 set(e.p2+".l10.s8",rds(s8,djcdz));
 set(e.p2+".l11.s9",rds(s9,djkxl));
 set(e.p2+".l13.s11",rds(s11,jzcdz));
 set(e.p2+".l14.s12",rds(s12,jzkxl));
}


//细集料筛分试验（干筛法）计算说明
var sfzl = getrs("r.sfzl");
var shl = getrs("r.shl");
var fjsy = getrs("r.fjsy");
var ljsy = getrs("r.ljsy");
var tgl = getrs("r.tgl");
var pjbfl = getrs("r.pjbfl");
var xdms = getrs("r.xdms");
var mscdz = getrs("r.mscdz");

main("");
main("copy11");
function main(str){
//试验数据1
 var sbArr = [];
 var n = isEmpty(str);//记录不为空的筛孔尺寸数量
 var s3 = getf(e.p3+".sysj1.l2"+str+".s3");
 for(var i=1;i<=n;i++){
// 下面判断注意修正
   if(!get(e.p3+".sysj2"+str+".l3.sa"+i)        &&  getf(e.p3+".sysj2"+str+".l4.sb"+i)){
    sbArr.push(getf(e.p3+".sysj2"+str+".l4.sb"+i));
   }
 }
 if(sbArr.length===n){
  var s4 = getSum.apply({},sbArr);
  set(e.p3+".sysj1.l2"+str+".s4",rds(s4,sfzl));
  var s5 = getSub(s3,s4);
  set(e.p3+".sysj1.l2"+str+".s5",rds(s5,sfzl));
  s6 = s5/s3*100;
  set(e.p3+".sysj1.l2"+str+".s6",rds(s6,shl));
  if(s6>1){
   vis(e.p3+".sysj1.l2"+str+".cc",true,"超差");
  }else{
   vis(e.p3+".sysj1.l2"+str+".cc",false,"");
  }
//实验数据2
  for(var i=1;i<=sbArr.length;i++){
   var sc = sbArr[i-1]/s3*100;   set(e.p3+".sysj2"+str+".l5.sc"+i,rds(sc,fjsy));
var sd = i===1?sc:getSum(sc,getf(e.p3+".sysj2"+str+".l6.sd"+(i-1)));   set(e.p3+".sysj2"+str+".l6.sd"+i,rds(sd,fjsy));
   var se = getSub(100,sd);
   set(e.p3+".sysj2"+str+".l7.se"+i,rds(se,tgl));
  }
 }
}
//实验数据3
var pjz = get(e.p3+".sysj3.l8.pjz");
if(pjz[2]==="累"){
 for(var i=1;i<=isEmpty("");i++){
  var str = ".l6.sd"+i;
  var sf = loog(str);
  set(e.p3+".sysj3.l8.sf"+i,rds(sf,pjbfl));
 }
}else if(pjz[2]==="通"){
 for(var i=1;i<isEmpty("");i++){
  var str = ".l7.se"+i;
  var sf = loop(str);
  set(e.p3+".sysj3.l8.sf"+i,rds(sf,pjbfl));
 }
}
function loop(str){
 var a = getf(e.p3+".sysj2"+str);
 var b = getf(e.p3+".sysj2copy11"+str);
 return getAvg(a,b);
}

function isEmpty(str){
 for(var i=1;i<10;i++){
  if(get(e.p3+".sysj2"+str+".l3.sa"+i)){break;};
 }
 return i-1;
}



//细集料筛分试验（水洗法）计算说明

var sfzl = getrs("r.sfzl");
var shl = getrs("r.shl");
var fjsy = getrs("r.fjsy");
var ljsy = getrs("r.ljsy");
var tgl = getrs("r.tgl");
var pjbfl = getrs("r.pjbfl");
var xdms = getrs("r.xdms");
var mspjz = getrs("r.mspjz");
main("");
main("copy11");
function main(str){
 var sbArr = [];
 var n = isEmpty(str);
 var s3 = getf(e.p3+".sysj.l2"+str+".s3");
 var s4 = getf(e.p3+".sysj.l2"+str+".s4");
 var s5 = getSub(s3,s4);
 for(var i=1;i<=n;i++){
  if(!get(e.p3+".sysj2"+str+".l3.sa"+i)  &&
     get(e.p3+".sysj2"+str+".l4.sb"+i)){
   sbArr.push(getf(e.p3+".sysj2"+str+".l4.sb"+i))
  }
 }
 if(sbArr.length===n){
  var s6 = getSum.apply({},sbArr);
  set(e.p3+".sysj1.l2"+str+".s6",rds(s6,sfzl));
  var s7 = getSub(s3,s4);
  set(e.p3+".sysj1.l2"+str+".s7",rds(s7,sfzl));
  var s8 = s7/s4*100;
  set(e.p3+".sysj1.l2"+str+".s8",rds(s8,shl));
 }
}





function isEmpty(str){
 for(var i=1;i<10;i++){
  if(isDataEmpty(e.p3+".sysj2"+str+".l3.sa"+i)){
   break;
  }
 }
 return i-1;
}
