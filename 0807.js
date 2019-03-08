function main(str){
  var sbarr = [];
  var saarr = [];
  for(var i=1;i<16;i++){
   let sa = getf("d_sfsj"+str+"_l1_sa"+i);
   if(!isDataEmpty(sa)){
    let sb = getf("d_sfsj"+str+"_l2_sb"+i);
    if(!isDataEmpty(sb)){
     sbarr.push(getf(e.p3+".sfsj"+str+".l2.sb"+i));
    }
   }
  }
  var s7,s8,s9;
  if(sbarr.length===saarr.length){
   s7 = getSum.apply({},sbarr);
   s8 = getSub(s6,s7);
   s9 = s8/s6*100;
   if(s9>0.3){
    vis(e.p3+".sysj.l2"+str+".s10",true,"超差");
   }else{
    vis(e.p3+".sysj.l2"+str+".s10",true,"");
   }
  }
  set(e.p3+".sysj.l2"+str+".s7",rds(s7,sfzl));
  set(e.p3+".sysj.l2"+str+".s8",rds(s8,sfzl));
  set(e.p3+".sysj.l2"+str+".s9",rds(s9,shl));
  for(var i=1;i<16;i++){
   let sa = getf("d_sfsj"+str+"_l1_sa"+i);
   let sb = getf("d_sfsj"+str+"_l2_sb"+i);
   let sc = "";
   let sd = "";
   let se = "";
   if(!isDataEmpty(sa)){
     if(i===1){
       if(!isDataEmpty(sb)){
         sc = sb/s7*100;
         sd = sc;
         se = 100-sd;
       }
     }else{
       if(!isDataEmpty(sb)){
         sc = sb/s7*100;
         if(s12==="分计筛余百分率之和"){
           let prevSd = getf("d_sfsj"+str+"_l4_sd"+(i-1));
           sd = getSum2(sc,prevSd);
         }else if(s12==="累计筛上质量除以筛分后总质量"){
           sd = getSum2(sbarr.slice(0,i))/s7;
         }
         if(sa!=="筛底"){
           se = getSub2(100,sd);
         }
       }
     }
   }
   set("d_sfsj"+str+"_l3copy10_sc",sc);
   set("d_sfsj"+str+"_l4_sc",sd);
   set("d_sfsj"+str+"_l5copy11_sc",se);
  }
}











var fjsy = getrs("r.fjsy");
var ljsy = getrs("r.ljsy");
var sfzl = getrs("r.sfzl");
var tgbfl = getrs("r.tgbfl");
var shl = getrs("r.shl");
var pjbfl = getrs("r.pjbfl");
var s6 = getf(e.p3+".sysj.l2.s6");
var s12 = get(e.p3+".sysj.l4.s12");



main("");
main("copy11");

var pjz = get(e.p3+".pjsj.l1.pjz");
if(pjz[2]==="累"){
 for(var i=1;i<16;i++){
  let sda = getf(e.p3+".sfsj.l4.sd"+i);
  let sdb = getf(e.p3+".sfsjcopy11.l4.sd"+i);
var s = getAvg(sda,sdb);
if((sda||sda==0)&&(sdb||sdb==0)){
  set(e.p3+".pjsj.l1.s"+i,rds(s,pjbfl));
}
 }
}else if(pjz[2]==="通"){
 for(var i=1;i<16;i++){
  let sda = getf(e.p3+".sfsj.l5.se"+i);
  let sdb = getf(e.p3+".sfsjcopy11.l5.se"+i);
  var s = getAvg(sda,sdb);
if((sda||sda==0)&&(sdb||sdb==0)){
  set(e.p3+".pjsj.l1.s"+i,rds(s,pjbfl));
}
 }
}

function main(str){
var sbarr = [];
var saarr = [];
for(var i=1;i<16;i++){
 let sa = getf("d_sfsj"+str+"_l1_sa"+i);
 if(!isDataEmpty(sa)){
  saarr.push(sa);
  let sb = getf("d_sfsj"+str+"_l2_sb"+i);
  if(!isDataEmpty(sb)){
   sbarr.push(getf(e.p3+".sfsj"+str+".l2.sb"+i));
  }
 }
}
var s7,s8,s9;
console.log(saarr,sbarr)
if(sbarr.length===saarr.length){
 s7 = getSum.apply({},sbarr);
 s8 = getSub(s6,s7);
 s9 = s8/s6*100;
 if(s9>0.3){
  vis(e.p3+".sysj.l2"+str+".s10",true,"超差");
 }else{
  vis(e.p3+".sysj.l2"+str+".s10",true,"");
 }
 for(var i=1;i<16;i++){
  let sa = getf(e.p3+".sfsj"+str+".l1.sa"+i);
  let sb = getf(e.p3+".sfsj"+str+".l2.sb"+i);
  var sc = "";
  if(!isDataEmpty(sa)){
   if(!isDataEmpty(sb)){sc = sb/s7*100}
   set(e.p3+".sfsj"+str+".l3.sc"+i,rds(sc,ljsy));
   var sd;
   if(s12[0]==="分"){
    sd = i-1===0?sc:getSum(sc,getf(e.p3+".sfsj"+str+".l4.sd"+(i-1)));
   }else if(s12[0]==="累"){
    sd = getSum.apply({},sb.slice(0,i))
   }
   if(sd){
    set(e.p3+".sfsj"+str+".l4.sd"+i,rds(sd,ljsy));
    let se = getSub(100,sd);
    set(e.p3+".sfsj"+str+".l5.se"+i,rds(se,tgbfl));
   }
  }
 }
}
 set(e.p3+".sysj.l2"+str+".s7",rds(s7,sfzl));
 set(e.p3+".sysj.l2"+str+".s8",rds(s8,sfzl));
 set(e.p3+".sysj.l2"+str+".s9",rds(s9,shl));
}


let tjCodes = ["d_sysj_l1_s1","d_sysj_l1_s2","d_sysj_l1_s3","d_sysj_l1_s4","d_sysj_l1_s13","d_sysj_l1_s6"];
fillDstjsCombobox("ds_jpfwsz",tjCodes);

let tj1 = get(e.code+".s1");
let tj2 = get(e.code+".s2");
let tj3 = get(e.code+".s3");
let tj4 = get(e.code+".s4");
let tj5 = get(e.code+".s5");
let tj6 = get(e.code+".s6");

let tjs = [tj1,tj2,tj3,tj4,tj5,tj6];
let datas = getDataSourceValuesByTjs("ds_fwsz",tjs);







//水洗法
function main(str){
 let s6 = get(e.p3+".sysj.l2"+str+".s6");
 let s7 = get(e.p3+".sysj.l2"+str+".s7");
 let s8 = getSub2(s6,s7);
 set(e.p3+".sysj.l2"+str+".s8",rds(s8,sfzl));
 let sbarr = [];
 let saarr = [];
 let s9 = "";
 if(!isDataEmpty(s8)&&!isDataEmpty(s6)){
   s9 = s8/s6*100;
 }
 set(e.p3+".sysj.l2"+str+".s9",rds(s9,sfzl));
 for(var i=1;i<16;i++){
  let sa = getf("d_sfsj1"+str+"_l1_sa"+i);
  let sb = getf(e.p3+".sfsj1"+str+".l2.sb"+i);
  if(!isDataEmpty(sa)){
    saarr.push(sa);
    if(!isDataEmpty(sb)){
      sbarr.push(sb);
    }
  }
 }
 let s10 = "";
 let s11 = "";
 let s12 = "";
 if(saarr.length===sbarr.length){

  s10 = getSum(sbarr);
  s11 = getSub2(s6,s10);
  if(!isDataEmpty(s6)&&!isDataEmpty(s11)){
    s12 = s11/s6*100;
    if(s12>0.3){
     vis(e.p3+".sysj.l2"+str+".s13",true,"超差")
    }else{
     vis(e.p3+".sysj.l2"+str+".s13",false);
    }
  }else{
    vis(e.p3+".sysj.l2"+str+".s13",true,"");
  }
 }

 for(var i=1;i<16;i++){
   let sa = get(e.p3+".sfsj1"+str+".l1.sa"+i);
   let sb = getf(e.p3+".sfsj1"+str+".l2.sb"+i);

   let sc = "";
   let sd = "";
   let se = "";
   if(!isDataEmpty(sa)&&saarr.length===sbarr.length){
     if(!isDataEmpty(sb)&&!isDataEmpty(s7)){
       sc = rds(sb/s7*100,ljsy);
     }
     if(sa!="筛底"){
       if(i===1){
         sd = sc;
         if(!isDataEmpty(sd)){
           se = 100-sd;
         }
       }else{
         if(s14==="分计筛余百分率之和"){
           let prevSd = getf("d_sfsj1"+str+"_l4_sd"+(i-1));
           if(!isDataEmpty(prevSd)&&!isDataEmpty(sc)){
             sd = getSum(sc*1,prevSd);
           }
         }else if(s14==="累计筛上质量除以筛分后总质量"){
           sd = getSum(sbarr.slice(0,i))/s7
         }
         se = getSub2(100,sd);
       }
     }
   }
   set(e.p3+".sfsj1"+str+".l3.sc"+i,sc)
   set(e.p3+".sfsj1"+str+".l4.sd"+i,rds(sd,ljsy));
   set(e.p3+".sfsj1"+str+".l5.se"+i,rds(se,tgbfl));
 }

 set(e.p3+".sysj.l2"+str+".s10",rds(s10,sfzl));
 set(e.p3+".sysj.l2"+str+".s11",rds(s11,sfzl));
 set(e.p3+".sysj.l2"+str+".s12",rds(s12,shl));
}












//矿粉筛分

function main(str){
//试验数据1
 let sbArr = [];
 let saArr = [];
 let s3 = getf(e.p3+".sysj1.l2"+str+".s3");
 for(var i=1;i<=n;i++){
  let sa = get("d_sysj_sysj2"+str+"_l3copy10_sa"+i);
  let sb = get("d_sysj_sysj2"+str+"_l4_sb"+i);
  if(sa){
   saArr.push(sa);
   if(sb){
    sbArr.push(sb);
   }
  }
 }
 let s4 = "";
 let s5 = "";
 if(sbArr.length===saArr.length){
  s4 = getSum(sbArr);
 }
 let s5 = getSub2(s3,s4);
 set(e.p3+".sysj1.l2"+str+".s4",rds(s4,sfzl));
 set(e.p3+".sysj1.l2"+str+".s5",rds(s5,sfzl));
 let s6 = "";
 if(!isDataEmpty(s5)&&!isDataEmpty(s3)){
  s6 = s5/s3*100;
 }
 set(e.p3+".sysj1.l2"+str+".s6",rds(s6,shl));
 if(!isDataEmpty(s6)){
  if(s6<=1){
   vis(e.p3+".sysj1.l2"+str+".cc",true,"");
  }else{
   vis(e.p3+".sysj1.l2"+str+".cc",true,"超差");
  }
 }else{
   vis(e.p3+".sysj1.l2"+str+".cc",true,"");
 }

//实验数据2
  for(var i=1;i<=9;i++){
   let sa = get("d_sysj_sysj2"+str+"_l3copy10_sa"+i);
   let sb = get("d_sysj_sysj2"+str+"_l4_sb"+i);
   let sc = "";
   let sd = "";
   let se = "";
   if(!isDataEmpty(sa)){
     if(!isDataEmpty(sb)&&!isDataEmpty(s3)){
       sc = sb/s3*100;
     }
     if(i===1){
       sd = sc
     }else{
       let prevSd = get("d_sysj_sysj2"+str+"_l6_sd"+(i-1));
       sd = getSum(sc,prevSd);
     }
     if(sa=="筛底"){
       se = getSub2(100,sd);
     }
   }
   set("d_sysj_sysj2"+str+"_l5copy11_sc"+i,sc);
   set("d_sysj_sysj2"+str+"_l6_sd"+i,sd);
   set("d_sysj_sysj2"+str+"_l7_se"+i,se);
  }
}
