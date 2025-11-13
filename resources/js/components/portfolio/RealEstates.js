import React, {Component} from 'react';
import config from '../Config';
import Footer from '../layout/Footer';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const sppImages = [
    config.APP_URL+'/public/home/images/portfolio/big/spp-gardens.jpg' 
 ];
const cellaspaceImages = [
   config.APP_URL+'/public/home/images/portfolio/big/cellaspace.jpg' 
];
const sunshineImages = [
   config.APP_URL+'/public/home/images/portfolio/big/ace-financials.jpg' 
];
const sprImages = [
   config.APP_URL+'/public/home/images/portfolio/big/spr.jpg' 
];
const snnImages = [
   config.APP_URL+'/public/home/images/portfolio/big/snnbuilders.png' 
];


class RealEstates extends Component{
    constructor(props){
        super(props);
        this.state =  {
            sppIndex : 0,
            sppIsOpen: false,
            cellaspaceIndex : 0,
            cellaspaceIsOpen: false,
            sunshineIndex :0,
            sunshineIsOpen :false,
            snnIndex : 0,
            snnIsOpen: false           


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
        const { sppIndex, sppIsOpen,cellaspaceIndex, cellaspaceIsOpen, sunshineIndex, sunshineIsOpen, sprIndex, sprIsOpen, snnIndex, snnIsOpen } = this.state;
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
                                    <li className="act">Real Estate</li>
                                </ul>
                            </section>
	                    	<section className="hdg">					
							   	<h1>Building exciting customer experiences</h1>
						   	</section>
                            <section className="row">
                              <div className="cl works-item ImageWrapper zoom" >
                                 <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/spp-gardens.jpg"} />
                                 <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ sppIsOpen: true })}>
                                    <div className="ImageOverlayCl">
                                          <p className="valign text-center"><span>SPP Gardens</span></p>
                                    </div>
                                 </button>
                              </div>
                                {sppIsOpen && (
                                    this.lightboxComponent(sppImages, this.state.sppIndex, 'sppIndex', 'sppIsOpen')
                                )}
                              <div className="cl works-item ImageWrapper zoom" >
                                    <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/cellaspace.jpg"} />
                                    <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ cellaspaceIsOpen: true })}>
                                       <div className="ImageOverlayCl">
                                          <p className="valign text-center"><span>Cellaspace</span></p>
                                       </div>
                                    </button>
                              </div>
                                    {cellaspaceIsOpen && (
                                       this.lightboxComponent(cellaspaceImages, this.state.cellaspaceIndex, 'cellaspaceIndex', 'cellaspaceIsOpen')
                                    )}
                                    <div className="cl works-item ImageWrapper zoom" >
                                          <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/ace-financials.jpg"} />
                                          <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ sunshineIsOpen: true })}>
                                             <div className="ImageOverlayCl">
                                                <p className="valign text-center"><span>Sunshine</span></p>
                                             </div>
                                          </button>
                                    </div> 
                                          {sunshineIsOpen && (
                                             this.lightboxComponent(sunshineImages, this.state.sunshineIndex, 'sunshineIndex', 'sunshineIsOpen')
                                          )}
                                          <div className="cl works-item ImageWrapper zoom" >
                                             <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/snnbuilders.jpg"} />
                                             <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ snnIsOpen: true })} >
                                                <div className="ImageOverlayCl">
                                                      <p className="valign text-center"><span>SNN Builders</span></p>
                                                </div>
                                             </button>
                                          </div>
                                                { snnIsOpen && (
                                                   this.lightboxComponent( snnImages, this.state. snnIndex, ' snnIndex', ' snnIsOpen')
                                                )}
                                          {/*<div className="cl works-item ImageWrapper zoom" >
                                                <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/spr.jpg"} />
                                                <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ sprIsOpen: true })}>
                                                   <div className="ImageOverlayCl">
                                                      <p className="valign text-center"><span>SPR</span></p>
                                                   </div>
                                                </button>
                                          </div>
                                                {sprIsOpen && (
                                                   this.lightboxComponent(sprImages, this.state.sprIndex, 'sprIndex', 'sprIsOpen')
                                                )}*/}
                            </section>
                        </section>
                    </section>
			 <Footer />
            </React.Fragment>
        );
    }
}

export default RealEstates;