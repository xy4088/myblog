/**
 * Created by Administrator on 2016/6/4.
 */
(function() {
    var up, //时间选择中的上午或者下午;
        up1, //时间选择中的小时时间点;
        up2, //时间选择中的分钟时间点;
        animaed;

    $(function(){

        var brWidth = document.documentElement.clientWidth;
        brWidth = brWidth>640?640:brWidth;
        var size=brWidth/320*16;
        document.getElementsByTagName("html")[0].style.fontSize=size+"px";

        /*
         初始PM值，执行圆圈动画;
         60 表示 60%
         */

        //点击更多切换到模式选择框;
        $("#more_pattern").click(function(){
            $("#grade_wrap").hide();
            $("#pattern_wrap").show();
        });

        //点击返回切换到风速选择框;
        $("#back_grade").click(function(){
            $("#grade_wrap").show();
            $("#pattern_wrap").hide();
        });

        //关闭/打开按钮切换;
        $("#close_grade_btn").click(function(){
            if($(this).attr("class").indexOf('off') != -1) {
                $(this).removeClass('off');
                $(this).find('label').html('打开');
                sendCommand("opendevice");

            }else{
                $(this).addClass('off');
                $(this).find('label').html('关闭');
                sendCommand("closedevice");

            }
        });

        //档位切换;
        $(".grade-option .switch-handler").click(function(){
            var classStr = $(this).attr("class");
            var directive = $(this).attr("data-directive");
            if(classStr.indexOf("active") == -1){
                $(".grade-option .switch-handler").removeClass("active");
                $(this).addClass("active");
                sendCommand(directive);
            }
        });

        //模式切换;
        $(".pattern-option .pattern-item").click(function(){
            var closeState = $(this).attr("data-close");
            var openState = $(this).attr("data-open");
            var classStr = $(this).find('.tab-icon').attr("class");
            var idStr = $(this).find('.tab-icon').attr("id");
            if(classStr.indexOf(idStr+"_on") != -1){
                $(this).find('.tab-icon').removeClass(idStr+'_on');
                $(this).find('.tab-icon').addClass(idStr+'_off');
                sendCommand(openState);
            }else{
                $(this).find('.tab-icon').removeClass(idStr+'_off');
                $(this).find('.tab-icon').addClass(idStr+'_on');
                sendCommand(closeState);
            }
        });

        //创建时间选择器;
        createTimeBar();

        //选择时间时“完成”按钮事件;
        $("#selectFinish").click(function(){
            animaed.finish();
        });

        //选择时间时“清除”按钮事件;
        $("#selectClear").click(function(){
            up.UPSelectRowIndexPath(1).UPThen(function(indexPath, value) {
                up1Data = value;
            });
            up1.UPSelectRowIndexPath(1).UPThen(function(indexPath, value) {
                up2Data = value;
            });
            up2.UPSelectRowIndexPath(1).UPThen(function(indexPath, value) {
                up3Data = value;
            });
            $("#time_on").html('1:1');
            $("#time_on").hide();
            $("#time_off").show();
        });

        //打开定时;
        $("#open_time_bar").click(function(){
            animaed.start();
        });
    });

    window.degrees = function(ratio) {  //参数ratio: 百分比值，如： 60% ，应该传个60过来;
        var val=0,
            speed= 0,
            pmval = 0;
        deg = ratio/100*360;
        if(deg <= 180) {
            val = -135+deg;
            speed = deg*3/1000;
            pmval = 90+deg;
            setRotateDeg('.rightcircle', val, speed, pmval);

        }else{
            val = -135+(deg-180);
            speed = (deg-180)*3/1000;
            pmval = 90+deg;
            setRotateDeg('.rightcircle', 45, .54, 270);
            setTimeout(function(){
                setRotateDeg('.leftcircle', val, speed, pmval);
            },500);
        }

        function setRotateDeg(dom, val, speed, pmval){
            $(dom).css({
                "transform": "rotate("+val+"deg)",
                "-webkit-transform": "rotate("+val+"deg)",
                "-webkit-transition": "all "+speed+"s linear",
                "transition": "all "+speed+"s linear"
            });
            $(".pm-num-wrap").css({
                "transform": "rotate("+(pmval+12)+"deg)",
                "-webkit-transform": "rotate("+(pmval+12)+"deg)",
                "-webkit-transition": "all "+speed+"s linear",
                "transition": "all "+speed+"s linear"
            });
            $(".pm-num-wrap span").css({
                "transform": "rotate(-"+(pmval+12)+"deg) scale(.7)",
                "-webkit-transform": "rotate(-"+(pmval+12)+"deg) scale(.7)"
            })
        }
    }

//时间选择工具
//初始化数据;
    var data1 = [{"key": "am", "value": "上午"}, {"key": "pm", "value": "下午"}];
    var data2 = [{"key": "0","value": "0"}, {"key": "1","value": "1"}, {"key": "2","value": "2"}, {"key": "3","value": "3"}, {"key": "4","value": "4"},
        {"key": "5","value": "5"}, {"key": "6", "value": "6"}, {"key": "7", "value": "7"}, {"key": "8", "value": "8"}, {"key": "9", "value": "9"},
        {"key": "10", "value": "10"}, {"key": "11", "value": "11"}, {"key": "12", "value": "12"}, {"key": "13", "value": "13"}, {"key": "14", "value": "14"},
        {"key": "15", "value": "15"}, {"key": "16", "value": "16"}, {"key": "17", "value": "17"}, {"key": "18", "value": "18"}, {"key": "19", "value": "19"},
        {"key": "20", "value": "20"}, {"key": "21", "value": "21"}, {"key": "22", "value": "22"}, {"key": "23", "value": "23"}
    ];
    var data3 = [{"key": "0","value": "0"}, {"key": "1","value": "1"}, {"key": "2","value": "2"}, {"key": "3","value": "3"}, {"key": "4","value": "4"},
        {"key": "5","value": "5"}, {"key": "6", "value": "6"}, {"key": "7", "value": "7"}, {"key": "8", "value": "8"}, {"key": "9", "value": "9"},
        {"key": "10", "value": "10"}, {"key": "11", "value": "11"}, {"key": "12", "value": "12"}, {"key": "13", "value": "13"}, {"key": "14", "value": "14"},
        {"key": "15", "value": "15"}, {"key": "16", "value": "16"}, {"key": "17", "value": "17"}, {"key": "18", "value": "18"}, {"key": "19", "value": "19"},
        {"key": "20", "value": "20"}, {"key": "21", "value": "21"}, {"key": "22", "value": "22"}, {"key": "23", "value": "23"}, {"key": "24", "value": "24"},
        {"key": "25", "value": "25"}, {"key": "26", "value": "26"}, {"key": "27", "value": "27"}, {"key": "28", "value": "28"}, {"key": "29", "value": "29"},
        {"key": "30", "value": "30"}, {"key": "31", "value": "31"}, {"key": "32", "value": "32"}, {"key": "33", "value": "33"}, {"key": "34", "value": "34"},
        {"key": "35", "value": "35"}, {"key": "36", "value": "36"}, {"key": "37", "value": "37"}, {"key": "38", "value": "38"}, {"key": "39", "value": "39"},
        {"key": "40", "value": "40"}, {"key": "41", "value": "41"}, {"key": "42", "value": "42"}, {"key": "43", "value": "43"}, {"key": "44", "value": "44"},
        {"key": "45", "value": "45"}, {"key": "46", "value": "46"}, {"key": "47", "value": "47"}, {"key": "48", "value": "48"}, {"key": "49", "value": "49"},
        {"key": "50", "value": "50"}, {"key": "51", "value": "51"}, {"key": "52", "value": "52"}, {"key": "53", "value": "53"}, {"key": "54", "value": "54"},
        {"key": "55", "value": "55"}, {"key": "56", "value": "56"}, {"key": "57", "value": "57"}, {"key": "58", "value": "58"}, {"key": "59", "value": "59"}
    ];
    var up1Data = data1[0], up2Data = data2[0], up3Data = data3[0];

//创建时间选择工具;
    function createTimeBar(){
        up = UIPickerView.createPickerView({
            dataSource: data1,
            id: 'provincePicker',
            constraintsId: 'wower',
            kUP: {
                kUPCELLHEIGHT: 26,
                kUPFRICTION: 0.003
            },
            valueChange: function(data) {
                up1Data = data;
            }
        });
        up1 = UIPickerView.createPickerView({
            dataSource: data2,
            id: 'cityPicker',
            constraintsId: 'wower1',
            kUP: {
                kUPCELLHEIGHT: 26,
                kUPFRICTION: 0.003
            },
            valueChange: function(data) {
                up2Data = data;
                setTimeView();
            }
        });
        up2 = UIPickerView.createPickerView({
            dataSource: data3,
            id: 'areaPicker',
            constraintsId: 'wower3',
            kUP: {
                kUPCELLHEIGHT: 26,
                kUPFRICTION: 0.003
            },
            valueChange: function(data) {
                up3Data = data;
                setTimeView();
            }
        });
        animaed = CAAnimation.createAnimation({
            id: 'region-picker'
        });
    }

    function setTimeView() {
        var viewTimeVal = up2Data.value+":"+up3Data.value;
        $("#time_on").html(viewTimeVal);
        $("#time_on").show();
        $("#time_off").hide();
    }

//连接websocket

    connect('ws://121.41.52.101:4646/YouH4Udp/websocket/oGv9rs0tGCg1uO7dhYAKH8jOHcwA');

})();

       

