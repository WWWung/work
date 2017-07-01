
if(get(e.p3+".sysj1.l1.jllx")[0]==="沥"){
 dis(e.p3+".sysj2.l2.s1",true,"");
 dis(e.p3+".sysj2.l2.s2",true,"");
 dis(e.p3+".sysj2.l3.s1",true,"");
 dis(e.p3+".sysj2.l3.s2",true,"");
 dis(e.p3+".sysj2.l4.s1",true,"");
 dis(e.p3+".sysj2.l4.s2",true,"");
}else if(get(e.p3+".sysj1.l1.jllx")[0]==="路"){
 dis(e.p3+".sysj1.l3.s1",true,"");
 dis(e.p3+".sysj1.l3.s2",true,"");
 dis(e.p3+".sysj1.l3.s4",true,"");
 dis(e.p3+".sysj1.l3.s5",true,"");
 dis(e.p3+".sysj1.l4.s1",true,"");
 dis(e.p3+".sysj1.l4.s2",true,"");
 dis(e.p3+".sysj1.l4.s4",true,"");
 dis(e.p3+".sysj1.l4.s5",true,"");
 dis(e.p3+".sysj1.l5.s1",true,"");
 dis(e.p3+".sysj1.l5.s2",true,"");
 dis(e.p3+".sysj1.l5.s4",true,"");
 dis(e.p3+".sysj1.l5.s5",true,"");
}

var zl1 = getrs("r.zl1"),
    zl2 = getrs("r.zl2"),
    zpzhl = getrs("r.zpzhl"),
    zpzcdz = getrs("r.zpzcdz");

check(get(e.p3+".sysj1.l1.jllx")[0]==="沥");
function check(flag){
 dis(e.p3+".sysj2.l2.s1",flag,"");
 dis(e.p3+".sysj2.l2.s2",flag,"");
 dis(e.p3+".sysj2.l3.s1",flag,"");
 dis(e.p3+".sysj2.l3.s2",flag,"");
 dis(e.p3+".sysj2.l4.s1",flag,"");
 dis(e.p3+".sysj2.l4.s2",flag,"");
 dis(e.p3+".sysj1.l3.s1",!flag,"");
 dis(e.p3+".sysj1.l3.s2",!flag,"");
 dis(e.p3+".sysj1.l3.s4",!flag,"");
 dis(e.p3+".sysj1.l3.s5",!flag,"");
 dis(e.p3+".sysj1.l4.s1",!flag,"");
 dis(e.p3+".sysj1.l4.s2",!flag,"");
 dis(e.p3+".sysj1.l4.s4",!flag,"");
 dis(e.p3+".sysj1.l4.s5",!flag,"");
 dis(e.p3+".sysj1.l5.s1",!flag,"");
 dis(e.p3+".sysj1.l5.s2",!flag,"");
 dis(e.p3+".sysj1.l5.s4",!flag,"");
 dis(e.p3+".sysj1.l5.s5",!flag,"");
 calculate(3);
 calculate(4);
 calculate(5);
}

function calculate(l){
 let s1 = get(e.p2+".l"+l+".s1");
 let s2 = get(e.p2+".l"+l+".s2");
 let s4 = get(e.p2+".l"+l+".s4");
 let s5 = get(e.p2+".l"+l+".s5");

 let s3 = getSub(s1,s2);
 let s6 = s4/s2*100;
 let s7 = s5/s3*100;
 let s8 = getSum(s4,s5)/s1*100;

 if(s1||s2||s4||s5){
   set(e.p2+".l"l+".s3",rds(s3,zl2));
   set(e.p2+".l"l+".s6",rds(s3,zpzhl));
   set(e.p2+".l"l+".s7",rds(s3,zpzhl));
   set(e.p2+".l"l+".s8",rds(s3,zpzhl));
 }
}












var sb = [];var fjsy = getrs("r.fjsy");var ljsy = getrs("r.ljsy");
for(var i=1;i<=15;i++){
 sb.push(get(e.p3+".sfsj.l2.sb"+i));
};
//筛分后总质量
var s7;
if(isSbVal()){
 s7 = sb.reduce((a,b)=>{
  return a+b*1;
 })
 for(var i=1;i<16;i++){
  set(e.p4+".sysj.l3.sc"+i,rds(get(e.p4+".sysj.l2.sb"+i)/s7*100,fjsy));
 }
}else{
 console.log(false)
}

if(get(e.p4+".sysj.l4.s12")[0]==="分"){
 for(var i=1;i<16;i++){
  let sc = get(e.p4+".sysj.l3.sc"+i)*1;
  let sd = i-1==0?0:get(e.p4+".sysj.l4.d"+(i-1));
  set(e.p4+".sfsj.l4.sd"+i,rds(getSum(sc,sd)));
 }
}else{
 for(var i=1;i<16;i++){
  let arr = [];
  arr.push(get(e.p4+".sfsj.l2.sb"+i)*1);
  let sd = getSum.apply(this,arr)/s7;
  set(e.p4+".sfsj.l4.sd"+i,rds(sd,ljsy));
 }
}


function isSbVal(){
 var flag = true;
 for(var i=0;i<sb.length;i++){
  if(sb[i]==="")
  flag = false;
  break;
 }
 return flag;
}
