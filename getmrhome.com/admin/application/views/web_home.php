<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Staffing Calculator</title>
	<meta name="robots" content="noindex, nofollow">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="">
	<link rel="icon" href="<?php echo base_url('assets/frontend/images/favicon-150x150.png');?>" sizes="32x32" />
	<link rel="icon" href="<?php echo base_url('assets/frontend/images/favicon.png');?>" sizes="192x192" />
	<link rel="apple-touch-icon" href="<?php echo base_url('assets/frontend/images/favicon.png');?>" />
	<!-- Icons font CSS-->
    <link href="<?php echo base_url('assets/frontend/vendor/mdi-font/css/material-design-iconic-font.min.css'); ?>" rel="stylesheet" media="all">
    <link href="<?php echo base_url('assets/frontend/vendor/font-awesome-4.7/css/font-awesome.min.css'); ?>" rel="stylesheet" media="all">
    <!-- Font special for pages-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
	
	<link rel="stylesheet" href="<?php echo base_url('assets/frontend/fonts/font-awesome/css/font-awesome.min.css'); ?>">

    <!-- Vendor CSS-->
    <link href="<?php echo base_url('assets/frontend/vendor/select2/select2.min.css'); ?>" rel="stylesheet" media="all">
    
    <!-- Main CSS-->
    <link href="<?php echo base_url('assets/frontend/css/style.css'); ?>" rel="stylesheet" media="all">
	<!-- Jquery JS-->
    <script src="<?php echo base_url('assets/frontend/vendor/jquery/jquery.min.js');?>"></script>
    <!-- Vendor JS-->
    <script src="<?php echo base_url('assets/frontend/vendor/select2/select2.min.js');?>"></script>
	<script src="<?php echo base_url('assets/frontend/js/jquery.validate.js'); ?>"></script>
	<script src="<?php echo base_url('assets/frontend/js/additional-methods.js'); ?>"></script>
	<script src="<?php echo base_url('assets/frontend/js/web.js'); ?>"></script>
	<script src="https://www.google.com/recaptcha/api.js?render=6LcYKbwZAAAAAAzHJqryW2B3-aELuUh35H4pufCI"></script>
	<style>
		span.error(color: #ff0000;}
	</style>
</head>
<body>
    <div class="page-wrapper bg-gra-04 p-t-45 p-b-50">
		<section class="page-loader" style="display: none;" wfd-invisible="true">
			<figure><img class="img-responsive" src="<?php echo base_url('assets/frontend/images/loader.svg');?>" alt="prolify"></figure>
		</section>
        <div class="wrapper wrapper--w790">
            <div class="card card-5">
				<!--<div class="" style="text-align: center;">
					<img src="assets/frontend/images/logo-prolify-health.png">
				</div>-->
                <div class="card-heading">
                    <h2 class="title">ROI Calculator</h2>
                </div>
                <div class="card-body">
                    <form name="staffing_calculator" id="staffing_calculator"  role="form">
						<input type="hidden" name="info_saved" id="info_saved" value="0">
						<fieldset id="block1">
							<legend>Your Information:</legend>
							<div class="form-row">
								<div class="name">First Name *</div>
								<div class="value">
									<div class="input-group">
										<input class="input--style-5" type="text" name="first_name" id="first_name">
									</div>
								</div>
							</div>
							<div class="form-row">
								<div class="name">Last Name *</div>
								<div class="value">
									<div class="input-group">
										<input class="input--style-5" type="text" name="last_name" id="last_name">
									</div>
								</div>
							</div>
							<div class="form-row">
								<div class="name">Email Address *</div>
								<div class="value">
									<div class="input-group">
										<input class="input--style-5" type="email" name="email_address" id="email_address">
									</div>
								</div>
							</div>
							<div class="form-row">
								<div class="name">Contact Number</div>
								<div class="value">
									<div class="input-group">
										<input class="input--style-5" type="text" name="mobile_number" id="mobile_number">
									</div>
								</div>
							</div>
							<div class="form-row">
								<div class="name">Company</div>
								<div class="value">
									<div class="input-group">
										<input class="input--style-5" type="text" name="company" id="company">
									</div>
								</div>
							</div>
							<div id="block1-sumit-button-wrap">
								<button class="btn btn--radius-2 btn--red" type="button" id="next-btn">Next <i class="fa fa-step-forward" aria-hidden="true"></i></button>
							</div>
						</fieldset>
					</form>
					<form name="staffing_data_calculator" id="staffing_data_calculator"  role="form">
						<input type="hidden" name="info_id" id="info_id" value="0">
						<fieldset id="block2" style="display: none;">
							<legend>Calculation Data:</legend>
							<div class="form-row">
								<div class="name">Medical specialty *</div>
								<div class="value">
									<div class="input-group">
										<div class="rs-select2 js-select-simple">
											<select name="speciality" id="speciality">
												<?php 
													if(!empty($speacialities)){	
														echo '<option value="">Please select a speciality</option>';
														foreach($speacialities as $speciality)
														{								
															echo '<option value="'.$speciality['id'].'">'.ucfirst(strtolower($speciality['name'])).'</option>';
														}	
													}else{
														echo '<option value="">No speacialities available</option>';
													}													
												?>
											</select>
											<div class="select-dropdown"></div>
										</div>
									</div>
								</div>
							</div>
							<div class="form-row">
								<div class="name">Average visit per month *</div>
								<div class="value">
									<div class="input-group">
										<input class="input--style-5" type="text" name="visits" id="visits">
									</div>
								</div>
							</div>
							<div class="form-row">
									<div class="name">Average collections per month *</div>
									<div class="value">
										<div class="input-group currency-cont">
											<span class="input-group-addon">$</span><input class="input--style-5 currency" type="text" name="average_collection" id="average_collection">
										</div>
									</div>
							</div>
							<div class="form-row">
								<div class="name">Services required *<br><small style="color: #555;">(Select one or multiple)</small></div>
								<div class="value">
									<div class="input-group">
										<div class="rs-select2 js-select-multiple">
											<select name="services[]" id="services" multiple="multiple"> 
												<?php 
													if(!empty($services)){
														echo '<option value="99">End-to-end services</option>';
														foreach($services as $service)
														{								
															echo '<option value="'.$service['sp_id'].'">'.ucfirst(strtolower($service['sp_name'])).'</option>';
														}	
														echo '<option value="21" disabled="disabled">Credit Balance</option>';
														echo '<option value="22" disabled="disabled">Eligibility</option>';
														echo '<option value="25" disabled="disabled">Enrollment</option>';
														echo '<option value="24" disabled="disabled">Lock Box</option>';
														echo '<option value="23" disabled="disabled">Statements</option>';														
													}													
												?>
											</select>
											<div class="select-dropdown"></div>
										</div>
										<a href="javascript:;" id="select-all" style="float: right; color: #2B3694; margin-top: 5px; font-size: 12px; font-weight: bold;">Select All</a>
									</div>
								</div>
							</div>
							<!--<div class="form-row p-t-20">
								<label class="label label--block" style="text-transform: uppercase;">Do you want to calculate? *</label>
								<div class="p-t-15">
									<label class="radio-container m-r-55">Savings from current spend
										<input type="radio" name="calc_option" value="1" id="savings-option">
										<span class="checkmark"></span>
									</label>
									<label class="radio-container">Prolify cost for this service
										<input type="radio" name="calc_option" value="2"  id="proflify-cost-option" checked="checked">
										<span class="checkmark"></span>
									</label>
								</div>
							</div>-->
							<div class="form-row p-t-20" id="saving-options-wrap">
								<label class="label label--block" style="text-transform: uppercase;">Do you want the potential savings calculated using Absolute $ spend or % of collection? *</label>
								<div class="p-t-15">
									<label class="radio-container m-r-55">$ spend
										<input type="radio" name="calc_inner_option" value="1" id="spend-dollar"  checked="checked">
										<span class="checkmark"></span>
									</label>
									<label class="radio-container">% of collection
										<input type="radio" name="calc_inner_option" value="2"  id="spend-percentage">
										<span class="checkmark"></span>
									</label>
								</div>
							</div>
							<div class="form-row" id="spend_dollar_wrap">
								<div class="name">Current spend for back office work? *</div>
								<div class="value">
									<div class="input-group currency-cont">
										<span class="input-group-addon">$</span><input class="input--style-5 currency" type="text" name="current_spend">
									</div>
								</div>
							</div>
							<div id="spend_percentage_wrap" style="display: none;">
								<div class="form-row">
									<div class="name">% paid as cost of service *</div>
									<div class="value">
										<div class="input-group currency-cont">
											<span class="input-group-addon">%</span><input class="input--style-5 currency" type="text" name="current_spend_percentage" id="current_spend_percentage">
										</div>
									</div>
								</div>
							</div>
							<div id="block2-prev-button-wrap" style="display: none;">
							<button class="btn btn--radius-2 btn--red" type="button" id="prev-btn"><i class="fa fa-step-backward" aria-hidden="true"></i> Prev</button>
							</div>
							<div id="block2-sumit-button-wrap" style="display: none;">
								<input type="hidden" name="site_url" id="site_url" value="<?php echo base_url();?>">
								<a href="<?php echo base_url();?>" class="btn btn--radius-2 btn--blue" style="text-decoration: none;">Reset</a>
								<button class="btn btn--radius-2 btn--red" type="button" id="submit-btn">calculate</button>
							</div>							
						</fieldset>						
                    </form>
					<div id="response-data" style="display: none;">
						<p id="total_savings_element"  style="display: none;"><strong id="total_savings_element_value"></strong></p>
						<p id="prolify_cost_element"  style="display: none;">POTENTIAL SAVINGS FOR THIS SERVICE : <strong id="prolify_cost_element_value"></strong><small> (Estimated savings)</small></p>
						<!--<p id="prolify_cost_notes"  style="display: none;"><small style="color: #4272d7; font-size: 12px;">* These are approximate numbers calculated with base specialty output, final quote will have specifics pertaining to your practice current performance.</small></p>-->
						<p id="error_data"  class="error" style="display: none; text-align: center;"></p>
					</div>
                </div>
            </div>
        </div>
    </div>
</body>