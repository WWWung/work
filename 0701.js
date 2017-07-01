// 粗集料针、片状颗粒含量试验（规准仪法）计算说明
//version - 1
var s9=0,s10=0,s11=0;
var s1 = getf(e.p3+".l2.sjsj2.s1");
for(var i=1;i<7;i++){
 var str = i!==1?"copy"+i:"";
 var s3 = getf(e.p3+".l2.sysj3.l1"+str+".s3");
 var s4 = getf(e.p3+".l2.sysj3.l1"+str+".s4");
 var rHjzl = getrs("r.hjzl")
 var rZzhl = getrs("r.zzhl");
 var rPzhl = getrs("r.pzhl");
 var rHjhl = getrs("r.hjhl");

 var s5 = rds(getSum(s3,s4),rHjzl);

 var s6 = rds(s3/s1*100,rZzhl);
 var s7 = rds(s4/s1*100,rPzhl);
 var s8 = rds(s5/s1*100,rHjhl);
 if(s3&&s4){
  set(e.p3+".l2.sysj3.l1"+str+".s5",s5);
  set(e.p3+".l2.sysj3.l1"+str+".s6",s6);
  set(e.p3+".l2.sysj3.l1"+str+".s7",s7);
  set(e.p3+".l2.sysj3.l1"+str+".s8",s8);
 }
 s9 += s3;
 s10 += s4;
 s11 += s5*1;
};
s9 = rds(s9/s1*100,rZzhl);
s10 = rds(s10/s1*100,rPzhl);
var rZzl = getrs("r.zzl");
var s12 = rds(s11/s1*100,rZzl)

set(e.p3+".sysj4.zzhl",s9);
set(e.p3+".sysj4.pzhl",s10);
set(e.p3+".sysj4.zpzzl",rds(s11,rZzl));
set(e.p3+".sysj4.zpzhl",s12);
//version - 2
var hjzl = getrs("r.hjzl");
var zzhl = getrs("r.zzhl");
var pzhl = getrs("r.pzhl");
var hjhl = getrs("r.hjhl");
var zzl = getrs("r.zzl");
var zhl = getrs("r.zhl");
var s1 = get(e.p3+".sjsj2.s1");
var s3 = get(e.p1+".s3");
var s4 = get(e.p1+".s4");
var s5,s6,s7,s8;
if(s3&&s4){
 s5 = getSum(s3*1,s4*1);
 console.log(s5,s3,s4)
 s6 = s3/s1*100;
 s7 = s4/s1*100;
 s8 = s5/s1*100;
 set(e.p1+".s5",rds(s5,hjzl ));
 set(e.p1+".s6",rds(s6,zzhl ));
 set(e.p1+".s7",rds(s7,pzhl ));
 set(e.p1+".s8",rds(s8,hjhl ));
}
var s9=0,s10=0,s11=0,s12;
for(var i=1;i<7;i++){
 var str = i===1?"":"copy"+i;
 s9 += getf(e.p2+".l1"+str+".s3");
 s10 += getf(e.p2+".l1"+str+".s4");
 s11 += getf(e.p2+".l1"+str+".s5");
}
if(s9&&s10&&s11){
 s9 = s9/s1*100;
 s10 = s10/s1*100;
 s12 = s11/s1*100;
 set(e.p4+".sysj4.zzhl",rds(s9,zzhl));
 set(e.p4+".sysj4.pzhl",rds(s10,pzhl));
 set(e.p4+".sysj4.zpzzl",rds(s11,zzl));
 set(e.p4+".sysj4.zpzhl",rds(s12,zhl));
}
