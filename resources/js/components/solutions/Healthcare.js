import React, { Component } from 'react';
import config from '.././Config';
import Footer from '.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class Healthcare extends Component {
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
            		<title>Healthcare</title>
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
									<li className="act">Healthcare</li>
								</ul>
							</section>	
								<section className="hdg sec">	
									<h1>Healthcare</h1>
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
												<h3>Winning the Trust of Patients</h3></div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>The role of caring and empathetic communication being central to your brand's success in this industry, there is a need to consistently engage with patients and provide educational, reliable information.</p>
												</div>
											</div>
										</div>
									</div>
									<div className="flip-card">
										<div className="flip-card-inner">
											<div className="flip-card-front">
												<div className="desc">
												<figure><img src="https://www.bleap.in/public/home/images/firstStrategy.png" /></figure>
												<h3>Defining Target Segments</h3>
												</div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>Determining audience segments is the most challenging in the healthcare space. Factors like age, gender, geographic location and patient medical condition need to be taken into careful consideration in order to craft customized messaging to the right audience.</p> 
												</div>
											</div>
										</div>
									</div>
									<div className="flip-card">
										<div className="flip-card-inner">
											<div className="flip-card-front">
												<div className="desc">
												<figure><img src="https://www.bleap.in/public/home/images/targetDefining.png" /></figure>
												<h3>Developing Focused Personalized Communication</h3>
												</div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>A general one-size-fits-all marketing approach definitely won't work for your brand. As patients increasingly use the internet for their healthcare needs, there is an increasing necessity to create personalised content to encourage a relationship with them.</p> 
												</div>
											</div>
										</div>
									</div>
									<div className="flip-card">
										<div className="flip-card-inner">
											<div className="flip-card-front">
												<div className="desc">
												<figure><img src="https://www.bleap.in/public/home/images/brandLoyality.png" /></figure>
												<h3>Openly Embracing Multiple Online Platforms</h3>
												</div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>In the post-Covid world with more patients preferring to book appointments online, there is an unprecedented need for your brand to be present across a number of digital platforms in order to maximize potential reach.</p> 
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
						<h3>High-Quality Lead Generation</h3>
						<p>Our team of experts deliver high-quality leads of patients for healthcare brands across a number of powerful platforms like Google, Facebook, Instagram, YouTube and LinkedIn. We create high performing landing pages, which allow for higher quality leads at a lower cost per appointment.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt right clearfix">
				<section className="desc">
						<h3>Meaningful Social Media Campaigns</h3>
						<p>Our social media campaigns will help your brand build a trustworthy and credible image. Through our personalised strategies, we create emotionally-compelling content that will resonate with your patients. From engaging videos to relevant social media awareness campaigns, we can help build your brand.</p>
				</section>
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/leadGeneration.png" alt="" /></figure>
				</section>
				<section className="desc mbl">
						<h3>Meaningful Social Media Campaigns</h3>
						<p>Our social media campaigns will help your brand build a trustworthy and credible image. Through our personalised strategies, we create emotionally-compelling content that will resonate with your patients. From engaging videos to relevant social media awareness campaigns, we can help build your brand.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt clearfix">
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/socialMediaCampaigns.png" alt="" /></figure>
				</section>
				<section className="desc">
						<h3>Implement SEO for Organic Traffic</h3>
						<p>Our team of SEO specialists use a variety of on-page and off-page SEO techniques to drive higher organic traffic to your website. This helps your brand become more discoverable and is crucial to increase conversions. Our SEO campaigns can grow organic traffic by up to 50% in 6 months.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt right clearfix">
				<section className="desc">
						<h3>Inform and Entertain through Content Marketing</h3>
						<p>Through our research-driven content marketing approach, we can help you build a two-way interactive relationship with your patients through personalised content and establish your brand as a credible industry leader.</p>
				</section>
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/seo-solutions.png" alt="" /></figure>
				</section>
				<section className="desc mbl">
						<h3>Inform and Entertain through Content Marketing</h3>
						<p>Through our research-driven content marketing approach, we can help you build a two-way interactive relationship with your patients through personalised content and establish your brand as a credible industry leader.</p>
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
export default Healthcare;