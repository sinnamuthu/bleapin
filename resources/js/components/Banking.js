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
    render {
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
									<h1>Bankings</h1>
								</section>
							</section>					
						</section>					
					<section className="section-wrap">				
						<section className="container">
							  <h3>Top marketing challenges</h3>	
							  <section classNameName="solutions-post-wrap">
	<div classNameName="flip-card"><!--start-->
		<div classNameName="flip-card-inner">
			<div classNameName="flip-card-front">
				<div classNameName="desc">
				<figure><img src="https://www.bleap.in/public/home/images/buildingConsumerTrust.png" /></figure>
				<h3>Building Consumer Trust</h3></div>
			</div>
			<div classNameName="flip-card-back">
				<div classNameName="desc">
					<p>Your products need to be depicted as synonymous with trust and reliability. A shift in focus in communication needs to be initiated - from only selling the product, to also selling the purpose, vision and values of your brand.</p>
				</div>
			</div>
		</div>
	</div><!--./start-->
	<div className="flip-card"><!--start-->
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
	</div><!--./start-->
	<div className="flip-card"><!--start-->
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
	</div><!--./start-->
	<div className="flip-card"><!--start-->
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
	</div><!--./start-->
</section>
						</section>
					</section>					
					<section className="section-wrap-ash">	
					<section className="container">
						<h2>BLeap SEO Process</h2>
						<h3>SEO Audit & Keyword Research</h3>
						<p>We research your audience, key competitors, and key word profile. We perform comprehensive audit of your html tags, URL structure, site speed, internal and external links, duplicate content, keyword density and more. <Link to={config.ROUTE_URL+'/services/search-engine-optimization/audience-research/'}>Read More...</Link></p>
						<h3>Campaign Strategy & Launch</h3>
						<p>Once we understand your category, your buyer persona, your audience and your website, we work with your team to create an SEO campaign strategy and start working. Read more about <Link to= {config.ROUTE_URL+'/services/search-engine-optimization/on-page-optimization/'}>On-page Search Engine Optimization</Link> and <Link to= {config.ROUTE_URL+'/services/search-engine-optimization/off-page-optimization/'}>Off-page Search Engine Optimization.</Link></p>
						<h3>Conversion Optimization</h3>
						<p>Our Search Engine Optimization campaigns are optimized for both users and search engines. As our SEO strategy works hard to improve your Search Engine Ranking (SERP), we simultaneously make changes to your website to improve your conversion rates and turn visitors into paying customers.<Link to= {config.ROUTE_URL+'/services/search-engine-optimization/on-page-optimization/'}>Read More...</Link></p>
						<h3>Reporting & Analytics</h3>
						<p>We track all the search data and resultant analytics on all major search engines like Google, Yahoo, Bing, Yelp, Ask, AOL and Baidu to share the progress in our monthly dashboard. This will help you track our progress against agreed goals. <Link to={config.ROUTE_URL+'/services/search-engine-optimization/reporting-analytics/'}>Read More...</Link></p>
					</section>
					</section>
				</section>
					<Footer />
           	</React.Fragment>
        );
    }
}
export default Banking;