import * as React from "react";
import { Component } from "react";

class Footer extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
    render() {
    return (
        <footer className="clearfix footer--display">
            <nav className="xs-col-11 lg-col-9 xl-col-8 xs-mx-auto">
                <div className="clearfix">
                    <div className="col xs-col-12 sm-col-3">
                        <div className="footer__logo">
                            <a className="color-logo navbar-brand" href="/homepage">OnlineCustomizedPCStore</a>
                            <h1>
                                <ul>
                                    <li className="footer__headline-one">Pick Parts.</li>
                                    <li className="footer__headline-two">Build Your PC.</li>
                                    <li className="footer__headline-three">Compare And Share.</li>
                                </ul>
                            </h1>
                        </div>
                    </div>
                    <div className="col xs-col-12 sm-col-3">
                        <h2>Categories</h2>
                        <ul className="footer__main-nav">
                            <li><a href="/list/">System Builds</a></li>
                            <li><a href="/guide/">Build Guides</a></li>
                            <li><a href="/builds/">Completed Builds</a></li>
                            <li><a href="/products/">Browse Products</a></li>
                        </ul>
                    </div>
                    <div className="col xs-col-12 sm-col-3">
                        <h2>Information</h2>
                        <ul className="footer__secondary-nav">
                            <li><a href="/blog/">Blog</a></li>
                            <li><a href="/downloads/">Downloads</a></li>
                            <li><a href="/forums/">Forums</a></li>
                            <li><a href="/products/pricedrop/">Price Drops</a></li>
                            <li><a href="/trends/">Price Trends</a></li>
                        </ul>
                    </div>
                    <div className="col xs-col-12 sm-col-3">
                        <h2>Company</h2>
                        <ul className="footer__secondary-nav">
                            <li><a href="/about/">About</a></li>
                            <li><a href="/contact/">Contact &amp; Imprint</a></li>
                            <li><a href="/tos/">Terms of Service</a></li>
                            <li><a href="/code-of-conduct/">User Code of Conduct</a></li>
                            <li><a href="/code-of-conduct/industry-affiliate/">Industry Code of Conduct</a></li>
                            <li><a href="/privacy/">Privacy Policy</a></li>
                            <li><a href="/do-not-sell-my-personal-information/">Do Not Sell My Personal Information</a></li>
                            <li><a href="/disclosure/">Affiliate Disclosure</a></li>
                        </ul>
                    </div>
                </div>
                <div className="clearfix">
                    <div className="col xs-col-12">
                        <ul className="footer__social">
                            <li><a href="https://www.facebook.com/pcpartpicker/">
                                <svg className="icon shape-facebook">
                                    <use xlinkHref="#shape-facebook" />
                                </svg></a>
                            </li>
                            <li><a href="https://www.instagram.com/pcpartpicker/">
                                <svg className="icon shape-instagram">
                                    <use xlinkHref="#shape-instagram" />
                                </svg></a>
                            </li>
                            <li><a href="http://discord.gg/pcpartpicker">
                                <svg className="icon shape-discord">
                                    <use xlinkHref="#shape-discord" />
                                </svg></a>
                            </li>
                            <li><a href="https://www.twitter.com/pcpartpicker/">
                                <svg className="icon shape-twitter">
                                    <use xlinkHref="#shape-twitter" />
                                </svg></a>
                            </li>
                            <li><a href="https://www.twitch.tv/pcpartpicker">
                                <svg className="icon shape-twitch">
                                    <use xlinkHref="#shape-twitch" />
                                </svg></a>
                            </li>
                            <li><a href="https://www.youtube.com/pcpartpicker/">
                                <svg className="icon shape-search">
                                    <use xlinkHref="#shape-youtube" />
                                </svg></a>
                            </li>
                        </ul>
                    </div>
                    <div className="xs-col-12">
                        <p className="footer__copyright">
                            ©2020 OnlineCustomizedPCStore, LLC. All rights reserved.
              </p>
                    </div>
                </div>
            </nav>
        </footer>
    );
  }
}

export default Footer;
