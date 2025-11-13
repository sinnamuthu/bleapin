import React, { Component } from 'react';
import config from '../.././Config';
import Footer from '../.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class LocalBusiness extends Component {
	componentDidMount(){
			$('.services .hdg .ser-menu').click(function(){
				if($(this).hasClass('open')){
					$(this).removeClass('open');
					$('ul.hidden2').stop().slideUp(500);
				}
				else{
					$(this).addClass('open');
					$('ul.hidden2').stop().slideDown(500);		
				}		
			});
		}
    render() {
        return (
        	<React.Fragment>
        		<MetaTags>
        			<title>Google Local Business listing | SEO Services chennai, Mumbai, Pune and Bengaluru, India</title>
        			<meta name="description" content="In our Local Business Search campaign, we set up and manage your listing in Google Maps, Google My Business, Facebook Local Business, Shopify and other 3rd party aggregators active in your industry. We will also work with you to build positive online reviews which drive customers to you."/>
					<link rel="canonical" href="https://www.bleap.in/services/search-engine-optimization/local-business-listing" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Google Local Business listing | SEO Services chennai, Mumbai, Pune and Bengaluru, India" />
					<meta property="og:description" content="In our Local Business Search campaign, we set up and manage your listing in Google Maps, Google My Business, Facebook Local Business, Shopify and other 3rd party aggregators active in your industry. We will also work with you to build positive online reviews which drive customers to you." />
					<meta property="og:url" content="https://www.bleap.in/services/search-engine-optimization/local-business-listing/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/local-business.jpg"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="In our Local Business Search campaign, we set up and manage your listing in Google Maps, Google My Business, Facebook Local Business, Shopify and other 3rd party aggregators active in your industry. We will also work with you to build positive online reviews which drive customers to you." />
					<meta name="twitter:title" content="Google Local Business listing | SEO Services chennai, Mumbai, Pune and Bengaluru, India" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/local-business.jpg"}/>
        		</MetaTags>
	            <section className="sub-page services gen local">	
							<section className="intt">				
								<section className="container">
									<section className="breadcrumbs layout1">
										<ul>
											<li><Link to='/'>Home</Link></li>
											<li> > </li>
											<li><Link to={config.ROUTE_URL+'/services'}>Services</Link></li>
											<li> > </li>
											<li><Link to={config.ROUTE_URL+'/services/search-engine-optimization'}>Search Engine Optimization</Link></li>
											<li> > </li>
											<li className="act">Local Business Listing</li>
										</ul>
									</section>
									<section className="item-cnt clearfix">
										<section className="item-cnt-in">				
										<section className="hdg sec">		
									<aside className="ser-menu">
										<div className="sub-menu"></div>
										<ul className="hidden2">
											<li><Link to={config.ROUTE_URL + '/services/search-engine-optimization/audience-research/'}>Audience Research</Link></li>
											<li><Link to={config.ROUTE_URL + '/services/search-engine-optimization/on-page-optimization/'}>On-page Optimization</Link></li>
											<li><Link to={config.ROUTE_URL + '/services/search-engine-optimization/off-page-optimization/'}>Off-page Optimization</Link></li>
											<li><Link to={config.ROUTE_URL + '/services/search-engine-optimization/reporting-analytics/'}>Reporting &amp; Analytics</Link></li>
											<li><Link to={config.ROUTE_URL + '/services/search-engine-optimization/local-business-listing/'}>Local Business Listing</Link></li>
											<li><Link to={config.ROUTE_URL + '/services/search-engine-optimization/reputation-management/'}>Reputation Management</Link></li>
										</ul>
									</aside>									
											<h1>Local Business Listing</h1>
										</section>
											<figure><img src={config.APP_URL+"/public/home/images/local-business.jpg"} alt="local-business" className="img-responsive" /></figure>
											<p>If you are a restaurant, a coaching institute, a retail showroom or a service centre, a top listing on Google local business and Google maps is an absolute must for your business success. Your business needs to appear on the mobile screen of your prospects.</p>
											<p>In our Local Business Search campaign, we set up and manage your listing in Google Maps, Google My Business, Facebook Local Business, Shopify and other 3rd party aggregators active in your industry. We will also work with you to build positive online reviews which drive customers to you. Want to know more about local search campaign in detail, such as local content, multi-location optimization and localized rank reporting, check out our local search page.</p>
											<h3>Building and Optimizing Listings</h3>
											<p>We work with you to improve the quantity, quality, and consistency of your business listings. This is a critical parameter for top rankings in local search. We list your business on sites such as Google My Business, Facebook Local Business and others as well as your industry-specific sites (e.g Zomato for restaurants)to promote your business. We enrich existing listings to include photos, descriptions, reviews, ratings, influencers, website listings and accurate location markers. Having worked with various clients, our team identifies and fixes common errors like NAP (name/address/phone number) inconsistencies across all listings and citations.</p>								
											<h3>Online Reviews</h3>
											<p>Displaying a positive review from a customer has 2 payoffs. It creates many new customers. It also is a great tool for local Indian retail and services businesses to compete against organized large retailers. SERP's for local ranking gives a lot of weightage to online rating and reviews. We roll up our sleeves and do hourly monitoring, responding promptly and personally, and running campaigns with your team to seek reviews from customers at all touch points of their journey. Ask Us how online reviews can be incorporated into a reputation management strategy for your business.</p>
											<h3>Local Content Campaigns</h3>
											<p>Local Search Campaigns focus on relevant local links organically. If you are a Clinic or a Doctor practicing independently, building natural local links is the key focus for running a local search campaign. Creating simple local content like advisory on flu outbreak in your area due to water contamination is a great way to build these local links. We engage with local websites, news affiliates, and bloggers in your area to create engaging content relevant to your brand. Learn more about our content marketing services.</p>
											<h3>Dashboard</h3>
											<p>Our dashboard for local search campaigns offers insights about your business performance and service levels. We report both localized rank amongst your defined key competitors and your mobile search rank. We optimize both your website and campaigns for local search.</p>
										</section>
									</section>
								</section>
							</section>		
				</section>			
				<Footer />
			</React.Fragment>

        );
    }
}
export default LocalBusiness;