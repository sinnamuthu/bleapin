import React, { Component } from 'react';
import config from '.././Config';
import Footer from '.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class Education extends Component {
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
            		<title>Education</title>
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
									<li className="act">Education</li>
								</ul>
							</section>	
								<section className="hdg sec">	
									<h1>Education</h1>
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
												<h3>Communicating Trust and Assurance</h3></div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>Gaining the trust of parents/decision-makers is vital to your institution's success. Communicating a spirit of empathy and values is essential to inspire confidence in the minds of parents and students alike.</p>
												</div>
											</div>
										</div>
									</div>
									<div className="flip-card">
										<div className="flip-card-inner">
											<div className="flip-card-front">
												<div className="desc">
												<figure><img src="https://www.bleap.in/public/home/images/firstStrategy.png" /></figure>
												<h3>Improving Lead Quality</h3>
												</div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>Not every potential student who shows interest in a course actually joins it. It can be very difficult and time-consuming for you to follow up on leads and ensure conversions. Good lead quality is thus a strong desirable.</p> 
												</div>
											</div>
										</div>
									</div>
									<div className="flip-card">
										<div className="flip-card-inner">
											<div className="flip-card-front">
												<div className="desc">
												<figure><img src="https://www.bleap.in/public/home/images/targetDefining.png" /></figure>
												<h3>Standing Out from the Competition</h3>
												</div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>The education space which has to a large extent moved online in the post-Covid world, is now more competitive than ever. In this environment, it's especially difficult for your brand to stand out and establish itself as a strong player.</p> 
												</div>
											</div>
										</div>
									</div>
									<div className="flip-card">
										<div className="flip-card-inner">
											<div className="flip-card-front">
												<div className="desc">
												<figure><img src="https://www.bleap.in/public/home/images/brandLoyality.png" /></figure>
												<h3>Increasing Response during Enrolment</h3>
												</div>
											</div>
											<div className="flip-card-back">
												<div className="desc">
													<p>With increasing costs and competition for student attention, it's getting harder to enrol and retain students. Prospecting the right audience for your institution during enrolment time, is crucial to grow and build a credible brand.</p> 
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
						<h3>Increase your Leads through Visibility on Google</h3>
						<p>Our content team along with our Search Engine Optimisation (SEO) specialists use a variety of on-page and off-page SEO techniques to drive higher organic traffic to your website. Organic leads convert 3 times more than any other type of leads - paid, social, email and referral. Also, revenue per organic conversion is 120% more than any other conversion type.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt right clearfix">
				<section className="desc">
						<h3>Generate Leads through Landing Pages</h3>
						<p>Finding the right students and applicants is the foundation of every educational institution. Our team of experts helps you create the perfect landing page, optimised to help you enrol more students and grow your institution. Through our 7-stage project checklist we combine fluid design philosophy with an intelligent architecture to design and develop responsive websites.</p>
				</section>
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/leadGeneration.png" alt="" /></figure>
				</section>
				<section className="desc mbl">
						<h3>Generate Leads through Landing Pages</h3>
						<p>Finding the right students and applicants is the foundation of every educational institution. Our team of experts helps you create the perfect landing page, optimised to help you enrol more students and grow your institution. Through our 7-stage project checklist we combine fluid design philosophy with an intelligent architecture to design and develop responsive websites.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt clearfix">
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/socialMediaCampaigns.png" alt="" /></figure>
				</section>
				<section className="desc">
						<h3>Design Digital Collaterals that amplify your Institution's Identity</h3>
						<p>Through our well thought out combination of copy and design, we help create digital collaterals like emailersthat communicate your brand's identity and core essence to your existing and prospective customers.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt right clearfix">
				<section className="desc">
						<h3>Build Credibility and Authority through Content Marketing</h3>
						<p>Gaining a reputation as an expert in a field can be invaluable for institutions as it helps gain brand recognition and build trust. By effectively using content marketing through the medium of well written blogs and social media content - educational institutions can nurture relationships with both students and parents as well as strengthen their brand.</p>
				</section>
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/seo-solutions.png" alt="" /></figure>
				</section>
				<section className="desc mbl">
						<h3>Build Credibility and Authority through Content Marketing</h3>
						<p>Gaining a reputation as an expert in a field can be invaluable for institutions as it helps gain brand recognition and build trust. By effectively using content marketing through the medium of well written blogs and social media content - educational institutions can nurture relationships with both students and parents as well as strengthen their brand.</p>
				</section>
		</div>
		<div className="ourSolutionsCnt clearfix">
				<section className="img">
						<figure><img src="https://www.bleap.in/public/home/images/digitalCollaterals.png" alt="" /></figure>
				</section>
				<section className="desc">
						<h3>Multi-Channel Advertising for Lead Generation</h3>
						<p>We have constantly innovated and pushed the bar to generate high quality, relevant leads for our educational sector clients using the most relevant channels. Some of the channels we use for our clients include Google Search and Display, Facebook, Instagram and YouTube.</p>
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
export default Education;