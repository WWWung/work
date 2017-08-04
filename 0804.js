function pcCal(num){
 var arr = loop(num);
 var res = [];
 var c = num==6?1:2;
 var avg = "";
 if(arr){
  avg = getAvg(...arr);
  arr.forEach((item,index)=>{
    var str = !index?"":"copy"+(index+1);
    var pc = getAbs(getSub(item,avg)/avg)*100;
    if(pc>10){
     res.push({index:index,pc:pc});
     vis(e.p2+".l4"+str+".cc"+c,true,"超差");
   }else{
     vis(e.p2+".l4"+str+".cc"+c,true,"");
   }
  })
  if(res.length){
    res.sort((a,b)=>{
      return b.pc-a.pc;
    })
    arr.splice(res[0].index,1);
    let n = 0;
    for(let j=0;j<arr.length;j++){
     let pc = getAbs(getSub(arr[j],avg)/avg)*100;
     if(pc>10){
       vis("d_sysj_kysj_kyjg_cc"+c,true,"超差");
       break;
     }else{
      n++;
     }
    }
    if(n===arr.length){
     vis("d_sysj_kysj_kyjg_cc"+c,true,"");
     return getAvg(...arr);
    }else{
     vis("d_sysj_kysj_kyjg_cc"+c,true,"超差");
     return "";
    }
  }else{
    vis("d_sysj_kysj_kyjg_cc"+c,true,"");
    return avg;
  }
 }else{
   vis("d_sysj_kysj_kyjg_cc"+c,true,"");
   return ""
  }
}
