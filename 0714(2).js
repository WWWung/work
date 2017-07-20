function handle(arr){
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  for(var i=0;i<arr.length;i++){
    if(arr[i]<10){
      arr1.push(arr[i]);
    }else if(arr[i]>60){
      arr2.push(arr[i]);
    }else{
      arr3.push(arr[i]);
    }
  }
  if(arr1.length==arr.length){
    s16 = "";
    s17 = "";
    s18 = "<10";
    s19 = "<10";
  }
  if(arr2.length==arr.length){
    s16 = "";
    s17 = "";
    s18 = ">60";
    s19 = ">60";
  }
  if(arr3.length==arr.length){
    s16 = getAvg(...arr);
    s17 = getSta(...arr);
    s18 = "";
    s19 = getSub2(s16,1.645*s17);
  }
  if(arr3.length&&arr3.length!=arr.length){
    arr3.sort((a,b)=>{
      return a-b;
    })
    s16 = "";
    s17 = "";
    s18 = arr3[0];
    s19 = s18;
  }
}
