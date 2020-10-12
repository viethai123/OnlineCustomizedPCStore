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
var ArrowSlideShow = /** @class */ (function (_super) {
    __extends(ArrowSlideShow, _super);
    function ArrowSlideShow(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    ArrowSlideShow.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("a", { className: "carousel-control-prev", href: "#carouselExampleIndicators", role: "button", "data-slide": "prev" },
                React.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
                React.createElement("span", { className: "sr-only" }, "Previous")),
            React.createElement("a", { className: "carousel-control-next", href: "#carouselExampleIndicators", role: "button", "data-slide": "next" },
                React.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
                React.createElement("span", { className: "sr-only" }, "Next"))));
    };
    return ArrowSlideShow;
}(react_1.Component));
exports.default = ArrowSlideShow;
//# sourceMappingURL=arrowSlideShow.js.map