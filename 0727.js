var num = getCopyCount("d_root_jcsj");

for(var i=1;i<=num;i++){
 let str = i===1?"":"copy"+i;

 let s1 = gettv("d_sysj_l2"+str+"_s1");
 set("d_root_jcsj"+str+"_zh",s1);

 let s2 = gettv("d_sysj_l2"+str+"_s2");
 set("d_root_jcsj"+str+"_zh",s2);

 let s3 = gettv("d_sysj_l2"+str+"_s3");
 set("d_root_jcsj"+str+"_schd",s3);

 let s4 = gettv("d_sysj_l2"+str+"_s4");
 set("d_root_jcsj"+str+"_scz",s4);

}

var s6 = gettv("d_sysj_l3_s6");
set("d_root_pdsj_jcds",s6);
console.log(s6);
var s7 = gettv("d_sysj_l3_s7");
set("d_root_pdsj_pjz",s7);

var s8 = gettv("d_sysj_l3_s8");
set("d_root_pdsj_bzc",s8);

var s9 = gettv("d_sysj_l3_s9");
set("d_root_pdsj_bzl",s9);

var s10 = gettv("d_sysj_l3_s10");
set("d_root_pdsj_bzlxs",s10);

var s11 = gettv("d_sysj_l3_s11");
set("d_root_pdsj_sjz",s11);

var s14 = gettv("d_sysj_l3_s14");
set("d_root_pdsj_dbz",s14);

var s15 = gettv("d_sysj_l3_s15");
set("d_root_pdsj_hgds",s15);

var s16 = gettv("d_sysj_l3_s16");
set("d_root_pdsj_hgl",s16);
