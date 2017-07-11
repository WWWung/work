var s1 = get(e.code);
var s1arr = s1.split("-");
var s2day = s1arr[2]-3;
var s2arr = [];
if(s2day>0){
 s2arr = s1arr.slice(0,2);
 s2arr.push(s2day+"")
}else{
 var s2mon = s1arr[1]-1;
 if(s2mon>0){
 if(s2mon==1||s2mon==3||s2mon==5||s2mon==7||s2mon==8||s2mon==10||s2mon==12){
   s2arr = [s1arr[0],s2mon,s2day+31+""];
  }else if(s1arr[])
 }
}
