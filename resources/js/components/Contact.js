import React, { Component } from 'react';
import axios from 'axios';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from './Config';
import Footer from './layout/Footer';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

class Contact extends Component {
render() {
    return (
        <React.Fragment>
        	<MetaTags>
        		<title>Digital Marketing | Web Design | SEO | SEM Services Chennai, Mumbai, Pune and Bangalore, India</title>
        		<meta name="description" content="Want us to start handling your digital marketing project? Need our services in Responsive Web Design, SEO, PPC, Social Media Marketing, Ecommerce Solution, Stratgeic Marketing? Fill up your contact details. We will get in touch with you within 24 hours."/>
				<link rel="canonical" href="https://www.bleap.in/contact-us" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="Digital Marketing | Web Design | SEO | SEM Services Chennai, Mumbai, Pune and Bangalore, India" />
				<meta property="og:description" content="Want us to start handling your digital marketing project? Need our services in Responsive Web Design, SEO, PPC, Social Media Marketing, Ecommerce Solution, Stratgeic Marketing? Fill up your contact details. We will get in touch with you within 24 hours." />
				<meta property="og:url" content="https://www.bleap.in/contact-us/" />
				<meta property="og:site_name" content="BLeap" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:description" content="Want us to start handling your digital marketing project? Need our services in Responsive Web Design, SEO, PPC, Social Media Marketing, Ecommerce Solution, Stratgeic Marketing? Fill up your contact details. We will get in touch with you within 24 hours." />
				<meta name="twitter:title" content="Digital Marketing | Web Design | SEO | SEM Services Chennai, Mumbai, Pune and Bangalore, India" />
        	</MetaTags>
            <section className="sub-page services contact">
                <section className="container">
                	<section className="breadcrumbs layout2">
						<ul>
							<li><Link to='/'>Home</Link></li>
							<li> > </li>
							<li className="act">Contact</li>
						</ul>
					</section>
                   <h1>We'd love to hear from you</h1>
                   <section className="row">
                        <aside className="col-md-6">
							<section className="add-blk">
									<figure><img src={config.APP_URL+"/public/home/images/contact-chennai.png"} alt="contact chennai" className="img-responsive" /> </figure>
									<h2>Chennai</h2>
									<p>Ground floor, 95, Poes Main Road, Teynampet, Chennai - 600 018, Tamil Nadu, India</p>
									<h3>Neeraj Moorjani</h3>
                                <p><a href="tel:919382809420">+91 93828 09420,</a><br/>
                                <a href="tel:04448545327">+91 44 4854 5327</a></p>
									<section className="mail-wrap">
										<a className="mail" href="mailto:neeraj.moorjani@bleap.in">neeraj.moorjani@bleap.in</a><br />
										<a className="mail" href="mailto:info@bleap.in">info@bleap.in</a>
										<Link to={config.ROUTE_URL+"/contact-us/digital-marketing-agency-in-chennai/"} className="btn-primary">Enquire Now</Link>		
									</section>
							</section>                     
                        </aside>
                        <aside className="col-md-6">
								<section className="add-blk">
										<figure><img src={config.APP_URL+"/public/home/images/contact-mumbai.png"} alt="contact mumbai" className="img-responsive" /> </figure>
										<h2>Mumbai</h2>
										<p>9, Prem Kiran, Plot 195 Sher-e-Punjab CHS, Mahakali Caves Rd, Andheri East, Mumbai - 400 093, Maharashtra, India</p>
										<h3>Nikhil Kadam</h3>
									      <p><a href="tel:919029042681">+91 9029042681,</a><br/>
									     <a href="tel:04448545327">+91 44 4854 5327</a></p>
										<section className="mail-wrap">
											<a className="mail" href="mailto:info@bleap.in">info@bleap.in</a>
											<Link to={config.ROUTE_URL+"/contact-us/digital-marketing-agency-in-mumbai/"} className="btn-primary">Enquire Now</Link>		
										</section>
								</section>
                        </aside>
                    </section>
                    <section className="row">
                        <aside className="col-md-6">
							<section className="add-blk">
									<figure><img src={config.APP_URL+"/public/home/images/contact-pune.png"} alt="contact pune" className="img-responsive" /> </figure>
									<h2>Pune</h2>
									<p>B2/7, Tridal Nagar, Shastri Nagar, Yerwada, Pune - 411 006, Maharashtra, India</p>
									<h3>Anuradha Harke</h3>
									<p><a href="tel:919382809420">+91 93828 09420,</a><br/>
									<a href="tel:04448545327">+91 44 4854 5327</a></p>
									<section className="mail-wrap">
										<a className="mail" href="mailto:info@bleap.in">info@bleap.in</a>
										<Link to={config.ROUTE_URL+"/contact-us/digital-marketing-agency-in-pune/"} className="btn-primary">Enquire Now</Link>		
									</section>
							</section>
                        </aside>
                        <aside className="col-md-6">
							<section className="add-blk">
								<figure><img src={config.APP_URL+"/public/home/images/contact-bengaluru.png"} alt="contact bengaluru" className="img-responsive" /> </figure>
								<h2>Bangalore</h2>
								<p>Hustlehub Tech Park, H210 36/5 Somasundarapalya Main Road, Adj 27th Main Road, Haralukunte Village, Sector 2, HSR Layout, Bengaluru - 560 102,
									Karnataka, India</p>
                                <p><a href="tel:04448545327">+91 44 4854 5327</a></p>
								<p>Sobha Classic, Harlur Road, Bangalore - 560 102, Karnataka, India</p>
								<h3>Ranjit</h3>
                                <p><a href="tel:918762916841">+91 8762916841</a></p>
								<section className="mail-wrap">
									<a className="mail" href="mailto:ranjit@bleap.in">ranjit@bleap.in</a><br />
									<a className="mail" href="mailto:info@bleap.in">info@bleap.in</a>
									<Link to={config.ROUTE_URL+"/contact-us/digital-marketing-agency-in-bangalore/"} className="btn-primary">Enquire Now</Link>		
								</section>
							</section>
                        </aside>
                    </section>
                    <section className="row">
                        <aside className="col-md-6">
							<section className="add-blk">
									<figure><img src={config.APP_URL+"/public/home/images/contact-chennai.png"} alt="contact noida" className="img-responsive" /> </figure>
										<h2>Noida</h2>
										<p>Anugreh, A 24 Sector 53 Noida Gautam Budh Nagar, Noida - 201 307, Uttar Pradesh, India </p>
										<h3>Sudhir Shah</h3>
										<p><a href="tel:919910076101">+91 9910076101</a><br/>
									  <a href="tel:04448545327">+91 44 4854 5327</a></p>
									<section className="mail-wrap">
										<a className="mail" href="mailto:info@bleap.in">info@bleap.in</a>
										<Link to={config.ROUTE_URL+"/contact-us/digital-marketing-agency-in-noida/"} className="btn-primary">Enquire Now</Link>		
									</section>
							</section>
                        </aside>
                        <aside className="col-md-6">
							<section className="add-blk">
								<figure><img src={config.APP_URL+"/public/home/images/contact-mumbai.png"} alt="contact usa" className="img-responsive" /> </figure>
								<h2>USA</h2>
								<p>9123 Bottlebrush lane, Irving, TX 75063, United States</p>
								<h3>Harish Chandiramani</h3>
                                <p><a href="tel:19729040018">+1 972 904 0018,</a><br/>
                                <a href="tel:04448545327">+91 44 4854 5327</a></p>
								<section className="mail-wrap">
									<a className="mail" href="mailto:info@bleap.in">info@bleap.in</a>
									<Link to={config.ROUTE_URL+"/contact-us/digital-marketing-agency-in-usa/"} className="btn-primary">Enquire Now</Link>		
								</section>
							</section>
                        </aside>
                    </section>
                </section>
            </section>
            <Footer />
        </React.Fragment>
        );
    }
}
export default Contact;