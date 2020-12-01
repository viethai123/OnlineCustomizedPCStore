"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Footer.prototype.render = function () {
        return (React.createElement("footer", { className: "clearfix footer--display" },
            React.createElement("nav", { className: "xs-col-11 lg-col-9 xl-col-8 xs-mx-auto" },
                React.createElement("div", { className: "clearfix" },
                    React.createElement("div", { className: "col xs-col-12 sm-col-3" },
                        React.createElement("div", { className: "footer__logo" },
                            React.createElement("a", { className: "color-logo navbar-brand", href: "/homepage" }, "OnlineCustomizedPCStore"),
                            React.createElement("h1", null,
                                React.createElement("ul", null,
                                    React.createElement("li", { className: "footer__headline-one" }, "Pick Parts."),
                                    React.createElement("li", { className: "footer__headline-two" }, "Build Your PC."),
                                    React.createElement("li", { className: "footer__headline-three" }, "Compare And Share."))))),
                    React.createElement("div", { className: "col xs-col-12 sm-col-3" },
                        React.createElement("h2", null, "Categories"),
                        React.createElement("ul", { className: "footer__main-nav" },
                            React.createElement("li", null,
                                React.createElement("a", { href: "/list/" }, "System Builds")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/guide/" }, "Build Guides")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/builds/" }, "Completed Builds")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/products/" }, "Browse Products")))),
                    React.createElement("div", { className: "col xs-col-12 sm-col-3" },
                        React.createElement("h2", null, "Information"),
                        React.createElement("ul", { className: "footer__secondary-nav" },
                            React.createElement("li", null,
                                React.createElement("a", { href: "/blog/" }, "Blog")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/downloads/" }, "Downloads")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/forums/" }, "Forums")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/products/pricedrop/" }, "Price Drops")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/trends/" }, "Price Trends")))),
                    React.createElement("div", { className: "col xs-col-12 sm-col-3" },
                        React.createElement("h2", null, "Company"),
                        React.createElement("ul", { className: "footer__secondary-nav" },
                            React.createElement("li", null,
                                React.createElement("a", { href: "/about/" }, "About")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/contact/" }, "Contact & Imprint")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/tos/" }, "Terms of Service")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/code-of-conduct/" }, "User Code of Conduct")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/code-of-conduct/industry-affiliate/" }, "Industry Code of Conduct")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/privacy/" }, "Privacy Policy")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/do-not-sell-my-personal-information/" }, "Do Not Sell My Personal Information")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/disclosure/" }, "Affiliate Disclosure"))))),
                React.createElement("div", { className: "clearfix" },
                    React.createElement("div", { className: "col xs-col-12" },
                        React.createElement("ul", { className: "footer__social" },
                            React.createElement("li", null,
                                React.createElement("a", { href: "https://www.facebook.com/pcpartpicker/" },
                                    React.createElement("svg", { className: "icon shape-facebook" },
                                        React.createElement("use", { xlinkHref: "#shape-facebook" })))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "https://www.instagram.com/pcpartpicker/" },
                                    React.createElement("svg", { className: "icon shape-instagram" },
                                        React.createElement("use", { xlinkHref: "#shape-instagram" })))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "http://discord.gg/pcpartpicker" },
                                    React.createElement("svg", { className: "icon shape-discord" },
                                        React.createElement("use", { xlinkHref: "#shape-discord" })))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "https://www.twitter.com/pcpartpicker/" },
                                    React.createElement("svg", { className: "icon shape-twitter" },
                                        React.createElement("use", { xlinkHref: "#shape-twitter" })))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "https://www.twitch.tv/pcpartpicker" },
                                    React.createElement("svg", { className: "icon shape-twitch" },
                                        React.createElement("use", { xlinkHref: "#shape-twitch" })))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "https://www.youtube.com/pcpartpicker/" },
                                    React.createElement("svg", { className: "icon shape-search" },
                                        React.createElement("use", { xlinkHref: "#shape-youtube" })))))),
                    React.createElement("div", { className: "xs-col-12" },
                        React.createElement("p", { className: "footer__copyright" }, "\u00A92020 OnlineCustomizedPCStore, LLC. All rights reserved."))))));
    };
    return Footer;
}(react_1.Component));
exports.default = Footer;
//# sourceMappingURL=footer.js.map