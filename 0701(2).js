var tpqp = get(e.p3+".sysj1.l1.tpqp");
var sa3 = get(e.p3+".sysj1.l3.sa3");
var sb3 = get(e.p3+".sysj1.l3.sb3");
var sa4 = get(e.p3+".sysj1.l4.sa4");
var sb4 = get(e.p3+".sysj1.l4.sb4");
var sa5,sb5;
if(tpqp){
 dis(e.p3+".sysj1.l3.sa3",true,sa3);
 dis(e.p3+".sysj1.l3.sb3",true,sb3);
 dis(e.p3+".sysj1.l4.sa4",true,sa4);
 dis(e.p3+".sysj1.l4.sb4",true,sb4);
 dis(e.p3+".sysj1.l5.sa5",false);
 dis(e.p3+".sysj1.l5.sb5",false);
 sa5 = get(e.p3+".sysj1.l5.sa5");
 sb5 = get(e.p3+".sysj1.l5.sb5");
}else{
 sa5=getSub(sa4,sa3);
 sb5=getSub(sb4,sb3);
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
var sa8,sb8,sa9,sb9,sa10,sb10,sa11,sb11;

var rXdmd = getrs("r.xdmd");
sa8=rds(sa7/getSub(sa7,sa5),rXdmd);
sb8=rds(sb7/getSub(sb7,sb5),rXdmd);
sa9=rds(sa6/ getSub(sa6,sa5),rXdmd);
sb9=rds(sb6/ getSub(sb6,sb5),rXdmd);
sa10=rds(sa7/ getSub(sa6,sa5),rXdmd);
sb10=rds(sb7/ getSub(sb6,sb5),rXdmd);
var rXsl = getrs("r.xsl");
sa11=rds(getSub(sa6,sa7)/sa7*100,rXsl);
sb11=rds(getSub(sb6,sb7)/sb7*100,rXsl);

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
if(getAbs(getSub(sa8,sb8))>0.02){
  vis(e.p3+".sysj2.l12.cc12",true);
  set(e.p3+".sysj2.l12.cc12","超差");
  s12 = "";
}else{
  vis(e.p3+".sysj2.l12.cc12",false);
  s12 = getAvg(sa8*1,sb8*1);
}
set(e.p3+".sysj2.l12.s12",rds(s12,rXdmdcdz));

var s13,cc13;
if(getAbs(getSub(sa9,sb9))>0.02){
  vis(e.p3+".sysj2.l13.cc13",true);
  set(e.p3+".sysj2.l13.cc13","超差");
  s13 = "";
}else{
  vis(e.p3+".sysj2.l13.cc13",false);
  s13= rds(getAvg(sa9*1,sb9*1),rXdmdcdz);
}
set(e.p3+".sysj2.l13.s13",s13);

var s14,cc14;
if(getAbs(getSub(sa10,sb10))>0.02){
  vis(e.p3+".sysj2.l14.cc14",false);
  set(e.p3+".sysj2.l14.cc14","超差");
  s14 = "";
}else{
  vis(e.p3+".sysj2.l14.cc14",false);
  s14= getAvg(sa10*1,sb10*1);
}
set(e.p3+".sysj2.l14.s14",rds(s14,rXdmdcdz));

var s15 = get(e.p3+".sysj2.l15.s15");
var s16 = getdsv("ds.smdsz","sw",s15,"smd")
var md = getrs("r.md");
set(e.p3+".sysj2.l16.s16",rds(s16,md));

var s17,s18,s19;
if(s12){
  s17 = rds(s12*s16,md);
}else{
  s17 = "";
}
set(e.p3+".sysj2.l17.s17",s17);
if(s13){
  s18 = s13*s16;
}else{
  s18 = "";
}
set(e.p3+".sysj2.l18.s18",rds(s18,md));
if(s14){
  s19 = s14*s16;
}else{
  s19 = "";
}
set(e.p3+".sysj2.l19.s19",rds(s19,md));
var s20 = getAvg(sa11*1,sb11*1);
var xslcdz = getrs("r.xslcdz")
set(e.p3+".sysj2.l20.s20",rds(s20,xslcdz));
