import React, { Component } from 'react';
import config from '.././Config';
import Footer from '.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class OnlineAdvertising extends Component {
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
        			<title>Online Advertising | SEO, SEM &amp; SMM Services Chennai, Mumbai, Pune and Bangalore, India</title>
        			<meta name="description" content="Bleap is the classic search lead agency. We run Google Adwords Campaign, Google Display Campaign, Social Advertising Campaign(Facebook, Instagram, LinkedIN, Twitter and Pinterest"/>
					<link rel="canonical" href="https://www.bleap.in/services/online-advertising" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Online Advertising | SEO, SEM &amp; SMM Services Chennai, Mumbai, Pune and Bangalore, India" />
					<meta property="og:description" content="Bleap is the classic search lead agency. We run Google Adwords Campaign, Google Display Campaign, Social Advertising Campaign(Facebook, Instagram, LinkedIN, Twitter and Pinterest" />
					<meta property="og:url" content="https://www.bleap.in/services/online-advertising/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/online-advt-main.png"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="Bleap is the classic search lead agency. We run Google Adwords Campaign, Google Display Campaign, Social Advertising Campaign(Facebook, Instagram, LinkedIN, Twitter and Pinterest" />
					<meta name="twitter:title" content="Online Advertising | SEO, SEM &amp; SMM Services Chennai, Mumbai, Pune and Bangalore, India" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/online-advt-main.png"} />
        		</MetaTags>
		            <section className="sub-page services online">
					   <section className="intro">				
							<section className="container">
								<section className="breadcrumbs layout3">
									<ul>
										<li><Link to='/'>Home</Link></li>
										<li> > </li>
										<li><Link to={config.ROUTE_URL+'/services'}>Services</Link></li>
										<li> > </li>
										<li className="act">Online Advertising</li>
									</ul>
								</section>			
								<section className="item-cnt">				
									<section className="hdg sec">	
										<aside className="ser-menu">
											<div className="sub-menu"></div>
											<ul className="hidden2">
												<li><Link to={config.ROUTE_URL + '/services/online-advertising/google-adwords/'}>Google Adwords</Link></li>
												<li><Link to={config.ROUTE_URL + '/services/online-advertising/display-advertising/'}>Display Advertising</Link></li>
												<li><Link to={config.ROUTE_URL + '/services/online-advertising/social-media-marketing/'}>Social Media Marketing</Link></li>
												<li><Link to={config.ROUTE_URL + '/services/online-advertising/remarketing-ads/'}>Remarketing Ads</Link></li>
											</ul>
										</aside>				
										<h1>Online Advertising</h1>
									</section>
									<p>We are the classical search lead agency. We love studying consumer behavior and always want to dig deeper to run analytics to understand what action on our site or campaign drives the behavior. Running great search campaigns is the best way to demonstrate our passion for microscopic execution skills.</p>
									<p>Search (PPC) Campaigns throw large number of data points through the various touch points of the Sales Funnel. It is both prescriptive and predictive both at the same time. It offers the best correlation with the online business revenue. It's paid. It's measurable. It delivers results</p>
								</section>
							</section>
		                </section>
					   <section className="section-wrap-ash">				
							<section className="container">
								<section className="item-wrap">
										<h3>Google Adwords Campaign</h3>
										<p>Adwords(PPC) Campaign is the most cost-efficient way to find new customers for your business... <Link to={config.ROUTE_URL+'/services/online-advertising/google-adwords/'}>Read more...</Link></p>
								</section>
								<section className="item-wrap">
										<h3>Google Display Campaign</h3>
										<p>Google Display Campaign is the best medium to create brand awareness and reach... <Link to={config.ROUTE_URL+'/services/online-advertising/display-advertising/'}>Read more...</Link></p>
								</section>
								<section className="item-wrap">
										<h3>Social Advertising Campaign</h3>
										<p>Advertising across social media platforms like Facebook, Instagram, LinkedIn, Twitter, SnapChat, Pinterest e.t.c is a great way to build brand awareness, generate leads and engage customers... <Link to={config.ROUTE_URL+'/services/online-advertising/social-media-marketing'} >Read more...</Link></p>
								</section>
								<section className="item-wrap">
										<h3>Social Media Management</h3>
										<p>Managing social presence for your business across Facebook, Instagram, Twitter, Linkedin, Pinterest builds online reputation for your brand... <Link to={config.ROUTE_URL+'/services/online-advertising/social-media-marketing'}>Read more...</Link></p>
								</section>
								<section className="item-wrap">
										<p>PPC is always changing. Consumer intent, the landscape, technology, and platforms continue to evolve. BLeap has the right people, technology, and approach to ensure your paid search activity is at the forefront of digital innovation. </p>
								</section>					
					
							</section>
					  </section>				
						<Footer />
		        	</section>
	        </React.Fragment>    
        );
    }
}
export default OnlineAdvertising;