<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<div class="container-fluid">
        <!-- Icon Cards-->
        <div class="row">
			<div class="col-xl-12">
				<div class="card bg-white mb-3">
				  <div class="card-header">
					<i class="fas fa-table"></i>
					All Enquiries
				  </div>
				  <?php if(!empty($all_enquiries)){?>
				  <div class="card-body">
					<div class="table-responsive">
					  <table class="table table-bordered" id="enquiryTable" width="100%" cellspacing="0">
						<thead>
						  <tr>
							<th>#</th>
							<th>Name</th>
							<th>Contact Number</th>
							<th>Current TV Provider</th>
							<th>Wireless Provider</th>
							<th>State</th>
							<th>Zipcode</th>							
							<th>Terms & Conditions</th>							
							<th>IP Address</th>							
							<th>Submitted Date</th>							
						  </tr>
						</thead>
						<tbody>
							<?php foreach($all_enquiries as $key=>$customer){
								echo '<tr>';
								echo '<td>'.($key+1).'</td>';
								echo '<td>'.$customer["name"].'</td>';
								echo '<td>'.$customer["contact_number"].'</td>';
								echo '<td>'.$customer["tv_provider"].'</td>';
								echo '<td>'.$customer["wireless_provider"].'</td>';
								echo '<td>'.$customer["state"].'</td>';
								echo '<td>'.$customer["zipcode"].'</td>';
								if($customer["consent"])
								{
									echo '<td>Accepted</td>';
								}else
								{
									echo '<td>Declined</td>';
								}
								echo '<td>'.$customer["ip_address"].'</td>';
								echo '<td>'.date('m-d-Y h:i A',strtotime($customer["created_date_time"])).'</td>';
								echo '</tr>';
							}?>
						</tbody>
					  </table>
					</div>
				 </div>	
			  <?php } else {?>
			  <p></p>
			  <p class="text-center">No enquiries available!</p>
			  <?php } ?>
			</div>
        </div>
</div>
<style type="text/css">
#enquiryTable_length, .dt-buttons{float:left; margin-right:20px;}
</style>
<script type="text/javascript">
jQuery(document).ready(function() {
	var buttonCommon = {
        exportOptions: {
			columns: ':not(.notexport)',
            format: {
                body: function ( data, row, column, node ) {
                    // Strip $ from salary column to make it numeric
                    return column === 9 ?
                        data :
                        data;
					
                }
            }
        }
    };
	jQuery('#enquiryTable thead tr:eq(1) th').each( function () {
		//alert($(this).index());
		var cell_index = jQuery(this).index();
		if(cell_index != 0 && cell_index != 9){
			var title = jQuery('#enquiryTable thead tr:eq(0) th').eq( jQuery(this).index() ).text();
			jQuery(this).html( '<input type="text" placeholder="Search '+title+'" />' );
		}
    } ); 
	var table = jQuery('#enquiryTable').DataTable({
        orderCellsTop: true,
		dom: 'lBftip',
		bLengthChange : true, //thought this line could hide the LengthMenu
		bInfo:true,
		lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
		buttons: [     
            jQuery.extend( true, {}, buttonCommon, {
				text: 'Export to Excel',
				'className': 'btn btn-info',
                extend: 'excelHtml5'
            } )
        ]
    });
	table.columns().every(function (index) {
        jQuery('#enquiryTable thead tr:eq(1) th:eq(' + index + ') input').on('keyup change', function () {
            table.column(jQuery(this).parent().index() + ':visible')
                .search(this.value)
                .draw();
        });
    });
  //jQuery('#enquiryTable').DataTable();
});
</script>