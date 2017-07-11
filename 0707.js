var s11 = getrs("r.sll");
var bbmj = getrs("r.bbmj");
var bbmjpjz = getrs("r.bbmjpjz");
var syzl = getrs("r.syzl");
var slctj = getrs("r.slctj");
var tjpjz = getrs("r.tjpjz");
var jlsjpjz= getrs("r.jlsjpjz");
var kzpjz = getrs("r.kzpjz");


var s9 = getf(e.p2+".l9.s9");
var s4 = getdsv("ds.sz","wd",s9,"kqnd");
set(e.p2+".l4.s4",s4);
var s10 = getf(e.p2+".l10.s10");
var s5 = getdsv("ds.sz","wd",s10,"kqnd");
set(e.p2+".l5.s5",s5);

var s7 = getf(e.p2+".l7.s7");
var s11 = getf(e.p2+".l1.s11");
var s3 = getf(e.p2+".l3.s3");
var s12 = "";
var sa14 = getf(e.p2+".l4.sa14");
var sa15 = getf(e.p2+".l4.sa15");

if(!isDataEmpty(s7)&&!isDataEmpty(s11)&&!isDataEmpty(s3)){
 s12 = rds(s7*s11*getSub(1,s3),syl);
}else{
 s12 = "";
};
set(e.p2+".l2.s12",s12);

var s15 = "";
var s17 = get(e.p2+".l7.s17");
var s2 = getf(e.p2+".l2.s2");
var s3 = getf(e.p2+".l2.s3");
var s6 = getf(e.p2+".l2.s6");
var s7 = getf(e.p2+".l2.s7");
var s8 = getf(e.p2+".l8.s8");




if(!s17){
dis(e.p3+".sysj2.l5.sa15",true,"");
dis(e.p3+".sysj2.l5.sb15",true,"");

if(!isDataEmpty(s2)&&!isDataEmpty(s3)&&!isDataEmpty(s8)&&!isDataEmpty(sa14)&&!isDataEmpty(sb14)){
  if(s2==s3){
   if(getAbs(getSub(s9,s10))<=3){
     sa15=(s8*getPow(sa14,0.5))/getPow(s1,0.5);
     sb15=(s8*getPow(sb14,0.5))/getPow(s1,0.5);
   }else{
     sa15=(s8*getPow(sa14,0.5)*getPow(s4,0.5))/(getPow(s1,0.5)*getPow(s5,0.5));
     sa15=(s8*getPow(sb14,0.5)*getPow(s4,0.5))/(getPow(s1,0.5)*getPow(s5,0.5));
   }
 }else{
   if(s6==s7){
     if(getAbs(getSub(s9,s10))<=3){
      sa15=(s8*getPow(sa14,0.5)*(getSub(1,s2))*getPow(s3,1.5))/(getPow(s1,0.5)* (getSub(1,s3))* getPow(s2,1.5));
      sb15=(s8*getPow(sb14,0.5)*(getSub(1,s2))*getPow(s3,1.5))/(getPow(s1,0.5)* (getSub(1,s3))* getPow(s2,1.5));
    }else{
      sa15=(s8*getPow(sa14,0.5)*(getSub(1,s2))*getPow(s3,1.5)*getPow(s4,0.5))/(getPow(s1,0.5)* (getSub(1,s3))* getPow(s2,1.5)*getPow(s5,0.5));
      sb15=(s8*getPow(sb14,0.5)*(getSub(1,s2))*getPow(s3,1.5)*getPow(s4,0.5))/(getPow(s1,0.5)* (getSub(1,s3))* getPow(s2,1.5) *getPow(s5,0.5));
    }
  }else{
    if(getAbs(getSub(s9,s10))<=3){
      sa15=(s8*getPow(sa14,0.5)*(getSub(1,s2))*getPow(s3,1.5))/(getPow(s1,0.5)* (getSub(1,s3))* getPow(s2,1.5));
      sb15=(s8*getPow(sb14,0.5)*(getSub(1,s2))*getPow(s3,1.5))/(getPow(s1,0.5)* (getSub(1,s3))* getPow(s2,1.5))
    }else{
      sa15=(s8*getPow(sa14,0.5)*(getSub(1,s2))*getPow(s3,1.5)*s6)/(getPow(s1,0.5)* (getsub(1,s3))* getPow(s2,1.5)*s7);
      sb15=(s8*getPow(sb14,0.5)*(getSub(1,s2))*getPow(s3,1.5)*s6)/(getPow(s1,0.5)* (getsub(1,s3))* getPow(s2,1.5)*s7)
    }
  }
 }
  set(e.p3+".sysj2.l5.sa15",sa15);
  set(e.p3+".sysj2.l5.sb15",sb15);
}
}else{
 dis(e.p3+".sysj2.l5.sa15",false);
 dis(e.p3+".sysj2.l5.sb15",false);
}





function empty(flag){
 for(var i=0;i<2;i++){
  var str2 = i?"a":"c";
  dis(e.p2+".l3.s"+str2+1,flag);
  dis(e.p2+".l4.s"+str2+2,flag);
 }
 dis(e.p2+".l7.s5",!flag);
 dis(e.p2+".l8.s6",!flag);
}

if(s1=="标准法(雷氏夹法)"){
 empty(false);
 var sa1 = getf(e.p2+".l3.sa1");
 var sa2 = getf(e.p2+".l4.sa2");
 var sc1 = getf(e.p2+".l3.sc1");
 var sc2 = getf(e.p2+".l4.sc2");
 var s2 = getSub2(sc1,sa1);
 var s3 = getSub2(sc2,sa2);
 set(e.p2+".l5.s2",rds(s2,valueca));
 set(e.p2+".l5.s3",rds(s3,valueca));
 var s4 = "";
 if(!isDataEmpty(s2)&&!isDataEmpty(s3)){
  if(getSub(s2,s3)>4){
   s4 = "";
   vis(e.p2+".l6.cc",true,"超差");
  }else{
   s4 = rds(getAvg(s2,s3)*2,0)/2;
   vis(e.p2+".l6.cc",false,"");
  }
 }else{
  s4 = "";
  vis(e.p2+".l6.cc",false,"");
 }
 set(e.p2+".l6.s4",s4);

}else{
 empty(true);
}


function empty(flag){
 if(flag){
  dis(e.p2+".l3.sa1",true,"");
  dis(e.p2+".l3.sc1",true,"");
  dis(e.p2+".l4.sa2",true,"");
  dis(e.p2+".l4.sc2",true,"");
  set(e.p2+".l5.s2","");
  set(e.p2+".l5.s3","");
  dis(e.p2+".l7.s5",false);
  dis(e.p2+".l8.s6",false);
 }else{
  dis(e.p2+".l3.sa1",false);
  dis(e.p2+".l3.sc1",false);
  dis(e.p2+".l4.sa2",false);
  dis(e.p2+".l4.sc2",false);
  dis(e.p2+".l7.s5",true);
  dis(e.p2+".l8.s6",true);
 }
}








//CBR
//计算承载比2.5 5  //拟合曲线暂时没有做，这里先直接取最大、最小值
var czb25 = getMax(dwyls);
set(e.p1+".czb25", czb25);
var czb50 = getMin(dwyls);
set(e.p1+".czb50", czb50);

var czbjdz = get(e.p1 + "_czbjdz");
var cbr = null;
if(czbjdz){
  cbr = getMax(czb25, czb50);
}
else{
  cbr = czb25;
}
//alert(cbr);
set(e.p1 + "_cbrqz", cbr);





var kzqd = getrs("r.kzqd");
var kzpjz = getrs("r.kzpjz");
var kyqd = getrs("r.kyqd");
var kypjz = getrs("r.kypjz");

var s3 = getf(e.p2+".l2.s3");
var s4 = getf(e.p2+".l2.s4");
var s1 = get(e.p2+".l1.s1");

if(s1=="极限荷载"){
 var s6;
 var s5 = getf(e.p1+".s5");
 if(!isDataEmpty(s5)){
  s6 = s5/1600;
 }else{
  s6 = "";
 }
 set(e.p1+".s6",rds(s6,kyqd));
 var s8;
 var s7 = getf(e.p1+".s7");
 if(!isDataEmpty(s7)){
  s8 = 1.5*s7/1600;
 }else{
  s8 = "";
 }
 set(e.p1+".s8",rds(s8,kyqd));
}else{
 var s6arr = loop(6);
 if()
}


function pcCal(num){
 var arr = loop(num);
 var res = [];
 if(arr.length==6){
  var avg = getAvg(...arr);
  for(var i=0;i<arr.length;i++){
   var pc = getAbs(getSub(arr[i],avg))/avg)*100;
   if(pc>10){
    res.push({index:i,pc:pc});

   }else{

   }
  }
 }
}












function loop(num){
 var arr = [];
 for(var i=1;i<7;i++){
  var str = i==1?"":"copy"+i;
  var val = getf(e.p2+".l4"+str+".s"+num);
  if(!isDataEmpty(val)){
   arr.push(val);
  }
 }
 if(arr.length==6){return arr}else{return null};
}


















function pcCal(num){
 var arr = loop(num);
 var res = [];
 if(arr){
  var avg = getAvg(...arr);
  arr.forEach((item,index)=>{
    var pc = getAbs(getSub(item,avg)/avg)*100;
    var str = index==1?"":"copy"+(index+2);
    if(pc>10){
     res.push({index:index,pc:pc});
     vis(e.p2+".l4"+str+".s"+num,true,"超差");
   }else{
     vis(e.p2+".l4"+str+".s"+num,false,"");
   }
  })
  if(res.length){
    res.sort((a,b)=>{
      return b.pc-a.pc;
    })
    arr.splice(res[0].index);
    arr.forEach((item,index)=>{
      var pc = getAbs(getSub(item,avg)/avg)*100;
      if(pc>10){
        return "";
      }else{
        return getAvg(...arr);
      }
    })
  }else{
    return avg;
  }
}else{

}
}
