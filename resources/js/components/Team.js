import React, { Component } from 'react';
import config from './Config';
import Footer from './layout/Footer';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';

class Team extends Component {
    render() {
        return (
            <React.Fragment>
                    <MetaTags>
                        <title>Bleap Team</title>
                        <meta name="description" content="Bleap Team"/>
                    </MetaTags>
                    <section className="sub-page team section-wrap-btm">
                        <section className="container">
                        	<section className="breadcrumbs layout1">
								<ul>
									<li><Link to='/'>Home</Link></li>
									<li> > </li>
									<li className="act">Team</li>
								</ul>
							</section>
                        <section className="hdg">
							<h1 className="text-center">Our Team</h1>
						</section>
                        <section className="row">
			<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/neeraj2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/neeraj.jpg"} alt="Neeraj Moorjani" /></figure>
	<div className="item-desc">
	<h5>Neeraj Moorjani</h5>
	<small>Managing Director</small>
	<div className="team_social">
	<a href="https://www.linkedin.com/in/neerajmoorjani/" target="_blank"><img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/neelu2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/neelu.jpg"} alt="Neelu moorjani" /></figure>
	<div className="item-desc">
	<h5>Neelu moorjani</h5>
	<small>Head of HR</small>
	<div className="team_social">
	<a href="#"><img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/ranjit2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/ranjit.jpg"} alt="Ranjit Ravindran" /></figure>
	<div className="item-desc">
	<h5>Ranjit Ravindran</h5>
	<small>Business Development Head</small>
	<div className="team_social">
	<a href="https://www.linkedin.com/in/ranjitravindran/" target="_blank"> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/abishai2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/abishai.jpg"} alt="Abishai Billigraham" /></figure>
	<div className="item-desc">
	<h5>Abishai Billigraham</h5>
	<small>General Manager</small>
	<div className="team_social">
	<a href="https://in.linkedin.com/in/abishaibilligraham" target="_blank"> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/giri2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/giri.jpg"} alt="Giridharan" /></figure>
	<div className="item-desc">
	<h5>Giridharan R</h5>
	<small>Technical Head</small>
	<div className="team_social">
	<a href="https://www.linkedin.com/in/giridharan-r-b683b1b4/" target="_blank"> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>

<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/partha2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/partha.jpg"} alt="Partha Sarathy" /></figure>
	<div className="item-desc">
	<h5>Partha Sarathy</h5>
	<small>Design Head</small>
	<div className="team_social">
	<a href="javascript:;"> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/sinamuthu2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/sinamuthu.jpg"} alt="Sinnamuthu" /></figure>
	<div className="item-desc">
	<h5>Sinnamuthu</h5>
	<small>Full Stack Developer</small>
	<div className="team_social">
	<a href="javascript:;"><img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>

<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/akhil2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/akhil.jpg"} alt="Akhil Shekar" /></figure>
	<div className="item-desc">
	<h5>Akhil Shekar</h5>
	<small>Campign Manager - Meta</small>
	<div className="team_social">
	<a href="javascript:;" target='_blank'> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/sabari2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/sabari.jpg"} alt="Sabari" /></figure>
	<div className="item-desc">
	<h5>Sabari</h5>
	<small>Campign Manager - Google</small>
	<div className="team_social">
	<a href="javascript:;"><img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/deepak2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/deepak.jpg"} alt="Deepak Murugan" /></figure>
	<div className="item-desc">
	<h5>Deepak Murugan</h5>
	<small>Front-End Developer</small>
	<div className="team_social">
	<a href="https://www.linkedin.com/in/deepakmurugan4/" target="_blank"> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/gowtham2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/gowtham.jpg"} alt="Gowtham Krishna" /></figure>
	<div className="item-desc">
	<h5>Gowtham Krishna</h5>
	<small>SEO Analyst</small>
	<div className="team_social">
	<a href="https://www.linkedin.com/in/gowtham-krishna-dm/" target='_blank'> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/sanjaiDharshan2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/sanjaiDharshan2.jpg"} alt="Sanjai Dharshan R" /></figure>
	<div className="item-desc">
	<h5>Sanjai Dharshan R</h5>
	<small>Graphic Designer</small>
	<div className="team_social">
	<a href="https://www.linkedin.com/in/sanjai-dharshan" target='_blank'> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/abhishek2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/abhishek.jpg"} alt="Abhishek M<" /></figure>
	<div className="item-desc">
	<h5>Abhishek M</h5>
	<small>Jr. Graphic Designer</small>
	<div className="team_social">
	<a href="javascript:;"> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/karen2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/karen.jpg"} alt="Karen" /></figure>
	<div className="item-desc">
	<h5>Karen</h5>
	<small>Video Editor</small>
	<div className="team_social">
	<a href="https://www.behance.net/karenneethi" target='_blank'> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/varun2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/varun.jpg"} alt="Varun Naraharisetty" /></figure>
	<div className="item-desc">
	<h5>Varun Naraharisetty</h5>
	<small>UI/UX Designer</small>
	<div className="team_social">
	<a href="javascript:;" target='_blank'> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/aedan2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/aedan.jpg"} alt="Aedan Kyle" /></figure>
	<div className="item-desc">
	<h5>Aedan Kyle</h5>
	<small>Social Media Executive</small>
	<div className="team_social">
	<a href="javascript:;"> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/prakash2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/prakash.jpg"} alt="Prakash" /></figure>
	<div className="item-desc">
	<h5>Prakash</h5>
	<small>Social Media Executive</small>
	<div className="team_social">
	<a href="https://www.linkedin.com/in/prakash-s-dm17" target='_blank'> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/sakti2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/sakti.jpg"} alt="Prakash" /></figure>
	<div className="item-desc">
	<h5>Sakti Devi Bavatarini M</h5>
	<small>Social Media Executive</small>
	<div className="team_social">
	<a href="javascript:;"> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/hasumathi2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/hasumathi.jpg"} alt="S. Hasumathi" /></figure>
	<div className="item-desc">
	<h5>Hasumathi S</h5>
	<small>SEO Executive</small>
	<div className="team_social">
	<a href="https://www.linkedin.com/in/hasumathi-s/" target='_blank'> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/dummy-img_male.png')"}}><img src={config.APP_URL+"/public/home/images/team/dummy-img_male.png"} alt="S. Hasumathi" /></figure>
	<div className="item-desc">
	<h5>Srinivasan</h5>
	<small>Sr. Graphic Designer</small>
	<div className="team_social">
	<a href="javascript:;"> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/dummy-img_male.png')"}}><img src={config.APP_URL+"/public/home/images/team/dummy-img_male.png"} alt="Joel" /></figure>
	<div className="item-desc">
	<h5>Joel</h5>
	<small>Social Media Executive</small>
	<div className="team_social">
	<a href="javascript:;"> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>

</section>
                        <section className="hdg section-wrap-top">
							<h1 className="text-center">Meet Our Interns</h1>
						</section>
                        <section className="row">
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/jayDesai2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/jayDesai.jpg"} alt="Jay Desai" /></figure>
	<div className="item-desc">
	<h5>Jay Desai</h5>
	<div className="team_social">
	<a href="javascript:;" target='_blank'> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/pradeep2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/pradeep.jpg"} alt="Pradeep Sethuraman" /></figure>
	<div className="item-desc">
	<h5>Pradeep Sethuraman</h5>
	<div className="team_social">
	<a href="https://www.linkedin.com/in/pradeep-sethuraman-692642262/" target='_blank'> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/saritha2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/saritha.jpg"} alt="Saritha" /></figure>
	<div className="item-desc">
	<h5>Saritha</h5>
	<div className="team_social">
	<a href="javascript:;"> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
<aside className="col-lg-3 col-md-4 col-sm-6">
<div className="team_member">
	<figure style={{backgroundImage:"url('/public/home/images/team/vinoth2.jpg')"}}><img src={config.APP_URL+"/public/home/images/team/vinoth.jpg"} alt="Vinoth Kumar V" /></figure>
	<div className="item-desc">
	<h5>Vinoth Kumar V</h5>
	<div className="team_social">
	<a href="javascript:;"> <img src={config.APP_URL+"/public/home/images/team/icon-linkedin.png"} /></a>
	</div> 
	</div>
</div>
</aside>
			</section>
                    </section>
                    </section>
                 <Footer />
            </React.Fragment>
        );
    }
}
export default Team;
