import React, { Component } from 'react';
import config from '../.././Config';
import Footer from '../.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class Reporting extends Component {
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
        			<title>Reporting &amp; Analytics | Search Engine Marketing | Online campaign</title>
        			<meta name="description" content="We at Bleap regularly review the performance of your campaign, and share with your team. We transparently report on all the work performed during the month. We present campaign results in the competitive context and show you how your competitors are planning and executing their campaigns."/>
					<link rel="canonical" href="https://www.bleap.in/services/search-engine-optimization/reporting-analytics" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Reporting &amp; Analytics | Search Engine Marketing | Online campaign" />
					<meta property="og:description" content="We at Bleap regularly review the performance of your campaign, and share with your team. We transparently report on all the work performed during the month. We present campaign results in the competitive context and show you how your competitors are planning and executing their campaigns." />
					<meta property="og:url" content="https://www.bleap.in/services/search-engine-optimization/reporting-analytics/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/reporting.jpg"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="We at Bleap regularly review the performance of your campaign, and share with your team. We transparently report on all the work performed during the month. We present campaign results in the competitive context and show you how your competitors are planning and executing their campaigns." />
					<meta name="twitter:title" content="Reporting &amp; Analytics | Search Engine Marketing | Online campaign" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/reporting.jpg"}/>
        		</MetaTags>
	            <section className="sub-page services gen report">
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
											<li className="act">Reporting & Analytics</li>
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
											<h1>Reporting & Analytics</h1>
										</section>
											<figure><img src={config.APP_URL+"/public/home/images/reporting.jpg"} alt="reporting" className="img-responsive" /></figure>
											<p>We regularly review the performance of your campaign, and share with your team. We collaborate with your Technical, Brand and PR teams to continuously optimize campaigns.</p>
											<p>We cull data from myraid sources like Screaming frog, MoZ, Semrush, GT Metrix, Google (Analytics, Business, Search Console, Ad words, Keyword planner, Ad Preview Tool, Display Planner, Youtube console), Facebook Analytics, Hootsuite and many more. What gets presented to you is beyond the impressions and clicks, likes and shares and the routine stuff. We review this data to derive the most meaningful and high impact insights that help shape our business in the short term as well as medium term.</p>
											<p>We transparently report on all the work performed during the review period (typically a month). We present campaign results in the competitive context and show you how your competitors are planning and executing their campaigns.</p>
											<p>We are driven by our ambition to bring accountability in marketing. We seek data from your team about conversions, revenue and upsell & cross-sell efforts to measure the lifetime value of customers acquired online through our efforts. We present a business dashboard aligned to our important KPI's.</p>
											<h3>GA Certifications</h3>
											<p>We are a Google Search and Analytics certified Company. This means that our team is certified in Google Analytics, including measurement, implementation planning, configuration, and administration. Learn more about what it means to be a Google Partner.</p>
											<h3>Click To Call Tracking</h3>
											<p>We use Click to Call functionality for dynamic call tracking. We can report on the number of phone call leads generated by organic search to help measure our shared success. We create plugins and also write web service to connect and archive the call disposition and call recordings in your CRM. Your Call Centre Executives can attend to these calls allowing you to evaluate your Call Centre's performance or give us feedback on lead quality.</p>
											<h3>Online Advertising</h3>
											<p>We are the classical search lead agency. We love studying consumer behavior and always want to dig deeper to run analytics to understand what action on our site or campaign drives the behavior. Running great search campaigns is the best way to demonstrate our passion for microscopic execution skills.</p>
											<p>Search (PPC) Campaigns throw large number of data points through the various touch points of the Sales Funnel. It is both prescriptive and predictive both at the same time. It offers the best correlation with the online business revenue. It's paid. It's measurable. It delivers results.</p>
											<h3>Google Adwords Campaign</h3>
											<p>Adwords(PPC) Campaign is the most cost-efficient way to find new customers for your business... <a href="javascript:;">Read more...</a></p>
											<h3>Google Display Campaign</h3>
											<p>Google Display Campaign is the best medium to create brand awareness and reach... <a href="javascript:;">Read more...</a></p>
											<h3>Social Advertising Campaign</h3>
											<p>Advertising across social media platforms like Facebook, Instagram, LinkedIn, Twitter, SnapChat, Pinterest e.t.c is a great way to build brand awareness, generate leads and engage customers.....</p>
											<h3>Social Media Management</h3>
											<p>Managing social presence for your business across Facebook, Instagram, Twitter, Linkedin, Pinterest builds online reputation for your brand...</p>
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
export default Reporting;