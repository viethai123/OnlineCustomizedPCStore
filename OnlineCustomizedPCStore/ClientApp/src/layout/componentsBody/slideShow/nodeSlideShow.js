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
var NodeSlideShow = /** @class */ (function (_super) {
    __extends(NodeSlideShow, _super);
    function NodeSlideShow(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    NodeSlideShow.prototype.render = function () {
        return (React.createElement("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": this.props.image.id - 1, className: this.props.image.isActive ? "active" : "" }));
    };
    return NodeSlideShow;
}(react_1.Component));
exports.default = NodeSlideShow;
//# sourceMappingURL=nodeSlideShow.js.map