<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/19 0019
 * Time: 上午 11:24
 */

header("Content-Type:text/html;charset=utf-8");
echo $_FILES['file'];
print_r($_FILES);
print_r($_FILES['file']);
print_r($_FILES['file']['tmp_name']);
if(move_uploaded_file($_FILES['file']['tmp_name'],'./uploads/up.xls')){ //上传文件，成功返回true
    echo '上传成功';
} else {
    echo '上传失败';
}