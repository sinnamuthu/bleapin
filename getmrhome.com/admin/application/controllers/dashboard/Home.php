<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * User class.
 * 
 * @extends CI_Controller
 */
class Home extends CI_Controller {

	/**
	 * __construct function.
	 * 
	 * @access public
	 * @return void
	 */
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
	
	public function index()
	{
		if(isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true)
		{
			$data = array();
			$data['controller_name'] = $this->router->fetch_class();
			$data['function_name']   = $this->router->fetch_method();
			$data['all_enquiries']   = $this->data_model->get_all_enquiries();
			date_default_timezone_set('America/New_York');
			//echo '<pre>'; print_r($data['all_enquiries']); exit;
			$this->load->view('header',$data);
			$this->load->view('enquiries',$data);
			$this->load->view('footer',$data);
		}else
		{
			redirect('dashboard');
		}
	}
	
	public function getServiceData()
	{
		$html = '';
		$sp_id = $this->input->post('sp_id', true); 
		if(!empty($sp_id))
		{
			$response = $this->data_model->getServiceData($sp_id);
			//echo json_encode($response); exit;
			if(!empty($response))
			{
				$html .= '<table class="table table-responsive">';
				$html .= '<thead><tr><th>Service Name</th><th>Service Value</th><th>Volume of contribution</th><tr></thead>';
				$html .= '<tbody>';
				foreach($response as $res)
				{
					$html .= '<tr><td>'.$res['service_name'].'</td><td><input class="form-control" name="item[service_value]['.$res["service_id"].']" value="'.$res['service_value'].'" style="width:80px; display: inline;" required></td><td><input class="form-control" name="item[volume_contribution]['.$res["service_id"].']" value="'.$res['volume_contribution'].'"style="width:80px; display: inline;" required> %</td></tr>';
				}
				$html .= '</tbody>';
				$html .= '</table>';
			}else
			{
				$html .= '<p class="text-center text-danger">No data available!</p>';
			}
			echo $html;
			exit;
		}
	}
	
	public function saveData()
	{
		$post_data = $this->input->post(); //echo '<pre>'; print_r($post_data); exit;
		if(isset($post_data['speaciality_id']) && !empty($post_data['speaciality_id']) && isset($post_data['item']) && !empty($post_data['item']))
		{
			$speciality_id = $post_data['speaciality_id'];
			$items         = $post_data['item'];
			$update_date   = $this->data_model->updateServiceData($speciality_id, $items);
			if($update_date == true)
			{
				$this->session->set_flashdata('error','');
				$this->session->set_flashdata('success', 'Data has been Updated');
				redirect('calcAdmin/home');
			}else
			{
				$this->session->set_flashdata('error','Something went wrong!');
				$this->session->set_flashdata('success', '');
				redirect('calcAdmin/home');
			}
		}else
		{
			$this->session->set_flashdata('error','Something went wrong!');
			$this->session->set_flashdata('success', '');
			redirect('calcAdmin/home');
		}
	}
}