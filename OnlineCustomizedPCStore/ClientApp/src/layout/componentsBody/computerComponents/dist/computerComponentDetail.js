"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var ComputerComponentDetail = /** @class */ (function (_super) {
    __extends(ComputerComponentDetail, _super);
    function ComputerComponentDetail(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    ComputerComponentDetail.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "css-oy8cxd" },
            React.createElement("div", { className: "card-body css-0" },
                React.createElement("div", { className: "css-1sbsckd" },
                    React.createElement("div", { className: "css-16u6ie8" },
                        React.createElement("div", { className: "css-g73s75" },
                            React.createElement("picture", null,
                                React.createElement("source", { srcSet: this.props.item.url, type: "image/webp" }),
                                React.createElement("source", { srcSet: this.props.item.url, type: "image/png" }),
                                React.createElement("img", { className: "lazyload css-jdz5ak", alt: "", "data-src": this.props.item.url, src: this.props.item.url, loading: "lazy" })))),
                    React.createElement("div", { className: "css-1680iyu" },
                        React.createElement("div", null,
                            React.createElement("a", { href: "/bo-vi-xu-ly-cpu-intel-core-i79700-12m-cache-up-to-47ghz-s190900303.html", rel: "noreferrer noopener", target: "_blank", className: "css-587jha" },
                                React.createElement("div", { className: "css-1vrkwu6" }, this.props.item.name)),
                            React.createElement("span", { className: "css-k5lh0a" },
                                "SKU: ",
                                this.props.item.sku))),
                    React.createElement("div", { className: "css-114vf0c" },
                        React.createElement("div", { className: "css-iarkvp" },
                            React.createElement("div", { className: "css-nel2x3" },
                                React.createElement("span", { className: "css-wgeuy1" },
                                    this.props.item.price,
                                    React.createElement("span", { className: "css-1ul6wk9" }, "\u0111")),
                                React.createElement("div", { className: "css-1vptl7o" },
                                    React.createElement("span", { className: "css-1lypflo" },
                                        "9.190.000",
                                        React.createElement("span", { className: "css-1ul6wk9" }, "\u0111")))))),
                    React.createElement("div", { className: "css-16u6ie8" },
                        React.createElement("button", { className: "css-7ivzg6", onClick: function () { _this.props.handleChangeStatus(); _this.props.ShowPopup(); _this.props.ResetQuantity(); _this.props.TotalPrice(); } }, "Ch\u1ECDn"))))));
    };
    return ComputerComponentDetail;
}(react_1.Component));
exports["default"] = ComputerComponentDetail;
