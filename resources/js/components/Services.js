import React, { Component } from 'react';
import config from './Config';
import Footer from './layout/Footer';
import MetaTags from 'react-meta-tags';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Services extends Component {
	componentDidMount(){
			$('.services .serv-inner .serv-cnt .ser-menu').click(function(){
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
        			<title>Web Design &amp; Development | SEO | SEM | SMM Company Chennai, Bangalore, Pune, Mumbai, India</title>
        			<meta name="description" content="Bleap offers digital marketing services like Responsive Web Design &amp; Development, SEO, PPC campaigns, Social Media Marketing, Branding &amp; Advertising to help grow your business."/>
					<link rel="canonical" href="https://www.bleap.in/services" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Web Design &amp; Development | SEO | SEM | SMM Company Chennai, Bangalore, Pune, Mumbai, India" />
					<meta property="og:description" content="Bleap offers digital marketing services like Responsive Web Design &amp; Development, SEO, PPC campaigns, Social Media Marketing, Branding &amp; Advertising to help grow your business." />
					<meta property="og:url" content="https://www.bleap.in/services/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/smm.png"}/>
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="Bleap offers digital marketing services like Responsive Web Design &amp; Development, SEO, PPC campaigns, Social Media Marketing, Branding &amp; Advertising to help grow your business." />
					<meta name="twitter:title" content="Web Design &amp; Development | SEO | SEM | SMM Company Chennai, Bangalore, Pune, Mumbai, India" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/seo.png"} />
        		</MetaTags>
		            <section className="sub-page services">
		                <section className="container">	
		                	<section className="breadcrumbs layout2">
								<ul>
									<li><Link to='/'>Home</Link></li>
									<li> > </li>
									<li className="act">Services</li>
								</ul>
							</section>						
							<section className="hdg">					
								<h1>Think Big - Start Small -Scale Fast</h1>
							</section>
		                    <h2>Our Website Design & Digital Marketing Services</h2>
		                    <p className="introd">Grabbing new opportunities in a briskly changing market requires a hyper-collaborative and agile approach. Our Multi-disciplinary teams comes with the apply right mix and measuere at each step to make menaingful progress toward clients business goals.</p>
		                </section>
						<section className="serv-inner">
							<section className="container">
								<section className="serv-cnt">
									<aside className="ser-menu">
										<div className="sub-menu"></div>
										<ul className="hidden2">
											<li><Link to={config.ROUTE_URL + '/services/responsive-website-design-development/'}>Responsive Website Design Development</Link></li>
											<li><Link to={config.ROUTE_URL + '/services/search-engine-optimization/'}>Search Engine Optimization</Link></li>
											<li><Link to={config.ROUTE_URL + '/services/online-advertising/'}>Online Advertising</Link></li>
											<li><Link to={config.ROUTE_URL + '/services/strategic-marketing/'}>Strategic Marketing</Link></li>
											<li><Link to={config.ROUTE_URL + '/services/ecommerce-solutions/'}>E-Commerce Solutions</Link></li>
										</ul>
									</aside>
									<section className="item-wrap clearfix">
		                                <figure><img src={config.APP_URL+"/public/home/images/responsive-webdesign.png"} alt="Responsive Web Design" className="img-responsive" /></figure>
										<aside className="item-desc">
											<h3>RESPONSIVE WEB DESIGN & DEVELOPMENT</h3>
											<p>We are the experts in Design and Development of Websites that look Beautiful and are Functionally Brilliant. We have over 15 years of experience in website development on major platforms - Word Press, Drupal, Joomla, Magento etc. Our talented team is expert in HTML, JavaScript, .Net, CSS, PHP and HTML5...</p>
											<section className="btn-wrap"><a className="btn-primary" href="services/responsive-website-design-development">Read More</a></section>
										</aside>
									</section>
									<section className="item-wrap clearfix">
		                                <figure><img src={config.APP_URL+"/public/home/images/seo.png"} alt="SEO" className="img-responsive" /></figure>
										<aside className="item-desc">
											<h3>SEARCH ENGINE OPTIMIZATION</h3>
											<p>We are the right folks to help with your SEO and organic search rankings (SERP). Our SEO campaigns help drive search traffic for the right keywords thereby attracting quality traffic. We optimize for both users and search engines simultaneously thereby creating the perfect marriage. We focus on both On-page as well as Off-page Optimization...</p>
											<section className="btn-wrap"><a className="btn-primary" href="services/search-engine-optimization">Read More</a></section>
										</aside>
									</section>
									<section className="item-wrap clearfix">
		                                <figure><img src={config.APP_URL+"/public/home/images/sem.png"} alt="SEM" className="img-responsive" /></figure>
										<aside className="item-desc">
											<h3>ONLINE ADVERTISEMENT (SEM)</h3>
											<p>We are the classical search lead agency. We run Google Adwords(PPC) Campaigns and Google Display(GDN) Campaigns, Youtube, Facebook, Instagram, Twitter and LinkedIn advertising campaigns to reach the relevant communication to the most valuable target audience to generate leads, sales, visitors, reach and other metrics. Running search campaigns is the best way to demonstrate our passion for microscopic execution skills...</p>
											<section className="btn-wrap"><a className="btn-primary" href="services/online-advertising">Read More</a></section>
										</aside>
									</section>
									<section className="item-wrap clearfix">
		                                <figure><img src={config.APP_URL+"/public/home/images/smm.png"} alt="SMM" className="img-responsive" /></figure>
										<aside className="item-desc">
											<h3>SOCIAL MEDIA MARKETING (SMM)</h3>
											<p>Social Media Marketing can include everything from blogging, article submission, Online Press Release submission, social bookmarking, ghost writing, using external bloggers, influencer marketing programs, and affiliate marketing programs. We engage your audience with our theme and organically build high-quality links...</p>
											<section className="btn-wrap"><a className="btn-primary" href="services/online-advertising/social-media-marketing">Read More</a></section>
										</aside>
									</section>
									<section className="item-wrap clearfix">
		                                <figure><img src={config.APP_URL+"/public/home/images/startgic-marketing.png"} alt="Strategic Marketing" className="img-responsive" /></figure>
										<aside className="item-desc">
											<h3>STRATEGIC MARKETING</h3>
											<p>We understand the true nature of your brand and its relationship with business growth. We offer 360 services like Advertising, Brand development, designing of marketing collaterals, Audio-Visuals and multi-media campaigns under single roof...</p>
											<section className="btn-wrap"><a className="btn-primary" href="services/strategic-marketing">Read More</a></section>
										</aside>
									</section>
								</section>
							</section>
						</section>
						<Footer />
		            </section>
		    </React.Fragment>        
        );
    }
}
export default Services;