<?php
	$htmlData = '';
	if (!empty($_POST['content1'])) {
		if (get_magic_quotes_gpc()) {
			$htmlData = stripslashes($_POST['content1']);
		} else {
			$htmlData = $_POST['content1'];
		}
	}
?>
<!doctype html>
<html>
<head>
	<meta charset="utf-8" />
	<title>KindEditor PHP</title>
	<link rel="stylesheet" href="../themes/default/default.css" />
<!--	<link rel="stylesheet" href="../plugins/code/prettify.css" />-->
	<script charset="utf-8" src="../kindeditor-all-min.js"></script>
<!--	<script charset="utf-8" src="../lang/zh-CN.js"></script>-->
<!--	<script charset="utf-8" src="../plugins/code/prettify.js"></script>-->
	<script>
		KindEditor.ready(function(K) {
			var editor1 = K.create('textarea[name="content1"]', {
//				cssPath : '../plugins/code/prettify.css',
				uploadJson : '../php/upload_json.php',
				fileManagerJson : '../php/file_manager_json.php',
				allowFileManager : true,
				afterCreate : function() {
					var self = this;
					K.ctrl(document, 13, function() {
						self.sync();
						K('form[name=example]')[0].submit();
					});
					K.ctrl(self.edit.doc, 13, function() {
						self.sync();
						K('form[name=example]')[0].submit();
					});
				}
			});
//			prettyPrint();
		});
	</script>
</head>
<body>
	<?php echo $htmlData; ?>
	<form name="example">
		<textarea id="textarea" name="content1" style="width:700px;height:200px;visibility:hidden;"><?php echo htmlspecialchars($htmlData); ?></textarea>
		<br />
		<input type="button" name="button" value="提交内容" onclick="subInfo()" />
<!--		<input type="button" id="subInfo" value="获取html" />-->
		(提交快捷键: Ctrl + Enter)
	</form>

<script>
//	document.getElementById('subInfo').onclick = function() {
//		console.log(document.getElementById('textarea').value);
//	};

	function subInfo(){
		var val = document.getElementById('textarea').value;
		ajax({
			url: 'demo.php',
			type: 'post',
			data: 'content1='+val,
			success: function(res) {
				console.log(res);
			}
		});
	}

	function ajax(obj) {
		var url = obj.url,
			type = obj.type ? obj.type : 'get',
			success = obj.success ? obj.success : function(){},
			error = obj.error ? obj.error : function(){},
			async = obj.async ? obj.async : true;
		//先声明一个异步请求对象
		var xmlHttpReg = null;
		//如果是IE;
		if (window.ActiveXObject) {
			xmlHttpReg = new ActiveXObject("Microsoft.XMLHTTP");
		}else if (window.XMLHttpRequest) {
			xmlHttpReg = new XMLHttpRequest(); //实例化一个xmlHttpReg
		}

		//如果实例化成功,就调用open()方法,就开始准备向服务器发送请求
		if (xmlHttpReg != null) {
			if(type == 'get' || type == 'GET') {
				var data = obj.data ? '?' + obj.data : '';
				xmlHttpReg.open("get", url+data, async);
				xmlHttpReg.send(null);
				xmlHttpReg.onreadystatechange = doResult; //设置回调函数
			}else if(type == 'post' || type == 'POST') {
				var data = obj.data ? obj.data : '';
				xmlHttpReg.open("post", url, async);
				xmlHttpReg.send(data);
				xmlHttpReg.onreadystatechange = doResult; //设置回调函数
			}
		}

		//回调函数
		//一旦readyState的值改变,将会调用这个函数,readyState=4表示完成相应

		//设定函数doResult()
		function doResult() {
			//4代表执行完成;
			if (xmlHttpReg.readyState == 4) {
				//200代表执行成功;
				if (xmlHttpReg.status == 200) {
					//将xmlHttpReg.responseText的值赋给ID为resText的元素;
					success(xmlHttpReg.responseText);
				}else {
					error(xmlHttpReg);
				}
			}
		}
	}

</script>
</body>
</html>

