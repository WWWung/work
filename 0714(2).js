function handle(arr){
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  for(var i=0;i<arr.length;i++){
    if(arr[i]<10){
      arr1.push(arr[i]);
    }else if(arr[i]>10){
      arr2.push(arr[i]);
    }else{
      arr3.push(arr[i]);
    }
  }
}
