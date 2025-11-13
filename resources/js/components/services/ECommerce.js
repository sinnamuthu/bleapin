import React, { Component } from 'react';
import config from '.././Config';
import Footer from '.././layout/Footer';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';

class ECommerce extends Component {
    render() {
        return (
        	<React.Fragment>
        		<MetaTags>
        			<title>E-commerce Soultions | Social Media Marketing Chennai, Mumbai, Pune and Bengaluru, India</title>
        			<meta name="description" content="We provide E-commerce solutions that help businesses scale fast. Bleap offers technology and strategic services for brands and businesses looking for a seamless solution to engage with your audience, increase conversions and raise brand awareness."/>
					<link rel="canonical" href="https://www.bleap.in/services/ecommerce-solutions" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="E-commerce Soultions | Social Media Marketing Chennai, Mumbai, Pune and Bengaluru, India" />
					<meta property="og:description" content="We provide E-commerce solutions that help businesses scale fast. Bleap offers technology and strategic services for brands and businesses looking for a seamless solution to engage with your audience, increase conversions and raise brand awareness." />
					<meta property="og:url" content="https://www.bleap.in/services/ecommerce-solutions/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/ecommerce.jpg"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="We provide E-commerce solutions that help businesses scale fast. Bleap offers technology and strategic services for brands and businesses looking for a seamless solution to engage with your audience, increase conversions and raise brand awareness." />
					<meta name="twitter:title" content="E-commerce Soultions | Social Media Marketing Chennai, Mumbai, Pune and Bengaluru, India" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/ecommerce.jpg"} />
        		</MetaTags>
	            <section className="sub-page services ecomm">
				  <section className="int">				
						<section className="container">	
							<section className="breadcrumbs gen">
								<ul>
									<li><Link to='/'>Home</Link></li>
									<li> > </li>
									<li><Link to={config.ROUTE_URL+'/services'}>Services</Link></li>
									<li> > </li>
									<li className="act">E-Commerce Solutions</li>
								</ul>
							</section>			
							<section className="item-cnt">				
								<section className="hdg sec">					
									<h1>E-Commerce Solutions</h1>
								</section>
									<section className="item-cnt-in">
										<figure><img src={config.APP_URL+"/public/home/images/ecommerce.jpg"} alt="Ecommerce" className="img-responsive" /></figure>
										<p>The design and functionality of your E-commerce website could make or break conversions and affect your bottom line. An E-commerce site has several layers of functionality different from the usual static websites, including a web server to host a storefront, payment gateway, billing system, an inventory database and a complex dispatch system including returns. There are multiple touch points and interactions to manage customer experience.</p>
										<p>We provide E-commerce solutions that help businesses scale fast. We offer technology and strategic services for brands and businesses looking for a seamless solution to engage with your audience, increase conversions and raise brand awareness. This will give your business an end-to-end solution, distribute content and connect with your customers.</p>
										<p>Whether it's a simple plug and play E-commerce website developed on PHP, WordPress or a complex website with multiple portals to be developed on advanced customized CMS platforms like Drupal, Joomla, Magento. Learn how Bleap E-Commerce Solutions team can help scale up your business and get the best ROI for your investment.</p>
									</section>
									{/* <section className="row">
									<aside className="col-md-6">
										<p>The design and functionality of your E-commerce website could make or break conversions and affect your bottom line. An E-commerce site has several layers of functionality different from the usual static websites, including a web server to host a storefront, payment gateway, billing system, an inventory database and a complex dispatch system including returns. There are multiple touch points and interactions to manage customer experience.</p>
										<p>We provide E-commerce solutions that help businesses scale fast. We offer technology and strategic services for brands and businesses looking for a seamless solution to engage with your audience, increase conversions and raise brand awareness. This will give your business an end-to-end solution, distribute content and connect with your customers.</p>
										<p>Whether it’s a simple plug and play E-commerce website developed on PHP, WordPress or a complex website with multiple portals to be developed on advanced customized CMS platforms like Drupal, Joomla, Magento. Learn how Bleap E-Commerce Solutions team can help scale up your business and get the best ROI for your investment.</p>
									</aside>
									<aside className="col-md-6">
										<figure><img src={config.APP_URL+"/public/home/images/ecommerce.jpg"} alt="Ecommerce" className="img-responsive" /></figure>
									</aside>
								</section> */}
							</section>
						</section>
	                </section>
	           	</section>
				<Footer />
			</React.Fragment>
        );
    }
}
export default ECommerce;