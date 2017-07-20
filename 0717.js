function gets37(s33,str) {
  var s37 = "";
  if(s36==="99%"){
    if(s33>=2&&s33<=100){
      s37 = value(s33,"bzl1");
    }else if(
      s37 = rds(2.3265/getPow(s33,0.5),3);
    )
  }
  if(s36==="95%"){
    if(s33>=2&&s33<=100){
      s37 = value(s33,"bzl2");
    }else if(
      s37 = rds(1.6449/getPow(s33,0.5),3);
    )
  }
  if(s36==="90%"){
    if(s33>=2&&s33<=100){
      s37 = value(s33,"bzl3");
    }else if(
      s37 = rds(1.2815/getPow(s33,0.5),3);
    )
  }
  return s37;
}

function value(s33,str){
  let val = getdsv("ds.bzlsz","jcds",s33,str);
  if(!val){
    let x1 = Math.floor(s33/10)*10;
    let x2 = Math.ceil(s33/10)*10;
    let y1 = getdsv("ds.bzlsz","jcds",x1,str);
    let y2 = getdsv("ds.bzlsz","jcds",x2,str);
    val = y1+((y2-y1)/(x2-x1))*(s33-x1);
  }
  return rds(val,3);
}
