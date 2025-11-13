import React, {Component} from 'react';
import config from '../Config';
import Footer from '../layout/Footer';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ceroImages = [
   config.APP_URL+'/public/home/images/portfolio/big/cero.png' 
];
const mercedesImages = [
   config.APP_URL+'/public/home/images/portfolio/big/mercedes.jpg' 
];
const petrominImages = [
   config.APP_URL+'/public/home/images/portfolio/big/petromin.png' 
];
const ranegroupImages = [
   config.APP_URL+'/public/home/images/portfolio/big/rane-group.jpg' 
];
const sundaramImages = [
   config.APP_URL+'/public/home/images/portfolio/big/sundaram-mercedes.jpg' 
];
const dekhoImages = [
   config.APP_URL+'/public/home/images/portfolio/big/dekho-ev.png' 
];
const motorzoImages = [
   config.APP_URL+'/public/home/images/portfolio/big/motoroZo2.jpg' 
];
const garageImages = [
    config.APP_URL+'/public/home/images/portfolio/big/garage.jpg' 
 ];
 

class Automobile extends Component{
    constructor(props){
        super(props);
        this.state =  {
         ceroIndex:0,
         ceroIsOpen:false,
         mercedesIndex:0,
         mercedesOpen:false,
         petrominIndex:0,
         petrominIsOpen:false,
         ranegroupIndex:0,
         ranegroupIsOpen:false,
         sundaramIndex:0,
         sundaramIsOpen:false,
         dekhoIndex:0,
         dekhoIsOpen:false,
         motorzoIndex:0,
         motorzoIsOpen:false,
         garageIndex:0,
         garageIsOpen:false

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
        const { ceroIndex, ceroIsOpen, mercedesIndex, mercedesIsOpen, petrominIndex, petrominIsOpen, ranegroupIndex, ranegroupIsOpen, sundaramIndex, sundaramIsOpen,
             dekhoIndex, dekhoIsOpen, motorzoIndex, motorzoIsOpen, garageIndex, garageIsOpen } = this.state;
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
                                    <li className="act">Automobile</li>
                                </ul>
                            </section>
	                    	<section className="hdg">					
								<h1>Building exciting customer experiences</h1>
							</section>
                            <section className="row">
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
                                       <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/dekho-ev.jpg"} />
                                       <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ dekhoIsOpen: true })}>
                                           <div className="ImageOverlayCl">
                                               <p className="valign text-center"><span>Dekho EV</span></p>
                                           </div>
                                       </button>
                                   </div>
                                   {dekhoIsOpen && (
                                       this.lightboxComponent(dekhoImages, this.state.dekhoIndex, 'dekhoIndex', 'dekhoIsOpen')
                                   )}
                             <div className="cl works-item ImageWrapper zoom" >
        							<img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/cero.jpg"} />
        							<button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ ceroIsOpen: true })}>
    							        <div className="ImageOverlayCl">
    							            <p className="valign text-center"><span>Cero</span></p>
    							        </div>
    							    </button>
    							</div>
                                {ceroIsOpen && (
                                    this.lightboxComponent(ceroImages, this.state.ceroIndex, 'ceroIndex', 'ceroIsOpen')
                                )}
                                <div className="cl works-item ImageWrapper zoom" >
                                       <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/mercedes.jpg"} />
                                       <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ mercedesIsOpen: true })}>
                                           <div className="ImageOverlayCl">
                                               <p className="valign text-center"><span>Mercedes Benz</span></p>
                                           </div>
                                       </button>
                                   </div>
                                   {mercedesIsOpen && (
                                       this.lightboxComponent(mercedesImages, this.state.mercedesIndex, 'mercedesIndex', 'mercedesIsOpen')
                                   )}
                                <div className="cl works-item ImageWrapper zoom" >
                                       <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/sundaram-mercedes.jpg"} />
                                       <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ sundaramIsOpen: true })}>
                                           <div className="ImageOverlayCl">
                                               <p className="valign text-center"><span>Sundaram Mercedes</span></p>
                                           </div>
                                       </button>
                                   </div>
                                   {sundaramIsOpen && (
                                       this.lightboxComponent(sundaramImages, this.state.sundaramIndex, 'sundaramIndex', 'sundaramIsOpen')
                                   )}
                                   <div className="cl works-item ImageWrapper zoom" >
                                          <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/petromin.jpg"} />
                                          <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ petrominIsOpen: true })}>
                                              <div className="ImageOverlayCl">
                                                  <p className="valign text-center"><span>Petromin</span></p>
                                              </div>
                                          </button>
                                      </div>
                                      {petrominIsOpen && (
                                          this.lightboxComponent(petrominImages, this.state.petrominIndex, 'petrominIndex', 'petrominIsOpen')
                                      )}
                                      <div className="cl works-item ImageWrapper zoom" >
                                         <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/garage.jpg"} />
                                         <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ garageIsOpen: true })}>
                                            <div className="ImageOverlayCl">
                                             <p className="valign text-center"><span>Garage Plug</span></p>
                                            </div>
                                         </button>
                                      </div>
                                        {garageIsOpen && (
                                            this.lightboxComponent(garageImages, this.state.garageIndex, 'garageIndex', 'garageIsOpen')
                                        )}
                                <div className="cl works-item ImageWrapper zoom" >
                                    <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/motoroZo2.jpg"} />
                                    <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ motorzoIsOpen: true })} >
                                        <div className="ImageOverlayCl">
                                            <p className="valign text-center"><span>Motorzo</span></p>
                                        </div>
                                    </button>
                                </div>
                                       {motorzoIsOpen && (
                                           this.lightboxComponent(motorzoImages, this.state.motorzoIndex, 'motorzoIndex', 'motorzoIsOpen')
                                       )}   							
                               

                            </section>
                        </section>
                    </section>
			 <Footer />
            </React.Fragment>
        );
    }
}

export default Automobile;
