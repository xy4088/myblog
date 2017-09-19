<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/19 0019
 * Time: 上午 11:24
 */

header("Content-Type:text/html;charset=utf-8");;
include '../Classes/PHPExcel.php';
include '../Classes/PHPExcel/IOFactory.php';
//echo(empty ($_FILES ['file_stu'] ['name']));
$fileName = $_FILES['xlfile']['name'];
echo($_FILES ['xlfile']['name']);
echo(empty($fileName));
if($_FILES ['xlfile']['name']){ //上传文件，成功返回true
    echo '上传成功';
} else {
    echo '上传失败';
}