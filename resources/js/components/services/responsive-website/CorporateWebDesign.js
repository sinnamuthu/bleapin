import React, { Component } from 'react';
import config from '../.././Config';
import Footer from '../.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class CorporateWebDesign extends Component {
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
        			<title>Corporate Web Design &raquo; BLeap</title>
        			<link rel="canonical" href="https://www.bleap.in/services/responsive-website-design-development/corporate-web-design" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Corporate Web Design &raquo; BLeap" />
					<meta property="og:url" content="https://www.bleap.in/services/responsive-website-design-development/corporate-web-design/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/corporate.png"}  />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="Corporate Web Design &raquo; BLeap" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/corporate.png"} />
        		</MetaTags>

	            <section className="sub-page services gen corp">
				  	<section className="int">				
						<section className="container">	
							<section className="breadcrumbs layout2">
								<ul>
									<li><Link to='/'>Home</Link></li>
									<li> > </li>
									<li><Link to={config.ROUTE_URL+'/services'}>Services</Link></li>
									<li> > </li>
									<li><Link to={config.ROUTE_URL+'/services/responsive-website-design-development'}>Responsive Web Site Design & Development</Link></li>
									<li> > </li>
									<li className="act">Corporate Web Design</li>
								</ul>
							</section>
							<section className="item-cnt clearfix">
								<section className="item-cnt-in">
									<section className="hdg sec">	
										<aside className="ser-menu">
											<div className="sub-menu"></div>
											<ul className="hidden2">
												<li><Link to={config.ROUTE_URL + '/services/responsive-website-design-development/corporate-web-design/'}>Corporate Web Design</Link></li>
												<li><Link to={config.ROUTE_URL + '/services/responsive-website-design-development/progressive-web-apps/'}>Progressive Web Apps</Link></li>
												<li><Link to={config.ROUTE_URL + '/services/responsive-website-design-development/magento-web-development/'}>Magento Web Development</Link></li>
											</ul>
										</aside>				
										<h1>Corporate Web Design</h1>
									</section>
									<figure><img src={config.APP_URL+"/public/home/images/corporate.png"} alt="corporate" className="img-responsive" /></figure>
									<p>Your corporate website is working for your brand 24 X 7. It builds your brand amongst multiple stakeholders like Customers, Prospective Employees, Press & Media, Vendors, Investors e.t.c., It has to be high on appeal as well as information.</p>
									<p>Bleap's experienced team is the best when it comes to designing corporate websites. Most corporates would like the website design to be in harmony as per the brand guidelines.</p>
								</section>
							</section>
						</section>	
					</section>
							<section className="section-wrap-ash">				
								<section className="container">
									<ul>
										<li>Selection of the right design theme based on your industry vertical & brand requirements.</li>
										<li>Responsive Web Design process for compatibility across all screens - Web, Tablets & Mobile.</li>
										<li>Web Portal Design & Integration to create a seamless feel between static information sections and the dynamic transaction/ functionality oriented sections of the website.</li>
										<li>Usage of right imagery, fonts, design elements, CTA’s as per brand manual.</li>
										<li>Eye for detailing to integrate Leadership messages, Corporate Philosophy, disclaimers, financial performance, privacy policy, statutory information e.t.c.,</li>
										<li>Our content team is trained to write SEO friendly relevant and meaningful content for various stakeholders.</li>
										<li>Implementation of various Content Management Systems(CMS) like Word Press, Magento, Codeigniter, so that information can be managed dynamically without compromising either time or brand guidelines.</li>
									</ul>
								</section>
							</section>
				</section>
	           	
				<Footer />
			</React.Fragment>
        );
    }
}
export default CorporateWebDesign;