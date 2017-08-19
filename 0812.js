//水泥胶沙强度试验

var kzqd = getrs("r.kzqd");
var kzpjz = getrs("r.kzpjz");
var kyqd = getrs("r.kyqd");
var kypjz = getrs("r.kypjz");

var s3 = getf(e.p2+".l2.s3");
var s4 = getf(e.p2+".l2.s4");
var s1 = get(e.p2+".l1.s1");

if(s1=="极限荷载"){
 var s6;
 var s5 = getf(e.p1+".s5");
 if(!isDataEmpty(s5)){
  s6 = s5/1.600;
 }else{
  s6 = "";
 }
 set(e.p1+".s6",rds(s6,kyqd));
 var s8;
 var s7 = getf(e.p1+".s7");
 if(!isDataEmpty(s7)){
  s8 = 1.5*s7/1.600;
 }else{
  s8 = "";
 }
 set(e.p1+".s8",rds(s8,kyqd));
 var s9 = pcCal(6);
 var s10 = pcCal(8);
 set(e.p2+".kyjg.s9",rds(s9,kypjz));
 set(e.p2+".kyjg.s10",rds(s10,kypjz));
}else{
 var s9 = pcCal(6);
 var s10 = pcCal(8);
 set(e.p2+".kyjg.s9",rds(s9,kypjz));
 set(e.p2+".kyjg.s10",rds(s10,kypjz));
}

function pcCal(num){
 var arr = loop(num);
 var res = [];
 var c = num==6?1:2;
 var avg = "";
 var s9 = '';
 if(arr){
   s9 = getValFilterd(arr,10);
 }
}

function loop(num){
 var arr = [];
 for(var i=1;i<7;i++){
  var str = i==1?"":"copy"+i;
  var val = getf(e.p2+".l4"+str+".s"+num);
  if(!isDataEmpty(val)){
   arr.push(val);
  }
 }
 if(arr.length==6){return arr}else{return null};
}
