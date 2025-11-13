import React, {Component} from 'react';
import config from './Config';
import Footer from './layout/Footer';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const indusImages = [
   config.APP_URL+'/public/home/images/portfolio/big/indus-valley.jpg' 
];
const sprImages = [
   config.APP_URL+'/public/home/images/portfolio/big/spr.jpg' 
];
const raneImages = [
   config.APP_URL+'/public/home/images/portfolio/big/rane-foundation.jpg' 
];
const rockImages = [
   config.APP_URL+'/public/home/images/portfolio/big/rockNshop.jpg' 
];
const cholaImages = [
   config.APP_URL+'/public/home/images/portfolio/big/chola.jpg' 
];
const doneImages = [
   config.APP_URL+'/public/home/images/portfolio/big/done.jpg' 
];
const globeImages = [
   config.APP_URL+'/public/home/images/portfolio/big/globeHealer.jpg' 
];
const idbiImages = [
   config.APP_URL+'/public/home/images/portfolio/big/idbi.jpg' 
];
const kriyatecImages = [
   config.APP_URL+'/public/home/images/portfolio/big/kriyaTec.jpg' 
];
const motorzoImages = [
   config.APP_URL+'/public/home/images/portfolio/big/motorZo.jpg' 
];
const nhrdImages = [
   config.APP_URL+'/public/home/images/portfolio/big/nhrd.jpg' 
];
const ranegroupImages = [
   config.APP_URL+'/public/home/images/portfolio/big/rane-group.jpg' 
];
const talkproImages = [
   config.APP_URL+'/public/home/images/portfolio/big/talkPro.jpg' 
];

const avanteImages = [
   config.APP_URL+'/public/home/images/portfolio/big/avante.jpg' 
];
const aiksImages = [
   config.APP_URL+'/public/home/images/portfolio/big/aiks.png' 
];
const ailaysaImages = [
   config.APP_URL+'/public/home/images/portfolio/big/ailaysa.png' 
];
const balmaadiImages = [
   config.APP_URL+'/public/home/images/portfolio/big/balmaadi.png' 
];
const bigbindiImages = [
   config.APP_URL+'/public/home/images/portfolio/big/bigbindi.png' 
];
const clinevotechImages = [
   config.APP_URL+'/public/home/images/portfolio/big/clinevotech.png' 
];
const earlyImages = [
   config.APP_URL+'/public/home/images/portfolio/big/ear-ly.png' 
];
const haridentalImages = [
   config.APP_URL+'/public/home/images/portfolio/big/haridental.png' 
];
const hersecondinningsImages = [
   config.APP_URL+'/public/home/images/portfolio/big/hersecondinnings.png' 
];
const iitmImages = [
   config.APP_URL+'/public/home/images/portfolio/big/iitm.png' 
];
const ithoughtImages = [
   config.APP_URL+'/public/home/images/portfolio/big/ithought.png' 
];
const janabankImages = [
   config.APP_URL+'/public/home/images/portfolio/big/janabank.png' 
];
const kntImages = [
   config.APP_URL+'/public/home/images/portfolio/big/knt.png' 
];
const langscapeImages = [
   config.APP_URL+'/public/home/images/portfolio/big/langscape.png' 
];
const mpulseImages = [
   config.APP_URL+'/public/home/images/portfolio/big/mpulse.png' 
];
const parkelanzaImages = [
   config.APP_URL+'/public/home/images/portfolio/big/parkelanza.png' 
];
const pharmafiveImages = [
   config.APP_URL+'/public/home/images/portfolio/big/pharmafive.png' 
];
const poetryImages = [
   config.APP_URL+'/public/home/images/portfolio/big/poetryandgrammar.png' 
];
const rayenImages = [
   config.APP_URL+'/public/home/images/portfolio/big/rayendental.png' 
];
const shriventuresImages = [
   config.APP_URL+'/public/home/images/portfolio/big/shriventures.png' 
];
const snnImages = [
   config.APP_URL+'/public/home/images/portfolio/big/snnbuilders.png' 
];
const soulwalletImages = [
   config.APP_URL+'/public/home/images/portfolio/big/soulwallet.png' 
];
const sprhighlivingImages = [
   config.APP_URL+'/public/home/images/portfolio/big/sprhighliving.png' 
];
const zappyImages = [
   config.APP_URL+'/public/home/images/portfolio/big/zappy.png' 
];
const saipranaImages = [
   config.APP_URL+'/public/home/images/portfolio/big/saiprana-big.jpg' 
];
const sbsImages = [
   config.APP_URL+'/public/home/images/portfolio/big/sbs-big.jpg' 
];
const BhawanicrystalsImages = [
   config.APP_URL+'/public/home/images/portfolio/big/Bhawanicrystals-big.jpg' 
];
const gteeImages = [
   config.APP_URL+'/public/home/images/portfolio/big/gtee-big.jpg' 
];
const sakthifinaceImages = [
   config.APP_URL+'/public/home/images/portfolio/big/sakthifinace-big.jpg' 
];
const powerluxImages = [
   config.APP_URL+'/public/home/images/portfolio/big/powerlux-big.jpg' 
];
const rerouteImages = [
   config.APP_URL+'/public/home/images/portfolio/big/reroute-big.jpg' 
];




class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state =  {
            indusIndex : 0,
            indusIsOpen: false,
            sprIndex : 0,
            sprIsOpen: false,
            raneIndex :0,
            raneIsOpen :false,
            rockIndex:0,
            rockIsOpen: false,
            cholaIndex:0,
            cholaIsOpen: false,
            doneIndex:0,
            doneIsOpen: false,
            globeIndex:0,
            globeIsOpen:false,
            idbiIndex:0,
            idbiIsOpen:false,
            kriyatecIndex:0,
            kriyatecIsOpen:false,
            motorzoIndex:0,
            motorzoIsOpen:false,
            nhrdIndex:0,
            nhrdIsOpen:false,
            ranegroupIndex:0,
            ranegroupIsOpen:false,
            talkproIndex:0,
            talkproIsOpen:false,
            avanteIndex:0,
            avanteIsOpen:false,
            aiksIndex:0,
            aiksIsOpen:false,
            ailaysaIndex:0,
            ailaysaIsOpen:false,
            balmaadiIndex:0,
            balmaadiIsOpen:false,
            bigbindiIndex:0,
            bigbindiIsOpen:false,
            clinevotechIndex:0,
            clinevotechIsOpen:false,
            earlyIndex:0,
            earlyIsOpen:false,
            haridentalIndex:0,
            haridentalIsOpen:false,
            hersecondinningsIndex:0,
            hersecondinningsIsOpen:false,
            iitmIndex:0,
            iitmIsOpen:false,
            ithoughtIndex:0,
            ithoughtIsOpen:false,
            janabankIndex:0,
            janabankIsOpen:false,
            kntIndex:0,
            kntIsOpen:false,
            langscapeIndex:0,
            langscapeIsOpen:false,
            mpulseIndex:0,
            mpulseIsOpen:false,
            parkelanzaIndex:0,
            parkelanzaIsOpen:false,
            pharmafiveIndex:0,
            pharmafiveIsOpen:false,
            poetryIndex:0,
            poetryIsOpen:false,
            rayenIndex:0,
            rayenIsOpen:false,
            shriventuresIndex:0,
            shriventuresIsOpen:false,
            snnIndex:0,
            snnIsOpen:false,
            soulwalletIndex:0,
            soulwalletIsOpen:false,
            sprhighlivingIndex:0,
            sprhighlivingIsOpen:false,
            zappyIndex:0,
            zappyIsOpen:false,
            saipranaIndex:0,
            saipranaIsOpen:false,
            sbsIndex:0,
            sbsIsOpen:false,
            BhawanicrystalsIndex:0,
            BhawanicrystalsIsOpen:false,
            gteeIndex:0,
            gteeIsOpen:false,
            powerluxIndex:0,
            powerluxIsOpen:false,
            sakthifinaceIndex:0,
            sakthifinaceIsOpen:false,
            rerouteIndex:0,
            rerouteIsOpen:false           


        }
    }

    lightboxComponent(indusImages, indusIndex, indexName, isOpenName){
        return (
            <Lightbox
                mainSrc={indusImages[indusIndex]}
                nextSrc={indusImages[(indusIndex + 1) % indusImages.length]}
                prevSrc={indusImages[(indusIndex + indusImages.length - 1) % indusImages.length]}
                onCloseRequest={() => this.setState({ [isOpenName]: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    [indexName]: (indusIndex + indusImages.length - 1) % indusImages.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    [indexName]: (indusIndex + 1) % indusImages.length,
                  })
                }
            />
        )
    }

    render() {
        const { indusIndex, indusIsOpen, sprIndex, sprIsOpen,  raneIndex, raneIsOpen, rockIndex, rockIsOpen, cholaIndex, cholaIsOpen, doneIndex, doneIsOpen, globeIndex, globeIsOpen, idbiIndex, idbiIsOpen, kriyatecIndex, kriyatecIsOpen, motorzoIndex, motorzoIsOpen, nhrdIndex, nhrdIsOpen, ranegroupIndex, ranegroupIsOpen, talkproIndex, talkproIsOpen, avanteIndex, avanteIsOpen, aiksIndex, aiksIsOpen, ailaysaIndex, ailaysaIsOpen, balmaadiIndex, balmaadiIsOpen, bigbindiIndex, bigbindiIsOpen, clinevotechIndex, clinevotechIsOpen, earlyIndex, earlyIsOpen, haridentalIndex, haridentalIsOpen, hersecondinningsIndex, hersecondinningsIsOpen, iitmIndex, iitmIsOpen, ithoughtIndex, ithoughtIsOpen, janabankIndex, janabankIsOpen, kntIndex, kntIsOpen, langscapeIndex, langscapeIsOpen, mpulseIndex, mpulseIsOpen, parkelanzaIndex, parkelanzaIsOpen, pharmafiveIndex, pharmafiveIsOpen,poetryIndex, poetryIsOpen, rayenIndex, rayenIsOpen, shriventuresIndex, shriventuresIsOpen, snnIndex, snnIsOpen, soulwalletIndex, soulwalletIsOpen, sprhighlivingIndex, sprhighlivingIsOpen, zappyIndex, zappyIsOpen, saipranaIndex, saipranaIsOpen, sbsIndex, sbsIsOpen, BhawanicrystalsIndex, BhawanicrystalsIsOpen, gteeIndex, gteeIsOpen, powerluxIndex, powerluxIsOpen, rerouteIndex, rerouteIsOpen, sakthifinaceIndex, sakthifinaceIsOpen } = this.state;
        return (
            <React.Fragment>
                <MetaTags>
                    <title>Our Work - BLeap</title>
                    <meta name="description" content="Want to learn how Bleap has helped its clients grow their busines profitably online. Read our case studies in Responsive Web Design &amp; Development, SEO, PPC, Social Media Marketing, Ecommerce Solutions and Strategic Marketing."/>
                    <link rel="canonical" href="https://www.bleap.in/our-work" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Our Work - BLeap" />
                    <meta property="og:description" content="Want to learn how Bleap has helped its clients grow their busines profitably online. Read our case studies in Responsive Web Design &amp; Development, SEO, PPC, Social Media Marketing, Ecommerce Solutions and Strategic Marketing." />
                    <meta property="og:url" content="https://www.bleap.in/our-work/" />
                    <meta property="og:site_name" content="BLeap" />
                    <meta property="og:image" content={config.APP_URL+"/public/home/images/portfolio/tmb/haridental.jpg"} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:description" content="Want to learn how Bleap has helped its clients grow their busines profitably online. Read our case studies in Responsive Web Design &amp; Development, SEO, PPC, Social Media Marketing, Ecommerce Solutions and Strategic Marketing." />
                    <meta name="twitter:title" content="Our Work - BLeap" />
                    <meta name="twitter:image" content={config.APP_URL+"/public/home/images/portfolio/tmb/iitm.jpg"} />
                </MetaTags>
                    <section className="sub-page portfolio section-wrap">
                        <section className="container">
                            <section className="breadcrumbs layout1">
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li> > </li>
                                    <li className="act">Portfolio</li>
                                </ul>
                            </section>
	                    	<section className="hdg">					
								<h1>Building exciting customer experiences</h1>
							</section>
                            <section className="row">
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/automobile/"}>
                                    <div className='port-bx'>
                                        <span>Automobile</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/consultancy/"}>
                                    <div className='port-bx'>
                                        <span>Consultancy</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/consumer-durables/"}>
                                    <div className='port-bx'>
                                        <span>Consumer Durables</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/ecommerce/"}>
                                    <div className='port-bx'>
                                        <span>Ecommerce</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/education/"}>
                                    <div className='port-bx'>
                                        <span>Education</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/fashion_retail/"}>
                                    <div className='port-bx'>
                                        <span>Fashion</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/financial-services/"}>
                                    <div className='port-bx'>
                                        <span>Financial services</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/food/"}>
                                    <div className='port-bx'>
                                        <span>Food</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/healthcare/"}>
                                    <div className='port-bx'>
                                        <span>Healthcare</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/hospitality/"}>
                                    <div className='port-bx'>
                                        <span>Hospitality</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/it-services/"}>
                                    <div className='port-bx'>
                                        <span>IT services</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/manufacturing/"}>
                                    <div className='port-bx'>
                                        <span>Manufacturing</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/media-entertainment/"}>
                                    <div className='port-bx'>
                                        <span>Media &amp; entertainment</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/pharmaceuticals/"}>
                                    <div className='port-bx'>
                                        <span>Pharmaceuticals</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/real-estate/"}>
                                    <div className='port-bx'>
                                        <span>Real estate</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/recruitment/"}>
                                    <div className='port-bx'>
                                        <span>Recruitment</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/retail/"}>
                                    <div className='port-bx'>
                                        <span>Retail</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/training/"}>
                                    <div className='port-bx'>
                                        <span>Training</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/infrastructure/"}>
                                    <div className='port-bx'>
                                        <span>Infrastructure</span>
                                    </div>
                                    </Link>
                                </aside>

                               {/*<aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/energy_power-generation/"}>
                                    <div className='port-bx'>
                                        <span>Energy/Power Generation</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/event-planning/"}>
                                    <div className='port-bx'>
                                        <span>Event planning</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/fitness_yoga/"}>
                                    <div className='port-bx'>
                                        <span>Fitness/Yoga</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/healthcare_wellness/"}>
                                    <div className='port-bx'>
                                        <span>Healthcare/Wellness</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/immigration/"}>
                                    <div className='port-bx'>
                                        <span>Immigration</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <div className='port-bx'>
                                        <span>Interior Design</span>
                                    </div>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/life-sciences/"}>
                                    <div className='port-bx'>
                                        <span>Life Sciences</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/logistics_courier-services/"}>
                                    <div className='port-bx'>
                                        <span>Logistics/Courier Services</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/personal-care/"}>
                                    <div className='port-bx'>
                                        <span>Personal Care</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/real-estate_construction/"}>
                                    <div className='port-bx'>
                                        <span>Real Estate/Construction</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/recruitment-and-staffing/"}>
                                    <div className='port-bx'>
                                        <span>Recruitment and Staffing</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/retail_jewelry/"}>
                                    <div className='port-bx'>
                                        <span>Retail/Jewelry</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/social_ngo/"}>
                                    <div className='port-bx'>
                                        <span>Social/NGO</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/sports_recreation/"}>
                                    <div className='port-bx'>
                                        <span>Sports/Recreation</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/telecom/"}>
                                    <div className='port-bx'>
                                        <span>Telecom</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/textiles/"}>
                                    <div className='port-bx'>
                                        <span>Textiles</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/agriculture/"}>
                                    <div className='port-bx'>
                                        <span>Agriculture</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/automobile_car-services/"}>
                                    <div className='port-bx'>
                                        <span>Automotive/Car Services</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/beauty/"}>
                                    <div className='port-bx'>
                                        <span>Beauty</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/business-services/"}>
                                    <div className='port-bx'>
                                        <span>Business Services</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/construction/"}>
                                    <div className='port-bx'>
                                        <span>Construction</span>
                                    </div>
                                    </Link>
                                </aside>
                                <aside className='col-sm-4'>
                                    <Link to={config.ROUTE_URL+"/portfolio/dental-services/"}>
                                    <div className='port-bx'>
                                        <span>Dental Services/Healthcare</span>
                                    </div>
                                    </Link>
                                </aside>*/}
                            </section>
                        </section>
                    </section>
			 <Footer />
            </React.Fragment>
        );
    }
}

export default Portfolio;
