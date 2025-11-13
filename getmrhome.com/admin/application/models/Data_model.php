<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * User_model class.
 * 
 * @extends CI_Model
 */
class Data_model extends CI_Model {

	/**
	 * __construct function.
	 * 
	 * @access public
	 * @return void
	 */
	public function __construct() {
		
		parent::__construct();
		$this->load->database();
		
	}	
	/**
	 * 
	 * 
	 * @access public
	 * @param mixed $user_id
	 * @return object the user object
	 */
	
	public function get_all_specialities() {
		$this->db->select('id, name');
		$this->db->from('specialities');
		$this->db->order_by('name','asc');
		return $this->db->get()->result_array();
	}
	
	public function get_all_services() {
		$this->db->select('id as sp_id, name sp_name, volume_contribution');
		$this->db->from('services');
		$this->db->order_by('name','asc');
		return $this->db->get()->result_array();
	}
	
	public function getServiceData($sp_id)
	{
		$this->db->select('sp.id, sp.name, pd.*');
		$this->db->from('specialities sp');
		$this->db->join('productivity_data pd', 'pd.speciality_id = sp.id');
		$this->db->where('sp.id',$sp_id);
		$this->db->order_by('sp.name','asc');
		return $this->db->get()->result_array();
		//return $this->db->last_query();
	}	
	public function updateServiceData($speciality_id, $items)
	{
		$return = false;
		if(!empty($items) && !empty($speciality_id))
		{
			if(isset($items['service_value']) && !empty($items['service_value']))
			{
				$total_size = sizeof($items['service_value']);
				for($i = 1; $i <= $total_size; $i++)
				{
					if((isset($items['service_value'][$i]) && !empty($items['service_value'][$i])))
					{
						$this->db->set('service_value', trim($items['service_value'][$i]));
					}
					if((isset($items['volume_contribution'][$i]) && !empty($items['volume_contribution'][$i])))
					{
						$this->db->set('volume_contribution', trim($items['volume_contribution'][$i]));
					}
					if((isset($items['service_value'][$i]) && !empty($items['service_value'][$i])) || (isset($items['volume_contribution'][$i]) && !empty($items['volume_contribution'][$i])))
					{
						$this->db->where('service_id', $i);
						$this->db->where('speciality_id', $speciality_id);
						$this->db->update('productivity_data');
					}
					/* echo $this->db->last_query();
					echo '<br>'; */
				}
				//exit;
				$return = true;
			}
		}
		return $return;
	}
	
	public function get_staffing_data()
	{
		$this->db->select();
		$this->db->from('staffing');
		return $this->db->get()->row_array();
	}
	
	private function getProductivityDataBySpeciality($speciality_id, $services)
	{
		$this->db->select('service_id, service_name, service_value, volume_contribution');
		$this->db->from('productivity_data');
		$this->db->where('speciality_id', $speciality_id);
		$this->db->where_in('service_id', $services);
		return $this->db->get()->result_array();
	}
	
	public function getEmailAddress($info_id)
	{
		$this->db->select('email_address');
		$this->db->from('enquiries');
		$this->db->where('id', $info_id);
		return $this->db->get()->row_array();
	}
	private function getSpecialityName($id)
	{
		$this->db->select('name');
		$this->db->from('specialities');
		$this->db->where('id', $id);
		return $this->db->get()->row_array();
	}
	private function getServicesName($service_ids)
	{
		$this->db->select('GROUP_CONCAT(name SEPARATOR ",") as service_name');
		$this->db->from('services');
		$this->db->where_in('id', $service_ids);
		return $this->db->get()->result_array();
	}
	
	private function getStaffingData()
	{
		$this->db->select();
		$this->db->from('staffing');
		return $this->db->get()->row_array();
	}
	
	public function get_all_enquiries()
	{
		$this->db->select();
		$this->db->from('enquiries');
		$this->db->order_by('id', 'desc');
		return $this->db->get()->result_array();
	}
	
	public function getAllEnquiriesByEmail($email_address)
	{
		$this->db->select();
		$this->db->from('enquiry_data');
		$this->db->where('email_address', $email_address);
		$this->db->order_by('id', 'desc');
		return $this->db->get()->result_array();
	}
	
	public function insert_user_data($first_name, $last_name, $email_address, $mobile_number, $company)
	{
		$data = array('first_name' => $first_name, 'last_name' => $last_name, 'email_address' => $email_address, 'mobile_number' => $mobile_number, 'company' => $company);
		$str = $this->db->insert_string('enquiries', $data);
		if ( ! $this->db->query($str))
		{
			$error = $this->db->error(); // Has keys 'code' and 'message'
			log_message('error', $error);
		}
		return $this->db->insert_id();
	}
	
	private function insert_enquiry_data($speciality_name, $visits, $average_collection, $service_name, $current_spend, $calc_inner_option, $current_spend_percentage, $email_address, $total_prolify_cost_with_margin, $total_savings_str)
	{
		
		$data = array('speciality' => $speciality_name, 'avg_visits' => $visits, 'avg_collections' => $average_collection, 'services_required' => $service_name, 'current_spend' => $current_spend, 'percentage_paid' => $current_spend_percentage, 'selected_option' => $calc_inner_option, 'prolify_cost' => $total_prolify_cost_with_margin, 'savings_percentage' => $total_savings_str, 'email_address' => $email_address);
		$str = $this->db->insert_string('enquiry_data', $data);
		if ( ! $this->db->query($str))
		{
			$error = $this->db->error(); // Has keys 'code' and 'message'
			log_message('error', $error);
		}
		return $this->db->insert_id();
	}
	
	public function calculateData($info_id, $speciality_id, $visits, $average_collection, $services, $current_spend, $calc_inner_option, $current_spend_percentage)
	{
		//$insert_user_data = $this->insert_user_data($first_name, $last_name, $email_address, $mobile_number, $company);
		$productivity_data = $this->getProductivityDataBySpeciality($speciality_id, $services);
		if(!empty($productivity_data))
		{
			//Calculate total productivity FTE required
			$no_of_days_per_month = 20;
			$volume_per_day = $visits / $no_of_days_per_month; //Divide the visits by no of working days in a month
			$voulume_contribution = $service_value = '';
			$total_productivity_fte = $total_staffing_fte = 0;
			$total_services = sizeof($productivity_data);
			for($i = 0; $i < $total_services; $i++)
			{
				$total_productivity_fte += number_format(((($volume_per_day * $productivity_data[$i]['volume_contribution']) / 100) / $productivity_data[$i]['service_value']) , 2, '.', '');
			}
			$total_productivity_fte = $total_productivity_fte;
			// End
			
			
			$staffing_data = $this->getStaffingData();
			if(!empty($staffing_data))
			{
				//Calculate total staffing FTE required
				$usa_rate = isset($staffing_data['usa_rate']) && !empty($staffing_data['usa_rate']) ? (float)$staffing_data['usa_rate'] : 72.00;
				$indirect_cost_per_fte = isset($staffing_data['indirect_cost_per_fte']) && !empty($staffing_data['indirect_cost_per_fte']) ? (float)($staffing_data['indirect_cost_per_fte'] / $usa_rate) : 0.00;
				$product_cost = isset($staffing_data['product_cost']) && !empty($staffing_data['product_cost']) ? (float)$staffing_data['product_cost'] : 0.00;
				$total_product_cost_for_visits = number_format((($product_cost / $usa_rate)  * $visits), 2, '.', '');
				$staffing_array = array('qat', 'tl', 'manager', 'support');
				$total_staffing_fte = 0;
				$direct_cost_fte_array = array();
				$direct_cost_fte_array['associate_fte'] = $total_productivity_fte; //(($total_productivity_fte * $staffing_data['associate_data']) / 100);
				foreach($staffing_array as $staff)
				{
					$direct_cost_fte_array[$staff.'_fte'] = number_format((($total_productivity_fte * $staffing_data[$staff.'_data']) / 100), 2);
					$total_staffing_fte += number_format((($total_productivity_fte * $staffing_data[$staff.'_data']) / 100), 2);
				}
				//print_r($direct_cost_fte_array);
				//$total_staffing_fte = number_format($total_staffing_fte, 2, '.', '');
				$total_fte_rate = ($total_productivity_fte + $total_staffing_fte);
				//print_r($direct_cost_fte_array); exit;
				//End
				
				$avg_cost_staffing_array = array('associate', 'qat', 'tl', 'manager', 'support');
				$total_direct_cost_in_dollar = 0;
				//$total_direct_cost_in_dollar = $total_fte_rate * ($indirect_cost_per_fte / $usa_rate);
				foreach($avg_cost_staffing_array as $staff)
				{
					$direct_cost = number_format(($staffing_data[$staff.'_avg_cost'] / $usa_rate), 2, '.', '');
					//echo $direct_cost_fte_array[$staff.'_fte']; echo '<br>';
					$total_direct_cost_in_dollar+= ($direct_cost_fte_array[$staff.'_fte'] * $direct_cost);
				}
				//echo $total_direct_cost_in_dollar;
				$total_direct_cost_in_dollar = number_format($total_direct_cost_in_dollar, 2, '.', '');
				$total_indirect_cost_in_dollar = number_format((($indirect_cost_per_fte) * $total_fte_rate), 2, '.', '');
				$total_prolify_cost = number_format(($total_direct_cost_in_dollar + $total_indirect_cost_in_dollar), 2, '.', '');
				$prolify_margin = isset($staffing_data['prolify_margin']) && !empty($staffing_data['prolify_margin']) ? $staffing_data['prolify_margin'] : 0.00;
				$total_prolify_cost_with_margin = (($total_prolify_cost + $total_product_cost_for_visits) + (($total_prolify_cost * $prolify_margin) / 100));
				$total_prolify_cost_with_margin = number_format(round($total_prolify_cost_with_margin), 2, '.', '');
				$total_savings = 0;
				if($calc_inner_option == 1 && !empty($current_spend))
				{
					$total_savings_in_dollar = number_format((($current_spend - $total_prolify_cost_with_margin)), 2, '.', '');
					$total_savings = number_format((($total_savings_in_dollar * 100) / $current_spend), 2, '.', '');
				}
				if($calc_inner_option == 2 && !empty($current_spend_percentage))
				{
					$current_spend = (($average_collection * $current_spend_percentage) / 100);
					$total_savings_in_dollar = number_format((($current_spend - $total_prolify_cost_with_margin)), 2, '.', '');
					$total_savings = number_format((($total_savings_in_dollar * 100) / $current_spend), 2, '.', '');
				}
				if($total_savings <= 0)
				{
					//$total_savings_str = '- $'.number_format(abs($total_savings), 2, '.', '');
					$total_savings_str = 0;
				}else
				{
					$total_savings_str = number_format($total_savings, 2, '.', '');
				}
				if($info_id)
				{
					$customer_result = $this->getEmailAddress($info_id);
					$email_address	 = isset($customer_result['email_address']) ? $customer_result['email_address'] : '';
					$speciality_name = $this->getSpecialityName($speciality_id);
					$speciality_name = isset($speciality_name['name']) ? $speciality_name['name'] : '';
					if(in_array(99, $services))
					{
						$service_name = 'End-to-end Services';
					}else
					{
						$service_result  = $this->getServicesName($services);
						$service_name    = isset($service_result[0]['service_name']) ? $service_result[0]['service_name'] : '';
					}				
					if($email_address)
					{
						$enquiry_insert_result = $this->insert_enquiry_data($speciality_name, $visits, $average_collection, $service_name, $current_spend, $calc_inner_option, $current_spend_percentage, $email_address, $total_prolify_cost_with_margin, $total_savings_str);
					}
				}
				$result = array('STATUS' => TRUE, 'DATA' => array('total_fte_required' => $total_fte_rate, 'prolify_cost_wo_margin' => $total_prolify_cost, 'prolify_cost_with_margin' => '$'.$total_prolify_cost_with_margin, 'total_savings' => $total_savings_str));
				return $result;
			}else
			{
				return array('STATUS' => FALSE, 'DATA' => array('message' => 'Something went wrong!'));
			}
		}else
		{
			return array('STATUS' => FALSE, 'DATA' => array('message' => 'Something went wrong!'));
		}
	}
	
	public function getAllEnquiriesData()
	{
		$this->db->select('*'); 
		$this->db->from('enquiry_data');
		$this->db->join('enquiries', 'enquiries.email_address = enquiry_data.email_address');
		return $this->db->get()->result_array();
	}
}
