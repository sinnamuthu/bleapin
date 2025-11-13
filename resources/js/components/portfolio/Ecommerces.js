import React, {Component} from 'react';
import config from '../Config';
import Footer from '../layout/Footer';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const helveticaImages = [
    config.APP_URL+'/public/home/images/portfolio/big/helvetica.png' 
 ];
const mangoImages = [
    config.APP_URL+'/public/home/images/portfolio/big/mangopoint.jpg' 
 ];
 const alixImages = [
    config.APP_URL+'/public/home/images/portfolio/big/alix-amour.jpg' 
 ];
 const kalImages = [
     config.APP_URL+'/public/home/images/portfolio/big/kalnkai.jpg' 
  ];
  const gteeImages = [
     config.APP_URL+'/public/home/images/portfolio/big/gtee-big.jpg' 
  ];
  const lakmeImages = [
    config.APP_URL+'/public/home/images/portfolio/big/lakme.jpg' 
 ];
 const indusImages = [
    config.APP_URL+'/public/home/images/portfolio/big/indus-valley.jpg' 
 ];

class Ecommerces extends Component{
    constructor(props){
        super(props);
        this.state =  {
            helveticaIndex : 0,
            helveticaIsOpen: false,
            mangoIndex:0,
            mangoIsOpen:false,
            alixIndex:0,
            alixIsOpen:false,
            kalIndex : 0,
            kalIsOpen: false,
            gteeIndex:0,
            gteeIsOpen:false,
            lakmeIndex : 0,
            lakmeIsOpen: false,
            indusIndex : 0,
            indusIsOpen: false

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
      const {  helveticaIndex, helveticaIsOpen, mangoIndex, mangoIsOpen, alixIndex, alixIsOpen, kalIndex, kalIsOpen, gteeIndex, gteeIsOpen,lakmeIndex, lakmeIsOpen,indusIndex, indusIsOpen } = this.state;
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
                                    <li className="act">Ecommerce</li>
                                </ul>
                            </section>
	                    	<section className="hdg">					
								<h1>Building exciting customer experiences</h1>
							</section>
                            <section className="row">
                              <div className="cl works-item ImageWrapper zoom" >
                                 <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/helvetica.jpg"} />
                                 <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ helveticaIsOpen: true })}>
                                    <div className="ImageOverlayCl">
                                          <p className="valign text-center"><span>Helvetica Lifestyle</span></p>
                                    </div>
                                 </button>
                              </div>
                                {helveticaIsOpen && (
                                    this.lightboxComponent(helveticaImages, this.state.helveticaIndex, 'helveticaIndex', 'helveticaIsOpen')
                                )}
                                <div className="cl works-item ImageWrapper zoom" >
                                  <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/alix-amour.png"} />
                                  <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ alixIsOpen: true })} >
                                     <div className="ImageOverlayCl">
                                           <p className="valign text-center"><span>Alix Amour</span></p>
                                     </div>
                                  </button>
                                       </div>
                                    {alixIsOpen && (
                                        this.lightboxComponent(alixImages, this.state.alixIndex, 'alixIndex', 'alixIsOpen')
                                    )}                                    
                                    <div className="cl works-item ImageWrapper zoom" >
                                      <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/mangopoint.jpg"} />
                                      <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ mangoIsOpen: true })} >
                                         <div className="ImageOverlayCl">
                                               <p className="valign text-center"><span>Mangopoint</span></p>
                                         </div>
                                      </button>
                                           </div>
                                        {mangoIsOpen && (
                                            this.lightboxComponent(mangoImages, this.state.mangoIndex, 'mangoIndex', 'mangoIsOpen')
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
                                           <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/indus-valley.jpg"} />
                                           <button className="venobox vbox-item" data-gall="portfolio-gallery"  onClick={() => this.setState({ indusIsOpen: true })}>
                                               <div className="ImageOverlayCl">
                                                   <p className="valign text-center"><span>The Indus Valley</span></p>
                                               </div>
                                           </button>
                                       </div>
                                              {indusIsOpen && (
                                                  this.lightboxComponent(indusImages, this.state.indusIndex, 'indusIndex', 'indusIsOpen')
                                              )} 
                            </section>
                        </section>
                    </section>
			 <Footer />
            </React.Fragment>
        );
    }
}

export default Ecommerces;
