import * as React from "react";
import { Component } from "react";

export default class HomePage extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
				<div className="dark-mode">
					<header className="masthead">
						<nav id="navigation" role="navigation">
							<div className="navDesktop">
								<section className="nav__top">
									<div className="nav__wrapper nav__wrapper--top xs-col-11 xs-mx-auto">
										<ul className="nav__logoWrapper list-unstyled">
											<li><a href="/" className="nav__logo"><img src="https://cdna.pcpartpicker.com/static/forever/img/pcpp-logo.svg" className="nav__logo--full" /></a></li>
										</ul>
										<ul className="nav__account nav__account--desktop list-unstyled">
											<li className="nav__account--login"><a href="/accounts/login/">Log In</a></li>
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
											<li className="nav__account--mode">
												<p className="modeSwitch__label">Light Mode</p>
												<div className="modeSwitch">
													<div className="modeSwitch__wrapper pp_toggle_theme">
														<div className="modeSwitch__toggle modeSwitch__toggle--dark-mode" />
													</div>
												</div>
											</li>
										</ul>
									</div>
								</section>
								<section className="nav__bottom">
									<div className="nav__wrapper nav__wrapper--bottom xs-col-11 xs-mx-auto">
										<ul className="nav__categories list-unstyled">
											<li className="nav__categories--partlist"><a href="/list/"><svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M23.85 7.87a6.39 6.39 0 0 1-1.79 3.31 6.54 6.54 0 0 1-6.93 1.5L4.58 23.22a2.57 2.57 0 0 1-1.89.78 2.64 2.64 0 0 1-1.91-.78 2.68 2.68 0 0 1-.78-1.9 2.71 2.71 0 0 1 .78-1.9L11.32 8.87a6.54 6.54 0 0 1 1.5-6.93A6.39 6.39 0 0 1 16.13.15a6.12 6.12 0 0 1 3.63.29l-4.1 4.1.4 3.4 3.4.4 4.1-4.1a6.12 6.12 0 0 1 .29 3.63z" data-name="Layer 1" /></g></svg>System Builder</a></li><li className="nav__categories--guides"><a href="/guide/"><svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 24"><g data-name="Layer 2"><path d="M12 0H0v24h18V6zm4 22H2v-2h3v-1H2v-2h5v-1H2v-2h3v-1H2v-2h5v-1H2V8h3V7H2V5h5V4H2V2h9v5h5z" data-name="Layer 1" /></g></svg>Build Guides</a></li><li className="nav__categories--builds"><a href="/builds/"><svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M19.08 1l-12-1H7a.62.62 0 0 0-.19 0h-.14l-.09.1-.13.07-.13.09L.45 4.17A1 1 0 0 0 0 5v17a1 1 0 0 0 .84 1l6 1H19a1 1 0 0 0 1-1V2a1 1 0 0 0-.92-1zM6 21.82l-4-.67V5.54l4-2.67zM18 22H8V2.09l10 .83z" /><circle cx={13} cy={18} r={1} /><path d="M17 4.6L9 4v2l8 .6v-2zM17 7.6L9 7v2l8 .6v-2z" /></g></g></svg>Completed Builds</a></li><li className="nav__categories--browseProducts js-trigger--browseProducts"><a href="#" className=""><svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M8 8h8v8H8z" /><path d="M24 9V7h-2V4a2 2 0 0 0-2-2h-3V0h-2v2h-2V0h-2v2H9V0H7v2H4a2 2 0 0 0-2 2v3H0v2h2v2H0v2h2v2H0v2h2v3a2 2 0 0 0 2 2h3v2h2v-2h2v2h2v-2h2v2h2v-2h3a2 2 0 0 0 2-2v-3h2v-2h-2v-2h2v-2h-2V9zm-4 11H4V4h16z" /></g></g></svg>Browse Products<span className="down-caret"><svg className="icon shape-dropdown-arrow"><use xlinkHref="#shape-dropdown-arrow" /></svg></span></a></li>
											<li className="nav__subLinks"><div className="nav__subLinks--group1"><a href="/products/pricedrop/" className="nav__categories--drops">Price Drops</a><a href="/forums/" className="nav__categories--forums">Forums</a></div><div className="nav__subLinks--group2"><a href="/trends/" className="nav__categories--trends">Price Trends</a><a href="/blog/" className="nav__categories--blog">Blog</a></div></li>
											<li>
												<div className="browseProducts browseProducts--hide">
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

					<section className="main-wrapper xs-col-12">
						<div id="homepage">
							<div className="wrapper wrapper__buildGuides">
								<section className="build-guides xs-col-11 lg-col-9 xl-col-8 xs-mx-auto">
									<div className="guides__info">
										<h1>Build Guides</h1>
										<p>Building your own PC and need ideas on where to get started? Explore our build guides which cover systems for a variety of use-cases and budgets.</p>
										<a href="/guide/" className="button">View the Build Guides</a>
									</div>
									<li className="guideGroup guideGroup__card">
										<a href="/guide/PB6MnQ/entry-level-amd-gaming-build" className="guideGroup__target" />
										<div className="guideGroup__content--wrapper1">
											<h1 className="guide__title">Entry Level AMD Gaming Build</h1>
											<ul className="guide__keyProducts list-unstyled">
												<li>AMD Ryzen 5 2600</li>
												<li>Parametric Video Card (Chipset: GeForce GTX 1650 SUPER)</li>
												<li>Cougar MX330 ATX Mid Tower</li>
											</ul>
										</div>
										<div className="guideGroup__content--wrapper2">
											<div className="guide__numbers">
												<p className="guide__price">
													$582.93
                    </p>
												<p className="guide__links"><span className="guide__link--comments"><svg className="icon shape-comment"><use xlinkHref="#shape-comment" /></svg>189</span></p>
											</div>
											<ul className="guide__images list-unstyled">
												<li className="guide__images--1"><img src="https://images-na.ssl-images-amazon.com/images/I/51N2BQA3cBL.jpg" /></li>
												<li className="guide__images--2"><img src="//cdna.pcpartpicker.com/static/forever/images/product/55aea2dd64e2e3a3e3b1d678048d8d76.256p.jpg" /></li>
												<li className="guide__images--3"><img src="https://m.media-amazon.com/images/I/41zgLYpzn1L.jpg" /></li>
											</ul>
										</div>
									</li>
									<li className="guideGroup guideGroup__card">
										<a href="/guide/s4V323/excellent-intel-gamingstreaming-build" className="guideGroup__target" />
										<div className="guideGroup__content--wrapper1">
											<h1 className="guide__title">Excellent Intel Gaming/Streaming Build</h1>
											<ul className="guide__keyProducts list-unstyled">
												<li>Intel Core i5-10600K</li>
												<li>Parametric Video Card (Chipset: GeForce RTX 3070)</li>
												<li>Corsair 4000D Airflow ATX Mid Tower</li>
											</ul>
										</div>
										<div className="guideGroup__content--wrapper2">
											<div className="guide__numbers">
												<p className="guide__price">
													$1312.54
                    </p>
												<p className="guide__links"><span className="guide__link--comments"><svg className="icon shape-comment"><use xlinkHref="#shape-comment" /></svg>63</span></p>
											</div>
											<ul className="guide__images list-unstyled">
												<li className="guide__images--1"><img src="//cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg" /></li>
												<li className="guide__images--2"><img src="//cdna.pcpartpicker.com/static/forever/images/product/cec5ee818776737baefc9603bdbf9391.256p.jpg" /></li>
												<li className="guide__images--3"><img src="//cdna.pcpartpicker.com/static/forever/images/product/200b4e048d11f6870e697e2693490cd3.256p.jpg" /></li>
											</ul>
										</div>
									</li>
								</section>
							</div>
							<div className="wrapper wrapper__completedBuilds">
								<section className="completed-builds xs-col-11 lg-col-9 xl-col-8 xs-mx-auto">
									<section className="module-subTitle">
										<div className="subTitle">
											<div className="subTitle__header">
												<h2>Completed Builds</h2>
											</div>
										</div>
									</section>
									<ul id="userbuild_list" className="logGrid list-unstyled">
										<li className="logGroup__card--featured">
											<div className="featured__message">
												<p>
													<svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M19.08 1l-12-1H7a.62.62 0 0 0-.19 0h-.14l-.09.1-.13.07-.13.09L.45 4.17A1 1 0 0 0 0 5v17a1 1 0 0 0 .84 1l6 1H19a1 1 0 0 0 1-1V2a1 1 0 0 0-.92-1zM6 21.82l-4-.67V5.54l4-2.67zM18 22H8V2.09l10 .83z" /><circle cx={13} cy={18} r={1} /><path d="M17 4.6L9 4v2l8 .6v-2zM17 7.6L9 7v2l8 .6v-2z" /></g></g></svg>
												</p>
												<h1>Featured Build</h1>
												<p>Congratulations <a href="/user/_Rip_/">_Rip_</a>!</p>
											</div>
											<div className="logGroup logGroup__card">
												<a href="/b/72BZxr" className="logGroup__target" />
												<div className="logGroup__content--wrapper1">
													<p className="log__author"><a href="/user/_Rip_/" className="userAvatar"><img src="//cdna.pcpartpicker.com/static/forever/images/user/3845343.42e1e783996dc1669c451b48858a5481.256c.jpg" /></a><a href="/user/_Rip_/">_Rip_</a></p>
													<a href="/b/72BZxr" className="log__image" style={{ backgroundImage: 'url(//cdna.pcpartpicker.com/static/forever/images/userbuild/331461.a4ad9c81e55c97936fc399a8725566f0.512.jpg)' }} />
													<h1 className="log__title"><a href="/b/72BZxr">Master Build - Corsair Obsidian 1000d</a></h1>
													<ul className="log__keyProducts list-unstyled">
														<li className="build__specs">AMD Threadripper 3960X</li>
														<li className="build__specs">GeForce RTX 2080 Ti (x2)</li>
													</ul>
												</div>
												<div className="logGroup__content--wrapper2">
													<div className="log__numbers">
														<p className="log__price">$19405.89+</p>
														<p className="log__links">
															<span className="log__link--followers">
																<svg className="icon shape-arrow-up"><use xlinkHref="#shape-arrow-up" /></svg>259
                          </span>
															<span className="log__link--comments">
																<svg className="icon shape-comment"><use xlinkHref="#shape-comment" /></svg>248
                          </span>
														</p>
													</div>
												</div>
											</div>
										</li>
										<li className="logGroup logGroup__card">
											<a href="/b/yRMcCJ" className="logGroup__target" />
											<div className="logGroup__content--wrapper1">
												<p className="log__author"><a href="/user/Soldr/" className="userAvatar"><img src="/static/img/default-avatar.png" /></a><a href="/user/Soldr/">Soldr</a></p>
												<a href="/b/yRMcCJ" className="log__image" style={{ backgroundImage: 'url(//cdna.pcpartpicker.com/static/forever/images/userbuild/334874.eee74d879b0b0054c6aacda77ba91c03.512.jpg)' }} />
												<h1 className="log__title"><a href="/b/yRMcCJ">My best build yet</a></h1>
												<ul className="log__keyProducts list-unstyled">
													<li className="build__specs">AMD Ryzen 7 3700X</li>
													<li className="build__specs">Radeon RX 580</li>
												</ul>
											</div>
											<div className="logGroup__content--wrapper2">
												<div className="log__numbers">
													<p className="log__price">$821.93+</p>
													<p className="log__links">
														<span className="log__link--followers">
															<svg className="icon shape-arrow-up"><use xlinkHref="#shape-arrow-up" /></svg>5
                        </span>
														<span className="log__link--comments">
															<svg className="icon shape-comment"><use xlinkHref="#shape-comment" /></svg>3
                        </span>
													</p>
												</div>
											</div>
										</li>
										<li className="logGroup logGroup__card">
											<a href="/b/nFp8TW" className="logGroup__target" />
											<div className="logGroup__content--wrapper1">
												<p className="log__author"><a href="/user/GaronAgrawal/" className="userAvatar"><img src="/static/img/default-avatar.png" /></a><a href="/user/GaronAgrawal/">GaronAgrawal</a></p>
												<a href="/b/nFp8TW" className="log__image" style={{ backgroundImage: 'url(//cdna.pcpartpicker.com/static/forever/images/userbuild/334864.83b5210a4855a7a4b40f581d9a8b8327.512.jpg)' }} />
												<h1 className="log__title"><a href="/b/nFp8TW">First Build</a></h1>
												<ul className="log__keyProducts list-unstyled">
													<li className="build__specs">AMD Ryzen 5 3600XT</li>
													<li className="build__specs">GeForce RTX 2060</li>
												</ul>
											</div>
											<div className="logGroup__content--wrapper2">
												<div className="log__numbers">
													<p className="log__price">$1279.27+</p>
													<p className="log__links">
														<span className="log__link--followers">
															<svg className="icon shape-arrow-up"><use xlinkHref="#shape-arrow-up" /></svg>4
                        </span>
														<span className="log__link--comments">
															<svg className="icon shape-comment"><use xlinkHref="#shape-comment" /></svg>6
                        </span>
													</p>
												</div>
											</div>
										</li>
										<li className="logGroup logGroup__card">
											<a href="/b/jKx6Mp" className="logGroup__target" />
											<div className="logGroup__content--wrapper1">
												<p className="log__author"><a href="/user/Crazydamias7/" className="userAvatar"><img src="/static/img/default-avatar.png" /></a><a href="/user/Crazydamias7/">Crazydamias7</a></p>
												<a href="/b/jKx6Mp" className="log__image" style={{ backgroundImage: 'url(//cdna.pcpartpicker.com/static/forever/images/userbuild/334856.5e7af080067b80c178babe8c1c5c04b2.512.jpg)' }} />
												<h1 className="log__title"><a href="/b/jKx6Mp">My Gaming PC</a></h1>
												<ul className="log__keyProducts list-unstyled">
													<li className="build__specs">Intel Core i5-7400</li>
													<li className="build__specs">GeForce GTX 1050 Ti</li>
												</ul>
											</div>
											<div className="logGroup__content--wrapper2">
												<div className="log__numbers">
													<p className="log__price">$1133.88+</p>
													<p className="log__links">
														<span className="log__link--followers">
															<svg className="icon shape-arrow-up"><use xlinkHref="#shape-arrow-up" /></svg>4
                        </span>
														<span className="log__link--comments">
															<svg className="icon shape-comment"><use xlinkHref="#shape-comment" /></svg>3
                        </span>
													</p>
												</div>
											</div>
										</li>
										<li className="logGroup logGroup__card">
											<a href="/b/6jskcf" className="logGroup__target" />
											<div className="logGroup__content--wrapper1">
												<p className="log__author"><a href="/user/NasTomkinson/" className="userAvatar"><img src="/static/img/default-avatar.png" /></a><a href="/user/NasTomkinson/">NasTomkinson</a></p>
												<a href="/b/6jskcf" className="log__image" style={{ backgroundImage: 'url(//cdna.pcpartpicker.com/static/forever/images/userbuild/334855.2c2a42468645676fc90e755996fd237f.512.jpg)' }} />
												<h1 className="log__title"><a href="/b/6jskcf">5800X + 6800XT Red Team build</a></h1>
												<ul className="log__keyProducts list-unstyled">
													<li className="build__specs">AMD Ryzen 7 5800X</li>
													<li className="build__specs">Radeon RX 6800 XT</li>
												</ul>
											</div>
											<div className="logGroup__content--wrapper2">
												<div className="log__numbers">
													<p className="log__price">$1008.39+</p>
													<p className="log__links">
														<span className="log__link--followers">
															<svg className="icon shape-arrow-up"><use xlinkHref="#shape-arrow-up" /></svg>11
                        </span>
														<span className="log__link--comments">
															<svg className="icon shape-comment"><use xlinkHref="#shape-comment" /></svg>6
                        </span>
													</p>
												</div>
											</div>
										</li>
										<li className="logGroup logGroup__card">
											<a href="/b/rhdmP6" className="logGroup__target" />
											<div className="logGroup__content--wrapper1">
												<p className="log__author"><a href="/user/czvczx/" className="userAvatar"><img src="/static/img/default-avatar.png" /></a><a href="/user/czvczx/">czvczx</a></p>
												<a href="/b/rhdmP6" className="log__image" style={{ backgroundImage: 'url(//cdna.pcpartpicker.com/static/forever/images/userbuild/334851.bc573305605e292d84d855144d1d14e1.512.jpg)' }} />
												<h1 className="log__title"><a href="/b/rhdmP6">2020 build</a></h1>
												<ul className="log__keyProducts list-unstyled">
													<li className="build__specs">AMD Ryzen 9 5900X</li>
													<li className="build__specs">GeForce RTX 3080</li>
												</ul>
											</div>
											<div className="logGroup__content--wrapper2">
												<div className="log__numbers">
													<p className="log__price">$3756.47+</p>
													<p className="log__links">
														<span className="log__link--followers">
															<svg className="icon shape-arrow-up"><use xlinkHref="#shape-arrow-up" /></svg>6
                        </span>
														<span className="log__link--comments">
															<svg className="icon shape-comment"><use xlinkHref="#shape-comment" /></svg>7
                        </span>
													</p>
												</div>
											</div>
										</li>
										<li className="logGroup__action">
											<p>
												<a href="/builds/" className="button">See All Completed Builds</a>
											</p>
										</li>
									</ul>
								</section>
							</div>
							<div className="wrapper wrapper__blogPosts">
								<section className="blog-posts xs-col-11 lg-col-9 xl-col-8 xs-mx-auto">
									<section className="module-subTitle">
										<div className="subTitle">
											<div className="subTitle__header">
												<h2>Blog</h2>
											</div>
										</div>
									</section>
									<ul className="blogGrid list-unstyled">
										<li className="blogGroup">
											<a href="/blog/163/charity-water-completion-report-13-14-15" className="blog__image">
												<img src="//cdna.pcpartpicker.com/static/forever/images/content/cefdf8c662bb641f1f699f08540f950b.800.450.jpg" />
												<h1 className="blog__title">charity: water Completion Reports #13, #14, #15</h1>
											</a>
											<p className="meta">Posted July 8, 2020 by <a href="/user/philip/">philip</a></p>
											<p>Three more <a href="https://charitywater.org">charity: water</a> completions report arrived! Thanks to your support, we were able to fund 9 water projects in Uganda, Ethiopia, and Nepal.</p>
											<a href="/blog/163/charity-water-completion-report-13-14-15#comments" className="blog__link--comments"><svg className="icon shape-comment"><use xlinkHref="#shape-comment" /></svg>14</a>
										</li>
										<li className="blogGroup">
											<a href="/blog/162/charity-water-completion-report-12" className="blog__image">
												<img src="//cdna.pcpartpicker.com/static/forever/images/content/8816657811058a2b0ec9c7caa53ef519.800.450.jpg" />
												<h1 className="blog__title">charity: water Completion Report #12</h1>
											</a>
											<p className="meta">Posted Dec. 25, 2019 by <a href="/user/philip/">philip</a></p>
											<p>Our twelfth <a href="https://charitywater.org">charity: water</a> completion report arrived! Thanks to your support, we were able to fund 14 water projects in the Maradi Region of Niger serving 6,062 people.</p>
											<a href="/blog/162/charity-water-completion-report-12#comments" className="blog__link--comments"><svg className="icon shape-comment"><use xlinkHref="#shape-comment" /></svg>25</a>
										</li>
										<li className="blogGroup">
											<a href="/blog/161/laptops-added-to-pcpartpicker" className="blog__image">
												<img src="//cdna.pcpartpicker.com/static/forever/images/content/d595291786238f15449d21458b1f229e.jpg" />
												<h1 className="blog__title">Laptops Added to PCPartPicker</h1>
											</a>
											<p className="meta">Posted Nov. 22, 2019 by <a href="/user/philip/">philip</a></p>
											<p>Today we're pleased to announce that PCPartPicker is now listing <a href="/products/laptop/">traditional and 2-in-1 laptops</a>.</p>
											<a href="/blog/161/laptops-added-to-pcpartpicker#comments" className="blog__link--comments"><svg className="icon shape-comment"><use xlinkHref="#shape-comment" /></svg>49</a>
										</li>
									</ul>
									<div className="blog__button"><a href="/blog/" className="button button--small">See More Blog Posts</a></div>
								</section>
							</div>
						</div>
					</section>
				</div>
			</>
		);
	}
}
