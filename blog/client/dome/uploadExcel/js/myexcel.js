var X = XLS;
function to_json(workbook) {
    var result = {};
    workbook.SheetNames.forEach(function (sheetName) {
        var roa = XLS.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        if (roa.length > 0) {
            result[sheetName] = roa;
        }
    });
    return result;
}

function fixdata(data) {
    var o = "", l = 0, w = 10240;
    for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
    return o;
}

function process_wb(wb,type) {
    var output = "";
    switch (type) {
        case "json":
            output = JSON.stringify(to_json(wb), 2, 2);
            break;
        case "form":
            output = to_formulae(wb);
            break;
        default:
            output = to_csv(wb);
    }
    //if (out.innerText === undefined) out.textContent = output;
    //else out.innerText = output;
    return output;
}
function ReadExcel(out) {
    var selCodes = $("#selProductCodes").val();
    var exlData = JSON.parse(out);
    var regCode = /^[1-9]\d*$/;
    var regQty = /^\d*$/;
    var ids = [];
    var msg = "";
    if (exlData.Sheet1 == null || exlData.Sheet1 == undefined) {
        msgErro("未查询到Excel文件中的数据！");
        saveLoading('hide');
        return;
    }
    for (var i = 0; i < exlData.Sheet1.length; i++) {
        var sysno = exlData.Sheet1[i].ProductSysNo;
        var qty = exlData.Sheet1[i].Qty;
        if (sysno == undefined)
            msg += "Qty列数据为 " + qty + " 的行，缺少ProductSysNo信息！\r\n";
        else if (qty == undefined)
            msg += "ProductSysNo列数据为 " + sysno + " 的行，缺少Qty信息！\r\n";
        else if (!regCode.test(sysno))
            msg += "ProductSysNo列数据为 " + sysno + " 不是有效的商品编号！\r\n";
        else if (!regQty.test(qty))
            msg += "Qty列数据为 " + qty + " 不是有效的数量格式！\r\n";
        else {
            ids.push(sysno);
        }
    }　　　　　//do something 84 }
    var xlf = document.getElementById('xlf');  //<input type="file" id="xlf" />
    function handleFile(e) {
        if (e.target.files[0].name.indexOf(".xls") < 0) {
            msgErro("请选择.xls格式文件！");
            return;
        }
        saveLoading('show');
        rABS = false;
        use_worker = false;
        var files = e.target.files;
        var output = "";
        var f = files[0];
        {
            var reader = new FileReader();
            var name = f.name;
            reader.onload = function (e) {
                if (typeof console !== 'undefined') console.log("onload", new Date(), rABS, use_worker);
                var data = e.target.result;
                if (use_worker) {
                    xw(data, process_wb);
                } else {
                    var wb;
                    if (rABS) {
                        wb = X.read(data, {type: 'binary'});
                    } else {
                        var arr = fixdata(data);
                        wb = X.read(btoa(arr), {type: 'base64'});
                    }
                    output = process_wb(wb, "json");
                    ReadExcel(output);
                }
            };
            if (rABS) reader.readAsBinaryString(f);
            else reader.readAsArrayBuffer(f);
        }
    }

    if (xlf.addEventListener) xlf.addEventListener('change', handleFile, false);
}