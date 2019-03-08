//计算承载比平均值  //todo...........这里需要修改，未实际完成(CBR)
for(var i=1;i<=3;i++){
  var czb1 = getf(sjzcodes[i*3 - 2]+"_grsj-7_cbrqz");
  var czb2 = getf(sjzcodes[i*3 - 1]+"_grsj-7_cbrqz");
  var czb3 = getf(sjzcodes[i*3]+"_grsj-7_cbrqz");
  var czb = getAvg(czb1, czb2, czb3);
  var czbCode = "d_g" + i + "_czbpjz";
  var czbrs = getrs("r.xy1");
  set(czbCode, rds(czb, czbrs));
}




//--------------------
var rtsd = getrs("r.rtsd");
var zl = getrs("r.zl");
var hsl = getrs("r.hsl");
var pjhsl = getrs("r.hsl");
var dcjg = getrs("r.dcjq");
var pjjg = getrs("r.pjjg");


var se1 = getf(e.p1+".se1");
var sb1 = getf(e.p1+".sb1");
var s2;
if(get(e.p1+".se1")&&get(e.p1+".sb1")){
 if(getAbs(getSub(se1,sb1))>0.5){
  s2 = "";
  vis(e.p1+".ccbq1",true,"超差");
 }else{
  s2 = rds(getAvg(se1,sb1),rtsd);
  vis(e.p1+".ccbq1",false,"");
 }
}else{
 s2 = "";
 vis(e.p1+".ccbq1",false,"");
}
set(e.p1+".s2",s2);
main("a");
main("b");

var sa9 = getf(e.p1+".sa9");
var sb9 = getf(e.p1+".sb9");
var s10;
if(isDataEmpty(sa9)&&isDataEmpty(sb9)){
if((getAvg(sa9,sb9)<5&&getAbs(getSub(sa9-sb9)>0.3)||(5<=getAvg(sa9,sb9)<40&&getAbs(getSub(sa9-sb9)>1)||(getAvg(sa9,sb9)>=40&&getAbs(getSub(sa9-sb9)>2)){
s10 = "";
vis(e.p1+".ccbq2",true,"超差");
}
s10 = getAvg(sa9,sb9);
vis(e.p1+".ccbq2",false,"");
}else{
s10 = "";
vis(e.p1+".ccbq2",false,"");
}

var pxsy = get("d_sysj1_s3");
if(pxsy){
var yx1 = getf(e.p3+".sysj2.l5.s5");
var yx2 = getf(e.p3+".sysj2copy11.l5.s5");
var ss8,ss9,ss10;
if(isDataEmpty(yx1)&&isDataEmpty(yx2)){
if((getavg(yx1,yx2)>=50&&getsub(yx1,yx2)>=2)||(getavg(yx1,yx2)<50&&getsub(yx1,yx2)>=1)){
ss8 = "";
vis(e.p3+".sysj3.ccbq1",true,"超差");
}else{
ss8 = getAvg(yx1,yx2);
vis(e.p3+".sysj3.ccbq1",false,"");
}
}else{
ss8 = "";
vis(e.p3+"sysj3.ccbq1",false,"");
}

var sx1 = getf(e.p3+".sysj2.l5.s6");
var sx2 = getf(e.p3+".sysj2copy11.l5.s6");


}



function main(str){
var s3 = getf(e.p1+".s"+str+3);
var s4 = getdsv("ds.hsz","hh",s3,"hzl");
console.log(s3,s4)
set(e.p1+".s"+str+4,s4);
var s5 = getf(e.p1+".s"+str+5);
var s6 = getf(e.p1+".s"+str+6);
var s7,s8,s9;
if(!isDataEmpty(s5)&&!isDataEmpty(s6)){
 s7 = rds(getSub(s5,s6),zl);
}else{
 s7 = "";
}
set(e.p1+".s"+str+7,s7);

if(!isDataEmpty(s4)&&get!isDataEmpty(s6)){
 s8 = rds(getSub(s6,s4),zl);
}else{
 s8 = "";
}
set(e.p1+".s"+str+8,s8);

if(!isDataEmpty(s7)&&!isDataEmpty(s8)){
 s9 = rds(s7/s8*100,hsl);
}else{
 s9 = "";
}
set(e.p1+".s"+str+9,s9);
};










var pxsy = get("d_sysj1_s3");
if(pxsy){
var yx1 = getf(e.p3+".sysj2.l5.s5");
var yx2 = getf(e.p3+".sysj2copy11.l5.s5");
var ss8,ss9,ss10;
if(!isDataEmpty(yx1)&&!isDataEmpty(yx2)){
if((getavg(yx1,yx2)>=50&&getsub(yx1,yx2)>=2)||(getavg(yx1,yx2)<50&&getsub(yx1,yx2)>=1)){
ss8 = "";
vis(e.p3+".sysj3.ccbq1",true,"超差");
}else{
ss8 = getAvg(yx1,yx2);
vis(e.p3+".sysj3.ccbq1",false,"");
}
}else{
ss8 = "";
vis(e.p3+"sysj3.ccbq1",false,"");
}
var sx1 = getf(e.p3+".sysj2.l5.s6");
var sx2 = getf(e.p3+".sysj2copy11.l5.s6");
if(!isDataEmpty(sx1)&&!isDataEmpty(sx2)){

if((getavg(yx1,yx2)>=50&&getsub(sx1,sx2)>=2)||(getavg(yx1,yx2)<50&&getsub(sx1,sx2)>=1)){
ss9 = "";
vis(e.p3+".sysj3.ccbq2",true,"超差");
}else{
ss9 = getAvg(sx1,sx2);
vis(e.p3+".sysj3.ccbq2",false,"");
}
}else{
ss9 = "";
vis(e.p3+".sysj3.ccbq2",false,"");
}
var zs1 = getf(e.p3+".sysj2.l5.s7");
var zs2 = getf(e.p3+".sysj2copy11.l5.s7");
if(!isDataEmpty(zs1)&&!isDataEmpty(zs2)){
if((getavg(yx1,yx2)>=50&&getsub(zs1,zs2)>=2)||(getavg(yx1,yx2)<50&&getsub(zs1,zs2)>=1)){
ss10 = "";
vis(e.p3+".sysj3.ccbq3",true,"超差")

}else{
ss9 = "";
vis(e.p3+".sysj3.ccbq2",false,"")
}
}else{
ss9 = "";
vis(e.p3+".sysj3.ccbq2",false,"");
}
}



var s10a = getf(e.p1+".s10a");
var s10b = getf(e.p1+".s10b");
var s11;
if(!isDataEmpty(s10a)&&!isDataEmpty(s10b)){
if((getAvg2(s10a,s10b)<5&&getAbs(getSub2(s10a,s10b))>0.3)|(5<=getAvg2(s10a,s10b)&&getAvg2(s10a,s10b)<40&&getAbs(getSub2(s10a,s10b))>1)||(getAvg2(s10a,s10b)>=40&&getAbs(getSub(s10a,s10b))>2)){
 s11 = "";
 vis(e.p1+".s12",true,"超差");
}else{
 s11 = getAvg(s10a,s10b);
 vis(e.p1+".s12",false,"");
}
}else{
 s11 = "";
 vis(e.p1+".s12",false,"");
}













var syz = getrs("r.syz");
var xzxs = getrs("r.xzxs");
var xd = getrs("r.xd");
var xdpjz = getrs("r.xdpjz");

for(var i= 1;i<=3;i++){
 var s1 = getf(e.p2+".sy"+i+".s1");
 var s2 = getf(e.p2+".sy"+i+".s2");
 var s3 = "",s5 = "";
 if(!isDataEmpty(s1)&&!isDataEmpty(s2)){
  s3 = rds(s2/s1*100,syz);
 }
 set(e.p2+".sy"+i+".s3",s3);
 var s4 = getf(e.p2+".sy"+i+".s4");
 if(!isDataEmpty(s4)&&!isDataEmpty(s3)){
  s5 = rds(s4/s3,xzxs);
 }
 set(e.p2+".sy"+i+".s5",s5);
}

var s5a = getf(e.p2+".sy1.s5");
var s5b = getf(e.p2+".sy2.s5");
var s5c = getf(e.p2+".sy3.s5");
var s6 = "";
if(!isDataEmpty(s5a)&&!isDataEmpty(s5b)){
 if(getAbs(getSub(s5a,s5b))<=0.3){
  s6 = getAvg(s5a,s5b);
 }else{
  dis(e.p2+".sy3.s1",false);
  dis(e.p2+".sy3.s2",false);
  dis(e.p2+".sy3.s4",false);
  if(!isDataEmpty(s5c)){
   if(getMax(s5a,s5b,s5c)-getMid(s5a,s5b,s5c)>= getMid(s5a,s5b,s5c)-getMin(s5a,s5b,s5c)){
    s6 = getAvg(getMid(s5a,s5b,s5c),getMin(s5a,s5b,s5c));
   }else{
    s6 = getAvg(getMid(s5a,s5b,s5c),getMax(s5a,s5b,s5c));
   }
  }
 }
}





















var syz = getrs("r.syz");
var xzxs = getrs("r.xzxs");
var xd = getrs("r.xd");
var xdpjz = getrs("r.xdpjz");

var s3_1 = "",s3_2 = "",s3_3 = "",s5 = "";

for(var i= 1;i<=3;i++){
 var s1 = getf(e.p2+".sy"+i+".s1");
 var s2 = getf(e.p2+".sy"+i+".s2");
 var s3 = "",s5 = "";
 if(!isDataEmpty(s1)&&!isDataEmpty(s2)){
  s3 = rds(s2/s1*100,syz);
 }
 set(e.p2+".sy"+i+".s3",s3);
 s3_i = s3;
}
var s4 = getf(e.p2+".sy2.s4");
if(!isDataEmpty(s3_1)&&!isDataEmpty(s3_2)&&!isDataEmpty(s4)){
 if((getAvg(s3_1,s3_2)<=5&&getAbs(getSub(s3_1,s3_2))<=0.5)||(getAvg(s3_1,s3_2)>5&&getAbs(getSub(s3_1,s3_2))<=1)){
  s5 = rds(getAvg(s3-1,s3-2)*s4,xdpjz);
 }else{
  dis(e.p2+".sy3.s1",false);
  dis(e.p2+".sy3.s2",false);
  if(!isDataEmpty(s3-3)){
   if(getMax(s3_1,s3_2,s3_3)-getMid(s3_1,s3_2,s3_3)>= getMid(s3_1,s3_2,s3_3)-getMin(s3_1,s3_2,s3_3)){
    s5=getAvg(getMid(s3_1,s3_2,s3_3),getMin(s3_1,s3_2,s3_3))*s4;
   }else{
    s5=getAvg(getMid(s3_1,s3_2,s3_3),getMax(s3_1,s3_2,s3_3))*s4;
   }
  }
 }
}

set(e.p2+".sy2.s5",rds(s5,xd));
