var rtsd = getrs("r.rtsd");
var zl = getrs("r.zl");
var hsl = getrs("r.hsl");
var pjhsl = getrs("r.pjhsl");
var dcjg = getrs("r.dcjg");
var pjjg = getrs("r.pjjg");

var se1 = getf(e.p1+".se1");
var sb1 = getf(e.p1+".sb1");
var s2;
if(getAbs(getSub(se1,sb1))>0.5){
 s2 = "";
 vis(e.p1+".cc1",true,"超差");
}else{
 s2 = getAvg(se1,sb1);
 vis(e.p1+".cc1",false,"");
}
if(get(e.p1+".se1")&&get(e.p1+".sb1")){
 set(e.p1+".s2",rds(s2,rtsd));
}
main("a");
main("b");
var sa9 = getf(e.p1+".sa9");
var sb9 = getf(e.p1+".sb9");
var s10;
if((getAvg(sa9,sb9)<5&&getAbs(getSub(sa9-sb9)>0.3) || (5<=getAvg(sa9,sb9)$$getAvg(sa9,sb9)<40&&getAbs(getSub(sa9-sb9)>1) ||(getAvg(sa9,sb9)>=40&&getAbs(getSub(sa9-sb9)>2)){
 s10 = "";
 vis(e.p1+".cc2",true,"超差");
}else{
 s10 = getAvg(sa9,sb9);
 vis(e.p1+".cc2",false,"");
}
if(get(e.p1+".sa9")&&get(e.p1+".sb9")){
 set(e.p1+".s10",rds(s10,pjhsl));
}



function main(str){
 var s3 = get(e.p1+".s"+str+"3");
 var s4 = getdsv("ds.hsz","hh",s3,"hzl");
 set(e.p1+".s"+str+"4",s4);
 var s5 = get(e.p1+".s"+str+"5");
 var s6 = get(e.p1+".s"+str+"6");
 var s7 = getSub(s5,s6);
 if(get(e.p1+".s"+str+"5")&&get(e.p1+".s"+str+"6")){
  set(e.p1+".s"+str+"7",rds(s7,zl));
 }
 var s8 = getSub(s6,s4);
 if(get(e.p1+".s"+str+"4")&&get(e.p1+".s"+str+"6")){
  set(e.p1+".s"+str+"8",rds(s8,zl));
 }
 var s9 = s7/s8*100;
 if(get(e.p1+".s"+str+"7")&&get(e.p1+".s"+str+"8")){
  set(e.p1+".s"+str+"9",rds(s9,hsl));
 }
}
