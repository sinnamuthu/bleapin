<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');
/*
 *  ======================================= 
 *  Author     : Web Preparations Team
 *  License    : Protected 
 *  Email      : admin@webpreparations.com 
 * 
 *  ======================================= 
 */
class Exports extends CI_Controller {
	// construct
    public function __construct() {
        parent::__construct();
		$this->load->library(array('session','form_validation'));
		$this->load->helper(array('url','form'));
		$this->load->model('data_model');
		/* $this->load->model('user_model');
		$this->load->model('customer_model');
		$this->load->model('quote_model');
		$this->load->model('bill_model'); */
		if(!isset($_SESSION['logged_in']))
		{
			redirect('calcAdmin/user/login','location',302);
		}
    }    
	
 // create xlsx
    public function createXLS() {
 // create file name
        $fileName = 'exports-'.time().'.xlsx';  
 // load excel library
        $this->load->library('excel');
        $enquiryData = $this->data_model->getAllEnquiriesData();
		//echo '<pre> hi'; print_r($enquiryData); exit;
        $objPHPExcel = new PHPExcel();
        $objPHPExcel->setActiveSheetIndex(0);
        // set Header
        $objPHPExcel->getActiveSheet()->SetCellValue('A1', 'First Name');
        $objPHPExcel->getActiveSheet()->SetCellValue('B1', 'Last Name');
        $objPHPExcel->getActiveSheet()->SetCellValue('C1', 'Email');
        $objPHPExcel->getActiveSheet()->SetCellValue('D1', 'Company');
        $objPHPExcel->getActiveSheet()->SetCellValue('E1', 'Mobile');       
		$objPHPExcel->getActiveSheet()->SetCellValue('F1', 'Speciality');       
		$objPHPExcel->getActiveSheet()->SetCellValue('G1', 'Avg Visits');       
		$objPHPExcel->getActiveSheet()->SetCellValue('H1', 'Avg Collection');       
		$objPHPExcel->getActiveSheet()->SetCellValue('I1', 'Services');       
		$objPHPExcel->getActiveSheet()->SetCellValue('J1', 'Current Spend');       
		$objPHPExcel->getActiveSheet()->SetCellValue('K1', 'Service Cost Paid');       
		$objPHPExcel->getActiveSheet()->SetCellValue('L1', 'Prolify Cost');       
		$objPHPExcel->getActiveSheet()->SetCellValue('M1', 'Savings');       
		$objPHPExcel->getActiveSheet()->SetCellValue('N1', 'Date');       
        // set Row
        $rowCount = 2;
        foreach ($enquiryData as $val) 
        {
            $objPHPExcel->getActiveSheet()->SetCellValue('A' . $rowCount, $val['first_name']);
            $objPHPExcel->getActiveSheet()->SetCellValue('B' . $rowCount, $val['last_name']);
            $objPHPExcel->getActiveSheet()->SetCellValue('C' . $rowCount, $val['email_address']);
            $objPHPExcel->getActiveSheet()->SetCellValue('D' . $rowCount, $val['company']);
            $objPHPExcel->getActiveSheet()->SetCellValue('E' . $rowCount, $val['mobile_number']);
			$objPHPExcel->getActiveSheet()->SetCellValue('F' . $rowCount, $val['speciality']);
			$objPHPExcel->getActiveSheet()->SetCellValue('G' . $rowCount, $val['avg_visits']);
			$objPHPExcel->getActiveSheet()->SetCellValue('H' . $rowCount, '$'.$val['avg_collections']);
			$objPHPExcel->getActiveSheet()->SetCellValue('I' . $rowCount, $val['services_required']);
			$objPHPExcel->getActiveSheet()->SetCellValue('J' . $rowCount, '$'.$val['current_spend']);
			$objPHPExcel->getActiveSheet()->SetCellValue('K' . $rowCount, $val['percentage_paid'].'%');
			$objPHPExcel->getActiveSheet()->SetCellValue('L' . $rowCount, '$'.$val['prolify_cost']);
			$objPHPExcel->getActiveSheet()->SetCellValue('M' . $rowCount, $val['savings_percentage'].'%');
			$objPHPExcel->getActiveSheet()->SetCellValue('N' . $rowCount, $val['created_date_time']);
            $rowCount++;
        }
 
        $objWriter = new PHPExcel_Writer_Excel2007($objPHPExcel);
        $objWriter->save($fileName);
 // download file
        header("Content-Type: application/vnd.ms-excel");
         redirect(site_url().$fileName);              
    }
}