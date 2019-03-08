var ljxs = getrs("r.ljxs");
var se20 = isEmpty(se18, se23, s13)?"":getPow((1800*10000*se18)/(getSub(s13,se23)*981),0.5);
se20 = rd(se20, ljxs);
set(e.p2+".l12.se20", rds(se20, ljxs));
var lj = getrs("r.lj");
var se19 = getf(e.p2+".l11.se19");
var se15 = getf(e.p2+".l6.se15");
var se17 = getf(e.p2+".l8.se17");
var se21 = isEmpty(se20, se19)?"":se20*getPow(se19/0.5, 0.5);
se21 = rds(se21, lj);
set(e.p2+".l13.se21", rds(se21, lj));
var zlbfl = getrs("r.zlbfl");
var se22 = "";
if( !isEmpty(se15, se16, s11, se17, s12, s7) ){
 if( s8 == "甲种" ){
  se22 = 100*s11*getSum(getSum(se15,se16), getSub(se17,s12))/s7;
 }else if(s8 == "乙种"){
  se22 = 0.99822*100*s11*getSum(getSum(getSub(se15,1),se16),getSub(se17,s12))/s7;
 }
}
set(e.p2+".l14.se22", rds(se22, zlbfl));
