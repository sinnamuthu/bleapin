<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Dashboard</title>
	<meta name="robots" content="noindex, nofollow">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="">
	<link href="<?php echo base_url('assets/vendor/fontawesome-free/css/all.min.css'); ?>" rel="stylesheet" type="text/css">

	<!-- Page level plugin CSS-->
	<link href="<?php echo base_url('assets/vendor/datatables/dataTables.bootstrap4.css'); ?>" rel="stylesheet">
	<link href="<?php echo base_url('assets/vendor/bootstrap/css/bootstrap-select.min.css'); ?>" rel="stylesheet">
	<link href="<?php echo base_url('assets/vendor/bootstrap/css/bootstrap-datepicker.min.css'); ?>" rel="stylesheet">
	<!-- Custom styles for this template-->
	<link href="<?php echo base_url('assets/css/sb-admin.css'); ?>" rel="stylesheet">
	
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
	<!-- Bootstrap core JavaScript-->
	  <script src="<?php echo base_url('assets/vendor/jquery/jquery.min.js'); ?>"></script>
	  <script src="<?php echo base_url('assets/vendor/bootstrap/js/bootstrap.bundle.min.js'); ?>"></script>	  
	  <script src="<?php echo base_url('assets/vendor/bootstrap/js/bootstrap-select.min.js'); ?>"></script>
	  

	  <!-- Core plugin JavaScript-->
	  <script src="<?php echo base_url('assets/vendor/jquery-easing/jquery.easing.min.js'); ?>"></script>

	  <!-- Page level plugin JavaScript-->
	  <?php /*<script src="<?php echo base_url('assets/vendor/chart.js/Chart.min.js'); ?>"></script>*/?>
	  <script src="<?php echo base_url('assets/vendor/datatables/jquery.dataTables.js'); ?>"></script>
	  <script src="<?php echo base_url('assets/vendor/datatables/dataTables.bootstrap4.js'); ?>"></script>

	  <!-- Custom scripts for all pages-->
	  <script src="<?php echo base_url('assets/js/sb-admin.min.js'); ?>"></script>
	  <?php //if($controller_name == 'enquiries'){?>	  
	  <script src="<?php //echo base_url('assets/js/custom.js'); ?>"></script>
	  <script src="<?php echo base_url('assets/vendor/datatables/dataTables.buttons.min.js'); ?>"></script>
	  <script src="<?php echo base_url('assets/vendor/datatables/vfs_fonts.js'); ?>"></script>
	  <script src="<?php echo base_url('assets/vendor/datatables/jszip.min.js'); ?>"></script>
	  <script src="<?php echo base_url('assets/vendor/datatables/dataTables.buttons.min.js'); ?>"></script>
	  <script src="<?php echo base_url('assets/vendor/datatables/buttons.html5.min.js'); ?>"></script>
	  <script src="<?php echo base_url('assets/vendor/bootstrap/js/bootstrap-datepicker.min.js'); ?>"></script>
	  <?php 
		//}
	  ?>
	  <script src="<?php echo base_url('assets/vendor/bootstrap/js/bootstrap-datepicker.min.js'); ?>"></script>
	  <script src="<?php echo base_url('assets/js/custom.js'); ?>"></script>
</head>
<?php if (isset($_SESSION['username']) && $_SESSION['logged_in'] === true) : ?>
<body id="page-top">
<?php else: ?>
<body class="bg-dark">
<?php endif;?>
  <?php if (isset($_SESSION['username']) && $_SESSION['logged_in'] === true) : ?>
  <nav class="navbar navbar-expand navbar-dark bg-light static-top">

    <a class="navbar-brand mr-1" href="<?php echo base_url().'dashboard';?>">GetMrHome Report</a>

    <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
      <i class="fas fa-bars"></i>
    </button>
    <!-- Navbar -->
    <ul class="navbar-nav ml-auto mr-0 mr-md-3 my-2 my-md-0">
      <li class="nav-item dropdown no-arrow mx-1">
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-user-circle fa-fw"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
          <?php if (isset($_SESSION['username']) && $_SESSION['logged_in'] === true) : ?>
          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
		  <?php else : ?>
		  <a class="dropdown-item" href="<?php echo base_url('dashboard/');?>">Login</a>
		  <?php endif;?>
        </div>
      </li>
    </ul>

  </nav>
  <div id="wrapper">
	<?php
		  $home_class = '';
		  $staffing_class = '';
		  $enq_class = '';
		  $download_class = '';
		  if(strtolower($controller_name) == 'home')
		  {
			$home_class = 'active';
		  }
		  if(strtolower($controller_name) == 'staffing')
		  {
			$staffing_class = 'active';
		  }
		  if(strtolower($controller_name) == 'enquiries')
		  {
			$enq_class = 'active';
		  }
		  if( strtolower($controller_name) == 'Exports')
		  {
			  $download_class = 'active';
		  }
	  ?>
    <!-- Sidebar -->
    <ul class="sidebar navbar-nav">
      <?php /*<li class="nav-item <?php echo $home_class;?>">
        <a class="nav-link" href="<?php echo base_url().'calcAdmin'; ?>">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Productivity Data</span>
        </a>
      </li>
	  <li class="nav-item <?php echo $staffing_class;?>">
        <a class="nav-link" href="<?php echo base_url().'calcAdmin/staffing'; ?>">
          <i class="fas fa-fw fa-user-alt"></i>
          <span>Staffing Data</span>
        </a>
      </li>
	  <li class="nav-item <?php echo $enq_class;?>">
        <a class="nav-link" href="<?php echo base_url().'calcAdmin/enquiries'; ?>">
          <i class="fas fa-fw fa-table"></i>
          <span>Enquiries</span>
        </a>
      </li>
	  <li class="nav-item <?php echo $download_class;?>">
        <a class="nav-link" href="<?php echo base_url().'calcAdmin/exports/createXLS'; ?>">
          <i class="fas fa-fw fa-download"></i>
          <span>Export Enquiries</span>
        </a>
      </li>*/?>
	</ul>
	<div id="content-wrapper">	
	<?php else: ?>
	<?php endif;?>