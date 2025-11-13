import React, { Component } from 'react';
import config from '../.././Config';
import Footer from '../.././layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

class MagentoDevelopment extends Component {
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
        			<title>Magento Web Development &raquo; BLeap</title>
        			<link rel="canonical" href="https://www.bleap.in/services/responsive-website-design-development/magento-web-development" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Magento Web Development &raquo; BLeap" />
					<meta property="og:url" content="https://www.bleap.in/services/responsive-website-design-development/magento-web-development/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/magento.png"}  />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="Magento Web Development &raquo; BLeap" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/magento.png"}  />
        		</MetaTags>
	            <section className="sub-page services magent gen">
				  	<section className="intt">				
						<section className="container">
							<section className="breadcrumbs layout2">
								<ul>
									<li><Link to='/'>Home</Link></li>
									<li> > </li>
									<li><Link to={config.ROUTE_URL+'/services'}>Services</Link></li>
									<li> > </li>
									<li><Link to={config.ROUTE_URL+'/services/responsive-website-design-development'}>Responsive Web Site Design & Development</Link></li>
									<li> > </li>
									<li className="act">Magento Web Development</li>
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
									<h1>Magento Web Development</h1>
								</section>	
								<section className="item-cnt-in">	
								<figure><img src={config.APP_URL+"/public/home/images/magento.png"} alt="magento" className="img-responsive" /></figure>
								<p>Magento is a contemporary cloud commerce platform with an open-source ecosystem.</p>
								<p>Flexible and favourite amongst most B2C and B2B businesses. It offers many out-of-the-box features. Bleap's expertise in building and managing many Magento based e-Commerce sites ensures that we build the flexibility to customize through seamless third-party integrations. Bleap- Magento partnership creates omnichannel shopping experience that goes beyond the shopping cart and encompasses almost every shoppable experience, including email, mobile, in-store, and marketplaces.</p>
								<h3>Why we recommend Magento</h3>
								<p>It's a platform that integrates multiple shopping experiences to drive business growth.</p>
								<p>It is capable of managing all inventory and sales through a single product control and distribution system.</p>
								<p>It is agile and user friendly and therefore reduces Go to Market time for our clients.</p>
								<p>It provides user friendly U.I and intuitive dashboards to track your business performance.</p>
								<p>It provides great, hasslefree shopping experience to customers.</p>
								<h3>Features & Benefits</h3>
								<h2>Customer Segmentation & Personalization</h2>
								<p>Create personalized shopping experiences that boost conversion rates by dynamically displaying content, promotions, and pricing to specific customers based on properties such as location, gender, order history, lifetime purchase value, wish list items etc. You can also target unknown site visitors based on the products they have viewed or items in their cart.</p>
								<h2>Dynamic Rule-Based Product Relations</h2>
								<p>We automate rules based on your business strategy as to which products to be offered for up-sell, cross-sell, and display related products to each customer segment. Rules are easily administered through a condition-based tool allowing you to effortlessly target product suggestions to increase sales and average order values.</p>
								<h2>Instant Purchase</h2>
								<p>Boost conversion rates for returning shoppers with a new Instant Purchase checkout option. Customers can use previously-stored payment credentials and shipping information to skip checkout steps, making the process faster and easier. This makes shopping experience simple and easy for mobile shoppers.</p>
								<h2>Content Staging and Preview</h2>
								<p>Increase sales and productivity by enabling your business teams to easily create, preview, and schedule a wide range of content updates without involving IT. We enable you to preview all changes by date or store view to create a flawless shopper experience and optimize the timing and impact of site updates by managing all changes through a timeline dashboard. Moreover, we deploy updates at scheduled times for greater efficiency.</p>
								<h2>Visual Merchandising</h2>
								<p>Optimize product category pages to drive sales by arranging products with a simple drag-and-drop interface or sorting rules that order products by best seller, colour, margin, or latest addition. Save time by setting rules to automatically assign products to specific categories based on their attributes, brand, price, or date created.</p>
								<h2>Business Intelligence</h2>
								<p>Access and analyze your Magento Commerce data from day 1. Uncover insights across all your data sources, empower your teams to make efficient, data-driven decisions that grow the business, and understand your customer to personalize their experience throughout their lifecycle.</p>
								<h2>Elasticsearch</h2>
								<p>Handle large catalogs and easily scale search capacity as queries grow with AJAX based integrated Elasticsearch. Our team builds suggestions based search for customer misspellings, support for stop words and attribute weighting, and synonym management to increase relevancy and conversions.</p>
								<h2>B2B Ready</h2>
								<p>Magento Commerce is ready to transform B2B experience to increase loyalty, reduce costs, and drive growth. Our team creates company accounts, set up multiple buyers, and define their specific roles and responsibilities with easy self-service tools. We build custom catalogs and price lists to ensure buyers receive contract terms when purchasing online and offer payments on account to increase sales. Fast, friction-free purchasing with quick order forms, requisition lists, and a streamlined request for quote workflow encourages repeat purchases and long-term customer loyalty.</p>
								<h2>Powerful Admin Experience</h2>
								<p>Bleap's Magento Tech team is adept at creating a modern and intuitive user interface. A dashboard lets you monitor your business with quick access to sales, order, search term and best-selling product data. Enhanced navigation and search make it easy to find information, and management screens can be customized and saved to speed up day-to-day tasks.</p>
								<h2>Scalable & Secure Infrastructure</h2>
								<p>Magento Commerce provides enterprise-grade reliability, availability, and security, giving you peace of mind. With BLeap's expert help you can be confident about running your stores without having to worry about man
								aging the underlying infrastructure yourself.</p>
								</section>
							</section>
						</section>	
					</section>
				</section>
	           	
				<Footer />
			</React.Fragment>
        );
    }
}
export default MagentoDevelopment;