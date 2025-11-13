import React, {Component} from 'react';
import config from '../Config';
import Footer from '../layout/Footer';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const nhrdImages = [
    config.APP_URL+'/public/home/images/portfolio/big/nhrd.jpg' 
 ];
const iitmImages = [
   config.APP_URL+'/public/home/images/portfolio/big/iitm.png' 
];
const easwariImages = [
   config.APP_URL+'/public/home/images/portfolio/big/easwari.jpg' 
];
const toddleImages = [
   config.APP_URL+'/public/home/images/portfolio/big/toddle.jpg' 
];
const acceImages = [
   config.APP_URL+'/public/home/images/portfolio/big/acce.jpg' 
];
const iptifImages = [
   config.APP_URL+'/public/home/images/portfolio/big/iptif.jpg' 
];
const veltechImages = [
   config.APP_URL+'/public/home/images/portfolio/big/vels.jpg' 
];



class Educations extends Component{
    constructor(props){
        super(props);
        this.state =  {
            iitmIndex:0,
            iitmIsOpen:false,
            easwariIndex:0,
            easwariIsOpen:false,
            toddleIndex:0,
            toddleIsOpen:false,
            acceIndex:0,
            acceIsOpen:false,
            iptifIndex:0,
            iptifIsOpen:false,
            veltechIndex:0,
            veltechIsOpen:false,            
            nhrdIndex:0,
            nhrdIsOpen:false


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
        const { nhrdIndex, nhrdIsOpen, iitmIndex, iitmIsOpen, easwariIndex, easwariIsOpen, toddleIndex, toddleIsOpen, acceIndex, acceIsOpen, iptifIndex, iptifIsOpen, veltechIndex, veltechIsOpen } = this.state;
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
                                    <li className="act">Education</li>
                                </ul>
                            </section>
	                    	<section className="hdg">					
								<h1>Building exciting customer experiences</h1>
							</section>
                            <section className="row">
                              <div className="cl works-item ImageWrapper zoom" >
        							<img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/nhrd.jpg"} />
        							<button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ nhrdIsOpen: true })}>
    							        <div className="ImageOverlayCl">
    							            <p className="valign text-center"><span>NHRD</span></p>
    							        </div>
    							    </button>
    							</div>
                                {nhrdIsOpen && (
                                    this.lightboxComponent(nhrdImages, this.state.nhrdIndex, 'nhrdIndex', 'nhrdIsOpen')
                                )}
                                <div className="cl works-item ImageWrapper zoom" >
                                   <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/toddle.jpg"} />
                                   <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ toddleIsOpen: true })} >
                                         <div className="ImageOverlayCl">
                                            <p className="valign text-center"><span>Toddle Town</span></p>
                                         </div>
                                      </button>
                                </div>
                                  { toddleIsOpen && (
                                      this.lightboxComponent( toddleImages, this.state. toddleIndex, ' toddleIndex', ' toddleIsOpen')
                                  )} 
                                  <div className="cl works-item ImageWrapper zoom" >
                                     <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/acce.jpg"} />
                                     <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ acceIsOpen: true })} >
                                           <div className="ImageOverlayCl">
                                              <p className="valign text-center"><span>IITM Accenture</span></p>
                                           </div>
                                        </button>
                                  </div>
                                    { acceIsOpen && (
                                        this.lightboxComponent(acceImages, this.state. acceIndex, ' acceIndex', ' acceIsOpen')
                                    )}
                              <div className="cl works-item ImageWrapper zoom" >
                                 <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/iitm.jpg"} />
                                 <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ iitmIsOpen: true })} >
                                       <div className="ImageOverlayCl">
                                          <p className="valign text-center"><span>Keep It Flowing</span></p>
                                       </div>
                                    </button>
                              </div>
                                { iitmIsOpen && (
                                    this.lightboxComponent( iitmImages, this.state. iitmIndex, ' iitmIndex', ' iitmIsOpen')
                                )}
                                  <div className="cl works-item ImageWrapper zoom" >
                                     <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/iptif.png"} />
                                     <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ iptifIsOpen: true })} >
                                           <div className="ImageOverlayCl">
                                              <p className="valign text-center"><span>IPTIF - IIT Palakkad Technology Hub Foundation</span></p>
                                           </div>
                                        </button>
                                  </div>
                                    { iptifIsOpen && (
                                        this.lightboxComponent(iptifImages, this.state. iptifIndex, ' iptifIndex', ' iptifIsOpen')
                                    )}
                                <div className="cl works-item ImageWrapper zoom" >
                                   <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/SRM.jpg"} />
                                   <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ easwariIsOpen: true })} >
                                         <div className="ImageOverlayCl">
                                            <p className="valign text-center"><span>SRM Easwari Engineering College</span></p>
                                         </div>
                                      </button>
                                </div>
                                  { easwariIsOpen && (
                                      this.lightboxComponent( easwariImages, this.state. easwariIndex, ' easwariIndex', ' easwariIsOpen')
                                  )}                              
                                <div className="cl works-item ImageWrapper zoom" >
                                   <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/vels.jpg"} />
                                   <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ veltechIsOpen: true })} >
                                         <div className="ImageOverlayCl">
                                            <p className="valign text-center"><span>Veltech</span></p>
                                         </div>
                                      </button>
                                </div>
                                  { veltechIsOpen && (
                                      this.lightboxComponent( veltechImages, this.state. veltechIndex, ' veltechIndex', ' veltechIsOpen')
                                  )}
                            </section>
                        </section>
                    </section>
			 <Footer />
            </React.Fragment>
        );
    }
}

export default Educations;
