<?php
/**
 * Created by PhpStorm.
 * User: xiao yu
 * Date: 2016/7/12
 * Time: 15:53
 */
header("Content-Type:application/x-www-form-urlencoded;charset=utf-8");
include_once '../db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $data = $_POST;
}else{
    $data = $_GET;
}
$p_type=$data['s'];

if($p_type == 'login') {
    $name = strval($data['user']);
    $pwd = $data['password'];
    login($name, $pwd);
}

function login($name, $pwd) {
    $connect = new db_connect();
    $sql = "SELECT * FROM b_user WHERE b_username='".$name."' AND b_password='".$pwd."'";
    $result = $connect->db->query($sql);
    $result->execute();
    $result->setFetchMode(PDO::FETCH_ASSOC);
    $data = null;
    if($result->fetch()) {
        $data = array(
            'code' => 0,
            'data' => [],
            'message' => '登录成功'
        );
    }else{
        $data = array(
            'code' => 102,
            'data' => [],
            'message' => '登录失败'
        );
    }
    echo json_encode($data);
}