import React, { Component } from 'react';
import config from '.././Config';
import Footer from '.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class Banking extends Component {
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
            		<title>Banking, Financial Services &amp; Insurance</title>
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
									<li className="act">Banking</li>
								</ul>
							</section>	
								<section className="hdg sec">	
									<h1>Banking</h1>
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
												<h3>Building Consumer Trust</h3></div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>Your products need to be depicted as synonymous with trust and reliability. A shift in focus in communication needs to be initiated - from only selling the product, to also selling the purpose, vision and values of your brand.</p>
												</div>
											</div>
										</div>
									</div>
									<div className="flip-card">
										<div className="flip-card-inner">
											<div className="flip-card-front">
												<div className="desc">
												<figure><img src="https://www.bleap.in/public/home/images/firstStrategy.png" /></figure>
												<h3>Adopting a Digital Marketing-First Strategy</h3>
												</div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>Without a clear digital marketing strategy, the tendency is to default to traditional marketing tactics and expensive mass media approaches. Your brand should instead leverage the power of digital to hyper-target those in need of your products and services.</p> 
												</div>
											</div>
										</div>
									</div>
									<div className="flip-card">
										<div className="flip-card-inner">
											<div className="flip-card-front">
												<div className="desc">
												<figure><img src="https://www.bleap.in/public/home/images/targetDefining.png" /></figure>
												<h3>Defining Target Segments</h3>
												</div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>The traditional approach of trying to be all things to all people, is one that does not work in the new digital age. For your brand to adopt a digital approach, it calls for segmenting your audience not only to generate quality leads but also to craft the perfect customized messaging to each group.</p> 
												</div>
											</div>
										</div>
									</div>
									<div className="flip-card">
										<div className="flip-card-inner">
											<div className="flip-card-front">
												<div className="desc">
												<figure><img src="https://www.bleap.in/public/home/images/brandLoyality.png" /></figure>
												<h3>Creating Brand Loyalty</h3>
												</div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>Cutting through the noise requires a strong focus on what makes you different, and the specific ways you provide value to consumers. By personalizing communication and targeting ad copy in a way that addresses their needs and identity, you can take sure steps towards building brand loyalty.</p> 
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
						<h3>High performance landing pages</h3>
						<p>Lead generation is a vital aspect of digital marketing that helps your business generate revenues and a well-optimised landing page is one of the key factors that enables this growth. Our team of experts through our 7-stage project checklist helps in combining fluid design philosophy with an intelligent architecture to design and develop responsive websites.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt right clearfix">
				<section className="desc">
						<h3>Multi-channel advertising for lead generation</h3>
						<p>We have constantly innovated and pushed the bar to generate high quality, relevant leads for our financial services clients using the most relevant channels. Some of the channels we use for our clients include Google Search and Display, Facebook, Instagram, YouTube and LinkedIn.</p>
				</section>
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/leadGeneration.png" alt="" /></figure>
				</section>
				<section className="desc mbl">
						<h3>Multi-channel advertising for lead generation</h3>
						<p>We have constantly innovated and pushed the bar to generate high quality, relevant leads for our financial services clients using the most relevant channels. Some of the channels we use for our clients include Google Search and Display, Facebook, Instagram, YouTube and LinkedIn.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt clearfix">
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/socialMediaCampaigns.png" alt="" /></figure>
				</section>
				<section className="desc">
						<h3>Consumer Centric Social Media Campaigns</h3>
						<p>Driven by creativity and based on consumer analytics, we create meaningful social media campaigns which communicate your brand's message in an engaging way. Additionally, our team of experts tap into the powerful combination of creative, copy and audience targeting to drive interest and ultimately conversions.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt right clearfix">
				<section className="desc">
						<h3>Increased Discoverability through Search Engine Optimization</h3>
						<p>Our SEO campaigns can grow organic traffic by up to 50% in 6 months. We combine various on-page and off-page SEO services into a defined 4 step process and work closely with your team to help you meet your company's short-term and long-term goals.</p>
				</section>
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/seo-solutions.png" alt="" /></figure>
				</section>
				<section className="desc mbl">
						<h3>Increased Discoverability through Search Engine Optimization</h3>
						<p>Our SEO campaigns can grow organic traffic by up to 50% in 6 months. We combine various on-page and off-page SEO services into a defined 4 step process and work closely with your team to help you meet your company's short-term and long-term goals.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt clearfix">
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/digitalCollaterals.png" alt="" /></figure>
				</section>
				<section className="desc">
						<h3>Communicate your Brand's Identity through Digital Collaterals</h3>
						<p>Through our well thought out combination of copy and design, we help create digital collaterals like emailersthat communicate your brand's identity and core essence to your existing and prospective customers.</p>
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
export default Banking;