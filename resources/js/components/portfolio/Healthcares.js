import React, {Component} from 'react';
import config from '../Config';
import Footer from '../layout/Footer';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const prolifyImages = [
   config.APP_URL+'/public/home/images/portfolio/big/prolify.jpg' 
];
 const secondImages = [
     config.APP_URL+'/public/home/images/portfolio/big/asecondopinion.jpg' 
  ];
const smilezImages = [
   config.APP_URL+'/public/home/images/portfolio/big/smilez.jpg' 
];
const haridentalImages = [
   config.APP_URL+'/public/home/images/portfolio/big/haridental.png' 
];
const kntImages = [
   config.APP_URL+'/public/home/images/portfolio/big/knt.png' 
];
const saipranaImages = [
   config.APP_URL+'/public/home/images/portfolio/big/saiprana.jpg' 
];
const unpImages = [
   config.APP_URL+'/public/home/images/portfolio/big/unp.jpg' 
];
const evolImages = [
    config.APP_URL+'/public/home/images/portfolio/big/evolation.jpg' 
 ];
 const dhsImages = [
    config.APP_URL+'/public/home/images/portfolio/big/dhs.jpg' 
 ];
 const gteeImages = [
    config.APP_URL+'/public/home/images/portfolio/big/gtee-big.jpg' 
 ];
 const lakmeImages = [
    config.APP_URL+'/public/home/images/portfolio/big/lakme.jpg' 
 ];
 const earlyImages = [
    config.APP_URL+'/public/home/images/portfolio/big/ear-ly.png' 
 ];
 const toddleImages = [
    config.APP_URL+'/public/home/images/portfolio/big/toddle.jpg' 
 ];
 const samuImages = [
   config.APP_URL+'/public/home/images/portfolio/big/samudhrika.jpg' 
];
 


class Healthcares extends Component{
    constructor(props){
        super(props);
        this.state =  {
            prolifyIndex : 0,
            prolifyIsOpen: false,
            kalIndex : 0,
            kalIsOpen: false,
            secondIndex : 0,
            secondIsOpen: false,
            smilezIndex : 0,
            smilezIsOpen: false,
            haridentalIndex:0,
            haridentalIsOpen:false,
            kntIndex:0,
            kntIsOpen:false,
            saipranaIndex:0,
            saipranaIsOpen:false,
            unpIndex:0,
            unpIsOpen:false,
            evolIndex:0,
            evolIsOpen:false,
            dhsIndex : 0,
            dhsIsOpen: false,
            gteeIndex:0,
            gteeIsOpen:false,
            lakmeIndex : 0,
            lakmeIsOpen: false,
            earlyIndex:0,
            earlyIsOpen:false,
            toddleIndex:0,
            toddleIsOpen:false,
            samuIndex:0,
            samuIsOpen:false

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
      const { samuIndex,samuIsOpen,toddleIndex,toddleIsOpen,earlyIndex,earlyIsOpen,lakmeIndex, lakmeIsOpen,gteeIndex,gteeIsOpen,dhsIndex, dhsIsOpen, evolIndex, evolIsOpen,prolifyIndex, prolifyIsOpen, kalIndex, kalIsOpen, secondIndex, secondIsOpen, smilezIndex, smilezIsOpen, haridentalIndex, haridentalIsOpen, kntIndex, kntIsOpen, saipranaIndex, saipranaIsOpen, unpIndex, unpIsOpen } = this.state;
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
                                    <li className="act">Healthcare</li>
                                </ul>
                            </section>
	                    	<section className="hdg">					
								<h1>Building exciting customer experiences</h1>
							</section>
                            <section className="row">
                              <div className="cl works-item ImageWrapper zoom" >
                                 <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/dhs.jpg"} />
                                 <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ dhsIsOpen: true })}>
                                    <div className="ImageOverlayCl">
                                     <p className="valign text-center"><span>Designing Hair Studio</span></p>
                                    </div>
                                 </button>
                              </div>
                                {dhsIsOpen && (
                                    this.lightboxComponent(dhsImages, this.state.dhsIndex, 'dhsIndex', 'dhsIsOpen')
                                )}
                                <div className="cl works-item ImageWrapper zoom" >
                                   <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/evolation.jpg"} />
                                   <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ evolIsOpen: true })}>
                                      <div className="ImageOverlayCl">
                                            <p className="valign text-center"><span>Evolation Yoga</span></p>
                                      </div>
                                   </button>
                                </div>
                                  {evolIsOpen && (
                                      this.lightboxComponent(evolImages, this.state.evolIndex, 'evolIndex', 'evolIsOpen')
                                  )}
                                  <div className="cl works-item ImageWrapper zoom" >
                                     <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/smilez.jpg"} />
                                     <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ smilezIsOpen: true })}>
                                        <div className="ImageOverlayCl">
                                              <p className="valign text-center"><span>Dr.Smilez Dental Centre</span></p>
                                        </div>
                                     </button>
                                  </div>
                                    { smilezIsOpen && (
                                        this.lightboxComponent(smilezImages, this.state.smilezIndex, ' smilezIndex', 'smilezIsOpen')
                                    )}
                                    <div className="cl works-item ImageWrapper zoom" >
                                    <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/knt.jpg"} />
                                    <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ kntIsOpen: true })}>
                                        <div className="ImageOverlayCl">
                                            <p className="valign text-center"><span>Kids N Teenz</span></p>
                                        </div>
                                    </button>
                                </div>
                                       { kntIsOpen && (
                                           this.lightboxComponent( kntImages, this.state.kntIndex, ' kntIndex', ' kntIsOpen')
                                       )}
                                       <div className="cl works-item ImageWrapper zoom" >
                                          <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/kalnkai.png"} />
                                          <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ kalIsOpen: true })} >
                                             <div className="ImageOverlayCl">
                                             <p className="valign text-center"><span>Kal & Kai</span></p>
                                             </div>
                                          </button>
                                       </div>
                                         { kalIsOpen && (
                                             this.lightboxComponent(kalImages, this.state.kalIndex, ' kalIndex', 'kalIsOpen')
                                         )}
                              <div className="cl works-item ImageWrapper zoom" >
                                 <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/polify-health.jpg"} />
                                 <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ prolifyIsOpen: true })} >
                                    <div className="ImageOverlayCl">
                                    <p className="valign text-center"><span>Prolify Health</span></p>
                                    </div>
                                 </button>
                              </div>
                                { prolifyIsOpen && (
                                    this.lightboxComponent(prolifyImages, this.state.prolifyIndex, ' prolifyIndex', 'prolifyIsOpen')
                                )}
                                  <div className="cl works-item ImageWrapper zoom" >
                                     <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/asecondopinion.jpg"} />
                                     <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ secondIsOpen: true })} >
                                        <div className="ImageOverlayCl">
                                        <p className="valign text-center"><span>A Second Opinion</span></p>
                                        </div>
                                     </button>
                                  </div>
                                    { secondIsOpen && (
                                        this.lightboxComponent(secondImages, this.state.secondIndex, ' secondIndex', 'secondIsOpen')
                                    )}
                                    <div className="cl works-item ImageWrapper zoom" >
                                        <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/gtee-tmb.jpg"} />
                                        <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ gteeIsOpen: true })} >
                                            <div className="ImageOverlayCl">
                                                <p className="valign text-center"><span>gtee</span></p>
                                            </div>
                                        </button>
                                    </div>
                                    { gteeIsOpen && (
                                        this.lightboxComponent( gteeImages, this.state. gteeIndex, ' gteeIndex', ' gteeIsOpen')
                                    )}
                                    <div className="cl works-item ImageWrapper zoom" >
                                       <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/lakme.jpg"} />
                                       <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ lakmeIsOpen: true })} >
                                          <div className="ImageOverlayCl">
                                                <p className="valign text-center"><span>Lakme beautician Training Academy</span></p>
                                          </div>
                                       </button>
                                    </div>
                                          {lakmeIsOpen && (
                                             this.lightboxComponent(lakmeImages, this.state.lakmeIndex, 'lakmeIndex', 'lakmeIsOpen')
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
                                               <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/samudhrika.jpg"} />
                                               <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ samuIsOpen: true })}>
                                                  <div className="ImageOverlayCl">
                                                        <p className="valign text-center"><span>Samudhrika Lakshana</span></p>
                                                  </div>
                                               </button>
                                            </div>
                                                  { samuIsOpen && (
                                                     this.lightboxComponent( samuImages, this.state.samuIndex, ' samuIndex', ' samuIsOpen')
                                                  )}
                                                  <div className="cl works-item ImageWrapper zoom" >
                                                     <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/ear-ly.jpg"} />
                                                     <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ earlyIsOpen: true })}>
                                                        <div className="ImageOverlayCl">
                                                              <p className="valign text-center"><span>Ear-ly</span></p>
                                                        </div>
                                                     </button>
                                                  </div>
                                                    {earlyIsOpen && (
                                                        this.lightboxComponent(earlyImages, this.state.earlyIndex, 'earlyIndex', 'earlyIsOpen')
                                                    )}



                              {/*<div className="cl works-item ImageWrapper zoom" >
                                 <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/haridental.jpg"} />
                                 <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ haridentalIsOpen: true })} >
                                    <div className="ImageOverlayCl">
                                    <p className="valign text-center"><span>Dr.Hari's Dental Centre</span></p>
                                    </div>
                                 </button>
                              </div>
                                { haridentalIsOpen && (
                                    this.lightboxComponent(haridentalImages, this.state.haridentalIndex, ' haridentalIndex', 'haridentalIsOpen')
                                )}

                                
                                       <div className="cl works-item ImageWrapper zoom" >
                                           <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/saiprana-tmb.jpg"} />
                                           <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ saipranaIsOpen: true })} >
                                               <div className="ImageOverlayCl">
                                                   <p className="valign text-center"><span>Saiprana</span></p>
                                               </div>
                                           </button>
                                       </div>
                                       { saipranaIsOpen && (
                                           this.lightboxComponent( saipranaImages, this.state.saipranaIndex, ' saipranaIndex', ' saipranaIsOpen')
                                       )}
                                       <div className="cl works-item ImageWrapper zoom" >
                                           <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/unp.jpg"} />
                                           <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ saipranaIsOpen: true })} >
                                               <div className="ImageOverlayCl">
                                                   <p className="valign text-center"><span>Umapathi Natural Products</span></p>
                                               </div>
                                           </button>
                                       </div>
                                       { unpIsOpen && (
                                           this.lightboxComponent( unpImages, this.state.unpIndex, ' unpIndex', ' unpIsOpen')
                                       )}*/}
                            </section>
                        </section>
                    </section>
			 <Footer />
            </React.Fragment>
        );
    }
}

export default Healthcares;