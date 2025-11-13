import React, {Component} from 'react';
import config from '../Config';
import Footer from '../layout/Footer';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const fischerImages = [
    config.APP_URL+'/public/home/images/portfolio/big/fischer.jpg' 
 ];
 const monarchImages = [
    config.APP_URL+'/public/home/images/portfolio/big/monarch.png' 
 ];
 const durrImages = [
    config.APP_URL+'/public/home/images/portfolio/big/durr.png' 
 ];
 const ranegroupImages = [
    config.APP_URL+'/public/home/images/portfolio/big/rane-group.jpg' 
 ];  
const powerluxImages = [
   config.APP_URL+'/public/home/images/portfolio/big/powerlux-big.jpg' 
];

class Manufacturing extends Component{
    constructor(props){
        super(props);
        this.state =  {
            fischerIndex : 0,
            fischerIsOpen: false,
            powerluxIndex:0,
            powerluxIsOpen:false,
            monarchIndex : 0,
            monarchIsOpen: false,
            durrIndex : 0,
            durrIsOpen: false,
            ranegroupIndex:0,
            ranegroupIsOpen:false


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
        const { fischerIndex, fischerIsOpen,powerluxIndex, powerluxIsOpen,monarchIndex, monarchIsOpen,durrIndex, durrIsOpen,ranegroupIndex, ranegroupIsOpen} = this.state;
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
                                    <li className="act">Manufacturing</li>
                                </ul>
                            </section>
	                    	<section className="hdg">					
							   	<h1>Building exciting customer experiences</h1>
						   	</section>
                            <section className="row">
                              <div className="cl works-item ImageWrapper zoom" >
                                 <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/fischer.jpg"} />
                                 <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ fischerIsOpen: true })}>
                                    <div className="ImageOverlayCl">
                                     <p className="valign text-center"><span>Fischer India</span></p>
                                    </div>
                                 </button>
                              </div>
                                {fischerIsOpen && (
                                    this.lightboxComponent(fischerImages, this.state.fischerIndex, 'fischerIndex', 'fischerIsOpen')
                                )}
                                <div className="cl works-item ImageWrapper zoom" >
                                   <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/monarch.jpg"} />
                                   <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ monarchIsOpen: true })} >
                                      <div className="ImageOverlayCl">
                                            <p className="valign text-center"><span>Monarch</span></p>
                                      </div>
                                   </button>
                                </div>
                                      {monarchIsOpen && (
                                         this.lightboxComponent(monarchImages, this.state.monarchIndex, 'monarchIndex', 'monarchIsOpen')
                                      )}
                                 <div className="cl works-item ImageWrapper zoom" >
                                    <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/durr.jpg"} />
                                    <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ durrIsOpen: true })} >
                                        <div className="ImageOverlayCl">
                                            <p className="valign text-center"><span>Durr</span></p>
                                        </div>
                                    </button>
                                </div>
                                { durrIsOpen && (
                                    this.lightboxComponent( durrImages, this.state.durrIndex, 'durrIndex', 'durrIsOpen')
                                )}
                                <div className="cl works-item ImageWrapper zoom" >
                                        <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/rane-group.jpg"} />
                                        <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ ranegroupIsOpen: true })}>
                                            <div className="ImageOverlayCl">
                                                <p className="valign text-center"><span>Rane Group</span></p>
                                            </div>
                                        </button>
                                    </div>
                                    {ranegroupIsOpen && (
                                        this.lightboxComponent(ranegroupImages, this.state.ranegroupIndex, 'ranegroupIndex', 'ranegroupIsOpen')
                                    )}
                                    <div className="cl works-item ImageWrapper zoom" >
                                       <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/fischer.jpg"} />
                                       <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ fischerIsOpen: true })}>
                                          <div className="ImageOverlayCl">
                                           <p className="valign text-center"><span>Fischer India</span></p>
                                          </div>
                                       </button>
                                    </div>
                                      {fischerIsOpen && (
                                          this.lightboxComponent(fischerImages, this.state.fischerIndex, 'fischerIndex', 'fischerIsOpen')
                                      )}

                                {/*<div className="cl works-item ImageWrapper zoom" >
                                   <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/powerlux-tmb.jpg"} />
                                   <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ powerluxIsOpen: true })} >
                                       <div className="ImageOverlayCl">
                                           <p className="valign text-center"><span>powerlux</span></p>
                                       </div>
                                   </button>
                               </div>

                               { powerluxIsOpen && (
                                   this.lightboxComponent( powerluxImages, this.state. powerluxIndex, ' powerluxIndex', ' powerluxIsOpen')
                               )}*/}
                            </section>
                        </section>
                    </section>
			 <Footer />
            </React.Fragment>
        );
    }
}

export default Manufacturing;