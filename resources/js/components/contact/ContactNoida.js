import React, { Component } from "react";
import axios from "axios";
import validator from "validator";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../layout/Footer";
import config from "../Config";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import HubspotForm from "react-hubspot-form";
// import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-google';

class ContactNoida extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			nameErr: "",
			phone: "",
			phoneErr: "",
			email: "",
			emailErr: "",
			city: "",
			cityErr: "",
			message: "",
			messageErr: "",
			formInvalid: false,
			interest: [],
			interestErr: "",
			modalemail: "",
			modalemailErr: "",
		};
		this.validateForm = this.validateForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.modalValidateForm = this.modalValidateForm.bind(this);
		this.modalHandleSubmit = this.modalHandleSubmit.bind(this);
		this.interestChange = this.interestChange.bind(this);
		toast.configure();
		/*this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);*/
	}

	componentDidMount() {
		if (!localStorage.getItem("modelShown")) {
			$("#myModal").modal("show");
			localStorage.setItem("modelShown", true);
		}
		/*loadReCaptcha();
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }*/
	}

	/*onLoadRecaptcha() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
    }

    verifyCallback(recaptchaToken) {
    }*/

	validateForm(event) {
		const validateFields = ["name", "phone", "city", "message"];
		if (event.target.name == "email") {
			if (validator.isEmail(event.target.value))
				this.setState({ emailErr: false });
			else if (validator.isEmpty(event.target.value))
				this.setState({ emailErr: "Email should not be empty" });
			else this.setState({ emailErr: "Email is Invalid" });
		} else {
			validateFields.forEach(
				function(field) {
					if (event.target.name == field) {
						if (validator.isEmpty(event.target.value))
							this.setState({
								[field + "Err"]:
									field.charAt(0).toUpperCase() +
									field.slice(1) +
									" should not be empty",
							});
						else this.setState({ [field + "Err"]: false });
					}
				}.bind(this)
			);
		}
	}

	handleChange(event) {
		this.validateForm(event);
		this.setState({ [event.target.name]: event.target.value });
	}

	interestChange(data = []) {
		if (data == null) data = [];
		let newInterest = [];
		data.forEach(function(val, key) {
			newInterest.push(val.value);
		});
		this.setState({
			interest: newInterest,
		});
		setTimeout(() => {
			if (this.state.interest.length == 0) {
				this.setState({
					interestErr: "Atleast select one interest",
				});
			} else {
				this.setState({
					interestErr: false,
				});
			}
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		/*var response = grecaptcha.getResponse();
        if(response.length == 0) {
            toast.error("Captcha is required", {
                position: "top-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            return;
        }*/
		if (this.state.interest.length == 0) {
			this.setState({
				interestErr: "Atleast select one interest",
			});
			return;
		} else {
			this.setState({
				interestErr: false,
			});
		}
		if (
			this.state.emailErr === false &&
			this.state.nameErr === false &&
			this.state.phoneErr === false &&
			this.state.cityErr === false &&
			this.state.messageErr === false
		) {
			//use || for more Err validations
			const formData = this.state;
			axios({
				method: "post",
				url: config.ROUTE_URL + "/contact",
				params: formData /*,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }*/,
			})
				.then((res) => {
					if (res.data.status)
						toast.success("Successfully submitted", {
							position: "top-center",
							autoClose: 1400,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
						});
				})
				.catch((error) => {
					Object.values(error.response.data.errors).forEach(
						function(val) {
							document.getElementById("errors").innerHTML =
								'<p class="help-block bg-white">' + val + "</p>";
						}.bind(this)
					);
				});
		} else {
			var elements = document.getElementsByTagName("input");
			// for (var i = 0; i < elements.length; i++) {
			//     console.log(i);
			//     // elements[i].focus();elements[i].blur();
			// }​
			toast.error("Please fill all the fields", {
				position: "top-center",
				autoClose: false,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
			return;
		}
	}

	modalValidateForm() {
		if (validator.isEmail(event.target.value))
			this.setState({ modalemailErr: false });
		else if (validator.isEmpty(event.target.value))
			this.setState({ modalemailErr: "Email should not be empty" });
		else this.setState({ modalemailErr: "Email is Invalid" });
	}

	modalHandleSubmit(event) {
		event.preventDefault();
		if (this.state.modalemailErr == false) {
			let formData = { email: this.state.modalemail };
			axios({
				method: "post",
				url: config.ROUTE_URL + "/join-us",
				params: formData,
			})
				.then((res) => {
					if (res.data.status) {
						$("#myModal").modal("hide");
						toast.success("Successfully submitted", {
							position: "top-center",
							autoClose: 1400,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
						});
					}
				})
				.catch((error) => {
					Object.values(error.response.data.errors).forEach(
						function(val) {
							document.getElementById("modal-errors").innerHTML =
								"<p>" + val + "</p>";
						}.bind(this)
					);
				});
		} else {
			toast.error("Validation Error", {
				position: "top-center",
				autoClose: false,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
			return;
		}
	}
	render() {
		const interestOptions = [
			{ value: "responsive", label: "Responsive" },
			{ value: "eCommerce", label: "E-Commerce" },
			{ value: "digitalMarketing", label: "Digital Marketing" },
			{ value: "socialMedia", label: "Social Media" },
			{ value: "seo", label: "SEO" },
			{ value: "goodleAds", label: "Goodle Ads" },
			{ value: "videoContent", label: "Video Content" },
			{ value: "strategic", label: "Strategic" },
		];

		const interestStyles = {
			multiValue: (base, state) => {
				return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
			},
			multiValueLabel: (base, state) => {
				return state.data.isFixed
					? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 }
					: base;
			},
			multiValueRemove: (base, state) => {
				return state.data.isFixed ? { ...base, display: "none" } : base;
			},
		};

		return (
			<React.Fragment>
				<MetaTags>
					<title>
						Best Digital Marketing Agency in Noida, India | Website Design
						Services - Bleap
					</title>
					<meta
						name="description"
						content="Bleap is the top digital marketing agency in Noida - We Provide best Website design, Social Meadia Marketing, SEO, SEM &amp; Content Marketing in Noida."
					/>
					<link
						rel="canonical"
						href="https://www.bleap.in/contact-us/digital-marketing-agency-in-Noida"
					/>
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta
						property="og:title"
						content="Best Digital Marketing Agency in Noida, India | Website Design Services - Bleap"
					/>
					<meta
						property="og:description"
						content="Bleap is the top digital marketing agency in Noida - We Provide best Website design, Social Meadia Marketing, SEO, SEM &amp; Content Marketing in Noida."
					/>
					<meta
						property="og:url"
						content="https://www.bleap.in/contact-us/digital-marketing-agency-in-Noida/"
					/>
					<meta property="og:site_name" content="BLeap" />
					<meta name="twitter:card" content="summary_large_image" />
					<meta
						name="twitter:description"
						content="Bleap is the top digital marketing agency in Noida - We Provide best Website design, Social Meadia Marketing, SEO, SEM &amp; Content Marketing in Noida."
					/>
					<meta
						name="twitter:title"
						content="Best Digital Marketing Agency in Noida, India | Website Design Services - Bleap"
					/>
				</MetaTags>
				<section className="sub-page contact">
					<section className="enquire-now">
						<section className="container">
							<section className="breadcrumbs layout1">
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li> > </li>
									<li>
										<Link to={config.ROUTE_URL + "/contact-us"}>Contact</Link>
									</li>
									<li> > </li>
									<li className="act">Digital Marketing Agency In Noida</li>
								</ul>
							</section>
							<section className="row">
								<aside className="col-lg-6">
									<section className="contact-form-section">
										<h2>
											Digital Marketing, Social Media and Website Design Agency
											in Noida, India
										</h2>
										<p>
											Ready to take a step further? Contact the leading digital
											marketing Company in Noida and let's get talking about
											your project or business to find out how we can help it
											grow. Please share your contact details and we will reach
											out within 24 hours.
										</p>
										<section className="form">
											<div className="row" id="errors"></div>
											<HubspotForm
												region="na1"
												portalId="19955746"
												formId="1a9801f2-16d4-432d-93b8-adbd91a6c56b"
												onSubmit={() => console.log("Submit!")}
												onReady={(form) => console.log("Form ready!")}
												loading={<div>Loading...</div>}
											/>
											{/* <form onSubmit={this.handleSubmit} noValidate>
		                            <div className={(this.state.nameErr) ? 'has-error form-group' : 'form-group'}>
		                                <input id="name" type="text" className="form-control border-bottom inputText" name="name" value={this.state.name}  required autoComplete="name" onChange={this.handleChange} placeholder="Name*" />
		                                {this.state.nameErr && <p className="help-block bg-white">{this.state.nameErr}</p> }
		                            </div>
		                            <div className={(this.state.phoneErr) ? 'has-error form-group' : 'form-group'}>
		                                <input id="phne" type="text" className="form-control border-bottom inputText" name="phone" value={this.state.phone}  onChange={this.handleChange} required autoComplete="phone" placeholder="Phone No*" />
		                                {this.state.phoneErr && <p className="help-block bg-white">{this.state.phoneErr}</p> }
		                            </div>
		                            <div className={(this.state.emailErr) ? 'has-error form-group' : 'form-group'}>
		                                <input id="email" type="email" className="form-control border-bottom inputText" name="email" value={this.state.email} onChange={this.handleChange} required autoComplete="email" placeholder="Email Id*" />
		                                {this.state.emailErr && <p className="help-block bg-white">{this.state.emailErr}</p> }
		                            </div>
		                            <div className={(this.state.cityErr) ? 'has-error form-group' : 'form-group'}>
		                                <input id="city" type="text" className="form-control border-bottom inputText" name="city" value={this.state.city}  onChange={this.handleChange} required autoComplete="city" placeholder="City*" />
		                                {this.state.cityErr && <p className="help-block bg-white">{this.state.cityErr}</p> }
		                            </div>
		                            <div className="form-group">
		                                <Select
		                                    name="interest"
		                                    onChange={this.interestChange}
		                                    isMulti
		                                    name="colors"
		                                    options={interestOptions}
		                                    className="sel-control"
		                                    classNamePrefix="select"
		                                />
		                                {this.state.interestErr && <p className="help-block bg-white">{this.state.interestErr}</p> }
		                            </div>
		                            <div className={(this.state.messageErr) ? 'has-error form-group' : 'form-group'}>
		                                <textarea id="message"className="form-control border-bottom inputText" name="message" value={this.state.message} onClick={this.validateForm} onChange={this.handleChange} required placeholder="your message...*"></textarea>
		                                {this.state.messageErr && <p className="help-block bg-white">{this.state.messageErr}</p> }
		                            </div>
		                            <div className="form-group mb-0">
		                                <div className="col-md-8">
		                                    <button type="submit" className="btn-primary" style={{border: '2px solid #FFF'}}>
		                                        Send Now
		                                    </button>
		                                </div>
		                            </div>
		                        </form> */}
										</section>
									</section>
								</aside>
								<aside className="col-lg-6">
									<section className="map">
										<h3>
											Bleap Digital Marketing(Responsive Web Design-SEO-SEM-SMM)
											Agency Noida, Uttar Pradesh, India
										</h3>
										<p>
											Anugreh, A 24 Sector 53 Noida Gautam Budh Nagar, Noida -
											201 307, Uttar Pradesh, India{" "}
										</p>
										<iframe
											src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4954.517455913442!2d77.35991548548678!3d28.58858821183814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d25a5a7b4d%3A0xbc21d7aa1164f52a!2sBleap%20Digital%20Marketing(Responsive%20Web%20Design-SEO-SEM-SMM)%20Agency%20Noida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1607419828822!5m2!1sen!2sin"
											allowfullscreen=""
											width="100%"
											height="400"
											frameborder="0"
										></iframe>
									</section>
								</aside>
							</section>
						</section>
					</section>
					<section className="enquire-now-btm section-wrap-ash">
						<section className="container">
							<h1>Social Media and Digital Marketing Agency in Noida</h1>
							<p>
								Congrats! Your search for the best Digital Marketing Partner in
								Noida ends successfully. Bleap Integrated Marketing is the best
								<Link to={config.ROUTE_URL}>digital marketing agency</Link>
								in Noida. We provide online services such as
								<Link
									to={
										config.ROUTE_URL +
										"/services/responsive-website-design-development"
									}
								>
									Responsive Web Design &amp; Development
								</Link>
								,
								<Link
									to={config.ROUTE_URL + "/services/search-engine-optimization"}
								>
									Search Engine Optimization (SEO)
								</Link>
								,
								<Link to={config.ROUTE_URL + "/services/online-advertising"}>
									Search Engine Marketing (SEM)
								</Link>
								,
								<Link
									to={
										config.ROUTE_URL +
										"/services/online-advertising/social-media-marketing"
									}
								>
									Social Media Marketing (SMM)
								</Link>
								, Social Media Optimization (SMO), e-Commerce Websites, Content
								Marketing, Online Reputation Management, Website Localization
								and Strategic Marketing Services to clients from India and
								across the world. Our office in Noida is conveniently located in
								Teynampet, 230 meters from the Mount Road. Financial Services,
								Real Estate, e-commerce, Jewellery Retail, Manufacturing,
								Engineering, Automotive and Healthcare are our key focus areas
								in Noida. Our clients in Noida include Chola MS General
								Insurance, Greater Noida Corporation, Danfoss, Equitas Bank and
								many more. We have worked with many start-ups from Noida to kick
								start their digital marketing journey and given excellent ROI
								for their investment. We manage more than 74 clients from India,
								UAE, Australia, New Zealand, US and UK. We are a preferred
								partner for Google, Facebook, Instagram, SnapChat, LinkedIn and
								Twitter.
							</p>
						</section>
					</section>
				</section>
				<Footer />
			</React.Fragment>
		);
	}
}
export default ContactNoida;
