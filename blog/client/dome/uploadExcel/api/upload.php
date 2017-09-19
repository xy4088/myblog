<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/19 0019
 * Time: 上午 11:24
 */

header("Content-Type:text/html;charset=utf-8");;
//echo(empty ($_FILES ['file_stu'] ['name']));
//echo(empty($_FILES['file']));
//echo($_FILES ['file_stu'] ['tmp_name']);
echo(json_encode(explode ( ".", $_FILES ['file_stu'] ['name'])));
//echo($file_types [count ( $file_types ) - 1]);
if(move_uploaded_file($_FILES['file']['tmp_name'],'./uploads/up.xls')){ //上传文件，成功返回true
//    echo '上传成功';
} else {
//    echo '上传失败';
}