import React, { Component } from 'react';
import config from '../.././Config';
import Footer from '../.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

class PWA extends Component {
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
        			<title>Progressive Web Apps &raquo; BLeap</title>
        			<link rel="canonical" href="https://www.bleap.in/services/responsive-website-design-development/progressive-web-apps" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Progressive Web Apps &raquo; BLeap" />
					<meta property="og:url" content="https://www.bleap.in/services/responsive-website-design-development/progressive-web-apps/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/progressiveweb.png"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="Progressive Web Apps &raquo; BLeap" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/progressiveweb.png"} />
        		</MetaTags>
	             <section className="sub-page services gen prog">
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
									<li className="act">Progressive Web Apps</li>
								</ul>
							</section>				
							<section className="item-cnt">	
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
									<h1>Progressive Web Apps</h1>
									</section>
									<figure><img src={config.APP_URL+"/public/home/images/progressiveweb.png"} alt="progressiveweb" className="img-responsive" /></figure>
									<p>Mobile Web is the new reality. Going forward, our innovation focus is on improving the mobile web experience. Progressive Web Apps(PWAs) is a disruptive innovation that will fuel the growth of e-Commerce in India and across the world. PWAs are mobile apps that run in a web browser, bringing the convenience of native apps into the browser itself (from push notifications to quick loading). The experience it delivers is fast and slick. The user has the option to keep the PWA (App) on the home screen or on the App launcher. When the App is launched from the home screen, the user can work offline. All the activity done by the user in the offline mode gets synched once the user in online.</p>
									<p>Its technology is relatively new, but the growth is exciting and many of our clients are excited about the opportunity it offers.</p>
									<p>According to Forrester and Shop.org, average conversion rates on native mobile apps are 6 percent, on desktop 4.2 percent, while mobile web lags behind at only 2.3 percent. What is evident is well-designed and well-built native mobile apps (e.g Amazon.com) offer superior digital shopping experience vis a vis a desktop shopping experience. However it is expensive to build and maintain a mobile app. Secondly and more important consumers only download and use apps from brands with which they have regular interactions. For an upcoming e-Commerce business a native app strategy rarely makes commercial sense.</p>
								</section>
							</section>
						</section>
					</section>
							<section className="section-wrap-ash">				
								<section className="container">
									<h3>How is a Progressive Web App(Hybrid App) built:</h3>
									<p>1.PWA is developed using Java script, HTML and CSS</p>
									<p>2. Our skilled and experienced tech team build PWAs by coding a new set of APIs that have been recently added into web browsers themselves called "Service Workers". Service Workers allow JavaScript to run in the background of the PWA and process important functions such as predictively preloading content, sending push notifications, and synchronizing and receiving data.</p>
									<p>3.Application Shell is an omnipresent and static frame which allows the content to load dynamically. An application shell loads minimal info when the user logs into the web app thereby making PWA a lightning fast experience.</p>
								</section>
							</section>	
				</section>
				<Footer />
			</React.Fragment>
        );
    }
}
export default PWA;