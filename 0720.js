var sd7 = getf("d_page_page4_sbsj2"+str+"_l4_sb7");
var sd8 = getf("d_page_page4_sbsj2"+str+"_l4_sb8");
var sd9 = getf("d_page_page4_sbsj2"+str+"_l4_sb9");
var se10 = getf("d_page_page4_sbsj2"+str+"_l4_sb10");
var se11 = getf("d_page_page4_sbsj2"+str+"_l4_sb11");
var se12 = getf("d_page_page4_sbsj2"+str+"_l4_sb12");



var s4 = getf(e.code);
var s5 = getf(e.p1+".s5");
var pbtz = get(e.p1+".pbtz");
var s6 = "";
if(pbtz&&!isDataEmpty(s5)&&!isDataEmpty(s4)){
 s6 = s5/s4;
}

set(e.p1+".s6",s6);

var flag = 1;
var str = "";
if(s1==="减小水胶比"){
 flag = 2;
 str = "copy11";
}else if(s1==="增大水胶比"){
 flag = 3;
 str = "copy11";
}else if(s1==="配置强度对应水胶比"){
 flag = 4;
}

var s3 = getf(e.p1+".s3");
var s18 = getf("d_page_page4_l6_s18");
var s19 = getf("d_page_page4_l8_s19");
var s20 = getf("d_page_page4_l8_s20");
var s27 = getf("d_page_page4_l12_s27");
var s30 = getf("d_page_page4_l13_s30");
var s34 = getf("d_page_page4_l15_s34");
var s38 = getf("d_page_page4_l15_s38");
var s39 = getf("d_page_page4_l15_s39");
var s40 = getf("d_page_page4_l15_s40");

var sd7,sd8,sd9,se10,se11,se12;
if(flag===1||flag===2||flag===3){
 sd7 = getf("d_page_page4_sbsj2"+str+"_l4_sb7");
 sd8 = getf("d_page_page4_sbsj2"+str+"_l4_sb8");
 sd9 = getf("d_page_page4_sbsj2"+str+"_l4_sb9");
 se10 = getf("d_page_page4_sbsj2"+str+"_l4_sb10");
 se11 = getf("d_page_page4_sbsj2"+str+"_l4_sb11");
 se12 = getf("d_page_page4_sbsj2"+str+"_l4_sb12");
}else{
 se10 = getf(e.p2+".bsj2.l6.s18");
 if(!isDataEmpty(se10)&&!isDataEmpty(s3)){
   sd7 = se10/s3;
 }
 if(s27==="质量法"){
   if(!isDataEmpty(s4)&&!isDataEmpty(se10)&&!isDataEmpty(sd7)&&!isDataEmpty(s2)){
     sd9 = rds((getSub(s4,getsum2(se10,sd7)))*s2/100,0);
   }
    sd8 = rds(getSub2(getSub2(s4,sd9),getSum2(sd7,se10)),0);
 }else if(s27==="体积法"){
   var kq1,kq2,kq3,kq4;
   let n=0;
    if(!isDataEmpty(sd7)&&!isDataEmpty(s39)){
      kq1=sd7/s39;
      n++;
    }
    if(!isDataEmpty(s18)&&!isDataEmpty(s40)){
      kq2=s18/s40;
      n++;
    }
    if(!isDataEmpty(s38)){
      kq3=1/s38;
      n++;
    }
    if(!isDataEmpty(s2)&&!isDataEmpty(s34)){
      kq4=(getsub2(100,s2))/(s34*s2);
      n++;
    }
    if(n===4){
      sd9=rds((getSub(0.99,getSum(kq1,kq2)))/(getSum(kq3,kq4)),0);
    }
    if(!isDataEmpty(s2)&&!isDataEmpty(s30)){
      sd8=rds((getsub2(100-s2))*s30/s2,0);
    }
 }
 if(!isDataEmpty(sd7)&&!isDataEmpty(s19)){
   se11 = sd7*s19;
 }
 if(!isDataEmpty(sd7)&&!isDataEmpty(s20)){
   se12 = sd7*s20;
 }
}
var sb7,sb8,sb9,sb10,sb11,sb12;
if(isDataEmpty(s6)||(0.98<=s6&&s6<=1.02){
 sb7=sd7;
 sb8=sd8;
 sb9=sd9;
 sb10=se10;
 sb11=se11;
 sb12=se12;
}else{
 if(!isDataEmpty(sd7)){
  sb7=rds(sd7*s6,0);
 }
 if(!isDataEmpty(sd7)){
  sb8=rds(sd8*s6,0);
 }
 if(!isDataEmpty(sd7)){
  sb9=rds(sd9*s6,0);
 }
 if(!isDataEmpty(sd7)){
  sb10=rds(se10*s6,0);
 }
 if(!isDataEmpty(sd7)){
  sb11=rds(se11*s6,0);
 }
 if(!isDataEmpty(sd7)){
  sb12=rds(se12*s6,0);
 }
}
set(e.p2+".sbsj2.l3.sb7",sb7);
set(e.p2+".sbsj2.l3.sb8",sb8);
set(e.p2+".sbsj2.l3.sb9",sb9);
set(e.p2+".sbsj2.l3.sb10",sb10);
set(e.p2+".sbsj2.l3.sb11",sb11);
set(e.p2+".sbsj2.l3.sb12",sb12);
var sc7 = rds(1,2);
var sc8,sc9,sc10,sc11,sc12;
if(!isDataEmpty(sb7)){
 if(!isDataEmpty(sb8)){
  sc8 = rds(sb8/sb7,2);
 }
 if(!isDataEmpty(sb8)){
  sc9 = rds(sb9/sb7,2);
 }
 if(!isDataEmpty(sb8)){
  sc10 = rds(sb10/sb7,2);
 }
 if(!isDataEmpty(sb8)){
  sc11 = rds(sb11/sb7,3);
 }
 if(!isDataEmpty(sb8)){
  sc12 = rds(sb12/sb7,3);
 }
}

set(e.p2+".sbsj2.l4.sc7",sc7);
set(e.p2+".sbsj2.l4.sc8",sc8);
set(e.p2+".sbsj2.l4.sc9",sc9);
set(e.p2+".sbsj2.l4.sc10",sc10);
set(e.p2+".sbsj2.l4.sc11",sc11);
set(e.p2+".sbsj2.l4.sc12",sc12);
