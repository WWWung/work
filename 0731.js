var lszl = getrs("r.lszl");
var szl = getrs("r.szl");
var stj = getrs("r.stj");
var hsl = getrs("r.hsl");
var gmd = getrs("r.gmd");
var ssl = getrs("r.ssl");

var s2 = get(e.p2+".l1.s2");
var s3 = get(e.p2+".l1.s3");


var s14 = getf(e.p1+".s14");
var s15 = getf(e.p1+".s15");
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
 s18 = rds(s17/s2,0);
}
if(!isDataEmpty(s16)&&!isDataEmpty(s18)){
 s19 = rds(s16/s18,smd);
}
set(e.p1+".s18",s18);
set(e.p1+".s19",s19);

for(var i=0;i<2;i++){
 str = i?"a":"b";
 var s20 = getf(e.p1+".s"+str+20);
 var s21 = getdsv("ds.sh","hh",s20,"hzl");
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

var s7 = getf(e.p2+".l2.s7");
var s8 = getf(e.p2+".l2.s8");
var s30 = "";
if(getSub2(s7,s8)&&!isDataEmpty(s29)){
 s30 = getSum(s7*s29,s8);
}
set(e.p1+".s30",rds(s30,gmd));
if(!isDataEmpty(s26)){
 s27 = 100*s26/s30;
}
