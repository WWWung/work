if(s5==="70.7*70.7*70.7"&&max){
 if(getSub(max,mid)/mid<=0.15&&getSub(mid,min)/mid<=0.15){
   s7 = avg;
 }
 if(getSub(max,mid)/mid<=0.15&&getSub(mid,min)/mid>0.15){
   s7 = mid;
   showCc(min);
 }
 if(getSub(max,mid)/mid>0.15&&getSub(mid,min)/mid<=0.15){
   s7 = mid;
   showCc(max);
 }
 if(getSub(max,mid)/mid>0.15&&getSub(mid,min)/mid>0.15){
   s7 = "";
   showCc(max,min);
 }
}


function showCc(val1,val2) {
  s1arr.forEach((item,index)=>{
    let flag = false;
    if(val2){
      if(item===val1||item===val2){
        flag = true;
      }
    }else{
      if(item===val1){
        flag = true;
      }
    }
    if(flag){
      vis("d_sysj_l2_sjm_cc"+index,true,"超差");
    }else{
      vis("d_sysj_l2_sjm_cc"+index,false,"");
    }
  })
}
