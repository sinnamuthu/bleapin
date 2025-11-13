$(document).ready(function() {
	var selectSimple = $('.js-select-simple');
	selectSimple.each(function () {
		var that = $(this);
		var selectBox = that.find('select');
		var selectDropdown = that.find('.select-dropdown');
		selectBox.select2({
			dropdownParent: selectDropdown
		});
	});
	var selectMultiple = $('.js-select-multiple');
	selectMultiple.each(function () {
		var that = $(this);
		var selectBox = that.find('select');
		var selectDropdown = that.find('.select-dropdown');
		selectBox.select2({
			multiple: true,
			placeholder: {
				id: '', // the value of the option
				text: '   Please choose the services'
			  },
			dropdownParent: selectDropdown,
			allowClear: true
		});
	});
	
	/* $.fn.addSelect2Items = function(items, config){
		var that = this;
		that.select2("destroy");
		for(var k in items){
			var data = items[k];
			that.append("<option value='"+ data.id +"'>"+ data.text +"</option>");
		}
		that.select2(config || {});
	}; */
	
	$("#services").on("select2:select", function (e) { 
           var data = e.params.data.text;
           if(data== 'End-to-end services'){
			/* $("#services").addSelect2Items([{id: 20, text: "Credit Balance"}, {id: 21, text: "Eligibility"}, {id: 22, text: "Statements"}, {id: 23, text: "Lock box"}, {id: 24, text: "Enrollment"}], {}); */
            $("#services > option").prop("selected","selected");
            $("#services").trigger("change");
           }
      });
	
	$("#select-all").on("click", function (e) 
	{ 
        $("#services > option").prop("selected","selected");
        $("#services").trigger("change");
    });
	
	$('#next-btn').click(function(){
		var form = $("#staffing_calculator");
		form.validate({
			ignore: ".ignore",
			errorClass: "error",
			errorElement: "span",
			onfocusout: false,
			onkeyup: false,
			rules: {
				"first_name": "required",
				"last_name": "required",
				"email_address": {
									required: true,
									email: true
								},
				"mobile_number": {
									number: true
								}
			},
			messages: {
				"first_name":
				{
					required: 'Please enter your first name'
				},
				"last_name":
				{
					required: 'Please enter your last name'
				},
				"email_address":
				{
					required: 'Please enter your emai address',
					email: 'Please enter a valid email address'
				},
				"mobile_number":
				{
					number: 'Please enter a valid contact number'
				}
			}
		});
		if (form.valid() == true){
			//alert($("#info_saved").val());
			if($("#info_saved").val() == 0)
			{
				saveUserData();
			}else
			{
				$("#next-btn").attr('disabled', false);
				$("#next-btn").css('poiter-events', 'auto');
				$("#next-btn").css('cursor', 'pointer');
				next_fs = $('#block2');
				current_fs = $('#block1');	
				$('#block2-prev-button-wrap').show();
				$('#block2-sumit-button-wrap').show();
				current_fs.toggle("slide")
				current_fs.hide();
				next_fs.toggle("slide")
				next_fs.show();
				return false;
			}			
			return false;
		}
	});

 	$('#prev-btn').click(function(){
		current_fs = $('#block2');
		next_fs = $('#block1');
		current_fs.toggle("slide")
		current_fs.hide();
		next_fs.toggle("slide")
		next_fs.show();	
		$("#staffing_calculator").attr('onsubmit','return goNext(this)');
		return false;
	});
	
	
	/* $("input[type=radio][name=calc_option]").change(function(){
		if (this.value == 1) {
			$("#saving-options-wrap").fadeIn(500);
			$("#spend_dollar_wrap").show();
		}
		else{
			$("#saving-options-wrap").fadeOut();
			$("#spend_dollar_wrap").hide();
		}
	}); */
	$("input[type=radio][name=calc_inner_option]").change(function(){
		if (this.value == 2) {
			$("#spend_dollar_wrap").hide();
			$("#spend_percentage_wrap").fadeIn(500);
		}
		else{
			$("#spend_percentage_wrap").fadeOut();
			$("#spend_dollar_wrap").show();
		}
	});
	
	
	
	$("#submit-btn").on('click',function()
	{
		
		$("#staffing_data_calculator").validate({
		ignore: ".ignore",
		errorClass: "error",
		errorElement: "span",
		onfocusout: false,
		onkeyup: false,
		rules: {
				"speciality": "required",
				"visits"    :{
								required: true,
								digits: true
							},
				"average_collection": {
					required: true,
					number: true
				 },
				"services[]": "required",
				//"calc_option": "required",
				"calc_inner_option": {
					required: true
				 },
				"current_spend": {
					required: function(element) {
					  return $("#spend-dollar").is(":checked");
					},
					number: true
				 },
				
				"current_spend_percentage": {
					required: function(element) {
					  return $("#spend-percentage").is(":checked");
					},
					number: true
				 }
			},
		messages: {
			"speciality":
			{
				required: 'Please select atleaset one speciality'
			},
			"visits":
			{
				required: 'Please enter the visit per month',
				digits: 'Please enter the valid digit'
			},
			"average_collection":
			{
				required: 'Please enter your monthly average collection in dollar',
				number: 'Please enter the valid number'
			},
			'services[]':
			{
				required: 'Please select the services'
			},
			"current_spend":
			{
				required: 'Please enter your current spend in dollar',
				number: 'Please enter the valid number'
			},			
			"current_spend_percentage":
			{
				required: 'Please enter your cost % paid for this service',
				number: 'Please enter the valid number'
			}
		},
		highlight: function(label) {
			if(label.text == 'OK!')
			{
				$(label).closest('.input-group').remove(label);
			}else
			{
				$(label).closest('.input-group').append(label);
			}
		}/* ,
		submitHandler: function(form) {
			if ( $( "span.error" ).length===false || $( "span.error" ).is(":visible")===false) {
				//e.preventDefault();
				calculateData(form);
				return false;
			}
			return false;
		} */
		});	
		if($("#staffing_data_calculator").valid())
		{
			calculateData();
			return false;
		}else
		{
			return false;
		}
	}); 
});

function resetFormValidator(formId) {
    $(formId).removeData('validator');
    $(formId).removeData('unobtrusiveValidation');
    //$.validator.unobtrusive.parse(formId);
}

function goNext(element)
{
	var first_name = $("#first_name").val();
	var last_name  = $("#last_name").val();
	var email_address = $("#email_address").val();
	if(first_name != '' && last_name != '' && email_address != '')
	{
		if($("#info_saved").val() == 0)
		{
			saveUserData();
			return false;
		}else
		{
			$("#next-btn").attr('disabled', false);
			$("#next-btn").css('poiter-events', 'auto');
			$("#next-btn").css('cursor', 'pointer');
			next_fs = $('#block2');
			current_fs = $('#block1');	
			$('#block2-prev-button-wrap').show();
			$('#block2-sumit-button-wrap').show();
			current_fs.toggle("slide")
			current_fs.hide();
			next_fs.toggle("slide")
			next_fs.show();
			$(element).removeAttr('onsubmit');
			return false;
		}
	}else
	{
		return false;
	}	
}


function saveUserData()
{
	$(".page-loader").show();
	var site_url = $("#site_url").val();
	// needs for recaptacha ready
	grecaptcha.ready(function() {
		// do request for recaptcha token
		// response is promise with passed token
		grecaptcha.execute('6LcYKbwZAAAAAAzHJqryW2B3-aELuUh35H4pufCI', {action: 'calculation'}).then(function(token) {
			$("#next-btn").attr('disabled', true);
			$("#next-btn").css('poiter-events', 'none');
			$("#next-btn").css('cursor', 'not-allowed');
			// add token to form
			$('#staffing_calculator').prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
				$.ajax({
				url: site_url+"saveUserData", 
				type: "POST",      
				data: $("#staffing_calculator").serialize(),
				cache: false,             
				processData: false,      
				success: function(data) { //$(".page-loader").hide();alert(data); console.log(data); return false;
						if(data)
						{
							$(".page-loader").hide();
							$("#info_saved").val(data);
							$("#info_id").val(data);
							$("#next-btn").attr('disabled', false);
							$("#next-btn").css('poiter-events', 'auto');
							$("#next-btn").css('cursor', 'pointer');
							next_fs = $('#block2');
							current_fs = $('#block1');	
							$('#block2-prev-button-wrap').show();
							$('#block2-sumit-button-wrap').show();
							current_fs.toggle("slide")
							current_fs.hide();
							next_fs.toggle("slide")
							next_fs.show();
							$("#staffing_calculator").removeAttr('onsubmit');
							$("#services").trigger("change");
							//resetFormValidator('#staffing_calculator');
							return false;
						}else
						{
							$(".page-loader").hide();
							$("#next-btn").attr('disabled', false);
							$("#next-btn").css('poiter-events', 'auto');
							$("#next-btn").css('cursor', 'pointer');
							return false;
						}						
					}
				});
				return false;
		});;
	});
}

function calculateData(element)
{
	var site_url = $("#site_url").val();
	$('#total_savings_element_value').text('');
	$('#total_savings_element').hide();
	$('#prolify_cost_element_value').text('');
	$('#prolify_cost_element').hide();
	$('#error_data').text('');
	$('#error_data').hide();
	$('#prolify_cost_notes').hide();
	$('#response-data').fadeOut(500);
	$(".page-loader").show();
	// needs for recaptacha ready
	$("#submit-btn").attr('disabled', true);
	$("#submit-btn").css('pointer-events', 'none');
	/* $("#submit-btn").css('cursor', 'not-allowed');
	$("#submit-btn").css('background-color', '#dedede'); */
	// add token to form
	$.ajax({
	url: site_url+"/getProliyData", 
	type: "POST",      
	data: $("#staffing_data_calculator").serialize(),
	cache: false,             
	processData: false,      
	success: function(data) { //$(".page-loader").hide();alert(data); console.log(data); return false;
			var response = $.parseJSON(data);
			//alert(response); console.log(response);
			if(response.STATUS == true)
			{
				$('#error_data').text('');
				$('#error_data').hide();
				/* if($("input[type=radio][name=calc_option]:checked"). val() == 1)
				{
					$('#total_savings_element_value').text(response.DATA.total_savings);
					$('#total_savings_element').show();
					$('#prolify_cost_element_value').val('');
					$('#prolify_cost_element').hide();
				}else
				{ */
					if(typeof response.DATA.total_savings != undefined && response.DATA.total_savings > 0)
					{
						$('#total_savings_element_value').text('');
						$('#total_savings_element').hide();
						$('#prolify_cost_element_value').text(response.DATA.total_savings+'%');
						$("#prev-btn").hide();
						$('#prolify_cost_element').show();
						$("#submit-btn").attr('disabled', false);
						$("#submit-btn").css('pointer-events', 'auto');
						/* $("#submit-btn").css('cursor', 'not-allowed');
						$("#submit-btn").css('background-color', '#dedede'); */
						/* $('#speciality').val('').trigger('change');
						$('#services').val([]).trigger('change');
						$('#staffing_data_calculator')[0].reset(); */
					}else
					{
						$('#prolify_cost_element_value').val('');
						$('#prolify_cost_element').hide();
						$('#total_savings_element_value').text('Cost is equivalent to your current spend');
						$('#total_savings_element').show();									
						$("#prev-btn").hide();
						$("#submit-btn").attr('disabled', false);
						$("#submit-btn").css('pointer-events', 'auto');
						/* $("#submit-btn").css('cursor', 'not-allowed');
						$("#submit-btn").css('background-color', '#dedede'); */
						/* $('#speciality').val('').trigger('change');
						$('#services').val([]).trigger('change');
						$('#staffing_data_calculator')[0].reset(); */
					}								
				/* } */
				//$('#prolify_cost_notes').show();														
				$('#response-data').fadeIn(500);
			}else
			{
				$('#total_savings_element_value').val('');
				$('#total_savings_element').hide();
				$('#prolify_cost_element_value').val('');
				$('#prolify_cost_element').hide();
				$('#prolify_cost_notes').hide();
				$('#error_data').text(response.DATA.message);
				$('#error_data').show();
				$("#submit-btn").attr('disabled', false);
				$("#submit-btn").css('pointer-events', 'auto');
				$("#submit-btn").css('cursor', 'pointer');
				$('#response-data').fadeIn(500);
			}	
			$(".page-loader").hide();
			$('html, body').animate({
				scrollTop: $("#response-data").offset().top
			}, 2000);
			return false;
		}
	});
	return false;
}