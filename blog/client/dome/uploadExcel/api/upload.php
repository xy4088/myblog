<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/19 0019
 * Time: 上午 11:24
 */

header("Content-Type:text/html;charset=utf-8");
include '../Classes/PHPExcel.php';
include '../Classes/PHPExcel/IOFactory.php';
//include 'read.php';
if ($_FILES['xlfile']) {
    $tmp_file = $_FILES ['xlfile']['name'];
    $file_types = explode ( ".", $_FILES ['xlfile']['name'] );
    $file_type = $file_types [count ( $file_types ) - 1];
    echo $file_type;
    /*判别是不是.xls文件，判别是不是excel文件*/
    if (strtolower($file_type) == "xls") {
        echo 1;
        $objReader = \PHPExcel_IOFactory::createReader('Excel5');
    }elseif(strtolower($file_type == 'xlsx')) {
        echo 2;
        $objReader = \PHPExcel_IOFactory::createReader('Excel2007');
    }

    echo $objReader;
//        throw new \Exception('不是Excel文件，重新上传');

    /*设置上传路径*/
    $savePath = SITE_PATH . '/public/upfile/Excel/';

    /*以时间来命名上传的文件*/
    $str = date ( 'Ymdhis' );
    $file_name = $str . "." . $file_type;

    /*是否上传成功*/
    if (! copy ( $tmp_file, $savePath . $file_name ))
    {
        $this->error ( '上传失败' );
    }

    /*

       *对上传的Excel数据进行处理生成编程数据,这个函数会在下面第三步的ExcelToArray类中

      注意：这里调用执行了第三步类里面的read函数，把Excel转化为数组并返回给$res,再进行数据库写入

    */
    $res = Service ( 'ExcelToArray' )->read ( $savePath . $file_name );

    /*

         重要代码 解决Thinkphp M、D方法不能调用的问题

         如果在thinkphp中遇到M 、D方法失效时就加入下面一句代码

     */
    //spl_autoload_register ( array ('Think', 'autoload' ) );

    /*对生成的数组进行数据库的写入*/
    foreach ( $res as $k => $v )
    {
        if ($k != 0)
        {
            $data ['uid'] = $v [0];
            $data ['password'] = sha1 ( '111111' );
            $data ['email'] = $v [1];

            $data ['uname'] = $v [3];

            $data ['institute'] = $v [4];
            $result = M ( 'user' )->add ( $data );
            if (! $result)
            {
                $this->error ( '导入数据库失败' );
            }
        }
    }

}
