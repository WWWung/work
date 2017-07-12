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
