var s1 = get(e.code);
var s25 = getf("d_page_page3_l10_s25");
var s9 = getf("d_page_page3_l4_s9");
var s2 = "";
var s3 = "";

var flag = 1;
var str = "";

if(s1==="减小水胶比"){
 flag = 2;
 str = "copy2";
}else if(s1==="增大水胶比"){
 flag = 3;
 str = "copy3";
}

var s19 = getf("d_page_page3_l8_s19");
var s20 = getf("d_page_page3_l8_s20");
var s27 = get("d_page_page3_l12_s27");
var s28 = getf("d_page_page3_l13_s28");
var s39 = getf("d_page_page3_l15_s39");
var s40 = getf("d_page_page3_l15_s40");
var s38 = getf("d_page_page3_l15_s38");
var s34 = getf("d_page_page3_l15_s34");

empty();
if(flag === 1){
 vis(e.p2+".sbsj2",true);
}else if(flag === 2){
 vis(e.p2+".sbsj2copy2",true);
}else if(flag === 3){
 vis(e.p2+".sbsj2copy3",true);
}

if(flag === 1){
 s2 = s25;
 s3 = s9;
 getsb();
 set(e.p2+".sbsj2"+str+".l1.s2",s2);
 set(e.p2+".sbsj2"+str+".l1.s3",s3);
}else if(flag === 2||flag === 3){
 s3 = rds(getf(e.p2+".sbsj2"+str+".l1.s3"),2);
 getsb2();
}

function empty(){
 for(var i=1;i<4;i++){
  var str = i==1?"":"copy"+i;
  vis(e.p2+".sbsj2"+str,false);
 }
}

function getsb(){
 for(var i=7;i<=12;i++){
  let sb= getf("d_page_page3_l18_s"+(34+i));
  set(e.p2+".sbsj2"+str+".l4.sb"+i,sb);
 }
}

function getsb2() {
  s2 = getf(e.p2+".sbsj2"+str+".l1.s2");
  s3 = getf(e.p2+".sbsj2"+str+".l1.s3");
console.log(s2,s3)
  var sb10 = getf("d_page_page3_l18_s44");
  var sb7 = "",sb8 = "",sb9 = "",sb11 = "",sb12 = "";
  if(!isDataEmpty(sb10)&&!isDataEmpty(s3)){
    sb7 = rds((sb10/s3),0);
  }
  if(!isDataEmpty(sb7)&&!isDataEmpty(s19)){
    sb11 = rds(sb7*s19/100,3);
  }
  if(!isDataEmpty(sb7)&&!isDataEmpty(s20)){
    sb12 = rds(sb7*s20/100,3);
  }
  if(s27==="质量法"){
    let value = getSub2(s28,getSum2(sb10-sb7));
    if(!isDataEmpty(value)&&!isDataEmpty(s2)){
      sb9 = rds(value*s2/100,0);
    }
    sb8 = getSub2(getSub2(s28,sb7),getSum2(s9,sb10));
    sb8 = sb8?rds(sb8,0):sb8;
  }else if(s27==="体积法"){
    let ks1 = "";
    let ks2 = "";
    let ks3 = "";
    let ks4 = "";
    let num = 0;
    if(!isDataEmpty(sb7)&&!isDataEmpty(s39)){
      ks1 = sb7/s39;
      num++;
    }
    if(!isDataEmpty(sb10)&&!isDataEmpty(s40)){
      ks2 = sb10/s40;
      num++;
    }
    if(!isDataEmpty(s38)){
      ks3 = 1/s38;
      num++;
    }
    if(!isDataEmpty(s2)&&!isDataEmpty(s34)){
      ks4 = getSub(100,s2)/(s34*s2);
      num++;
    }
    if(num===4){
      sb9 = rds((getSub(0.99,getSum(ks1,ks2)))/(getSum(ks3,ks4)),0);
    }
    if(!isDataEmpty(sb9)&&!isDataEmpty(s2)){
      sb8 = rds((getSub(100-s2))*sb9/s2,0);
    }
  }
  set(e.p2+".sbsj2"+str+".l4.sb7",sb7);
  set(e.p2+".sbsj2"+str+".l4.sb8",sb8);
  set(e.p2+".sbsj2"+str+".l4.sb9",sb9);
  set(e.p2+".sbsj2"+str+".l4.sb10",sb10);
  set(e.p2+".sbsj2"+str+".l4.sb11",sb11);
  set(e.p2+".sbsj2"+str+".l4.sb12",sb12);
}


function getsa(){
  for(var i=7;i<=12;i++){
    var sb = getf(e.p2+".sbsj2"+str+".l4.sb"+i);
    var sa = "";
    if(!isDataEmpty(sb)){
      sa = sb*s4;
    }
    set(e.p2+".sbsj2"+str+".l4.sa"+i,sb);
  }
}




function value2(num){
 var sa = get(e.p1+".sa"+num);
 var sb = get(e.p1+".sb"+num);
 var sc = get(e.p1+".sc"+num);
 sa = format(sa);
 sb = format(sb);
 sc = format(sc);
 var ta1 = getMax2(sa,sb,sc);
 var ta2 = getMid2(sa,sb,sc);
 var ta3 = getMin2(sa,sb,sc);
 var ta4 = getAvg2(sa,sb,sc);
 var s20 = "";
 if(ta1){
  var sub1 = getSub(ta1,ta2);
  var sub2 = getSub(ta2,ta3);
  var pjzcn = "";
  if(sub1/ta1>0.1&&sub2/ta2<=0.1){
    pjzcn = ta2;
  }
  if(sub1/ta1<=0.1&&sub2/ta2>0.1){
    pjzcn = ta2;
  }
  if(sub1/ta1<=0.1&&sub2/ta2<=0.1){
    pjzcn = rds(ta4,0)*1;
  }
  if(!pjzcn){return ""};
  let hours = Math.floor(rd(pjzcn/5,0)*5/60);
  let mins = rd(pjzcn/5,0)*5-60*Math.floor(rd(pjzzn/5,0)*5/60);
  s20 = hours+":"+mins;
 }
 return s20;
}


function value2(num){
 var sa = get(e.p1+".sa"+num);
 var sb = get(e.p1+".sb"+num);
 var sc = get(e.p1+".sc"+num);
 sa = format(sa);
 sb = format(sb);
 sc = format(sc);
 var ta1 = getMax2(sa,sb,sc);
 var ta2 = getMid2(sa,sb,sc);
 var ta3 = getMin2(sa,sb,sc);
 var ta4 = getAvg2(sa,sb,sc);
 var s20 = "";
 if(ta1){
  var sub1 = getSub(ta1,ta2);
  var sub2 = getSub(ta2,ta3);
  var pjzcn = "";
  if(sub1/ta1>0.15&&sub2/ta2<=0.15){
    s20 = ta2;
  }
  if(sub1/ta1<=0.15&&sub2/ta2>0.15){
    s20 = ta2;
  }
  if(sub1/ta1<=0.15&&sub2/ta2<=0.15){
    s20 = rds(ta4,1)*1;
  }
 return s20;
 }
}
