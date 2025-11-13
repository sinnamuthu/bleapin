import React, { Component } from 'react';
import config from '.././Config';
import Footer from '.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class SEO extends Component {
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
            		<title>SEO Services | Online Marketing Agency Chennai, Mumbai, Pune and Bangalore, India.</title>
            		<meta name="description" content="Looking for SEO services? Bleap is the Best SEO agency in Chennai, Delhi and Mumbai. We help attract visitors organically to your website through On-page SEO, Off-page SEO, Backlink creation."/>
					<link rel="canonical" href="https://www.bleap.in/services/search-engine-optimization" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="SEO Services | Online Marketing Agency Chennai, Mumbai, Pune, India." />
					<meta property="og:description" content="Looking for SEO services? Bleap is the Best SEO agency in Chennai, Delhi and Mumbai. We help attract visitors organically to your website through On-page SEO, Off-page SEO, Backlink creation." />
					<meta property="og:url" content="https://www.bleap.in/services/search-engine-optimization/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/seo-banner.jpg"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="Looking for SEO services? Bleap is the Best SEO agency in Chennai, Delhi and Mumbai. We help attract visitors organically to your website through On-page SEO, Off-page SEO, Backlink creation." />
					<meta name="twitter:title" content="SEO Services | Online Marketing Agency Chennai, Mumbai, Pune, India." />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/seo-banner.jpg"} />
            	</MetaTags>
	            <section className="sub-page services searchopt">
					   <section className="intopt">	
						   <section className="container">
						   	<section className="breadcrumbs layout1">
								<ul>
									<li><Link to='/'>Home</Link></li>
									<li> > </li>
									<li><Link to={config.ROUTE_URL+'/services'}>Services</Link></li>
									<li> > </li>
									<li className="act">Search Engine Optimization</li>
								</ul>
							</section>	
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
									<h1>Search Engine Optimization</h1>
								</section>
							</section>					
						</section>					
					<section className="section-wrap-ash">				
						<section className="container">
							<h3>Why SEO</h3>
							<p>Search Engine Optimization or SEO is the foundation of any digital business. SEO brings visitors to our website organically. Organic leads convert 3 times more than any other type of leads – paid, social, email and referral. Also revenue per organic conversion is 120% more than any other conversion type.</p>
							<h3>How we do SEO</h3>
							<p>We are the right folks to help with your SEO and organic search rankings (SERP). Our SEO campaigns help drive search traffic for the right keywords thereby attracting quality traffic. It also improves site usability score by providing relevant content to the users on landing on our site and ultimately helps achieve the revenue target.</p>
							<p>We optimize for both users and search engines simultaneously thereby creating the perfect marriage. We focus on both On-page as well as Off-page Optimization. We believe that there is a strong positive correlation between SEO, Paid Search and Content Marketing.</p>
							<p>We run this entire process transparently and are accountable for every penny spent by you. We work closely with your team to help you meet your company’s short-term and long-term goals. Whether you’re a small business looking for an integrated digital marketing plan, or a large enterprise, we offer a customized solution that works for you.</p>
						</section>
					</section>					
					<section className="section-wrap">	
					<section className="container">
						<h2>BLeap SEO Process</h2>
						<h3>SEO Audit & Keyword Research</h3>
						<p>We research your audience, key competitors, and key word profile. We perform comprehensive audit of your html tags, URL structure, site speed, internal and external links, duplicate content, keyword density and more. <Link to={config.ROUTE_URL+'/services/search-engine-optimization/audience-research/'}>Read More...</Link></p>
						<h3>Campaign Strategy & Launch</h3>
						<p>Once we understand your category, your buyer persona, your audience and your website, we work with your team to create an SEO campaign strategy and start working. Read more about <Link to= {config.ROUTE_URL+'/services/search-engine-optimization/on-page-optimization/'}>On-page Search Engine Optimization</Link> and <Link to= {config.ROUTE_URL+'/services/search-engine-optimization/off-page-optimization/'}>Off-page Search Engine Optimization.</Link></p>
						<h3>Conversion Optimization</h3>
						<p>Our Search Engine Optimization campaigns are optimized for both users and search engines. As our SEO strategy works hard to improve your Search Engine Ranking (SERP), we simultaneously make changes to your website to improve your conversion rates and turn visitors into paying customers.<Link to= {config.ROUTE_URL+'/services/search-engine-optimization/on-page-optimization/'}>Read More...</Link></p>
						<h3>Reporting & Analytics</h3>
						<p>We track all the search data and resultant analytics on all major search engines like Google, Yahoo, Bing, Yelp, Ask, AOL and Baidu to share the progress in our monthly dashboard. This will help you track our progress against agreed goals. <Link to={config.ROUTE_URL+'/services/search-engine-optimization/reporting-analytics/'}>Read More...</Link></p>
					</section>
					</section>
				</section>
					<Footer />
           	</React.Fragment>
        );
    }
}
export default SEO;