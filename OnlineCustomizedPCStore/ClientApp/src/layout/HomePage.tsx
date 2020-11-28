import * as React from "react";
import { Component } from "react";

export default class HomePage extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div className={this.props.themeMode ? "dark-mode" : "light-mode"}>
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
		);
	}
}
