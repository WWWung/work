var s10 = getf(e.p2+".l2.s10");
var s11 = getf(e.p2+".l2.s11");
var s9 = getf(e.p2+".l2.s9");

if(!isDataEmpty(s10)&&!isDataEmpty(s11)){
 var t25 = rds(0.569*getSum(s10,s11),1);
 var tm25=getSub(0.569* getSum(s10,s11),9);
 var te25=getSub(0.569* getSum(s10,s11),9);
 var tm50=getSub(0.498* getSum(s10,s11),3);
 var te50=getSub(0.498* getSum(s10,s11),3);
 var tm100=0.411* getSum(s10,s11);
 var te100=0.411*getSum(s10,s11);
 var tm150=getSum(0.363* getSum(s10,s11),3);
 var te150=getSum(0.363* getSum(s10,s11),3);
 var tm200=getSum(0.339* getSum(s10,s11),5);
 var te200=getSum(0.339* getSum(s10,s11),5);
 var tm300=getSum(0.324* getSum(s10,s11),6);
 var te300=getSum(0.324* getSum(s10,s11),6);

 var tm = "",te = "";
 if(25<=s9/2&&s9/2<50){tm = val1(25,50,tm25,tm50)};
 if(50<=s9/2&&s9/2<100){tm = val1(50,100,tm50,tm100)};
 if(100<=s9/2&&s9/2<150){tm = val1(100,150,tm100,tm150)};
 if(150<=s9/2&&s9/2<200){tm = val1(150,200,tm150,tm200)};
 if(200<=s9/2&&s9/2<250){tm = val1(200,250,tm200,tm250)};
 if(250<=s9/2&&s9/2<300){tm = val1(250,300,tm250,tm300)};
 if(s9/2<25){tm = tm25;};
 if(s9/2>300){tm = tm300};

 if(25<=s9&&s9<50){te = val2(25,50,te25,te50)};
 if(50<=s9&&s9<100){te = val2(50,100,te50,te100)};
 if(100<=s9&&s9<150){te = val2(100,150,te100,te150)};
 if(150<=s9&&s9<200){te = val2(150,200,te150,te200)};
 if(200<=s9&&s9<250){te = val2(200,250,te200,te250)};
 if(250<=s9&&s9<300){te = val2(250,300,te250,te300)};
 if(s9/2<25){te = te25;};
 if(s9/2>300){te = te300};

 var t = rds(getSum(getSum(t25,tm),te)/3,1);
 ka50=getSum((-0.0067)*t,1.133);
 ke100=getSum((-0.0117)*t,1.233);
 ka200=getSum((-0.0180)*t,1.360);
 ka300=getSum((-0.0213)*t,1.427);
 kb50=getSum((-0.0120)*t,1.240);
 kb100=getSum((-0.009)*t,1.18);
 kb200=getSum((-0.008)*t,1.160);
 kb300=getSum((-0.0075)*t,1.150);
 var s15 = "";
 if(t>=20){
  if(50<=s9&&s9<100){s15 = val(50,100)}



}else {
  if(50<=s9&&s9<100){s15 = val2(50,100,kb50,kb100);};
  if(100<=s9&&s9<200){s15 = val2(100,200,kb100,kb200);};
  if(200<=s9&&s9<300){s15 = val2(200,300,kb200,kb300);};
  if(s9<50&&s9>0){s15 = getSum(-0.0120*t,1.240)};
  if(s9>300){s15 = getSum(-0.0075*t,1.150)};
}
}


function val1(x1,x2,y1,y2) {
  return y1+(y2-y1)/(x2-x1)*(s9/2-x1);
};
function val2(x1,x2,y1,y2) {
  return y1+(y2-y1)/(x2-x1)*(s9-x1);
};



function gets10(s5,s9){
 var s10 = "";
 if(s9>50||s9<20||s5=="水平"){
   s10 = 0;
 };
 if(s9<=50&&s9>=20){
   if(s5==="向上90°"){
     s10 = val(s9,"je1");
   }
   if(s5==="向上60°"){
     s10 = val(s9,"je2");
   }
   if(s5==="向上45°"){
     s10 = val(s9,"jd3");
   }
   if(s5==="向上30°"){
     s10 = val(s9,"jd4");
   }
   if(s5==="向下30°"){
     s10 = val(s9,"jd5");
   }
   if(s5==="向下45°"){
     s10 = val(s9,"jd6");
   }
   if(s5==="向下60°"){
     s10 = val(s9,"jd7");
   }
   if(s5==="向下90°"){
     s10 = val(s9,"jd8");
   }
 }
}

function val(s9,str) {
  var s10 = getdsv("ds.xzb1","pjhtz",s9,str);
  if(!s10){
    var x2 = Math.ceil(s10);
    var x1 = Math.floor(s10);
    var y2 = getdsv("ds.xzb1","pjhtz",x2,str);
    var y1 = getdsv("ds.xzb1","pjhtz",x1,str);
    s10 = y1+((y2-y1)/(x2-x1))*(s9-x1);
  }
  return s10;
}



var cqpjz = getrs("r.cqpjz");
var jdxzz = getrs("r.jdxzz");
var jzxzz = getrs("r.jzxzz");

var num = 10;
for(var i=1;i<=10;i++){
 var str = i==1?"":"copy"+i;
 var s3 = getf(e.p2+".l3"+str+".s3");
 set(e.p4+".page4.sysj2.l5"+str+".s8",s3);
 var s9 = "";
 var s10 = "";
 var saArr = getArr(str);
 if(saArr){
  s9 = getAvg(...saArr);
 }
 set(e.p4+".page4.sysj2.l5"+str+".s9",rds(s9,cqpjz));
 var s5 = get(e.p2+".l3"+str+".s5");
 s10 = gets10(s5,s9);
console.log(s10)
 set(e.p4+".page4.sysj2.l5"+str+".s10",rds(s10,cqpjz));
};





function getArr(str){
 var arr = [];
 for(var i=1;i<17;i++){
  var sa = getf(e.p2+".l3"+str+".sa"+i);
  if(!isDataEmpty(sa)){arr.push(sa)};
 }
 if(arr.length==16){
  arr.sort((a,b)=>{
   return a-b;
  })
  arr.splice(13,3);
  arr.splice(0,3);
  return arr;
 }else{
  return null;
 }
}

function gets10(s5,s9){
 if(!s9){return ""};
 var s10 = "";
 if(s9>50||s9<20||s5=="水平"){
   s10 = 0;
 };
 if(s9<=50&&s9>=20){
   if(s5==="向上90°"){
     s10 = val(s9,"je1");
   }
   if(s5==="向上60°"){
     s10 = val(s9,"je2");
   }
   if(s5==="向上45°"){
     s10 = val(s9,"jd3");
   }
   if(s5==="向上30°"){
     s10 = val(s9,"jd4");
   }
   if(s5==="向下30°"){
     s10 = val(s9,"jd5");
   }
   if(s5==="向下45°"){
     s10 = val(s9,"jd6");
   }
   if(s5==="向下60°"){
     s10 = val(s9,"jd7");
   }
   if(s5==="向下90°"){
     s10 = val(s9,"jd8");
   }
 }
 return s10;
}

function val(s9,str) {
  var s10 = getdsv("ds.xzb1","pjhtz",s9,str);
  if(!s10){
    var x2 = Math.ceil(s10);
    var x1 = Math.floor(s10);
    var y2 = getdsv("ds.xzb1","pjhtz",x2,str);
    var y1 = getdsv("ds.xzb1","pjhtz",x1,str);
    s10 = y1+((y2-y1)/(x2-x1))*(s9-x1);
  }
  return s10;
}







//-塌落
var pxsy = get(e.p2+".bt10");
var s1 = getf(e.p1+".s1");
var s2 = getf(e.p1+".s2");
var s4 = getf(e.p1+".s4");
var s5 = getf(e.p1+".s5");
var s3 = "",s6 = "";

if(pxsy){
 s3 = s1;
 s6 = s4;
}else{
 if(!isDataEmpty(s1)&&!isDataEmpty(s2)){
  s3 = rds(getAvg(s1,s2)/5,0)/5
 }else{
  s3 = "";
 }
 if(!isDataEmpty(s5)&&!isDataEmpty(s4)){
  s6 = rds(getAvg(s4,s5)/5,0)/5;
 }else{
  s6 = "";
 }
}

set(e.p1+".s3",s3);
set(e.p1+".s6",s6);
