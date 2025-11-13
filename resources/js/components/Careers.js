import React, { Component } from 'react';
import config from './Config';
import Footer from './layout/Footer';
import MetaTags from 'react-meta-tags';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Careers extends Component {
	componentDidMount(){
		$('.apply').click(function(){
			$('.career-wrapper, .career-modal').addClass("active");
		});

		$('.close').click(function(e){
			e.preventDefault();
			$('.career-wrapper, .career-modal').removeClass("active");	
		});
	}
    render() {
        return (
        	<React.Fragment>
        		<MetaTags>
        			<title>Web Design | Digital Marketer | Social Media | SEO | SEM Jobs Chennai</title>
        			<meta name="description" content="Want to be part of a close-knit Bleap team that is motivated, smart, disciplined, organized and committed to turning ideas into action. Send your Resume."/>
					<link rel="canonical" href="https://www.bleap.in/careers" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Web Design | Digital Marketer | Social Media | SEO | SEM Jobs Chennai" />
					<meta property="og:description" content="Want to be part of a close-knit Bleap team that is motivated, smart, disciplined, organized and committed to turning ideas into action. Send your Resume." />
					<meta property="og:url" content="https://www.bleap.in/careers/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/careerimg1.jpg"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="Want to be part of a close-knit Bleap team that is motivated, smart, disciplined, organized and committed to turning ideas into action. Send your Resume." />
					<meta name="twitter:title" content="Web Design | Digital Marketer | Social Media | SEO | SEM Jobs Chennai" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/careerimg2.jpg"}/>
        		</MetaTags>

	            <section className="sub-page services gen careers">
				<section className="int">				
					<section className="container">
						<section className="breadcrumbs layout2">
								<ul>
									<li><Link to='/'>Home</Link></li>
									<li> > </li>
									<li className="act">Careers</li>
								</ul>
							</section>
						<section className="item-cnt clearfix">			
							<section className="hdg sec">					
								<h1>Join us. We are cool</h1>
							</section>
							<section className="item-cnt-in">	
								<figure><img src={config.APP_URL+"/public/home/images/careerimg1.jpg"} alt="careerimg1" className="img-responsive" /></figure>
										<p>Bleap is all about telescopic horizon and microscopic execution. Founded in 2016, Bleap is a Chennai, India based digital marketing agency made for the world. We offer responsive website design & development Search Engine Optimization (SEO), Online Advertising (SEM), Social Media Marketing (SMM), Strategic Marketing and E-Commerce solutions for our clients.</p>
										<p>We at Bleap are committed to cultivating a culture of exceptional people who create outstanding & measurable results for our clients. We are a close-knit team that is motivated, smart, disciplined, organized and committed to turning ideas into action. We are professional, honest and passionate about our work around the world.</p>
								<p>We already have many happy clients and are adding more every day. Grow with us as we deliver the best digital marketing solutions to our clients across Chennai, Mumbai, Delhi, Bangalore, Ahmedabad and </p>
								<p className="big">We keep augmenting our team as we add new clients and business. Here  are the current vacancies at Bleap</p>		
							</section>
						</section>
					</section>
				</section>
						<section className="careers-cnt">
							<section className="container">
								<section className="career-wrap section-wrap">
									<h3><b>Technical</b></h3>
									<section className="career-wrap-in">
										<section className="row">
											<aside className="col-md-4">
												<figure><img src={config.APP_URL+"/public/home/images/careerimg2.jpg"} alt="careerimg2" className="img-responsive" /></figure>
											</aside>
											<aside className="col-md-8">
														<section className="item-cnt2">
															<ul>
																<li>WordPress/WooCommerce<br/>Web Developer <span><a className="btn-primary apply" href="javascript:;">Apply Now</a></span></li>
																<li>.Net/PHP Devloper <span><a className="btn-primary apply" href="javascript:;">Apply Now</a></span></li>
																<li>Magento Developer <span><a className="btn-primary apply" href="javascript:;">Apply Now</a></span></li>
																<li>Web Graphic Designer <span><a className="btn-primary apply" href="javascript:;">Apply Now</a></span></li>
															</ul>
														</section>	
											</aside>
										</section>		
									</section>
								</section>
								<section className="career-wrap section-wrap">
									<h3><b>Non - Technical</b></h3>
									<section className="career-wrap-in">
										<section className="row">
											<aside className="col-md-4">
												<figure><img src={config.APP_URL+"/public/home/images/careerimg3.jpg"} alt="careerimg3" className="img-responsive" /></figure>
											</aside>
											<aside className="col-md-8">
													<section className="item-cnt2">
														<ul>
															<li>Pre-sales Manager <span><a className="btn-primary apply" href="javascript:;">Apply Now</a></span></li>
															<li>Business Development Manager <span><a className="btn-primary apply" href="javascript:;">Apply Now</a></span></li>
															<li>Content Writer <span><a className="btn-primary apply" href="javascript:;">Apply Now</a></span></li>
															<li>Social Media Marketer <span><a className="btn-primary apply" href="javascript:;">Apply Now</a></span></li>
															<li>Ad.Campaign Manager <span><a className="btn-primary apply" href="javascript:;">Apply Now</a></span></li>
															<li>Search Engine Manager(SEO) <span><a className="btn-primary apply" href="javascript:;">Apply Now</a></span></li>
														</ul>
													</section>	
											</aside>
										</section>		
									</section>
								</section>
							</section>
						</section>					
						<section className="career-wrapper"></section>
						 <section className="career-modal">
							<a href="#" className="close">X</a>
							<p>Interested in a position with BLeap?</p> 
							<p>We are hiring for multiple positions!</p> 
							<p>Mail your Resume ' to careers <a href="mailto:careers@bleap.in" target="_blank" rel="noopener noreferrer">careers@bleap.in</a>.</p> 
							<p>Apply today!</p>
						 </section>
		        </section>
		        <Footer />
	        </React.Fragment>
        );
    }
}
export default Careers;