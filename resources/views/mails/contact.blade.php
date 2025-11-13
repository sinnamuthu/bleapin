Name: {{$formData['name']}} <br/>
Phone: {{$formData['phone']}} <br/>
Email: <a href="mailto:{{$formData['email']}}?Subject=Bleap%20Reply">{{ $formData['email'] }}</a><br/>
City: {{$formData['city']}} <br/>
Message: {{$formData['message']}} <br/>
Intereseted in: 
	@if ($formData['responsive'])
		Responsive Website Design & Development <br/>
	@endif
	@if ($formData['eCommerce'])
		e-Commerce Solutions(Shopify, Magento, Woocommerce) <br/>
	@endif
	@if ($formData['digitalMarketing'])
		Digital Marketing <br/>
	@endif
	@if ($formData['socialMedia'])
		Social Media Marketing <br/>
	@endif
	@if ($formData['seo'])
		Search Engine Optimization(SEO) <br/>
	@endif
	@if ($formData['goodleAds'])
		Search Engine Marketing(Google Ads) <br/>
	@endif
	@if ($formData['videoContent'])
		Video Content Development <br/>
	@endif
	@if ($formData['strategic'])	
		Strategic Marketing <br/>
	@endif