var pdyj = get("d_root_page4_typeLine_pdyj");
var tj = get("d_root_page4_typeLine_tj");

var jszb1 = findJszb(pdyj,tj,"j_细度");
set("d_root_page4_xdcs_xdzb",jszb1.result);
var xdjg = getstv(1,"d_sysj_sysj2_sy2_s13");
set("d_root_page4_xdcs_xdjg",xdjg);
var pdjg1 = isEmpty(jszb1.result,xdjg)?"":executeJszb(jszb1.result,xdjg);
set("d_root_page4_xdcs_xdpd",pdjg1);

var jszb2 = findJszb(pdyj,tj,"j_密度");
set("d_root_page4_mdcs_mdzb",jszb2.result);
var mdjg = getstv(2,"d_sysj_l2_s8");
set("d_root_page4_mdcs_mdjg",mdjg);
var pdjg2 = isEmpty(jszb2.result,mdjg)?"":executeJszb(jszb2.result,mdjg);
set("d_root_page4_mdcs_mdpd",pdjg2);

var jszb3 = findJszb(pdyj,tj,"j_比表面积");
set("d_root_page4_bbmjcs_bbmjzb",jszb3.result);
var bbmjjg = getstv(3,"d_page_page4_sysj2_l6_s16");
set("d_root_page4_bbmjcs_bbmjjg",bbmjjg);
var pdjg3 = isEmpty(jszb3.result,bbmjjg)?"":executeJszb(jszb3.result,bbmjjg);
set("d_root_page4_bbmjcs_bbmjpd",pdjg3);

var jszb4 = findJszb(pdyj,tj,"j_标准稠度用水量");
set("d_root_page4_bzcdcs_bzcdzb",jszb4.result);
var bzcdjg = getstv(4,"d_sysj_sysj1_l5copy11_s13");
set("d_root_page4_bzcdcs_bzcdjg",bzcdjg);
var pdjg4 = isEmpty(jszb4.result,bzcdjg)?"":executeJszb(jszb3.result,bzcdjg);
set("d_root_page4_bzcdcs_bzcdpd",pdjg4);

var jszb5 = findJszb(pdyj,tj,"j_初凝时间");
set("d_root_page4_njsjcs_cnzb",jszb5.result);
var cnjg = getstv(4,"d_sysj_sysj1_l5copy11_s13");
set("d_root_page4_njsjcs_cnjg",cnjg);
var pdjg5 = isEmpty(jszb5.result,cnjg)?"":executeJszb(jszb3.result,cnjg);
set("d_root_page4_njsjcs_cnpd",pdjg5);

var jszb13 = findJszb(pdyj,tj,"j_终凝时间");
set("d_root_page4_njsjcs_znzb",jszb13.result);
var znjg = getstv(4,"d_sysj_sysj2_l6_s6");
set("d_root_page4_njsjcs_znjg",znjg);
var pdjg13 = isEmpty(jszb13.result,znjg)?"":executeJszb(jszb13.result,znjg);
set("d_root_page4_njsjcs_znpd",pdjg13);

var jszb6 = findJszb(pdyj,tj,"j_安定性(雷氏夹法)");
set("d_root_page4_adxcs_lsadxzb",jszb6.result);
var lsadxjg = getstv(4,"d_sysj_sysj3_l6_s4");
set("d_root_page4_adxcs_lsadxjg",cnjg);
var pdjg6 = isEmpty(jszb6.result,lsadxjg)?"":executeJszb(jszb6.result,lsadxjg);
set("d_root_page4_adxcs_lsadxpd",pdjg6);

var jszb7 = findJszb(pdyj,tj,"j_安定性(试饼法)");
set("d_root_page4_adxcs_sbadxzb",jszb7.result);
// var sbadxjg = getstv(4,"d_sysj_sysj1_l5copy11_s13");
// set("d_root_page4_adxcs_lsadxjg",cnjg);
// var pgjg6 = isEmpty(jszb6,sbadxjg)?"":executeJszb(jszb6,sbadxjg);
// set("d_root_page4_adxcs_lsadxpd",pdjg6);

var jszb8 = findJszb(pdyj,tj,"j_胶砂流动度");
set("d_root_page4_lddcs_lddzb",jszb8.result);


var jszb9 = findJszb(pdyj,tj,"j_3d抗折强度");
set("d_root_page4_qdcs_kzzb1",jszb9.result);
var kzjg1 = getstv(5,"d_sysj_kzsj_kzjg_s9");
set("d_root_page4_qdcs_kzjg1",kzjg1);
var pdjg9 = isEmpty(jszb9.result,kzjg1)?"":executeJszb(jszb9.result,kzjg1);
set("d_root_page4_qdcs_kzpe1",pdjg9);

var jszb10 = findJszb(pdyj,tj,"j_28d抗折强度");
set("d_root_page4_qdcs_kzzb2",jszb10.result);
var kzjg2 = getstv(5,"d_sysj_kzsj_kzjg_s10");
set("d_root_page4_qdcs_kzjg2",kzjg2);
var pdjg10 = isEmpty(jszb10.result,kzjg2)?"":executeJszb(jszb10.result,kzjg2);
set("d_root_page4_qdcs_kzpe2",kzjg2);

var jszb11 = findJszb(pdyj,tj,"j_3d抗压强度");
set("d_root_page4_qdcs_kyzb1",jszb11.result);
var kyjg1 = getstv(5,"d_sysj_kysj_kyjg_s9");
set("d_root_page4_qdcs_kyjg1",kyjg1);
var pdjg11 = isEmpty(jszb11.result,kyjg1)?"":executeJszb(jszb11.result,kyjg1);
set("d_root_page4_qdcs_kype1",pdjg11);

var jszb12 = findJszb(pdyj,tj,"j_28d抗压强度");
set("d_root_page4_qdcs_kyzb2",jszb12.result);
var kyjg2 = getstv(5,"d_sysj_kysj_kyjg_s10");
set("d_root_page4_qdcs_kyjg2",kyjg2);
var pdjg12 = isEmpty(jszb12.result,kyjg2)?"":executeJszb(jszb12.result,kyjg2);
set("d_root_page4_qdcs_kype2",pdjg12);



function isEmpty(){
 var rsl = true;
 if(!arguments.length){
  rsl = false;
 }
 for(var i=0;i<arguments.length;i++){
  if(isDataEmpty(arguments[i])){
   rsl = false;
   break;
  }
 }
 return rsl;
}
