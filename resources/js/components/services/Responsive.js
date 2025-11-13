import React, { Component } from 'react';
import config from '.././Config';
import Footer from '.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class Responsive extends Component {
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
        			<title>Responsive Website Design &amp; Development Company Chennai, Bangalore, Mumbai, Pune, India.</title>
        			<meta name="description" content="Bleap is expert in responsive web design &amp; development. We excel in Word Press, Drupal, Joomla, Magento, Miva Merchant, os Commerce and Zen Cart as well as customised platforms. Our talented team is expert in HTML, JavaScript, .Net, CSS, PHP, Ruby on"/>
					<link rel="canonical" href="https://www.bleap.in/services/responsive-website-design-development" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Responsive Website Design &amp; Development Company Chennai, Bangalore, Mumbai, Pune, India." />
					<meta property="og:description" content="Bleap is expert in responsive web design &amp; development. We excel in Word Press, Drupal, Joomla, Magento, Miva Merchant, os Commerce and Zen Cart as well as customised platforms. Our talented team is expert in HTML, JavaScript, .Net, CSS, PHP, Ruby on" />
					<meta property="og:url" content="https://www.bleap.in/services/responsive-website-design-development/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/page-wireframes.png"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="Bleap is expert in responsive web design &amp; development. We excel in Word Press, Drupal, Joomla, Magento, Miva Merchant, os Commerce and Zen Cart as well as customised platforms. Our talented team is expert in HTML, JavaScript, .Net, CSS, PHP, Ruby on" />
					<meta name="twitter:title" content="Responsive Website Design &amp; Development Company Chennai, Bangalore, Mumbai, Pune, India." />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/project-scope.png"} />
        		</MetaTags>
	            <section className="sub-page services responsive">
				   <section className="intro">	
				   		<section className="container">	
				   			<section className="breadcrumbs layout3">
								<ul>
									<li><Link to='/'>Home</Link></li>
									<li> > </li>
									<li><Link to={config.ROUTE_URL+'/services'}>Services</Link></li>
									<li> > </li>
									<li className="act">Responsive Web Site Design & Development</li>
								</ul>
							</section>			
							<section className="item-cnt">	
								<section className="hdg sec">	
									<aside className="ser-menu">
										<div className="sub-menu"></div>
										<ul className="hidden2">
											<li><Link to={config.ROUTE_URL + '/services/responsive-website-design-development/corporate-web-design/'}>Corporate Web Design</Link></li>
											<li><Link to={config.ROUTE_URL + '/services/responsive-website-design-development/progressive-web-apps/'}>Progressive Web Apps</Link></li>
											<li><Link to={config.ROUTE_URL + '/services/responsive-website-design-development/magento-web-development/'}>Magento Web Development</Link></li>
										</ul>
									</aside>
									<h1>Responsive Web Site Design & Development</h1>
								</section>
								<p>We strongly believe that your website is the most valuable digital asset for your company. And hence, we take all efforts to deliver the best by combining fluid design philosophy with an intelligent architecture to design and develop responsive websites.</p>
								<p>Our team members at Chennai and New Delhi are affable, communicate well and can easily explain technology options that will benefit your requirements. Following due diligence and adhering to process from start to completion of work, we ensure the whole website development process becomes a hassle free experience for our clients</p>
							</section>
						</section>
	                </section>
				   <section className="section-wrap-ash resp-7stage">				
						<section className="container">
							<h2 className="sec">Bleap's "7 Stage - Project check list"</h2>
							<p>On assigning project to us, you are assured with our "7 steps - Project Checklist" that gives you the complete road map from initial discussion stage to training & documentation.</p>
						</section>
				 </section>
					<section className="serv-inner">
						<section className="container">
							<section className="serv-cnt">
								<section className="item-wrap clearfix">
										<h3>PROJECT SCOPE</h3>
	                                <figure><img src={config.APP_URL+"/public/home/images/project-scope.png"} alt="project-scope" className="img-responsive" /></figure>
									<aside className="item-desc">
										<h3>PROJECT SCOPE</h3>
										<p>At Bleap, we understand various business verticals web requirements because of our consistent success stories. This means, we evaluate your business goals, initiate research on competition's Online presence, identify key differentiator as opportunities and provide value added recommendations & suggestions, that can not only enhance better customer experience but also create scope for better conversions.</p>
									</aside>
								</section>
								<section className="item-wrap clearfix">
										<h3>PAGE WIREFRAMES</h3>
	                                <figure><img src={config.APP_URL+"/public/home/images/page-wireframes.png"} alt="page-wireframes" className="img-responsive" /></figure>
									<aside className="item-desc">
										<h3>PAGE WIREFRAMES</h3>
										<p>Efficient wire framing tools are used to give you an understanding of the page structure across devices [Desktop, Tabs and Phones]. These wireframes explains in detail the information place holders across the main templates of the web site. This is an unique opportunity for effective planning and efficient completion of project on time.</p>
									</aside>
								</section>
								<section className="item-wrap clearfix">
										<h3>USER INTERFACE DESIGN & CONTENT</h3>
	                                <figure><img src={config.APP_URL+"/public/home/images/ui-design.png"} alt="ui-design" className="img-responsive" /></figure>
									<aside className="item-desc">
										<h3>USER INTERFACE DESIGN & CONTENT</h3>
										<p>While wireframes are shared for simple static sites, a high end "Information Architecture Design Templates - [IAD]" is designed for complex e-commerce sites as it involves multiple navigation structure and display of categories, sub-categories and customer friendly icons. Bleap believes that a responsive, visually appealing design component always has a better possibility to increase stickiness to pages and therefore leading to higher business transactions.</p>
										<p>Web content and Call to actions are the two most important factors for effective communication. We ensure that content and call to actions are appropriate to web standards, optimise key words, therefore, page has good keyword density and call to actions lead to effective page navigation and conversions</p>
									</aside>
								</section>
								<section className="item-wrap clearfix">
										<h3>PAGE DEVELOPMENT AND CONTENT INTEGRATION</h3>
	                                <figure><img src={config.APP_URL+"/public/home/images/page-dvt.png"} alt="page-dvt" className="img-responsive" /></figure>
									<aside className="item-desc">
										<h3>PAGE DEVELOPMENT AND CONTENT INTEGRATION</h3>
										<p>Our technical team are competent to work across multiple technology platforms. From front end coders to developers, we strongly believe in coding standards as this becomes important from Search point of view and also the size of page determines quick down load. We hand hold clients for developing their content management system [CMS] purely in terms of business need and also help in training and documentation of the CMS module.</p>
										<p>So, if you are a small business and the cost is a factor in developing your website, we will consider a CMS application that does not require a substantial number of programming hours for set up and on-going maintenance. We work on open source technology which gives scalability and flexibility.</p>
										<p>Web content is carefully evaluated from web point of view and integrated in a seamless manner to avoid content fatigue. Optimised with key words our Search team ensures that page content fulfils basic standard and is not highly populated which results in content spamming.</p>
									</aside>
								</section>
								<section className="item-wrap clearfix">
										<h3>QUALITY AUDIT (QA)</h3>
	                                <figure><img src={config.APP_URL+"/public/home/images/quality-audit.png"} alt="quality-audit" className="img-responsive" /></figure>
									<aside className="item-desc">
										<h3>QUALITY AUDIT (QA)</h3>
										<p>While design creation and development of back end requires creative and technology skill sets, we also focus on quality testing both front end and at the code level. All test cases are documented for internal use and also shared with clients as appropriate to the scale of project.</p>
									</aside>
								</section>
								<section className="item-wrap clearfix">
										<h3>USER ACCEPTANCE TESTING & GO-LIVE</h3>
	                                <figure><img src={config.APP_URL+"/public/home/images/user-acceptance.png"} alt="user-acceptance" className="img-responsive" /></figure>
									<aside className="item-desc">
										<h3>USER ACCEPTANCE TESTING & GO-LIVE</h3>
										<p>As part of transparency and adhering to timelines, we share projects with our clients for approvals at various stages. This UAT process helps stakeholders to share their feedback and approvals. Post sign-off at the UAT stage, we assist clients in hosting at client server</p>
									</aside>
								</section>
								<section className="item-wrap clearfix">
										<h3>ONLINE MARKETING</h3>
	                                <figure><img src={config.APP_URL+"/public/home/images/online-marketing.png"} alt="online-marketing" className="img-responsive" /></figure>
									<aside className="item-desc">
										<h3>ONLINE MARKETING</h3>
										<p>Once the site goes live, we will work with you to establish an ongoing digital marketing plan that includes Search Engine Optimization (SEO), Search Engine Marketing (SEM), Social Media Marketing, Email Marketing and more</p>
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
export default Responsive;