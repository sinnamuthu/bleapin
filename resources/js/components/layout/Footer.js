import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '.././Config';
import { min } from 'lodash';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
           
        };
	}

	componentDidMount() {
	}

	render() {
		return (
			<footer>
				<section className="footer">
					<section className="ftr-top">
						<section className="container">
							<section className="row">
								<section className="col-lg-3 col-sm-6">
									<h3>Quick Links</h3>
										<ul>
											<li><Link to={config.ROUTE_URL+'/about-us'}>About us</Link></li>
											<li><Link to={config.ROUTE_URL+'/services'}>Services</Link></li>
											<li><Link to={config.ROUTE_URL+'/portfolio'}>Our Work</Link></li>
											<li><Link to={config.ROUTE_URL+'/blog'}>Blog</Link></li>
											<li><Link to={config.ROUTE_URL+'/careers'}>Careers</Link></li>
											<li><Link to={config.ROUTE_URL+'/contact-us'}>Contact Us</Link></li>
											<li><Link to={config.ROUTE_URL+'/privacy-policy'}>Privacy policy</Link></li>
										</ul>
								</section>
								<section className="col-lg-3 col-sm-6">
									<h3>Services</h3>
										<ul>
											<li><Link to={config.ROUTE_URL+'/services/responsive-website-design-development'}>Responsive Web site Design & Development</Link></li>
											<li><Link to={config.ROUTE_URL+'/services/search-engine-optimization'}>Search Engine Optimization</Link></li>
											<li><Link to={config.ROUTE_URL+'/services/online-advertising'}>Online Advertising</Link></li>
											<li><Link to={config.ROUTE_URL+'/services/strategic-marketing'}>Strategic Marketing</Link></li>
											<li><Link to={config.ROUTE_URL+'/services/ecommerce-solutions'}>Ecommerce Solutions</Link></li>
										</ul>
								</section>
								<section className="col-lg-3 col-sm-6">
									<h3>Contact Us</h3>
										<ul>
											<li><Link to={config.ROUTE_URL+'/contact-us/digital-marketing-agency-in-chennai'}>Chennai</Link></li>
											<li><Link to={config.ROUTE_URL+'/contact-us/digital-marketing-agency-in-mumbai'}>Mumbai</Link></li>
											<li><Link to={config.ROUTE_URL+'/contact-us/digital-marketing-agency-in-pune'}>Pune</Link></li>
											<li><Link to={config.ROUTE_URL+'/contact-us/digital-marketing-agency-in-bangalore'}>Bangalore</Link></li>
											<li><Link to={config.ROUTE_URL+'/contact-us/digital-marketing-agency-in-noida'}>Noida</Link></li>
											<li><Link to={config.ROUTE_URL+'/contact-us/digital-marketing-agency-in-usa'}>USA</Link></li>
										</ul>
								</section>
								<section className="col-lg-3 col-sm-6">
									<h3>Social Media</h3>
										<ul className="social clearfix">
											<li className="fb"><a href="https://www.facebook.com/bleap.in/" target="_blank">Facebook</a></li>
											<li className="twitter"><a href="https://x.com/DigitalBleap" target="_blank">twitter</a></li>
											<li className="linked"><a href="https://www.linkedin.com/company/bleap/" target="_blank">linkedin</a></li>
											<li className="instagram"><a href="https://www.instagram.com/bleapdigital/" target="_blank">instagram</a></li>
											<li className="pinterest"><a href="https://in.pinterest.com/bleapdigitalmarketing/" target="_blank">pinterest</a></li>
										</ul>
								</section>
							</section>
						</section>
					</section>
					<section className="ftr-btm">
						<section className="container">
							<h3>Get in touch with Digital Marketing Agency.</h3>
							<section className="row">
								<section className="col-lg-3 col-sm-6">
									<section className="ftr-add">									
										<h4>Chennai</h4>
										<p>Ground floor, 95, Poes Main Road, Teynampet, Chennai - 600 018, Tamil Nadu, India</p>
										<p className="ph"><a href="tel:919382809420">+91 93828 09420</a><br /><a href="tel:04448545327">+91 44 4854 5327</a></p>
										<p className="wha"><a href="https://wa.me/919382809420">+91 93828 09420</a><br /></p>
									</section>
								</section>
								<section className="col-lg-3 col-sm-6">
									<section className="ftr-add">				
										<h4>Mumbai</h4>
										<p>9, Prem Kiran, Plot 195 Sher-e-Punjab CHS, Mahakali Caves Rd, Andheri East, Mumbai - 400 093, Maharashtra, India</p>
										<p className="ph"><a href="tel:919382809420">+91 93828 09420</a><br /><a href="tel:04448545327">+91 44 4854 5327</a></p>
										<p className="wha"><a href="https://wa.me/919382809420">+91 93828 09420</a><br /></p>
									</section>
								</section>
								<section className="col-lg-3 col-sm-6">
									<section className="ftr-add">				
										<h4>Pune</h4>
										<p>B2/7, Tridal Nagar, Shastri Nagar, Yerwada, Pune - 411 006, Maharashtra, India</p>
										<p className="ph"><a href="tel:919382809420">+91 93828 09420</a><br /><a href="tel:04448545327">+91 44 4854 5327</a></p>
										<p className="wha"><a href="https://wa.me/919382809420">+91 93828 09420</a><br /></p>
									</section>
								</section>
								<section className="col-lg-3 col-sm-6">
									<section className="ftr-add">				
										<h4>Bangalore</h4>
										<p>Hustlehub Tech Park, H210 36/5 Somasundarapalya Main Road, Adj 27th Main Road, Haralukunte Village, Sector 2, HSR Layout, Bengaluru - 560 102,
										Karnataka, India</p>
										{/* <p>Flat 806, GK Meadows, Shikari Palya Main Road, Electronic City Phase -1. Bangalore - 560 105, Karnataka, India</p> */}
										<p className="ph"><a href="tel:04448545327">+91 44 4854 5327</a></p>
										<p style={{minHeight: "auto",paddingTop:"20px"}}>Sobha Classic, Harlur Road, Bangalore - 560 102, Karnataka, India</p>
										{/* <p className="ph"><a href="tel:918762916841">+91 8762916841</a></p>
										<p className="wha"><a href="https://wa.me/918762916841">+91 8762916841</a><br /></p> */}
									</section>
								</section>
							</section>			
							<section className="row">
								<section className="col-lg-3 col-sm-6">
									<section className="ftr-add mbl">									
										<h4>Noida</h4>
										<p>Anugreh, A 24 Sector 53 Noida Gautam Budh Nagar, Noida - 201 307, Uttar Pradesh, India </p>
										<p className="ph"><a href="tel:919910076101">+91 9910076101</a></p>
										<p className="wha"><a href="https://wa.me/919910076101">+91 9910076101</a><br /></p>
									</section>
								</section>
								<section className="col-lg-3 col-sm-6">
									<section className="ftr-add mbl">				
										<h4>USA</h4>
										<p>9123 Bottlebrush lane, Irving, TX 75063, United States</p>
										<p className="ph"><a href="tel:19729040018">+1 972 904 0018</a></p>
										<p className="wha"><a href="https://wa.me/19729040018">+1 972 904 0018</a><br /></p>
									</section>
								</section>				
							</section>
						</section>
					</section>
				</section>
				<section className="copyright">
					<section className="container pos-rel">				
						<p>&copy; { new Date().getFullYear() } <a href="https://www.bleapdigital.com/" target="_blank">Bleap</a> All Right Reserved</p>
						{/*<aside className="google-partner">
							<a href="https://www.google.com/partners/agency?id=2495672630" target="_blank">
							<img src={config.APP_URL+"/public/home/images/google-batch.jpg"} alt="Google partner" className="img-responsive" /></a>
						</aside>*/}
					</section>
				</section>
			</footer>
		);
	}
}

export default Footer;