function gets38(){
 var s38 = "";
 var s36arr = [];
 var s37arr = [];
 for(var i=0;i<2;i++){
  var str = i?"b":"a";
  var s36 = getf(e.p2+".l15.s"+str+36);
  var s37 = getf(e.p2+".l15.s"+str+37);
  if(!isDataEmpty(s36)){
   s36arr.push(s36);
  }
  if(!isDataEmpty(s37)){
   s37arr.push(s37);
  }
 }
 if(!s36arr.length&&s37arr.length===1){
   s38 = s37arr[0];
 }
 if(s36arr.length&&s36arr.length>=s37arr.length){
   s37arr.forEach((item,index)=>{
    var val = item*s36arr[index];
    if(val){s38 = s38*1+val};
   })
   s38 = s38/100;
 }
 return s38;
}


function gets34(){
 var s32arr = [];
 var s33arr = [];
 var s34 = "";
 for(var i=1;i<4;i++){
  var str = i==1?"a":i==2?"b":"c";
  var s32 = getf(e.p2+".l15.s"+str+32);
  var s33 = getf(e.p2+".l15.s"+str+33);
  if(!isDataEmpty(s32)){s32arr.push(s32);};
  if(!isDataEmpty(s33)){s33arr.push(s33);};
 }
 if(!s32arr.length&&s33arr.length===1){
   s34 = s33arr[0];
 }
 if(s33arr.length&&s33arr.length>=s32arr.length){
   s33arr.forEach((item,index)=>{
    var val = item*s32arr[index];
    if(val){s34 = s34*1+val}
  })
  s34 = s34/100;
 }
 return s34;
}
