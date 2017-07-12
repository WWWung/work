//水泥混凝土抗弯拉强度试验计算说明
var s8 = "";

if(scarr.length==3){
  var flag1 = true;
  var yNum = 0;
  var max = getMax(...scarr);
  var avg = getAvg(...scarr);
  var min = getMin(...scarr);
  var mid = getMid(...scarr);
  for(var i=0;i<3;i++){
    if(sbarr[i]=="是"){
      flag = false;
      yNum++;
    }
  };
  if(flag){
    if(getSub(max,avg)/avg<=0.15&&getSub(avg,min)/avg<=0.15){
      s8 = avg;
    }else if(getSub(max,avg)/avg<=0.15&&getSub(avg,min)/avg>0.15){
      s8 = mid;
      index(max);
    }else if(getSub(max,avg)/avg>0.15&&getSub(avg,min)/avg>0.15){
      s8 = "";
      index(max,min);
    }
  }
  if(yNum==1){
    var p = 0;
    sbarr.forEach((item,index)=>{
      if(item=="否"){
        p+=scarr[index];
      }
    })
    s8 = p/2;
  }
  if(yNum==2){
    s8 = "";
  }
}
