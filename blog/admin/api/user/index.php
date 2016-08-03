<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/7/12
 * Time: 15:53
 */
header("Content-Type:text/html;charset=utf-8");
include_once '../db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $data = $_POST;
}else{
    $data = $_GET;
}
$p_type=$data['s'];

print_r($p_type);
if($p_type == 'user') {
    $name = strval($data['user']);
    $pwd = strval($data['password']);
    login($name, $phone);
}

function login($name, $pwd) {
    $connect = new db_connect();
    $sql = "SELECT * FROM b_user WHERE b_username=".$name." AND b_password=".$pwd;
    $result = $connect->db->query($sql);
    $result->execute();
    $result->setFetchMode(PDO::FETCH_ASSOC);
    echo $result;
    return;
    if($n = $result->fetch()){
        if($n['name'] == $name){
            session_start();
            $_SESSION['name']=$name;
            $_SESSION['phone']=$phone;
            $_SESSION['id']=$n['id'];
            echo json_encode(array(
                'code' => 0,
                'data' => $n['score'],
                'message' => '您当前积分'.$n['score']
            ));
        }else{
            echo json_encode(array(
                'code' => 1003,
                'message' => '手机已存在，但是名字和手机不匹配'
            ));
        }
    }else{
        $sql = "INSERT INTO `lhj_users` VALUES (NULL, '".$name."', '". $phone."', 200, ".time().")";
        $result = $connect->db->exec($sql);
        if($result) {
            session_start();
            $_SESSION['name']=$name;
            $_SESSION['phone']=$phone;
            $_SESSION['id']=$connect->db->lastInsertId();
            $data = array(
                'code' => 0,
                'data' => 200,
                'session' => $_SESSION['id'],
                'message' => '送您200积分，您可以玩游戏了'
            );
            echo json_encode($data);
        }else {
            $data = array(
                'code' => 1001,
                'message' => '请重新提交'
            );
            echo json_encode($data);
        }
    }
}