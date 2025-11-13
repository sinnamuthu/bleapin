import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import config from './Config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import Select from 'react-select';
import Footer from './layout/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
// import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-google';
import Cookies from 'universal-cookie';
import HubspotForm from "react-hubspot-form";

class Home extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            nameErr: '',
            phone: '',
            phoneErr: '',
            email: '',
            emailErr: '',
            city: '',
            cityErr: '',
            message: '',
            messageErr: '',
            formInvalid: false,
            interest: [],
            interestErr: '',
            modalemail: '',
            modalemailErr: ''
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

    componentDidMount(){
        /*if (!localStorage.getItem('modelShown')) {
            $('#myModal').modal('show');
            localStorage.setItem('modelShown', true);
        }*/
        /*const script = document.createElement("script");

        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;

        document.body.appendChild(script);*/
        /*setTimeout(() => {
            loadReCaptcha();
        });
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }*/
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
        	$(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });

    }

    /*onLoadRecaptcha() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
    }

    verifyCallback(recaptchaToken) {
        // Here you will get the final recaptchaToken!!!  
    }*/

    validateForm(event){
        const validateFields = ['name', 'phone', 'city','message'];
        if (event.target.name == 'email') {
            if (validator.isEmail(event.target.value)) 
                this.setState({emailErr: false});
            else if (validator.isEmpty(event.target.value))
                this.setState({emailErr: 'Email should not be empty'});
            else
                this.setState({emailErr: 'Email is Invalid'});
        } else {
            validateFields.forEach(function(field){
                if (event.target.name == field) {
                    if (validator.isEmpty(event.target.value))
                        this.setState({[field + 'Err']: field.charAt(0).toUpperCase() + field.slice(1)+' should not be empty'});
                    else
                        this.setState({[field + 'Err']: false});
                }
            }.bind(this));
        }
    }

    handleChange(event) {
    	this.validateForm(event);
        this.setState({ [event.target.name]: event.target.value });
    }

    interestChange(data = []){
        if (data == null)
            data = [];
        let newInterest = [];
        data.forEach(function(val, key){
            newInterest.push(val.value);
        });
        this.setState({
            interest: newInterest
        });
        setTimeout(() => {
            if (this.state.interest.length == 0) {
                this.setState({
                    interestErr: 'Atleast select one interest'
                });
            } else {
                this.setState({
                    interestErr: false
                });
            }
        });
    }

    handleSubmit(event) {
        console.log(this.state);
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
                interestErr: 'Atleast select one interest'
            });
            return;
        } else {
            this.setState({
                interestErr: false
            });
        }
        if (this.state.emailErr === false && this.state.nameErr === false && this.state.phoneErr === false && this.state.cityErr === false && this.state.messageErr === false){ //use || for more Err validations
            const formData = this.state;
            axios({
                method: 'post',
                url: config.ROUTE_URL+'/contact',
                params: formData/*,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }*/
            }).then(res => {
                if (res.data.status)
                    toast.success("Successfully submitted", {
                        position: "top-center",
                        autoClose: 1400,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
            }).catch(error => {
                Object.values(error.response.data.errors).forEach(function(val){
                    document.getElementById('errors').innerHTML = '<p class="help-block bg-white">'+val+'</p>';
                }.bind(this));
            })

        } else {
            var elements = document.getElementsByTagName('input');
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
                draggable: true
            });
            return;
        }
    }
    
    modalValidateForm(){
        if (validator.isEmail(event.target.value)) 
                this.setState({modalemailErr: false});
            else if (validator.isEmpty(event.target.value))
                this.setState({modalemailErr: 'Email should not be empty'});
            else
                this.setState({modalemailErr: 'Email is Invalid'});
    }

    modalHandleSubmit(event){
        event.preventDefault();
        if (this.state.modalemailErr == false) {
            let formData = {email: this.state.modalemail};
            axios({
                method: 'post',
                url: config.ROUTE_URL+'/join-us',
                params: formData
            }).then(res => {
                if (res.data.status) {
                    $('#myModal').modal('hide');
                    toast.success("Successfully submitted", {
                        position: "top-center",
                        autoClose: 1400,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
                }
            }).catch(error => {
                Object.values(error.response.data.errors).forEach(function(val){
                    document.getElementById('modal-errors').innerHTML = '<p>'+val+'</p>';
                }.bind(this));
            })
        } else{
            toast.error("Validation Error", {
                position: "top-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            return;
        }
    }

    render() {
        const hmBanners = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        const hmClients = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        const hmTesti = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        const interestOptions = [
          { value: 'responsive', label: 'Responsive' },
          { value: 'eCommerce', label: 'E-Commerce' },
          { value: 'digitalMarketing', label: 'Digital Marketing' },
          { value: 'socialMedia', label: 'Social Media' },
          { value: 'seo', label: 'SEO' },
          { value: 'goodleAds', label: 'Goodle Ads' },
          { value: 'videoContent', label: 'Video Content' },
          { value: 'strategic', label: 'Strategic' }
        ];
        const cookies = new Cookies();

        {/*const interestStyles = {
            multiValue: (base, state) => {
                return state.data.isFixed ? { ...base, backgroundColor: 'gray' } : base;
            },
            multiValueLabel: (base, state) => {
                return state.data.isFixed
              ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 }
              : base;
            },
            multiValueRemove: (base, state) => {
                return state.data.isFixed ? { ...base, display: 'none' } : base;
            },
        };*/}
        return (
            <React.Fragment>
                <MetaTags>
                    <title>BLeap - Digital marketing agency in Chennai | SEO Services | PPC | Social media marketing | Web design company</title>
                    <meta name="description" content="BLeap is a digital marketing agency in Chennai that offers SEO, Web design, PPC and Social media marketing. We help businesses to improve our rankings, acquire customers, and increase sales."/>
                    <link rel="canonical" href="https://www.bleap.in" />
                    <meta name="google-site-verification" content="X0HzmT5yxDYhG_A3kDuNc_TVicaPjtZnRpmemHmOo7E" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="BLeap - Digital marketing agency in Chennai | SEO Services | PPC | Social media marketing | Web design company" />
                    <meta property="og:description" content="BLeap is a digital marketing agency in Chennai that offers SEO, Web design, PPC and Social media marketing. We help businesses to improve our rankings, acquire customers, and increase sales." />
                    <meta property="og:url" content="https://www.bleap.in/" />
                    <meta property="og:site_name" content="BLeap" />
                    <meta property="og:image" content={config.APP_URL+"/public/home/images/ecommerce-website.png"}/>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:description" content="BLeap is a digital marketing agency in Chennai that offers SEO, Web design, PPC and Social media marketing. We help businesses to improve our rankings, acquire customers, and increase sales." />
                    <meta name="twitter:title" content="BLeap - Digital marketing agency in Chennai | SEO Services | PPC | Social media marketing | Web design company" />
                    <meta name="twitter:image" content={config.APP_URL+"/public/home/images/ecommerce-website.png"}/>
                    
                </MetaTags>

                <section className="banner-wrap">               
                        <Slider {...hmBanners}>
                    <section className="banner banner8"></section>
                    <section className="banner banner6"></section>
                    <section className="banner banner7"></section>
                    {/*<section className="banner banner7a"></section>*/}
                <section className="banner banner1">
                        <section className="container">
                            <aside className="cnt">
                                <h2>
                                    {
                                        {
                                            'ta': ('வலைத்தள வடிவமைப்பு மற்றும் டிஜிட்டல் சந்தைப்படுத்தல் நிறுவனம் - சென்னை, மும்பை, புனே மற்றும் பெங்களூர்.')
                                        } [config.SITE_LANG] || 'Website Design & Digital Marketing Agency ; Chennai, Mumbai, Pune & Bangalore'
                                    }   
                                </h2>
                                <section className="btn-wrap">
                                    <Link to={config.ROUTE_URL+'/about-us'} className="btn-primary">
                                        {
                                            {
                                                'ta': ('இப்போது ஆராயுங்கள்')
                                            } [config.SITE_LANG] || 'Explore More'
                                        }   
                                    </Link>
                                </section>
                            </aside>
                        </section>          
                    </section>
            <section className="banner banner2">
                        <section className="container">
                            <aside className="cnt">
                                <h2>
                                    {
                                        {
                                            'ta': ('92% வலைத்தளங்கள் மொபைல் போன்களில் பார்க்கப்படுகின்றன.')
                                        } [config.SITE_LANG] || '92% websites are viewed over mobile phones.'
                                    }
                                </h2>
                                <p>
                                    {
                                        {
                                            'ta': ('நாங்கள் இத்தகைய செயல்பாட்டு அற்புதமிக்க வலைத்தளங்களை உருவாக்குவதில் நிபுணர்கள்.')
                                        } [config.SITE_LANG] || 'We are the experts in creating functionally brilliant web sites.'
                                    }
                                </p>
                                <section className="btn-wrap">
                                    <Link to={config.ROUTE_URL+'/services/responsive-website-design-development'} className="btn-primary">
                                        {
                                            {
                                                'ta': ('இப்போது ஆராயுங்கள்')
                                            } [config.SITE_LANG] || 'Explore More'
                                        }   
                                    </Link>
                                </section>
                            </aside>
                        </section>
                    <section className="bird"></section>
                    <section className="btm-bg btm-img"></section>      
                    </section>
                    <section className="banner banner3">
                        <section className="container">
                            <aside className="cnt">
                                <h2>
                                    {
                                        {
                                            'ta': ('நாங்கள் ஸ்மார்ட் வலைத்தளங்களை (முற்போக்கான வலை பயன்பாடுகள்) வடிவமைப்பதில் தலைவர்கள்.')
                                        } [config.SITE_LANG] || 'We are the leaders in designing Smart Websites (Progressive Web Apps).'
                                    }
                                </h2>
                                <p>
                                    {
                                        {
                                            'ta': ('50 சதவீத செலவில் உலாவி அடிப்படையிலான துவக்கத்தின் வசதி மற்றும் சொந்த பயன்பாட்டிற்கான செயலி.')
                                        } [config.SITE_LANG] || 'Convenience of browser based launching & functionality of a native App at 50% the cost.'
                                    }
                                </p>
                                <section className="btn-wrap">
                                    <Link to={config.ROUTE_URL+'/services/online-advertising'} className="btn-primary">
                                        {
                                            {
                                                'ta': ('இப்போது ஆராயுங்கள்')
                                            } [config.SITE_LANG] || 'Explore More'
                                        }
                                    </Link>
                                </section>
                            </aside>
                        </section>          
                    </section>
                <section className="banner banner4">
                        <section className="container">
                            <aside className="cnt">
                                <h2>
                                    {
                                        {
                                            'ta': ('எங்கள் எஸ்சிஓ(SEO) பிரச்சாரங்கள் மூலம் 6 மாதங்களில் 50 சதவீதம் வரை இணையத்தில் கரிம போக்குவரத்துகளை  வளர்க்க முடியும்.')
                                        } [config.SITE_LANG] || 'Our SEO campaigns can grow organic traffic by upto 50% in 6 months.'
                                    }
                                </h2>
                                <p>
                                    {
                                        {
                                            'ta': ('அதிக போக்குவரத்து என்பது அதிக வணிகம் என்று பொருள். மிக எளிமை.')
                                        } [config.SITE_LANG] || 'More traffic means more business. Simple.'
                                    }
                                </p>
                                <section className="btn-wrap">
                                    <Link to={config.ROUTE_URL+'/services/search-engine-optimization'} className="btn-primary">
                                        {
                                            {
                                                'ta': ('இப்போது ஆராயுங்கள்')
                                            } [config.SITE_LANG] || 'Explore More'
                                        }
                                    </Link>
                                </section>
                            </aside>
                        </section>          
                    </section>
                <section className="banner banner5">
                        <section className="container">
                           <aside className="cnt">
                                <h2>
                                    {
                                        {
                                            'ta': ('எங்கள் எஸ்சிஓ(SEO) பிரச்சாரங்கள் மூலம் 6 மாதங்களில் 50 சதவீதம் வரை இணையத்தில் கரிம போக்குவரத்துகளை  வளர்க்க முடியும்.')
                                        } [localStorage.getItem('siteLang')] || 'BLeap is one of the top 5 Digital Marketing Companies in Chennai & also an official Google Partner, having Passionate & Highly Experienced Digital Marketing Professionals.'
                                    }
                                </h2>
                                <section className="btn-wrap">
                                    <Link to={config.ROUTE_URL+'/about-us'} className="btn-primary">
                                        {
                                            {
                                                'ta': ('இப்போது ஆராயுங்கள்')
                                            } [localStorage.getItem('siteLang')] || 'Explore More'
                                        }
                                    </Link>
                                </section>
                            </aside>
                        </section>          
                                    </section>

                      </Slider>
                </section>

                <section className="intro section-wrap">
                    <section className="container">
                        <aside className="cnt">
                            <h1 className="hdg">
                            	{
									{
										'ta': ('பிலீப் - வலைத்தள வடிவமைப்பு மற்றும் டிஜிட்டல் சந்தைப்படுத்தல் நிறுவனம்- சென்னை, மும்பை, புனே மற்றும் பெங்களூர்.')
									} [config.SITE_LANG] || 'BLeap - Website Design & Digital Marketing Company Chennai, Mumbai, Pune & Bangalore'
								}
                            </h1>
                            <p>
                            	{
									{
										'ta': ('பிலீப் ஒருங்கிணைந்த சந்தைப்படுத்தல் தீர்வுகள் சென்னை, மும்பை, புனே மற்றும் பெங்களூர் ஆகிய இடங்களில் அலுவலங்கள் கொண்ட ஒரு முழு சேவை நிறுவனம். வலைத்தள வடிவமைப்பு மற்றும் மேம்பாடு, தேடுபொறி உகப்பாக்கம் (எஸ் சி ஓ) போன்ற ஆன்லைன் சேவைகள் வழங்குகிறோம்.')
									} [config.SITE_LANG] || 'Bleap Integrated Marketing Solutions is a full service website design & digital marketing agency with offices located in Chennai, Mumbai, Pune and Bangalore. We provide Online services like Website design & development, Search Engine Optimization (SEO)'
								}
                            </p>
                            <section className="btn-wrap">
                    			<Link to={config.ROUTE_URL+'/about-us'} className="btn-primary">
                    			{
                                    {
                                        'ta': ('மேலும் அறிக')
                                    } [config.SITE_LANG] || 'Read More'
                                }
                    			</Link>
							</section>
                        </aside>
                    </section>
                    <section className="btm-bg btm-img"></section>
                </section>
                <section className="our-website-design section-wrap">
                    <section className="top-bg top-img"></section>
                    <section className="btm-bg btm-img"></section>
                    <section className="container">
                    <h3 className="hdg">
                    	{
                    		{
								'ta': ('எங்கள் வலைத்தள வடிவமைப்பு மற்றும் டிஜிட்டல் சந்தைப்படுத்தல் சேவைகள்')
							} [config.SITE_LANG] || 'Our Website Design & Digital Marketing Services'
                    	}
                    </h3>
                    <section className="row">
                        <section className="col-md-4 col-sm-6 col-12">
                            <section className="item">
                                <figure><img src={config.APP_URL+"/public/home/images/website-design.png"} alt="Website Design" className="img-responsive" /></figure>
                                <h4>
                                	{
										{
											'ta': ('வலைத்தள வடிவமைப்பு')
										} [config.SITE_LANG] || 'Website Design & Development'
									}
								</h4>
                                <p>Mobile responsive website design, PHP, Word Press, .Net based corporate websites…</p>
                                <section className="btn-wrap">
                                	<Link to={config.ROUTE_URL+'/services/responsive-website-design-development'} className="btn-primary">Read More</Link>
                                </section>
                            </section>
                        </section>
                        <section className="col-md-4 col-sm-6 col-12">
                            <section className="item">
                                <figure><img src={config.APP_URL+"/public/home/images/seo.png"} alt="SEO" className="img-responsive" /></figure>
                                <h4>
                                	{
										{
											'ta': ('தேடுபொறி உகப்பாக்கம்')
										} [config.SITE_LANG] || 'Search Engine Optimization'
									}
                                </h4>
                                <p>Search Engine Optimization or SEO is the foundation of any digital business. SEO brings visitors...</p>
                                <section className="btn-wrap">
                                	<Link to={config.ROUTE_URL+'/services/search-engine-optimization'} className="btn-primary">Read More</Link>
                                </section>
                            </section>
                        </section>
                        <section className="col-md-4 col-sm-6 col-12">
                            <section className="item">
                                <figure><img src={config.APP_URL+"/public/home/images/digital-marketing.png"} alt="Digital Marketing" className="img-responsive" /></figure>
                                <h4>
                                	{
										{
											'ta': ('டிஜிட்டல் சந்தைப்படுத்தல் ')
										} [config.SITE_LANG] || 'Digital Marketing'
									}
								</h4>
                                <p>We are the classical search lead agency. We love studying consumer behavior and always...</p>
                                <section className="btn-wrap">
                                	<Link to={config.ROUTE_URL+'/services/online-advertising'} className="btn-primary">Read More</Link>
                                </section>
                            </section>
                        </section>
                        <section className="col-md-4 col-sm-6 col-12">
                            <section className="item">
                                <figure><img src={config.APP_URL+"/public/home/images/ecommerce-website.png"} alt="Ecommerce Website" className="img-responsive" /></figure>
                                <h4>
                                	{
										{
											'ta': ('ஈ - காமர்ஸ் வலைத்தள வடிவமைப்பு ')
										} [config.SITE_LANG] || 'E-Commerce Websites'
									}
								</h4>
                                <p>The design and functionality of your E-commerce website could make or break conversions and affect your bottom line...</p>
                                <section className="btn-wrap">
                                	<Link to={config.ROUTE_URL+'/services/ecommerce-solutions'} className="btn-primary">Read More</Link>
                                </section>
                            </section>
                        </section>
                        <section className="col-md-4 col-sm-6 col-12">
                            <section className="item">
                                <figure><img src={config.APP_URL+"/public/home/images/social-media-marketing.png"} alt="SMM" className="img-responsive" /></figure>
                                <h4>
                                	{
										{
											'ta': ('சமூக ஊடக சந்தைப்படுத்தல் ')
										} [config.SITE_LANG] || 'Social Media Marketing'
									}
								</h4>
                                <p>World is Social and Social is the World. People spend an average of 116 minutes daily on social media.Teens spend as much as...</p>
                                <section className="btn-wrap">
                                	<Link to={config.ROUTE_URL+'/services/online-advertising/social-media-marketing'} className="btn-primary">Read More</Link>
                                </section>
                            </section>
                        </section>
                        <section className="col-md-4 col-sm-6 col-12">
                            <section className="item">
                                <figure><img src={config.APP_URL+"/public/home/images/website-redesign.png"} alt="Website Redesign" className="img-responsive" /></figure>
                                <h4>Website Redesigning Services</h4>
                                <p>We strongly believe that your website is the most valuable digital asset for your company. And hence, we take all efforts to deliver..</p>
                                <section className="btn-wrap">
                                	<Link to={config.ROUTE_URL+'/services/responsive-website-design-development'} className="btn-primary">Read More</Link>
                                </section>
                            </section>
                        </section>
                    </section>
                    </section>
                </section>
				<section className="hm-testi">
                    <section className="top-bg top-img"></section>
                    <section className="container">
                        <h3 className="bird">Testimonial</h3>
                        <h4>Check what's our client Say about us</h4>			
						<section className="testi-slider">	
                        <Slider {...hmTesti}>
                        <div className="item-wrap">
							<section className="item-desc">
								<p>When what you like doing becomes your job, you don’t have to work anymore. Working with passionate individuals at Bleap for the past two months has been quite a good experience. Their enthusiasm is infectious!!</p>
							</section>
							<section className="author">
							Rajalakashmi B <span>General Manager Rane Group</span>
							</section>
                        </div>
                        <div className="item-wrap">
							<section className="item-desc">
								<p>Bleap is thorough and professional in its approach. They would first understand and do research on your business and market, and then would come out with an actionable marketing plan. Would strongly recommend Bleap to anyone – a start-up who wants to leapfrog into a competitive market, or an established player who would like to increase its share in the market.</p>
							</section>
							<section className="author">
							Gurmeet Dhindsa <span>Director Avante Immigration, Australia</span>
							</section>
                        </div>
                        <div className="item-wrap">
                            <section className="item-desc">
                                <p>The comfort of handing over your brand to a team headed by experienced marketers and the responsiveness of working with a nimble footed team always in action is what you get from working with BLeap. You are in safe hands.</p>
                            </section>
                            <section className="author">
                            Amit Chand <span>D G M Audi, India</span>
                            </section>
                        </div>
                        <div className="item-wrap">
                            <section className="item-desc">
                                <p>It has been an absolute pleasure to work with the BLeap team. They are the all-rounders of digital marketing be it Social Advertising, PPC Campaigns, SEO and even Content development. They don’t get overwhelmed by problems but bring creative solutions for solving problems. They provide excellent ideas on how to drive traffic to my web site while increasing our social media presence across multiple platforms.</p>
                            </section>
                            <section className="author">
                            George Varghese <span>COO & Co-Founder MotorZo</span>
                            </section>
                        </div>
                        <div className="item-wrap">
                            <section className="item-desc">
                                <p>Team BLeap works cohesively with our team and delivers top class SEO with measurable ROI in terms of Sales through organic conversions. Their team is knowledgeable, responsive and committed towards our business success. Their digital strategic advice and knowledge sharing on brand and consumer behavior is an absolute delight and a cherry on the cake.</p>
                            </section>
                            <section className="author">
                            Priya Scahdev <span>CEO & Founder RocknShop.com</span>
                            </section>
                        </div>
                        <div className="item-wrap">
                            <section className="item-desc">
                                <p>We have been working with BLeap Digital since July 2018. They manage our website, do SEO to bring our site on top of Google Search and help us with Social Media. We are delighted with their services and count on them as our partners. We strongly recommend BLeap for digital marketing to our clients and associates.</p>
                            </section>
                            <section className="author">
                            Arun Kumar <span>Clinevotech</span>
                            </section>
                        </div>
                        <div className="item-wrap">
                            <section className="item-desc">
                                <p>I worked with BLeap team earlier as part of my previous organization in 2017. They have grown and have become more professional. At GaragePlug, they generate leads for our SaaS based product in Saudi Arabia, Oman, UAE, Qatar, Kuwait and other countries. They work along with our team to understand the customer persona and give ROI for our lead generation efforts.</p>
                            </section>
                            <section className="author">
                             Ashish Shrivastav <span>CEO & Co-founder – Garage Plug</span>
                            </section>
                        </div>
                        <div className="item-wrap">
                            <section className="item-desc">
                                <p>We have been working with BLeap to generate leads for assets-based products like Business Loan, Gold Loan etc. using A.I based chatbot. It has been an interesting and fruitful journey. Great work with high integrity.</p>
                            </section>
                            <section className="author">
                             Shalini Sahay <span>Head – Digital Marketing – Jana Bank</span>
                            </section>
                        </div>
                        <div className="item-wrap">
                            <section className="item-desc">
                                <p>We used lead generation services and booking campaign for 2 of our projects – SNN Raj Spiritua and SNN Clermont. They did a very good job and we plan to  partner with them in future as well.</p>
                            </section>
                            <section className="author">
                             Gururaj <span>Head Marketing - SNN Builders</span>
                            </section>
                        </div>
                      </Slider>
					</section>
					</section>
                    <section className="btm-bg left"></section>
				</section>
                <section className="our-clients section-wrap">
                    <section className="container">
                        <h3 className="hdg">Our Clients</h3>
                        <h4>Some of OUR Valuable and happy CLIENTS are</h4>  
                            <section className="clients-slider">                     
                        <Slider {...hmClients}>
                        <div>
                                <ul>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/sail.png"} alt="Sail" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/finora.png"} alt="Finora" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/frontiar-lab.png"} alt="Frontiar lab" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/hyderabad-public-school.png"} alt="Hyderabad public school" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/padah-solutions.png"} alt="Padah Solutions" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Sphoenix.png"} alt="Sphoenix" className="img-responsive" /></figure></li>
                                </ul>
                            </div>
                        <div>
                                <ul>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/spectalent.png"} alt="Spectalent" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Power logo.jpg"} alt="Power" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Proligy logo.jpg"} alt="Proligy" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Re-route logo.jpg"} alt="Re-route" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Royal logo.jpg"} alt="Royal" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Sai logo.jpg"} alt="Sai" className="img-responsive" /></figure></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Saijune-logo.jpg"} alt="Saijune" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Badmin.jpg"} alt="Badmin" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/victoria logo.jpg"} alt="victoria" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Bizla logo.jpg"} alt="Bizla" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Brite logo.jpg"} alt="Brite" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Evolo logo.jpg"} alt="Evolo" className="img-responsive" /></figure></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Finwi logo.jpg"} alt="Finwi" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Fish logo.jpg"} alt="Fish" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Gara logo.jpg"} alt="Gara" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/xerve logo.jpg"} alt="xerve" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Guyala logo.jpg"} alt="Guyala" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Helve logo.jpg"} alt="Helve" className="img-responsive" /></figure></li>
                                </ul>
                            </div>
                             <div>
                                <ul>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Helvetica logo.jpg"} alt="Helvetica" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Herse logo.jpg"} alt="Herse" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Immex logo.jpg"} alt="Immex" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Jazz logo.jpg"} alt="Jazz" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Lakme logo.jpg"} alt="Lakme" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Park logo.jpg"} alt="Park" className="img-responsive" /></figure></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Poetry logo.jpg"} alt="Poetry" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Sakthi logo.jpg"} alt="Sakthi" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Shree logo.jpg"} alt="Shree" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Shreshtha logo.jpg"} alt="Shreshtha" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Smile logo.jpg"} alt="Smile" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/SRM logo.jpg"} alt="SRM" className="img-responsive" /></figure></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><figure><img src={config.ROUTE_URL+"/public/home/images/client-logos/Unp logo.jpg"} alt="Unp" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/rane.png"} alt="Rane" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/rock-n-shop.png"} alt="Rock N Shop" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/kriyatec.png"} alt="Kriyatec" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/osian-chlorophyll.png"} alt="Osian Chlorophyll" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/done-partners.png"} alt="Done Partners" className="img-responsive" /></figure></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/sathya.png"} alt="Sathya" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/ail.jpg"} alt="Ailaysa" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/balmaadi.jpg"} alt="Balmaadi" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/bb.jpg"} alt="Bigbindi" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/clinevo.jpg"} alt="Clinevo" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/ear.jpg"} alt="Ear-ly" className="img-responsive" /></figure></li>
                                </ul>
                            </div>
                             <div>
                                <ul>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/gh.jpg"} alt="Global" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/hari.jpg"} alt="Hari" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/hsi.jpg"} alt="HSI" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/iitm.jpg"} alt="IITM" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/raayen.jpg"} alt="Raayen" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/ithought.jpg"} alt="ithought" className="img-responsive" /></figure></li>
                                </ul>
                            </div>
                             <div>
                                <ul>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/knt.jpg"} alt="KNT" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/iv.jpg"} alt="IV" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/janabank.jpg"} alt="Janabank" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/motorzo.jpg"} alt="MotorZo" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/mpulse.jpg"} alt="Mpulse" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/pe.jpg"} alt="PE" className="img-responsive" /></figure></li>
                                </ul>
                            </div>
                             <div>
                                <ul>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/pg.jpg"} alt="PG" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/shriventures.jpg"} alt="ShriVentures" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/snn.jpg"} alt="SNN" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/spr.jpg"} alt="SPR" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/soulwallet.jpg"} alt="Soulwallet" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/talkpro.jpg"} alt="Talkpro" className="img-responsive" /></figure></li>
                                </ul>
                            </div>
                             <div>
                                <ul>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/vistaar.jpg"} alt="Vistaar" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/sbs.jpg"} alt="sbs" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/bhavani-crystals.jpg"} alt="bhavani-crystals" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/gtee.jpg"} alt="gtee" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/saiprana.jpg"} alt="Saiprana" className="img-responsive" /></figure></li>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/powerlux.jpg"} alt="powerlux" className="img-responsive" /></figure></li>
                                </ul>
                            </div>
                             <div>
                                <ul>
                                    <li><figure><img src={config.APP_URL+"/public/home/images/client-logos/reroute.jpg"} alt="reroute" className="img-responsive" /></figure></li>
                                </ul>
                            </div>
                      </Slider>
                            </section>
                    </section>
                    </section><section className="hm-faqs section-wrap">
	<section className="container">
		<h3 className="hdg">Top Digital Marketing Company Bangalore FAQs</h3>
		<div className="bs-example">
			<div className="accordion" id="accordionExample">
				<div className="card">
					<div className="card-header" id="headingOne">
						<h2 className="mb-0">
							<button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseOne"><i className="fa fa-plus"></i> What is Digital Marketing? Why do I need digital marketing services?</button>									
						</h2>
					</div>
					<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
						<div className="card-body">
							<p>Any branding or advertising activities carried out online on digital channels such as search engines, social media and websites fall under digital marketing. Creating a digital footprint using digital marketing services is now more important than ever. Through one digital channel or another you can easily reach out to your target audience. To increase the reach and awareness of your business, digital marketing services are essential and highly recommended since you get the opportunity to reach out to your target audience and communicate one-on-one with them. You can build your online business and generate sales and profits through different digital channels and platforms. The main advantage of digital marketing is that it can help you measure success, performance and results of all the activities across all platforms in a very cost-effective way.</p>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingTwo">
						<h2 className="mb-0">
							<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"><i className="fa fa-plus"></i> What are the types of activities that are included in digital marketing and how are they useful?</button>
						</h2>
					</div>
					<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
						<div className="card-body">
							<p>Digital marketing consists of a wide range of diverse online activities all aimed at amplifying the reach and awareness of your brand’s communication. The major and recommended digital activities are <a href="services/search-engine-optimization">SEO (Search Engine Optimization)</a>, <a href="services/online-advertising">SEM (Search Engine Marketing)</a> or <a href="services/online-advertising">PPC advertising</a>, <a href="services/online-advertising/social-media-marketing">SMM (Social Media Marketing)</a> and <a href="services/responsive-website-design-development">Website Development</a>. These activities are fundamental in creating a strong online presence. Tied together effectively they can deliver massive and profitable business results in due time.</p>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingThree">
						<h2 className="mb-0">
							<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"><i className="fa fa-plus"></i> What is SEO and how can it help my business?</button>                     
						</h2>
					</div>
					<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
						<div className="card-body">
							<p>SEO stands for <a href="services/search-engine-optimization">Search Engine Optimization</a>. It is the process of driving ‘organic’ or ‘free’ traffic to your website through search engines like Google. It helps in improving the quantity and quality of traffic to your website. It can provide visibility to your business’ website by ranking on top of search engines for searches of keywords related to your industry/niche.</p>
							<p>SEO is mainly divided into on-page SEO and off-page SEO.</p>
							<p>In on-page SEO, you need to focus on optimizing your website by considering Google's ranking factors. The off-page SEO is about generating quality backlinks for your websites through different channels.</p>
							<p>A few steps involved in optimizing your website for search engines include:
								<ol>
									<li>1. Keyword research</li>
									<li>2. Competitor analysis</li>
									<li>3. Keyword Mapping</li>
									<li>4. On-page optimization</li>
									<li>5. Content creation</li>
									<li>6. Performance Tracking of SEO campaign</li>
								</ol>
							</p>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingFour">
						<h2 className="mb-0">
							<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour"><i className="fa fa-plus"></i> How does SEO improve the ranking of my website and how long will it take to rank on top?</button>
						</h2>
					</div>
					<div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
						<div className="card-body">
							<p>SEO is a combination of various techniques which can help your website land relevant traffic and improve its overall ranking. A digital agency like Bleap, has experts to analyse your website and test it on different aspects like UX, mobile responsiveness, website content, technical errors, on-page changes, backlink quality and overall improvement of website quality.</p>
							<p>Once the concise report is made about required changes, the changes get implemented on the website and SEO strategy is made according to the scope of work. Continuous efforts are made throughout the campaign to make the targeted keywords rank better and improve the organic traffic to the website.</p>
						<p>Depending on the competitiveness of your niche and the popularity of the keywords used, making your brand appear on the top of the search engine results may vary from a few weeks to months.</p>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingFive">
						<h2 className="mb-0">
							<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive"><i className="fa fa-plus"></i> What is SEM and why should I use it for my business?</button>
						</h2>
					</div>
					<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
						<div className="card-body">
							<p>SEM or <a href="services/online-advertising">Search Engine Marketing</a> usually refers to paid search or PPC <a href="services/online-advertising">(pay-per-click)</a> advertising. It’s a way to gain enhanced visibility on search engines when users search for terms that relate to your business. Essentially it enables you to buy listings in the “sponsored” area of a search engine thus putting your website in direct visibility of the prospect for the related keyword search. Through SEM campaigns you can have potential visitors to your websites/landing page, where you can convert them to leads and conversions.</p>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingSix">
						<h2 className="mb-0">
							<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix"><i className="fa fa-plus"></i> What is the difference between SEM and SEO, and which one should I focus on for my business?</button>
						</h2>
					</div>
					<div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
						<div className="card-body">
							<p>Both SEM and SEO can go hand in hand as simultaneous efforts in your digital marketing strategy. While search engine optimisation focuses on organically improving the rank of the site in SERP on particular keywords, search engine marketing focuses on improving the presence through the paid medium of advertisement. Advertisements can include both display ads and text ads to drive the relevant and potential audience to your website who formerly were not aware of your brand.</p>
							<p>What is ideal is a combination of the immediate results of SEM campaigns along with the organic methodical approach of SEO activities. This will deliver all-round business results both in the short and long term.</p>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingSeven">
						<h2 className="mb-0">
							<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven"><i className="fa fa-plus"></i> What is SMM? How can it help me achieve my business goals?</button>
						</h2>
					</div>
					<div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
						<div className="card-body">
							<p>The main objective of SMM or Social Media Marketing is promoting your brand, products, and services on social media platforms like Facebook, Instagram, LinkedIn, Twitter etc.</p> 
							<p>Social media platforms are great mediums to communicate your brand’s offering as they are widely used on an everyday basis and offer great advertising tools. The Facebook ads manager for instance provides extremely comprehensive targeting options and comes with the advantage of massive storehouses of consumer data that is leveraged by the machine learning algorithms built-in by Facebook. Depending on whether the objective of your campaign is awareness, consideration or conversion, the campaign can be optimized to deliver according results. Using a combination of effective targeting and compelling creative, massive business results can be achieved by advertising on these platforms.</p>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingEight">
						<h2 className="mb-0">
							<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight"><i className="fa fa-plus"></i> How can I make the most use of SMM campaigns?</button>
						</h2>
					</div>
					<div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
						<div className="card-body">
							<p>Social media marketing isn't only about the social media channels; it's also about the people available on these channels. The social media processes involve interpreting the audience’s insights and working out strategies for creating a sustained online presence.</p>
							<p>Social media marketing can work best when</p>
							<ul>
							<li>There is an in-depth research on the audience’s behaviour</li>
							<li>The content is custom-designed to best fit the audience’s behaviour</li>
							<li>Time and tone of each activity is matched with the audience’s behaviour</li>
							<li>Topical content is best leveraged.</li>
							</ul>
							<p>Social media marketing will prove to be beneficial only if there is a strong understanding of your brand and your audience. The content developed needs to be channelized at the right time and customized for the right audience. There need to be effort put into understanding the objective and brand, researching the audience, creating customized content and right channelization.</p>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingNine">
						<h2 className="mb-0">
							<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine"><i className="fa fa-plus"></i> What is the process of developing a website?</button>
						</h2>
					</div>
					<div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
						<div className="card-body">
							<p>Developing a website can be broken down into several steps from the initial stage of gathering information to determine the purpose, all the way to the completion and ongoing maintenance of the website.</p>
							<p>The first step involves discovering the purpose and understanding the brand brief to get a clear picture of the future website purposes, after which planning, sitemap and wireframe creation is done, which determines the framework of how the entire site will look like. Following this is the designing phase during which the website takes shape. All the visual content, such as images, photos, and videos are ideated and created at this step. Content writing and compiling usually overlaps with other stages of website creation, and is done simultaneously with several revisions upon requirement. Subsequently comes the coding phase where one starts finally creating the website itself. Graphic elements that have been designed during the previous stages are used to create the actual website. Usually, the home page is created first, and then all sub-pages are added. Following this comes testing where every single link and functionality is tested to make sure that nothing is broken. After the website has been completed and delivered, regular maintenance and updating is done when required to ensure proper functionality.</p>
						</div>
					</div>
				</div>
                <div className="card">
                    <div className="card-header" id="headingTen">
                        <h2 className="mb-0">
                            <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen"><i className="fa fa-plus"></i> How long will it take to get a new completed website?</button>
                        </h2>
                    </div>
                    <div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
                        <div className="card-body">
                            <p>On average, we aim for a six to eight-week turnaround, but the pace of any project is set by each client. Based on how much input can be provided during the initial stages, the availability with feedback, how soon the content is ready - all this affects the speed of completion. The functionality needs may also play a role. More complex sites will take more time to develop.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingElev">
                        <h2 className="mb-0">
                            <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseElev"><i className="fa fa-plus"></i> Why are digital marketing agencies needed for your business?</button>
                        </h2>
                    </div>
                    <div id="collapseElev" className="collapse" aria-labelledby="headingElev" data-parent="#accordionExample">
                        <div className="card-body">
                            <p>So, you've decided to take your business online. You've created a website and set up some social media profiles. But you're not seeing the results you were hoping for. What could be wrong?</p>
                            <p>Well, chances are you're missing out on one of the most important aspects of online marketing. And it is digital marketing agencies.</p>
                            <p>Digital marketing agencies can help you create a solid online marketing strategy. So, that will help you reach your target audience. Besides, achieve your business goals. Here are a few of the ways that they can help you:
                            <ol>
                                <li>1. Digital marketing agencies can help you find your target audience. Also, it can create buyer personas.</li>
                                <li>2. They can help you create powerful and effective marketing collateral. It can be website copy, email campaigns, and social media posts.</li>
                                <li>3. They can help you set up and track key performance indicators (KPIs). It can gauge the effectiveness of your online marketing efforts.</li>
                                <li>4. They can help you develop a search engine optimization (SEO) strategy. So, your website ranks higher on search engine results pages.</li>
                                <li>5. They can help you create and execute paid advertising campaigns. We can do this on Google AdWords and Facebook Ads, etc.</li>
                                <li>6. With their expert advice, you can make the most of digital marketing tools. We can do this via blogs, podcasts, etc.</li>
                                <li>7. Finally, they can help you track and analyze your website's analytics data. So, you can identify areas for improvement.</li>
                            </ol>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwe">
                        <h2 className="mb-0">
                            <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwe"><i className="fa fa-plus"></i> Partner With US</button>
                        </h2>
                    </div>
                    <div id="collapseTwe" className="collapse" aria-labelledby="headingTwe" data-parent="#accordionExample">
                        <div className="card-body">
                            <p>If you want your business to succeed online, it's vital to partner with a digital marketing agency. And we can help you take your business to the next level. Contact us today to find out more. </p>
                            <p>As digital marketing experts, BLeap gets these questions all the time. And, we're happy to answer them. Here we answer some of the most asked questions about digital marketing and how it works.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThi">
                        <h2 className="mb-0">
                            <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThi"><i className="fa fa-plus"></i> What is digital marketing?</button>
                        </h2>
                    </div>
                    <div id="collapseThi" className="collapse" aria-labelledby="headingThi" data-parent="#accordionExample">
                        <div className="card-body">
                            <p>Digital Marketing is marketing products on the Internet using digital technologies. By mobile phones, display advertising, and any other digital medium.</p>
                            <p>To show your product or service on your customer's devices. It involves using different channels and platforms. In devices such as a  
                            <ul><li>Computer desktop or laptop screen</li>
                            <li>Smartphone screen (such as iPhone)</li>
                            <li>Smart TV (such as Samsung Smart TV),</li>
                            <li>And, etc.</li></ul></p>
                            <p>It could be through content sharing websites like YouTube or Facebook, Display Ads on another website, Social Media platforms such as Twitter and LinkedIn.</p>
                            <p>It is an ever-changing industry when it comes to technology and data analysis. And it consists of marketing techniques and skills.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingFourt">
                        <h2 className="mb-0">
                            <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFourt"><i className="fa fa-plus"></i> How does digital marketing work?</button>
                        </h2>
                    </div>
                    <div id="collapseFourt" className="collapse" aria-labelledby="headingFourt" data-parent="#accordionExample">
                        <div className="card-body">
                            <p><ul><li>Digital Marketing works across many channels, including</li>
                            <li>Paid search (desktop and mobile)</li>
                            <li>Display advertising (including banner ads, rich media ads, and video ads)</li></ul></p>
                            <p>And Social media platforms such as
                            <ul>
                            <li>Firstly, Facebook</li>
                            <li>Secondly, Instagram</li>
                            <li>Thirdly, Direct email mailers</li>
                            <li>Moreover, Apps for mobile phones</li>
                            <li>In addition, Websites</li>
                            <li>TV through commercials aired on TV's</li>
                            <li>And streaming services like Netflix &amp; Hulu.</li></ul></p>
                            <p>You can do it through companies that provide online marketing solutions to businesses. Or by dedicated digital agencies that offer "one-stop-shop" end-to-end solutions for digital business needs.</p>
                            <p>Today, online technologies and tools have improved vastly. Above all, businesses have to gain new customers to grow. Digital marketing is the most effective strategy for that. And engage more with their existing clients and get the best ROI. Besides, more than 50% of web users use ad-blocking software today. Hence, it is more important than ever to ensure your message isn't 'Blocked' by your viewers.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingFifte">
                        <h2 className="mb-0">
                            <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFifte"><i className="fa fa-plus"></i> What are the channels used in digital marketing?</button>
                        </h2>
                    </div>
                    <div id="collapseFifte" className="collapse" aria-labelledby="headingFifte" data-parent="#accordionExample">
                        <div className="card-body">
                            <p>Digital marketing we can do through multiple channels, but I will cover some here. When it comes to (digital) marketing, you need to concentrate on these four:
                            <ol>
                                <li>1. Websites/Blogs</li>
                                <li>2. YouTube</li>
                                <li>3. Social Media</li>
                                <li>4. Offline Media</li>
                            </ol>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingSixt">
                        <h2 className="mb-0">
                            <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSixt"><i className="fa fa-plus"></i> Websites/Blogs:</button>
                        </h2>
                    </div>
                    <div id="collapseSixt" className="collapse" aria-labelledby="headingSixt" data-parent="#accordionExample">
                        <div className="card-body">
                            <p>Above all, Websites are the essential aspect of digital marketing. As 70% of people who use the internet visit at least one website daily. Your website must be up-to-date, secure, and available to everyone 24/7 worldwide if you have a business. Having an effective landing page can give you more conversions than other channels. So it would be best if you considered this when launching new campaigns.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingSevent">
                        <h2 className="mb-0">
                            <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSevent"><i className="fa fa-plus"></i> YouTube:</button>
                        </h2>
                    </div>
                    <div id="collapseSevent" className="collapse" aria-labelledby="headingSevent" data-parent="#accordionExample">
                        <div className="card-body">
                            <p>YouTube has emerged as one of the top marketing tools. Still, it's not accessible in many countries. Each month over 1 billion unique visitors watch hundreds of millions of hours of videos. It can be on their phones, computers, and TV screens. So, every business needs to have a YouTube channel to reach their target customers.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingEighte">
                        <h2 className="mb-0">
                            <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEighte"><i className="fa fa-plus"></i> Social Media:</button>
                        </h2>
                    </div>
                    <div id="collapseEighte" className="collapse" aria-labelledby="headingEighte" data-parent="#accordionExample">
                        <div className="card-body">
                            <p>Social media integrated into your digital marketing is essential to get more traffic. If you are launching new products or services, show them on Twitter, Facebook and Linkedin. Social media is the best way to get people interested in what you offer. You can even use social media for email marketing. You can do this by Uploading your subscriber's list onto Hootsuite. And it is one of the most popular free social media tools.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingninete">
                        <h2 className="mb-0">
                            <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseninete"><i className="fa fa-plus"></i> Offline Media:</button>
                        </h2>
                    </div>
                    <div id="collapseninete" className="collapse" aria-labelledby="headingninete" data-parent="#accordionExample">
                        <div className="card-body">
                            <p>Last but not least, offline media has become an excellent help for digital marketing. In contrast, it's for both physical stores &amp; online shops. In the year 2017 alone, over 4 billion consumers shopped online. Investing in promotional ads is a great way to get your products noticed. You can do this via Billboards &amp; TV commercials. Or through streaming services like
                                <ul><li>Google Chromecast</li>
                                <li>Apple TV &amp; Airplay</li>
                                <li>Spotify and</li>
                                <li>Pandora.</li>
                                </ul></p>
                            <p>In business, what's most important is these two. Where you're going and how much time it will take. G2Crowd created the following infographic. And it provides a quick snapshot of the actual ROI you could expect. Besides, this is from both inbound and outbound marketing activity.</p>                      
                        </div>
                    </div>
                </div>


			</div>
		</div>
	</section>
</section>

                    <section className="enquire-now">
						<aside className="btm-bg btm-img"></aside>
                        <section className="container">
                            <section className="row">
                                <section className="contact-form-section hm col-md-6 col-sm-12" style={{padding: '10px'}}>
                                    <section className="form">
                                        <h3>Enquire Now</h3> 
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
                                                <input id="email" type="email" className="form-control border-bottom inputText" name="email" value={this.state.email} onChange={this.handleChange}  required autoComplete="email" placeholder="Email Id*" />
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
                                            {/*<div className="form-group">
                                                 <div className="g-recaptcha"
                                                      data-sitekey={config.GOOGLE_RECAPTCHA_KEY}>
                                                 </div>
                                            </div>*/}
                                            {/*<div className="form-group">.
                                                <ReCaptcha
                                                    ref={(el) => {this.captchaDemo = el;}}
                                                    size="normal"
                                                    render="explicit"
                                                    sitekey={config.GOOGLE_RECAPTCHA_KEY}
                                                    onloadCallback={this.onLoadRecaptcha}
                                                    verifyCallback={this.verifyCallback}
                                                />
                                            </div>*/}
                                            {/*<div className="form-group mb-0">
                                                <div className="col-md-8">
                                                    <button type="submit" className="btn btn-primary" style={{border: '2px solid #FFF', background: 'none'}}>
                                                        Send Now
                                                    </button>
                                                </div>
                                            </div>
                                        </form>*/}
                                    </section>
                                </section>
                                <section className="col-md-6 col-sm-12">
                                    <section className="digital-gyan">
                                     <h3>Digital Gyan</h3>
                                        <section className="item-cont clearfix">
                                            <figure><img src={config.APP_URL+"/public/home/images/digital-gyan.jpg"} alt="Digital Gyan" className="img-responsive" /></figure>
                                            <section className="item-desc">
                                                <h4>6 QUESTIONS TO ASK A RESTAURANT MARKETING AGENCY BEFORE SIGN UP</h4>
                                                <p>When you own a restaurant, you know. You’ve spent your hard earned earnings and umpteen hours of hard work to put it up together. However, when it comes to marketing, most restaurateurs are confused what to do?</p>
												<section className="btn-wrap">
												<a href="https://www.bleap.in/blog/2018/07/10/6-questions-to-ask-a-restaurant-marketing-agency-before-sign-up/" className="btn-primary">Read More</a>
												</section>
											</section>
                                        </section>
                                        
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
					<section className="congrats-blk section-wrap">
						<section className="container">
							<h3>Social Media and Digital Marketing Agency</h3>
							<p>
								{
									{
										'ta': ('வாழ்த்துக்கள்! சிறந்த டிஜிட்டல் சந்தைப்படுத்தல் கூட்டாளருக்கான உங்கள் தேடல் வெற்றிகரமாக முடிந்தது. பி லீப் ஒருங்கிணைந்த சந்தைப்படுத்தல் சிறந்த டிஜிட்டல் சந்தைப்படுத்தல் நிறுவனமாகும், இது ')
									} [config.SITE_LANG] || 'Congrats! Your search for the best Digital Marketing Partner concludes successfully. Bleap Integrated Marketing is the best digital marketing agency with offices in' 
								}
							  
							
							<Link to={config.ROUTE_URL+"/contact-us/digital-marketing-agency-in-bangalore/"}> 
								{
									{
										'ta': ('பெங்களூர், ')
									} [config.SITE_LANG] || ' Bangalore ,'
								}

							</Link>
							<Link to={config.ROUTE_URL+"/contact-us/digital-marketing-agency-in-chennai/"}> 
								{
									{
										'ta': ('சென்னை,')
									} [config.SITE_LANG] || ' Chennai ,'
								}
							</Link>
							<Link to={config.ROUTE_URL+"/contact-us/digital-marketing-agency-in-mumbai/"}> 
								{
									{
										'ta': ('மும்பை மற்றும்')
									} [config.SITE_LANG] || ' Mumbai ,'
								}
							</Link>
							<Link to={config.ROUTE_URL+"/contact-us/digital-marketing-agency-in-pune/"}> 
								{
									{
										'ta': ('புனே ஆகிய இடங்களில் அலுவலகங்களை கொண்டுள்ளது.')
									} [config.SITE_LANG] || ' Pune.'
								}
							</Link>
							<a href="javascript:;">
								{
									{
										'ta': ('இந்தியா மற்றும் உலகம் முழுவதும் இருந்து அனைத்து வாடிக்கையாளர்களுக்கும்  பதிலளிக்கக்கூடிய வலை வடிவமைப்பு ')
									} [config.SITE_LANG] || ' We provide online services'
								} 
							</a> 

								{
									{
										'ta': ('மற்றும் மேம்பாடு ')
									} [config.SITE_LANG] || 'such as '
								}
							
							<Link to={config.ROUTE_URL+'/services/responsive-website-design-development'}> Responsive Web Design & Development,</Link>
							<Link to={config.ROUTE_URL+'/services/search-engine-optimization'}> 
								{
									{
										'ta': ('தேடுபொறி உகப்பாக்கம் - எஸ் சி ஓ ')
									} [config.SITE_LANG] || 'Search Engine Optimization (SEO) ,'
								}
							
							</Link>
							 <Link to={config.ROUTE_URL+'/services/online-advertising'} > 
							 	{
									{
										'ta': ('தேடுபொறி சந்தைப்படுத்தல்')
									} [config.SITE_LANG] || ' Search Engine Marketing (SEM) , '
								}
							 	 
							 </Link>
							 <Link to= {config.ROUTE_URL+'/services/online-advertising/social-media-marketing'}>
							  	{
									{
										'ta': ('சமூக ஊடக சந்தைப்படுத்தல் ')
									} [config.SITE_LANG] || ' Social Media Marketing (SMM) , '
								}

							  </Link>
							  	{
									{
										'ta': ('சமூக ஊடக உகப்பாக்கம்')
									} [config.SITE_LANG] || ' Social Media Optimization (SMO) , '
								}
							  	
							  	{
									{
										'ta': ('இ  - காமர்ஸ் வலைத்தளங்கள், உள்ளடக்க சந்தைப்படுத்தல், ஆன்லைன் நற்பெயர் மேலாண்மை, வலைத்தள பரவல் மற்றும்')
									} [config.SITE_LANG] || 'E-Commerce Websites , Content Marketing , Online Reputation Management , Website Localization and '
								}
							 
							  <Link to= {config.ROUTE_URL+'/services/strategic-marketing'}> 
							  	{
									{
										'ta': ('மூலோபாய சந்தைப்படுத்தல் சேவைகள்')
									} [config.SITE_LANG] || ' Strategic Marketing Services'
								}

							  </Link>
							  	{
									{
										'ta': ('போன்ற ஆன்லைன்  சேவைகளை நாங்கள் வழங்குகிறோம். நிதி சேவைகள், ரியல் எஸ்டேட், இ - காமர்ஸ்,  நகை சில்லறை விற்பனை, வாகன மற்றும் சுகாதாரப் பாதுகாப்பு ஆகியவை எங்கள் முக்கிய மையப் பகுதிகள் ஆகும். நாங்கள் பல தொடக்க நிறுவனங்களின் டிஜிட்டல் சந்தைப்படுத்தல் பயணத்தைத் தொடங்க எல்லா இடங்களிலிருந்தும் பணியாற்றியுள்ளோம், மேலும் அவர்களின் முதலீட்டிற்கு சிறந்த ROI ஐ வழங்கியுள்ளோம். நாங்கள் இந்தியா, ஐக்கிய அரபு எமிரேட்ஸ், ஆஸ்திரேலியா, நியூசிலாந்து, அமெரிக்கா மற்றும் இங்கிலாந்து ஆகிய நாடுகளைச் சேர்ந்த 74 க்கும் மேற்பட்ட வாடிக்கையாளர்களை நாங்கள் நிர்வகிக்கிறோம். நாங்கள் கூகிள், ஃபேஸ்புக், இன்ஸ்டாகிராம், ஸ்னாப்சாட்,  லிங்க்டின் மற்றும் ட்விட்டருக்கு விருப்பமான கூட்டாளர்.')
									} [config.SITE_LANG] || ' to clients from India and across the world. Financial Services , Real Estate , e-commerce , Jewellery Retail , Automotive and Healthcare are our key focus areas. We have worked with many start-ups from all over to kick start their digital marketing journey and given excellent ROI for their investment. We manage more than 74 clients from India , UAE , Australia , New Zealand , US and UK. We are a preferred partner for Google , Facebook , Instagram , SnapChat , LinkedIn and Twitter.'
								}
							   
							</p>
						</section>
						<section className="btm-bg btm-img"></section>
					</section>
                    <Footer />
                {/*Modal starts*/}
                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <center><h4 className="modal-title"><b>Join the community.</b></h4></center>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="row text-danger" id="modal-errors"></div>
                                <center><p>Sign up now and receive our news</p></center>
                                <form onSubmit={this.modalHandleSubmit} noValidate>
                                    <div className={(this.state.modelemailErr) ? 'has-error form-group row' : 'form-group row'}>
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right required">E-Mail Address :</label>

                                        <div className="col-md-8">
                                            <input id="modal-email" type="email" className="form-control" name="modalemail" value={this.state.modalemail} onChange={this.handleChange} onBlur={this.modalValidateForm} required autoComplete="email" />
                                        </div>
                                        {this.state.modalemailErr && <p className="help-block">{this.state.modalemailErr}</p> }
                                    </div>
                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Modal ends*/}
            </React.Fragment>
        );
    }
}


export default Home;