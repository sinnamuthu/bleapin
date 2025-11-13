import React, { Component } from 'react';
import config from '../.././Config';
import Footer from '../.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class DisplayAdvertising extends Component {
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
        			<title>Google Display Advertising | Banner Ads Services Chennai, Mumbai, Pune and Bangalore, India</title>
					<meta name="description" content="To achieve your business goals, you may use different types of display campaigns. From brand awareness, prospecting and remarketing, they all work to move your customers along the sales funnel. At Bleap, we are experts in delivering these campaigns efficiently and effectively."/>
					<link rel="canonical" href="https://www.bleap.in/services/online-advertising/display-advertising" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Google Display Advertising | Banner Ads Services Chennai, Mumbai, Pune and Bangalore, India" />
					<meta property="og:description" content="To achieve your business goals, you may use different types of display campaigns. From brand awareness, prospecting and remarketing, they all work to move your customers along the sales funnel. At Bleap, we are experts in delivering these campaigns efficiently and effectively." />
					<meta property="og:url" content="https://www.bleap.in/services/online-advertising/display-advertising/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/displayads.png"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="To achieve your business goals, you may use different types of display campaigns. From brand awareness, prospecting and remarketing, they all work to move your customers along the sales funnel. At Bleap, we are experts in delivering these campaigns efficiently and effectively." />
					<meta name="twitter:title" content="Google Display Advertising | Banner Ads Services Chennai, Mumbai, Pune and Bangalore, India" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/displayads.png"} />        		
        		</MetaTags>
	            <section className="sub-page services gen display">
				  	<section className="int">				
						<section className="container">	
							<section className="breadcrumbs layout2">
								<ul>
									<li><Link to='/'>Home</Link></li>
									<li> > </li>
									<li><Link to={config.ROUTE_URL+'/services'}>Services</Link></li>
									<li> > </li>
									<li><Link to={config.ROUTE_URL+'/services/online-advertising'}>Online Advertising</Link></li>
									<li> > </li>
									<li className="act">Display Advertising</li>
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
									<h1>Display Advertising</h1>
									</section>
									<figure><img src={config.APP_URL+"/public/home/images/displayads.png"} alt="displayads" className="img-responsive" /></figure>
									<p>To achieve your business goals, you may use different types of display campaigns. From brand awareness, prospecting and remarketing, they all work either individually or together to move your customers along the sales funnel. At Bleap, we are experts in delivering these campaigns efficiently and effectively as a tactical tool of your overall marketing strategy.</p>
									<p>We are truly transparent in the ways we handle your campaigns. We provide a combined dashboard for PPC, social and display so you can see all your campaigns in action.</p>
								</section>
							</section>
						</section>	
					</section>
							<section className="section-wrap-ash">				
								<section className="container">
									<section className="item-wrap">								
										<h3>Brand Awareness Campaigns</h3>
										<p>We create and deliver display campaigns to the right audience. We can target brand awareness campaigns based on many factors, including demographic information (age, gender, income, education and profession) and also behavioural information (browsing preferences, interests etc). We can measure campaigns’ success in a number of ways, including delivery to target audience, reach and engagement.</p>

										<p>We believe it’s essential to measure viewability and optimize awareness campaigns to maximize viewership as measured in impressions.</p>

										<p>Our creative bandwidth comprises of standard banner placements to high impact placements such as programmatic page skins and homepage takeovers and rich media creative.</p>
									</section>
									<section className="item-wrap">
										<h3>Mobile and App Campaigns</h3>
										<p>We believe that mobile should be integrated into display campaign strategy for all our clients. While the messaging and the campaign strategy should be unified, the user experience (both ad serving and interaction) on mobile is unique.</p>

										<p>So we deliver, optimize and track mobile, app and web placements to provide your consumers with a seamless experience of your brand across devices.</p>

										<p>92% of all searches today are done over mobile. However, it’s often undervalued and therefore underutilized. Our technology allows us a high level of determined cross-device tracking and targeting, so we can ensure we are using mobile in the most effective way for your campaign.</p>
									</section>
									<section className="item-wrap">
										<h3>Prospecting</h3>
										<p>Prospecting is the lifeblood of any digital campaign strategy. There is a strong correlation between branding search traffic, organic search traffic and the display activity. Top of Mind recall achieved through display campaigns prior to purchase can increase conversions by over 50%.</p>

										<p>A strong prospecting campaign also serves to improve brand recall other than drive sales directly or indirectly.</p>

										<p>We combine many tactics and strategies to achieve the fine balance between focussed targeting and reach for the activity. We use first and third-party data along with strong contextual and environmental targeting techniques.</p>
									</section>
									<section className="item-wrap">
										<h3>Remarketing</h3>
										<p>Remarketing can enhance sales in an acquisition focused campaign. We use remarketing for all prospecting campaigns. We focus on quality placements and right targeting to ensure our spend is as effective as possible.</p>

										<p>But while remarketing is very potent, we don’t over-rely on it. It can burn a lot of campaign budget with diminishing results.</p>

										<p>Remarketing helps bring back visitors who have genuinely fallen out of your conversion funnel or who are considering competition. Retention, renewal as well as re-engage with ex-consumers are some of the other marketing goals achievable through remarketing.</p>
									</section>
								</section>
							</section>
				</section>
	           	
				<Footer />
			</React.Fragment>
        );
    }
}
export default DisplayAdvertising;