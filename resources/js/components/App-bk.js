import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Example from './Example';
import Home from './Home';
import Navbar from './Navbar';
import Services from './Services';
import Team from './Team';
import { BrowserRouter } from 'react-router-dom';
import Portfolio from './Portfolio';
import Blog from './Blog';
import About from './About';
import Careers from './Careers';
import Contact from './Contact';
import Login from './Login';
import NotFound from './404';
import { spring, AnimatedSwitch } from 'react-router-transition';
import config from './Config';
import OnlineAdvertising from './services/OnlineAdvertising';
import ECommerce from './services/ECommerce';
import Responsive from './services/Responsive';
import StrategicMarketing from './services/StrategicMarketing';
import SocialMediaMarketing from './services/online-advertising/SocialMediaMarketing';
import SEO from './services/SEO';
import CorporateWebDesign from './services/responsive-website/CorporateWebDesign';
import MagentoDevelopment from './services/responsive-website/MagentoDevelopment';
import PWA from './services/responsive-website/PWA';
import Adwords from './services/online-advertising/Adwords';
import ReMarketing from './services/online-advertising/ReMarketing';
import PostPage from './PostPage';
import Audience from './services/seo/Audience';
import LocalBusiness from './services/seo/LocalBusiness';
import Reporting from './services/seo/Reporting';
import OnPageOptimize from './services/seo/OnPageOptimize';
import OffPageOptimize from './services/seo/OffPageOptimize';
import ReputationManagement from './services/seo/ReputationManagement';
import ContactChennai from './contact/ContactChennai';
import DisplayAdvertising from './services/online-advertising/DisplayAdvertising';
import ContactMumbai from './contact/ContactMumbai';
import ContactPune from './contact/ContactPune';
import ContactBanglore from './contact/ContactBanglore';
import PrivacyPolicy from './PrivacyPolicy';
import GetQuote from './GetQuote';
// import Dashboard from './Dashboard';

class App extends Component {
    constructor(props){
        super(props);
        this.mapStyles = this.mapStyles.bind(this);
        this.bounce = this.bounce.bind(this);
    }
    mapStyles(styles) {
        console.log(styles);
        return {
            opacity: styles.opacity,
            transform: `scale(${styles.scale})`,
        };
    }
    bounce(val){
        return spring(val, {
            stiffness: 330,
            damping: 22,
        });
    }
    render() {
        return (
            <div>
                <AnimatedSwitch
                  atEnter={{ opacity: 0,
    scale: 1.2, }}
                  atLeave={{ opacity: this.bounce(0),
    scale: this.bounce(0.8), }}
                  atActive={{ opacity: this.bounce(1),
    scale: this.bounce(1), }}
                  className="switch-wrapper"
                >
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/ta' component={Home}/>
                    <Route exact path={config.ROUTE_URL+'/services'} component={Services}/>
                    <Route path={config.ROUTE_URL+'/team'} component={Team}/>
                    <Route path={config.ROUTE_URL+'/portfolio'} component={Portfolio}/>
                    <Route path={config.ROUTE_URL+'/about-us'} component={About}/>
                    <Route path={config.ROUTE_URL+'/careers'} component={Careers}/>
                    <Route exact path={config.ROUTE_URL+'/contact-us'} component={Contact}/>
                    <Route path={config.ROUTE_URL+'/office/login'} component={Login}/>
                    <Route path={config.ROUTE_URL+'/services/ecommerce-solutions'} component={ECommerce}/>
                    <Route exact path={config.ROUTE_URL+'/services/responsive-website-design-development'} component={Responsive}/>
                    <Route path={config.ROUTE_URL+'/services/responsive-website-design-development/corporate-web-design/'} component={CorporateWebDesign}/>
                    <Route path={config.ROUTE_URL+'/services/responsive-website-design-development/progressive-web-apps/'} component={PWA}/>
                    <Route path={config.ROUTE_URL+'/services/responsive-website-design-development/magento-web-development/'} component={MagentoDevelopment}/>
                    <Route exact path={config.ROUTE_URL+'/services/search-engine-optimization'} component={SEO}/>
                    <Route path={config.ROUTE_URL+'/services/search-engine-optimization/audience-research/'} component={Audience}/>
                    <Route path={config.ROUTE_URL+'/services/search-engine-optimization/on-page-optimization/'} component={OnPageOptimize}/>
                    <Route path={config.ROUTE_URL+'/services/search-engine-optimization/off-page-optimization/'} component={OffPageOptimize}/>
                    <Route path={config.ROUTE_URL+'/services/search-engine-optimization/reporting-analytics/'} component={Reporting}/>
                    <Route path={config.ROUTE_URL+'/services/search-engine-optimization/local-business-listing/'} component={LocalBusiness}/>
                    <Route path={config.ROUTE_URL+'/services/search-engine-optimization/reputation-management/'} component={ReputationManagement}/>
                    <Route exact path={config.ROUTE_URL+'/services/online-advertising'} component={OnlineAdvertising}/>
                    <Route path={config.ROUTE_URL+'/services/online-advertising/google-adwords/'} component={Adwords}/>
                    <Route path={config.ROUTE_URL+'/services/online-advertising/display-advertising/'} component={DisplayAdvertising}/>
                    <Route path={config.ROUTE_URL+'/services/online-advertising/social-media-marketing'} component={SocialMediaMarketing}/>
                    <Route path={config.ROUTE_URL+'/services/online-advertising/remarketing-ads/'} component={ReMarketing}/>
                    <Route path={config.ROUTE_URL+'/services/strategic-marketing'} component={StrategicMarketing}/>
                    <Route path={config.ROUTE_URL+'/contact-us/digital-marketing-agency-in-chennai/'} component={ContactChennai}/>
                    <Route path={config.ROUTE_URL+'/contact-us/digital-marketing-agency-in-mumbai/'} component={ContactMumbai}/>
                    <Route path={config.ROUTE_URL+'/contact-us/digital-marketing-agency-in-pune/'} component={ContactPune}/>
                    <Route path={config.ROUTE_URL+'/contact-us/digital-marketing-agency-in-bangalore/'} component={ContactBanglore}/>
                    <Route path={config.ROUTE_URL+'/privacy-policy/'} component={PrivacyPolicy}/>
                    <Route path={config.ROUTE_URL+'/get-quote/'} component={GetQuote}/>
                    {/*<Route exact path={config.ROUTE_URL+'/2019/07/19/magento-vs-shopify-quick-insights-on-the-best-ecommerce-platform-for-your-online-start-up/'} component={PostPage}/>*/}
                    {/*<Route path={config.ROUTE_URL+'/leads'} component={Login}/>*/}
                    {/*<Route path={config.ROUTE_URL+'/home'} component={Dashboard}/>*/}
                    <Route component={Home}/>
                    {/*<Route path="*" component={() => {
                        window.location.replace(config.APP_URL+"/not-found");
                        return null;
                    }}/>*/}
                </AnimatedSwitch>
            </div>
        );
    }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
            <Navbar />
            <App />
        </BrowserRouter>
        , document.getElementById('root')
    );
}
