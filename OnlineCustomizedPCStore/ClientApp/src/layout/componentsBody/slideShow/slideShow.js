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
var imageSlideShow_1 = require("./imageSlideShow");
var nodeSlideShow_1 = require("./nodeSlideShow");
var arrowSlideShow_1 = require("./arrowSlideShow");
var SlideShow = /** @class */ (function (_super) {
    __extends(SlideShow, _super);
    function SlideShow(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SlideShow.prototype.render = function () {
        return (React.createElement("div", { id: "carouselExampleIndicators", className: "carousel slide", "data-ride": "carousel" },
            React.createElement("div", { id: "carouselExampleIndicators", className: "carousel slide", "data-ride": "carousel" },
                React.createElement("ol", { className: "carousel-indicators" }, this.props.imageSlideShowData.map(function (image, index) {
                    return React.createElement(nodeSlideShow_1.default, { key: index, image: image });
                })),
                React.createElement("div", { className: "carousel-inner" }, this.props.imageSlideShowData.map(function (image, index) {
                    return React.createElement(imageSlideShow_1.default, { key: index, image: image });
                })),
                React.createElement(arrowSlideShow_1.default, null)),
            React.createElement("div", { id: "carouselExampleIndicators", className: "carousel slide", "data-ride": "carousel" })));
    };
    return SlideShow;
}(react_1.Component));
exports.default = SlideShow;
//# sourceMappingURL=slideShow.js.map