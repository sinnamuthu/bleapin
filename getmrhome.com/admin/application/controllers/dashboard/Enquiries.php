<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * User class.
 * 
 * @extends CI_Controller
 */
class Enquiries extends CI_Controller {

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
			//print_r($data); exit;
			$this->load->view('header',$data);
			$this->load->view('enquiries',$data);
			$this->load->view('footer',$data);
		}else
		{
			redirect('dashboard');
		}
	}
	
	public function edit($id = '') {
		if(empty($id))
		{
			redirect('calcAdmin/enquiries');
			die();
		}
		$email_result = $this->data_model->getEmailAddress($id);
		$email_address	 = isset($email_result['email_address']) ? $email_result['email_address'] : '';
		if($email_address)
		{
			$all_enquiries 			 = $this->data_model->getAllEnquiriesByEmail($email_address);
			$data['controller_name'] = $this->router->fetch_class();
			$data['function_name']   = $this->router->fetch_method();
			$data['all_enquiries']   = $all_enquiries;
			//echo '<pre>'; print_r($data); exit;
			$this->load->view('header',$data);
			$this->load->view('view_enquiry',$data);
			$this->load->view('footer',$data);		
		}else
		{
			redirect('calcAdmin/enquiries');
			die();
		}
	}
	
	public function saveData()
	{
		$post_data = $this->input->post(); //echo '<pre>'; print_r($post_data);// exit;
		if(!empty($post_data))
		{
			if(isset($post_data['ci_csrf_token']))
			{
				unset($post_data['ci_csrf_token']);
			}
			$size = sizeof($post_data);
			$update_array = array();
			foreach($post_data as $key => $data)
			{
				$update_array[$key] = $data;
			}
			//echo '<pre>'; print_r($update_array);exit;
			if(!empty($update_array))
			{
				$this->db->replace('staffing', $update_array);
				$this->session->set_flashdata('error','');
				$this->session->set_flashdata('success', 'Data has been Updated');
				redirect('calcAdmin/staffing');
			}else
			{
				$this->session->set_flashdata('error','Please enter the required values');
				$this->session->set_flashdata('success', '');
				redirect('calcAdmin/staffing');
			}				
		}else
		{
			$this->session->set_flashdata('error','Please enter the required values');
			$this->session->set_flashdata('success', '');
			redirect('calcAdmin/staffing');
		}
		/* if(isset($post_data['speaciality_id']) && !empty($post_data['speaciality_id']) && isset($post_data['item']) && !empty($post_data['item']))
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
		} */
	}
}