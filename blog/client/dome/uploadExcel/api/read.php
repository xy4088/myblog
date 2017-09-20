<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/19 0019
 * Time: 下午 17:52
 */
class ExcelToArrary extends Service{

    public function __construct() {

        /*导入phpExcel核心类    注意 ：你的路径跟我不一样就不能直接复制*/
        include_once('../Classes/PHPExcel.php');
    }

    /**

     * 读取excel $filename 路径文件名 $encode 返回数据的编码 默认为utf8

     *以下基本都不要修改

     */
    public function read($filename,$encode='utf-8'){
        try {
            $objReader = PHPExcel_IOFactory::createReader('Excel5');

            $objReader->setReadDataOnly(true);

            $objPHPExcel = $objReader->load($filename);

            $objWorksheet = $objPHPExcel->getActiveSheet();

            $highestRow = $objWorksheet->getHighestRow();
            $highestColumn = $objWorksheet->getHighestColumn();
            $highestColumnIndex = PHPExcel_Cell::columnIndexFromString($highestColumn);
            $excelData = array();
            for ($row = 1; $row <= $highestRow; $row++) {
                for ($col = 0; $col < $highestColumnIndex; $col++) {
                    $excelData[$row][] =(string)$objWorksheet->getCellByColumnAndRow($col, $row)->getValue();
                }
            }
        } catch(\Exception $e) {
            echo $e->getMessage();
            exit;
        }

        return $excelData;

    }

}
