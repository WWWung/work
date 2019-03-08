//粗集料堆积密度与孔隙率
if(get(e.p3+".sysj1.l2.s1")){
 dis(e.p3+".sysj1.l2.s2",false);
 dis(e.p3+".sysj1.l2.s4",false);
 dis(e.p3+".sysj1.l2.s6",false);
 var s3 = getf(e.p3+".sysj1.l2.s3");
 set(e.p3+".sysj1.l2.s3",s3);
 var s4 = get(e.p3+".sysj1.l2.s4");
 var s5 = getSub2(s4,s3);
 set(e.p3+".sysj1.l2.s5",rds(s5,getrs("r.szl")));
 var s6 = get(e.p3+".sysj1.l2.s6");
 var s7 = getdsv("ds.smdsz","sw",s6,"tzl");
 set(e.p3+".sysj1.l2.s7",s7);
 dis(e.p3+".sysj1.l2.s8",true,(s5&&s7)?rds(s5/s7,getrs("r.rlttj")):"");
}else{
 dis(e.p3+".sysj1.l2.s2",true,"");
 dis(e.p3+".sysj1.l2.s4",true,"");
 dis(e.p3+".sysj1.l2.s6",true,"");
 set("d_sysj_sysj1_l2_s13","");
 set("d_sysj_sysj1_l2_s7","");
 dis(e.p3+".sysj1.l2.s8",false);
}
var mddw = get(e.p3+".sysj2.l6.s11");
var rMd = getrs("r.md");
var se1 = get(e.p3+".sysj3.l8.se1");
var sb1 = get(e.p3+".sysj3.l8.sb1");
var sa4 = get(e.p3+".sysj3.l11.sa4");
var sb4 = get(e.p3+".sysj3.l11.sb4");
var sa7 = get(e.p3+".sysj3.l14.sa7");
var sb7 = get(e.p3+".sysj3.l14.sb7");
var s8 = get(e.p3+".sysj1.l2.s8");
var sa2=null,sb2=null,sa5=null,sb5=null,sa8=null,sb8=null;
if(mddw[0]==="g"&&s3&&s8){
 dw("g","g/c㎥");
 sa2 = se1?rds(getSub(se1,1000*s3)/s8/1000,rMd):"";
 sb2 = sb1?rds(getSub(sb1,1000*s3)/s8/1000,rMd):"";
 sa5 = sa4?rds(getSub(sa4,1000*s3)/s8/1000,rMd):"";
 sb5 = sb4?rds(getSub(sb4,1000*s3)/s8/1000,rMd):"";
 sa8 = sa7?rds(getSub(sa7,1000*s3)/s8/1000,rMd):"";
 sb8 = sb7?rds(getSub(sb7,1000*s3)/s8/1000,rMd):"";
}else if(mddw[0]==="t"){
 dw("kg","t/㎥");
 sa2 = se1?rds(getSub(se1,s3)/s8,rMd):"";
 sb2 = sb1?rds(getSub(sb1,s3)/s8,rMd):"";
 sa5 = sa4?rds(getSub(sa4,s3)/s8,rMd):"";
 sb5 = sb4?rds(getSub(sb4,s3)/s8,rMd):"";
 sa8 = sa7?rds(getSub(sa7,s3)/s8,rMd):"";
 sb8 = sb7?rds(getSub(sb7,s3)/s8,rMd):"";
};
if(se1&&s3&&s8){
 set(e.p3+".sysj3.l9.sa2",sa2);
}else{
 set(e.p3+".sysj3.l9.sa2","");
}
if(sb1&&s3&&s8){
 set(e.p3+".sysj3.l9.sb2",sb2);
}else{
 set(e.p3+".sysj3.l9.sb2","");
}
if(sa4&&s3&&s8){
 set(e.p3+".sysj3.l12.sa5",sa5);
}else{
 set(e.p3+".sysj3.l12.sa5","");
}
if(sb4&&s3&&s8){
 set(e.p3+".sysj3.l12.sb5",sb5);
}else{
 set(e.p3+".sysj3.l12.sb5","");
}
if(sa7&&s3&&s8){
 set(e.p3+".sysj3.l15.soa2",sa8);
}else{
 set(e.p3+".sysj3.l15.soa2","");
}
if(sb7&&s3&&s8){
 set(e.p3+".sysj3.l15.s8",sb8);
}else{
 set(e.p3+".sysj3.l15.s8","");
}
var rMdcdz = getrs("r.mdcdz");
if(sa2&&sb2){
set(e.p3+".sysj3.l10.s3",rds(getAvg(sa2*1,sb2*1),rMdcdz));
}else{
set(e.p3+".sysj3.l10.s3","")
}
var s6 = rds(getAvg(sa5*1,sb5*1),rMdcdz);
var sb9 = rds(getAvg(sa8*1,sb8*1),rMdcdz);
var rKxl = getrs("r.kxl");
var s9 = get(e.p3+".sysj2.l4.s9");
var s10 = get(e.p3+".sysj2.l5.s10");
var sb10 = rds(getAvg(sa2*1,sb2*1),rMdcdz)/s9?rds(getSub(1-rds(getAvg(sa2*1,sb2*1),rMdcdz)/s9)*100,rKxl):"";
var s11 = s6/s9?rds(getSub(1,s6/s9)*100,rKxl):"";
var s12 = sb9/s10?rds(getSub(1,sb9/s10)*100,rKxl):"";
if(sa5&&sb5){
 set(e.p3+".sysj3.l13.s6",s6);
}else{
 set(e.p3+".sysj3.l13.s6","");
}
if(sa8,sb8){
set(e.p3+".sysj3.l16.s9",sb9);
}else{
set(e.p3+".sysj3.l16.s9","");
}
set(e.p3+".sysj3.l17.s10",sb10);
set(e.p3+".sysj3.l18.s11",s11);
set(e.p3+".sysj3.l19.s12",s12);

function dw(v1,v2){
 set(e.p3+".sysj3.l8.zldw",v1);
 set(e.p3+".sysj3.l9.mddw",v2);
 set(e.p3+".sysj3.l10.mddw",v2);
 set(e.p3+".sysj3.l11.zldw",v1);
 set(e.p3+".sysj3.l12.mddw",v2);
 set(e.p3+".sysj3.l13.mddw",v2);
 set(e.p3+".sysj3.l14.zldw",v1);
 set(e.p3+".sysj3.l15.mddw",v2);
 set(e.p3+".sysj3.l16.mddw",v2);
};











//地基承载力
var s2 = getf(e.p3+".l1.s2");
var ctlx = get(e.p4+".sysj1.ctlx");
var flag;

if(ctlx=="轻型触探"){flag = 1;};
if(ctlx=="重型触探"){flag = 2;};
if(ctlx=="特重型触探"){flag = 3;};

var s11arr = [],s12arr = [];

for(var i=1;i<15;i++){
 var str = i==1?"":"copy"+i;
 var s4 = getf(e.p2+".grsj"+str+".s4");
 var s5 = "";
 if(i==1){
  s5 = getSub2(s4,s2);
 }else{
  let val = getf(e.p2+".grsj"+((i-1)==1?"":"copy"+(i-1))+".s4");
  s5 = getSub2(s4,val);
 }
 set(e.p2+".grsj"+str+".s5",s5);
 var s6 = getf(e.p2+".grsj"+str+".s6");
 var s7 = "";
 if(flag==2||flag==3){
  if(!isDataEmpty(s6)&&!isDataEmpty(s5)){
   s7 = rds(s6/s5*10,0);
  }
 }
 set(e.p2+".grsj"+str+".s7",s7);
 var s8 = "";
 if(flag==3){
  if(!isDataEmpty(s7)){
   s8 = rds(getSub(3* s7,0.5),0);
  }
 }
 set(e.p2+".grsj"+str+".s8",s8);

 //补充  s9   部分   内插法
 var s9="";
 if(flag==3){
    //杆长
    var s3 = getf(e.p2+".grsj"+str+".s3");
    if(!isDataEmpty(s3)){
        if(s3<=2){
          s9=1.00;

        }
        if(s3>2&&s3<=20){

        }

    }
 }

 if(flag==2){
    //杆长
    var s3 = getf(e.p2+".grsj"+str+".s3");
    if(!isDataEmpty(s3)){
        if(s3<=2){
          s9=1.00;

        }
        if(s3>2&&s3<=20){

        }

    }
 }


 set(e.p2+".grsj"+str+".s9",s9);

 //补充 s10
 var s10=""
 if(flag==1){
   if(!isDataEmpty(s4)){
     s10 = s4;
   }
 }
 if(flag==2||flag==3){
   if(!isDataEmpty(s4)&&!isDataEmpty(s9)){
     s10 = rds(s4*s9,0);
   }
 }
 set(e.p2+".grsj"+str+".s10",s10);


 // 补充 s11 和 s12 有一个条件 勾选按经验公式计算未显示
 var s11 = "",s12 = "";
 if(flag===1){
   if(!isDataEmpty(s10)&&(s10<15||s10>30)){
     s11 = getSub(8*s10,20);
     s12 = getSub(14.6*s10,36);
   }
   if(15<=s10&&s10<=30){
     s11 = getVal1(s10,"ds.qxczl","jbczl",5);
     s12 = getVal1(s10,"ds.qxczl","jxczl",5);
   }
 }else if(flag===2){
   if(!isDataEmpty(s10)&&(s10<3||s10>10)){
     s11 = -0.227*getPow(s10,3)-5.324*getPow(s10,2)-0.573* s10+80.23;
     s12 = -0.454*getPow(s10,3)-10.64*getPow(s10,2)+1.147* s10-160.4;
   }
   if(3<=s10&&s10<=10){
     s11 = getVal1(s10,"ds.zxczl","jbczl");
     s12 = getVal1(s10,"ds.zxczl","jxczl");
   }
 }else if(flag===3){
   if(!isDataEmpty(s10)&&(s10<3||s10>40)){
     s11 = -0.006*getPow(s10,3)-0.157*getPow(s10,2)+41.73*s10-3.724;
     s12 = -0.015*getPow(s10,3)-0.346*getPow(s10,2)+96.64*s10-4.658;
   }else if(3<=s10&&s10<=40){
     s11 = getVal1(s10,"ds.zxczl","jbczl");
     s12 = getVal1(s10,"ds.tzczl","jxczl");
   }
 }
 s11 = rds(s11,0);
 s12 = rds(s12,0);
 set(e.p2+".grsj"+str+".s11",s11);
 set(e.p2+".grsj"+str+".s12",s12);
 s11arr.push(s11*1);
 s12arr.push(s12*1);
};

var s13 = getMax(...s11arr);
var s14 = getMax(...s12arr);
s13 = s13?s13:"";
s14 = s14?s14:"";
set("d_page_page4_sysj2_l3copy10_s13",s13);
set("d_page_page4_sysj2_l3copy10_s14",s14);


function getVal1(s10,str1,str2,n){
  var val = getdsv("ds.qxczl","yxjs",s10,str2);
  n = n?n:1;
  if(!val){
   var x1 = Math.floor(s10/n)*n;
   var x2 = Math.ceil(s10/n)*n;
   var y1 = getdsv(str1,"yxjs",x1,str2)*1;
   var y2 = getdsv(str1,"yxjs",x2,str2)*1;
   val = y1+((y2-y1)/(x2-x1))*(s10-x1);
  }
  return val;
}


//弯沉
var wdxz = getrs("r.wdxz");
var wcz = getrs("r.wcz");
var pjz = getrs("r.pjz");
var bzc = getrs("r.bzc");
var dbz = getrs("r.dbz");

var s10 = getf(e.p2+".l2.s10");
var s11 = getf(e.p2+".l2.s11");
var s9 = getf(e.p2+".l2.s9");
var s14 = get(e.p2+".l3.s14");
//计算s15
var s15 = "",t = "";
if(!isDataEmpty(s10)&&!isDataEmpty(s11)&&s14){
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

 t = rds(getSum(getSum(t25,tm),te)/3,1);
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
  if(50<=s9&&s9<100){s15 = val2(50,100,ka50,ke100);};
  if(100<=s9&&s9<200){s15 = val2(100,200,ke100,ka200);};
  if(200<=s9&&s9<300){s15 = val2(200,300,ka200,ka300);};
  if(s9<50&&s9>0){s15 = getSum(-0.0067*t,1.133)};
  if(s9>300){s15 = getSum(-0.0213*t,1.427)};
 }else{
  if(50<=s9&&s9<100){s15 = val2(50,100,kb50,kb100);};
  if(100<=s9&&s9<200){s15 = val2(100,200,kb100,kb200);};
  if(200<=s9&&s9<300){s15 = val2(200,300,kb200,kb300);};
  if(s9<50&&s9>0){s15 = getSum(-0.0120*t,1.240)};
  if(s9>300){s15 = getSum(-0.0075*t,1.150)};
 }
}
set(e.p2+".l3.s15",rds(s15,wdxz));
//计算l5行
var s11 = get(e.p2+".l2.s11");
var s3 = "",s4 = "";
if(!isDataEmpty(t)&&s14){
 s3 = s11;
 s4 = t;
}
set(e.p1+".s3",s3);
set(e.p1+".s4",s4);

//sa6,sb6
var sa6 = getf(e.p1+".sa6");
var sb6 = getf(e.p1+".sb6");
var sa5 = getf(e.p1+".sa5");
var sb5 = getf(e.p1+".sb5");
var sa7 = getSub2(sa6,sa5),sb7 = getSub2(sb6,sb5);
set(e.p1+".sa7",sa7);
set(e.p1+".sb7",sb7);

var s12 = getf(e.p2+".l2.s12");
var s15 = getf(e.p2+".l3.s15");
var sa8 = "",sb8 = "";
if(s14){
 if(!isDataEmpty(s12)){
  if(!isDataEmpty(sa7)&&!isDataEmpty(s15)){
   sa8 = sa7*s15*s12;
  }
  if(!isDataEmpty(sb7)&&!isDataEmpty(s15)){
   sb8 = sb7*s15*s12;
  }
 }else{
  if(!isDataEmpty(sa7)&&!isDataEmpty(s15)){
   sa8 = sa7*s15
  }
  if(!isDataEmpty(sb7)&&!isDataEmpty(s15)){
   sb8 = sb7*s15
  }
 }
}else{
 set(e.p1+".s3","");
 set(e.p1+".s4","");
 if(!isDataEmpty(s12)){
  if(!isDataEmpty(sa7)){
   sa8 = sa7*s12;
  }
  if(!isDataEmpty(sb7)){
   sb8 = sb8*s12;
  }
 }else{
  if(!isDataEmpty(sa7)){
   sa8 = sa7;
  }
  if(!isDataEmpty(sb7)){
   sb8 = sb8;
  }
 }
}
set(e.p1+".sa8",rds(sa8,wcz));
set(e.p1+".sb8",rds(sb8,wcz));
var sa8arr = [],sb8arr = [];

var num = getCopyCount("d_sysj_l5");
for(var i=1;i<=num;i++){
 var str = i==1?"":"copy"+i;
 var sa8 = getf(e.p2+".l5"+str+".sa8");
 var sb8 = getf(e.p2+".l5"+str+".sb8");
 if(!isDataEmpty(sa8)){
  sa8arr.push(sa8);
 }
 if(!isDataEmpty(sb8)){
  sb8arr.push(sb8);
 }
}

var s17 = getf(e.p2+".l3.s17");

var s11 = "",ss12 = "",s13 = "";
var s10 = get(e.p2+".l6.s10");
var s14 = "";
var bzlxs = getf(e.p2+".l2.s13");
if(s10){
 s11 = sa8arr.length+sb8arr.length;
 var arr = sa8arr.concat(sb8arr);
 var pjz = arr.length?getAvg(...arr):null;
 var bzc = arr.length?getSta(...arr):null;
 if(isDataEmpty(s17)){
  if(arr.length){
   ss12 = pjz;
   s13 = bzc;
  }
  if(!isDataEmpty(ss12)&&!isDataEmpty(s13)){
   s14 = ss12 - s13*bzlxs;
  }
 }else{
   var tcfw1 = getSum2(pjz,s17*bzc);
   var tcfw2 = getSub2(pjz,s17*bzc);
   arrFilter(tcfw1,tcfw2)
   let nArr = handle(sa8arr,tcfw1,tcfw2).concat(handle(sb8arr,tcfw1,tcfw2));
   ss12 = getAvg(...nArr);
   s13 = getSta(...nArr);
   if(!isDataEmpty(ss12)&&!isDataEmpty(s13)){
    s14 = ss12 - s13*bzlxs;
   }
 }
}
set(e.p2+".l6.s11",s11);
set(e.p2+".l6.s12",rds(ss12,pjz));
set(e.p2+".l6.s13",rds(s13,bzc));
set(e.p2+".l6.s14",rds(s14,dbz));


function val1(x1,x2,y1,y2) {
  return y1+(y2-y1)/(x2-x1)*(s9/2-x1);
};
function val2(x1,x2,y1,y2) {
  return y1+(y2-y1)/(x2-x1)*(s9-x1);
};
function handle(arr,val1,val2){
 let rls = [];
 for(var i=0;i<arr.length;i++){
  if(arr[i]<=val1&&arr[i]>=val2){
   rls.push(arr[i]);
  }
 }
 return rls;
}

function arrFilter(val1,val2){
console.log(val1,val2)
 for(var i=1;i<=num;i++){
  let str = i==1?"":"copy"+i;
  let sa8 = getf(e.p2+".l5"+str+".sa8");
  let sb8 = getf(e.p2+".l5"+str+".sb8");
  if(sa8>val1||sa8<val2){
   sa8 += "*";
  }
  if(sb8>val1||sb8<val2){
   sb8 += "*";
  }
  set(e.p2+".l5"+str+".s2",sa8);
  set(e.p2+".l5"+str+".s2",sb8);
 }
}






















//规准仪法
var s9=0,s10=0,s11=0;
var s1 = getf(e.p3+".l2.sjsj2.s1");
for(var i=1;i<7;i++){
 var str = i!==1?"copy"+i:"";
 var s3 = getf(e.p3+".l2.sysj3.l1"+str+".s3");
 var s4 = getf(e.p3+".l2.sysj3.l1"+str+".s4");
 var rHjzl = getrs("r.hjzl")
 var rZzhl = getrs("r.zzhl");
 var rPzhl = getrs("r.pzhl");
 var rHjhl = getrs("r.hjhl");

 var s5 = rds(getSum(s3,s4),rHjzl);

 var s6;
 var s7;
 var s8 = rds(s5/s1*100,rHjhl);
  if(s5 == 0){s5 = ""};
  if(s8 == 0){s8 = ""};
  set(e.p3+".l2.sysj3.l1"+str+".s5",s5);
  set(e.p3+".l2.sysj3.l1"+str+".s8",s8);
 if(get(e.p3+".l2.sysj3.l1"+str+".s3")){
  s6 = rds(s3/s1*100,rZzhl);
 }else{
  s6 = "";
 }
 if(get(e.p3+".l2.sysj3.l1"+str+".s4")){
  s7 = rds(s4/s1*100,rPzhl);
 }else{
  s7 = "";
 }
 set(e.p3+".l2.sysj3.l1"+str+".s6",s6);
 set(e.p3+".l2.sysj3.l1"+str+".s7",s7);
 s9 += s3;
 s10 += s4;
 s11 += s5*1;
};
s9 = rds(s9/s1*100,rZzhl);
s10 = rds(s10/s1*100,rPzhl);
var rZzl = getrs("r.zzl");
var s12 = rds(s11/s1*100,rZzl)
if(s9 == 0){s9 = ""};
if(s10 == 0){s10 = ""};
if(s11 == 0){s11 = ""};
if(s12 == 0){s12 = ""};
set(e.p3+".sysj4.zzhl",s9);
set(e.p3+".sysj4.pzhl",s10);
set(e.p3+".sysj4.zpzzl",rds(s11,rZzl));
set(e.p3+".sysj4.zpzhl",s12);

//游标卡尺法
var zl1 = getrs("r.zl1"),
    zl2 = getrs("r.zl2"),
    zpzhl = getrs("r.zpzhl"),
    zpzcdz = getrs("r.zpzcdz");

for(var i=3;i<=5;i++){
 var s1 = getf(e.p2+".l"+i+".s1");
 var s2 = getf(e.p2+".l"+i+".s2");
 var s3 = getSub2(s1,s2);
 set(e.p2+".l"+i+".s3",rds(s3,zl1));
 var s4 = getf(e.p2+".l"+i+".s4");
 var s5 = getf(e.p2+".l"+i+".s5");
 var s6,s7,s8;
 if(get(e.p2+".l"+i+".s4")&&get(e.p2+".l"+i+".s2")){ s6=s4/s2*100}else{s6=""};
 if(get(e.p2+".l"+i+".s5")&&get(e.p2+".l"+i+".s3")){ s7=s5/s3*100}else{s7=""};
 set(e.p2+".l"+i+".s6",rds(s6,zpzhl));
 set(e.p2+".l"+i+".s7",rds(s7,zpzhl));
 if(get(e.p2+".l"+i+".s1")&&getSum(s4,s5)){
  s8 = getSum(s4,s5)/s1*100;
 }else{
  s8 = "";
 }
 set(e.p2+".l"+i+".s8",rds(s8,zpzhl));
}

var sa8 = getf(e.p2+".l3.s8");
var sb8 = getf(e.p2+".l4.s8");
var sc8 = getf(e.p2+".l5.s8");
var sa6 = getf(e.p2+".l3.s6");
var sb6 = getf(e.p2+".l4.s6");
var sc6 = getf(e.p2+".l5.s6");
var sa7 = getf(e.p2+".l3.s7");
var sb7 = getf(e.p2+".l4.s7");
var sc7 = getf(e.p2+".l5.s7");
var flag = true,str = "";

if(sa6&&sa7&&sa8&&sb6&&sb7&&sb8){
if(getAbs(getSub(sa8,sb8))/getAvg(sa8,sb8)*100>=20){
 flag = false;
 str = null;
var s9 = getAvg2(sa6,sb6,sc6);
var s10 = getAvg2(sa7,sb7,sc7);
var s11 = getAvg2(sa8,sb8,sc8);
}else{
 flag = true;
 str = "";
 var s9 = getAvg2(sa6,sb6);
 var s10 = getAvg2(sa7,sb7);
 var s11 = getAvg2(sa8,sb8);
}
}



for(var i=1;i<=5;i++){
  if(i!=3){
   dis(e.p2+".l5.s"+i,flag,str);
  }
 }
if(s9&&s10&&s11){
 set(e.p2+".l4.s9",rds(s9,zpzcdz));
 set(e.p2+".l4.s10",rds(s10,zpzcdz));
 set(e.p2+".l4.s11",rds(s11,zpzcdz));
}else{
 set(e.p2+".l4.s9","");
 set(e.p2+".l4.s10","");
 set(e.p2+".l4.s11","");
}
if(flag===true){
 set(e.p2+".l5.s3","");
 set(e.p2+".l5.s6","");
 set(e.p2+".l5.s7","");
 set(e.p2+".l5.s8","");
}

//sysj2
var zl1 = getrs("r.zl1"),
    zl2 = getrs("r.zl2"),
    zpzhl = getrs("r.zpzhl"),
    zpzcdz = getrs("r.zpzcdz");


for(var i=2;i<=4;i++){
 var s1 = getf(e.p2+".l"+i+".s1");
 var s2 = getf(e.p2+".l"+i+".s2");
 var s3;
 if(s1&&s2){
  s3 = s2/s1*100;
 }else{
  s3 = "";
 }
 set(e.p2+".l"+i+".s3",rds(s3,zpzhl));
}

var se1 = getf(e.p2+".l2.s1");
var sa2 = getf(e.p2+".l2.s2");
var sb1 = getf(e.p2+".l3.s1");
var sb2 = getf(e.p2+".l3.s2");
var sa3 = getf(e.p2+".l2.s3");
var sb3 = getf(e.p2+".l3.s3");
var sc1 = getf(e.p2+".l4.s1");
var sc2 = getf(e.p2+".l4.s2");
var sc3 = getf(e.p2+".l4.s3");
var s4;
if(se1&&sa2&&sb1&&sb2){
 if(getAbs(getSub2(sa3,sb3))/getAvg2(sa3,sb3)*100<20){
  dis(e.p2+".l4.s1",true,"");
  dis(e.p2+".l4.s2",true,"");
  set(e.p2+".l4.s3","");
  s4 = getAvg2(sa3,sb3);
 }else{
  s4 = getAvg2(sa3,sb3,sc3);
  dis(e.p2+".l4.s1",false);
  dis(e.p2+".l4.s2",false);
 }
}else{
 s4 = "";
}
set(e.p2+".l3.s4",rds(s4,zpzcdz));

// 网篮法
var tpqp = get(e.p3+".sysj1.l1.tpqp");
var sa3 = get(e.p3+".sysj1.l3.sa3");
var sb3 = get(e.p3+".sysj1.l3.sb3");
var sa4 = get(e.p3+".sysj1.l4.sa4");
var sb4 = get(e.p3+".sysj1.l4.sb4");
var sa5 = get(e.p3+".sysj1.l5.sa5");
var sb5 = get(e.p3+".sysj1.l5.sb5");
var szzl = getrs("r.szzl");

if(tpqp){
 dis(e.p3+".sysj1.l3.sa3",true,"");
 dis(e.p3+".sysj1.l3.sb3",true,"");
 dis(e.p3+".sysj1.l4.sa4",true,"");
 dis(e.p3+".sysj1.l4.sb4",true,"");
 dis(e.p3+".sysj1.l5.sa5",false,sa5);
 dis(e.p3+".sysj1.l5.sb5",false,sb5);
 sa5 = get(e.p3+".sysj1.l5.sa5");
 sb5 = get(e.p3+".sysj1.l5.sb5");
}else{
 sa5=getSub2(sa4,sa3);
 sb5=getSub2(sb4,sb3);
 sa5 = sa5?rds(sa5,szzl):"";
 sb5 = sb5?rds(sb5,szzl):"";
 dis(e.p3+".sysj1.l3.sa3",false);
 dis(e.p3+".sysj1.l3.sb3",false);
 dis(e.p3+".sysj1.l4.sa4",false);
 dis(e.p3+".sysj1.l4.sb4",false);
 dis(e.p3+".sysj1.l5.sa5",true,sa5);
 dis(e.p3+".sysj1.l5.sb5",true,sb5);
}
var sa6 = get(e.p3+".sysj1.l6.sa6");
var sb6 = get(e.p3+".sysj1.l6.sb6");
var sa7 = get(e.p3+".sysj1.l7.sa7");
var sb7 = get(e.p3+".sysj1.l7.sb7");
var sa8,sb8,sa9,sb9,se10,sb10,se11,sb11;

var rXdmd = getrs("r.xdmd");
if(sa5&&sa6&&sa7){
sa8=rds(sa7/getSub(sa7,sa5),rXdmd);
sa9=rds(sa6/ getSub(sa6,sa5),rXdmd);
se10=rds(sa7/ getSub(sa6,sa5),rXdmd);
}else{
sa8 = "";
sa9 = "";
se10 = "";
}
if(sb5&&sb6&&sb7){
sb8=rds(sb7/getSub(sb7,sb5),rXdmd);
sb9=rds(sb6/ getSub(sb6,sb5),rXdmd);
sb10=rds(sb7/ getSub(sb6,sb5),rXdmd);
}else{
sb8 = "";
sb9 = "";
sb10 = "";
}
var rXsl = getrs("r.xsl");
se11=rds(getSub(sa6,sa7)/sa7*100,rXsl);
sb11=rds(getSub(sb6,sb7)/sb7*100,rXsl);

set(e.p3+".sysj1.l8.sa8",sa8);
set(e.p3+".sysj1.l8.sb8",sb8);
set(e.p3+".sysj1.l9.sa9",sa9);
set(e.p3+".sysj1.l9.sb9",sb9);
set(e.p3+".sysj1.l10.se10",se10);
set(e.p3+".sysj1.l10.sb10",sb10);
set(e.p3+".sysj1.l11.se11",se11);
set(e.p3+".sysj1.l11.sb11",sb11);
var s12,cc12;
var rXdmdcdz = getrs("r.xdmdcdz");
if(!isDataEmpty(sa8)&&!isDataEmpty(sb8)){
let val = rds(getSub2(sa8,sb8),2)*1;
if(getAbs(val)>0.02){
  vis(e.p3+".sysj2.l12.cc12",true,"超差");
  s12 = "";
}else{
  vis(e.p3+".sysj2.l12.cc12",false);
  s12 = getAvg(sa8*1,sb8*1);
}
}else{
  vis(e.p3+".sysj2.l14.cc14",false);
}
if(s12 == 0){s12=""};
set(e.p3+".sysj2.l12.s12",rds(s12,rXdmdcdz));

var s13,cc13;
if(!isDataEmpty(sa9)&&!isDataEmpty(sb9)){
let val = rds(getSub2(sa9,sb9),2)*1;
if(getAbs(val)>0.02){
  vis(e.p3+".sysj2.l13.cc13",true,"超差");
  s13 = "";
}else{
  vis(e.p3+".sysj2.l13.cc13",false);
  s13= rds(getAvg(sa9*1,sb9*1),rXdmdcdz);
}
}else{
  vis(e.p3+".sysj2.l14.cc14",false);
}
if(s13 == 0){s13=""};
set(e.p3+".sysj2.l13.s13",s13);

var s14,cc14;
if(!isDataEmpty(se10)&&!isDataEmpty(sb10)){
let val = getSub2(se10,sb10);
if(getAbs(val)>0.02){
  vis(e.p3+".sysj2.l14.cc14",true,"超差");
  s14 = "";
}else{
  vis(e.p3+".sysj2.l14.cc14",false);
  s14= getAvg(se10*1,sb10*1);
}
}else {
  vis(e.p3+".sysj2.l14.cc14",false);
}
if(s14 == 0){s14=""};
set(e.p3+".sysj2.l14.s14",rds(s14,rXdmdcdz));

var s15 = get(e.p3+".sysj2.l15.s15");
var s16 = getdsv("ds.smdsz","sw",s15,"smd");
var md = getrs("r.md");
s16 = rds(s16,md);
set(e.p3+".sysj2.l16.s16",s16);

var s17,s18,s19;
if(s12){
  s17 = s12*s16;
}else{
  s17 = "";
}

set(e.p3+".sysj2.l17.s17",rds(s17,md));
if(s13){
  s18 = s13*s16;
}else{
  s18 = "";
}
if(s18 == 0){s18=""};
set(e.p3+".sysj2.l18.s18",rds(s18,md));
if(s14){
  s19 = s14*s16;
}else{
  s19 = "";
}
set(e.p3+".sysj2.l19.s19",rds(s19,md));
var s20 = "";
var xslcdz = getrs("r.xslcdz");
if(!isDataEmpty(se11)&&!isDataEmpty(sb11)){
 se11 = se11*1;
 sb11 = sb11*1;
 if(getAbs(getSub(se11,sb11))>0.2){
  s20 = ""
  vis("d_sysj_sysj2_l20_cc15",true,"超差");
 }else{
  s20 = getAvg(se11,sb11);
  vis("d_sysj_sysj2_l20_cc15",false);
 }
}else{
 s20 = "";
 vis("d_sysj_sysj2_l20_cc15",false);
}
set(e.p3+".sysj2.l20.s20",rds(s20,xslcdz));

//含泥量
let str = get(e.p3+".sysj1.l1.bt4");
let str1 = str?str.substring(0,str.length-4):"";
let str2 = str?str.substring(str.length-3):"";
let str3 = str?str1+"测定值"+str2:"";
set(e.p3+".sysj1.l1.bt5",str3);

if(true){
 let se1 = get(e.p3+".sysj1.l2.se1");
 let sa2 = get(e.p3+".sysj1.l2.sa2");
 let sb1 = get(e.p3+".sysj1.l2.sb1");
 let sb2 = get(e.p3+".sysj1.l2.sb2");
 let rHnlsdz = getrs("r.hnlsdz");
 let sa3 = rds(getSub(se1,sa2)/se1*100,rHnlsdz);
 let sb3 = rds(getSub(sb1,sb2)/sb1*100,rHnlsdz);
 let s4 = "";

 if(se1&&sa2){
  set(e.p3+".sysj1.l2.sa3",sa3);
 }else{
  set(e.p3+".sysj1.l2.sa3","");
 }
 if(sb1&&sb2){
  set(e.p3+".sysj1.l2.sb3",sb3);
 }else{
  set(e.p3+".sysj1.l2.sb3","");
 }
 if(sa3&&sb3){
  set(e.p3+".sysj1.l2.s4",s4);
  let val = rds(getAbs(getSub(sa3,sb3)),2)*1;
  if(val>0.2){
   s4 = "";
   vis(e.p3+".sysj1.l2.cc",true,"超差");
  }else{
   s4 = rds(getAvg(sa3*1,sb3*1),rHnlsdz);
   vis(e.p3+".sysj1.l2.cc",false);
  }
 }else{
   vis(e.p3+".sysj1.l2.cc",false);
 }
set(e.p3+".sysj1.l2.s4",s4);
}

var se1 = get(e.p3+".sysj2.l4.se1");
var sa2 = get(e.p3+".sysj2.l4.sa2");
var sb1 = get(e.p3+".sysj2.l4.sb1");
var sb2 = get(e.p3+".sysj2.l4.sb2");
var rHnl = getrs("r.hnl");
var sa3 = rds(getSub(se1,sa2)/se1*100,rHnl);
var sb3 = rds(getSub(sb1,sb2)/sb1*100,rHnl);
var s4 = "";
if(se1&&sb1){
 set(e.p3+".sysj2.l4.sa3",sa3);
}else{
 set(e.p3+".sysj2.l4.sa3","");
}
if(sa2&&sb2){
 set(e.p3+".sysj2.l4.sb3",sb3);
}else{
 set(e.p3+".sysj2.l4.sb3","");
}
if(sa3&&sb3){
 let val = rds(getAbs(getSub(sa3,sb3)),2)*1;
 if(val>0.1){
 s4 = "";
 vis(e.p3+".sysj2.l4.cc",true,"超差");
 }else{
  s4 = rds(getAvg(sa3*1,sb3*1),getrs("r.hnlsdz"));
  vis(e.p3+".sysj2.l4.cc",false);
 }
}else{
  vis(e.p3+".sysj2.l4.cc",false);
}
 set(e.p3+".sysj2.l4.s4",s4);


//-------------

var s1 = getf("d_sysj1_l2_sjsj2_s1");
var s3 = getf(e.p1 + ".s3");
var s4 = getf(e.p1 + ".s4");

var s5 = rds(getSum2(s3,s4),getrs("r.+hjzl"));
set(e.p1 + ".s5",s5);

var s6;
if(isDataEmpty(s1) || isDataEmpty(s3)){
s6 = null;
}else{
s6 = rds(s3*100/s1,getrs("r.+zzhl"));
};
set(e.p1 + ".s6",s6);


var s7;
if(isDataEmpty(s1) || isDataEmpty(s4)){
s7 = null;
}else{
s7 = rds(s4*100/s1,getrs("r.+pzhl"));
}
set(e.p1 + ".s7",s7);

var s8;
if(isDataEmpty(s1) || isDataEmpty(s4)){
s8 = null;
}else{
s8 = rds(s5*100/s1,getrs("r.+hjhl"));
}
set(e.p1 + ".s8",s8);

var zzzl=0;pzzl=0;zzl=0;

for(var i=2;i<7;i++){
    var getzl =
    getf("d_sysj1_l2_sysj3_l1copy"+i+"_s3");
    zzzl += getzl;
 }
zzzl+=getf("d_sysj1_l2_sysj3_l1_s3");



for(var i=2;i<7;i++){
    var getzl =
    getf("d_sysj1_l2_sysj3_l1copy"+i+"_s4");
    pzzl += getzl;
 }
pzzl+=getf("d_sysj1_l2_sysj3_l1_s4");


var s9;
if(isDataEmpty(s1) || isDataEmpty(s3)){
s9 = null;
}else{
s9 = rds(zzzl*100/s1,getrs("r.+zzhl"));
}
set(e.p4 + ".sysj4.zzhl",s9);

var s10;
if(isDataEmpty(s1) || isDataEmpty(s4)){
s10 = null;
}else{
s10 = rds(pzzl*100/s1,getrs("r.+pzhl"));
}
set(e.p4 + ".sysj4.pzhl",s10);

var s11;
if(isDataEmpty(s1) || isDataEmpty(s3) || isDataEmpty(s4)){
s11 = null;
}else{
s11 = rds(zzzl+pzzl,getrs("r.+zzl"));
}
set(e.p4 + ".sysj4.zpzzl",s11);

var s12;
if(isDataEmpty(s1) || isDataEmpty(s3) || isDataEmpty(s4)){
s12 = null;
}else{
s12 = rds(s11*100/s1,getrs("r.+zhl"));
}
set(e.p4 + ".sysj4.zpzhl",s12);


//-----------
var s3arr = [];
var s1 = getf("d_sysj1_l2_sjsj2_s1");
for(var i=1;i<7;i++){
 var str = i===1?"":"copy"+i;
 var s3 = getf(e.p2+".l1"+str+".s3");
 s3arr.push(s3);
 var s6 = "";
 if(!isDataEmpty(s3)&&!isDataEmpty(s1)){
  s6 = s3/s1*100;
 }
 set(e.p2+".l1"+str+".s6",s6);
}
