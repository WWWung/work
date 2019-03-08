var testTestingMode = false;//测试模式
var createDataInfoHtmlCacheMode = false;//是否仅用于生成界面缓存
var onlyForShowCachedChart = false;//是否只显示缓存图表
var mustRefreshDataDiv = false;//是否强制刷新数据区域（主要用于项目定义时的预览，由testTypeDefine.js中直接赋值）

var mode = 1;//模式 1试验  2试验报告  3样品报告
var testRecordId;//试验记录id，项目定义时传过来的实际是试验类型id
var testSimpleTypeId;//样品类型id
var testTypeId;//试验类型id
var testTypeDefine;//试验定义数据
var testDiv;//显示试验界面的div
var testCanEdit = false;//试验数据是否可以编辑
var testRecord;//从服务器获取的试验记录
var testData = {};//试验数据，键值对，key:全路径   value:值
var testChartData = {};//图表原始数据(出图数据和出图代码，用于快速加载之前的图片、报表html图片生成)
var testChartImage = {};//图表图片数据(注意，此数据不会从服务端获取，只有在修改后有值，在保存时传到服务器，主要用于打印时的图片显示)
var roundInfoData = null;//修约设置数据
var dataSourceData = null;//数据源数据
var jszbData = null;//技术指标数据
var copyCounts = {};//临时记录已复制的数量，相对于testData中保存的fullCode_CopyCount，fullCode_CopyCount是永久保存用于恢复，copyCounts是临时保存用于标记界面生成状态

//临时缓存
var itemCacheFullCode = new Array();//通过fullCode记录item，便于查找  (数据用inputId标识而不用id标识，因为复制时id会变掉)
var comboboxInited = {};//用于记录下拉框是否已经加载过了下拉内容
var existsCcumulationItems = {};//用于记录累加列表的下拉内容的原始数据（多个下拉控件可能共用一个数据）
var existsServiceListItems = {};//用于记录服务列表的下拉内容的原始数据（多个下拉控件可能共用一个数据）

//初始化  m:mode
var initTeste1;
var initTeste2;
function initTest(rid, stid, tid, define, div, canEdit, m) {
    console.info("exc initTest");
    initTeste1 = new Date();

    testRecordId = rid;
    testSimpleTypeId = stid;
    testTypeId = tid;
    if (define) {
        testTypeDefine = JSON.parse(JSON.stringify(define));
    }
    testDiv = div;
    testCanEdit = canEdit;
    mode = m;

    roundInfoData = null;
    dataSourceData = null;
    jszbData = null;

    itemCacheFullCode = new Array();
    comboboxInited = {};
    existsCcumulationItems = {};
    existsServiceListItems = {};

    //获取试验数据
    layer.load(1, { shade: [0.2, '#000000'] });
    jssGetTestRecore2(testRecordId, testSimpleTypeId, testTypeId, testTestingMode, getTestRecordSuccess);
}

//从服务器获取试验数据后的回调
function getTestRecordSuccess(result) {
    if (result.state == 0) {
        testRecord = result.data;
        //解析试验数据
        parseTestData(result);

        //解析修约数据
        parseRoundInfoData(result);

        //解析数据源
        parseDataSoruceData(result);

        //解析技术指标
        parseJszbData(result);

        //试验数据界面缓存
        //console.info(result.data.dataInfoCache);

        if (testTypeDefine) {
            reloadTestDefine();
            reloadTestData();
            reloadCachedChart();
            layer.closeAll('loading');

            initTeste2 = new Date();
            console.log("initTest 花费：" + parseInt(initTeste2 - initTeste1) + "ms");
        }
        else {
            //alert(testTypeId);
            jssGetLastVersionTestTypeDefine(testTypeId, getTestTypeDefineSuccess);
        }
    } else {
        alert2(result.message);
        layer.closeAll('loading');
    }
}

//解析试验数据
function parseTestData(result) {
    if (result.data && result.data.dataJson) {
        try {
            //var dataJson = pako.inflate(result.data.dataJson, { to: 'string' });//解压  保存时没有压缩，因为在js中压缩后报表服务器（c#）无法解析
            testData = JSON.parse(result.data.dataJson);
        }
        catch (e) {
            testData = {};
            console.info(e);
        }
    } else {
        testData = {};
    }

    if (result.data && result.data.chartDataJson) {
        try {
            testChartData = JSON.parse(result.data.chartDataJson);
        }
        catch (e) {
            testChartData = {};
            console.info(e);
        }
    } else {
        testChartData = {};
    }
    //console.info(testChartData);
}

//解析修约数据
function parseRoundInfoData(result) {
    if (result.data && result.data.roundSetDataJson) {
        try {
            roundInfoData = JSON.parse(result.data.roundSetDataJson);
        }
        catch (e) {
            roundInfoData = {};
            console.info(e);
        }
    } else {
        roundInfoData = {};
    }

    //alert(JSON.stringify(roundInfoData));
}

//解析数据源
function parseDataSoruceData(result) {
    if (result.data && result.data.dataSourceSetDataJson) {
        try {
            dataSourceData = JSON.parse(result.data.dataSourceSetDataJson);
        }
        catch (e) {
            dataSourceData = {};
            console.info(e);
        }
    } else {
        dataSourceData = {};
    }
}

//解析技术指标
function parseJszbData(result) {
    if (result.data && result.data.jszbSetDataJson) {
        try {
            jszbData = JSON.parse(result.data.jszbSetDataJson);
        }
        catch (e) {
            jszbData = {};
            console.info(e);
        }
    } else {
        jszbData = {};
    }
}

//试验类型数据获取后的回调
function getTestTypeDefineSuccess(result) {
    //alert(JSON.stringify(result));
    if (result.state == 0) {
        if (result.data && result.data.defineJson) {
            try {
                testTypeDefine = JSON.parse(result.data.defineJson);
            }
            catch (e) {
                testTypeDefine = createEmptyDefine();
                console.info(e);
            }
        } else {
            testTypeDefine = createEmptyDefine();
        }
        //console.info(testTypeDefine);

        reloadTestDefine();
        reloadTestData();
        reloadCachedChart();
        layer.closeAll('loading');

        initTeste2 = new Date();
        console.log("initTest 花费：" + parseInt(initTeste2 - initTeste1) + "ms");
    } else {
        alert2(result.message);
        layer.closeAll('loading');
    }
}

//根据缓存的图片数据，重新出图
function reloadCachedChart() {
    console.info("exc reloadCachedChart");
    var e1 = new Date();

    if (onlyForShowCachedChart && testChartData) {
        for (var key in testChartData) {
            showCachedChart(key);
        }
    }

    var e2 = new Date();
    console.log("reloadCachedChart 花费：" + parseInt(e2 - e1) + "ms");
}

//加载试验数据
function reloadTestData() {
    console.info("exc reloadTestData");
    var e1 = new Date();
    if (onlyForShowCachedChart) {
        return;
    }

    for (code in testData) {
        var value = testData[code];
        //console.info("code:" + code + "   value:" + value);
        set(code, value);
    }

    excuteFormulaIniteds("数据加载后");

    var e2 = new Date();
    console.log("reloadTestData 花费：" + parseInt(e2 - e1) + "ms");
}

//加载试验定义，生成界面
function reloadTestDefine() {
    console.info("exc reloadTestDefine");
    var e1 = new Date();
    if (onlyForShowCachedChart) {
        return;
    }

    if ($("#baseInfos").length == 0) {//没有生成过界面
        var saveButtonDisplayStr = testCanEdit ? "" : "display:none;";
        var html = '<div class="easyui-layout" data-options="fit:true" style="width:100%;height:100%;">'
                      + '    <div id="baseInfos" title="基本信息" data-options="region:\'west\'" class="baseInfos" split="true" >dd</div>'
                      + '    <div id="dataInfos" title="' + (mode == 1 ? '试验' : '报告') + '数据"  data-options="region:\'center\'" class="dataInfos" style="overflow:auto;"></div>'
                      + '    <div id="testCommandItems" title=""  data-options="region:\'north\'" class="testCommandInfos">'
                      + '        <div class="testCommandItem" id="saveDataInfoHtmlCacheButton" onclick="saveDataInfoHtmlCache();" style="float:left;display:none;width:130px;"><img src="../images/save32.png" style="float:left;" /><div style="float:left;">&nbsp;&nbsp;保存缓存</div><div style="clear:both;"></div></div>'
                      + '        <div class="testCommandItem" id="saveButton" onclick="saveTestData();" style="float:left;' + saveButtonDisplayStr + '"><img src="../images/save32.png" style="float:left;" /><div style="float:left;">&nbsp;&nbsp;保存</div><div style="clear:both;"></div></div>'
                      + '        <div class="testCommandItem" id="setRoundInfoButton" onclick="setRoundInfo();" style="float:left;"><img src="../images/setround32.png" style="float:left;" /><div style="float:left;">&nbsp;&nbsp;修约</div><div style="clear:both;"></div></div>'
                      + '        <div class="testCommandItem" id="setDataSourceInfoButton" onclick="setDataSourceInfo();" style="float:left;"><img src="../images/setround32.png" style="float:left;" /><div style="float:left;">&nbsp;&nbsp;设置</div><div style="clear:both;"></div></div>'
                      + '        <div class="testCommandItem" id="setJszbInfoButton" onclick="setJszbInfo();" style="float:left;width:110px;display:none;"><img src="../images/setround32.png" style="float:left;" /><div style="float:left;">&nbsp;&nbsp;技术指标</div><div style="clear:both;"></div></div>'
                      //+ (!testTestingMode ? '' : '        <div class="testCommandItem" onclick="openTestRecordChartPage();" style="float:left;"><img src="../images/setround32.png" style="float:left;" /><div style="float:left;">&nbsp;&nbsp;出图</div><div style="clear:both;"></div></div>')
                      + '        <div class="testCommandItem" id="showRecordReportButton1copy11" onclick="showRecordReport(false);" style="float:left;width:130px;"><img src="../images/rule32.png" style="float:left;" /><div style="float:left;">&nbsp;&nbsp;' + (mode == 1 ? '记录表' : '报告') + '预览</div><div style="clear:both;"></div></div>'
                      + '        <div class="testCommandItem" id="showRecordReportButton2" onclick="showRecordReport(true);" style="float:left;width:130px;"><img src="../images/print32.png" style="float:left;" /><div style="float:left;">&nbsp;&nbsp;' + (mode == 1 ? '记录表' : '报告') + '打印</div><div style="clear:both;"></div></div>'
                      + '        <div style="clear:both;"></div>'
                      + '    </div>'
                      + '</div>';
        testDiv.html(html);
        $.parser.parse(testDiv);
    }

    reloadBaseInfoDefine();
    if (mustRefreshDataDiv) {
        $("#dataInfos").empty();
    }
    copyCounts = {};
    reloadDataInfoDefine();
    $.parser.parse(testDiv);  //todo....................

    excuteFormulaIniteds("界面加载后");


    //如果是生成界面缓存模式，隐藏按钮
    if (createDataInfoHtmlCacheMode) {
        $("#saveButton").hide();
        $("#setRoundInfoButton").hide();
        $("#setDataSourceInfoButton").hide();
        $("#showRecordReportButton1copy11").hide();
        $("#showRecordReportButton2").hide();
        $("#saveDataInfoHtmlCacheButton").show();
    }

    //试验报告模式
    if (mode == 2 || mode == 3) {
        //$("#baseInfos").parent(".panel-west").hide();  //不起作用
        if (testTestingMode) {
            $("#setDataSourceInfoButton").hide();
            $("#setJszbInfoButton").show();
        } else {
            $("#saveButton").hide();
            $("#setDataSourceInfoButton").hide();
            $("#setJszbInfoButton").show();
        }
    }

    var e2 = new Date();
    console.log("reloadTestDefine 花费：" + parseInt(e2 - e1) + "ms");
}


//========================累加列表==============================
function isValueExistsInCcumulationItem(flag, value) {
    if (!existsCcumulationItems[flag]) {
        return false;
    }

    var ccumulationItem = existsCcumulationItems[flag];
    for (var j = 0; j < ccumulationItem.values.length; j++) {
        var ev = ccumulationItem.values[j];
        if (ev == value) {
            return true;
        }
    }

    return false;
}

//========================保存数据==============================
function saveTestData() {
    layer.load(1, { shade: [0.2, '#000000'] });
    var newCcumulationItemArr = getNewCcumulationDatas();
    var newCcumulationItemArrJson = JSON.stringify(newCcumulationItemArr);
    testData["GlobalValues_AllInputIds"] = getAllInputIds();//记录所有控件的id(用于出报表时生成空字段，否则ebiao取不到值显示了字段名)
    var testDataJson = JSON.stringify(testData);
    var testChartDataJson = JSON.stringify(testChartData);

    //图片数据修改为数组
    if (!testChartImage) {
        testChartImage = {};
    }
    var testChartImageArr = [];
    for (var i in testChartImage) {
        var v = testChartImage[i];
        testChartImageArr.push(v);
    }
    var testChartImageArrJson = JSON.stringify(testChartImageArr);

    //console.info(testData);
    //console.info(testDataJson);
    //var pakoJson = pako.deflate(testDataJson, { to: 'string' });//压缩 --不能压缩，压缩后非js写的代码端无法解析数据
    jssUpdateTestRecore2(testRecordId, testSimpleTypeId, testTypeId, testDataJson, testChartDataJson, testChartImageArrJson, newCcumulationItemArrJson, testTestingMode, mode, testDataSaveSuccess);
}

//获取数据，用于保存。（所有参数同saveTestData()方法中调用的jssUpdateTestRecore2接口，但不实际调用接口。主要用于试验报告中。）
function getTestDataForSave() {
    var newCcumulationItemArr = getNewCcumulationDatas();
    var newCcumulationItemArrJson = JSON.stringify(newCcumulationItemArr);
    testData["GlobalValues_AllInputIds"] = getAllInputIds();//记录所有控件的id(用于出报表时生成空字段，否则ebiao取不到值显示了字段名)
    var testDataJson = JSON.stringify(testData);
    var testChartDataJson = JSON.stringify(testChartData);

    //图片数据修改为数组
    if (!testChartImage) {
        testChartImage = {};
    }
    var testChartImageArr = [];
    for (var i in testChartImage) {
        var v = testChartImage[i];
        testChartImageArr.push(v);
    }
    var testChartImageArrJson = JSON.stringify(testChartImageArr);

    var r = {};
    r.testRecordId = testRecordId;
    r.testSimpleTypeId = testSimpleTypeId;
    r.testTypeId = testTypeId;
    r.testDataJson = testDataJson;
    r.testChartDataJson = testChartDataJson;
    r.testChartImageArrJson = testChartImageArrJson;
    r.newCcumulationItemArrJson = newCcumulationItemArrJson;
    r.testTestingMode = testTestingMode;
    r.mode = mode;
    return r;
}

//获取所有控件的id
function getAllInputIds() {
    var arr = [];
    for (var code in itemCacheFullCode) {
        arr.push(code);
    }
    return JSON.stringify(arr);
}

//获取累积列表
function getNewCcumulationDatas() {
    //CcumulationItem:level flag values[]
    var ccumulationItems = {};
    getCcumulationDatasByItemArr(testTypeDefine.baseInfo, ccumulationItems);
    getCcumulationDatasByItemArr(testTypeDefine.dataInfo, ccumulationItems);

    //转换成数组
    var ccumulationItemArr = [];
    for (flag in ccumulationItems) {
        ccumulationItemArr.push(ccumulationItems[flag]);
    }
    //alert2(JSON.stringify(ccumulationItemArr));
    return ccumulationItemArr;
}

function getCcumulationDatasByItemArr(arr, ccumulationItems) {
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (item.editorType == "累加列表") {
            //检查定义
            var strs = item.editorExtandData.split(";");
            if (strs.length < 2) {
                continue;
            }
            var level = strs[0];
            var flag = strs[1];
            //检查值
            var value = getValue(item.inputId);
            value = value ? value.replace(/(^\s*)|(\s*$)/g, "") : value;//去除首尾的空白
            if (isDataEmpty(value)) {
                continue;
            }
            //在已有的值中检查是否存在
            if (isValueExistsInCcumulationItem(flag, value)) {
                continue;
            }
            //获取ccumulationItem
            var ccumulationItem;
            if (ccumulationItems[flag]) {
                ccumulationItem = ccumulationItems[flag];
            } else {
                ccumulationItem = {};
                ccumulationItem.level = level;
                ccumulationItem.flag = flag;
                ccumulationItem.values = [];
                ccumulationItems[flag] = ccumulationItem;
            }
            //检查是否已经添加
            var added = false;
            for (var j = 0; j < ccumulationItem.values.length; j++) {
                var nv = ccumulationItem.values[j];
                if (nv == value) {
                    added = true;
                    break;
                }
            }
            //添加
            if (!added) {
                ccumulationItem.values.push(value);
            }
        }

        //处理子项目
        getCcumulationDatasByItemArr(item.subItems, ccumulationItems);
    }
}

function testDataSaveSuccess(result) {
    if (result.state == 0) {
        alert2("保存成功");
        testRecord.updateTime = new Date().format("yyyy-MM-dd HH:mm");//更新一下时间，这样打印时才会刷新缓存
        layer.closeAll('loading');
    } else {
        alert2(result.message);
        layer.closeAll('loading');
    }
}

//========================生成基本信息的界面========================
function reloadBaseInfoDefine() {
    $("#baseInfos").empty();

    var comboboxIniters = {};//静态列表的选项初始化，直接由回调来实现，（因为其项目固定，不需要从服务器获取）
    for (var i = 0; i < testTypeDefine.baseInfo.length; i++) {
        var item = testTypeDefine.baseInfo[i];
        var inputId = "b_" + item.code;
        item.inputId = inputId;
        itemCacheFullCode[inputId] = item;
        var titleHtml = "<div class='baseItemTitleDiv' id='baseItemTitleDiv_" + item.inputId + "' >" + item.name + "：</div>";
        var tooltip = "";//testTestingMode ? item.inputId + "   " + item.name : "";
        var inputHtml = "<div  onclick='onInputDivClick($(this));' iteminputid='" + item.inputId + "'  title='" + tooltip + "' class='baseItemInputDiv' id='baseItemInputDiv_" + item.inputId + "' >" + createInput(item, "baseItemInput", "b", comboboxIniters, "100%") + "</div>";
        $("#baseInfos").append(titleHtml);
        $("#baseInfos").append(inputHtml);
    }

    $.parser.parse($("#baseInfos"));
    for (i in comboboxIniters) {
        var initer = comboboxIniters[i];
        initer.initCallback();
    }
}

//========================自复制================================

//获取自复制对象的原始编码（去除可能有的copy部分）
function getCopyOriginalCode(fullCode) {
    //替换.为_
    var code = fullCode.replace(new RegExp("[\.]", "g"), "_");

    //去除copy部分
    var lastCopyIndex = code.lastIndexOf("copy");
    var lastLineIndex = code.lastIndexOf("_");
    if (lastCopyIndex > 0) {//有copy部分
        if (lastLineIndex < lastCopyIndex) {//copy后面没有_
            code = code.substring(0, lastCopyIndex);
        }
    }

    return code;
}

//获取自复制对象的序号
function getCopyIndex(shortCode) {
    //去除copy部分
    var index = shortCode.lastIndexOf("copy");
    if (index < 0) {
        return 1;
    }

    shortCode = shortCode.substring(index).substring(4);
    return parseInt(shortCode);
}

//获取自复制对象的数量
function getCopyCount(fullCode) {
    var code = fullCode + "_CopyCount";

    //获取
    if (testData[code]) {
        var value = testData[code];
        return parseInt(value);
    } else {
        var value = 1;
        testData[code] = value;
        return value;
    }
}

//获取界面上已生成的自复制对象的数量
function getCreatedCopyCount(fullCode) {
    var code = fullCode + "_CopyCount";

    //获取
    if (copyCounts[code]) {
        var value = copyCounts[code];
        return parseInt(value);
    } else {
        var value = 1;
        copyCounts[code] = value;
        return value;
    }
}

//设置自复制对象的数量
function setCopyCount(fullCode, count) {
    var code = fullCode + "_CopyCount";
    testData[code] = count;
    copyCounts[code] = count;
}

//显示右键菜单
function showDivContextMenu($this) {
    var contextmenuid = $this.attr("contextmenuid");
    if (!contextmenuid) {
        return;
    }

    event.stopPropagation();
    event.preventDefault();
    $('#' + contextmenuid).menu('show', {
        left: event.x - 6,
        top: event.y - 6,
    });
}

//新增
function addSelf($this, itemInputId) {
    var item = itemCacheFullCode[itemInputId];
    //console.info(item);
    if (!item) {
        return;
    }

    var fullCode = item.inputId;
    var originalCode = getCopyOriginalCode(fullCode);
    var count = getCreatedCopyCount(originalCode);
    //console.info(fullCode + "       " + originalCode + "     " + count);

    copy(originalCode, count + 1);
}

//删除
function delSelf($this, itemInputId) {
    var item = itemCacheFullCode[itemInputId];
    //console.info(item);
    if (!item) {
        return;
    }

    var fullCode = item.inputId;
    var originalCode = getCopyOriginalCode(fullCode);
    var count = getCreatedCopyCount(originalCode);
    //console.info(fullCode + "       " + originalCode + "     " + count);
    if (count == 1) {
        alert2("必须保留最少一行");
        return;
    }

    //删除元素
    var div = $("#div_" + item.inputId);
    if (div.length > 0) {
        div.remove();
    }

    //缓存中删除
    delete itemCacheFullCode[fullCode];
    delete testData[fullCode];

    //定义中删除
    var parent = findParentItem(fullCode);
    if (parent != null) { //插入
        var arrPropertyName = parent.subItems ? "subItems" : "dataInfo";
        var newArr = [];
        for (var i = 0; i < parent[arrPropertyName].length; i++) {
            var subItem = parent[arrPropertyName][i];
            if (subItem.inputId == item.inputId) {//此item不要了
                //
            }
            else {
                newArr.push(subItem);
            }
        }
    }
    parent[arrPropertyName] = newArr;


    //移动
    var thisIndex = getCopyIndex(item.code);
    for (var i = thisIndex + 1; i <= count; i++) {
        var command = {};
        var oldCode = originalCode + "copy" + (i);
        var newCode = (i - 1) == 1 ? originalCode : originalCode + "copy" + (i - 1);
        change(oldCode, newCode);
    }

    //重置个数
    setCopyCount(originalCode, count - 1);
}


//========================生成数据信息的界面========================
//var dataInfoCacheAppended = false;
function reloadDataInfoDefine() {
    //$("#dataInfos").empty();
    var e1 = new Date();

    //不是定义模式、不是保存缓存模式、不是显示图片模式、有界面缓存时，先设置之
    //if (!testTestingMode && !createDataInfoHtmlCacheMode && !onlyForShowCachedChart /*&& !dataInfoCacheAppended*/ && testRecord.dataInfoCache) {
    //    $("#dataInfos").html(testRecord.dataInfoCache);
    //    //var arrs = $(".easyui-numberbox");
    //    //if (arrs.length > 0) { arrs.numberbox(); }
    //    //arrs = $(".easyui-textbox");
    //    //if (arrs.length > 0) { arrs.textbox(); }
    //    //arrs = $(".easyui-datebox");
    //    //if (arrs.length > 0) { arrs.datebox(); }
    //    //arrs = $(".easyui-timespinner");
    //    //if (arrs.length > 0) { arrs.timespinner(); }
    //    //arrs = $(".easyui-datetimebox");
    //    //if (arrs.length > 0) { arrs.datetimebox(); }
    //    //arrs = $(".easyui-combobox");
    //    //if (arrs.length > 0) { arrs.combobox(); }
    //    //dataInfoCacheAppended = true;
    //    //$.parser.parse("#dataInfos");   //保存的缓存还是要解析？因为combobox等没有初始化
    //}

    var comboboxIniters = {};
    reloadDataInfoArr(testTypeDefine.dataInfo, "dataInfos", "d", comboboxIniters);

    var d3 = new Date();//todo......................
    $.parser.parse($("#dataInfos"));
    var d4 = new Date();
    console.log("$.parser.parse($(\"#dataInfos\")) 花费：" + parseInt(d4 - d3) + "ms");

    for (i in comboboxIniters) {
        var initer = comboboxIniters[i];
        initer.initCallback();
    }

    //清除被删除项目
    var dataItemRootDivs = $(".dataItemRootDiv");
    for (var i = 0; i < dataItemRootDivs.length; i++) {
        var dataItemRootDiv = $(dataItemRootDivs[i]);
        var itemInputId = dataItemRootDiv.attr("iteminputid");
        if (!itemCacheFullCode[itemInputId]) {
            dataItemRootDiv.remove();
        }
    }

    var e2 = new Date();
    console.log("reloadDataInfoDefine 花费：" + parseInt(e2 - e1) + "ms");
}

function reloadDataInfoArr(arr, parentDivId, parentItemCode, comboboxIniters) {
    var preDivId = null;//前面一个div的id
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var inputId = parentItemCode ? parentItemCode + "_" + item.code : item.code;//id中不能用.，使用_分隔
        item.inputId = inputId;//记录一下
        var divId = "div_" + item.inputId;
        var html = createDataItem(item, parentItemCode, comboboxIniters);
        if (html) {
            if (preDivId) {//有前一个，添加到它后面
                $("#" + preDivId).after(html);
            } else {//没有前一个div，添加到上一级
                $("#" + parentDivId).append(html);
            }
            //$.parser.parse($("#" + divId));//todo.................页组没办法处理
        }

        preDivId = divId;

        itemCacheFullCode[inputId] = item;
        reloadDataInfoArr(item.subItems, divId, inputId, comboboxIniters);
    }
}

function createDataItem(item, parentItemCode, comboboxIniters) {
    var inputId = item.inputId;

    //上层div的id，使用div_item.inputId的规则，如果有input，则input的id是code_级联
    var divId = "div_" + item.inputId;//这里注意div_前缀要与testTypeDefine.html中的区别开来，不然在预览界面中id会重复
    if ($("#" + divId).length > 0) {//已经创建了
        return null;
    }

    var bd_size_style = 'border:' + (item.border == "有" ? "1px solid #2193ba" : "none") + ';width:' + item.width + ';height:' + item.height + ';';
    var marginStyle = 'margin-left:' + item.offsetX + 'px;margin-top:' + item.offsetY + 'px;';
    var displayStyle = item.hide == "是" ? "display:none;" : "";
    var tooltip = "";//testTestingMode ? item.inputId + "   " + item.name : "";
    if (item.itemType == "页组") {
        var html = '<div id="' + divId + '" iteminputid="' + item.inputId + '" class="dataItemRootDiv dataItemPageGroupDiv easyui-tabs" style="overflow:auto;' + bd_size_style + marginStyle + displayStyle + item.customStyle + '" >'
                      + '</div>';
        return html;
    } else if (item.itemType == "页") {
        var html = '<div id="' + divId + '" iteminputid="' + item.inputId + '" title="' + item.name + '" class="dataItemRootDiv dataItemPageDiv" style="overflow:auto;' + bd_size_style + marginStyle + displayStyle + item.customStyle + '" >'
                      + '</div>';
        return html;
    } else if (item.itemType == "组") {
        var menuHtml = "";
        var contextmenuHtml = "";
        if (item.copySelf == "是") {
            menuHtml = '<div id="menu_' + item.inputId + '" class="easyui-menu" style="width:80px;dispaly:none;" data-options="hideOnUnhover:false,">'
                                   + '<div id="addSelf_' + item.inputId + '">新增</div>'
                                   + '<div id="delSelf_' + item.inputId + '">删除</div>'
                                   + '</div>';
            contextmenuHtml = 'contextmenuid="menu_' + item.inputId + '"';
        }
        var html = '<div ' + contextmenuHtml + ' id="' + divId + '" iteminputid="' + item.inputId + '" class="dataItemRootDiv dataItemGroupDiv" style="overflow:auto;float:left;' + bd_size_style + marginStyle + displayStyle + item.customStyle + '" >'
                      + menuHtml
                      + '</div>';
        return html;
    } else if (item.itemType == "行") {
        var menuHtml = "";
        var contextmenuHtml = "";
        if (item.copySelf == "是") {
            menuHtml = '<div id="menu_' + item.inputId + '" class="easyui-menu" style="width:80px;dispaly:none;" data-options="hideOnUnhover:false,">'
                                   + '<div id="addSelf_' + item.inputId + '" onclick="addSelf($(this), \'' + item.inputId + '\');">新增</div>'
                                   + '<div id="delSelf_' + item.inputId + '" onclick="delSelf($(this), \'' + item.inputId + '\');">删除</div>'
                                   + '</div>';
            contextmenuHtml = 'contextmenuid="menu_' + item.inputId + '" oncontextmenu="showDivContextMenu($(this));"';
        }
        var html = '<div ' + contextmenuHtml + ' id="' + divId + '" iteminputid="' + item.inputId + '" class="dataItemRootDiv dataItemRowDiv" style="overflow:auto;' + bd_size_style + marginStyle + displayStyle + item.customStyle + '" >'
                      + menuHtml
                      + '</div>';
        //alert2(html);
        return html;
    } else if (item.itemType == "项目结束") {//todo.........自动添加这个项目
        var html = '<div id="' + divId + '" iteminputid="' + item.inputId + '" class="dataItemRootDiv dataItemEndDiv" style="clear:both;display:none;" >'
                      + '</div>';
        return html;
    } else if (item.itemType == "换行") {
        var html = '<br id="' + divId + '" iteminputid="' + item.inputId + '" class="dataItemRootDiv dataItemReturnFlag" />';//必须要加id，不然通过after(html)插入后面的元素时会失败
        return html;
    } else {
        var html = '<div  onclick="onInputDivClick($(this));"  id="' + divId + '" iteminputid="' + item.inputId + '" class="dataItemRootDiv dataItemDiv" style="overflow:hidden;width:auto;height:auto;float:left;padding-bottom:2px;' + marginStyle + displayStyle + '" >'
        if (item.showTitle == "是" && item.editorType != "标签" && item.editorType != "按钮" && item.editorType != "复选" && item.editorType != "单选") {
            var title = item.name ? item.name.replace(new RegExp("{n}", "g"), "<br/>") : "";
            html = html + "<div title='" + tooltip + "'  class='dataItemTitleDiv' id='dataItemTitleDiv_" + item.inputId + "' style='float:left;margin-top:2px;' >" + title + "</div>";
        }
        if (item.editorType == "标签") {
            html = html + "<div title='" + tooltip + "'  class='dataItemInputDiv' id='dataItemInputDiv_" + item.inputId + "' style='float:left;" + bd_size_style + 'text-align:center;' + item.customStyle + "' >" + createInput(item, "dataItemInput", parentItemCode, comboboxIniters, "100%") + "</div>";
        }
        else if (item.editorType == "按钮") {
            html = html + "<div title='" + tooltip + "'  class='dataItemInputDiv' id='dataItemInputDiv_" + item.inputId + "' style='float:left;" + bd_size_style + 'text-align:center;border:solid 1px;border-color:lightgray;border-radius:5px;background-color:lightgray;cursor:pointer;' + item.customStyle + "' >" + createInput(item, "dataItemInput", parentItemCode, comboboxIniters, "100%") + "</div>";
        } else {
            html = html + "<div title='" + tooltip + "'  class='dataItemInputDiv' id='dataItemInputDiv_" + item.inputId + "' style='float:left;" + bd_size_style + item.customStyle + "' >" + createInput(item, "dataItemInput", parentItemCode, comboboxIniters, "100%") + "</div>";
        }
        html = html + "<div style='clear:both;display:none;'></div>";
        html = html + '</div>';
        return html;
    }
}

function onInputDivClick($this) {
    if (testTestingMode) {
        var itemInputId = $this.attr("iteminputid");
        var item = itemCacheFullCode[itemInputId];
        var selectedItemCode = "<span>编码：</span><input style='width:250px;'  spellcheck='false' value='" + item.inputId + "' /><span id='zclip_copyItemCode' style='margin-left:10px;color:blue;cursor:pointer;' onclick='copyStringToClipboard($(this));'>复制</span>";
        $("#selectedItemCode").html(selectedItemCode);
        var selectedItemName = "<span>名称：</span><input style='width:250px;'   spellcheck='false' value='" + item.name + "' /><span id='zclip_copyItemName' style='margin-left:10px;color:blue;cursor:pointer;' onclick='copyStringToClipboard($(this));'>复制</span>";
        $("#selectedItemName").html(selectedItemName);
        var selectedItemReportSet = "<span>报表：</span><input style='width:250px;' spellcheck='false' value='=tr." + item.inputId + "' /><span id='zclip_copyItemReportSet' style='margin-left:10px;color:blue;cursor:pointer;' onclick='copyStringToClipboard($(this));'>复制</span>";
        $("#selectedItemReportSet").html(selectedItemReportSet);

        initZclip($("#zclip_copyItemCode"));
        initZclip($("#zclip_copyItemName"));
        initZclip($("#zclip_copyItemReportSet"));
    }
}

function initZclip($span) {
    var id = $span.attr("id");
    $span.zclip({
        path: '/js/ZeroClipboard.swf',
        copy: function () {
            var input = $(this).parent("div").children("input");
            return input.val();
        },
        afterCopy: function () {
            //alert("复制成功");
        }
    });
}

function excuteFormulaIniteds(time) {
    excuteArrFormulaIniteds(testTypeDefine.dataInfo, time);
}

function excuteArrFormulaIniteds(arr, time) {
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        excuteItemFormulaIniteds(item, time);
        excuteArrFormulaIniteds(item.subItems, time);
    }
}

function excuteItemFormulaIniteds(item, time) {
    if (!item.formulaInited) {
        return;
    }

    //alert(JSON.stringify(item));
    if (item.formulaInitedTime === "都执行" || item.formulaInitedTime === time) {
        executeScript(item.formulaInited, item.name, item.inputId);
    }
}

function executeScript(script, description, code) {
    //alert(script);
    script = script ? script.replace(/(^\s*)|(\s*$)/g, "") : script;//去除首尾的空白
    if (isDataEmpty(script)) {
        return;
    }

    var parentCode1 = getParentCode(code);
    var parentCode2 = getParentCode(parentCode1);
    var parentCode3 = getParentCode(parentCode2);
    var parentCode4 = getParentCode(parentCode3);
    var parentCode5 = getParentCode(parentCode4);
    var eventArgs = "var e = {};e.code='" + code + "';e.p1=e.parentCode1='" + parentCode1 + "';e.p2=e.parentCode2='" + parentCode2 + "';e.p3=e.parentCode3='" + parentCode3 + "';e.p4=e.parentCode4='" + parentCode4 + "';e.p5=e.parentCode5='" + parentCode5 + "';";
    var newScript = "function tmpfunction(e){" + script + "};" + eventArgs + "tmpfunction(e);"
    //alert(newScript);
    //console.info(newScript);

    //这句代码不能被catch，否则在有错误发生时，看不到具体是哪句代码错误
    eval(newScript);
}

function ech(itemCode) {
    executeChangedScriptByCode(itemCode);
}

function executeChangedScriptByCode(itemCode) {
    var newItemCode = itemCode.replace(new RegExp("[\.]", "g"), "_");
    var item = itemCacheFullCode[newItemCode];
    if (!item) {
        return;
    }
    //alert(JSON.stringify(item));

    executeScript(item.formulaChanged, item.name, newItemCode);
}


//========================编辑器========================
function createInput(item, className, parentCode, comboboxIniters, widthStr) {//todo............combobox项目统一回调处理
    //注意，easyui-textbox等元素的宽度，必须要写到style中，不然父元素的宽度更新时，textbox的宽度不会自动更新
    var inputId = item.inputId;
    var readonlyStr = item.editable == "是" ? "" : " disabled  ";//readonly背景色不变 disabled背景色变了，但不可选择文字
    //var backgroundStyleStr = item.editable == "是" ? "background-color:white;" : "background-color:lightgray;";
    var html = "";
    if (item.editorType == "整数") {
        html = '<input id="' + inputId + '" iteminputid="' + item.inputId + '" class="' + className + ' easyui-numberbox" style="width:' + widthStr + ';"   data-options="onChange:dateItemValueChanged,precision:0," ' + readonlyStr + '   />';
    } else if (item.editorType == "数值") {
        //easyui-numberbox只能指定固定小数位数，不能做到输入几个0保留几个0，因此使用type="number"。而为了保持样式的一致，所以使用了easyui-textbox
        html = '<input id="' + inputId + '" iteminputid="' + item.inputId + '" type="number" class="' + className + ' easyui-textbox" style="width:' + widthStr + ';" ' + readonlyStr + '  data-options="onChange:dateItemValueChanged," />';
    } else if (item.editorType == "文本") {
        html = '<input id="' + inputId + '" iteminputid="' + item.inputId + '" class="' + className + ' easyui-textbox" style="width:' + widthStr + ';" ' + readonlyStr + ' data-options="onChange:dateItemValueChanged,"   />';
    } else if (item.editorType == "日期") {
        html = '<input id="' + inputId + '" iteminputid="' + item.inputId + '" class="' + className + ' easyui-datebox"  style="width:' + widthStr + ';" ' + readonlyStr + '   '
                + ' data-options="onChange:dateItemValueChanged,formatter:mydateformatter,parser:mydateparser,"   />';
    } else if (item.editorType == "时间") {
        html = '<input id="' + inputId + '" iteminputid="' + item.inputId + '" class="' + className + ' easyui-timespinner"  style="width:' + widthStr + ';" ' + readonlyStr + '    data-options="onChange:dateItemValueChanged," />';
    } else if (item.editorType == "日期时间") {
        html = '<input id="' + inputId + '" iteminputid="' + item.inputId + '" class="' + className + ' easyui-datetimebox" ' + readonlyStr + '   '
                + ' data-options="onChange:dateItemValueChanged,showSeconds:false,formatter:mydatetimeformatter,parser:mydatetimeparser,"  style="width:' + widthStr + ';"    />';
    } else if (item.editorType == "静态列表") {
        html = '<select id="' + inputId + '" iteminputid="' + item.inputId + '" class="' + className + ' easyui-combobox" panelheight="auto" style="width:' + widthStr + ';" editable=false ' + readonlyStr + '   data-options="onChange:dateItemValueChanged,valueField: \'id\',textField: \'name\',required:false," '
                + '   />';
        comboboxIniters[item.inputId] = createStaticComboboxIniter(item);
    } else if (item.editorType == "累加列表") {
        html = '<select id="' + inputId + '" iteminputid="' + item.inputId + '" class="' + className + ' easyui-combobox" panelheight="auto" style="width:' + widthStr + ';" editable=true ' + readonlyStr + '   data-options="onChange:dateItemValueChanged,onShowPanel:beforeComboboxLoad,valueField: \'id\',textField: \'name\',required:false," '
                + '   />';
    } else if (item.editorType == "数据源列表") {
        html = '<select id="' + inputId + '" iteminputid="' + item.inputId + '" class="' + className + ' easyui-combobox" panelheight="auto" style="width:' + widthStr + ';" editable=false ' + readonlyStr + '   data-options="onChange:dateItemValueChanged,onShowPanel:beforeComboboxLoad,valueField: \'id\',textField: \'name\',required:false," '
                + '   />';
    } else if (item.editorType == "服务列表") {
        html = '<select id="' + inputId + '" iteminputid="' + item.inputId + '" class="' + className + ' easyui-combobox" panelheight="auto" style="width:' + widthStr + ';" editable=false ' + readonlyStr + '   data-options="onChange:dateItemValueChanged,onShowPanel:beforeComboboxLoad,valueField: \'id\',textField: \'name\',required:false," '
                + '   />';
    } else if (item.editorType == "单选") {
        if (!isDataEmpty(item.editorExtandData)) {
            var strs = item.editorExtandData.split(";");
            var nameHtml = "name='" + inputId + "'";
            html = '<div id="' + inputId + '" iteminputid="' + item.inputId + '" class="' + className + ' radiogoup" style="width:' + widthStr + ';"  >'
            for (var i = 0; i < strs.length; i++) {
                if (isDataEmpty(strs[i])) {
                    continue;
                }
                var str = strs[i];
                var encodeStr = encodeURIComponent(str).replace(new RegExp("%", "g"), "");  //去除特殊符号
                var newInputId = inputId + "_" + encodeStr;
                html = html + '<input id="' + newInputId + '" ' + nameHtml + ' iteminputid="' + item.inputId + '" type="radio" radiovalue="' + str + '" class="' + className + ' radioitem" style="vertical-align:middle;" onchange="inputValueChanged($(this));" />'
                                     + '<label for="' + newInputId + '" style="vertical-align:middle;">' + (str ? str.replace(new RegExp("{n}", "g"), "<br/>") : "") + '</label>';
            }
            html = html + "</div>";
        }
    } else if (item.editorType == "复选") {
        html = '<input id="' + inputId + '" iteminputid="' + item.inputId + '" type="checkbox" class="' + className + ' " style="vertical-align:middle;margin-top:4px;" onchange="inputValueChanged($(this));"  />'
                + '<label for="' + inputId + '" style="vertical-align:middle;width:' + widthStr + ';">' + (item.name ? item.name.replace(new RegExp("{n}", "g"), "<br/>") : "") + '</label>';
    } else if (item.editorType == "按钮") {
        html = '<div id="' + inputId + '" iteminputid="' + item.inputId + '" class="' + className + '" style="width:' + widthStr + ';height:' + item.height + ';line-height:' + item.height + ';" onclick="inputValueChanged($(this));"  >' + item.name + '</div>';
    } else {//默认标签
        html = '<div id="' + inputId + '" iteminputid="' + item.inputId + '" class="' + className + '" style="width:' + widthStr + ';margin-top:2px;"  >' + (item.name ? item.name.replace(new RegExp("{n}", "g"), "<br/>") : "") + '</div>';
    }
    return html;
}

function createStaticComboboxIniter(item) {
    var initer = {};
    initer.item = item;
    initer.initCallback = function () {
        if (!isDataEmpty(initer.item.editorExtandData)) {
            appendStringsToCombobox(initer.item.editorExtandData, initer.item.inputId);

            //var val = $(this).combobox('getData');
            //for (var item in val[0]) {
            //    if (item == 'id') {
            //        $(this).combobox('select', val[0][item]);
            //    }
            //}
        }
    }
    return initer;
}

function appendStringsToCombobox(str, inputId) {
    var strs = str.split(";");
    appendStringArrToCombobox(strs, inputId);
}

function appendStringArrToCombobox(strs, inputId) {
    var items = [];
    for (var i = 0; i < strs.length; i++) {
        if (isDataEmpty(strs[i])) {
            continue;
        }
        items.push({ "name": strs[i], "id": strs[i] });
    }
    $("#" + inputId).combobox("loadData", items);
}

function beforeComboboxLoad(param) {
    var input = $(this);
    var itemInputId = input.attr("iteminputid");//这里注意，radio的onchange事件传过来的是radioitem不是radiogroup，不过radioitem中也设置了iteminputid所以可以运行
    var item = itemCacheFullCode[itemInputId];
    if (item.editorType == "累加列表") {
        initCcumulationCombobox(item);
    }
    else if (item.editorType == "服务列表") {
        initServiceListCombobox(item);
    }
    else if (item.editorType == "数据源列表") {
        initDataSourceListCombobox(item);
    }
}

function initDataSourceListCombobox(item) {
    //检查是否已经加载过了数据
    if (comboboxInited[item.inputId]) {
        return;
    }

    //检查定义
    if (!item.editorExtandData || isDataEmpty(item.editorExtandData)) {
        return;
    }
    var strs = item.editorExtandData.split(";");
    if (strs.length < 2) {
        return;
    }
    var dscode = strs[0];
    var dsproperty = strs[1];

    //从dataSourceData中查找
    var code = "ds_" + dscode;
    if (!dataSourceData[code]) {
        return;
    }

    //构造数据
    var arr = [];
    var datas = dataSourceData[code];
    for (var i = 0; i < datas.length; i++) {
        var data = datas[i];
        if (data[dsproperty]) {
            arr.push("" + data[dsproperty]);
        }
    }
    appendStringArrToCombobox(arr, item.inputId);
}

function initServiceListCombobox(item) {
    //检查是否已经加载过了数据
    if (comboboxInited[item.inputId]) {
        return;
    }

    //检查定义
    if (!item.editorExtandData || isDataEmpty(item.editorExtandData)) {
        return;
    }
    var flag = item.editorExtandData;

    //看是否已经加载过了此列表的数据
    if (existsServiceListItems[flag]) {
        appendStringArrToCombobox(existsServiceListItems[flag].values, item.inputId);
        return;
    }

    //构建参数
    var testServiceListItem = {};
    testServiceListItem.flag = flag;
    testServiceListItem.itemInputId = item.inputId;

    //获取
    layer.load(1, { shade: [0.2, '#000000'] });
    jssGetListValuesFromServiceList(testSimpleTypeId, testTypeId, JSON.stringify(testServiceListItem), testTestingMode, getListValuesFromServiceListSuccess)
}

function getListValuesFromServiceListSuccess(result) {
    if (result.state == 0) {
        //alert(JSON.stringify(result));
        var item = itemCacheFullCode[result.data.itemInputId];
        if (!item) {
            layer.closeAll('loading');
            return;
        }

        existsServiceListItems[result.data.flag] = result.data;
        appendStringArrToCombobox(result.data.values, item.inputId);
        comboboxInited[item.inputId] = true;
        layer.closeAll('loading');
    } else {
        alert2(result.message);
        layer.closeAll('loading');
    }
}

function initCcumulationCombobox(item) {
    //检查是否已经加载过了数据
    if (comboboxInited[item.inputId]) {
        return;
    }

    //检查定义
    if (!item.editorExtandData || isDataEmpty(item.editorExtandData)) {
        return;
    }
    var strs = item.editorExtandData.split(";");
    if (strs.length < 2) {
        return;
    }
    var level = strs[0];
    var flag = strs[1];

    //看是否已经加载过了些列表的数据
    if (existsCcumulationItems[flag]) {
        appendStringArrToCombobox(existsCcumulationItems[flag].values, item.inputId);
        return;
    }

    //构建参数
    var ccumulationItem = {};
    ccumulationItem.level = level;
    ccumulationItem.flag = flag;
    ccumulationItem.itemInputId = item.inputId;

    //获取
    layer.load(1, { shade: [0.2, '#000000'] });
    jssGetCcumulationItemValues(testSimpleTypeId, testTypeId, JSON.stringify(ccumulationItem), testTestingMode, getCcumulationItemValuesSuccess)
}

function getCcumulationItemValuesSuccess(result) {
    if (result.state == 0) {
        //alert(JSON.stringify(result));
        var item = itemCacheFullCode[result.data.itemInputId];
        if (!item) {
            layer.closeAll('loading');
            return;
        }

        existsCcumulationItems[result.data.flag] = result.data;
        appendStringArrToCombobox(result.data.values, item.inputId);
        comboboxInited[item.inputId] = true;
        layer.closeAll('loading');
    } else {
        alert2(result.message);
        layer.closeAll('loading');
    }
}

function dateItemValueChanged(newValue, oldValue) {
    var input = $(this);
    if (input.attr("id").indexOf("r_") == 0) {
        roundSetInputValueChanged(input);
        return;
    }
    inputValueChanged(input);
}

function inputValueChanged(input) {
    var updating = input.attr("updating");
    if (updating == "true") {
        return;
    }

    var itemInputId = input.attr("iteminputid");//这里注意，radio的onchange事件传过来的是radioitem不是radiogroup，不过radioitem中也设置了iteminputid所以可以运行
    var value = get(itemInputId);
    testData[itemInputId] = value;
    //console.info(testData);

    executeChangedScriptByCode(itemInputId);
}

function get(inputId) {
    return getValue(inputId);
}

//获取数值（不管编辑器是什么类型都强制转换）
function getf(inputId) {
    var value = getValue(inputId);
    if (isDataEmpty(value)) {
        return null;
    }

    try {
        value = parseFloat(value);
        if (isNaN(value)) {
            value = null;
        }
    }
    catch (e) {
        value = null;
    }
    return value;
}

//获取div容器框dom元素的id
function getDivDomId(inputId) {
    if (!inputId) {
        return null;
    }

    inputId = inputId.replace(new RegExp("[\.]", "g"), "_");
    var item = itemCacheFullCode[inputId];
    if (!item) {
        return null;
    }

    var divId = "div_" + item.inputId;
    return divId;
}

function getValue(inputId) {
    if (!inputId) {
        return null;
    }

    inputId = inputId.replace(new RegExp("[\.]", "g"), "_");
    var input = $("#" + inputId);
    if (input.length == 0) {
        return null;
    }

    var item = itemCacheFullCode[inputId];
    if (!item) {
        return null;
    }
    var value = null;

    if (item.editorType == "整数") {//int
        value = getIntInputValue(input);
    } else if (item.editorType == "数值") {//注意，数值input的值，为了保留输入的000，实际返回的是字符串，计算时需要使用gf()函数获取
        value = getFloatInputValue(input);
    } else if (item.editorType == "文本") {//字符串
        value = getTextInputValue(input);
    } else if (item.editorType == "日期") {//字符串
        return input.datebox('getValue');
    } else if (item.editorType == "时间") {//字符串
        return input.timespinner('getValue');
    } else if (item.editorType == "日期时间") {//字符串
        return input.datetimebox('getValue');
    } else if (item.editorType == "静态列表") {//字符串
        return input.combobox('getText');
    } else if (item.editorType == "累加列表") {//字符串
        return input.combobox('getText');
    } else if (item.editorType == "数据源列表") {//字符串
        return input.combobox('getText');
    } else if (item.editorType == "服务列表") {//字符串
        return input.combobox('getText');
    } else if (item.editorType == "单选") {//bool
        //return input.is(":checked");
        var newInputs = input.children(".radioitem");
        for (var i = 0; i < newInputs.length; i++) {
            var newInput = $(newInputs[i]);
            if (newInput.is(":checked")) {
                return newInput.attr("radiovalue");
            }
        }
        return "";
    } else if (item.editorType == "复选") {//bool
        return input.is(":checked");
    } else {
        return input.html();
    }

    return value;
}

function getTextInputValue(input) {
    var value = input.textbox("getValue");
    if (isDataEmpty(value)) {
        value = "";
    }
    return value;
}

function getFloatInputValue(input) {
    var value = input.val();
    try {
        value = parseFloat(value);
        if (isNaN(value)) {
            value = null;
        }
    } catch (e) {
        value = null;
    }

    if (value == null) {
        value = "";
    } else {
        value = input.val();
    }
    return value;
}

function getIntInputValue(input) {
    var value = input.val();
    try {
        value = parseInt(value);
        if (isNaN(value)) {
            value = null;
        }
    } catch (e) {
        value = null;
    }
    return value;
}

function set(inputId, value) {
    setValue(inputId, value);
}

//设置数值项目的值时，可以用字符串也可以用数值，但用字符串才能保留后面的0
function setValue(inputId, value) {
    //console.info("inputId:" + inputId + ",value:" + value);
    if (!inputId) {
        return;
    }

    inputId = inputId.replace(new RegExp("[\.]", "g"), "_");
    var input = $("#" + inputId);
    if (input.length == 0) {
        return;
    }

    testData[inputId] = value;

    input.attr("updating", "true");
    try {
        var item = itemCacheFullCode[inputId];
        if (!item) {//在定义模式下可能被删除了
            return;
        }
        if (createDataInfoHtmlCacheMode) {//如果是生成界面缓存的模式，不往控件中写入实际的数据
            return;
        }
        //console.info(item);

        if (item.editorType == "整数") {
            input.numberbox('setValue', value);
        } else if (item.editorType == "数值") {
            //input.val(value);
            input.textbox("setValue", value);
        } else if (item.editorType == "文本") {
            input.textbox("setValue", value);
        } else if (item.editorType == "日期") {
            input.datebox('setValue', value);
        } else if (item.editorType == "时间") {
            input.timespinner('setValue', value);
        } else if (item.editorType == "日期时间") {
            input.datetimebox('setValue', value);
        } else if (item.editorType == "静态列表") {
            input.combobox('setValue', value);
        } else if (item.editorType == "累加列表") {
            input.combobox('setValue', value);
        } else if (item.editorType == "数据源列表") {
            input.combobox('setValue', value);
        } else if (item.editorType == "服务列表") {
            input.combobox('setValue', value);
        } else if (item.editorType == "单选") {
            var newValue = encodeURIComponent(value).replace(new RegExp("%", "g"), "");//去除特殊符号
            var newInputId = inputId + "_" + newValue;
            var newInput = $("#" + newInputId);
            if (newInput.length > 0) {
                newInput.prop("checked", true);
            }
        } else if (item.editorType == "复选") {
            input.prop("checked", value);
        } else {
            input.html(value);
        }
    }
    finally {
        input.attr("updating", "false");
    }
}

//复制某个定义，复制的对象后面增加copy11、copy11、、、、copyn
function copy(itemCode, count) {
    copyDefineItem(itemCode, count);
}

//复制某个定义，复制的对象后面增加copy11、copy11、、、、copyn
function copyDefineItem(itemCode, count) {
    console.info("exc copyDefineItem");
    //查找item
    var newItemCode = itemCode.replace(new RegExp("[\.]", "g"), "_");
    var item = itemCacheFullCode[newItemCode];
    if (!item) {
        console.info("项目" + itemCode + "不存在");
        return;
    }

    //创建新items
    var originalCode = getCopyOriginalCode(itemCode);
    var nowCount = getCreatedCopyCount(originalCode);
    var newItems = [];
    for (var i = nowCount + 1; i <= count; i++) {
        var newItem = copyItem(item);
        newItem.code = item.code + "copy" + i;
        newItems.push(newItem);
    }

    //查找parent
    var parent = findParentItem(newItemCode);
    if (parent == null) {
        return;
    }

    //插入
    var arrPropertyName = parent.subItems ? "subItems" : "dataInfo";
    var newArr = [];
    var oldCount = 0;
    for (var i = 0; i < parent[arrPropertyName].length; i++) {
        var subItem = parent[arrPropertyName][i];
        newArr.push(subItem);
        if (subItem.inputId == item.inputId) {//如果是原始对象，已经添加的数量设置为1
            oldCount = 1;
        }
        else if (oldCount > 0) {//不是原始对象，而又过了，则数量再加1（复制对象肯定紧跟着原始对象）
            oldCount = oldCount + 1;
        }
        if (oldCount == nowCount) {//当数量和nowCount相等时，可以添加新复制的对象了
            for (var j = 0; j < newItems.length; j++) {
                var newItem = newItems[j];
                newArr.push(newItem);
            }
        }
    }
    parent[arrPropertyName] = newArr;

    //记录数量
    setCopyCount(originalCode, count);

    //刷新  刷新界面即可，不用重新加载数据（因为新对象没有数据）
    reloadDataInfoDefine();
}



//修改编码，只能修改短编码，不会重新加载界面
//（修改定义和数据）（参数都是绝对路径）
function change(oldCode, newCode) {
    changeItemCode(oldCode, newCode, 0);
}

//修改编码，只能修改短编码，不会重新加载界面
//（修改定义和数据）（参数都是绝对路径）  level必须是0
function changeItemCode(oldCode, newCode, level) {
    if (!level) {
        level = 0;
    }
    //if (level == 0) {
    //    console.info(testData);
    //}

    //获取定义
    var oldCode = oldCode.replace(new RegExp("[\.]", "g"), "_");
    var item = itemCacheFullCode[oldCode];
    if (!item) {
        console.info("项目" + oldCode + "不存在");
        return;
    }

    //修改定义
    var newCode = newCode.replace(new RegExp("[\.]", "g"), "_");
    if (item.inputId) {
        item.inputId = newCode;//如果有inputId，修改之
    }
    if (level == 0) {//要修改的层级才修改短编码，其子级不修改
        var newShowCode = getShortCode(newCode);
        item.code = newShowCode;
    }

    //修改对象缓存
    delete itemCacheFullCode[oldCode];//删除老数据
    itemCacheFullCode[newCode] = item;

    //如果是项目
    if (item.itemType == "项目") {
        //修改控件上的id
        var input = $("#" + oldCode);
        if (input.length > 0) {
            input.attr("id", newCode);
        }
        //复选子元素
        if (item.editorType == "复选" && input.length > 0) {
            var label2 = input.parent(".dataItemInputDiv").children("label");
            if (label2.length > 0) {
                label2.attr("for", newCode);
            }
        }
        //单选子元素
        if (item.editorType == "单选" && !isDataEmpty(item.editorExtandData)) {
            var strs = item.editorExtandData.split(";");
            var labelIndex = -1;
            for (var i = 0; i < strs.length; i++) {
                if (isDataEmpty(strs[i])) {
                    continue;
                }
                labelIndex = labelIndex + 1;
                var str = strs[i];
                var encodeStr = encodeURIComponent(str).replace(new RegExp("%", "g"), "");  //去除特殊符号
                var oldCode2 = oldCode + "_" + encodeStr;
                var newCode2 = newCode + "_" + encodeStr;
                var input2 = $("#" + oldCode2);
                if (input2.length > 0) {
                    input2.attr("id", newCode2);
                    var label2 = input2.parent(".radiogoup").children("label").eq(labelIndex);//按序号取
                    if (label2.length > 0) {
                        label2.attr("for", newCode2);
                    }
                }
            }
        }
        //修改数据
        var value = getValue(newCode);
        delete testData[oldCode];//删除老数据
        testData[newCode] = value;//记录新数据
    }

    //如果有子级修改子级
    if (item.subItems && item.subItems.length > 0) {
        for (var i = 0; i < item.subItems.length; i++) {
            var subItem = item.subItems[i];
            changeItemCode(oldCode + "_" + subItem.code, newCode + "_" + subItem.code, level + 1);
        }
    }

    //测试。。。重新加载界面，看修改是否正确
    //if (level == 0) {
    //    //console.info(testData);
    //    reloadDataInfoDefine();
    //    reloadTestData();
    //    reloadCachedChart();
    //}
}

//获取父级编码，没有时返回本身
function getParentCode(itemCode) {
    var index = itemCode.lastIndexOf("_");
    if (index < 0) {
        return itemCode;
    }

    var parentCode = itemCode.substring(0, index);
    return parentCode;
}

//获取短编码
function getShortCode(itemCode) {
    var index = itemCode.lastIndexOf("_");
    if (index < 0) {
        return itemCode;
    }

    var shortCode = itemCode.substring(index + 1);
    //console.info("itemCode is " + itemCode + " shortCode is " + shortCode);
    return shortCode;
}

function findParentItem(itemCode) {
    var parentCode = getParentCode(itemCode);
    if (parentCode == "d") {
        return testTypeDefine;
    } else {
        return itemCacheFullCode[parentCode];
    }
}

function dis(itemCode, disable, value) {
    disableInput(itemCode, disable, value);
}

function disableInput(itemCode, disable, value) {
    //查找item
    var newItemCode = itemCode.replace(new RegExp("[\.]", "g"), "_");
    var item = itemCacheFullCode[newItemCode];
    if (!item) {
        console.info("项目" + itemCode + "不存在");
        return;
    }

    var input = $("#" + newItemCode);
    if (input.length == 0) {
        return;
    }

    var method = disable ? 'disable' : 'enable';
    if (item.editorType == "整数") {
        input.numberbox(method);
    } else if (item.editorType == "数值") {
        input.textbox(method);
    } else if (item.editorType == "文本") {
        input.textbox(method);
    } else if (item.editorType == "日期") {
        input.datebox(method);
    } else if (item.editorType == "时间") {
        input.timespinner(method);
    } else if (item.editorType == "日期时间") {
        input.datetimebox(method);
    } else if (item.editorType == "静态列表") {
        input.combobox(method);
    } else if (item.editorType == "累加列表") {
        input.combobox(method);
    } else if (item.editorType == "数据源列表") {
        input.combobox(method);
    } else if (item.editorType == "服务列表") {
        input.combobox(method);
    } else if (item.editorType == "单选") {
        input.combobox(method);
    } else if (item.editorType == "复选") {
        input.combobox(method);
    } else {
        //
    }

    if (value != null) {
        setValue(itemCode, value);
    }
}


function vis(itemCode, visible, value) {
    visibleInput(itemCode, visible, value);
}

function visibleInput(itemCode, visible, value) {
    //查找item
    var newItemCode = itemCode.replace(new RegExp("[\.]", "g"), "_");
    var item = itemCacheFullCode[newItemCode];
    if (!item) {
        console.info("项目" + itemCode + "不存在");
        return;
    }

    var div = $("#div_" + item.inputId);
    if (div.length == 0) {
        return;
    }
    if (visible) {
        div.show();
    } else {
        div.hide();
    }


    if (value != null) {
        setValue(itemCode, value);
    }
}



//========================修约==============================
function setRoundInfo() {
    //初始化div
    if ($("#roundSetDialogDiv").length == 0) {
        var roundSetDialogDivHtml = "<div id='roundSetDialogDiv' style='dispaly:none;width:300px;height:500px;'></div>";
        testDiv.append(roundSetDialogDivHtml);
        $("#roundSetDialogDiv").dialog({
            closed: true,
            modal: true,
            title: "修约",
            onClose: roundSetDialogDivClose,
        });
    }

    //初始化数据
    if (!roundInfoData) {
        roundInfoData = {};
    }
    for (var i = 0; i < testTypeDefine.roundInfo.length; i++) {
        var item = testTypeDefine.roundInfo[i];
        var code = "r_" + item.code;
        if (!roundInfoData[code] && roundInfoData[code] != 0) {
            roundInfoData[code] = 2;  //默认保留两位小数  //0会进入这个判断
        }
    }

    //添加元素
    var html = "<div class='roundSet'>";
    for (var i = 0; i < testTypeDefine.roundInfo.length; i++) {
        var item = testTypeDefine.roundInfo[i];
        var code = "r_" + item.code;
        itemCacheFullCode[code] = item;
        item.inputId = code;

        item.editorType = "整数";
        item.editable = "是";
        var itemHtml = "<div>"
                               + "<div class='roundSetTitle' style='float:left;'>" + item.name + "</div>"
                              + "<div class='roundSetValue' style='float:left;'>"
                              + createInput(item, "roundSetInput", "r", null, "160px")
                              + "</div>"
                              + "<div style='clear:both;'></div>"
                              + "</div>";
        html = html + itemHtml;
    }
    html = html + "</div>";
    $("#roundSetDialogDiv").html(html);
    $.parser.parse($("#roundSetDialogDiv"));

    //设置值
    for (code in roundInfoData) {
        setValue(code, roundInfoData[code]);
    }

    //显示界面
    $("#roundSetDialogDiv").dialog("open");
}

function roundSetDialogDivClose() {
    layer.load(1, { shade: [0.2, '#000000'] });
    jssSaveRoundSet(testSimpleTypeId, testTypeId, JSON.stringify(roundInfoData), testTestingMode, saveRoundSetSuccess);
}

function saveRoundSetSuccess(result) {
    if (result.state == 0) {
        layer.closeAll('loading');
    } else {
        alert2(result.message);
        layer.closeAll('loading');
    }
}

function roundSetInputValueChanged(input) {
    var itemInputId = input.attr("iteminputid");
    var item = itemCacheFullCode[itemInputId];
    if (!item) {
        return;
    }
    var value = getValue(item.inputId);
    roundInfoData[item.inputId] = value;
}


function rd(value, xs) {
    return roundValue(value, xs);
}

function roundValue(value, xs) {
    value = convertNumber(value, null);
    if (!isNumber(value)) {
        return null;
    }

    if (xs > 0) {
        var p = Math.pow(10, xs);
        var newValue = value * p;
        newValue = roune2(newValue);
        newValue = newValue / p;
        return newValue;
    } else if (xs == 0) {
        var newValue = roune2(value);
        return newValue;
    } else {
        xs = getAbs(xs);
        var p = Math.pow(10, xs);
        var newValue = value / p;
        newValue = roune2(newValue);
        newValue = newValue * p;
        return newValue;
    }
}

function roune2(num, precision) {
    precision = precision ? precision : 0;//默认为0
    var dnum = Math.pow(10, precision);
    if (Math.floor(num * dnum * 10) % 5 == 0 && Math.floor(num * dnum * 10) == num * dnum * 10 && Math.floor(num * dnum) % 2 == 0) {
        return Math.floor(num * dnum) / dnum;
    } else {
        return Math.round(num, precision);
    }
}

function rds(value, xs) {
    value = convertNumber(value, null);
    if (!isNumber(value)) {
        return null;
    }

    var newValue = roundValue(value, xs);
    if (xs <= 0) {
        return newValue + "";
    } else {
        return number_format(newValue, xs, "", 99);
    }
}

/**
     * number_format
     * @param number 传进来的数,
     * @param bit 保留的小数位,默认保留两位小数,
     * @param sign 为整数位间隔符号,默认为空格
     * @param gapnum 为整数位每几位间隔,默认为3位一隔
     * @type arguments的作用：arguments[0] == number(之一)
    */
function number_format(number, bit, sign, gapnum) {
    //设置接收参数的默认值
    var bit = arguments[1] ? arguments[1] : 2;
    var sign = arguments[2] ? arguments[2] : ' ';
    var gapnum = arguments[3] ? arguments[3] : 3;
    var str = '';

    number = number.toFixed(bit);//格式化
    realnum = number.split('.')[0];//整数位(使用小数点分割整数和小数部分)
    decimal = number.split('.')[1];//小数位
    realnumarr = realnum.split('');//将整数位逐位放进数组 ["1", "2", "3", "4", "5", "6"]

    //把整数部分从右往左拼接，每bit位添加一个sign符号
    for (var i = 1; i <= realnumarr.length; i++) {
        str = realnumarr[realnumarr.length - i] + str;
        if (i % gapnum == 0) {
            str = sign + str;//每隔gapnum位前面加指定符号
        }
    }

    //当遇到 gapnum 的倍数的时候，会出现比如 ",123",这种情况，所以要去掉最前面的 sign
    str = (realnum.length % gapnum == 0) ? str.substr(1) : str;
    //重新拼接实数部分和小数位
    realnum = str + '.' + decimal;
    return realnum;
}

//获取修约设置
function getrs(code) {
    if (!code) {
        return 2;
    }

    code = code.replace(new RegExp("[\.]", "g"), "_");
    if (!roundInfoData[code] && roundInfoData[code] != 0) {
        return 2;
    }

    var value = roundInfoData[code];
    return value;
}


//========================设置==============================
function setDataSourceInfo() {
    //初始化div
    if ($("#dataSourceSetDialogDiv").length == 0) {
        var dataSourceSetDialogDivHtml = "<div id='dataSourceSetDialogDiv' style='dispaly:none;width:600px;height:400px;'></div>";
        testDiv.append(dataSourceSetDialogDivHtml);
        $("#dataSourceSetDialogDiv").dialog({
            closed: true,
            modal: true,
            title: "设置",
            onClose: dataSourceSetDialogDivClose,
        });
    }

    //初始化数据
    if (!dataSourceData) {
        dataSourceData = {};
    }
    for (var i = 0; i < testTypeDefine.dataSourceInfo.length; i++) {
        var item = testTypeDefine.dataSourceInfo[i];
        var code = "ds_" + item.code;
        if (!dataSourceData[code]) {
            dataSourceData[code] = [];//每个数据源都是一个对象数组
            //if (dataSourceData[code].length == 0) {
            //    var dataItem = {};
            //    for (var j = 0; j < item.subItems.length; j++) {
            //        var subItem = item.subItems[j];
            //        dataItem[subItem.code] = 100;
            //    }
            //    dataSourceData[code].push(dataItem);
            //}
        }
    }

    //添加元素
    var html = "<div class='dataSourceSet easyui-tabs' style='width:100%;height:100%;' >";
    for (var i = 0; i < testTypeDefine.dataSourceInfo.length; i++) {
        var item = testTypeDefine.dataSourceInfo[i];
        var code = "ds_" + item.code;
        itemCacheFullCode[code] = item;
        item.inputId = code;
        html = html + "<div id='dsDataGridDiv_" + item.inputId + "' title=" + item.name + " style='width:100%;height:100%;' >";
        html = html + "     <div class='easyui-layout' data-options='fit:true'  style='width:100%;height:100%;'  >";
        html = html + "         <div data-options=\"region:'center',\" style='width:100%;border:none;' >";
        html = html + "             <div data-options=\"region:'center',\" class='dsDataGrid' id='dsDataGrid_" + item.inputId + "' style='width:100%;height:100%;border:none;' >";//这里多套一层div作为dataGrid，不然一个div同时作为page、dataGrid会出问题
        html = html + "             </div>";
        html = html + "         </div>";
        html = html + "         <div data-options=\"region:'south',\" class='dsDataGridCommand' id='dsDataGridCommand_" + item.inputId + "' style='height:55px' >";
        html = html + "                 <div class='dsDataGridCommandItem' onclick='delDataSourceItem(\"" + item.inputId + "\");'>删除</div>";
        html = html + "                 <div class='dsDataGridCommandItem' onclick='addDataSourceItem(\"" + item.inputId + "\");'>新增</div>";
        html = html + "                 <div style='clear:both;'></div>";
        html = html + "         </div>";
        html = html + "    </div>";
        html = html + "</div>";
    }
    html = html + "</div>";
    //alert(html);
    $("#dataSourceSetDialogDiv").html(html);
    //$.parser.parse($("#dataSourceSetDialogDiv"));  //初始化dataGrid再调用，不然后面的dataGrid会看不到

    //初始化dataGrid
    for (var i = 0; i < testTypeDefine.dataSourceInfo.length; i++) {
        var item = testTypeDefine.dataSourceInfo[i];
        var code = "ds_" + item.code;
        var columns = [];
        for (var j = 0; j < item.subItems.length; j++) {
            var subItem = item.subItems[j];
            var column = {};
            column.field = subItem.code;
            column.title = subItem.name;
            var width = subItem.width ? subItem.width : "";
            width = width.replace(new RegExp("px", "g"), "");
            width = parseInt(width);
            width = isNaN(width) ? 100 : width;
            column.width = width;
            if (subItem.editorType == "整数") {
                column.editor = { type: 'numberbox', options: { precision: 0 } };
            }
            else if (subItem.editorType == "数值") {
                var xsws = subItem.xsws ? subItem.xsws : 2;
                column.editor = { type: 'numberbox', options: { precision: xsws } };
            } else {
                column.editor = { type: 'text' };
            }
            columns.push(column);
        }
        var columns2 = [];
        columns2.push(columns);
        //alert(JSON.stringify(columns2));
        $("#dsDataGrid_" + item.inputId).datagrid({
            //fitColumns:true,
            border: false,
            rownumbers: true,
            singleSelect: true,
            data: dataSourceData[code],
            columns: columns2,
            editable: true,
            onClickCell: dsDataGridCellClick,
        });
    }
    $.parser.parse($("#dataSourceSetDialogDiv"));

    //显示界面
    $("#dataSourceSetDialogDiv").dialog("open");
}

function addDataSourceItem(dsItemInputId) {
    var item = itemCacheFullCode[dsItemInputId];
    if (!item) {
        return;
    }

    var code = item.inputId;
    var arr = dataSourceData[code];
    var newItem = {};
    for (var i = 0; i < item.subItems.length; i++) {
        var subItem = item.subItems[i];
        newItem[subItem.code] = null;
    }
    //arr.push(newItem);  不用加到数据，向表格添加记录时会自动添加

    var grid = $("#dsDataGrid_" + item.inputId);
    grid.datagrid('appendRow', newItem);
}

function delDataSourceItem(dsItemInputId) {
    var item = itemCacheFullCode[dsItemInputId];
    if (!item) {
        return;
    }

    var grid = $("#dsDataGrid_" + item.inputId);
    var selected = grid.datagrid('getSelected');
    if (selected) {
        if (confirm("确认删除？")) {
            var index = grid.datagrid('getRowIndex', selected);
            grid.datagrid('deleteRow', index);
        }
    }
}

var dsDataGridEditIndex = {};
function dsDataGridEndEditing(gridId) {
    var editIndex = dsDataGridEditIndex[gridId];
    if (editIndex == undefined) {
        return true;
    }
    if ($("#" + gridId).datagrid('validateRow', editIndex)) {
        $("#" + gridId).datagrid('endEdit', editIndex);
        dsDataGridEditIndex[gridId] = undefined;
        return true;
    } else {
        return false;
    }
}

function dsDataGridCellClick(index, field) {
    var gridId = $(this).attr("id");

    if (dsDataGridEndEditing(gridId)) {
        $("#" + gridId).datagrid('selectRow', index);
        $("#" + gridId).datagrid('editCell', { index: index, field: field });
        dsDataGridEditIndex[gridId] = index;
        $("input.datagrid-editable-input").bind("keypress", function (evt) {  //todo..........这个没有起作用？  2017.07.15可能是页面onkeydown事件拦截了？
            if (evt.keyCode == 13) {
                $("#" + gridId).datagrid('endEdit', dsDataGridEditIndex[gridId]);
            }
        }).focus();
    }
}

function dataSourceSetDialogDivClose() {
    var dataGrids = $(this).find(".dsDataGrid");
    for (var i = 0; i < dataGrids.length; i++) {
        var gridId = $(dataGrids[i]).attr("id");
        dsDataGridEndEditing(gridId);
    }
    //alert(JSON.stringify(dataSourceData));

    //指示下拉框的数据没有被加载过   累加列表、服务列表也被清除，但设置是很少用的情况
    comboboxInited = {};

    layer.load(1, { shade: [0.2, '#000000'] });
    jssSaveDataSource(testSimpleTypeId, testTypeId, JSON.stringify(dataSourceData), testTestingMode, saveDataSourceSuccess);
}

function saveDataSourceSuccess(result) {
    if (result.state == 0) {
        layer.closeAll('loading');
    } else {
        alert2(result.message);
        layer.closeAll('loading');
    }
}


function getdsv(code, conField, conValue, valueField) {
    return getDataSourceValue(code, conField, conValue, valueField);
}

function getDataSourceValue(code, conField, conValue, valueField) {
    if (code && code.indexOf("ds") != 0) {
        code = "ds." + code;
    }
    code = code.replace(new RegExp("[\.]", "g"), "_");
    for (key in dataSourceData) {
        if (code != key) {
            continue;
        }
        var datas = dataSourceData[key];
        for (var i = 0; i < datas.length; i++) {
            var data = datas[i];
            if (data[conField] != conValue) {
                continue;
            }
            return data[valueField];
        }
    }

    return null;
}



//======================easyui datagrid扩展===================
$.extend($.fn.datagrid.methods, {
    editCell: function (jq, param) {
        return jq.each(function () {
            var opts = $(this).datagrid('options');
            var fields = $(this).datagrid('getColumnFields', true).concat(
                    $(this).datagrid('getColumnFields'));
            for (var i = 0; i < fields.length; i++) {
                var col = $(this).datagrid('getColumnOption', fields[i]);
                col.editor1 = col.editor;
                if (fields[i] != param.field) {
                    col.editor = null;
                }
            }
            $(this).datagrid('beginEdit', param.index);
            for (var i = 0; i < fields.length; i++) {
                var col = $(this).datagrid('getColumnOption', fields[i]);
                col.editor = col.editor1;
            }
        });
    }
});



//======================计算===================
//所有函数2个版本，1非数值作废，2非数值整体作废
//数值定义：截取以数字开头，到非数字结束，转换为数值


function getJson(value) {
    return JSON.stringify(value);
}

//获取小数位数（默认为0，取最大的一个）
function getXs() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    var xs = 0;
    for (var k in arguments) {
        var v = arguments[k];
        var arr = v.toString().split(".");
        var xs2 = arr.length > 1 ? [1].length : 0;
        if (xs2 > xs) {
            xs = xs2;
        }
    }
    return xs;
}

//判断是否是数值，
function isNumber(value) {
    if (isDataEmpty(value)) {
        return false;
    }
    if (isDataEmpty((value + "").trim())) {
        return false;
    }
    if (isNaN(value)) {
        return false;
    }
    if (value == -Infinity || value == Infinity) {
        return false;
    }
    return true;
}

//强制转换为数值
//为什么要转换？，如果值是"33.44"，也会被当成数值，但如果值加法计算时，是用字符串的形式连接的
function convertNumber(value, defaultValue) {
    try {
        value = parseFloat(value);
        if (isNaN(value)) {
            value = defaultValue;
        }
    }
    catch (e) {
        value = defaultValue;
    }
    return value;
}

//求和--同getSum1
function getSum() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    return getSum1(arguments);
}

//求和--非数值排除，最终样本数为0返回0
function getSum1() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    var total = 0;
    for (var k in arguments) {
        var v = arguments[k];
        v = convertNumber(v, null);
        if (isNumber(v)) {
            total = total + v;
        }
    }
    return total;
}

//求和--有非数值返回null，样本数为0返回null
function getSum2() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    if (arguments.length == 0) {
        return null;
    }

    var total = 0;
    for (var k in arguments) {
        var v = arguments[k];
        v = convertNumber(v, null);
        if (isNumber(v)) {
            total = total + v;
        } else {
            return null;
        }
    }
    return total;
}

//求减--同getSub1
function getSub(value1, value2) {
    return getSub1(value1, value2);
}

//求减--非数值当做0
function getSub1(value1, value2) {
    //var xs = getXs(value1, value2);//todo.....动态小数，传入值必须为字符串才行。。。因此暂不实现
    value1 = convertNumber(value1, 0);
    value2 = convertNumber(value2, 0);
    return value1 - value2;
    //return rds(value1 - value2, xs);
}

//求减--有非数值返回null
function getSub2(value1, value2) {
    value1 = convertNumber(value1, null);
    value2 = convertNumber(value2, null);
    if (isNumber(value1) && isNumber(value2)) {
        return value1 - value2;
    } else {
        return null;
    }
}

//绝对值--非数值返回null
function getAbs(value) {
    value = convertNumber(value, null);
    if (isNumber(value)) {
        value = Math.abs(value);
        return value;
    } else {
        return null;
    }
}

//平均值--同getAvg1
function getAvg() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    return getAvg1(arguments);
}

//平均值--非数值排除，如果最终样本数为0，返回null
function getAvg1() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    var count = 0
    var total = 0;

    for (var k in arguments) {
        var v = arguments[k];
        v = convertNumber(v, null);
        if (isNumber(v)) {
            count = count + 1;
            total = total + v;
        }
    }

    if (count == 0) {
        return null;
    } else {
        var result = total / count;
        return result;
    }
}

//平均值--有非数值返回null，如果样本数为0，返回null
function getAvg2() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    var count = 0
    var total = 0;

    for (var k in arguments) {
        var v = arguments[k];
        v = convertNumber(v, null);
        if (isNumber(v)) {
            count = count + 1;
            total = total + v;
        } else {
            return null;
        }
    }

    if (count == 0) {
        return null;
    } else {
        var result = total / count;
        return result;
    }
}

//标准差--同getSte1
function getSta() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    return getSte1(arguments);
}

//标准差--非数值排除，如果最终样本数<2，返回null
function getSte1() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    //获取合法值
    var values = [];
    for (var k in arguments) {
        var v = arguments[k];
        v = convertNumber(v, null);
        if (isNumber(v)) {
            values.push(v);
        }
    }

    //检查个数
    if (values.length < 2) {
        return null;
    }

    //平均值
    var avg = getAvg1(values);

    //所有数减去其平均值的平方和
    var total = 0;
    for (var k in values) {
        var v = values[k];
        var vv = (v - avg) * (v - avg);
        total = total + vv;
    }

    //除以个数-1
    var result = total / (values.length - 1);

    //开根号
    result = Math.pow(result, 1 / 2);

    return result;
}

//标准差--有非数值返回null，如果样本数<2，返回null
function getSta2() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    //获取合法值，任意一个值不合法，返回null
    var values = [];
    for (var k in arguments) {
        var v = arguments[k];
        v = convertNumber(v, null);
        if (isNumber(v)) {
            values.push(v);
        }
        else {
            return null;
        }
    }

    //检查个数
    if (values.length < 2) {
        return null;
    }

    //平均值
    var avg = getAvg1(values);

    //所有数减去其平均值的平方和
    var total = 0;
    for (var k in values) {
        var v = values[k];
        var vv = (v - avg) * (v - avg);
        total = total + vv;
    }

    //除以个数-1
    var result = total / (values.length - 1);

    //开根号
    result = Math.pow(result, 1 / 2);

    return result;
}


//变异系数--同getCoe1
function getCoe() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    return getCoe1(arguments);
}

//变异系数--非数值排除，如果最终样本数<2，返回null
function getCoe1() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    var avg = getAvg1(arguments);
    var sta = getSte1(arguments);

    if (isNumber(avg) && isNumber(sta)) {
        var result = sta / avg;
        result = result * 100;
        return result;
    } else {
        return null;
    }
}

//变异系数--有非数值返回null，如果样本数<2，返回null
function getCoe2() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    var avg = getAvg2(arguments);
    var sta = getSta2(arguments);

    if (isNumber(avg) && isNumber(sta)) {
        var result = sta / avg;
        result = result * 100;
        return result;
    } else {
        return null;
    }
}

//多次方--有非数值时返回null，无法计算时返回null
function getPow(value, n) {
    value = convertNumber(value, null);
    n = convertNumber(n, null);

    if (isNumber(value) && isNumber(n)) {
        var result = Math.pow(value, n);
        result = convertNumber(result);
        if (isNumber(result)) {
            return result;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

//最大值--同getMax1
function getMax() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    return getMax1(arguments);
}

//最大值--非数值排除，如果最终样本数=0，返回null
function getMax1() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    //获取合法值
    var values = [];
    for (var k in arguments) {
        var v = arguments[k];
        v = convertNumber(v, null);
        if (isNumber(v)) {
            values.push(v);
        }
    }

    //个数检查
    if (values.length == 0) {
        return null;
    }

    var max = values[0];
    for (var i = 0; i < values.length; i++) {
        var v = values[i];
        if (v > max) {
            max = v;
        }
    }

    return max;
}

//最大值--有非数值返回null，如果样本数=0，返回null
function getMax2() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    //获取合法值  有非法值时，返回null
    var values = [];
    for (var k in arguments) {
        var v = arguments[k];
        v = convertNumber(v, null);
        if (isNumber(v)) {
            values.push(v);
        }
        else {
            return null;
        }
    }

    //个数检查
    if (values.length == 0) {
        return null;
    }

    var max = values[0];
    for (var i = 0; i < values.length; i++) {
        var v = values[i];
        if (v > max) {
            max = v;
        }
    }

    return max;
}

//最小值--同getMin1copy11
function getMin() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    return getMin1copy11(arguments);
}

//最小值--非数值排除，如果最终样本数=0，返回null
function getMin1copy11() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    //获取合法值
    var values = [];
    for (var k in arguments) {
        var v = arguments[k];
        v = convertNumber(v, null);
        if (isNumber(v)) {
            values.push(v);
        }
    }

    //个数检查
    if (values.length == 0) {
        return null;
    }

    var min = values[0];
    for (var i = 0; i < values.length; i++) {
        var v = values[i];
        if (v < min) {
            min = v;
        }
    }

    return min;
}

//最小值--有非数值返回null，如果样本数=0，返回null
function getMin2() {
    //直接传数组时的参数处理
    if (arguments.length > 0 && arguments[0] && arguments[0].length) {
        arguments = arguments[0];
    }

    //获取合法值  有非法值时，返回null
    var values = [];
    for (var k in arguments) {
        var v = arguments[k];
        v = convertNumber(v, null);
        if (isNumber(v)) {
            values.push(v);
        }
        else {
            return null;
        }
    }

    //个数检查
    if (values.length == 0) {
        return null;
    }

    var min = values[0];
    for (var i = 0; i < values.length; i++) {
        var v = values[i];
        if (v < min) {
            min = v;
        }
    }

    return min;
}

//中间值--有非数值返回null
function getMid(value1, value2, value3) {
    value1 = convertNumber(value1, null);
    value2 = convertNumber(value2, null);
    value3 = convertNumber(value3, null);

    if (!isNumber(value1) || !isNumber(value2) || !isNumber(value3)) {
        return null;
    }

    var arr = [];
    arr.push(value1);
    arr.push(value2);
    arr.push(value3);
    arr.sort(numberSorter);

    return arr[1];
}

//圆周率
function getPi() {
    return Math.PI;
}

//自然对数基数
function getE() {
    return Math.E;
}

//向上取整
function getCeil(value) {
    value = convertNumber(value, null);
    if (isNumber(value)) {
        return Math.ceil(value);
    } else {
        return null;
    }
}

//向下取整
function getFloor(value) {
    value = convertNumber(value, null);
    if (isNumber(value)) {
        return Math.floor(value);
    } else {
        return null;
    }
}

//求自然对数(底为e)
function getLog(value) {
    value = convertNumber(value, null);
    if (isNumber(value)) {
        return Math.log(value); Math.LOG2E
    } else {
        return null;
    }
    //http://www.w3school.com.cn/jsref/jsref_obj_math.asp
}


//============================排序========================
//v1、v2本身就是数组元素，按第1个元素的值排序
function arrSorter(v1, v2) {
    if (v1[0] < v2[0]) {
        return -1;
    } else if (v1[0] > v2[0]) {
        return 1;
    } else {
        return 0;
    }
}

//数值排序
function numberSorter(v1, v2) {
    if (v1 < v2) {
        return -1;
    } else if (v1 > v2) {
        return 1;
    } else {
        return 0;
    }
}



//============================图表========================
//传入图表定义编码、图表对象key、准备显示图片的div的id、数据，进行出图操作
//注意，此操作会将【出图代码、图表对象key、准备显示图片的div的id、数据】这些信息，保存到试验数据的charts对象中
//saveImage指示是否将数据保存到服务器
function doChart(chartDefineCode, chartKey, chartDivId, chartData, saveImage) {
    var chartKey = isDataEmpty(chartKey) ? "" : chartKey.replace(new RegExp("[\.]", "g"), "_");

    //查找图表定义
    var newCode = chartDefineCode.replace(new RegExp("[\.]", "g"), "_");
    newCode = newCode.indexOf("c_") == 0 ? newCode.replace(new RegExp("c_", "g"), "") : newCode;
    var chartDefine = null;
    for (var i = 0; i < testTypeDefine.chartInfo.length; i++) {
        var item = testTypeDefine.chartInfo[i];
        if (item.code == newCode) {
            chartDefine = item;
            break;
        }
    }
    if (chartDefine == null) {
        console.info("没有找到图表定义" + chartDefineCode);
        return;
    }

    //保存图表到试验数据   注意，图表定义以出图时的为准
    if (!testChartData) {
        testChartData = {};
    }
    var chart = {};
    chart.chartDefine = chartDefine;
    chart.chartKey = chartKey;
    chart.chartDivId = chartDivId;
    chart.chartData = chartData;
    //移除id相同但key不同的对象（主要是防止定义修改了）
    for (var k in testChartData) {
        var v = testChartData[k];
        if (v) {
            if (v.chartDivId == chart.chartDivId && v.chartKey != chart.chartKey) {
                testChartData[k] = null;
            }
        }
    }
    //添加或修改对象
    testChartData[chart.chartKey] = chart;

    //出图
    doChartByChartItem(chart, saveImage);
}

//传入chart定义，进行出图操作
function doChartByChartItem(chart, saveImage) {
    //获取图表代码
    var script = chart.chartDefine.chartCode;
    script = script ? script.replace(/(^\s*)|(\s*$)/g, "") : script;//去除首尾的空白
    if (isDataEmpty(script) || isDataEmpty(script.trim())) {
        console.info("图表定义" + chartDefineCode + "的代码为空");
        return;
    }

    //准备事件参数
    var chartDataJson = JSON.stringify(chart.chartData);
    var eventArgs = "var e = {};e.chartKey='" + chart.chartKey + "';e.chartDivId='" + chart.chartDivId + "';e.chartData=JSON.parse('" + chartDataJson + "');";
    var newScript = "function tmpfunction(e){" + script + "};" + eventArgs + "tmpfunction(e);"
    //alert(newScript);

    //这句代码不能被catch，否则在有错误发生时，看不到具体是哪句代码错误
    eval(newScript);

    //获取图像的大小信息
    var myChart = echarts.getInstanceByDom(document.getElementById(chart.chartDivId));
    chart.width = myChart.getWidth();
    chart.height = myChart.getHeight();
    //console.info(chart);

    //导出图片内容并保存到服务器
    if (saveImage) {
        var base64ImageData = myChart.getDataURL({ type: 'png', });
        //console.info(base64ImageData);
        //jssSaveTestRecordChart(testRecordId, chart.chartKey, base64ImageData, saveTestRecordChartSuccess);
        //2017.07.04  原来是生成图片时就保存，现在进行修改，在保存试验数据时统一保存
        var data = {};
        data.chartKey = chart.chartKey;
        data.base64ImageData = base64ImageData;

        if (!testChartImage) {
            testChartImage = {};
        }
        testChartImage[chart.chartKey] = data;
    }
}

function saveTestRecordChartSuccess(result) {
    //console.info(result);
    if (result.state == 0) {
        //保存成功
    } else {
        alert2(result.message);
        layer.closeAll('loading');
    }
}

//传入图表对象key，如果之前出过图，则显示出图结果
function showCachedChart(chartKey) {
    if (createDataInfoHtmlCacheMode) {//如果是用于生成数据信息html缓存，不实际处理图片
        return;
    }

    var chartKey = isDataEmpty(chartKey) ? "" : chartKey.replace(new RegExp("[\.]", "g"), "_");

    if (isDataEmpty(chartKey)) {
        return;
    }
    if (!testChartData || !testChartData[chartKey]) {
        return;
    }

    chart = testChartData[chartKey];

    //检查div是否存在，不存在则添加到body中
    var divId = chart.chartDivId;
    if ($("#" + divId).length == 0) {
        //看是否有cachedChartDiv_xxx，有的话将id进行修改，而不是创建
        var findDiv = $("#cachedChartDiv_" + chart.chartKey);
        if (findDiv.length == 0) {
            var width = chart.width ? chart.width + "px" : "600px";
            var height = chart.height ? chart.height + "px" : "400px";
            var divHtml = "<div id='" + divId + "' style='width:" + width + ";height:" + height + ";'></div>";
            $("body").append(divHtml);
        } else {
            findDiv.attr("id", divId);
        }
    }

    doChartByChartItem(chart, false);
}


function openTestRecordChartPage() {
    var url = "/html/testRecordChart.html?randid=" + getGuid() + "&testRecordId=" + testRecordId + "&testSimpleTypeId=" + testSimpleTypeId + "&testTypeId=" + testTypeId + "&testTestingMode=" + testTestingMode;
    window.open(url);
}



//===========================记录表========================
function showRecordReport(autoPrint) {
    var recordReportNo = testRecord.testType && testRecord.testType.recordReportNo ? testRecord.testType.recordReportNo : null;
    if (isDataEmpty(recordReportNo)) {
        alert2("试验类型未定义记录表！")
        return;
    }

    //地址不要加随机数，便于报表工具缓存数据
    var extParam = "&reportCode=" + recordReportNo + "&testRecordId=" + testRecord.id + "&simpleTypeId=" + testRecord.simpleTypeId
        + "&testTypeId=" + testRecord.testTypeId + "&updateTime=" + testRecord.updateTime + "&testTestingMode=" + testTestingMode;
    //alert(extParam);
    showReport("Test", extParam, "试验记录表  " + testRecord.id, autoPrint);
}





//===========================数据信息缓存========================
function saveDataInfoHtmlCache() {
    var dataInfosDiv = $("#dataInfos");
    var cache = dataInfosDiv.length > 0 ? dataInfosDiv.html() : "";

    layer.load(1, { shade: [0.2, '#000000'] });
    var data = {};
    data.testTypeId = encodeURIComponent(testTypeId);
    data.cache = encodeURIComponent(cache);
    beginInvokeJsonService("/testTypeDefineService.jss", "saveDataInfoCache", data, function (result) {
        layer.closeAll('loading');
        if (result.state == 0) {
            alert2("缓存保存成功");
            window.parent.closeDetailPage("createDataInfoHtmlCache");
        } else {
            alert2(result.message);
        }
    }, invokeServiceError);
}




//===========================试验、样品、委托、收样信息提取========================

var mode2Model3ReportDetail;//试验报告、样品报告模式时，对应的ReportDetail数据，需要由调用处直接赋值而不是用initTest传递
var mode2RealTestId;//试验报告模式时，真实的试验id
function getMode2RealTestId() {
    if (mode2RealTestId) {
        return mode2RealTestId;
    }

    if (mode2Model3ReportDetail && mode2Model3ReportDetail.testId) {
        mode2RealTestId = mode2Model3ReportDetail.testId;
        return mode2RealTestId;
    }

    //正面的代码，对刚生成，但还没有保存的报告不起作用。
    var data = {};
    data.testReportDetailId = encodeURIComponent(testRecordId);
    var result = invokeJsonService("/testRecordService.jss", "getMode2RealTestId", data, invokeServiceError);
    console.info("getMode2RealTestId  data:" + JSON.stringify(data) + "   result:" + JSON.stringify(result));
    if (result && result.state == 0) {
        mode2RealTestId = result.data ? result.data : "emptyTestId";
    } else {
        mode2RealTestId = "emptyTestId";//给一个空id，避免反复获取
    }
    return mode2RealTestId;
}

var mode2Mode3SimpleId;//试验报告、样品报告模式时，样品id
function getMode2Mode3SimpleId() {
    if (mode2Mode3SimpleId) {
        return mode2Mode3SimpleId;
    }

    if (mode2Model3ReportDetail && mode2Model3ReportDetail.simpleId) {
        mode2Mode3SimpleId = mode2Model3ReportDetail.simpleId;
        return mode2Mode3SimpleId;
    }

    //正面的代码，对刚生成，但还没有保存的报告不起作用。
    var data = {};
    data.testReportDetailId = encodeURIComponent(testRecordId);
    var result = invokeJsonService("/testRecordService.jss", "getMode2Mode3SimpleId", data, invokeServiceError);
    console.info("getMode2Mode3SimpleId  data:" + JSON.stringify(data) + "   result:" + JSON.stringify(result));
    if (result && result.state == 0) {
        mode2Mode3SimpleId = result.data ? result.data : "emptySimpleId";
    } else {
        mode2Mode3SimpleId = "emptySimpleId";//给一个空id，避免反复获取
    }
    return mode2Mode3SimpleId;
}

var mode1SimpleId;//试验模式时，样品id
function getMode1SimpleId() {
    if (mode1SimpleId) {
        return mode1SimpleId;
    }

    var data = {};
    data.testId = encodeURIComponent(testRecordId);
    var result = invokeJsonService("/testRecordService.jss", "getMode1SimpleId", data, invokeServiceError);
    console.info("getMode1SimpleId  data:" + JSON.stringify(data) + "   result:" + JSON.stringify(result));
    if (result && result.state == 0) {
        mode1SimpleId = result.data ? result.data : "emptySimpleId";
    } else {
        mode1SimpleId = "emptySimpleId";//给一个空id，避免反复获取
    }
    return mode1SimpleId;
}

//获取当前对应的试验的id，（mode=3即样品报告模式时获取不到）
function getTestId() {
    if (mode == 1) {//试验模式
        return testRecordId;
    } else if (mode == 2) {//试验报告模式
        return getMode2RealTestId();
    } else if (mode == 3) {//样品报告模式
        return null;
    } else {
        return null;
    }
}

//获取当前对应的样品的id
function getSimpleId() {
    if (mode == 1) {//试验模式
        return getMode1SimpleId();
    } else if (mode == 2 || mode == 3) {//试验报告模式
        return getMode2Mode3SimpleId();
    } else {
        return null;
    }
}

var simpleTestIds = {};//样品下试验项目的id，以testSort为键  定义时同一样品类型下试验序号不能重复
//根据试验定义的序号，获取当前样品下对应的试验的id，有可能获取不到
function getSimpleTestId(testSort) {
    var simpleId = getSimpleId();
    if (!simpleId) {
        return null;
    }
    if (simpleTestIds[testSort]) {
        return simpleTestIds[testSort];
    }

    var data = {};
    data.simpleId = encodeURIComponent(simpleId);
    data.testSort = encodeURIComponent(testSort);
    var result = invokeJsonService("/testRecordService.jss", "getSimpleTestId", data, invokeServiceError);
    //console.info("getSimpleTestId  data:" + JSON.stringify(data) + "   result:" + JSON.stringify(result));
    //alert2(JSON.stringify(result));
    if (result && result.state == 0) {
        simpleTestIds[testSort] = result.data ? result.data : "emptyTestId";
    } else {
        simpleTestIds[testSort] = "emptyTestId";//给一个空id，避免反复获取
    }
    return simpleTestIds[testSort];
}

var connectedTestsValues = {};

function getConnectedTestValues(testId) {
    if (!testId) {
        return null;
    }
    if (connectedTestsValues[testId]) {
        return connectedTestsValues[testId];
    }


    var data = {};
    data.id = encodeURIComponent(testId);
    var result = invokeJsonService("/testRecordService.jss", "getTestValuesJson", data, invokeServiceError);
    //console.info("getTestValuesJson  data:" + JSON.stringify(data) + "   result:" + JSON.stringify(result));
    if (result && result.state == 0 && result.data) {
        var valuesJson = result.data;
        var values = JSON.parse(valuesJson);
        connectedTestsValues[testId] = values;
    } else {
        connectedTestsValues[testId] = {};//给一个空id，避免反复获取
    }

    //console.info(connectedTestsValues[testId]);
    return connectedTestsValues[testId];
}

//提取当前试验的数据 （只适用于试验报告模式。样品报告模式时，获取不到；试验模式时，获取的不是最新的，因为最新的正在编辑没有保存。）
function getTestValue(valueCode) {
    var testId = getTestId();
    var connectedTestValues = getConnectedTestValues(testId);
    if (!connectedTestValues || !connectedTestValues[valueCode]) {
        return null;
    }
    return connectedTestValues[valueCode];
}

function gettv(valueCode) {
    return getTestValue(valueCode);
}

//提取当前样品下的试验数据
function getSimpleTestValue(testSort, valueCode) {
    var testId = getSimpleTestId(testSort);
    var connectedTestValues = getConnectedTestValues(testId);
    if (!connectedTestValues || !connectedTestValues[valueCode]) {
        return null;
    }
    return connectedTestValues[valueCode];
}

function getstv(testSort, valueCode) {
    return getSimpleTestValue(testSort, valueCode);
}

//获取其他样品下试验的数据
function getOtherSimpleTestValue(simpleNo, testSort, valueCode) {
    //todo.....................
}


function getostv(simpleNo, testSort, valueCode) {
    return getOtherSimpleTestValue(simpleNo, testSort, valueCode);
}

//获取当前样品的属性值
function getSimplePropertyValue(proCode) {
    //todo.....................
}


function getspv(proCode) {
    return getSimplePropertyValue(proCode);
}

//获取其他样品的属性值
function getOtherSimplePropertyValue(simpleNo, proCode) {
    //todo.....................
}

function getospv(simpleNo, proCode) {
    return getOtherSimplePropertyValue(simpleNo, proCode);
}


//==============================技术指标==============================


//将技术指标转为字符串形式
function convertJszbToString(jszb) {
    if (!jszb || isDataEmpty(jszb.type)) {
        return "";
    }

    var type = jszb.type;
    var v1 = convertNumber(jszb.arg1, 0);
    var v2 = convertNumber(jszb.arg2, 0);
    if (type == "不自动判定") {
        return "";
    }
    else if (type == "大于") {
        return ">" + v1;
    }
    else if (type == "大于等于") {
        return "≥" + v1;
    }
    else if (type == "小于") {
        return "<" + v1;
    }
    else if (type == "小于等于") {
        return "≤" + v1;
    }
    else if (type == "等于") {
        return "=" + v1;
    }
    else if (type == "区间1") {
        return "" + v1 + "≤x≤" + v2;
    }
    else if (type == "区间2") {
        return "" + v1 + "<x<" + v2;
    }
    else if (type == "正负") {
        return "" + v1 + "±" + v2;
    } else {
        return "";
    }
}

//从字符串获取技术指标
function convertJszbFromString(s) {
    var jszb = {};
    jszb.type = "不自动判定";
    jszb.result = "";

    if (isDataEmpty(s)) {
        return jszb;
    }

    //正负
    if (s.indexOf("±") > 0) {
        var index = s.indexOf("±");
        var s1 = s.substring(0, index);
        var s2 = s.substring(index + 1);
        jszb.type = "正负";
        jszb.arg1 = convertNumber(s1, 0);
        jszb.arg2 = convertNumber(s2, 0);
        jszb.result = s;
        return jszb;
    }

    //区间2
    if (s.indexOf("<x<") > 0) {
        var index = s.indexOf("<x<");
        var s1 = s.substring(0, index);
        var s2 = s.substring(index + 3);
        jszb.type = "区间2";
        jszb.arg1 = convertNumber(s1, 0);
        jszb.arg2 = convertNumber(s2, 0);
        jszb.result = s;
        return jszb;
    }

    //区间1
    if (s.indexOf("≤x≤") > 0) {
        var index = s.indexOf("≤x≤");
        var s1 = s.substring(0, index);
        var s2 = s.substring(index + 3);
        jszb.type = "区间1";
        jszb.arg1 = convertNumber(s1, 0);
        jszb.arg2 = convertNumber(s2, 0);
        jszb.result = s;
        return jszb;
    }

    //等于
    if (s.indexOf("=") >= 0) {
        var index = s.indexOf("=");
        var s1 = s.substring(index + 1);
        jszb.type = "等于";
        jszb.arg1 = convertNumber(s1, 0);
        jszb.result = s;
        return jszb;
    }

    //小于等于
    if (s.indexOf("≤") >= 0) {
        var index = s.indexOf("≤");
        var s1 = s.substring(index + 1);
        jszb.type = "小于等于";
        jszb.arg1 = convertNumber(s1, 0);
        jszb.result = s;
        return jszb;
    }

    //小于
    if (s.indexOf("<") >= 0) {
        var index = s.indexOf("<");
        var s1 = s.substring(index + 1);
        jszb.type = "小于";
        jszb.arg1 = convertNumber(s1, 0);
        jszb.result = s;
        return jszb;
    }

    //大于等于
    if (s.indexOf("≥") >= 0) {
        var index = s.indexOf("≥");
        var s1 = s.substring(index + 1);
        jszb.type = "大于等于";
        jszb.arg1 = convertNumber(s1, 0);
        jszb.result = s;
        return jszb;
    }

    //大于
    if (s.indexOf(">") >= 0) {
        var index = s.indexOf(">");
        var s1 = s.substring(index + 1);
        jszb.type = "大于";
        jszb.arg1 = convertNumber(s1, 0);
        jszb.result = s;
        return jszb;
    }

    return jszb;
}

function setJszbInfo() {
    //初始化数据
    if (!jszbData) {
        jszbData = {};
    }

    var url = "/html/jszbEditor.html";
    window.parent.showPageInDivTab("jszbEditor", "技术指标设置", url, jszbSetDialogDivClose, 800, 600);
    initJszbEditor();
}

function initJszbEditor() {
    //页面加载成功后才能调用函数，因此用jszbEditorOpened来判断是否加载成功，没有成功则延迟一段时间后再调用
    var frame = $("#jszbEditorDivTab").find("iframe")[0];
    try {
        var r = frame.contentWindow.jszbEditorOpened();
        if (r == "OK") {
            frame.contentWindow.setJszbInfoData(jszbData, testTypeDefine.jszbInfo);
        }
        else {
            setTimeout(initJszbEditor, 300);
        }
    } catch (e) {
        setTimeout(initJszbEditor, 300);
    }
}


function jszbSetDialogDivClose() {
    //console.info(jszbData);

    layer.load(1, { shade: [0.2, '#000000'] });
    jssSaveJszb(testSimpleTypeId, testTypeId, JSON.stringify(jszbData), testTestingMode, saveJszbSuccess);
}

function saveJszbSuccess(result) {
    if (result.state == 0) {
        layer.closeAll('loading');
    } else {
        alert2(result.message);
        layer.closeAll('loading');
    }
}

//将技术指标的判定依据，填充到下拉框控件中
function fillJszbPdyjs(comboboxCode) {
    var arr = [];
    if (!jszbData.pdyjs) {
        jszbData.pdyjs = [];
    }
    for (var i = 0; i < jszbData.pdyjs.length; i++) {
        var pdyj = jszbData.pdyjs[i];
        arr.push(pdyj.name);
    }
    appendStringArrToCombobox(arr, comboboxCode);
}

//将技术指标的条件，填充到下拉框控件中
function fillJszbTjs(comboboxCode, pdyjName) {
    var arr = [];
    if (!jszbData.pdyjs) {
        jszbData.pdyjs = [];
    }
    for (var i = 0; i < jszbData.pdyjs.length; i++) {
        var pdyj = jszbData.pdyjs[i];
        if (pdyj.name == pdyjName) {
            if (!pdyj.tjs) {
                pdyj.tjs = [];
            }
            for (var j = 0; j < pdyj.tjs.length; j++) {
                var tj = pdyj.tjs[j];
                arr.push(tj.name);
            }
            break;
        }
    }
    appendStringArrToCombobox(arr, comboboxCode);
}

function createEmptyJszb() {
    var jszb = {};
    jszb.type = "不自动判定";
    return jszb;
}

//查找技术指标  没有找到时返回不自动判定
function findJszb(pdyjName, tjName, jszbCode) {
    if (isDataEmpty(jszbCode)) {
        return createEmptyJszb();
    }
    jszbCode = jszbCode.replace(new RegExp("[\.]", "g"), "_");
    if (jszbCode.indexOf("j_") == 0) {
        jszbCode = jszbCode.substring(2);
    }

    for (var i = 0; i < jszbData.pdyjs.length; i++) {
        var pdyj = jszbData.pdyjs[i];
        if (pdyj.name == pdyjName) {
            for (var j = 0; j < pdyj.tjs.length; j++) {
                var tj = pdyj.tjs[j];
                if (tj.name == tjName) {
                    if (!tj.jszbs) {
                        tj.jszbs = [];
                    }
                    for (var k = 0; k < tj.jszbs.length; k++) {
                        var jszb = tj.jszbs[k];
                        if (jszb.code == jszbCode) {
                            return jszb;
                        }
                    }
                }
            }
        }
    }

    return createEmptyJszb();
}


function executeJszb(jszbStr, value) {
    value = convertNumber(value, null);
    if (value == null) {
        return "不合格";
    }

    var jszb = convertJszbFromString(jszbStr);
    if (jszb == null) {
        return "不合格";
    }

    var type = jszb.type;
    if (type == "不自动判定") {
        return "";
    }
    else if (type == "大于") {
        return value > jszb.arg1 ? "合格" : "不合格";
    }
    else if (type == "大于等于") {
        return value >= jszb.arg1 ? "合格" : "不合格";
    }
    else if (type == "小于") {
        return value < jszb.arg1 ? "合格" : "不合格";
    }
    else if (type == "小于等于") {
        return value <= jszb.arg1 ? "合格" : "不合格";
    }
    else if (type == "等于") {
        return value == jszb.arg1 ? "合格" : "不合格";
    }
    else if (type == "区间1") {
        return (value >= jszb.arg1) && (value <= jszb.arg2) ? "合格" : "不合格";
    }
    else if (type == "区间2") {
        return (value > jszb.arg1) && (value < jszb.arg2) ? "合格" : "不合格";
    }
    else if (type == "正负") {
        var v1 = jszb.arg1 - jszb.arg2;
        var v2 = jszb.arg1 + jszb.arg2;
        return (value >= v1) && (value <= v2) ? "合格" : "不合格";
    }
    else {
        return "不合格";
    }
}
