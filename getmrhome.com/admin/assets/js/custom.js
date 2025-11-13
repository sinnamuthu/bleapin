jQuery(document).ready(function(){
	var fullUrl = window.location.protocol + "//" + window.location.hostname;
	//alert(fullUrl);
	
	jQuery('#delivery_date').datepicker({
		uiLibrary: 'bootstrap4',
		format: 'dd-mm-yyyy',
		iconsLibrary: 'fontawesome'
	});
	jQuery('#vechicle_number').keyup(function(){
		this.value = this.value.toUpperCase();
	});
	jQuery("#night_halt,#day_halt,#air_package,#unloading_charge,#repacking_charge").on('keypress',function(e){
		return isNumber(event, this);		
	});
	jQuery("#night_halt, #day_halt, #air_package, #air_parking, #loading_charge, #unloading_charge, #repacking_charge,  #vechicle_quantity").on('focusout',function(e){
		
		var night_halt 			= jQuery("#night_halt").val();
		var day_halt 			= jQuery("#day_halt").val();
		var air_package 		= jQuery("#air_package").val();
		var air_parking			= jQuery("#air_parking").val();
		var loading_charge 		= jQuery("#loading_charge").val();
		var unloading_charge 	= jQuery("#unloading_charge").val();
		var repacking_charge 	= jQuery("#repacking_charge").val();
		var quoted_price		= jQuery("#rate").val();
		var total_vechicles		= jQuery("#vechicle_quantity").val();
		if(total_vechicles && quoted_price)
		{
			var total = 0.00;
			var additonal_charges = 0.00;
			var subtotal = parseFloat(total_vechicles) * parseFloat(quoted_price); //console.log("subtotal"+subtotal);
			if(night_halt)
			{
				additonal_charges = parseFloat(additonal_charges) + parseFloat(night_halt);
			}
			if(day_halt)
			{
				additonal_charges = parseFloat(additonal_charges) + parseFloat(day_halt);
			}			
			if(air_package)
			{
				additonal_charges = parseFloat(additonal_charges) + parseFloat(air_package);
			}
			if(air_parking)
			{
				additonal_charges = parseFloat(additonal_charges) + parseFloat(air_parking);
			}
			if(loading_charge)
			{
				additonal_charges = parseFloat(additonal_charges) + parseFloat(loading_charge);
			}
			if(unloading_charge)
			{
				additonal_charges = parseFloat(additonal_charges) + parseFloat(unloading_charge);
			}
			if(repacking_charge)
			{
				additonal_charges = parseFloat(additonal_charges) + parseFloat(repacking_charge);
			}
			if(subtotal)
			{
				total = parseFloat(subtotal);
			}
			if(additonal_charges)
			{
				total = parseFloat(subtotal) + parseFloat(additonal_charges);
			}			
			jQuery("#total_price").val(total);
		}
	});

	jQuery("#quote_id").change(function(){
		var selected_value = jQuery(this).val();
		if(selected_value)
		{
			var mov_from = jQuery('option:selected', this).attr('data-mov-from');
			var mov_to = jQuery('option:selected', this).attr('data-mov-to');
			var vechicle_type = jQuery('option:selected', this).attr('data-vec-type');
			var price = jQuery('option:selected', this).attr('data-price');
			jQuery("#mov_from").val(mov_from);
			jQuery("#mov_to").val(mov_to);
			jQuery("#vechicle_type").val(vechicle_type);
			jQuery("#rate").val(price);
		}else
		{
			jQuery("#mov_from").val('');
			jQuery("#mov_to").val('');
			jQuery("#vechicle_type").val('');
			jQuery("#rate").val('');
		}
	});
});



function getCustomerAddressQuote(customer_id,url)
{
	//alert(customer_id);
	if(customer_id)
	{
		jQuery.ajax({
		url: url,
		dataType: 'text',
		type: 'post',
		contentType: 'application/x-www-form-urlencoded',
		data: {customer_id:customer_id},
		success: function( data, textStatus, jQxhr ){
			var t = JSON.parse(data);
			jQuery("#billing_address").val(t.address);
			if(t.quotes != null && t.quotes.length !== 0){
				jQuery.each(t.quotes, function( key, value ) {
				  var quote_name = value.movement_from +' - '+ value.movement_to+' - '+ value.vechicle_type;
				  jQuery('#quote_id').append('<option value="'+value.id+'" data-mov-from = "'+value.movement_from+'" data-mov-to = "'+value.movement_to+'" data-vec-type = "'+value.vechicle_type+'" data-price = "'+value.price+'">'+quote_name.toUpperCase()+'</option>');
				  jQuery('#quote_id').selectpicker('refresh');
				});
			}else{
				alert("Please create atleast one quote for this customer");
			}			
			//console.log(t.quotes);
		},
		error: function( jqXhr, textStatus, errorThrown ){
			console.log( errorThrown );
		}
		});
	}
}

function makePeding(bill_id)
{
	//alert(customer_id);
	if(bill_id)
	{
		jQuery.ajax({
		url: url,
		dataType: 'text',
		type: 'post',
		contentType: 'application/x-www-form-urlencoded',
		data: {bill_id:bill_id},
		success: function( data, textStatus, jQxhr ){
			/*var t = JSON.parse(data);
			jQuery("#billing_address").val(t.address);
			if(t.quotes != null && t.quotes.length !== 0){
				jQuery.each(t.quotes, function( key, value ) {
				  var quote_name = value.movement_from +' - '+ value.movement_to+' - '+ value.vechicle_type;
				  jQuery('#quote_id').append('<option value="'+value.id+'" data-mov-from = "'+value.movement_from+'" data-mov-to = "'+value.movement_to+'" data-vec-type = "'+value.vechicle_type+'" data-price = "'+value.price+'">'+quote_name.toUpperCase()+'</option>');
				  jQuery('#quote_id').selectpicker('refresh');
				});
			}else{
				alert("Please create atleast one quote for this customer");
			}	*/		
			//console.log(t.quotes);
		},
		error: function( jqXhr, textStatus, errorThrown ){
			console.log( errorThrown );
		}
		});
	}
}

function convertNumberToWords(amount) {
	if(amount)
	{
		var words = new Array();
		words[0] = '';
		words[1] = 'One';
		words[2] = 'Two';
		words[3] = 'Three';
		words[4] = 'Four';
		words[5] = 'Five';
		words[6] = 'Six';
		words[7] = 'Seven';
		words[8] = 'Eight';
		words[9] = 'Nine';
		words[10] = 'Ten';
		words[11] = 'Eleven';
		words[12] = 'Twelve';
		words[13] = 'Thirteen';
		words[14] = 'Fourteen';
		words[15] = 'Fifteen';
		words[16] = 'Sixteen';
		words[17] = 'Seventeen';
		words[18] = 'Eighteen';
		words[19] = 'Nineteen';
		words[20] = 'Twenty';
		words[30] = 'Thirty';
		words[40] = 'Forty';
		words[50] = 'Fifty';
		words[60] = 'Sixty';
		words[70] = 'Seventy';
		words[80] = 'Eighty';
		words[90] = 'Ninety';
		amount = amount.toString();
		var atemp = amount.split(".");
		var number = atemp[0].split(",").join("");
		var n_length = number.length;
		var words_string = "";
		if (n_length <= 9) {
			var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
			var received_n_array = new Array();
			for (var i = 0; i < n_length; i++) {
				received_n_array[i] = number.substr(i, 1);
			}
			for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
				n_array[i] = received_n_array[j];
			}
			for (var i = 0, j = 1; i < 9; i++, j++) {
				if (i == 0 || i == 2 || i == 4 || i == 7) {
					if (n_array[i] == 1) {
						n_array[j] = 10 + parseInt(n_array[j]);
						n_array[i] = 0;
					}
				}
			}
			value = "";
			for (var i = 0; i < 9; i++) {
				if (i == 0 || i == 2 || i == 4 || i == 7) {
					value = n_array[i] * 10;
				} else {
					value = n_array[i];
				}
				if (value != 0) {
					words_string += words[value] + " ";
				}
				if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
					words_string += "Crores ";
				}
				if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
					words_string += "Lakhs ";
				}
				if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
					words_string += "Thousand ";
				}
				if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
					words_string += "Hundred and ";
				} else if (i == 6 && value != 0) {
					words_string += "Hundred ";
				}
			}
			words_string = words_string.split("  ").join(" ");
		}
		//document.getElementById("total_price_text").innerHTML = words_string;
	}else
	{
		//document.getElementById("total_price_text").innerHTML = '';
	}
}
function isNumber(evt, element) {

	var charCode = (evt.which) ? evt.which : event.keyCode

	if (
		(charCode != 45 || $(element).val().indexOf('-') != -1) &&      // “-” CHECK MINUS, AND ONLY ONE.
		(charCode != 46 || $(element).val().indexOf('.') != -1) &&      // “.” CHECK DOT, AND ONLY ONE.
		(charCode < 48 || charCode > 57))
		return false;

	return true;
}  

function selectServiceData(sp_id, url)
{
	if(sp_id)
	{
		jQuery("#service-data").fadeOut();
		jQuery.ajax({
		url: url,
		dataType: 'text',
		type: 'post',
		contentType: 'application/x-www-form-urlencoded',
		data: {sp_id:sp_id},
		success: function( data, textStatus, jQxhr ){ 
				
				jQuery("#service-data").html(data);
				jQuery("#service-data").fadeIn('medium');
				jQuery("#data-form-submit-wrap").show();
			/* var t = JSON.parse(data);
			jQuery("#billing_address").val(t.address);
			if(t.quotes != null && t.quotes.length !== 0){
				jQuery.each(t.quotes, function( key, value ) {
				  var quote_name = value.movement_from +' - '+ value.movement_to+' - '+ value.vechicle_type;
				  jQuery('#quote_id').append('<option value="'+value.id+'" data-mov-from = "'+value.movement_from+'" data-mov-to = "'+value.movement_to+'" data-vec-type = "'+value.vechicle_type+'" data-price = "'+value.price+'">'+quote_name.toUpperCase()+'</option>');
				  jQuery('#quote_id').selectpicker('refresh');
				});
			}else{
				alert("Please create atleast one quote for this customer");
			} */			
			//console.log(t.quotes);
		},
		error: function( jqXhr, textStatus, errorThrown ){
			console.log( errorThrown );
		}
		});
	}else
	{
		jQuery("#data-form-submit-wrap").hide();
		jQuery("#service-data").html('');
		jQuery("#service-data").fadeOut();
	}
}