import React, { Component } from 'react';
import config from '../.././Config';
import Footer from '../.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


class Audience extends Component {
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
        			<title>Audience Research | SEO Company Chennai, Mumbai, Pune and Bangalore, India</title>
        			<meta name="description" content="Bleap does Audience Research, Buyers&#039; Persona, Keyword Research, Competitive Analysis, Baclink Building and many activities to build traffic organically."/>
					<link rel="canonical" href="https://www.bleap.in/services/search-engine-optimization/audience-research" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Audience Research | SEO Company Chennai, Mumbai, Pune and Bangalore, India" />
					<meta property="og:description" content="Bleap does Audience Research, Buyers&#039; Persona, Keyword Research, Competitive Analysis, Baclink Building and many activities to build traffic organically." />
					<meta property="og:url" content="https://www.bleap.in/services/search-engine-optimization/audience-research/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/audience-research.jpg"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="Bleap does Audience Research, Buyers&#039; Persona, Keyword Research, Competitive Analysis, Baclink Building and many activities to build traffic organically." />
					<meta name="twitter:title" content="Audience Research | SEO Company Chennai, Mumbai, Pune and Bangalore, India" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/audience-research.jpg"} />
        		</MetaTags>
				<section className="sub-page services audi">
					<section className="intro">
				  	<section className="int">				
						<section className="container">	
							<section className="breadcrumbs layout1">
								<ul>
									<li><Link to='/'>Home</Link></li>
									<li> > </li>
									<li><Link to={config.ROUTE_URL+'/services'}>Services</Link></li>
									<li> > </li>
									<li><Link to={config.ROUTE_URL+'/services/search-engine-optimization'}>Search Engine Optimization</Link></li>
									<li> > </li>
									<li className="act">Audience Research</li>
								</ul>
							</section>
							<section className="item-cnt">				
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
									<h1>Audience Research</h1>
								</section>
								<p>Our proprietary Audience Research Template helps us understand your audience, your industry, your competition (direct and lateral) well enough to draw a context.</p>
								<h3>Buyer Persona</h3>
								<p>We work with you to develop buyer persona and buyer journey for your business. Certain customers search by broad category while others by long tail search words including brand, product, size, colour e.t.c</p>
								<h3>Keyword Research</h3>
								<p>Keywords research is the core activity that helps in displaying your website at the top position in the search engine. We get into the skin of the customer and draw a comprehensive list of target keywords that helps customers find your category and brand easily and organically. This is an ongoing and an iterative process.</p>
							</section>
						</section>
					</section>
					</section>
							<section className="section-wrap-ash">				
								<section className="container">
									<h3>Device Diversity (Mobile vs. Desktops) also adds a new layer of complexity</h3>
									<p>Ethnographic and Cultural insights also determine buyers’ persona. We study this data and trends to design a customized experience for every persona. The better we know our customers and their search behaviour, the better we are able to drive conversion and revenue.</p>
									
									<h3>Competitive Analysis</h3>
									<p>Competition as seen by you could be different as seen by your customers. Customers more often are looking for solutions to their problems. In this process, they search across categories and that’s the real competition.</p>

									<h3>Backlinks</h3>
									<p>It is important to build relevance and recency for our brand through building relationships with relevant and more searched sites. This is an ongoing process and takes time and patience. It improves your brand awareness and we recommend it.</p>
								</section>
							</section>
	           		</section>
				<Footer />
			</React.Fragment>
        );
    }
}
export default Audience;