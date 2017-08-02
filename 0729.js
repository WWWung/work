var qdcz = getrs("r.qdcz");
var qdcdz = getrs("r.qdcdz");

var sbArr = [];
var hsxs = "";
var s7 = "";

var s5 = get(e.p2+".sjl.s5");
if(s5 == "150×150×150"){
 main(22.5);
 hsxs = "1.00";
}else if(s5 == "100×100×100"){
 main(10);
 hsxs = "0.95";
}else if(s5 == "200×200×200"){
 hsxs = "1.05";
 main(40);
}


var s6 = "";

if(sbArr.length == 3){
 var max = getMax(...sbArr);
 var avg = getAvg(...sbArr);
 var min = getMin(...sbArr);
 var mid = toMid(...sbArr);
 if(getSub(max,mid)/mid<=0.15&&getSub(mid,min)/mid<=0.15){
  s6 = avg;
  i("");
 }else if(getSub(max,mid)/mid<=0.15&&getSub(mid,min)/mid>0.15){
  s6 = mid;
  i(min);
 }else if(getSub(max,mid)/mid>0.15&&getSub(mid,min)/mid<=0.15){
  s6 = mid;
  i(max);
 }else if(getSub(max,mid)/mid>0.15&&getSub(mid,min)/mid>0.15){
  i(max,min);
 }
}
set(e.p2+".sjr.s6",rds(s6,qdcdz));
if(!isDataEmpty(s6)&&!isDataEmpty(hsxs)){
 s7 = s6*hsxs
}
set("d_sysj_l2_sjl_hsxs",hsxs);
set("d_sysj_l2_sjr_s7",rds(s7,qdcdz));


function main(num){
 for(var i=1;i<4;i++){
  var sa = getf(e.p1+".sa"+i);
  var sb = "";
  if(!isDataEmpty(sa)){
   sb = rds(sa/num,qdcz);
   sbArr.push(sb*1);
  }
  set(e.p1+".sb"+i,sb);
 }
}

function i(val1,val2){
 sbArr.forEach((item,index)=>{
  var sb = get(e.p1+".sb"+(index+1))
  if((item==val1 || item==val2)){
   vis(e.p1+".cc"+(index+1),true,"超差");
  }else{
   vis(e.p1+".cc"+(index+1),false,"");
  }
 })
}

function toMid(a,b,c){
 var arr1 = [a,b,c];
 arr1.sort((a,b)=>{
  return a-b;
 })
 return arr1[1];
}
















//路基路面压实度

var lszl = getrs("r.lszl");
var szl = getrs("r.szl");
var stj = getrs("r.stj");
var hsl = getrs("r.hsl");
var gmd = getrs("r.gmd");
var ssl = getrs("r.ssl");
var ysd = getrs("r.ysd");
var ysdpjz = getrs("r.ysdpjz");
var ysdbzc = getrs("r.ysdbzc");
var ysddbz = getrs("r.ysddbz");
var hgl = getrs("r.hgl");

var s2 = get(e.p2+".l1.s2");
var s3 = get(e.p2+".l1.s3");

var s14 = getf(e.p1+".s14");
var s15 = getf(e.p1+".s15");
var s16 = getf(e.p1+".s16");
var s17 = "";
if(s3){
 var s13 = getf(e.p1+".s13");
 var s12 = getf(e.p1+".s12");
 s17 = getSub2(getSub2(s14,s15),getSub2(s12,s13));
}else{
 var s1 = getf(e.p2+".l1.s1");
 s17 = getSub2(getSub2(s14,s15),s1);
}
set(e.p1+".s17",rds(s17,lszl));
var s18 = "",s19 = "";
if(!isDataEmpty(s17)&&!isDataEmpty(s2)){
 s18 = rds(s17/s2,szl);
}
if(!isDataEmpty(s16)&&!isDataEmpty(s18)){
 s19 = rds(s16/s18,stj);
}
set(e.p1+".s18",s18);
set(e.p1+".s19",s19);

for(var i=0;i<2;i++){
 str = i?"a":"b";
 var s20 = getf(e.p1+".s"+str+20);
 var s21 = getdsv("ds.hsz","hh",s20,"hzl");
 set(e.p1+".s"+str+21,s21);
 var s22 = getf(e.p1+".s"+str+22);
 var s23 = getf(e.p1+".s"+str+23);
 var s24 = "";
 if(getSub2(s22,s23)&&getSub2(s23,s21)){
  s24 = 100* getSub(s22,s23)/getSub(s23,s21);
 }
 set(e.p1+".s"+str+24,rds(s24,hsl));
}

var sa24 = getf(e.p1+".sa24");
var sb24 = getf(e.p1+".sb24");
var s25 = rds(getAvg2(sa24,sb24),hsl);
set(e.p1+".s25",s25);
var s26 = "";
if(!isDataEmpty(s25)&&!isDataEmpty(s19)){
 s26 = rds(s19/(getSum(1,s25/100)),gmd);
}
set(e.p1+".s26",s26);

var s5 = get(e.p2+".l2.s5");
var s6 = get(e.p2+".l2.s6");
var jsff = 0;
if(s5==="干土法"){jsff=1}else if(s5==="湿土法"){jsff=2};
var qysl = 0;
if(s6==="烘干部分试样质量"){qysl=1}else if(s6==="全部试样质量"){qysl=2};
var s29 = "";
var sa23 = getf(e.p1+".sa23");
var sb23 = getf(e.p1+".sb23");
var sa20 = getf(e.p1+".sa20");
var sb20 = getf(e.p1+".sb20");
var sa22 = getf(e.p1+".sa22");
var sb22 = getf(e.p1+".sb22");
var s28 = getf(e.p1+".s28");
var s16 = getf(e.p1+".s16");
if(jsff===1&&qysl===1){
 if(getSub2(sa23,sa20)&&getSub2(sb23,sb20)&&!isDataEmpty(s28)){
  s29=100*s28/(getSum(geSub(sa23,sa20), geSub(sb23,sb20)));
 }
}
if(jsff===1&&qysl===2){
 if(getSub2(s16,s25)&&!isDataEmpty(s28)){
  s29=100*s28/(s16/(getSum(1,s25/100)));
 }
}
if(jsff===2&&qysl===1){
 if(getSub2(sa22,sa20)&&getSub2(sb22,sb20)&&!isDataEmpty(s28)){
  s29=100*s28/(getsum(gesub2(sa22,sa20), gesub2(sb22,sb20)));
 }
}
if(jsff===2&&qysl===2){
 if(getSub2(s28,s16)){
  s29=100*s28/s16;
 }
}
set(e.p1+".s29",rds(s29,ssl));


var s30 = getf(e.p2+".l1.s30");

var s27 = "";
if(!isDataEmpty(s26)){
 s27 = 100*s26/s30;
}
set(e.p1+".s27",rds(s27,ysd));

var num = getCopyCount("d_page_sysj4_l4");
var s36 = get(e.p2+".l5.s36");
var s32 = get(e.p2+".l5.s32");
var s40 = getf(e.p2+".l5.s40");
var s41 = getf(e.p2+".l5.s41");
var s27arr = [];
var s33 = 0;
var s35 = "";
var s37 = "";
var s38 = "";
var s39 = "";
var s42 = "";
var s34 = 0;
if(s32){
 for(var i=1;i<=num;i++){
  let str = i==1?"":"copy"+i;
  let s27 = getf(e.p2+".l4"+str+".s27");
  if(!isDataEmpty(s27)){s27arr.push(s27)};
 }
 s33 = s27arr.length;

 if(!isDataEmpty(s33)){
  s37 = gets37(s33)
 }

 if(s27arr.length===num){
  s38 = rds(getAvg(...s27arr),ysdpjz);
  s39 = rds(getSta(...s27arr),ysdbzc);
 }

 if(!isDataEmpty(s38)&&!isDataEmpty(s39)&&!isDataEmpty(s37)){
  s42 = rds(getSub(s38*1,s37*s39),ysddbz);
 }

 if(s42*1>=s40){
  if(!isDataEmpty(s41)){
   for(var i=0;i<s27arr.length;i++){
    if(s27arr[i]>=getSub(s41,2)){
     s34++;
    }
   }
  }
  s35 = s34/s33*100;
 }
}

s33 = s33?s33:"";
set(e.p2+".l5.s33",s33);
set(e.p2+".l5.s35",rds(s35,hgl));
set(e.p2+".l5.s42",s42);
set(e.p2+".l5.s37",s37);
set(e.p2+".l5.s38",rds(s38,ysdpjz));
set(e.p2+".l5.s39",rds(s39,ysdbzc));

function gets37(s33) {
  var s37 = "";
  if(s36==="99%"){
    if(s33>=2&&s33<=100){
      s37 = value(s33,"bzl1");
    }else if(s33>100){
      s37 = rds(2.3265/getPow(s33,0.5),3);
    }
  }
  if(s36==="95%"){
    if(s33>=2&&s33<=100){
      s37 = value(s33,"bzl2");
    }else if(s33>100){
      s37 = rds(1.6449/getPow(s33,0.5),3);
    }
  }
  if(s36==="90%"){
    if(s33>=2&&s33<=100){
      s37 = value(s33,"bzl3");
    }else if(s33>100){
      s37 = rds(1.2815/getPow(s33,0.5),3);
    }
  }
  return s37;
}

function value(s33,str){
  let val = getdsv("ds.bzlsz","jcds",s33,str);
  if(!val){
    let x1 = Math.floor(s33/10)*10;
    let x2 = Math.ceil(s33/10)*10;
    let y1 = getdsv("ds.bzlsz","jcds",x1,str);
    let y2 = getdsv("ds.bzlsz","jcds",x2,str);
    val = y1+((y2-y1)/(x2-x1))*(s33-x1);
  }
  return rds(val,3);
}
