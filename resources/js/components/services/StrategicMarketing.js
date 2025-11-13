import React, { Component } from 'react';
import config from '.././Config';
import Footer from '.././layout/Footer';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';

class StrategicMarketing extends Component {
    render() {
        return( 
       		<React.Fragment>
       			<MetaTags>
       				<title>Strategy Marketing | Branding Agency Chennai, Mumbai, Pune and Bangalore, India</title>
       				<meta name="description" content="We understand the true nature of your brand and its relationship with business growth. We offer 360 services like Advertising, Brand development, designing of marketing collaterals, Audio-Visuals and multi-media campaigns under single roof"/>
					<link rel="canonical" href="https://www.bleap.in/services/strategic-marketing" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="Strategy Marketing | Branding Agency Chennai, Mumbai, Pune and Bangalore, India" />
					<meta property="og:description" content="We understand the true nature of your brand and its relationship with business growth. We offer 360 services like Advertising, Brand development, designing of marketing collaterals, Audio-Visuals and multi-media campaigns under single roof" />
					<meta property="og:url" content="https://www.bleap.in/services/strategic-marketing/" />
					<meta property="og:site_name" content="BLeap" />
					<meta property="og:image" content={config.APP_URL+"/public/home/images/strategy.jpg"} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:description" content="We understand the true nature of your brand and its relationship with business growth. We offer 360 services like Advertising, Brand development, designing of marketing collaterals, Audio-Visuals and multi-media campaigns under single roof" />
					<meta name="twitter:title" content="Strategy Marketing | Branding Agency Chennai, Mumbai, Pune and Bangalore, India" />
					<meta name="twitter:image" content={config.APP_URL+"/public/home/images/strategy.jpg"} />
       			</MetaTags>
	            <section className="sub-page services strat">
				   <section className="intt">				
						<section className="container">	
							<section className="breadcrumbs gen">
								<ul>
									<li><Link to='/'>Home</Link></li>
									<li> > </li>
									<li><Link to={config.ROUTE_URL+'/services'}>Services</Link></li>
									<li> > </li>
									<li className="act">Strategic Marketing</li>
								</ul>
							</section>			
							<section className="item-cnt">				
								<section className="item-cnt-in">
										<section className="hdg sec">					
											<h1>Strategic Marketing</h1>
										</section>
										<figure><img src={config.APP_URL+"/public/home/images/strategy.jpg"} alt="strategy" className="img-responsive" /></figure>
										<p>We understand the true nature of your brand and its relationship with your business growth and success. Brands are the ecosystem through which people interact with business-as employees, as business partners and of course, as customers or consumers. Brands are complex systems because they are created by everyone and everything in the organization, working together (and sometimes not), to create (to damage) and indeed live up to the expectations of people. We use strategic marketing tools to help you create an organization-wide consistent experience. Brands are a living testimony of business strategy brought to life.</p>
								<h3>Multidimensional Growth Paradigm</h3>
								<p>We think of growth in your business and your brand as co-ordinates on multi-dimensional axis. It's crucial to understand their inter-relationship and more importantly their relationship with extraneous forces at play-the market, the competition, the culture, the trade and the consumer. Brand Strategy provides means to navigate them and can help overcome challenges and nurture real and sustained growth.</p>
								<p>Technology has become a driver of new products, services, and most importantly new experiences. It's notorious of disaggregating and thereby transforming business models. Technology provides greater proximity to people-it enables brands to not only connect, but to live, sleep and talk to your customers continuously. It is the conduit that ties together the business's products and services with the brand's experiences to create a seamless reality for the consumer.</p>
								<p>We do not discount the power of human insight. We believe it remains priceless in value and pricey to seek. Yes, big data is a reality and is important to decision making. It is apparent that the fusion of the two-Insight and Data creates ID-Identity for the business. We help you form warm, emotive and truly lasting connections between your brand, your business and your consumers in the real world.</p>
								<p>Companies have to be more comprehensive, creative, and customer-centric. The only way to navigate the multiple avenues of growth is to develop a clear and cohesive strategy that is completely designed around the customer. Growth comes from a clear strategy and exceptional customer experiences. That requires great people who work together with a powerful brand as both strategic vision and blueprint for the experience.</p>

								<h3>Revealing the Anatomy of Growth</h3>
								<p>To put your business onto a Catapult (Accelerated and Sustained Growth) here is our top secret 3 step recipe:</p>
								<p>1. We create a platform to describe your brand and business in Disruptive Detail</p>
								<p>2. We generate the Creative Fuel to fire your brand and business growth</p>
								<p>3. Develop Edgy Focus to ensure that growth is sustainable</p>

								<h3>Disruptive Detail</h3>
								<p>KYC-Know your customer to know yourself. We go to crazy depths of data to truly know your customer, and how your capabilities and people serve and connect to them. It is critical for real growth and is definitely a source of building significant differentiation and advantage.</p>
								<p>Asking-postulating, digging deeper, answering and iterating-questions like: "How clearly is my business and brand strategy understood?" "Why do people choose my brand; what makes it stand out?" "How committed, responsive, and strong is my team?" "Am I making the best use of my resources to deliver a positive ROI?" and "Is my total experience connected and cohesive?" are crucial.</p>
								<p>This detailing is what yields real, actionable insights. With unprecedented access to data, it's ever more critical to use analytics to cull these, and to be singularly focused on the ones that matter most.</p>
								<p>The output is a clear road map, one that's based on hard data and led by the needs of real consumer, one that can be easily understood and adopted by everyone in your organization, each clearly understanding their role and end goal-a road map that helps engineer and accelerate growth.</p>
								
								<h3>Creative Fuel</h3>
								<p>Growth is a continuous process of curiosity, learning, and development-one that's natural to all of us. To grow, you need to first empower the people within your organization. To generate the creative energy your business needs, people need the permission to challenge, the freedom to try-and the courage to fail.</p>
								<p>When employees know they can make a difference, they do. It's crucial to build the clarity, communication, and trust that fosters this thinking. Once you're able to empower individuals personally, the positive effects will ripple outward across your entire organization, to your agencies and partners, and out into the real world.</p>
								<p>People fuel the growth of your business. Whether it's giving employees the creative freedom to innovate or listening to your customers to create more impactful experiences, "How will this affect real people?" should be the first and last question you ask yourself.</p>
								
								<h3>Edgy Focus</h3>
								<p>Growing at a healthy, continuous rate takes vision underpinned by orchestration at every level-from people to processes. It's one thing to create a process for change, but to ensure that those initiatives stick, you need to improve the skills and capabilities of the people responsible for administering that change every day at the ground level.</p>
								<p>Today's marketing teams oversee and influence more of the customer experience than ever. You need an approach that the entire organization can align around-that will boost brand and business performance among all teams, agencies, geographies, functions, stakeholders, and the entire brand experience.</p>
								<p>Growth is not a statistic, nor is it simply about hiring more employees. It's your way of working, a process that's made real in the market: the careful governance of the people, processes, and platforms necessary to support and succeed.</p>
								<p>We clearly understand the Anatomy of Growth for your brand and explain it to you. But in our wisdom to be successful, we all need to accept that success is complex, nuanced, and personal. For each brand, growth means something different, and every story is unique. Best Global Brands look inward and outward, expanding into new markets, creating better experiences. We don't just help you weather change, we partner with you to drive it.</p>

								<h2>Our Strategic Marketing Services</h2>
								<h3>Product Strategy</h3>
								<p>Product strategy includes portfolio optimization, product development, innovation capability development, and support for process and organizational delivery.</p>
								<h3>Marketing Strategy</h3>
								<p>These services include market development, customer insights, profitability analysis, and marketing optimization.</p>
								<h3>Customer Relationship Management (CRM)</h3>
								<p>This area of service is based on customer loyalty, design and delivery, value-based segmentation, and the design of a CRM program.</p>
								<h3>Pricing</h3>
								<p>Clients working with BLeap can access services like pricing dynamics, framework and optimization, as well as yield management.</p>
								<h3>Brand Strategy</h3>
								<p>Brand Management and Portfolio Optimization.</p>
								<h3>Sales & Channel Management</h3>
								<p>This includes channel strategy development, sales channel configuration, operations design, resource prioritization, and program implementation.</p>
								<h3>Branding & Advertising</h3>
								<p>This includes developing brand identity, brand extensions, product branding, event branding, and advertisements (print and multi-media), Corporate AV's, collaterals.</p>
							</section>
							</section>
						</section>
					</section>
				</section>			
				<Footer />
			</React.Fragment>


        );
    }
}
export default StrategicMarketing;