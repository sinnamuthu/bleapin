import React, { Component } from 'react';
import config from './Config';
import MetaTags from 'react-meta-tags';

class NotFound extends Component {
	/*constructor(){
		window.location.href=config.ROUTE_URL+"not-found";
	}*/
    render() {
        return (
            <React.Fragment>
                <MetaTags>
                    <meta name="ROBOTS" content="NOINDEX" />
                </MetaTags>
                <section className="sub-page notfound">
                    <section className="container">
                       {/* <center><h1>404 Not Found</h1></center>*/}
                        <center>
                            <figure><img src={config.APP_URL+"/public/home/images/notfound.png"} alt="Not Found" className="img-responsive" /></figure>
                        </center>
                    </section>
                </section>
            </React.Fragment>
        );
    }
}
export default NotFound;
