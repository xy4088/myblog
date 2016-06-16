var websocket;
var xmlHttpRequest;
var heartbeatTimerId;

$(document).ready(init);

function setDefaultVals() {
    // set default values at here
    var url = "ws://121.41.52.101:4646/YouH4Udp/websocket/oGv9rs0tGCg1uO7dhYAKH8jOHcwA";
 }

function init() {
    setDefaultVals();

    if (!("WebSocket" in window)) {
        console.log('<p><span style="color: red;">websockets are not supported </span></p>');
       // $("#body").hide();
    }
    else {
        console.log('<p><span style="color: green;">websockets are supported </span></p>');
		
//连接websocket
connect('ws://121.41.52.101:4646/YouH4Udp/websocket/oGv9rs0tGCg1uO7dhYAKH8jOHcwA');
       // $('#conn_res').html('<span style="color: red;">disconnected</span>');
    };

};

function getCookieValue(cookieName, defaultVal) {
    return $.cookie(cookieName) == undefined ? defaultVal : $.cookie(cookieName)
};

// == connection functions ===================================================
function connect(url) {
    wsHost =url;
    websocket = new WebSocket(wsHost);
    console.log('<b>Connecting to: ' + wsHost + '</b>');

    websocket.onopen = function (evt) { onOpen(evt) };
    websocket.onclose = function (evt) { onClose(evt) };
    websocket.onmessage = function (evt) { onMessage(evt) };
    websocket.onerror = function (evt) { onError(evt) };
};

function disconnect() {
    websocket.close();
};

// == send functions ===================================================
function sendTxt(data) {
  //  var data = $("#send_txt").val();
  //  $.cookie('app_send_txt', data);
    return sendData(data);
};

function sendJson(json) {
    var data = JSON.stringify(json);
    return sendData(data);
};

function sendData(data) {
    if (websocket.readyState == websocket.OPEN) {
        websocket.send(data);
        console.log('send: ' + data);
        return true;
    } else {
        console.log('websocket is not connected');
        return false;
    };
};


// == websocket callbacks =============================================
function onOpen(evt) {
    sendCommand("getdevicestate");
};

function onClose(evt) {
    console.log('<span style="color: red;">DISCONNECTED </span>');
    stopPing();
};

function onMessage(evt) {
    console.log('<span style="color: blue;">rcvd: ' + evt.data + '</span>');
    //alert(evt.data);
    var res = JSON.parse(evt.data);
    var resdata = res.para;
    var len = resdata.length;
  
    var bytedata=[];
  

//接收的消息是否偶数字节
    if (len % 2 != 0)
    {
        return null;
    }
//去掉消息头尾贞
   var resultdata = resdata.toLowerCase().replace(/807f/, "").replace(/23dc/, "");
     for (var i = 0; i < resultdata.length; i = i + 2) {
        curCharCode = parseInt(resultdata.substr(i, 2), 16); // ASCII Code Value
        bytedata.push(curCharCode);
     } 
   

//状态处理函数调用
  
     if (res.code == "1067") {

       //显示设备不在线状态 wifi图标变暗，文字：未连接
         $('#wifi-on').html("设备未在线");

     }
     else if (res.code == "1068") {

  //显示设备在线状态，wifi图标点亮，文字：已连接
         $('#wifi-on').html("设备在线");

         updatestate(bytedata);//状态更新方法（需要重写 在consts.js脚本中）

     }
     else {

         return null

     }

};

function onError(evt) {
    console.log('<span style="color: red;">ERROR: ' + evt.data + '</span>');
    stopPing();
};




/**
 * 发送指令
 * @param {String} name 指令名称
 *
 * 本 Demo 指令生成规则：
 * 第一位为帧头，固定为 0x7E
 * 第二位为源地址，在下发指令，该值为 0x01；在上报指令中该值为 0x10
 * 第三位为目的地址，在下发指令，该值为 0x10；在上报指令中该值为 0x01
 * 第四位到倒数第三位为消息体，可变长度，由消息体长度、消息命令字和消息体参数组成
 * 倒数第二位为校验值，在本例中，该值为从帧开头（包含帧开头）到校验码前（不包含校验码）的所有字节的异或值
 * 最后一位为帧尾，固定为 0x7F
 *
 */
function sendCommand(name) {

    var msg = commands[name]; // 消息体
    var commandstr;
    commandstr = '807f' + dec2hex(msg.size, 2) + dec2hex(msg.cmd, 2) + dec2hex(msg.params, 2) + parseInt(msg.size ^ msg.cmd ^ msg.params).toString(16) + '23dc';
    var commandjson = {
            "version":"udcp1.0",
            "dev_typ": "57c14dc5-b71e-4831-b323-e1b54cbfc686",
            "dev_id": "ACCF238970EA",
            "code":1065,
            "para": commandstr
    };

    // 发送指令
    this.sendJson(commandjson);
}


/**
 * 下发指令
 * @param  {Object} command 指令
 * @return {Promise}
 */
function send(command) {
    var _that = this;
    var st = '';

    if (__DEBUG__) {
        console.log('向设备发送' + command.label + '指令：' + command.body);
    }

    return new Promise(function (resolve, reject) {
        XJSObject.invoke('sendXDeviceData', {
            deviceid: _that.deviceId,
            appid: _that.appId,
            token: tokenId,
            data: command.body
        }, function(r) {
            if (r.status === 200) {
                if (__DEBUG__) {
                    console.log('--------------------------------------');
                    console.log(command.label + '指令发送成功：' + JSON.stringify(r));
                }
                resolve(r);
            } else{
                if (__DEBUG__) {
                    console.log('--------------------------------------');
                    console.log(command.label + '指令发送失败：' + JSON.stringify(r));
                }
                reject('指令发送失败');
            }
        });
    });
}

/**
 * 十六进制转10进制
 * @param  {Number} hex 十六进制数
 * @return {Number} 十进制数
 */
function hex2Int(hex) {
    return parseInt('0x' + hex, 16);
}

/**
 * 10进制转十六进制
 * @param  {Number} hex 十六进制数
 * @return {Number} 十进制数
 */
function dec2hex(dec, len) {
    var hex = "";
    while (dec) {
        var last = dec & 15;
        hex = String.fromCharCode(((last > 9) ? 55 : 48) + last) + hex;
        dec >>= 4;
    }
    if (len) {
        while (hex.length < len) hex = '0' + hex;
    }
    return hex;
}

/**
 * 编码
 * @param  {String} 目标字符串
 * @return {String} base-64编码
 */
function encode(data) {
    var str = String.fromCharCode.apply(null,data); // 先转换为二进制
    return btoa(str).replace(/.{76}(?=.)/g,'$&\n');
}

/**
 * 解码
 * @param  {String} b64 base64位字符串
 * @return {Promise}
 */
function decode(b64) {
    var bytes = decodeBase64(b64);
    var msg;
    var output = '';

    var outputArr = bytes.map(function (item) {
        var hex = item.toString(16);
        if (item < 16) {
            hex = '0' + item.toString(16);
        }
        return hex;
    });
    output = outputArr.join(' ');

    if (__DEBUG__) {
        console.log('转为十六进制指令：' + output);
    }

    msg = outputArr.slice(4, -2);

    return new Promise(function (resolve, reject) {
        resolve(msg);
    });

}


function strToHexCharCode(str) {
    if (str === "")
        return "";
    var hexCharCode = [];
    hexCharCode.push("0x");
    for (var i = 0; i < str.length; i++) {
        hexCharCode.push((str.charCodeAt(i)).toString(16));
    }
    return hexCharCode.join("");
}
function hexCharCodeToStr(hexCharCodeStr) {
    var trimedStr = hexCharCodeStr.trim();
    var rawStr =
      trimedStr.substr(0, 2).toLowerCase() === "0x"
      ?
      trimedStr.substr(2)
      :
      trimedStr;
    var len = rawStr.length;
    if (len % 2 !== 0) {
        alert("Illegal Format ASCII Code!");
        return "";
    }
    var curCharCode;
    var resultStr = [];
    for (var i = 0; i < len; i = i + 2) {
        curCharCode = parseInt(rawStr.substr(i, 2), 16); // ASCII Code Value
        resultStr.push(String.fromCharCode(curCharCode));
    }
    return resultStr.join("");
}


