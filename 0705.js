var zl1 = getrs("r.zl1"),
    zl2 = getrs("r.zl2"),
    zpzhl = getrs("r.zpzhl"),
    zpzcdz = getrs("r.zpzcdz");

check(!!(get(e.p3+".sysj1.l1.jllx")[0]==="沥"));
var s8a = get(e.p2+".l3.s8");
var s8b = get(e.p2+".l4.s8");
var s6a = get(e.p2+".l3.s6");
var s6b = get(e.p2+".l4.s6");
var s7a = get(e.p2+".l3.s7");
var s7b = get(e.p2+".l4.s7");
var s9,s10,s11;

var s4;

if(get(e.p3+".sysj1.l1.jllx")[0]==="路"){
 dis(e.p3+".sysj1.l5.s1",true,"");
 dis(e.p3+".sysj1.l5.s2",true,"");
 dis(e.p3+".sysj1.l5.s4",true,"");
 dis(e.p3+".sysj1.l5.s5",true,"");
 calculate2(2);
 calculate2(3);
 calculate2(4);
 var sb3a = getf(e.p3+".sysj2.l2.s3");
 var sb3b = getf(e.p3+".sysj2.l3.s3");
 var sb3c = getf(e.p3+".sysj2.l4.s3");
 s4 = getAvg(sb3a,sb3b,sb3c);
 set(e.p3+".sysj2.l3.s4",rds(s4,zpzhl))
}else{
 if(getAbs(getSub(s8a*1,s8b*1))/getAvg(s8a*1,s8b*1)*100<20){
 dis(e.p3+".sysj1.l5.s1",true,"");
 dis(e.p3+".sysj1.l5.s2",true,"");
 dis(e.p3+".sysj1.l5.s3",true,"");
 dis(e.p3+".sysj1.l5.s4",true,"");
 dis(e.p3+".sysj1.l5.s5",true,"");
 dis(e.p3+".sysj1.l5.s6",true,"");
 dis(e.p3+".sysj1.l5.s7",true,"");
 dis(e.p3+".sysj1.l5.s8",true,"");
 s9 = getAvg(s6a*1,s6b*1);
 s10 = getAvg(s7a*1,s7b*1);
 s11 = getAvg(s8a*1,s8b*1);
}else{
 dis(e.p3+".sysj1.l5.s1",false);
 dis(e.p3+".sysj1.l5.s2",false);
 dis(e.p3+".sysj1.l5.s4",false);
 dis(e.p3+".sysj1.l5.s5",false);
 var s6c = get(e.p2+".l5.s6");
 var s7c = get(e.p2+".l5.s7");
 var s8c = get(e.p2+".l5.s8");
 s9 = getAvg(s6a*1,s6b*1,s6c*1);
 s10 = getAvg(s7a*1,s7b*1,s7c*1);
 s11 = getAvg(s8a*1,s8b*1,s8c*1);
}
set(e.p2+".l4.s9",rds(s9,zpzcdz));
set(e.p2+".l4.s10",rds(s10,zpzcdz));
set(e.p2+".l4.s11",rds(s11,zpzcdz));
}

function check(flag){
 dis(e.p3+".sysj2.l4.s1",flag,flag?"":null);
 dis(e.p3+".sysj2.l4.s2",flag,flag?"":null);
 dis(e.p3+".sysj2.l2.s1",flag,flag?"":null);
 dis(e.p3+".sysj2.l2.s2",flag,flag?"":null);
 dis(e.p3+".sysj2.l3.s1",flag,flag?"":null);
 dis(e.p3+".sysj2.l3.s2",flag,flag?"":null);
 dis(e.p3+".sysj1.l3.s1",!flag,!flag?"":null);
 dis(e.p3+".sysj1.l3.s2",!flag,!flag?"":null);
 dis(e.p3+".sysj1.l3.s4",!flag,!flag?"":null);
 dis(e.p3+".sysj1.l3.s5",!flag,!flag?"":null);
 dis(e.p3+".sysj1.l4.s1",!flag,!flag?"":null);
 dis(e.p3+".sysj1.l4.s2",!flag,!flag?"":null);
 dis(e.p3+".sysj1.l4.s4",!flag,!flag?"":null);
 dis(e.p3+".sysj1.l4.s5",!flag,!flag?"":null);
 calculate1(3);
 calculate1(4);
 calculate1(5);
}

function calculate1(l){
 let s1 = get(e.p2+".l"+l+".s1");
 let s2 = get(e.p2+".l"+l+".s2");
 let s4 = get(e.p2+".l"+l+".s4");
 let s5 = get(e.p2+".l"+l+".s5");

 let s3 = getSub(s1,s2);
 let s6 = s4/s2*100;
 let s7 = s5/s3*100;
 let s8 = getSum(s4*1,s5*1)/s1*100;

 if(s1&&s2&&s4&&s5){
   set(e.p2+".l"+l+".s3",rds(s3,zl2));
   set(e.p2+".l"+l+".s6",rds(s6,zpzhl));
   set(e.p2+".l"+l+".s7",rds(s7,zpzhl));
   set(e.p2+".l"+l+".s8",rds(s8,zpzhl));
 }
}
function calculate2(l){
 let s1 = get(e.p3+".sysj2.l"+l+".s1");
 let s2 = get(e.p3+".sysj2.l"+l+".s2");
 let s3 = s2/s1*100;
 if(s1&&s2){
  set(e.p3+".sysj2.l"+l+".s3",rds(s3,zpzhl));
 }
}

















emptySysj(jllx[0]==="路")
function emptySysj(flag){
 for(var i=3;i<=4;i++){
  for(var j=1;j<=8;j++){
   if(j==3||j==6||j==7||j==8){
    set(e.p3+".sysj1.l"+i+".s"+j,"");
   }else{
    dis(e.p3+".sysj1.l"+i+".s"+j,flag,"");
   }
  }
  if(i==4){
   set(e.p3+".sysj1.l4.s9","");
   set(e.p3+".sysj1.l4.s10","");
   set(e.p3+".sysj1.l4.s11","");
  }
 }
 for(var i=2;i<=3;i++){
  for(var j=1;j<=3;j++){
   if(j==3){
    set(e.p3+".sysj2.l"+i+".s"+j,"");
   }else{
    dis(e.p3+".sysj2.l"+i+".s"+j,!flag,"");
   }
  }
  if(i==3){
   set(e.p3+".sysj2.l3.s4","");
  }
 }
}



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
if(se1&&sa2&&sb1&&sb2){
var s4;
 if(getAbs(getSub2(s3,s3))/getAvg2(s3,s3)*100<20){
  s4 = getAvg2(sa3,sb3);
 }else{
  s4 = getAvg2(sa3,sb3,sc3);
 }
 set(e.p2+".3.s4",rds(s4,zpzcdz));
}
















if(get(e.p3+".sysj1.l2.s1")){
 dis(e.p3+".sysj1.l2.s2",false);
 dis(e.p3+".sysj1.l2.s4",false);
 dis(e.p3+".sysj1.l2.s6",false);
 var s3 = getdsv("ds.rltsz","th",get(e.p3+".sysj1.l2.s2"),"tzl");
 set(e.p3+".sysj1.l2.s3",s3);
 var s4 = get(e.p3+".sysj1.l2.s4");
 var s5 = rd(getSub(s4,s3),getrs("r.szl"));
 set(e.p3+".sysj1.l2.s5",s5);
 var s6 = get(e.p3+".sysj1.l2.s6");
 var s7 = getdsv("ds.smdsz","sw",s6,"tzl");
 set(e.p3+".sysj1.l2.s7",s7);
 dis(e.p3+".sysj1.l2.s8",true,(s5&&s7)?rd(s5/s7,getrs("r.rlttj")):"");
}else{
 dis(e.p3+".sysj1.l2.s2",true,"");
 dis(e.p3+".sysj1.l2.s4",true,"");
 dis(e.p3+".sysj1.l2.s6",true,"");
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
var sa2,sb2,sa5,sb5,sa8,sb8;
if(mddw[0]==="g"){
 dw("g","g/c㎥");
 sa2 = rds(getSub(se1,1000*s3)/s8/1000,rMd);
 sb2 = rds(getSub(sb1,1000*s3)/s8/1000,rMd);
 sa5 = rds(getSub(sa4,1000*s3)/s8/1000,rMd);
 sb5 = rds(getSub(sb4,1000*s3)/s8/1000,rMd);
 sa8 = rds(getSub(sa7,1000*s3)/s8/1000,rMd);
 sb8 = rds(getSub(sb7,1000*s3)/s8/1000,rMd);
}else if(mddw[0]==="t"){
 dw("kg","t/㎥");
 sa2 = rds(getSub(se1,s3)/s8,rMd);
 sb2 = rds(getSub(sb1,s3)/s8,rMd);
 sa5 = rds(getSub(sa4,s3)/s8,rMd);
 sb5 = rds(getSub(sb4,s3)/s8,rMd);
 sa8 = rds(getSub(sa7,s3)/s8,rMd);
 sb8 = rds(getSub(sb7,s3)/s8,rMd);
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
var sb10 = rd(getSub(1-rds(getAvg(sa2*1,sb2*1),rMdcdz)/s9)*100,rKxl);
var s11 = rd(getSub(1-s6/s9)*100,rKxl);
var s12 = rd(getSub(1-sb9/s10)*100,rKxl);
if(sa5&&sb5){
 set(e.p3+".sysj3.l13.s6",s6);
}else{
 set(e.p3+".sysj3.l13.s6","");
}
console.log(sa8,sb8)
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
}
