<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<div class="container-fluid">

        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="<?php echo base_url().'calcAdmin/staffing';?>">Staffing Data</a>
          </li>
          <li class="breadcrumb-item active">Edit</li>
        </ol>

        <!-- Icon Cards-->
        <div class="row">
			<div class="col-xl-12">
			<?php
				/* echo '<pre>';
				print_r($speacialities); print_r($services); */
			?>
			<?php 
			if(!empty($this->session->flashdata('error')))
			{
				echo '<div class="alert alert-danger" role="alert">';
				echo $this->session->flashdata('error');
				echo '</div>';
			}
			if(!empty($this->session->flashdata('success')))
			{
				echo '<div class="alert alert-success" role="alert">';
				echo $this->session->flashdata('success');
				echo '</div>';
			}
			?>
			<form name="save_data" method="post" action="<?php echo base_url().'calcAdmin/staffing/saveData/';?>">
				<input type="hidden" name="id" value="<?php echo $staffing_data['id'];?>" />
				<table class="table table-responsive">
					<thead>
						<tr>
							<th></th>
							<th>Staffing FTE's (%)</th>
							<th>Average Cost per FTE in INR per Month</th>
							<!--<th>Indirect Cost/ FTE (Approx numbers)</th>-->
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								Associates *
							</td>
							<td>
								<input type="text" class="form-control input-sm" id="associate-data" name="associate_data" placeholder="" value="<?php echo $staffing_data['associate_data'];?>" required>
							</td>
							<td>
								<input type="text" class="form-control input-sm" id="associate-avg-cost" name="associate_avg_cost" placeholder="" value="<?php echo $staffing_data['associate_avg_cost'];?>" required>
							</td>
							<?php /*<td>
								<input type="text" class="form-control input-sm" id="associate-indirect-cost" name="associate_indirect_cost" placeholder="" value="<?php echo $staffing_data['associate_indirect_cost'];?>" required>
							</td> */?>
						</tr>
						<tr>
							<td>
								QA / Trainer *
							</td>
							<td>
								<input type="text" class="form-control input-sm" id="qat-data" name="qat_data" placeholder="" value="<?php echo $staffing_data['qat_data'];?>" required>
							</td>
							<td>
								<input type="text" class="form-control input-sm" id="qat-avg-cost" name="qat_avg_cost" placeholder="" value="<?php echo $staffing_data['qat_avg_cost'];?>" required>
							</td>
							<?php /*<td>
								<input type="text" class="form-control input-sm" id="qat-indirect-cost" name="qat_indirect_cost" placeholder="" value="<?php echo $staffing_data['qat_indirect_cost'];?>" required>
							</td>*/?>
						</tr>
						<tr>
							<td>
								TL *
							</td>
							<td>
								<input type="text" class="form-control input-sm" id="tl-data" name="tl_data" placeholder="" value="<?php echo $staffing_data['tl_data'];?>" required>
							</td>
							<td>
								<input type="text" class="form-control input-sm" id="tl-avg-cost" name="tl_avg_cost" placeholder="" value="<?php echo $staffing_data['tl_avg_cost'];?>" required>
							</td>
							<?php /*<td>
								<input type="text" class="form-control input-sm" id="tl-indirect-cost" name="tl_indirect_cost" placeholder="" value="<?php echo $staffing_data['tl_indirect_cost'];?>" required>
							</td>*/?>
						</tr>
						<tr>
							<td>
								Manager and SG&A *
							</td>
							<td>
								<input type="text" class="form-control input-sm" id="manager-data" name="manager_data" placeholder="" value="<?php echo $staffing_data['manager_data'];?>" required>
							</td>
							<td>
								<input type="text" class="form-control input-sm" id="manager-avg-cost" name="manager_avg_cost" placeholder="" value="<?php echo $staffing_data['manager_avg_cost'];?>" required>
							</td>
							<?php /*<td>
								<input type="text" class="form-control input-sm" id="manager-indirect-cost" name="manager_indirect_cost" placeholder="" value="<?php echo $staffing_data['manager_indirect_cost'];?>" required>
							</td>*/?>
						</tr>
						<tr>
							<td>
								Support *
							</td>
							<td>
								<input type="text" class="form-control input-sm" id="support-data" name="support_data" placeholder="" value="<?php echo $staffing_data['support_data'];?>" required>
							</td>
							<td>
								<input type="text" class="form-control input-sm" id="support-avg-cost" name="support_avg_cost" placeholder="" value="<?php echo $staffing_data['support_avg_cost'];?>" required>
							</td>
							<?php /*<td>
								<input type="text" class="form-control input-sm" id="support-indirect-cost" name="support_indirect_cost" placeholder="" value="<?php echo $staffing_data['support_indirect_cost'];?>" required>
							</td>*/?>
						</tr>
						<tr style="background: #e9ecef;">
							<td>
								USA Rate *
							</td>
							<td>
								<input type="text" class="form-control input-sm" id="usa-rate" name="usa_rate" placeholder="" value="<?php echo $staffing_data['usa_rate'];?>" required>
							</td>
							<td></td>
							<td></td>
						</tr>
						<tr style="background: #e9ecef;">
							<td>
								Indirect cost per FTE *
							</td>
							<td>
								<input type="text" class="form-control input-sm" id="indirect-cost-per-fte" name="indirect_cost_per_fte" placeholder="" value="<?php echo $staffing_data['indirect_cost_per_fte'];?>" required>
							</td>
							<td></td>
							<td></td>
						</tr>
						<tr style="background: #e9ecef;">
							<td>
								Product cost per transaction *
							</td>
							<td>
								<input type="text" class="form-control input-sm" id="product-cost" name="product_cost" placeholder="" value="<?php echo $staffing_data['product_cost'];?>" required>
							</td>
							<td></td>
							<td></td>
						</tr>
						<tr style="background: #e9ecef;">
							<td>
								Prolify Margin (%) *
							</td>
							<td>
								<input type="text" class="form-control input-sm" id="prolify-margin" name="prolify_margin" placeholder="" value="<?php echo $staffing_data['prolify_margin'];?>" required>
							</td>
							<td></td>
							
							<td align="right">
									<?php
									$csrf = array(
														'name' => $this->security->get_csrf_token_name(),
														'hash' => $this->security->get_csrf_hash()
												);
									?>
									<input type="hidden" name="<?php echo $csrf['name'];?>" value="<?php echo $csrf['hash'];?>" />
									<a href="<?php echo base_url().'calcAdmin/staffing';?>" class="btn btn-secondary">Cancel</a>
									<button type="submit" class="btn btn-primary">Save</button>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
        </div>
	</div>
</div>