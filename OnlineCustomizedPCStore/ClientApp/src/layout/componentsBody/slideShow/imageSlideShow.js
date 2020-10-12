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
var ImageSlideShow = /** @class */ (function (_super) {
    __extends(ImageSlideShow, _super);
    function ImageSlideShow(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    ImageSlideShow.prototype.render = function () {
        return (React.createElement("div", { className: this.props.image.isActive ? "carousel-item active" : "carousel-item" },
            React.createElement("img", { className: "d-block w-100", src: this.props.image.imageURL, alt: this.props.image.alt })));
    };
    return ImageSlideShow;
}(react_1.Component));
exports.default = ImageSlideShow;
//# sourceMappingURL=imageSlideShow.js.map