import React, {Component} from 'react';
import Config from './Config';

class DashboardNavbar extends Component{
	render(){
		return (
			<React.Fragment>
				<div className="main-menu">
					<header className="header">
						<a href="index.html" className="logo">Bleap</a>
						<button type="button" className="button-close fa fa-times js__menu_close"></button>
					</header>
					<div className="content">

						<div className="navigation">
							<ul className="menu js__accordion">
								<li>
									<a className="waves-effect" href="index.html"><i className="menu-icon mdi mdi-view-dashboard"></i><span>Dashboard</span></a>
								</li>
								<li>
									<a className="waves-effect parent-item js__control" href="#"><i className="menu-icon mdi mdi-flower"></i><span>Icons</span><span className="menu-arrow fa fa-angle-down"></span></a>
									<ul className="sub-menu js__content">
										<li><a href="icons-font-awesome-icons.html">Font Awesome</a></li>
										<li><a href="icons-fontello.html">Fontello</a></li>
										<li><a href="icons-material-icons.html">Material Design Icons</a></li>
										<li><a href="icons-material-design-iconic.html">Material Design Iconic Font</a></li>
										<li><a href="icons-themify-icons.html">Themify Icons</a></li>
									</ul>
								</li>
								<li>
									<a className="waves-effect" href="calendar.html"><i className="menu-icon mdi mdi-calendar-multiple"></i><span>Calendar</span><span className="notice notice-danger">New</span></a>
								</li>
								<li>
									<a className="waves-effect parent-item js__control" href="#"><i className="menu-icon mdi mdi-chart-bar"></i><span>Charts</span><span className="menu-arrow fa fa-angle-down"></span></a>
									<ul className="sub-menu js__content">
										<li><a href="chart-3d.html">3D Charts</a></li>
										<li><a href="chart-chartist.html">Chartist Charts</a></li>
										<li><a href="chart-chartjs.html">Chartjs Chart</a></li>
										<li><a href="chart-dynamic.html">Dynamic Chart</a></li>
										<li><a href="chart-flot.html">Flot Chart</a></li>
										<li><a href="chart-knob.html">Knob Chart</a></li>
										<li><a href="chart-morris.html">Morris Chart</a></li>
										<li><a href="chart-sparkline.html">Sparkline Chart</a></li>
										<li><a href="chart-other.html">Other Chart</a></li>
									</ul>
								</li>
								<li>
									<a className="waves-effect parent-item js__control" href="#"><i className="menu-icon mdi mdi-cube-outline"></i><span>Admin UI</span><span className="menu-arrow fa fa-angle-down"></span></a>
									<ul className="sub-menu js__content">
										<li><a href="ui-notification.html">Notification</a></li>
										<li><a href="profile.html">Profile</a></li>
										<li><a href="ui-range-slider.html">Range Slider</a></li>
										<li><a href="ui-sweetalert.html">Sweet Alert</a></li>
										<li><a href="ui-treeview.html">Tree view</a></li>
										<li><a href="widgets.html">Widget</a></li>
									</ul>
								</li>
								<li>
									<a className="waves-effect parent-item js__control" href="#"><i className="menu-icon mdi mdi-buffer"></i><span>User Interface</span><span className="menu-arrow fa fa-angle-down"></span></a>
									<ul className="sub-menu js__content">
										<li><a href="ui-buttons.html">Buttons</a></li>
										<li><a href="ui-cards.html">Cards</a></li>
										<li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a></li>
										<li><a href="ui-components.html">Components</a></li>
										<li><a href="ui-draggable-cards.html">Draggable Cards</a></li>
										<li><a href="ui-modals.html">Modals</a></li>
										<li><a href="ui-typography.html">Typography</a></li>
									</ul>
								</li>
								<li>
									<a className="waves-effect" href="inbox.html"><i className="menu-icon mdi mdi-email-outline"></i><span>Mail</span></a>
								</li>
								<li className="current active">
									<a className="waves-effect parent-item js__control" href="#"><i className="menu-icon mdi mdi-pencil-box"></i><span>Forms</span><span className="notice notice-blue">7</span></a>
									<ul className="sub-menu js__content">
										<li><a href="form-elements.html">General Elements</a></li>
										<li><a href="form-advanced.html">Advanced Form</a></li>
										<li><a href="form-fileupload.html">Form Uploads</a></li>
										<li className="current"><a href="form-validation.html">Form Validation</a></li>
										<li><a href="form-wizard.html">Form Wizard</a></li>
										<li><a href="form-wysiwig.html">Wysiwig Editors</a></li>
										<li><a href="form-xeditable.html">X-editable</a></li>
									</ul>
								</li>
								<li>
									<a className="waves-effect parent-item js__control" href="#"><i className="menu-icon mdi mdi-table"></i><span>Tables</span><span className="menu-arrow fa fa-angle-down"></span></a>
									<ul className="sub-menu js__content">
										<li><a href="tables-basic.html">Basic Tables</a></li>
										<li><a href="tables-datatable.html">Data Tables</a></li>
										<li><a href="tables-responsive.html">Responsive Tables</a></li>
										<li><a href="tables-editable.html">Editable Tables</a></li>
									</ul>
								</li>
								<li>
									<a className="waves-effect parent-item js__control" href="#"><i className="menu-icon mdi mdi-book-multiple-variant"></i><span>Page</span><span className="menu-arrow fa fa-angle-down"></span></a>
									<ul className="sub-menu js__content">
										<li><a href="page-starter.html">Starter Page</a></li>
										<li><a href="page-login.html">Login</a></li>
										<li><a href="page-register.html">Register</a></li>
										<li><a href="page-recoverpw.html">Recover Password</a></li>
										<li><a href="page-lock-screen.html">Lock Screen</a></li>
										<li><a href="page-confirm-mail.html">Confirm Mail</a></li>
										<li><a href="page-404.html">Error 404</a></li>
										<li><a href="page-500.html">Error 500</a></li>
									</ul>
								</li>
								<li>
									<a className="waves-effect parent-item js__control" href="#"><i className="menu-icon mdi mdi-folder-multiple"></i><span>Extra Pages</span><span className="menu-arrow fa fa-angle-down"></span></a>
									<ul className="sub-menu js__content">
										<li><a href="extras-contact.html">Contact list</a></li>
										<li><a href="extras-email-template.html">Email template</a></li>
										<li><a href="extras-faq.html">FAQ</a></li>
										<li><a href="extras-gallery.html">Gallery</a></li>
										<li><a href="extras-invoice.html">Invoice</a></li>
										<li><a href="extras-maps.html">Maps</a></li>
										<li><a href="extras-pricing.html">Pricing</a></li>
										<li><a href="extras-projects.html">Projects</a></li>
										<li><a href="extras-taskboard.html">Taskboard</a></li>
										<li><a href="extras-timeline.html">Timeline</a></li>
										<li><a href="extras-tour.html">Tour</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="fixed-navbar">
					<div className="pull-left">
						<button type="button" className="menu-mobile-button glyphicon glyphicon-menu-hamburger js__menu_mobile"></button>
						<h1 className="page-title">Form Validation</h1>
					</div>
					<div className="pull-right">
						<div className="ico-item">
							<a href="#" className="ico-item fa fa-search js__toggle_open" data-target="#searchform-header"></a>
							<form action="#" id="searchform-header" className="searchform js__toggle"><input type="search" placeholder="Search..." className="input-search" /><button className="fa fa-search button-search" type="submit"></button></form>
						</div>
						<div className="ico-item fa fa-arrows-alt js__full_screen"></div>
						<div className="ico-item toggle-hover js__drop_down ">
							<span className="fa fa-th js__drop_down_button"></span>
							<div className="toggle-content">
								<ul>
									<li><a href="#"><i className="fa fa-github"></i><span className="txt">Github</span></a></li>
									<li><a href="#"><i className="fa fa-bitbucket"></i><span className="txt">Bitbucket</span></a></li>
									<li><a href="#"><i className="fa fa-slack"></i><span className="txt">Slack</span></a></li>
									<li><a href="#"><i className="fa fa-dribbble"></i><span className="txt">Dribbble</span></a></li>
									<li><a href="#"><i className="fa fa-amazon"></i><span className="txt">Amazon</span></a></li>
									<li><a href="#"><i className="fa fa-dropbox"></i><span className="txt">Dropbox</span></a></li>
								</ul>
								<a href="#" className="read-more">More</a>
							</div>
						</div>
						<a href="#" className="ico-item fa fa-envelope notice-alarm js__toggle_open" data-target="#message-popup"></a>
						<a href="#" className="ico-item pulse"><span className="ico-item fa fa-bell notice-alarm js__toggle_open" data-target="#notification-popup"></span></a>
						<div className="ico-item">
							<img src="http://placehold.it/80x80" alt="" className="ico-img" />
							<ul className="sub-ico-item">
								<li><a href="#">Settings</a></li>
								<li><a href="#">Blog</a></li>
								<li><a className="js__logout" href="#">Log Out</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div id="notification-popup" className="notice-popup js__toggle" data-space="50">
					<h2 className="popup-title">Your Notifications</h2>
					<div className="content">
						<ul className="notice-list">
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
									<span className="name">John Doe</span>
									<span className="desc">Like your post: “Contact Form 7 Multi-Step”</span>
									<span className="time">10 min</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
									<span className="name">Anna William</span>
									<span className="desc">Like your post: “Facebook Messenger”</span>
									<span className="time">15 min</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar bg-warning"><i className="fa fa-warning"></i></span>
									<span className="name">Update Status</span>
									<span className="desc">Failed to get available update data. To ensure the please contact us.</span>
									<span className="time">30 min</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
									<span className="name">Jennifer</span>
									<span className="desc">Like your post: “Contact Form 7 Multi-Step”</span>
									<span className="time">45 min</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
									<span className="name">Michael Zenaty</span>
									<span className="desc">Like your post: “Contact Form 7 Multi-Step”</span>
									<span className="time">50 min</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
									<span className="name">Simon</span>
									<span className="desc">Like your post: “Facebook Messenger”</span>
									<span className="time">1 hour</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar bg-violet"><i className="fa fa-flag"></i></span>
									<span className="name">Account Contact Change</span>
									<span className="desc">A contact detail associated with your account has been changed.</span>
									<span className="time">2 hours</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
									<span className="name">Helen 987</span>
									<span className="desc">Like your post: “Facebook Messenger”</span>
									<span className="time">Yesterday</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
									<span className="name">Denise Jenny</span>
									<span className="desc">Like your post: “Contact Form 7 Multi-Step”</span>
									<span className="time">Oct, 28</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
									<span className="name">Thomas William</span>
									<span className="desc">Like your post: “Facebook Messenger”</span>
									<span className="time">Oct, 27</span>
								</a>
							</li>
						</ul>
						<a href="#" className="notice-read-more">See more messages <i className="fa fa-angle-down"></i></a>
					</div>
				</div>

				<div id="message-popup" className="notice-popup js__toggle" data-space="50">
					<h2 className="popup-title">Recent Messages<a href="#" className="pull-right text-danger">New message</a></h2>
					<div className="content">
						<ul className="notice-list">
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
									<span className="name">John Doe</span>
									<span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
									<span className="time">10 min</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
									<span className="name">Harry Halen</span>
									<span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
									<span className="time">15 min</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
									<span className="name">Thomas Taylor</span>
									<span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
									<span className="time">30 min</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
									<span className="name">Jennifer</span>
									<span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
									<span className="time">45 min</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
									<span className="name">Helen Candy</span>
									<span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
									<span className="time">45 min</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
									<span className="name">Anna Cavan</span>
									<span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
									<span className="time">1 hour ago</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar bg-success"><i className="fa fa-user"></i></span>
									<span className="name">Jenny Betty</span>
									<span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
									<span className="time">1 day ago</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
									<span className="name">Denise Peterson</span>
									<span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
									<span className="time">1 year ago</span>
								</a>
							</li>
						</ul>
						<a href="#" className="notice-read-more">See more messages <i className="fa fa-angle-down"></i></a>
					</div>
				</div>
				</React.Fragment>
		)
	}
}

export default DashboardNavbar;