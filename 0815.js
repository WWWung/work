copy("d_page_root2_l2",9);

//水泥
var clmcArr = [];


var sc2 = gettv("d_page_page1_l4_sc2");
set("d_page_root2_l2_clmc",sc2);
if(!isDataEmpty(sc2)){
 let sc1 = gettv("d_page_page1_l4_sc1");
 set("d_page_root2_l2_yp",sc1);

 let sc3 = gettv("d_page_page1_l4_sc3");
 set("d_page_root2_l2_lxgg",sc3);

 let sc4 = gettv("d_page_page1_l4_sc4");
 set("d_page_root2_l2_cdcj",sc4);

 let dwyl1 = gettv("d_page_page5_sbsj2_l9_snyl");
 set("d_page_root2_l2_dwyl",dwyl1);

 let dwb1 = gettv("d_page_page5_sbsj2_l10_sndwb");
 set("d_page_root2_l2_dwb",dwb1);
}

//粗集料

for(let i=1;i<4;i++){
 let str1 = i===1?"":"copy"+i;
 let str2 = "copy"+(i+1);

 let sa2 = gettv("d_page_page1_l2"+str1+"_sa2");
 set("d_page_root2_l2"+str2+"_clmc",sa2);

 if(!isDataEmpty(sa2)){
  let sa1 = gettv("d_page_page1_l2"+str1+"_sa1");
  set("d_page_root2_l2"+str2+"_yp",sa1);

  let sa3 = gettv("d_page_page1_l2"+str1+"_sa3");
  set("d_page_root2_l2"+str2+"_lxgg",sa3);

  let sa4 = gettv("d_page_page1_l2"+str1+"_sa4");
  set("d_page_root2_l2"+str2+"_cdcj",sa4);

  let cjlyl = gettv("d_page_page5_sbsj2_l9_cjlyl"+i);
  set("d_page_root2_l2"+str2+"_dwyl",cjlyl);

  let cjldwb = gettv("d_page_page5_sbsj2_l10_cjldwb"+i);
  set("d_page_root2_l2"+str2+"_dwb",cjldwb);
 }
}

//细集料

for(let i=1;i<3;i++){
 let str1 = i===1?"":"copy"+i;
 let str2 = "copy"+(i+4);

 let sb2 = gettv("d_page_page1_l3"+str1+"_sb2");
 set("d_page_root2_l2"+str2+"_clmc",sb2);

 if(!isDataEmpty(sb2)){
  let sb1 = gettv("d_page_page1_l3"+str1+"_sb1");
  set("d_page_root2_l2"+str2+"_yp",sb1);

  let sb3 = gettv("d_page_page1_l3"+str1+"_sb3");
  set("d_page_root2_l2"+str2+"_lxgg",sb3);

  let sb4 = gettv("d_page_page1_l3"+str1+"_sb4");
  set("d_page_root2_l2"+str2+"_cdcj",sb4);

  let xjlyl = gettv("d_page_page5_sbsj2_l9_xjlyl"+i);
  set("d_page_root2_l2"+str2+"_dwyl",xjlyl);
console.log(xjlyl)
  let xjldwb = gettv("d_page_page5_sbsj2_l10_xjldwb"+i);
  set("d_page_root2_l2"+str2+"_dwb",xjldwb);
 }
}

//外加剂

for(let i=1;i<3;i++){
 let str1 = i===1?"":"copy"+i;
 let str2 = "copy"+(i+6);

 let sd2 = gettv("d_page_page1_l5"+str1+"_sd2");
 set("d_page_root2_l2"+str2+"_clmc",sd2);

 if(!isDataEmpty(sd2)){
  let sd1 = gettv("d_page_page1_l5"+str1+"_sd1");
  set("d_page_root2_l2"+str2+"_yp",sd1);

  let sd3 = gettv("d_page_page1_l5"+str1+"_sd3");
  set("d_page_root2_l2"+str2+"_lxgg",sd3);

  let sd4 = gettv("d_page_page1_l5"+str1+"_sd4");
  set("d_page_root2_l2"+str2+"_cdcj",sd4);

  let wjjyl = gettv("d_page_page5_sbsj2_l9_wjjyl"+i);
  set("d_page_root2_l2"+str2+"_dwyl",wjjyl );

  let wjjdwb = gettv("d_page_page5_sbsj2_l10_wjjdwb"+i);
  set("d_page_root2_l2"+str2+"_dwb",wjjdwb );
 }
}


//水

var se2 = gettv("d_page_page1_l6_se2");
set("d_page_root2_l2copy9_clmc",se2);
if(!isDataEmpty(se2)){
 let se1 = gettv("d_page_page1_l6_se1");
 set("d_page_root2_l2copy9_yp",se1);

 let se3 = gettv("d_page_page1_l6_se3");
 set("d_page_root2_l2copy9_lxgg",se3);

 let se4 = gettv("d_page_page1_l6_se4");
 set("d_page_root2_l2copy9_cdcj",se4);

 let syl = gettv("d_page_page5_sbsj2_l9_syl");
 set("d_page_root2_l2copy9_dwyl",syl);

 let sdwb = gettv("d_page_page5_sbsj2_l10_sdwb");
 set("d_page_root2_l2copy9_dwb",sdwb);
}

let pzqd = gettv("d_page_page3_l2_s3");
set("d_page_root2_l3_pzqd",pzqd);

let xdsjb = gettv("d_page_page5_sbsj1_s3");
set("d_page_root2_l3_xdsjb",xdsjb);

let xdsl = gettv("d_page_page5_sbsj1_s2");
set("d_page_root2_l3_xdsl",xdsl);

let tld = gettv("d_page_page5_sbsj2_l6_s14");
set("d_page_root2_l5_tld",tld);

let wbcd = gettv("d_page_page5_sbsj2_l6_s16");
set("d_page_root2_l5_wbcd",wbcd);

let bgmd = gettv("d_page_page5_sbsj2_l6_s18");
set("d_page_root2_l5_bgmd",bgmd);

let cnsj = gettv("d_page_page5_sbsj2_l6_s20");
set("d_page_root2_l5_cnsj",cnsj);

let znsj = gettv("d_page_page5_sbsj2_l6_s22");
set("d_page_root2_l5_znsj",znsj);

let kyqd1 = gettv("d_page_page5_sbsj2_l6_s24");
set("d_page_root2_l5_kyqd1",kyqd1);

let kyqd2 = gettv("d_page_page5_sbsj2_l6_s26");
set("d_page_root2_l5_kyqd2",kyqd2);






//==================================================================

//水泥
var clmcArr = [];
var ypArr = [];
var lxggArr = [];
var cdcjArr = [];
var dwylArr = [];
var dwbArr = [];


var sc2 = gettv("d_page_page1_l4_sc2");
// set("d_page_root2_l2_clmc",sc2);
if(!isDataEmpty(sc2)){
 clmcArr.push(sc2);
 let sc1 = gettv("d_page_page1_l4_sc1");
 // set("d_page_root2_l2_yp",sc1);
ypArr.push(sc1);

 let sc3 = gettv("d_page_page1_l4_sc3");
 // set("d_page_root2_l2_lxgg",sc3);
lxggArr.push(sc3);

 let sc4 = gettv("d_page_page1_l4_sc4");
 // set("d_page_root2_l2_cdcj",sc4);
 cdcjArr.push(sc4);

 let dwyl1 = gettv("d_page_page5_sbsj2_l9_snyl");
 // set("d_page_root2_l2_dwyl",dwyl1);
 dwylArr.push(dwyl1);

 let dwb1 = gettv("d_page_page5_sbsj2_l10_sndwb");
 // set("d_page_root2_l2_dwb",dwb1);
 dwbArr.push(dwb1);
}

//粗集料

for(let i=1;i<4;i++){
 let str1 = i===1?"":"copy"+i;
 let str2 = "copy"+(i+1);

 let sa2 = gettv("d_page_page1_l2"+str1+"_sa2");
 //set("d_page_root2_l2"+str2+"_clmc",sa2);

 if(!isDataEmpty(sa2)){
   clmcArr.push(sa2);

  let sa1 = gettv("d_page_page1_l2"+str1+"_sa1");
  // set("d_page_root2_l2"+str2+"_yp",sa1);
  ypArr.push(sa1);

  let sa3 = gettv("d_page_page1_l2"+str1+"_sa3");
  // set("d_page_root2_l2"+str2+"_lxgg",sa3);
  lxggArr.push(sa3);

  let sa4 = gettv("d_page_page1_l2"+str1+"_sa4");
  // set("d_page_root2_l2"+str2+"_cdcj",sa4);
  cdcjArr.push(sa4);

  let cjlyl = gettv("d_page_page5_sbsj2_l9_cjlyl"+i);
  // set("d_page_root2_l2"+str2+"_dwyl",cjlyl);
  dwylArr.push(cjlyl);

  let cjldwb = gettv("d_page_page5_sbsj2_l10_cjldwb"+i);
  // set("d_page_root2_l2"+str2+"_dwb",cjldwb);
  dwbArr.push(cjldwb);
 }
}

//细集料

for(let i=1;i<3;i++){
 let str1 = i===1?"":"copy"+i;
 let str2 = "copy"+(i+4);

 let sb2 = gettv("d_page_page1_l3"+str1+"_sb2");
 // set("d_page_root2_l2"+str2+"_clmc",sb2);

 if(!isDataEmpty(sb2)){
   clmcArr.push(sb2);

  let sb1 = gettv("d_page_page1_l3"+str1+"_sb1");
  // set("d_page_root2_l2"+str2+"_yp",sb1);
  ypArr.push(sb1);

  let sb3 = gettv("d_page_page1_l3"+str1+"_sb3");
  // set("d_page_root2_l2"+str2+"_lxgg",sb3);
  lxggArr.push(sb3);

  let sb4 = gettv("d_page_page1_l3"+str1+"_sb4");
  // set("d_page_root2_l2"+str2+"_cdcj",sb4);
  cdcjArr.push(sb4);

  let xjlyl = gettv("d_page_page5_sbsj2_l9_xjlyl"+i);
  // set("d_page_root2_l2"+str2+"_dwyl",xjlyl);
  dwylArr.push(xjlyl);

  let xjldwb = gettv("d_page_page5_sbsj2_l10_xjldwb"+i);
  // set("d_page_root2_l2"+str2+"_dwb",xjldwb);
  dwbArr.push(xjldwb);
 }
}

//外加剂

for(let i=1;i<3;i++){
 let str1 = i===1?"":"copy"+i;
 let str2 = "copy"+(i+6);

 let sd2 = gettv("d_page_page1_l5"+str1+"_sd2");
 // set("d_page_root2_l2"+str2+"_clmc",sd2);

 if(!isDataEmpty(sd2)){
   clmcArr.push(sd2);

  let sd1 = gettv("d_page_page1_l5"+str1+"_sd1");
  // set("d_page_root2_l2"+str2+"_yp",sd1);
  ypArr.push(sd1);

  let sd3 = gettv("d_page_page1_l5"+str1+"_sd3");
  // set("d_page_root2_l2"+str2+"_lxgg",sd3);
  lxggArr.push(sd3);

  let sd4 = gettv("d_page_page1_l5"+str1+"_sd4");
  // set("d_page_root2_l2"+str2+"_cdcj",sd4);
  cdcjArr.push(sd4);

  let wjjyl = gettv("d_page_page5_sbsj2_l9_wjjyl"+i);
  // set("d_page_root2_l2"+str2+"_dwyl",wjjyl );
  dwylArr.push(wjjyl);

  let wjjdwb = gettv("d_page_page5_sbsj2_l10_wjjdwb"+i);
  // set("d_page_root2_l2"+str2+"_dwb",wjjdwb );
  dwbArr.push(wjjdwb);
 }
}


//水

var se2 = gettv("d_page_page1_l6_se2");
// set("d_page_root2_l2copy9_clmc",se2);
if(!isDataEmpty(se2)){
  clmcArr.push(se2);

 let se1 = gettv("d_page_page1_l6_se1");
 // set("d_page_root2_l2copy9_yp",se1);
 ypArr.push(se1);

 let se3 = gettv("d_page_page1_l6_se3");
 // set("d_page_root2_l2copy9_lxgg",se3);
 lxggArr.push(se3);

 let se4 = gettv("d_page_page1_l6_se4");
 // set("d_page_root2_l2copy9_cdcj",se4);
 cdcjArr.push(se4);

 let syl = gettv("d_page_page5_sbsj2_l9_syl");
 // set("d_page_root2_l2copy9_dwyl",syl);
 dwylArr.push(syl);

 let sdwb = gettv("d_page_page5_sbsj2_l10_sdwb");
 // set("d_page_root2_l2copy9_dwb",sdwb);
 dwbArr.push(sdwb);
}

var len = clmcArr.length;
copy("d_page_root2_l2",len);
for(var i=0;i<len;i++){
  let str = !i?"":"copy"+(i+1);
  set("d_page_root2_l2"+str+"_yp",ypArr[i]);
  set("d_page_root2_l2"+str+"_clmc",clmcArr[i]);
  set("d_page_root2_l2"+str+"_lxgg",lxggArr[i]);
  set("d_page_root2_l2"+str+"_cdcj",cdcjArr[i]);
  set("d_page_root2_l2"+str+"_dwyl",dwylArr[i]);
  set("d_page_root2_l2"+str+"_dwb",dwbArr[i]);
}


let pzqd = gettv("d_page_page3_l2_s3");
set("d_page_root2_l3_pzqd",pzqd);

let xdsjb = gettv("d_page_page5_sbsj1_s3");
set("d_page_root2_l3_xdsjb",xdsjb);

let xdsl = gettv("d_page_page5_sbsj1_s2");
set("d_page_root2_l3_xdsl",xdsl);

let tld = gettv("d_page_page5_sbsj2_l6_s14");
set("d_page_root2_l5_tld",tld);

let wbcd = gettv("d_page_page5_sbsj2_l6_s16");
set("d_page_root2_l5_wbcd",wbcd);

let bgmd = gettv("d_page_page5_sbsj2_l6_s18");
set("d_page_root2_l5_bgmd",bgmd);

let cnsj = gettv("d_page_page5_sbsj2_l6_s20");
set("d_page_root2_l5_cnsj",cnsj);

let znsj = gettv("d_page_page5_sbsj2_l6_s22");
set("d_page_root2_l5_znsj",znsj);

let kyqd1 = gettv("d_page_page5_sbsj2_l6_s24");
set("d_page_root2_l5_kyqd1",kyqd1);

let kyqd2 = gettv("d_page_page5_sbsj2_l6_s26");
set("d_page_root2_l5_kyqd2",kyqd2);
