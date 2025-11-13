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
import ContactNoida from './contact/ContactNoida';
import ContactUSA from './contact/ContactUSA';
import PrivacyPolicy from './PrivacyPolicy';
import GetQuote from './GetQuote';
import Banking from './solutions/Banking';
import Education from './solutions/Education';
import Healthcare from './solutions/Healthcare';
import FmcgAndRetail from './solutions/FmcgAndRetail';
import RealEstate from './solutions/RealEstate';
import Agri from './portfolio/Agri';
import Automobile from './portfolio/Automobile';
import AutomobileCarServices from './portfolio/AutomobileCarServices';
import Beauty from './portfolio/Beauty';
import BusinessServices from './portfolio/BusinessServices';
import Construction from './portfolio/Construction';
import Consultancy from './portfolio/Consultancy';
import ConsumerDurables from './portfolio/ConsumerDurables';
import DentalServices from './portfolio/DentalServices';
import Educations from './portfolio/Educations';
import EnergyPowerGeneration from './portfolio/EnergyPowerGeneration';
import FashionRetail from './portfolio/FashionRetail';
import FinancialServices from './portfolio/FinancialServices';
import FitnessYoga from './portfolio/FitnessYoga';
import Food from './portfolio/Food';
import Healthcares from './portfolio/Healthcares';
import HealthcaresWellness from './portfolio/HealthcaresWellness';
import Immigration from './portfolio/Immigration';
import ITservices from './portfolio/ITservices';
import LifeSciences from './portfolio/LifeSciences';
import LogisticsCourierServices from './portfolio/LogisticsCourierServices';
import Manufacturing from './portfolio/Manufacturing';
import PersonalCare from './portfolio/PersonalCare';
import Pharmaceuticals from './portfolio/Pharmaceuticals';
import RealEstates from './portfolio/RealEstates';
import RealEstateConstruction from './portfolio/RealEstateConstruction';
import Recruitment from './portfolio/Recruitment';
import Retail from './portfolio/Retail';
import RetailJewelry from './portfolio/RetailJewelry';
import SocialNGO from './portfolio/SocialNGO';
import SportsRecreation from './portfolio/SportsRecreation';
import Textiles from './portfolio/Textiles';
import EventPlanning from './portfolio/EventPlanning';
import MediaEntertainment from './portfolio/MediaEntertainment';
import RecruitmentAndStaffing from './portfolio/RecruitmentAndStaffing';
import Telecom from './portfolio/Telecom';
import Ecommerces from './portfolio/Ecommerces';
import Hospitality from './portfolio/Hospitality';
import Training from './portfolio/Training';
import Infrastructure from './portfolio/Infrastructure';

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
                    <Route exact path={config.ROUTE_URL+'/portfolio'} component={Portfolio}/>
                    <Route path={config.ROUTE_URL+'/portfolio/agriculture/'} component={Agri}/>   
                    <Route path={config.ROUTE_URL+'/portfolio/automobile/'} component={Automobile}/>
                    <Route path={config.ROUTE_URL+'/portfolio/automobile_car-services/'} component={AutomobileCarServices}/>
                    <Route path={config.ROUTE_URL+'/portfolio/beauty/'} component={Beauty}/>
                    <Route path={config.ROUTE_URL+'/portfolio/business-services/'} component={BusinessServices}/>
                    <Route path={config.ROUTE_URL+'/portfolio/construction/'} component={Construction}/>
                    <Route path={config.ROUTE_URL+'/portfolio/consultancy/'} component={Consultancy}/>
                    <Route path={config.ROUTE_URL+'/portfolio/consumer-durables/'} component={ConsumerDurables}/>
                    <Route path={config.ROUTE_URL+'/portfolio/dental-services/'} component={DentalServices}/>
                    <Route path={config.ROUTE_URL+'/portfolio/ecommerce/'} component={Ecommerces}/>
                    <Route path={config.ROUTE_URL+'/portfolio/education/'} component={Educations}/>
                    <Route path={config.ROUTE_URL+'/portfolio/energy_power-generation/'} component={EnergyPowerGeneration}/>
                    <Route path={config.ROUTE_URL+'/portfolio/fashion_retail/'} component={FashionRetail}/>
                    <Route path={config.ROUTE_URL+'/portfolio/financial-services/'} component={FinancialServices}/>
                    <Route path={config.ROUTE_URL+'/portfolio/fitness_yoga/'} component={FitnessYoga}/>
                    <Route path={config.ROUTE_URL+'/portfolio/food/'} component={Food}/>
                    <Route path={config.ROUTE_URL+'/portfolio/healthcare/'} component={Healthcares}/>
                    <Route path={config.ROUTE_URL+'/portfolio/healthcare_wellness/'} component={HealthcaresWellness}/>
                    <Route path={config.ROUTE_URL+'/portfolio/immigration/'} component={Immigration}/>
                    <Route path={config.ROUTE_URL+'/portfolio/it-services/'} component={ITservices}/>
                    <Route path={config.ROUTE_URL+'/portfolio/life-sciences/'} component={LifeSciences}/>
                    <Route path={config.ROUTE_URL+'/portfolio/logistics_courier-services/'} component={LogisticsCourierServices}/>
                    <Route path={config.ROUTE_URL+'/portfolio/manufacturing/'} component={Manufacturing}/>
                    <Route path={config.ROUTE_URL+'/portfolio/personal-care/'} component={PersonalCare}/>
                    <Route path={config.ROUTE_URL+'/portfolio/pharmaceuticals/'} component={Pharmaceuticals}/>
                    <Route path={config.ROUTE_URL+'/portfolio/real-estate/'} component={RealEstates}/>
                    <Route path={config.ROUTE_URL+'/portfolio/real-estate_construction/'} component={RealEstateConstruction}/>
                    <Route path={config.ROUTE_URL+'/portfolio/recruitment/'} component={Recruitment}/>
                    <Route path={config.ROUTE_URL+'/portfolio/retail/'} component={Retail}/>
                    <Route path={config.ROUTE_URL+'/portfolio/retail_jewelry/'} component={RetailJewelry}/>
                    <Route path={config.ROUTE_URL+'/portfolio/social_ngo/'} component={SocialNGO}/>
                    <Route path={config.ROUTE_URL+'/portfolio/sports_recreation/'} component={SportsRecreation}/>
                    <Route path={config.ROUTE_URL+'/portfolio/textiles/'} component={Textiles}/>
                    <Route path={config.ROUTE_URL+'/portfolio/event-planning/'} component={EventPlanning}/>
                    <Route path={config.ROUTE_URL+'/portfolio/media-entertainment/'} component={MediaEntertainment}/>
                    <Route path={config.ROUTE_URL+'/portfolio/recruitment-and-staffing/'} component={RecruitmentAndStaffing}/>
                    <Route path={config.ROUTE_URL+'/portfolio/telecom/'} component={Telecom}/>
                    <Route path={config.ROUTE_URL+'/portfolio/hospitality/'} component={Hospitality}/>
                    <Route path={config.ROUTE_URL+'/portfolio/training/'} component={Training}/>
                    <Route path={config.ROUTE_URL+'/portfolio/infrastructure/'} component={Infrastructure}/>
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
                    <Route path={config.ROUTE_URL+'/contact-us/digital-marketing-agency-in-noida/'} component={ContactNoida}/>
                    <Route path={config.ROUTE_URL+'/contact-us/digital-marketing-agency-in-usa/'} component={ContactUSA}/>
                    <Route path={config.ROUTE_URL+'/privacy-policy/'} component={PrivacyPolicy}/>
                    <Route path={config.ROUTE_URL+'/get-quote/'} component={GetQuote}/>
                    <Route exact path={config.ROUTE_URL+'/solutions/banking'} component={Banking}/>
                    <Route exact path={config.ROUTE_URL+'/solutions/education'} component={Education}/>
                    <Route exact path={config.ROUTE_URL+'/solutions/healthcare'} component={Healthcare}/>
                    <Route exact path={config.ROUTE_URL+'/solutions/fmcg-retail'} component={FmcgAndRetail}/>
                    <Route exact path={config.ROUTE_URL+'/solutions/Digital-Marketing-Agency-for-Real-Estate-industry-and-agents'} component={RealEstate}/>
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
