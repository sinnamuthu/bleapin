import React, { Component } from 'react';
import config from '../.././Config';
import Footer from '../.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class OffPageOptimize extends Component {
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
        			<title>Off Page Optimization | Directory, Social Book Mark Submission</title>
        			<meta name="description" content="Bleap believes in building your site awareness through directory submission, social bookmarking, article submission, blog and content marketing. This improves your site&#039;s search engine ranking(SERP). By focusing on brand awareness, you can earn high-quality links while attracting new customers."/>
					<link rel="canonical" href="https://www.bleap.in/services/search-engine-optimization/off-page-optimization" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Off Page Optimization | Directory, Social Book Mark Submission" />
					<meta property="og:description" content="Bleap believes in building your site awareness through directory submission, social bookmarking, article submission, blog and content marketing. This improves your site&#039;s search engine ranking(SERP). By focusing on brand awareness, you can earn high-quality links while attracting new customers." />
					<meta property="og:url" content="https://www.bleap.in/services/search-engine-optimization/off-page-optimization/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/offpageoptimization.jpg"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="Bleap believes in building your site awareness through directory submission, social bookmarking, article submission, blog and content marketing. This improves your site&#039;s search engine ranking(SERP). By focusing on brand awareness, you can earn high-quality links while attracting new customers." />
					<meta name="twitter:title" content="Off Page Optimization | Directory, Social Book Mark Submission" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/offpageoptimization.jpg"} />
        		</MetaTags>
	             <section className="sub-page services gen offpage">
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
											<li className="act">Off-Page Optimization</li>
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
											<h1>Off-Page Optimization</h1>
										</section>
											<figure><img src={config.APP_URL+"/public/home/images/offpageoptimization.jpg"} alt="offpageoptimization" className="img-responsive" /></figure>
										<p>What's the quickest and the easiest way to get better search engine rankings? That's right, Off-page SEO. It's a combination of various activities like directory submission, social bookmarking, article submission, blog posting and back links building. Google may deny it, but their ranking algorithm still relies heavily on the quantity and quality of referring domains. The more you have – the higher you climb.</p>
										<p>The truth is, getting high rankings turn out to be a real headache, especially after yet another Google update. We at Bleap make sure that your website achieves the Top 10 on Google</p>
										<ul>
											<li>We do a thorough keyword research. We use proprietary tools to arrive at a comprehensive list of targeted keywords.</li>
											<li>In order to rank higher on Google, navigation and user experience play the most crucial role. We ensure that the url structure of your website is balanced and clear.</li>
											<li>What are the top 10 keywords for your business? Which competitor of yours is running behind those keywords? We do an in-depth study and plan our SERP journey accordingly. We focus our efforts on identifying the right niche and bring your site up the google search in an affordable manner.</li>
											<li>We prepare a detailed backlinks building plan. The more quality backlinks your site has, the higher rankings in Google it receives. We have vast experience in helping businesses like you get to the Top page on Google search.</li>
											<li>We create diverse and unique anchor texts containing url, brand name, domain name and CTA's to get high rankings in Google SERP.</li>
											<li>Google is currently using the Penguin algorithm and it keeps changing every now and then. We use our vast experience in synergising effect of this algorithm by using Anchor Text Distribution Bell Curve and increasing the number of referring domains.</li>
											<li>We make it natural for Google by writing keyword centric content. That is an art and a science.
											Each website gets a rank based on Domain Authority (DA) and Page Authority (PA). It is absolutely essential to build a bouquet of backlinks with high and low DA's and PA's.</li>
											<li>We just don't build backlinks for the home page of your website but also strive for getting backlinks for inner pages like About Us, Careers, Blog e.t.c</li>
											<li>Its not just enough to purchase backlinks to be in the Top 10 rankings on Google. We explore the exact links needed for the successful performance of your website. We use offbeat activities like inviting guest bloggers to write a blog for us. It could be on quid pro quo basis or on payment. This helps in building high quality backlinks fast.</li>
										</ul>
										</section>
									</section>
								</section>
							</section>		
							{/*<section className="section-wrap-ash">				
								<section className="container">
									<h3>How is a Progressive Web App(Hybrid App) built:</h3>
									<p>1.PWA is developed using Java script, HTML and CSS</p>
									<p>2. Our skilled and experienced tech team build PWAs by coding a new set of APIs that have been recently added into web browsers themselves called "Service Workers". Service Workers allow JavaScript to run in the background of the PWA and process important functions such as predictively preloading content, sending push notifications, and synchronizing and receiving data.</p>
									<p>3.Application Shell is an omnipresent and static frame which allows the content to load dynamically. An application shell loads minimal info when the user logs into the web app thereby making PWA a lightning fast experience.</p>
								</section>
							</section>	*/}
				</section>
				<Footer />
			</React.Fragment>
        );
    }
}
export default OffPageOptimize;