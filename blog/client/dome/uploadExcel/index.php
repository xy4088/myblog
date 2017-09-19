<?php
/**
 * Created by PhpStorm.
 * User: xy
 * Date: 2016/6/14
 * Time: 15:54
 */
header("Content-Type:text/html;charset=utf-8");

//print_r($_FILES);
if(move_uploaded_file($_FILES['file']['tmp_name'],'./uploads/up.xls')){ //上传文件，成功返回true
    echo '上传成功';
} else {
    echo '上传失败';
}

include_once 'excel.html';
?>