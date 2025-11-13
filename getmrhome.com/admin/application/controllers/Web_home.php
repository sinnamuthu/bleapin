<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Web_home extends CI_Controller {

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
	}
	
	public function index()
	{
		$data = array();
		$data['controller_name'] = $this->router->fetch_class();
		$data['function_name']   = $this->router->fetch_method();
		redirect(base_url().'dashboard/'); 
	}
}
