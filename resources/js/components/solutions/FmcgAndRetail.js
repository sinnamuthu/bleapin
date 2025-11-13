import React, { Component } from 'react';
import config from '.././Config';
import Footer from '.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class FmcgAndRetail extends Component {
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
            		<title>Fmcg and Retail</title>
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
									<li>Solutions</li>
									<li> > </li>
									<li className="act">Fmcg and Retail</li>
								</ul>
							</section>	
								<section className="hdg sec">	
									<h1>Fmcg and Retail</h1>
								</section>
							</section>					
						</section>					
					<section className="section-wrap">				
						<section className="container">
							  <h3>Top marketing challenges</h3>	
							  <section className="solutions-post-wrap">
									<div className="flip-card">
										<div className="flip-card-inner">
											<div className="flip-card-front">
												<div className="desc">
												<figure><img src="https://www.bleap.in/public/home/images/buildingConsumerTrust.png" /></figure>
												<h3>Effective Product Positioning </h3></div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>In a crowded retail space with multiple products of similar features and selling points, the right messaging and targeting to the most potential prospects is crucial for your brand to cut through the noise.</p>
												</div>
											</div>
										</div>
									</div>
									<div className="flip-card">
										<div className="flip-card-inner">
											<div className="flip-card-front">
												<div className="desc">
												<figure><img src="https://www.bleap.in/public/home/images/firstStrategy.png" /></figure>
												<h3>Bridging the Online and Offline gap</h3>
												</div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>A consumer's buying decision is influenced through a mix of online factors across multiple touch points. There is a need to target your consumers at every stage of this process if revenue has to be maximized and traffic driven to your offline store.</p> 
												</div>
											</div>
										</div>
									</div>
									<div className="flip-card">
										<div className="flip-card-inner">
											<div className="flip-card-front">
												<div className="desc">
												<figure><img src="https://www.bleap.in/public/home/images/targetDefining.png" /></figure>
												<h3>Tracking the Effectiveness of your Campaigns</h3>
												</div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>Traditional marketing strategies like TVCs and print ads do not allow brands to track results. With digital marketing, your company will be able to measure every aspect of your campaign and gain invaluable consumer insights.</p> 
												</div>
											</div>
										</div>
									</div>
									<div className="flip-card">
										<div className="flip-card-inner">
											<div className="flip-card-front">
												<div className="desc">
												<figure><img src="https://www.bleap.in/public/home/images/brandLoyality.png" /></figure>
												<h3>Retaining and Retargeting Customers</h3>
												</div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>Effectively retargeting customers who have visited your websites, landing pages and social profiles, along with the ability to create custom audiences, opens up the possibility to create brand recall and retention like never before.</p> 
												</div>
											</div>
										</div>
									</div>
								</section>
						</section>
					</section>	
					<section className="section-wrap-top ourSolutionsBlk">
	<section className="container">
		<h2>Our Solutions</h2>
		<div className="ourSolutionsCnt clearfix">
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/highPerformance.png" alt="" /></figure>
				</section>
				<section className="desc">
						<h3>Maximize Product Awareness through Social Media Marketing</h3>
						<p>Through our advanced combination of powerful creative, copy and audience targeting, our dynamic team of social media experts can develop a targeted marketing strategy for your brand to build awareness, gain consumer insights and drive conversions.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt right clearfix">
				<section className="desc">
						<h3>Engaging Video Content Creation</h3>
						<p>64% of users are more likely to buy a product online after watching a video promoting it. Our skilled video team will help your brand leverage this potential along with SMM to increase customer engagement and achieve maximum sales.</p>
				</section>
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/leadGeneration.png" alt="" /></figure>
				</section>
				<section className="desc mbl">
						<h3>Engaging Video Content Creation</h3>
						<p>64% of users are more likely to buy a product online after watching a video promoting it. Our skilled video team will help your brand leverage this potential along with SMM to increase customer engagement and achieve maximum sales.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt clearfix">
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/socialMediaCampaigns.png" alt="" /></figure>
				</section>
				<section className="desc">
						<h3>Build Brand Loyalty and Retention through Content Marketing</h3>
						<p>We help develop value adding and user centric content for your customers that will encourage a two-way conversation. Through a strong content marketing strategy, we help your brand develop greater brand awareness and loyalty.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt right clearfix">
				<section className="desc">
						<h3>Boost Organic Traffic through SEO</h3>
						<p>Our SEO experts determine the best mix of on-page and off-page SEO tools like CTR-optimised meta tags and competitor analysis to maximise your organic website traffic, increase conversions and grow your revenue through sales. Organic leads convert 3 times more than any other type of leads - paid, social, email and referral.</p>
				</section>
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/seo-solutions.png" alt="" /></figure>
				</section>
				<section className="desc mbl">
						<h3>Boost Organic Traffic through SEO</h3>
						<p>Our SEO experts determine the best mix of on-page and off-page SEO tools like CTR-optimised meta tags and competitor analysis to maximise your organic website traffic, increase conversions and grow your revenue through sales. Organic leads convert 3 times more than any other type of leads - paid, social, email and referral.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt clearfix">
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/digitalCollaterals.png" alt="" /></figure>
				</section>
				<section className="desc">
						<h3>E-commerce Integration</h3>
						<p>We provide E-commerce solutions that help businesses scale fast. An E-commerce website with several layers of functionality different from the usual static websites, includes a web server to host a storefront, payment gateway, billing system, an inventory database and a complex dispatch system including returns.</p>
				</section>
		</div>
	</section>
</section>
<section className="section-wrap-top cronicles">
	<section className="container">
		<h2>Client Chronicles</h2>
		</section>
<section className="cronicles-in">
	<section className="container">
		<div className="row clearfix">
				<section className="col-lg-5">
						<figure><img src="https://www.bleap.in/public/home/images/cup.jpg" alt="" /></figure>
				</section>
				<section className="col-lg-7">
						<figure><img src="https://www.bleap.in/public/home/images/laptap.png" alt="" /></figure>
				</section>
		</div>
	</section>
</section>
</section>
				</section>
					<Footer />
           	</React.Fragment>
        );
    }
}
export default FmcgAndRetail;