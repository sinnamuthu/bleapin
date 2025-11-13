import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import App from './App';
import Home from './Home';
import config from './Config';
import Cookies from 'universal-cookie';
import { browserHistory } from 'react-router';
import {withRouter} from 'react-router-dom'

class Navbar extends Component{
	constructor(props) {
		super(props);
		localStorage.setItem('siteLang','en');
		this.translateSite = this.translateSite.bind(this);
		this.state = {
			breadCrumbs : []
		};
	}

	translateSite(e, lang = ''){
		const cookies = new Cookies();
		cookies.set('siteLang', lang, { path: '/' });
		// localStorage.setItem('siteLang',lang);
		// setTimeout(() => {
			window.location.href = config.APP_URL+'/'+cookies.get('siteLang');
		// });
		// this.props.history.push('/'+lang);
	}

	componentDidMount(){
		jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 1) {
                jQuery('header').addClass("hm-min");
            } else {
                jQuery('header').removeClass("hm-min");
            }
        });
		let breadCrumbs = (window.location.pathname).split('/');
		this.setState({
			breadCrumbs : breadCrumbs
		});
	}

	render() {
		return (
            <header>
				<section className="container pos-rel checking">
					<Link to={config.ROUTE_URL}><aside className="logo"><img src={config.APP_URL+'/public/home/images/logo-bleap.png'} alt="Digital Marketing Agency" className="img-responsive" /></aside></Link>		
					<nav className="navbar navbar-expand-lg navbar-light">
					  	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
					  	</button>
					  	<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
							  	<li className="nav-item active">
									<Link to={config.ROUTE_URL}>Home<span className="sr-only">(current)</span></Link>
								</li>
							  	<li className="nav-item dropdown dropbtn" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
									<Link to={config.ROUTE_URL+"/services"}  className="dropdown-toggle">Services</Link>
									<div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
									  	<Link to={config.ROUTE_URL+"/services/responsive-website-design-development"} className="dropdown-item">Responsive Website Design Development</Link>
									  	<Link to={config.ROUTE_URL+"/services/search-engine-optimization"} className="dropdown-item">Search Engine Optimization</Link>
									  	<Link to={config.ROUTE_URL+"/services/online-advertising"} className="dropdown-item">Online Advertising</Link>
										{/*<Link to={config.ROUTE_URL+"/services/social-media-marketing"} className="dropdown-item">Social Media Marketing</Link>*/}
									  	<Link to={config.ROUTE_URL+"/services/strategic-marketing"} className="dropdown-item">Strategic Marketing</Link>
									  	<Link to={config.ROUTE_URL+"/services/ecommerce-solutions"} className="dropdown-item">E-Commerce Solutions</Link>
									</div>
							  	</li>
							  	<li className="nav-item dropdown dropbtn" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
									<Link to={config.ROUTE_URL+"/solutions"}  className="dropdown-toggle">Solutions</Link>
									<div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
									  	<Link to={config.ROUTE_URL+"/solutions/banking"} className="dropdown-item">Banking</Link>
									  	<Link to={config.ROUTE_URL+"/solutions/education"} className="dropdown-item">Education</Link>
									  	<Link to={config.ROUTE_URL+"/solutions/healthcare"} className="dropdown-item">Healthcare</Link>
									  	<Link to={config.ROUTE_URL+"/solutions/fmcg-retail"} className="dropdown-item">Fmcg and Retail</Link>
									  	<Link to={config.ROUTE_URL+"/solutions/Digital-Marketing-Agency-for-Real-Estate-industry-and-agents"} className="dropdown-item">Real Estate Industry</Link>
									</div>
							  	</li>
							  	<li className="nav-item"><Link to={config.ROUTE_URL+"/team"}>Team</Link></li>
							  	<li className="nav-item"><Link to={config.ROUTE_URL+"/portfolio"}>Portfolio</Link></li>
							  	<li className="nav-item"><a href={config.APP_URL+"/blog"} target="_blank">Blog</a></li>
							  	<li className="nav-item"><Link to={config.ROUTE_URL+"/about-us"}>About</Link></li>
							  	<li className="nav-item"><Link to={config.ROUTE_URL+'/careers'}>Careers</Link></li>
							  	{<li className="nav-item"><Link to={config.ROUTE_URL+"/contact-us"}>Contact</Link></li>}
							  	<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle dropbtn" href="#" id="langDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Translate</a>
									<div className="dropdown-menu dropdown-content" aria-labelledby="langDropdown">
									  	<a onClick={(e) => this.translateSite(e, '')} className="dropdown-item">en</a>
									  	<a onClick={(e) => this.translateSite(e, 'ta')} className="dropdown-item">த</a>
									</div>
							  	</li>
							  	{/*<li className="nav-item" style={{padding: '30px'}}><a target="_blank" href="https://www.google.com/partners/agency?id=2495672630"><img src={config.ROUTE_URL+'/public/home/images/google-batch.jpg'} alt="Google Batch" className="img-responsive" /></a></li>*/}
							</ul>
					  	</div>
					</nav>
				</section>
				<section className="container">
					{
						/*(this.state.breadCrumbs).forEach(val => {
							val.replace('/', '');
							<Link to={config.ROUTE_URL+val}>{val}</Link>
						}).bind(this);*/
					}
				</section>
			</header>
			
		);
	}
}

export default withRouter(Navbar);
