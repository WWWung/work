for(let i=1;i<=num;i++){
 let str = i===1?"":"copy"+i;
 let s1 = getstv(5,"d_sysj_l5"+str+"_s1");
 set("d_root_page4_jcsj"+str+"_zh",s1);

 let s2 = getstv(5,"d_sysj_l5"+str+"_s2");
 set("d_root_page4_jcsj"+str+"_cd",s2);

 let s3 = getstv(5,"d_sysj_l5"+str+"_s3");
 set("d_root_page4_jcsj"+str+"_lbwd",s3);

 let sa8 = getstv(5,"d_sysj_l5"+str+"_sa8");
 set("d_root_page4_jcsj"+str+"_zwcz",sa8);

 let sb8 = getstv(5,"d_sysj_l5"+str+"_sb8");
 set("d_root_page4_jcsj"+str+"_ywcz",sb8);

 let s9 = getstv(5,"d_sysj_l5"+"_s9");

}



if(!isDataEmpty(s10a)&&!isDataEmpty(s10b)){
if((getAvg2(s10a,s10b)<5&&getAbs(getSub2(s10a,s10b))>0.3)|(5<=getAvg2(s10a,s10b)&&getAvg2(s10a,s10b)<40&&getAbs(getSub2(s10a,s10b))>1)||(getAvg2(s10a,s10b)>=40&&getAbs(getSub(s10a,s10b))>2)){
 s11 = "";
 vis(e.p2+".lr.s12",true,"超差");
}else{
 s11 = getAvg(s10a,s10b);
 vis(e.p2+".lr.s12",false,"");
}
}else{
 s11 = "";
 vis(e.p2+".lr.s12",false,"");
}



var s13 = "";
if(!isDataEmpty(s12a)&&!isDataEmpty(s12b)){
var avg = getAvg(s12a,s12b);
var sub = getSub(s12a,s12b);
if((avg<5&&getAbs(sub)>0.3)||(5<=avg&&avg<40&&getAbs(sub)>1)||(avg>=40&&getAbs(sub)>2)){
 s13 = "";
 vis(e.p2+".lr.s12",true,"超差");
}else{
 s13 = avg;
 vis(e.p2+".lr.s12",false,"");
}
}else{
 s13 = "";
 vis(e.p2+".lr.s12",false,"");
}
set("d_sjz_l_lr_s11",rds(s13,pjhsl));
