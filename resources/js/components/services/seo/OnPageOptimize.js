import React, { Component } from 'react';
import config from '../.././Config';
import Footer from '../.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class OnPageOptimize extends Component {
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
        			<title>On Page Optimization | Organic SEO Services Chennai, Mumbai, Pune and Bangalore, India</title>
        			<meta name="description" content="Bleap takes a classical and holistic approach to optimizing campaigns. We not only improve your website&#039;s search rankings, but also improve the overall site experience for your customers. We do technical optimization, content optimization and conversion optimization to get best results."/>
					<link rel="canonical" href="https://www.bleap.in/services/search-engine-optimization/on-page-optimization" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="On Page Optimization | Organic SEO Services Chennai, Mumbai, Pune and Bangalore, India" />
					<meta property="og:description" content="Bleap takes a classical and holistic approach to optimizing campaigns. We not only improve your website&#039;s search rankings, but also improve the overall site experience for your customers. We do technical optimization, content optimization and conversion optimization to get best results." />
					<meta property="og:url" content="https://www.bleap.in/services/search-engine-optimization/on-page-optimization/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/onpageoptimization.jpg"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="Bleap takes a classical and holistic approach to optimizing campaigns. We not only improve your website&#039;s search rankings, but also improve the overall site experience for your customers. We do technical optimization, content optimization and conversion optimization to get best results." />
					<meta name="twitter:title" content="On Page Optimization | Organic SEO Services Chennai, Mumbai, Pune and Bangalore, India" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/onpageoptimization.jpg"} />
        		</MetaTags>
	            <section className="sub-page services gen onpage">
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
											<li className="act">On-Page Optimization</li>
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
											<h1>On-Page Optimization</h1>
										</section>
											<figure><img src={config.APP_URL+"/public/home/images/onpageoptimization.jpg"} alt="onpageoptimization" className="img-responsive" /></figure>
													<p>We take a classical and holistic approach to optimize webpages. We not only improve your website’s search rankings, but also improve the overall site experience for your customers.</p>
													<h3>Technical Optimization</h3>
													<p>Our team has vast experience in identifying and fixing technical issues in your current website. Our technical lexicon comprises of terms like url structure, site map, title tags, meta tags & description, image tags, XML sitemap, keyword density, page download speed, internal and external site links, site navigation, domain authority, page authority e.t.c We ensure that website performs its best at all times.</p>
										</section>
									</section>
								</section>
							</section>				  
							<section className="section-wrap-ash">				
								<section className="container">
									<h3>Content Optimization</h3>
									<p>Content is King. Content when optimized is the Emperor. We work with you to revise, rewrite and optimize content on your site to improve both user experience and SEO. We are the experts in writing landing page copy for ROI conversion as well as organic keyword usage.</p>

									<h3>Conversion Optimization</h3>
									<p>Conversion optimization is a strategy to increase how many visitors to your site actually convert into customers. Optimizing your site for conversion can dramatically improve everything from your bounce rate to your ROI. Whether this is through A/B testing on key landing pages, or improving your CTAs, the options are limitless.</p>
								</section>
							</section>
				</section>
	           	
				<Footer />
			</React.Fragment>
        );
    }
}
export default OnPageOptimize;