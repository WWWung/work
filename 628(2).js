var way = get("d_page_page5_l1_s3");
var values = [];
for(var i=1;i<6;i++){
	var str = i==1?"":"copy"+i;
  var obj = {
    s31 : [],
    s32 : [],
    s33 : [],
    s34 : [],
    s35 : [],
    s36 : [],
    s37 : [],
    s38 : [],
    s39 : [],
    s40 : [],
    s41 : [],
  };
	for(var n = 1; n <= 6; n++) {
		var n2 = n == 1 ? "" : "copy" + n;
    var ysb = getf("d_page_page5_page4_sjcc_l11"+str+"_l2" + n2 + "_s28");
		s28_2 = getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s28");
		s29_2 = getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s29");
		s30_2 = getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s30");
		sa6 = getf('d_page_page5_l9_sa6');
    var s31_2 = "";
		if(way == "蜡封法"){
			if(s28_2 != null && s30_2 != null && s29_2 != null && sa6 != null) {
		 		s31_2 = s28_2/(getSub2(getSub2(s29_2,s30_2),(getSub2(s29_2,s28_2))/sa6));
			}
		}
    if(way == "表干法"){
    	if(isNumber(s30_2) && isNumber(s28_2) && isNumber(s29_2)){
            s31_2 = s28_2/(getSub(s30_2,s29_2));
    	}
    }
    if(way == "水中重法"){
    	if(isNumber(s28_2) && isNumber(s29_2)){
            s31_2 = s28_2/(getSub(s28_2,s29_2));
    	}
    }

		set("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s31", rds(s31_2, 3));
    var s32_2 = null;
		if(s4 == '非改性沥青') {
			dis("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s32", false);
		} else {
      var s11 = getf('d_page_page5_l2_s11');
      var s12 = getf('d_page_page5_l2_s12');
      if( isNumber(s11) && isNumber(s12) && isNumber(s27)){
        s32_2 = rds((getSum(100,ysb))/(getSum(100/s27,ysb/s10,s11/s12)),3);
      }else if((!isNumber(s11) || !isNumber(s12)) && isNumber(s27)){
        s32_2 = rds((getSum(100,ysb))/(getSum(100/s27,ysb/s10)),3);
      }
			dis("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s32", true, s32_2);
		}
		s10 = getf("d_page_page5_l2_s10");
		s14 = getf("d_page_page5_l2_s14");
		s24 = getf("d_page_page5_l7_s24");
		s27 = getf("d_page_page5_l7_s27");
		s31_2 = getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s31");
		var p1 = (getSub2(s27, s24)) / (s27 * s24) * s10 * 100;
		var p2 = getSub2(s14, p1 * (getSub2(100, s14)) / 100);
		if(s24 != null && s27 != null && s10 != null && s14 != null && s31_2 != null) {
			s33_2 = s31_2 * p2 / s10;
			set("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s33", rds(s33_2, getrs("r_lqtjbfl")));
		} else {
			set("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s33", "");
		}
		s31_2 = getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s31");
		s32_2 = getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s32");
		if(s31_2 != null && getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s32") != null) {
			s34_2 = (getSub2(1, s31_2 / s32_2)) * 100;
			set("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s34", rds(s34_2, getrs("r_sjkxl")));
		} else {
			set("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s34", "");
		}
		s14 = getf("d_page_page5_l2_s14");
		s24 = getf("d_page_page5_l7_s24");
		s31_2 = getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s31");
		if(s31_2 != null && s14 != null && s24 != null) {
			s35_2 = (getSub2(1, s31_2 * (getSub2(100, s14)) / (s24 * 100))) * 100;
			set("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s35", rds(s35_2, getrs("r_kljxl")));
		} else {
			set("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s35", "");
		}
		s35_2 = getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s35");
		s34_2 = getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s34");
		if(s35_2 != null && s34_2 != null) {
			s36_2 = (getSub2(s35_2, s34_2)) / s35_2 * 100;
			set("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s36", rds(s36_2, getrs("r_lqbhd")));
		} else {
			set("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s36", "");
		}
		s37_2 = getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s37");
		s38_2 = getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s38");
		if(s38_2 != null && s37_2 != null) {
			s39_2 = s38_2 / s37_2 * 100;
			set("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s39", rds(s39_2, getrs("r_clwdd")));
		} else {
			set("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s39", "");
		}
		s37_2 = getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s37");
		s40_2 = getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s40");
		if(s37_2 != null && s40_2 != null) {
			s41_2 = s37_2 / s40_2;
			set("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s41", rds(s41_2, getrs("r_mxems")));
		} else {
			set("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s41", "");
		}
    for(var k=31;k<42;k++){
      var val = getf("d_page_page5_page4_sysj_l12"+str+"_l2" + n2 + "_s"+k);
      if(isNumber(val)){
        obj['s'+k].push(val);
      }
    }
	}
  values.push(obj);
}
