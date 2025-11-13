import React, {Component} from 'react';
import config from '../Config';
import Footer from '../layout/Footer';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const hersecondinningsImages = [
   config.APP_URL+'/public/home/images/portfolio/big/hersecondinnings.png' 
];
const spectImages = [
   config.APP_URL+'/public/home/images/portfolio/big/spectalent.jpg' 
];


class Recruitment extends Component{
    constructor(props){
        super(props);
        this.state =  {
            hersecondinningsIndex:0,
            hersecondinningsIsOpen:false,
            spectIndex:0,
            spectIsOpen:false           


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
        const { hersecondinningsIndex, hersecondinningsIsOpen, spectIndex, spectIsOpen } = this.state;
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
                                    <li className="act">Recruitment</li>
                                </ul>
                            </section>
	                    	<section className="hdg">					
							   	<h1>Building exciting customer experiences</h1>
						   	</section>
                            <section className="row">
                            <div className="cl works-item ImageWrapper zoom" >
                              <img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/hersecondinnings.jpg"} />
                              <button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ hersecondinningsIsOpen: true })}  >
                                 <div className="ImageOverlayCl">
                                       <p className="valign text-center"><span>Her Second Innings</span></p>
                                 </div>
                              </button>
    						   	</div>
                                { hersecondinningsIsOpen && (
                                    this.lightboxComponent( hersecondinningsImages, this.state.hersecondinningsIndex, ' hersecondinningsIndex', ' hersecondinningsIsOpen')
                                )}
                                
                             <div className="cl works-item ImageWrapper zoom" >
        							<img data-no-retina="" alt="" title="" className="img-responsive" src={config.APP_URL+"/public/home/images/portfolio/tmb/spectalent.jpg"} />
        							<button className="venobox vbox-item" data-gall="portfolio-gallery" onClick={() => this.setState({ spectIsOpen: true })}>
    							        <div className="ImageOverlayCl">
    							            <p className="valign text-center"><span>Spectalent</span></p>
    							        </div>
    							    </button>
    							</div>
                                {spectIsOpen && (
                                    this.lightboxComponent(spectImages, this.state.spectIndex, 'spectIndex', 'spectIsOpen')
                                )}

                            </section>
                        </section>
                    </section>
			 <Footer />
            </React.Fragment>
        );
    }
}

export default Recruitment;