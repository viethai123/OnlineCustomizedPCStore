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
var BuildComponent = /** @class */ (function (_super) {
    __extends(BuildComponent, _super);
    function BuildComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    BuildComponent.prototype.render = function () {
        var _this = this;
        var item = this.props.item;
        console.log(item);
        var ImageProduct = item.imageProduct;
        return (React.createElement("li", { className: "logGroup logGroup__card", onClick: function () { _this.props.ChooseCompletedBuild(); _this.props.UpdateOptionUser(); } },
            React.createElement("a", { href: "/home", className: "logGroup__target" }),
            React.createElement("div", { className: "logGroup__content--wrapper1" },
                React.createElement("p", { className: "log__author" },
                    React.createElement("a", { href: "#", className: "userAvatar" },
                        React.createElement("img", { src: item.avatar })),
                    React.createElement("a", { href: "#" }, item.name)),
                React.createElement("a", { href: "/home", className: "log__image", style: { backgroundImage: "url(" + ImageProduct + ")" } }),
                React.createElement("h1", { className: "log__title" },
                    React.createElement("a", { href: "/home" }, item.title)),
                React.createElement("ul", { className: "log__keyProducts list-unstyled" },
                    React.createElement("li", { className: "build__specs" }, item.processorSku),
                    React.createElement("li", { className: "build__specs" }, item.vgaSku))),
            React.createElement("div", { className: "logGroup__content--wrapper2" },
                React.createElement("div", { className: "log__numbers" },
                    React.createElement("p", { className: "log__price" }, "$1638.88+"),
                    React.createElement("p", { className: "log__links" },
                        React.createElement("span", { className: "log__link--followers" },
                            React.createElement("svg", { className: "icon shape-arrow-up" },
                                React.createElement("use", { xlinkHref: "#shape-arrow-up" })),
                            "3"),
                        React.createElement("span", { className: "log__link--comments" },
                            React.createElement("svg", { className: "icon shape-comment" },
                                React.createElement("use", { xlinkHref: "#shape-comment" })),
                            "3"))))));
    };
    return BuildComponent;
}(react_1.Component));
exports.default = BuildComponent;
//# sourceMappingURL=BuildComponent.js.map