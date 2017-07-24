var s2 = getf(e.p3+".l1.s2");
var ctlx = get(e.p4+".sysj1.ctlx");
var flag;

if(ctlx=="轻型触探"){flag = 1;};
if(ctlx=="重型触探"){flag = 2;};
if(ctlx=="特重型触探"){flag = 3;};

for(var i=1;i<16;i++){
 var str = i==1?"":"copy"+i;
 var s4 = getf(e.p2+".grsj"+str+".s4");
 var s5 = "";
 if(i==1){
  s5 = getSub2(s4,s2);
 }else{
  let val = getf(e.p2+".grsj"+((i-1)==1?"":"copy"+(i-1))+".s4");
  s5 = getSub2(s4,val);
 }
 set(e.p2+".grsj"+str+".s5",s5);
 var s6 = getf(e.p2+".grsj"+str+".s6");
 var s7 = "";
 if(flag==2||flag==3){
  if(!isDataEmpty(s6)&&!isDataEmpty(s5)){
   s7 = rds(s6/s5*10,0);
  }
 }
 set(e.p2+".grsj"+str+".s7",s7);
 var s8 = "";
 if(flag==3){
  if(!isDataEmpty(s7)){
   s8 = rds(getSub(3* s7,0.5),0);
  }
 }
 set(e.p2+".grsj"+str+".s8",s8);

 //补充  s9   部分   内插法
 var s9="";
 if(flag==3){
    //杆长
    var s3 = getf(e.p2+".grsj"+str+".s3");
    if(!isDataEmpty(s3)){
        if(s3<=2){
          s9=1.00;

        }
        if(s3>2&&s3<=20){

        }

    }
 }

 if(flag==2){
    //杆长
    var s3 = getf(e.p2+".grsj"+str+".s3");
    if(!isDataEmpty(s3)){
        if(s3<=2){
          s9=1.00;

        }
        if(s3>2&&s3<=20){

        }

    }
 }


 set(e.p2+".grsj"+str+".s9",s9);

 //补充 s10
 var s10=""
 if(flag==1){
   if(!isDataEmpty(s4)){
     s10 = s4;
   }
 }
 if(flag==2||flag==3){
   if(!isDataEmpty(s4)&&!isDataEmpty(s9)){
     s10 = rds(s4*s9,0);
   }
 }
 set(e.p2+".grsj"+str+".s10",s10);


 // 补充 s11 和 s12 有一个条件 勾选按经验公式计算未显示
 var s11,s12;
 if(flag===1){
   if(!isDataEmpty(s10)&&(s10<15||s10>30)){
     s11 = getSub(8*s10,20);
     s12 = getSub(14.6*s10,36);
   }
   if(15<=s10&&s10<=30){
     s11 = getVal1(s10,"ds.qxczl","jbczl",5);
     s12 = getVal1(s10,"ds.qxczl","jxczl",5);
   }
 }else if(flag===2){
   if(!isDataEmpty(s10)&&(s10<3||s10>10)){
     s11 = -0.227*getPow(s10,3)-5.324*getPow(s10,2)-0.573* s10+80.23;
     s12 = -0.454*getPow(s10,3)-10.64*getPow(s10,2)+1.147* s10-160.4;
   }
   if(3<=s10&&s10<=10){
     s11 = getVal1(s10,"ds.zxczl","jbczl");
     s12 = getVal1(s10,"ds.zxczl","jxczl");
   }
 }else if(flag===3){
   if(!isDataEmpty(s10)&&(s10<3||s10>40)){
     s11 = -0.006*getPow(s10,3)-0.157*getPow(s10,2)+41.73*s10-3.724;
     s12 = -0.015*getPow(s10,3)-0.346*getPow(s10,2)+96.64*s10-4.658;
   }else if(3<=s10&&s10<=40){
     s11 = getVal1(s10,"ds.zxczl","jbczl");
     s12 = getVal1(s10,"ds.tzczl","jxczl");
   }
 }
 set(e.p2+".grsj"+str+".s11",rds(s11,0));
 set(e.p2+".grsj"+str+".s12",rds(s12,0));




};


function getVal1(s10,str1,str2,n){
  var val = getdsv("ds.qxczl","yxjs",s10,str2);
  n = n?n:1;
  if(!val){
   var x1 = Math.floor(val/n)*n;
   var x2 = Math.ceil(val/n)*n;
   var y1 = getdsv(str1,"yxjs",x1,str2);
   var y2 = getdsv(str2,"yxjs",x2,str2);
   val = y1+((y2-y1)/(x2-x1))*(s10-x1);
  }
  return val;
}
function getVal2(s10,str1,str2){
  var val = getdsv(str1,"yxjs",s10,str2);
  if(!val){
   var x1 = Math.floor(val/5)*5;
   var x2 = Math.ceil(val/5)*5;
   var y1 = getdsv(str1,"yxjs",x1,str2);
   var y2 = getdsv(str1,"yxjs",x2,str2);
   val = y1+((y2-y1)/(x2-x1))*(s10-x1);
  }
  return val;
}
