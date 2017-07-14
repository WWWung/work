var s33 = getf(e.p1+".s33");
var s36 = get(e.p1+".s36");
var s37 = "";
if(s36 === "99%"){
  if(2<=s33&&s33<=100){
    var val = getdsv("ds.bzlsz","jcds",s33,"bzl1");
    if(val){
      s37 = val
    }else{
      var x1 = Math.floor(val/10)*10;
      var x2 = Math.ceil(val/10)*10;
      var y1 = getdsv("ds.bzlsz","jcds",x1,"bzl1");
      var y2 = getdsv("ds.bzlsz","jcds",x2,"bzl1");
      console.log(x1)
      s37 = y1+(y2-y1)/(x2-x1)*(s33-x1);
    }
  }else if(s33>100){
    s37 = rds(2.3265/getPow2(s33,3));
  }
}else if(s36==="95%"){
  if(2<=s33&&s33<=100){
    var val = getdsv("ds.bzlsz","jcds",s33,"bzl1");
    if(val){
      s37 = val
    }else{
      var x1 = Math.floor(val/10)*10;
      var x2 = Math.ceil(val/10)*10;
      var y1 = getdsv("ds.bzlsz","jcds",x1,"bzl2");
      var y2 = getdsv("ds.bzlsz","jcds",x2,"bzl2");
      s37 = y1+(y2-y1)/(x2-x1)*(s33-x1);
    }
  }else if(s33>100){
    s37 = rds(1.6449/getPow2(s33,3));
  }
}else if(s36==="90%"){
  if(2<=s33&&s33<=100){
    var val = getdsv("ds.bzlsz","jcds",s33,"bzl1");
    if(val){
      s37 = val
    }else{
      var x1 = Math.floor(val/10)*10;
      var x2 = Math.ceil(val/10)*10;
      var y1 = getdsv("ds.bzlsz","jcds",x1,"bzl3");
      var y2 = getdsv("ds.bzlsz","jcds",x2,"bzl3");
      s37 = y1+(y2-y1)/(x2-x1)*(s33-x1);
    }
  }else if(s33>100){
    s37 = rds(1.2815/getPow2(s33,3));
  }
}






//-------------------------------贝克曼



var tm25=getSub(0.569* getSum(s10,s11),9);
var te25=getSub(0.569* getSum(s10,s11),9);
var tm50=getSub(0.498* getSum(s10,s11),3);
var te50=getSub(0.498* getSum(s10,s11),3);
var tm100=0.411* getSum(s10,s11);
var te100=0.411*getSum(s10,s11);
var tm150=getSum(0.363* getSum(s10,s11),3);
var te150=getSum(0.363* getSum(s10,s11),3);
var tm200=getSum(0.339* getSum(s10,s11),5);
var te200=getSum(0.339* getSum(s10,s11),5);
var tm300=getSum(0.324* getSum(s10,s11),6);
var te300=getSum(0.324* getSum(s10,s11),6);


function val(y1,y2,x1,x2) {
  return y1+(y2-y1)/(x2-x1)*(x-x1);
}


if(25<=s9&&s9<50){te = val(25,50,te25,te50)};
if(50<=s9&&s9<100){te = val(50,100,te50,te100)};
if(100<=s9&&s9<150){te = val(100,150,te100,te150)};
if(150<=s9&&s9<200){te = val(150,200,te150,te200)};
if(200<=s9&&s9<250){te = val(200,250,te200,te250)};
if(250<=s9&&s9<300){te = val(250,300,te250,te300)};
if(s9/2<25){te = te25;};
if(s9/2>300){te = te300};
