import React, { Component } from 'react';
import config from './Config';
import Footer from './layout/Footer';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';

class About extends Component {
	constructor(props) {
		super(props);
		console.log(config.SITE_LANG);
	}
    render() {
        return (
        	<React.Fragment>
        		<MetaTags>
        			<title>Online Marketing | SEO | Social Media | Analytics Chennai, India</title>
        			<meta name="description" content="Bleap is an award winning, leading digital marketing company, offering digital marketing solutions for B2B, B2C &amp; eCommerce companies. Our digital marketing services include responsive web development, SEO, PPC, Social Media Marketing and Branding"/>
					<link rel="canonical" href="https://www.bleap.in/about-us" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Online Marketing | SEO | Social Media | Analytics Chennai, India" />
					<meta property="og:description" content="Bleap is an award winning, leading digital marketing company, offering digital marketing solutions for B2B, B2C &amp; eCommerce companies. Our digital marketing services include responsive web development, SEO, PPC, Social Media Marketing and Branding" />
					<meta property="og:url" content="https://www.bleap.in/about-us/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/aboutus.jpg"}/>
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="Bleap is an award winning, leading digital marketing company, offering digital marketing solutions for B2B, B2C &amp; eCommerce companies. Our digital marketing services include responsive web development, SEO, PPC, Social Media Marketing and Branding" />
					<meta name="twitter:title" content="Online Marketing | SEO | Social Media | Analytics Chennai, India" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/aboutus.jpg"}/>
        		</MetaTags>
	            <section className="sub-page about">
	             	<section className="intro section-wrap">
                    	<section className="container">
                    		<section className="breadcrumbs layout1">
								<ul>
									<li><Link to='/'>Home</Link></li>
									<li> > </li>
									<li className="act">About</li>
								</ul>
							</section><aside className="item-img">
                            	<h2>
	                            	BLeap
                            	</h2>
	                            <h1>Bleap - Website Design &amp; Digital Marketing Company Chennai, Mumbai, Pune &amp; Bangalore</h1>
                                <figure><img src={config.APP_URL+"/public/home/images/aboutus.jpg"} alt="About us" className="img-responsive" /></figure>
							</aside>	
                        	<aside className="cnt">
                            	<h2>{
	                            		{
	                            			'ta' : ('பிலீப்')
	                            		} [config.SITE_LANG] || 'BLeap'
	                            	}
	                            </h2>
	                            <h1>Bleap - Website Design &amp; Digital Marketing Company Chennai, Mumbai, Pune &amp; Bangalore</h1>
	                            <p>In 2016, Bleap Integrated Business Solutions was a full-service <Link to={config.ROUTE_URL + "/"}>digital marketing company located in Chennai</Link> and New Delhi. We provide Online services such as Responsive Web Design & Development, Search Engine Optimization (SEO), Search Engine Marketing (SEM), Social Media Marketing (SMM), and Strategic Marketing Services to clients from India and across the world.</p>
								<h2 className="hdg">Looking for Best Digital Marketing Company</h2>
								<p>We have a team of experts comprising Project Managers, Web Designers, Developers, Digital Marketing, <Link to={config.ROUTE_URL + "/services/search-engine-optimization"}>SEO Experts</Link>, and Search &amp; Social Media Marketers with over five decades of combined experience across various businesses. Today we boast of a unique, close-knit team with experts in all facets of digital marketing committed to growing your business.</p>
	                        	<h3>Why Digital Marketing is required</h3> 
								<p><Link to={config.ROUTE_URL + "/services/online-advertising"}>Digital marketing</Link> is a concept that involves promoting and selling products or services through digital technologies such as the internet, mobile phones or electronic billboards, etc. Corporations can very quickly implement digital Marketing if they know the technology they are using for this purpose.</p>
	                        	<h4>We follow a simple work philosophy:</h4>
									<ul>
										<li>Think Big - Start Small - Scale Fast</li>
										<li>Highest Standards of Quality</li>
										<li>Personalized Attention</li>
										<li>Results focused Innovation</li>
										<li>Exceeding Client Expectations</li>
									</ul>
                        	</aside>
                    	</section>
                    	<section className="btm-bg btm-img"></section>
                	</section>
                </section>
			 <Footer />
	        </React.Fragment>
        );
    }
}
export default About;