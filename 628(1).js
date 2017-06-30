
//---------------------------------------
//  粗集料密度及吸水率试验

var tpqp = get(e.p3+".sysj1.l1.tpqp");
var sa3 = get(e.p3+".sysj1.l3.sa3");
var sb3 = get(e.p3+".sysj1.l3.sb3");
var sa4 = get(e.p3+".sysj1.l4.sa4");
var sb4 = get(e.p3+".sysj1.l4.sb4");
var sa5,sb5;
if(!isDataEmpty(tpqp)){
 sa3 = null;
 sb3 = null;
 sa4 = null;
 sb4 = null;
 dis(e.p3+".sysj1.l3.sa3",false);
 dis(e.p3+".sysj1.l3.sb3",false);
 dis(e.p3+".sysj1.l4.sa4",false);
 dis(e.p3+".sysj1.l4.sb4",false);
}else{
 sa5=getsub(sa4,sa3);
 sb5=getsub(sb4,sb3);
 dis(e.p3+".sysj1.l5.sa5",true,sa5);
 dis(e.p3+".sysj1.l5.sb5",true,sb5);
}

var sa6 = get(e.p3+".sysj1.l6.sa6");
var sb6 = get(e.p3+".sysj1.l6.sb6");
var sa7 = get(e.p3+".sysj1.l7.sa7");
var sb7 = get(e.p3+".sysj1.l7.sb7");
var sa8,sb8,sa9,sb9,sa10,sb10,sa11,sb11;

var rXdmd = getrs("r.xdmd");
sa8=rd(sa7/getSub(sa7,sa5),rXdmd);
sb8=rd(sb7/getSub(sb7,sb5),rXdmd);
sa9=rd(sa6/ getSub(sa6,sa5),rXdmd);
sb9=rd(sb6/ getSub(sb6,sb5),rXdmd);
sa10=rd(sa7/ getSub(sa6,sa5),rXdmd);
sb10=rd(sb7/ getSub(sb6,sb5),rXdmd);

var rXsl = getrs("r.xsl");
sa11=rd(getSub(sa6,sa7)/sa7*100,rXsl);
sb11=rd(getSub(sb6,sb7)/sb7*100,rXsl);

set(e.p3+".sysj1.l8.sa8",sa8);
set(e.p3+".sysj1.l8.sb8",sb8);
set(e.p3+".sysj1.l9.sa9",sa9);
set(e.p3+".sysj1.l9.sb9",sb9);
set(e.p3+".sysj1.l10.sa10",sa10);
set(e.p3+".sysj1.l10.sb10",sb10);
set(e.p3+".sysj1.l11.sa11",sa11);
set(e.p3+".sysj1.l11.sb11",sb11);

var s12,cc12;
var rXdmdcdz = getrs("r.xdmdcdz");
if(getabs(getSub(sa8,sb8))>0.02){
  set(e.p3+".sysj2.l12.cc12","*");
  s12 = "";
}else{
  s12 = rd(getAvg(sa8,sb8),rXdmdcdz);
}
set(e.p3+".sysj2.l12.s12",s12);

var s13,cc13;
if(getabs(getSub(sa9,sb9))>0.02){
  set(e.p3+".sysj2.l13.cc13","*");
  s13 = "";
}else{
  s13= rd(getAvg(sa9,sb9),rXdmdcdz);
}
set(e.p3+".sysj2.l13.s13",s13);

var s14,cc14;
if(getabs(getSub(sa10,sb10))>0.02){
  set(e.p3+".sysj2.l14.cc14","*");
  s14 = "";
}else{
  s14= rd(getAvg(sa10,sb10),rXdmdcdz);
}
set(e.p3+".sysj2.l14.s14",s14);

var s15 = get(e.p3+".sysj2.l15.s15");
var s16 = getdsv("ds.smdsz","sw",s15,"smd");
set(e.p3+".sysj2.l16.s16",s16);

var s17,s18,s19;
var rMd = getrs("r.md");
if(s12){
  s17 = rd(s12*s16,rMd);
}else{
  s17 = "";
}
set(e.p3+".sysj2.l17.s17",s17);
if(s13){
  s18 = rd(s13*s16,rMd);
}else{
  s18 = "";
}
set(e.p3+".sysj2.l18.s18",s18);
if(s14){
  s19 = rd(s14*s16,rMd);
}else{
  s19 = "";
}
set(e.p3+".sysj2.l19.s19",s19);

var s20 = getAvg(sa11,sb11);
set(e.p3+".sysj2.l20.s20",s20);














set(e.code+".l1copy3.s2","16.0~19.0")；
set(e.code+".l1copy4.s2","19.0~26.5")；
set(e.code+".l1copy5.s2","26.5~31.5")；
set(e.code+".l1copy6.s2","31.5~37.5")；
console.log(get(e.p3+".l2.sysj3.l1"+str+".s3"))




if(mddw[0]==="g"){
 dw("g","g/c㎥");
 var sa2 = rd(getSub(sa1,1000*s3)/s8/1000,rMd);
 var sb2 = rd(getSub(sb1,1000*s3)/s8/1000,rMd);
 var sa5 = rd(getSub(sa4,1000*s3)/s8/1000,rMd);
 var sb5 = rd(getSub(sb4,1000*s3)/s8/1000,rMd);
 var sa8 = rd(getsub(sa7,1000*s3)/s8/1000,rMd);
 var sb8 = rd(getsub(sb7,1000*s3)/s8/1000,rMd);
}else if(mddw[0]==="t"){
 dw("kg","t/㎥");
 var sa2 = rd(getSub(sa1,s3)/s8,rMd);
 var sb2 = rd(getSub(sb1,s3)/s8,rMd);
 var sa5 = rd(getSub(sa4,s3)/s8,rMd);
 var sb5 = rd(getSub(sb4,s3)/s8,rMd);
 var sa8 = rd(getsub(sa7,s3)/s8,rMd);
 var sb8 = rd(getsub(sb7,s3)/s8,rMd);
};
