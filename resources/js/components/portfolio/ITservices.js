import React, {Component} from 'react';
import config from '../Config';
import Footer from '../layout/Footer';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const krishImages = [
   config.APP_URL+'/public/home/images/portfolio/big/krish.jpg' 
];
const padahImages = [
   config.APP_URL+'/public/home/images/portfolio/big/padah-solutions.jpg' 
];
const ailaysaImages = [
   config.APP_URL+'/public/home/images/portfolio/big/ailaysa.png' 
];
const jslImages = [
   config.APP_URL+'/public/home/images/portfolio/big/jsl.jpg' 
];
const kriyatecImages = [
   config.APP_URL+'/public/home/images/portfolio/big/kriyaTec.jpg' 
];
const langscapeImages = [
   config.APP_URL+'/public/home/images/portfolio/big/langscape.png' 
];
const mpulseImages = [
   config.APP_URL+'/public/home/images/portfolio/big/mpulse.png' 
];
const briteImages = [
   config.APP_URL+'/public/home/images/portfolio/big/brite.jpg' 
];



class ITservices extends Component{
    constructor(props){
        super(props);
        this.state =  {
            krishIndex : 0,
            krishIsOpen: false,
            padahIndex : 0,
            padahIsOpen: false,
            ailaysaIndex:0,
            ailaysaIsOpen:false,
            jslIndex:0,
            jslIsOpen:false,
            kriyatecIndex:0,
            kriyatecIsOpen:false,
            langscapeIndex:0,
            langscapeIsOpen:false,
            mpulseIndex:0,
            mpulseIsOpen:false,
            briteIndex :0,
            briteIsOpen :false          


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
      const { krishIndex, krishIsOpen, padahIndex, padahIsOpen, ailaysaIndex, ailaysaIsOpen, jslIndex, jslIsOpen, kriyatecIndex, kriyatecIsOpen, langscapeIndex, langscapeIsOpen, mpulseIndex, mpulseIsOpen, briteIndex, briteIsOpen } = this.state;
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
                                    <li><Link to='/portfolio'>Portfolio</Link></li>
                                    <li> > </li>
                                    <li className="act">IT Services</li>
                                </ul>
                            </section>
	                    	<section className="hdg">					
								<h1>Building exciting customer experiences</h1>
							</section>
                            <section className="row">
                                 <div className="cl works-item ImageWrapper zoom" >
                                    <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/ailaysa.jpg"} />
                                    <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ ailaysaIsOpen: true })} >
                                       <div className="ImageOverlayCl">
                                             <p className="valign text-center"><span>Ailaysa</span></p>
                                       </div>
                                    </button>
                                 </div>
                                       {ailaysaIsOpen && (
                                          this.lightboxComponent(ailaysaImages, this.state.ailaysaIndex, 'ailaysaIndex', 'ailaysaIsOpen')
                                       )}
                                       <div className="cl works-item ImageWrapper zoom" >
                                          <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/padah-solutions.jpg"} />
                                          <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ padahIsOpen: true })} >
                                             <div className="ImageOverlayCl">
                                                   <p className="valign text-center"><span>Padah Solutions</span></p>
                                             </div>
                                          </button>
                                       </div>
                                             {padahIsOpen && (
                                                this.lightboxComponent(padahImages, this.state.padahIndex, 'padahIndex', 'padahIsOpen')
                                             )}
                                             <div className="cl works-item ImageWrapper zoom" >
                                                 <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/mpulse.jpg"} />
                                                 <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ mpulseIsOpen: true })}>
                                                     <div className="ImageOverlayCl">
                                                         <p className="valign text-center"><span>Mpulse</span></p>
                                                     </div>
                                                 </button>
                                             </div>
                                                    { mpulseIsOpen && (
                                                        this.lightboxComponent( mpulseImages, this.state.mpulseIndex, ' mpulseIndex', ' mpulseIsOpen')
                                                    )}

                                                    <div className="cl works-item ImageWrapper zoom" >
                                                        <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/langscape.jpg"} />
                                                        <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ langscapeIsOpen: true })}>
                                                            <div className="ImageOverlayCl">
                                                                <p className="valign text-center"><span>Langscape</span></p>
                                                            </div>
                                                        </button>
                                                    </div>
                                                           { langscapeIsOpen && (
                                                               this.lightboxComponent( langscapeImages, this.state. langscapeIndex, ' langscapeIndex', ' langscapeIsOpen')
                                                           )}
      

                                 <div className="cl works-item ImageWrapper zoom" >
                                    <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/krish.jpg"} />
                                    <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ krishIsOpen: true })} >
                                       <div className="ImageOverlayCl">
                                             <p className="valign text-center"><span>Krish Services</span></p>
                                       </div>
                                    </button>
                                 </div>
                                       {krishIsOpen && (
                                          this.lightboxComponent(krishImages, this.state.krishIndex, 'krishIndex', 'krishIsOpen')
                                       )}
                                             <div className="cl works-item ImageWrapper zoom" >
                                                <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/jsl.jpg"} />
                                                <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ jslIsOpen: true })} >
                                                   <div className="ImageOverlayCl">
                                                         <p className="valign text-center"><span>Jazz Solutions</span></p>
                                                   </div>
                                                </button>
                                             </div>
                                                   {jslIsOpen && (
                                                      this.lightboxComponent(jslImages, this.state.jslIndex, 'jslIndex', 'jslIsOpen')
                                                   )}
                                                   <div className="cl works-item ImageWrapper zoom" >
                                                       <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/Brite.jpg"} />
                                                       <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ briteIsOpen: true })}>
                                                           <div className="ImageOverlayCl">
                                                               <p className="valign text-center"><span>Brite Systems</span></p>
                                                           </div>
                                                       </button>
                                                   </div>
                                                          { briteIsOpen && (
                                                              this.lightboxComponent( briteImages, this.state.briteIndex, ' briteIndex', ' briteIsOpen')
                                                          )}

    							<div className="cl works-item ImageWrapper zoom" >
        							<img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/kriyaTec.jpg"} />
        							<button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ kriyatecIsOpen: true })} >
    							        <div className="ImageOverlayCl">
    							            <p className="valign text-center"><span>KriyaTec</span></p>
    							        </div>
    							    </button>
    							</div>
                                {kriyatecIsOpen && (
                                    this.lightboxComponent(kriyatecImages, this.state.kriyatecIndex, 'kriyatecIndex', 'kriyatecIsOpen')
                                )}
                            </section>
                        </section>
                    </section>
			 <Footer />
            </React.Fragment>
        );
    }
}

export default ITservices;