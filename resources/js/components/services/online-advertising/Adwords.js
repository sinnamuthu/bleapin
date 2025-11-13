import React, { Component } from 'react';
import config from '../.././Config';
import Footer from '../.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

class Adwords extends Component {
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
        			<title>Google Adwords Management Services | Internet Marketing in Chennai, Mumbai, Pune and Bangalore, India</title>
        			<meta name="description" content="Bleap runs augmented keyword targeted campaigns with audience data, using dynamic automation and enhanced keyword level tracking to give you the best ROI for your search campaigns"/>
					<link rel="canonical" href="https://www.bleap.in/services/online-advertising/google-adwords" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Google Adwords Management Services | Internet Marketing in Chennai, Mumbai, Pune and Bangalore, India" />
					<meta property="og:description" content="Bleap runs augmented keyword targeted campaigns with audience data, using dynamic automation and enhanced keyword level tracking to give you the best ROI for your search campaigns" />
					<meta property="og:url" content="https://www.bleap.in/services/online-advertising/google-adwords/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/adwords.png"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="Bleap runs augmented keyword targeted campaigns with audience data, using dynamic automation and enhanced keyword level tracking to give you the best ROI for your search campaigns" />
					<meta name="twitter:title" content="Google Adwords Management Services | Internet Marketing in Chennai, Mumbai, Pune and Bangalore, India" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/adwords.png"} />
        		</MetaTags>
				<section className="sub-page services adword">
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
									<li className="act">Google Adwords</li>
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
									<h1>Google Adwords</h1>
								</section>
									<figure className="text-center">
										<img src={config.APP_URL+"/public/home/images/adwords.png"} alt="google-adwords" className="img-responsive"/>
									</figure>
								<h3>SEO Audit & Keyword Research</h3>
								<p>Keywords are no longer the heart of paid search. Augmenting keyword targeted campaigns with audience data, using dynamic automation and enhanced keyword level tracking are replacing traditional keyword only campaigns.</p>
								<p>Do you know all the different types of audiences that you would like to sell to? How many of the keywords in your account appeal to multiple audiences? Do you know the monetary value of different audience types? How do you know when someone types a keyword into Google that they are relevant to your products or services?</p>
								<p>We go one step further and use Remarketing Lists for Search Ads (RLSA) and Customer Match Look-alike Audience (CMLA) and Affinity Audience Targeting (AAT) to help your business win new customers at the lowest cost. By targeting the right audiences and actively optimizing the PPC campaigns, we’ve achieved 50 to 65% higher conversion rates.</p>		
								
								<h3>Dynamic Search Ads Campaign (Google Double Click)</h3>
								<p>We employ Dynamic Search Ads (DSA) or even better, Google Double Click campaigns for e-Commerce clients with multiple categories and large spends for better ROI.</p>
								<p>We can program your inventory feed to deliver highly relevant ads targeted at the multiple audiences directing them to the right landing pages based using technology. DSA campaigns deliver 25 to 30% higher Click through Rates(CTRs) and 35 to 40% lower Cost Per Acquisition(CPAs) because of better and even coverage from the entire inventory range including long tail inventory. It is an established fact that long-tail is usually cheaper and converts more.</p>
							</section>
						</section>
	                </section>
	           	</section>
				<Footer />
			</React.Fragment>
        );
    }
}
export default Adwords;