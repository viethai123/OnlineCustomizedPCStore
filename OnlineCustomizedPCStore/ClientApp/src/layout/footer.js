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
        return (React.createElement("div", { className: "footer" },
            React.createElement("footer", { className: "pt-4 bg-dark text-light" },
                React.createElement("div", { className: "container text-center text-md-left" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-4 mx-auto" },
                            React.createElement("h5", { className: "font-weight-bold text-uppercase mt-3 mb-4" }, "Footer Content"),
                            React.createElement("p", null, "Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),
                        React.createElement("hr", { className: "clearfix w-100 d-md-none" }),
                        React.createElement("div", { className: "col-md-2 mx-auto" },
                            React.createElement("h5", { className: "font-weight-bold text-uppercase mt-3 mb-4" }, "Links"),
                            React.createElement("ul", { className: "list-unstyled" },
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#!" }, "Link 1")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#!" }, "Link 2")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#!" }, "Link 3")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#!" }, "Link 4")))),
                        React.createElement("hr", { className: "clearfix w-100 d-md-none" }),
                        React.createElement("div", { className: "col-md-2 mx-auto" },
                            React.createElement("h5", { className: "font-weight-bold text-uppercase mt-3 mb-4" }, "Links"),
                            React.createElement("ul", { className: "list-unstyled" },
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#!" }, "Link 1")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#!" }, "Link 2")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#!" }, "Link 3")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#!" }, "Link 4")))),
                        React.createElement("hr", { className: "clearfix w-100 d-md-none" }),
                        React.createElement("div", { className: "col-md-2 mx-auto" },
                            React.createElement("h5", { className: "font-weight-bold text-uppercase mt-3 mb-4" }, "Links"),
                            React.createElement("ul", { className: "list-unstyled" },
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#!" }, "Link 1")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#!" }, "Link 2")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#!" }, "Link 3")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#!" }, "Link 4")))))),
                React.createElement("hr", null),
                React.createElement("ul", { className: "list-unstyled list-inline text-center py-2" },
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("h5", { className: "mb-1" }, "Register for free")),
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("a", { href: "#!", className: "btn btn-danger btn-rounded" }, "Sign up!"))),
                React.createElement("hr", null),
                React.createElement("ul", { className: "list-unstyled list-inline text-center" },
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("a", { href: "#section", className: "btn-floating btn-fb mx-1" },
                            React.createElement("i", { className: "fab fa-facebook-f" }, " "))),
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("a", { href: "#section", className: "btn-floating btn-tw mx-1" },
                            React.createElement("i", { className: "fab fa-twitter" }, " "))),
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("a", { href: "#section", className: "btn-floating btn-gplus mx-1" },
                            React.createElement("i", { className: "fab fa-google-plus-g" }, " "))),
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("a", { href: "#section", className: "btn-floating btn-li mx-1" },
                            React.createElement("i", { className: "fab fa-linkedin-in" }, " "))),
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("a", { href: "#section", className: "btn-floating btn-dribbble mx-1" },
                            React.createElement("i", { className: "fab fa-dribbble" }, " ")))),
                React.createElement("div", { className: "footer-copyright text-center py-3" },
                    "\u00A9 2020 Copyright:",
                    React.createElement("a", { href: "https://mdbootstrap.com/" }, " laptop store 4.0")))));
    };
    return Footer;
}(react_1.Component));
exports.default = Footer;
//# sourceMappingURL=footer.js.map