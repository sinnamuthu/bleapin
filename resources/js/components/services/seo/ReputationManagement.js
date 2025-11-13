import React, { Component } from 'react';
import config from '../.././Config';
import Footer from '../.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class ReputationManagement extends Component {
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
        			<title>Reputation Management Services | Online Marketing Agency</title>
        			<meta name="description" content="Bleap team is adept at managing your business&#039; online reputation. Our experts use online PR, Brand Monitoring and Social Listening. Contact us to know more."/>
					<link rel="canonical" href="https://www.bleap.in/services/search-engine-optimization/reputation-management" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Reputation Management Services | Online Marketing Agency" />
					<meta property="og:description" content="Bleap team is adept at managing your business&#039; online reputation. Our experts use online PR, Brand Monitoring and Social Listening. Contact us to know more." />
					<meta property="og:url" content="https://www.bleap.in/services/search-engine-optimization/reputation-management/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/reputation.jpg"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="Bleap team is adept at managing your business&#039; online reputation. Our experts use online PR, Brand Monitoring and Social Listening. Contact us to know more." />
					<meta name="twitter:title" content="Reputation Management Services | Online Marketing Agency" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/reputation.jpg"} />
        		</MetaTags>
	            <section className="sub-page services reputation">
				  <section className="int">				
						<section className="container">	
							<section className="breadcrumbs layout2">
										<ul>
											<li><Link to='/'>Home</Link></li>
											<li> > </li>
											<li><Link to={config.ROUTE_URL+'/services'}>Services</Link></li>
											<li> > </li>
											<li><Link to={config.ROUTE_URL+'/services/search-engine-optimization'}>Search Engine Optimization</Link></li>
											<li> > </li>
											<li className="act">Reputation Management</li>
										</ul>
									</section>			
							<section className="item-cnt">
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
									<h1>Reputation Management</h1>
								</section>
								<p>Research proves that in today’s connected world your online reputation has a measurable impact on your balance sheet. Both Top line (Customer Acquisition) and Bottom line (Profitability) are impacted by reputation. We can help you create brand stature and trust with new and potential customers. All this while we manage and grow your reputation amongst current customers. We team up with our in-house PR experts as well as your PR partners to manage your reputation.</p>
									<figure>
										<img src={config.APP_URL+"/public/home/images/reputation.jpg"} alt="reputation" className="img-responsive"/>
									</figure>
								<h3>Online Reviews</h3>
								<p>Online reviews make or break your online reputation. It affects all - Start-ups, medium and large businesses. Emerging brands and even well placed large brands are all chasing reviews. 1 positive review online is worth 140 customers served by your business. We can share success stories of how we helped clients manage their online reviews through smart thinking and hard work. Regular monitoring, to responding professionally and promptly, to seeking positive reviews from delighted customers proactively, we’ done it all.</p>
								<h3>Online PR</h3>
								<p>Our mandate for Online PR includes content placements and promotions, placing sponsored advertorials, syndicated articles or sponsored editorial to reverse SEO etc. We do everything to promote more positive content about your brand. We have years of ghost writing experience to promote your leadership as industry thought leaders. If an individual or a company is misrepresenting or maligning your brand online, we can even guide you in taking the necessary legal steps to clear your name. We can help you manage the appearance of your brand across a variety of digital channels.</p>
								<h3>Brand Monitoring</h3>
								<p>We use brand monitoring and social listening tools to monitor and tell you what people are taking about your brand online. We use tools to gauge social mood. We collaborate with your Brand Managers to conceive funny, interesting and viral content. We propagate these Audio -Visual and Textual content about your brand and strengthen brand recall.</p>
								<p>If your company is looking to boost its online image, contact BLeap today to learn how reputation management can be help your brand become the best in your industry.</p>
							</section>
						</section>
	                </section>
	           	</section>	
				<Footer />
			</React.Fragment>

        );
    }
}
export default ReputationManagement;