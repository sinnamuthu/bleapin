import React, { Component } from 'react';
import config from '../.././Config';
import Footer from '../.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class ReMarketing extends Component {
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
        			<title>Remarketing Ads | Google Banner Ads | Facebook Ads Services in Chennai, Mumbai, Pune and Bangalore, India</title>
        			<meta name="description" content="Remarkeitng is a simple and effective method to improve your conversions from search or display campaigns. We ate Bleap use the right measure of retargeting to improve the conversion while ensurig the best ROI of your remarketing budgets."/>
					<link rel="canonical" href="https://www.bleap.in/services/online-advertising/remarketing-ads" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Remarketing Ads | Google Banner Ads | Facebook Ads Services in Chennai, Mumbai, Pune and Bangalore, India" />
					<meta property="og:description" content="Remarkeitng is a simple and effective method to improve your conversions from search or display campaigns. We ate Bleap use the right measure of retargeting to improve the conversion while ensurig the best ROI of your remarketing budgets." />
					<meta property="og:url" content="https://www.bleap.in/services/online-advertising/remarketing-ads/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/remarketing.png"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="Remarkeitng is a simple and effective method to improve your conversions from search or display campaigns. We ate Bleap use the right measure of retargeting to improve the conversion while ensurig the best ROI of your remarketing budgets." />
					<meta name="twitter:title" content="Remarketing Ads | Google Banner Ads | Facebook Ads Services in Chennai, Mumbai, Pune and Bangalore, India" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/remarketing.png"} />
        		</MetaTags>
	             <section className="sub-page services gen remark">
						<section className="int">				
								<section className="container">
									<section className="breadcrumbs layout1">
										<ul>
											<li><Link to='/'>Home</Link></li>
											<li> > </li>
											<li><Link to={config.ROUTE_URL+'/services'}>Services</Link></li>
											<li> > </li>
											<li><Link to={config.ROUTE_URL+'/services/online-advertising'}>Online Advertising</Link></li>
											<li> > </li>
											<li className="act">Remarketing Ads</li>
										</ul>
									</section>
									<section className="item-cnt clearfix">
										<section className="item-cnt-in">				
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
											<h1>Remarketing Ads</h1>
										</section>
											<figure><img src={config.APP_URL+"/public/home/images/remarketing.png"} alt="remarketing" className="img-responsive" /></figure>
											<p>Remarketing is the process of following up with the visitors of our website by serving customized display ads. Its akin to the follow-up call to prospects. It's a simple and effective method to improve conversions. Banner ads of all shapes and sizes are served to those who left our website without transacting with us. Retargeting works the best when used in conjunction with the paid search (Google adwords) campaign.</p>
										</section>
									</section>
								</section>
							</section>		
							
							<section className="section-wrap-ash">				
								<section className="container">
									<h3>How does it Work?</h3>
									<p>What is interesting about Retargeting is that the ads can be tailored according to the audience grouping. We add a small code on your site which helps us create customized audience groupings and target customized ads to display to them across them web. We use Retargeting both on Google Display Network as well as on other 3rd party aggregator networks based on the audience profile.</p>
									<h3>Retargeting & Social Ads</h3>
									<p>Retargeting with Social media ads delivers the best value for your money as maximum number of people spends most of their time on social media platforms like Facebook, Twitter, YouTube, and LinkedIn. These platforms offer various filters and rich retargeting capabilities that can be used in conjunction with a larger social ad campaign.</p>
									<p>Read more about our <Link to={config.ROUTE_URL+'/services/online-advertising/social-media-marketing'}>social ad services</Link> here.</p>
									<h3>Benefits of Retargeting</h3>
									<p>Remarketing can help increase brand familiarity and engagement. It supplements effort of other search campaign types to increase the revisit. More revisits mean more business.  Our goal is to help find the right visitors find the right information in your site at the right time, eventually leading to transaction success.</p>
									<p>Interested in partnering with us for a paid search campaign with BLeap? <Link to={config.ROUTE_URL+'/contact-us'}>Call us today</Link> for a partnership proposal</p>
								</section>
							</section>	
				</section>
				<Footer />
			</React.Fragment>
        );
    }
}
export default ReMarketing;