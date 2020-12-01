import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import UserProfile from '../layout/LoginPage/UserProfile';
import Cookies from 'js-cookie';

export class NavMenu extends Component {
	static displayName = NavMenu.name;

	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true,
			user: Cookies.get('user')
		};
	}

	componentDidMount() {
		const script = document.createElement("script");
		script.src = "../script.js";
		script.async = true;
		document.body.appendChild(script);
	}

	toggleNavbar() {
		var collapsed = this.state.collapsed;
		this.setState({
			collapsed: !collapsed
		});
		console.log(collapsed);
	}

	handleLogOutClick() {
		//this.props.handleLogOut();
		console.log("handleLogOut");
	}

	render() {
		return (
			//<header>
			//	<Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
			//		<Container>
			//			<NavbarBrand tag={Link} to="/">OnlineCustomizedPCStore</NavbarBrand>
			//			<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
			//			<Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
			//				<ul className="navbar-nav flex-grow">
			//					<NavItem>
			//						<NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
			//					</NavItem>
			//					<NavItem>
			//						<NavLink tag={Link} className="text-dark" to="/homepage">HomePage</NavLink>
			//					</NavItem>
			//					<NavItem>
			//						<NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
			//					</NavItem>
			//					<NavItem>
			//						<NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
			//					</NavItem>
			//					<NavItem>
			//						<NavLink tag={Link} className="text-dark" to="/home">CustomizedPCs</NavLink>
			//					</NavItem>
			//					<NavItem>
			//						<NavLink tag={Link} className="text-dark" to="/cart">Cart</NavLink>
			//					</NavItem>
			//					{this.props.loggedInStatus == "NOT_LOGGED_IN" && this.state.user == null ?
			//						<NavItem>
			//							<NavLink tag={Link} className="text-dark" to="/LoginPage">User Log In</NavLink>
			//						</NavItem> :
			//						<NavItem>
			//							<NavLink className="text-dark">
			//								<UserProfile
			//									loggedInStatus={this.props.loggedInStatus}
			//									user={this.props.user}
			//									handleLogOut={this.props.handleLogOut}
			//								/>
			//							</NavLink>
			//						</NavItem>
			//					}
			//				</ul>
			//			</Collapse>
			//		</Container>
			//	</Navbar>
			//</header>

			<div className={this.props.themeMode ? "dark-mode" : "light-mode"}>
				<header className="masthead">
					<nav id="navigation" role="navigation">
						<div className="navDesktop">
							<section className="nav__top">
								<div className="nav__wrapper nav__wrapper--top xs-col-11 xs-mx-auto">
									<NavbarBrand tag={Link} to="/homepage">OnlineCustomizedPCStore</NavbarBrand>
									<ul className="nav__account nav__account--desktop list-unstyled">
										<li className="nav__account--login">{this.props.loggedInStatus == "NOT_LOGGED_IN" && this.state.user == null ?
											<NavItem>
												<NavLink tag={Link} className="text-light" to="/login">User Log In</NavLink>
											</NavItem> :
											<NavItem>
												<NavLink className="text-light">
													<UserProfile
														loggedInStatus={this.props.loggedInStatus}
														user={this.props.user}
														handleLogOut={this.props.handleLogOut}
													/>
												</NavLink>
											</NavItem>
										}</li>
										<li className="nav__account--register"><a href="/accounts/register/" id="js-trigger--profileMobile">Register</a></li>
										<li className="nav__account--country">
											<select className="select select--small language-selector pp-country-select" name="cc">
												<option value="ar">Argentina</option>
												<option value="au">Australia</option>
												<option value="bh">Bahrain</option>
												<option value="be">Belgium</option>
												<option value="br">Brazil</option>
												<option value="ca">Canada</option>
												<option value="dk">Denmark</option>
												<option value="fi">Finland</option>
												<option value="fr">France</option>
												<option value="de">Germany</option>
												<option value="hk">Hong Kong</option>
												<option value="in">India</option>
												<option value="ie">Ireland</option>
												<option value="il">Israel</option>
												<option value="it">Italy</option>
												<option value="jp">Japan</option>
												<option value="kw">Kuwait</option>
												<option value="mx">Mexico</option>
												<option value="nl">Netherlands</option>
												<option value="nz">New Zealand</option>
												<option value="no">Norway</option>
												<option value="om">Oman</option>
												<option value="ph">Philippines</option>
												<option value="pl">Poland</option>
												<option value="pt">Portugal</option>
												<option value="qa">Qatar</option>
												<option value="ro">Romania</option>
												<option value="sa">Saudi Arabia</option>
												<option value="sg">Singapore</option>
												<option value="kr">South Korea</option>
												<option value="es">Spain</option>
												<option value="se">Sweden</option>
												<option value="th">Thailand</option>
												<option value="tr">Turkey</option>
												<option value="ae">United Arab Emirates</option>
												<option value="uk">United Kingdom</option>
												<option value="us">United States</option>
											</select>
											<span className="flag-icon flag-us" />
										</li>
										<li className="nav__account--mode" onClick={() => {this.props.ChangeColorMode()}}>
											<p className="modeSwitch__label">Light Mode</p>
											<div className="modeSwitch">
												<div className="modeSwitch__wrapper pp_toggle_theme">
													<div className={this.props.themeMode ? "modeSwitch__toggle modeSwitch__toggle--dark-mode" : "modeSwitch__toggle modeSwitch__toggle--light-mode"} />
												</div>
											</div>
										</li>
									</ul>
								</div>
							</section>
							<section className="nav__bottom">
								<div className="nav__wrapper nav__wrapper--bottom xs-col-11 xs-mx-auto">
									<ul className="nav__categories list-unstyled">
										<li className="nav__categories--partlist">
											<NavLink tag={Link} to="/home"><svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M23.85 7.87a6.39 6.39 0 0 1-1.79 3.31 6.54 6.54 0 0 1-6.93 1.5L4.58 23.22a2.57 2.57 0 0 1-1.89.78 2.64 2.64 0 0 1-1.91-.78 2.68 2.68 0 0 1-.78-1.9 2.71 2.71 0 0 1 .78-1.9L11.32 8.87a6.54 6.54 0 0 1 1.5-6.93A6.39 6.39 0 0 1 16.13.15a6.12 6.12 0 0 1 3.63.29l-4.1 4.1.4 3.4 3.4.4 4.1-4.1a6.12 6.12 0 0 1 .29 3.63z" data-name="Layer 1" /></g></svg>System Builder</NavLink>
										</li>
										<li className="nav__categories--guides"><a href="/guide/"><svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 24"><g data-name="Layer 2"><path d="M12 0H0v24h18V6zm4 22H2v-2h3v-1H2v-2h5v-1H2v-2h3v-1H2v-2h5v-1H2V8h3V7H2V5h5V4H2V2h9v5h5z" data-name="Layer 1" /></g></svg>Build Guides</a>
										</li>
										<li className="nav__categories--builds">
											<NavLink tag={Link} to="/completed-build"><svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M19.08 1l-12-1H7a.62.62 0 0 0-.19 0h-.14l-.09.1-.13.07-.13.09L.45 4.17A1 1 0 0 0 0 5v17a1 1 0 0 0 .84 1l6 1H19a1 1 0 0 0 1-1V2a1 1 0 0 0-.92-1zM6 21.82l-4-.67V5.54l4-2.67zM18 22H8V2.09l10 .83z" /><circle cx={13} cy={18} r={1} /><path d="M17 4.6L9 4v2l8 .6v-2zM17 7.6L9 7v2l8 .6v-2z" /></g></g></svg>Completed Builds</NavLink>
										</li>
										<li className="nav__categories--browseProducts js-trigger--browseProducts">
											<NavLink tag={Link} to="/browseProducts">
												<svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
													<g data-name="Layer 2">
														<g data-name="Layer 1">
															<path d="M8 8h8v8H8z" />
															<path d="M24 9V7h-2V4a2 2 0 0 0-2-2h-3V0h-2v2h-2V0h-2v2H9V0H7v2H4a2 2 0 0 0-2 2v3H0v2h2v2H0v2h2v2H0v2h2v3a2 2 0 0 0 2 2h3v2h2v-2h2v2h2v-2h2v2h2v-2h3a2 2 0 0 0 2-2v-3h2v-2h-2v-2h2v-2h-2V9zm-4 11H4V4h16z" />
														</g>
													</g>
												</svg>Browse Products
												<span className="down-caret" onClick={this.toggleNavbar}>
													<svg className="icon shape-dropdown-arrow">
														<use xlinkHref="#shape-dropdown-arrow" />
													</svg>
												</span>
											</NavLink>
										</li>
										<li className="nav__subLinks"><div className="nav__subLinks--group1"><a href="/cart" className="nav__categories--drops">Cart</a><a href="/forums/" className="nav__categories--forums">Forums</a></div><div className="nav__subLinks--group2"><a href="/trends/" className="nav__categories--trends">Price Trends</a><a href="/blog/" className="nav__categories--blog">Blog</a></div></li>
										<li>
											<div className={this.state.collapsed ? "browseProducts browseProducts--hide" : "browseProducts"}>
												<div className="browseProducts__wrapper xs-col-11 xs-mx-auto">
													<div className="browseProducts__block--group1">
														<ul className="browseProducts__block--popular list-unstyled">
															<li><a href="/products/cpu/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-cpu.png" alt="CPU" />CPU</a></li>
															<li><a href="/products/cpu-cooler/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-cpucooler.png" alt="CPU Cooler" />CPU Cooler</a></li>
															<li><a href="/products/motherboard/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-motherboard.png" alt="Motherboard" />Motherboard</a></li>
															<li><a href="/products/memory/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-memory.png" alt="Memory" />Memory</a></li>
															<li><a href="/products/internal-hard-drive/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-ssd.png" alt="Storage" />Storage</a></li>
															<li><a href="/products/video-card/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-videocard.png" alt="Video Card" />Video Card</a></li>
															<li><a href="/products/power-supply/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-powersupply.png" alt="Power Supply" />Power Supply</a></li>
															<li><a href="/products/case/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-case.png" alt="Case" />Case</a></li>
														</ul>
													</div>
												</div>
											</div>
										</li>
									</ul>
									<a className="nav__search js-trigger-offCanvas--search" href="#"><svg className="icon shape-search"><use xlinkHref="#shape-search" /></svg></a>
								</div>
							</section>
						</div>
						<div className="navMobile xs-py1 xs-px2">
							<div className="nav__wrapper">
								<ul className="nav__logoWrapper list-unstyled">
									<li><a href="#" className="nav__back"><svg className="icon shape-dropdown-arrow"><use xlinkHref="#shape-dropdown-arrow" /></svg></a></li>
									<li><a href="/" className="nav__logo"><img src="/static/img/pcpp-icon.svg" className="nav__logo--icon" /></a></li>
								</ul>
								<ul className="nav__menu--mobile list-unstyled">
									<li className="nav-icon nav-icon--builder"><a className="" href="/list"><svg className="icon shape-wrench"><use xlinkHref="#shape-wrench" /></svg></a></li>
									<li className="nav-icon nav-icon--parts js-trigger--browseProducts"><a className="" href="#"><svg className="icon shape-cpu"><use xlinkHref="#shape-cpu" /></svg></a></li>
									<li className="nav-icon nav-icon--search"><a className="js-trigger-offCanvas--search" href="#"><svg className="icon shape-search"><use xlinkHref="#shape-search" /></svg></a></li>
									<li className="nav-divider" />
									<li className="nav-icon nav-icon--account"><a href="#" className="js-trigger--accountMobile"><svg className="icon shape-user"><use xlinkHref="#shape-user" /></svg></a></li>
									<li className="nav-icon nav-icon--resources"><a href="#" className="js-trigger--resourcesMobile"><svg className="icon shape-menu"><use xlinkHref="#shape-menu" /></svg></a></li>
								</ul>
							</div>
						</div>
						<div className="navCard navCard--search">
							<div className="navCard__header">
								<div className="navCard__wrapper">
									<a href="#" className="nav__back js-trigger--close"><svg className="icon shape-dropdown-arrow"><use xlinkHref="#shape-dropdown-arrow" /></svg></a>
									<h6 className="navCard__title"><svg className="icon shape-search"><use xlinkHref="#shape-search" /></svg><span>Search Products</span></h6>
								</div>
							</div>
							<div className="navCard__content">
								<div className="md-col-11 xs-mx-auto xs-py3 xs-px2 md-px0">
									<div className="searchField">
										<form id="site_search_nav" action="/search/" method="get">
											<input id="search_q" name="q" type="text" className="text-input inactive_search" placeholder="Search..." />
											<button className="button button--primary xs-col-12" /*onclick="$('#site_search_nav').submit();return false;"*/>Search</button>
										</form>
									</div>
									<div className="navSearch__content">
										<div className="navSearch__wrapper">
											<section className="" id="search_result">
												<div className="search_results" />
											</section>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="navCard navCard--products">
							<div className="navCard__header">
								<div className="navCard__wrapper">
									<a href="#" className="nav__back js-trigger--close"><svg className="icon shape-dropdown-arrow"><use xlinkHref="#shape-dropdown-arrow" /></svg></a>
									<h6 className="navCard__title"><svg className="icon shape-cpu"><use xlinkHref="#shape-cpu" /></svg><span>Browse Products</span></h6>
								</div>
							</div>
							<div className="navCard__content">
								<div className="navCard__wrapper">
									<div className="browseProducts browseProducts--hide">
										<div className="browseProducts__block--group1">
											<ul className="browseProducts__block--popular list-unstyled">
												<li><a href="/products/cpu/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-cpu.png" alt="CPU" />CPU</a></li>
												<li><a href="/products/cpu-cooler/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-cpucooler.png" alt="CPU Cooler" />CPU Cooler</a></li>
												<li><a href="/products/motherboard/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-motherboard.png" alt="Motherboard" />Motherboard</a></li>
												<li><a href="/products/memory/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-memory.png" alt="Memory" />Memory</a></li>
												<li><a href="/products/internal-hard-drive/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-ssd.png" alt="Storage" />Storage</a></li>
												<li><a href="/products/video-card/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-videocard.png" alt="Video Card" />Video Card</a></li>
												<li><a href="/products/power-supply/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-powersupply.png" alt="Power Supply" />Power Supply</a></li>
												<li><a href="/products/case/"><img src="//cdna.pcpartpicker.com/static/forever/img/nav-case.png" alt="Case" />Case</a></li>
											</ul>
										</div>
										<div className="browseProducts__block--group2">
											<div className="browseProducts__col1">
												<ul className="browseProducts__block--cooling list-unstyled">
													<li><h2>Cooling</h2></li>
													<li><a href="/products/case-fan/">Case Fans</a></li>
													<li><a href="/products/fan-controller/">Fan Controllers</a></li>
													<li><a href="/products/thermal-paste/">Thermal Compound</a></li>
												</ul>
												<ul className="browseProducts__block--drives list-unstyled">
													<li><h2>Drives</h2></li>
													<li><a href="/products/optical-drive/">Optical Drives</a></li>
												</ul>
												<ul className="browseProducts__block--expansion list-unstyled">
													<li><h2>Expansion</h2></li>
													<li><a href="/products/sound-card/">Sound Cards</a></li>
													<li><a href="/products/wired-network-card/">Wired Networking</a></li>
													<li><a href="/products/wireless-network-card/">Wireless Networking</a></li>
												</ul>
											</div>
											<div className="browseProducts__col2">
												<ul className="browseProducts__block--displays list-unstyled">
													<li><h2>Displays</h2></li>
													<li><a href="/products/monitor/">Monitors</a></li>
												</ul>
												<ul className="browseProducts__block--externalStorage list-unstyled">
													<li><h2>External Storage</h2></li>
													<li><a href="/products/external-hard-drive/">External Hard Drives</a></li>
												</ul>
												<ul className="browseProducts__block--peripherals list-unstyled">
													<li><h2>Peripherals</h2></li>
													<li><a href="/products/headphones/">Headphones</a></li>
													<li><a href="/products/keyboard/">Keyboards</a></li>
													<li><a href="/products/mouse/">Mice</a></li>
													<li><a href="/products/speakers/">Speakers</a></li>
													<li><a href="/products/ups/">Uninterruptible Power Supplies</a></li>
													<li><a href="/products/webcam/">Webcams</a></li>
												</ul>
											</div>
											<div className="browseProducts__col3">
												<ul className="browseProducts__block--software list-unstyled">
													<li><h2>Software</h2></li>
													<li><a href="/products/software/#W=1">Antivirus</a></li>
													<li><a href="/products/software/#W=8">Audio &amp; Video</a></li>
													<li><a href="/products/software/#W=2">Backup</a></li>
													<li><a href="/products/software/#W=3">Design &amp; Illustration</a></li>
													<li><a href="/products/software/#W=5">Internet Security</a></li>
													<li><a href="/products/software/#W=7">Office &amp; Productivity</a></li>
													<li><a href="/products/os/">Operating Systems</a></li>
													<li><a href="/products/software/#W=6">Photography</a></li>
												</ul>
												<ul className="browseProducts__block--software list-unstyled">
													<li><h2>Other</h2></li>
													<li><a href="/products/laptop/">Laptops</a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="navCard navCard--account">
							<div className="navCard__header">
								<div className="navCard__wrapper">
									<a href="#" className="nav__back js-trigger--close"><svg className="icon shape-dropdown-arrow"><use xlinkHref="#shape-dropdown-arrow" /></svg></a>
									<h6 className="navCard__title"><svg className="icon shape-user"><use xlinkHref="#shape-user" /></svg><span>Account</span></h6>
								</div>
							</div>
							<div className="navCard__content">
								<div className="navCard__wrapper">
									<ul className="nav__account nav__account--mobile list-unstyled">
										<li className="nav__account--country">
											<select className="select select--small language-selector pp-country-select" name="cc">
												<option value="ar">Argentina</option>
												<option value="au">Australia</option>
												<option value="bh">Bahrain</option>
												<option value="be">Belgium</option>
												<option value="br">Brazil</option>
												<option value="ca">Canada</option>
												<option value="dk">Denmark</option>
												<option value="fi">Finland</option>
												<option value="fr">France</option>
												<option value="de">Germany</option>
												<option value="hk">Hong Kong</option>
												<option value="in">India</option>
												<option value="ie">Ireland</option>
												<option value="il">Israel</option>
												<option value="it">Italy</option>
												<option value="jp">Japan</option>
												<option value="kw">Kuwait</option>
												<option value="mx">Mexico</option>
												<option value="nl">Netherlands</option>
												<option value="nz">New Zealand</option>
												<option value="no">Norway</option>
												<option value="om">Oman</option>
												<option value="ph">Philippines</option>
												<option value="pl">Poland</option>
												<option value="pt">Portugal</option>
												<option value="qa">Qatar</option>
												<option value="ro">Romania</option>
												<option value="sa">Saudi Arabia</option>
												<option value="sg">Singapore</option>
												<option value="kr">South Korea</option>
												<option value="es">Spain</option>
												<option value="se">Sweden</option>
												<option value="th">Thailand</option>
												<option value="tr">Turkey</option>
												<option value="ae">United Arab Emirates</option>
												<option value="uk">United Kingdom</option>
												<option value="us">United States</option>
											</select>
											<span className="flag-icon flag-us" />
										</li>
										<li className="nav__account--mode">
											<p className="modeSwitch__label">Light Mode</p>
											<div className="modeSwitch">
												<div className="modeSwitch__wrapper pp_toggle_theme">
													<div className="modeSwitch__toggle modeSwitch__toggle--dark-mode" />
												</div>
											</div>
										</li>
										<li className="nav__account--login"><a href="/accounts/login/">Log In</a></li>
										<li className="nav__account--register"><a href="/accounts/register/" id="js-trigger--profileMobile">Register</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="navCard navCard--resources">
							<div className="navCard__header">
								<div className="navCard__wrapper">
									<a href="#" className="nav__back js-trigger--close"><svg className="icon shape-dropdown-arrow"><use xlinkHref="#shape-dropdown-arrow" /></svg></a>
									<h6 className="navCard__title"><svg className="icon shape-menu"><use xlinkHref="#shape-menu" /></svg><span>Resources</span></h6>
								</div>
							</div>
							<div className="navCard__content">
								<div className="navCard__wrapper">
									<ul className="list-unstyled">
										<li className="nav__categories--guides"><a href="/guide/"><svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 24"><g data-name="Layer 2"><path d="M12 0H0v24h18V6zm4 22H2v-2h3v-1H2v-2h5v-1H2v-2h3v-1H2v-2h5v-1H2V8h3V7H2V5h5V4H2V2h9v5h5z" data-name="Layer 1" /></g></svg>Build Guides</a></li>
										<li className="nav__categories--builds"><a href="/builds/"><svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M19.08 1l-12-1H7a.62.62 0 0 0-.19 0h-.14l-.09.1-.13.07-.13.09L.45 4.17A1 1 0 0 0 0 5v17a1 1 0 0 0 .84 1l6 1H19a1 1 0 0 0 1-1V2a1 1 0 0 0-.92-1zM6 21.82l-4-.67V5.54l4-2.67zM18 22H8V2.09l10 .83z" /><circle cx={13} cy={18} r={1} /><path d="M17 4.6L9 4v2l8 .6v-2zM17 7.6L9 7v2l8 .6v-2z" /></g></g></svg>Completed Builds</a></li>
										<li className="nav__categories--drops"><a href="/products/pricedrop/">Price Drops</a></li>
										<li className="nav__categories--forums"><a href="/forums/">Forums</a></li>
										<li className="nav__categories--trends"><a href="/trends/">Price Trends</a></li>
										<li className="nav__categories--blog"><a href="/blog/">Blog</a></li>
									</ul>
								</div>
							</div>
						</div>
					</nav>
				</header>
			</div>
		);
	}
}
