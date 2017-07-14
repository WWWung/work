function  gets12(s6,s9) {
  if(s6==="表面"){
    var val = getdsv("xzb2","pjhtz",s9,"bmxz");
    if(val){
      return val;
    }else{
      var x1 = Math.floor(s9);
      var x2 = Math.ceil(s9);
      var y1 = getdsv("xzb2","pjhtz",x1,"bmxz");
      var y2 = getdsv("xzb2","pjhtz",x2,"bmxz");
      return y1+((x2-x1)/(y2-y1))*(s9-x1);
    }
  }else if(s6==="底面"){
    var val = getdsv("xzb2","pjhtz",s9,"dmxz");
    if(val){
      return val;
    }else{
      var x1 = Math.floor(s9);
      var x2 = Math.ceil(s9);
      var y1 = getdsv("xzb2","pjhtz",x1,"dmxz");
      var y2 = getdsv("xzb2","pjhtz",x2,"dmxz");
      return y1+((x2-x1)/(y2-y1))*(s9-x1);
    }
  }
}

function gets14(str,s13) {
  var s7 = get(e.p2+".l3"+str+".s7");
  var s14 = "";
  if(!s2){
    if(20<=s13&&s13<=48&&s7=="0.0"){
      s14 = val2(s13,"thsd1");
    }
    if(20<=s13&&s13<=49&&s7=="0.5"){
      s14 = val2(s13,"thsd2");
    }
    if(20.2<=s13&&s13<=50.2&&s7=="1.0"){
      s14 = val2(s13,"thsd3");
    }
    if(20.6<=s13&&s13<=51.6&&s7=="1.5"){
      s14 = val2(s13,"thsd4");
    }
    if(21<=s13&&s13<=53&&s7=="2.0"){
      s14 = val2(s13,"thsd5");
    }
    if(21.4<=s13&&s13<=54&&s7=="2.5"){
      s14 = val2(s13,"thsd6");
    }
    if(21.8<=s13&&s13<=55.2&&s7=="3.0"){
      s14 = val2(s13,"thsd7");
    }
    if(22.2<=s13&&s13<=55.8&&s7=="3.5"){
      s14 = val2(s13,"thsd8");
    }
    if(22.4<=s13&&s13<=55.6&&s7=="4.0"){
      s14 = val2(s13,"thsd9");
    }
    if(23<=s13&&s13<=58.2&&s7=="4.5"){
      s14 = val2(s13,"thsd10");
    }
    if(23.2<=s13&&s13<=59.6&&s7=="5.0"){
      s14 = val2(s13,"thsd11");
    }
    if(23.6<=s13&&s13<=60&&s7=="5.5"){
      s14 = val2(s13,"thsd12");
    }
    if(24<=s13&&s13<=60&&s7>="6.0"){
      s14 = val2(s13,"thsd13");
    }
    if(s13<20&&s7=="0.0"){
      s14 = "<10";
    }
    if(s13<20&&s7=="0.5"){
      s14 = "<10";
    }
    if(s13<20.2&&s7=="1.0"){
      s14 = "<10";
    }
    if(s13<20.6&&s7=="1.5"){
      s14 = "<10";
    }
    if(s13<21&&s7=="2.0"){
      s14 = "<10";
    }
    if(s13<21.4&&s7=="2.5"){
      s14 = "<10";
    }
    if(s13<21.8&&s7=="3.0"){
      s14 = "<10";
    }
    if(s13<22.2&&s7=="3.5"){
      s14 = "<10";
    }
    if(s13<22.4&&s7=="4.0"){
      s14 = "<10";
    }
    if(s13<23&&s7=="4.5"){
      s14 = "<10";
    }
    if(s13<23.2&&s7=="5.0"){
      s14 = "<10";
    }
    if(s13<23.6&&s7=="5.5"){
      s14 = "<10";
    }
    if(s13<24&&s7>="6.0"){
      s14 = "<10";
    }

    if(s13>48&&s7=="0.0"){
      s14 = ">60";
    }
    if(s13>49&&s7=="0.5"){
      s14 = ">60";
    }
    if(s13>50.2&&s7=="1.0"){
      s14 = ">60";
    }
    if(s13>51.6&&s7=="1.5"){
      s14 = ">60";
    }
    if(s13>53&&s7=="2.0"){
      s14 = ">60";
    }
    if(s13>54&&s7=="2.5"){
      s14 = ">60";
    }
    if(s13>55.2&&s7=="3.0"){
      s14 = ">60";
    }
    if(s13>55.8&&s7=="3.5"){
      s14 = ">60";
    }
    if(s13>56.6&&s7=="4.0"){
      s14 = ">60";
    }
    if(s13>58.2&&s7=="4.5"){
      s14 = ">60";
    }
    if(s13>59.6&&s7=="5.0"){
      s14 = ">60";
    }
    if(s13>60&&s7=="5.5"){
      s14 = ">60";
    }
    if(s13>60&&s7=="6.0"){
      s14 = ">60";
    }
  }
  if(typeof s14==="number"){s14 = rds(s14,cqqdz)}
  return s14;
}

function val2(s13,str) {
  var val = getdsv("ds.hsb1","pjhtz",s13,str);
  if(val){
    return val;
  }else{
    var x1 = getX(s13)[0];
    var x2 = getX(s13)[1];
    var y1 = getdsv("ds.hsb1","pjhtz",x1,str);
    var y2 = getdsv("ds.hsb1","pjhtz",x2,str);
    console.log(s13,x1,x2,y1,y2)
    return y1+((y2-y1)/(x2-x1))*(s13-x1);
  }
}



function getX(val) {
  let str = val+"";
  var strArr = str.split(".");
  str = strArr[1];
  let l = str.length;
  let n = "2";
  while(l>1){
    n += 0;
    l--
  }
  str = str/n;
  let arr = [];
  arr[0] = Math.floor(str);
  arr[1] = Math.ceil(str);
  arr[0] *= n;
  arr[1] *= n;
  let rsl = [strArr[0]+"."+arr[0],strArr[0]+"."+arr[1]];
  return rsl;
}






function gets15(str,s13) {
  var s7 = get(e.p2+".l3"+str+".s7");
  var s15 = "";
  if(s12){
    if(18.6<=s13&&s13<=46.8&&s7=="0.0"){
      s15 = val2(s13,"thsd1");
    }
    if(18.8<=s13&&s13<=47.4&&s7=="0.5"){
      s15 = val2(s13,"thsd2");
    }
    if(19<=s13&&s13<=47.8&&s7=="1.0"){
      s15 = val2(s13,"thsd3");
    }
    if(19.2<=s13&&s13<=48.4&&s7=="1.5"){
      s15 = val2(s13,"thsd4");
    }
    if(19.4<=s13&&s13<=48.8&&s7=="2.0"){
      s15 = val2(s13,"thsd5");
    }
    if(19.6<=s13&&s13<=49.4&&s7=="2.5"){
      s15 = val2(s13,"thsd6");
    }
    if(19.8<=s13&&s13<=49.8&&s7=="3.0"){
      s15 = val2(s13,"thsd7");
    }
    if(20<=s13&&s13<=50.4&&s7=="3.5"){
      s15 = val2(s13,"thsd8");
    }
    if(20.2<=s13&&s13<=50.8&&s7=="4.0"){
      s15 = val2(s13,"thsd9");
    }
    if(20.4<=s13&&s13<=51.4&&s7=="4.5"){
      s15 = val2(s13,"thsd10");
    }
    if(20.6<=s13&&s13<=52&&s7=="5.0"){
      s15 = val2(s13,"thsd11");
    }
    if(20.8<=s13&&s13<=52.4&&s7=="5.5"){
      s15 = val2(s13,"thsd12");
    }
    if(21<=s13&&s13<=52.8&&s7=="6.0"){
      s15 = val2(s13,"thsd13");
    }
    if(s13<18.6&&s7=="0.0"){
      s15 = "<10";
    }
    if(s13<18.8&&s7=="0.5"){
      s15 = "<10";
    }
    if(s13<19&&s7=="1.0"){
      s15 = "<10";
    }
    if(s13<19.2&&s7=="1.5"){
      s15 = "<10";
    }
    if(s13<19.4&&s7=="2.0"){
      s15 = "<10";
    }
    if(s13<19.6&&s7=="2.5"){
      s15 = "<10";
    }
    if(s13<19.8&&s7=="3.0"){
      s15 = "<10";
    }
    if(s13<20&&s7=="3.5"){
      s15 = "<10";
    }
    if(s13<20.2&&s7=="4.0"){
      s15 = "<10";
    }
    if(s13<20.4&&s7=="4.5"){
      s15 = "<10";
    }
    if(s13<20.6&&s7=="5.0"){
      s15 = "<10";
    }
    if(s13<20.8&&s7=="5.5"){
      s15 = "<10";
    }
    if(s13<21&&s7=="6.0"){
      s15 = "<10";
    }
    if(s13>46.8&&s7=="0.0"){
      s15 = ">60";
    }
    if(s13>47.4&&s7=="0.0"){
      s15 = ">60";
    }
    if(s13>47.8&&s7=="0.0"){
      s15 = ">60";
    }
    if(s13>48.4&&s7=="0.0"){
      s15 = ">60";
    }
    if(s13>48.8&&s7=="0.0"){
      s15 = ">60";
    }
    if(s13>49.4&&s7=="0.0"){
      s15 = ">60";
    }
    if(s13>49.8&&s7=="0.0"){
      s15 = ">60";
    }
    if(s13>50.4&&s7=="0.0"){
      s15 = ">60";
    }
    if(s13>50.8&&s7=="0.0"){
      s15 = ">60";
    }
    if(s13>51.4&&s7=="0.0"){
      s15 = ">60";
    }
    if(s13>52&&s7=="0.0"){
      s15 = ">60";
    }
    if(s13>52.4&&s7=="0.0"){
      s15 = ">60";
    }
    if(s13>52.8&&s7=="0.0"){
      s15 = ">60";
    }
  }
  if(typeof s15==="number"){s15 = rds(s15,cqqdz)};
  return s15;
}

function val2(s13,str) {
  var val = getdsv("ds.hsb2","pjhtz",s13,str);
  if(val){
    return val;
  }else{
    var x1 = getX(s13)[0];
    var x2 = getX(s13)[1];
    var y1 = getdsv("ds.hsb2","pjhtz",x1,str);
    var y2 = getdsv("ds.hsb2","pjhtz",x2,str);
    return y1+((y2-y1)/(x2-x1))*(s13-x1);
  }
}
