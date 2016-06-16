var commands= {
    // 指令消息体定义
    // 每个指令消息体由消息体长度、消息命令字、消息体参数?组成，附加的label的定义是为了更好地格式化调试日志
    closedevice: { size: 0x04, cmd: 0xc1, params: 0x00, label: '关闭设备' },
    opendevice: { size: 0x04, cmd: 0xc1, params: 0x01, label: '开启设备' },

    closetongsuo: { size: 0x04, cmd: 0xc2, params: 0x00, label: '关闭童锁' },
    opentongsuo: { size: 0x04, cmd: 0xc2, params: 0x01, label: '开启童锁' },

    closesleep: { size: 0x04, cmd: 0xc3, params: 0x00, label: '关闭睡眠' },
    opensleep: { size: 0x04, cmd: 0xc3, params: 0x01, label: '开启睡眠' },

    closefulizi: { size: 0x04, cmd: 0xc4, params: 0x00, label: '关闭负离子' },
    openfulizi: { size: 0x04, cmd: 0xc4, params: 0x01, label: '开启负离子' },
   
    closeshajun: { size: 0x04, cmd: 0xc5, params: 0x00, label: '关闭杀菌' },
    openshajun: { size: 0x04, cmd: 0xc5, params: 0x01, label: '开启杀菌' },

    closefengye: { size: 0x04, cmd: 0xc6, params: 0x00, label: '关闭风叶' },
    openfengye: { size: 0x04, cmd: 0xc6, params: 0x01, label: '开启风叶' },

    closedengdai: { size: 0x04, cmd: 0xc7, params: 0x00, label: '关闭灯带' },
    opendengdai: { size: 0x04, cmd: 0xc7, params: 0x01, label: '开启灯带' },

    adjustfengsu0: { size: 0x04, cmd: 0xc8, params: 0x00, label: '风速自动挡' },
    adjustfengsu1: { size: 0x04, cmd: 0xc8, params: 0x01, label: '风速1挡' },
    adjustfengsu2: { size: 0x04, cmd: 0xc8, params: 0x02, label: '风速2挡' },
    adjustfengsu3: { size: 0x04, cmd: 0xc8, params: 0x03, label: '风速3挡' },
    adjustfengsu4: { size: 0x04, cmd: 0xc8, params: 0x04, label: '风速4挡' },

    getdevicestate:{ size: 0x03, cmd: 0xc0, params: 0xc3, label: '获取设备状态量' },
  
};




var messages = {
    offline: '设备离线',
    notFound: '未能找到设备'
};


//设备状态更新
function updatestate(bytedata)
{
   // var command=commands();

    var datalen = bytedata[0];//数据长度
    var datacmd = bytedata[1];//命令
    var data1 = bytedata[2];//开关
    var data2 = bytedata[3];//童锁
    var data3 = bytedata[4];//睡眠
    var data4 = bytedata[5];//负离子
    var data5 = bytedata[6];//杀菌
    var data6 = bytedata[7];//风叶摆动
    var data7 = bytedata[8];//灯带开关
    var data8 = bytedata[9];//风速
    var data9 = bytedata[10];//室内温度
    var data10 = bytedata[11];//室内湿度
    var data11 = bytedata[12];//PM2.5高位
    var data12 = bytedata[13];//PM2.5低位
    var data13 = bytedata[14];//工作总时长高位
    var data14 = bytedata[15];//工作总时长地位
    var data15 = bytedata[16];//滤芯剩余寿命高位
    var data16 = bytedata[17];//滤芯剩余寿命低位
    var data17 = bytedata[18];//定时开机剩余时间-高位
    var data18 = bytedata[19];//定时开机剩余时间-低位
    var data19 = bytedata[20];//定时关机剩余时间-高位
    var data20 = bytedata[21];//定时关机剩余时间-低位
    var data21 = bytedata[22];//故障代码
    var data22 = bytedata[23];//校验码

    //电源开关状态显示(可参考，以下需要修改)
    if (data1 == 1) {

        $('#switch').removeClass('switch-off');
        $('#switch').addClass('switch-on');
       // sendCommand('opendevice');//打开设备电源

    } else {
        $('#switch').removeClass('switch-on');
        $('#switch').addClass('switch-off');
       // sendCommand('closedevice');//关闭设备电源
    }

    //潼锁开关;
    if(data2 == 1) {
        $('#qizhen_lock').removeClass('qizhen_lock_off');
        $('#qizhen_lock').addClass('qizhen_lock_on');
    }else {
        $('#qizhen_lock').removeClass('qizhen_lock_on');
        $('#qizhen_lock').addClass('qizhen_lock_off');
    }

    //睡眠开关;
    if(data3 == 1) {
        $('#xinfeng_sleep').removeClass('xinfeng_sleep_off');
        $('#xinfeng_sleep').addClass('xinfeng_sleep_on');
    }else {
        $('#xinfeng_sleep').removeClass('xinfeng_sleep_on');
        $('#xinfeng_sleep').addClass('xinfeng_sleep_off');
    }

    //负离子开关;
    if(data4 == 1) {
        $('#qizhen_negative').removeClass('qizhen_negative_off');
        $('#qizhen_negative').addClass('qizhen_negative_on');
    }else {
        $('#qizhen_negative').removeClass('qizhen_negative_on');
        $('#qizhen_negative').addClass('qizhen_negative_off');
    }

    //杀菌开关;
    if(data5 == 1) {
        $('#qizhen_shajun').removeClass('qizhen_shajun_off');
        $('#qizhen_shajun').addClass('qizhen_shajun_on');
    }else {
        $('#qizhen_shajun').removeClass('qizhen_shajun_on');
        $('#qizhen_shajun').addClass('qizhen_shajun_off');
    }

    //风叶摆动开关;
    if (data6 == 1) {
        $('#qizhen_fan').removeClass('qizhen_fan_off');
        $('#qizhen_fan').addClass('qizhen_fan_on');
        //$('#swing-ic').show();
        //sendCommand('openfengye');//打开风叶功能

    } else {
        $('#qizhen_fan').removeClass('qizhen_fan_on');
        $('#qizhen_fan').addClass('qizhen_fan_off');
        //$('#swing-ic').hide();
        // sendCommand('closefengye');//关闭风叶功能
    }

    //杀菌开关;
    if(data7 == 1) {
        $('#qizhen_light').removeClass('qizhen_light_off');
        $('#qizhen_light').addClass('qizhen_light_on');
    }else {
        $('#qizhen_light').removeClass('qizhen_light_on');
        $('#qizhen_light').addClass('qizhen_light_off');
    }

    $('#current-temp').html(data9);
    $('#room-temp').html(data10+"%");

    //pm2.5实际值;
    var pmVal = data11*256+data12,
    //弧度百分比;
        radianVal = pmVal/500*100;

    //设置pm2.5实际值
    $('#air-quality-num').html(pmVal);

    //空气等级：优、良、....
    if(pmVal > 0 && pmVal <= 35) {
        $(".air-level .level-describe").removeClass("show");
        $(".air-level .one").addClass("show");
    }else if(pmVal > 35 && pmVal <= 75) {
        $(".air-level .level-describe").removeClass("show");
        $(".air-level .two").addClass("show");
    }else if(pmVal > 75 && pmVal <= 115) {
        $(".air-level .level-describe").removeClass("show");
        $(".air-level .three").addClass("show");
    }else if(pmVal > 115 && pmVal <= 150) {
        $(".air-level .level-describe").removeClass("show");
        $(".air-level .four").addClass("show");
    }else if(pmVal > 150 && pmVal <= 250) {
        $(".air-level .level-describe").removeClass("show");
        $(".air-level .five").addClass("show");
    }else if(pmVal > 250) {
        $(".air-level .level-describe").removeClass("show");
        $(".air-level .six").addClass("show");
    }

    degrees(radianVal);
    return true;
}

//纯前端模拟的数据 , 拿去后删除;
$(function(){
    var data = [24, 1, 1, 0, 1, 0, 1, 0, 1, 0, 25, 70, 1, 2, 20, 10, 10, 20, 20, 20, 20, 20, 20, 20];
    updatestate(data);
});