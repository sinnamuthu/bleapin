import React, { Component } from 'react';
import config from './Config';
import Footer from './layout/Footer';
import MetaTags from 'react-meta-tags';
import $ from 'jquery';


class GetQuote extends Component {
	componentDidMount(){
		(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
		$(document).ready(function(){
			console.log('ready');
			$('.test').on('click', function(){
				console.log('ghide');
				// $(this).hide();
			});
		});
	}
    render() {
        return (
        	<React.Fragment>
        		<MetaTags>
        			<title>Get a Quote | Social Media Marketing Chennai, Mumbai, Pune and Bengaluru, India</title>
        		</MetaTags>
        		<section className="sub-page">
					<section className="container">	
						<button type="button" className="test">Test</button>
						<div className="typeform-widget" data-url="https://neerajmoorjani.typeform.com/to/eFtscf" style={{width: '100%', height: '500px'}}></div>
					</section>
				</section>
				<Footer />
			</React.Fragment>
        );
    }
}
export default GetQuote;