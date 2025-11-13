import React, { Component } from 'react';
import config from '../.././Config';
import Footer from '../.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class SocialMediaMarketing extends Component {
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
	        		<title>Social Media | Facebook, Linkedin, Instagram Marketing Agency in Chennai, Mumbai, Pune and Bangalore, India</title>
	        		<meta name="description" content="Bleap Social Media Marketing experts are capable of managing social presence for your business on Facebook, Instgram, Youtube, LinkedIn, Twitter, Snapchat and Pinterest"/>
					<link rel="canonical" href="https://www.bleap.in/services/online-advertising/social-media-marketing" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Social Media | Facebook, Linkedin, Instagram Marketing Agency in Chennai, Mumbai, Pune and Bangalore, India" />
					<meta property="og:description" content="Bleap Social Media Marketing experts are capable of managing social presence for your business on Facebook, Instgram, Youtube, LinkedIn, Twitter, Snapchat and Pinterest" />
					<meta property="og:url" content="https://www.bleap.in/services/online-advertising/social-media-marketing/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/facebook.png"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="Bleap Social Media Marketing experts are capable of managing social presence for your business on Facebook, Instgram, Youtube, LinkedIn, Twitter, Snapchat and Pinterest" />
					<meta name="twitter:title" content="Social Media | Facebook, Linkedin, Instagram Marketing Agency in Chennai, Mumbai, Pune and Bangalore, India" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/social-media-marketing2.jpg"} />
	        	</MetaTags>
	            <section className="sub-page services smm">
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
									<li className="act">Social Media Marketing</li>
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
									<h1>Social Media Marketing</h1>
								</section>
									<figure><img src={config.APP_URL+"/public/home/images/social-media-marketing2.jpg"} alt="social-media-marketing" className="img-responsive" /></figure>
									<p>World is Social and Social is the World. People spend an average of 116 minutes daily on social media. Teens spend as much as 9 hours every day. 60% of this time is spent on mobile devices. Social media ads can be a great paid advertising option for any business- B2C or B2B. Social media platforms offer a wealth of demographic and behavioral targeting options to reach your message to the exact target audience. In a social ad campaign, we can tap into this data in order to target your audience on a very specific level. Social media advertising also benefits by massive reach potential-one in five page views on the internet in India are on Facebook.</p>
								</section>
							</section>
						</section>
					</section>
					<section className="serv-inner section-wrap-ash">
						<section className="container">
							<section className="serv-cnt">
								<section className="item-wrap clearfix">
	                                <figure><img src={config.APP_URL+"/public/home/images/facebook.png"} alt="facebook" className="img-responsive" /></figure>
									<aside className="item-desc">
										<h3>Facebook</h3>
										<p>Facebook has over 2 billion active monthly users (almost a 3rd of the planet's population) spending an average of 1. Facebook's advertising platform offers the best reach and targeting options. It can start delivering leads from the word Go. It puts all the players - established, emerging and new on an even keel. We love Facebook because it offers the best reach and the best targeting one can ever get. The vast amount of behavioral data that Facebook throws through its console is our daily supper. This allows you to target individual audiences at a very specific level (N=1). While Facebook is used primarily for B2C advertising, they have recently expanded their B2B targeting tools. Look alike targeting, Auto play videos, rich media options... Facebook is a great medium for both engagement as well as performance.</p>
									</aside>
								</section>
								<section className="item-wrap clearfix">
	                                <figure><img src={config.APP_URL+"/public/home/images/youtube.png"} alt="youtube" className="img-responsive" /></figure>
									<aside className="item-desc">
										<h3>Youtube</h3>
										<p>Welcome to India's 2nd most viewed TV channel. 30 million viewers watch more than 5 billion videos every day. YouTube video ads are an engaging way to connect with your target audience. YouTube's retargeting options allow you to use the same snippet of code to show tailored ads to millions of YouTube viewers. We can help you with the type of video that works for your brand, how often it is shown (frequency), the length of the video and more. We also have solutions to bring your brand message upfront within the first 5 seconds to maximize reach and message comprehension. YouTube is a great way to utilize the power of video to reach out to your targeted audience.</p>
									</aside>
								</section>
								<section className="item-wrap clearfix">
	                                <figure><img src={config.APP_URL+"/public/home/images/instagram.png"} alt="instagram" className="img-responsive" /></figure>
									<aside className="item-desc">
										<h3>Instagram</h3>
										<p>Instagram is the twin sister of Facebook. Youth love Instagram as much as they love FB. Its cool, trendy and brief just like its TG. 90% of Instagram users are below 35 years of age. It's the biggest congregation of global youth with over 450 million daily active users. Ever since Facebook has taken over this platform, the umbilical cord between Facebook and Instagram has helped advertisers cross-pollinate content and get additional views and revenue.</p>
									</aside>
								</section>
								<section className="item-wrap clearfix">
	                                <figure><img src={config.APP_URL+"/public/home/images/linkedin.png"} alt="linkedin" className="img-responsive" /></figure>
									<aside className="item-desc">
										<h3>LinkedIn</h3>
										<p>LinkedIn is a great platform for B2B companies. Other benefits of advertising on LinkedIn are to recruit the right talent for your organization. If you want to build thought leadership for your top management and promoters, LinkedIn is the go to platform. Its professional focus allows you to easily target key decision makers by industry, company, job title, experience level and so on. LinkedIn also allows B2B companies to break through the clutter of B2C advertising and reach the right decision makers effectively. It's a great platform for Consulting & Software companies to generate leads for their webinars.</p>
									</aside>
								</section>
								<section className="item-wrap clearfix">
	                                <figure><img src={config.APP_URL+"/public/home/images/twitter.png"} alt="twitter" className="img-responsive" /></figure>
									<aside className="item-desc">
										<h3>Twitter</h3>
										<p>Twitter is a real-time engagement and interaction platform both for B2C as well as B2B companies. There are 110 million high profile, engaged and vocal people tweeting and re-tweeting over 550 million tweets daily. It offers a variety of targeting options to increase brand awareness, Website / App traffic, growing followers and so on.</p>
									</aside>
								</section>
								<section className="item-wrap clearfix">
	                                <figure><img src={config.APP_URL+"/public/home/images/snapchat.png"} alt="snapchat" className="img-responsive" /></figure>
									<aside className="item-desc">
										<h3>Snapchat</h3>
										<p>Snapchat is the youngest kid on the social media block. Its got the youngest audience ever. 72% of its audience comes from 12 to 24 years youth. If you're looking for a solid way to promote your brand on Snapchat, an on-demand Geofilter is a great option. Geofilters are special overlays for Snapchat users that reflect the geographic location they are in. We can purchase a custom Geofilter for an event, location, or promotion being planned by you. The cost of a custom Geofilter depends on factors like the size of the area you want your Geofilter to be active in (which can range from 20,000 sq. ft. up to 5 million sq. ft.), as well as the duration of the Geofilter to be active. Many of the brands have started doing Snapisodes to promote the content in the form of videos, testimonials e.t.c to seed the right brand messages. Offer coupons and Event invites receive instant response on Snapchat.</p>
										<p>Our social advertising services tie in nicely with several of our other services, including retargeting, conversion optimization, content marketing, and social media management.</p>
									</aside>
								</section>
								<section className="item-wrap clearfix">
	                                <figure className="no-img">&nbsp;</figure>
									<aside className="item-desc">
										<h3>Social Media Marketing (SMM)</h3>
										<p>Social Media Marketing can include everything from blogging, article submission, online press release submission, social bookmarking, ghost writing for your leadership, using external bloggers and key influencers to write for us.</p>
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
export default SocialMediaMarketing;