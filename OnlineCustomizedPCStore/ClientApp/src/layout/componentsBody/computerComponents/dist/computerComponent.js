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
var react_1 = require("react");
var computerComponentDetail_1 = require("./computerComponentDetail");
var ComputerComponent = /** @class */ (function (_super) {
    __extends(ComputerComponent, _super);
    function ComputerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.ShowPopup = function () {
            var isShowPopup = _this.state.isShowPopup;
            isShowPopup = !_this.state.isShowPopup;
            _this.setState({ isShowPopup: isShowPopup });
        };
        _this.state = {};
        return _this;
    }
    ComputerComponent.prototype.render = function () {
        var _this = this;
        var item = this.props.item;
        var saveComputerComponent = this.props.saveComputerComponent[item.id - 1];
        return (react_1["default"].createElement("div", { className: "css-j0x69t" },
            react_1["default"].createElement("div", { className: "card-body css-0" },
                react_1["default"].createElement("div", { className: "css-1sbsckd" },
                    react_1["default"].createElement("div", { className: "css-16u6ie8" },
                        react_1["default"].createElement("div", { className: "css-x23u6" }, item.name)),
                    react_1["default"].createElement("div", { className: "css-16u6ie8" },
                        react_1["default"].createElement("div", { className: "css-g73s75" }, this.props.item.status ? (react_1["default"].createElement("picture", null,
                            react_1["default"].createElement("source", { srcSet: saveComputerComponent.product
                                    ? saveComputerComponent.product.url
                                    : "Error!", type: "image/webp" }),
                            react_1["default"].createElement("source", { srcSet: saveComputerComponent.product
                                    ? saveComputerComponent.product.name
                                    : "Error!", type: "image/png" }),
                            react_1["default"].createElement("img", { className: "lazyload css-jdz5ak", alt: "", "data-src": saveComputerComponent.product
                                    ? saveComputerComponent.product.name
                                    : "Error!", src: saveComputerComponent.product
                                    ? saveComputerComponent.product.name
                                    : "Error!", loading: "lazy" }))) : (react_1["default"].createElement("img", { className: "css-jdz5ak ls-is-cached lazyloaded", alt: "", "data-src": item.icon, src: item.icon })))),
                    react_1["default"].createElement("div", { className: "css-1680iyu" }, this.props.item.status ? (react_1["default"].createElement("div", null,
                        react_1["default"].createElement("a", { href: "/bo-vi-xu-ly-cpu-intel-core-i79700-12m-cache-up-to-47ghz-s190900303.html", rel: "noreferrer noopener", target: "_blank", className: "css-587jha" },
                            react_1["default"].createElement("div", { className: "css-1vrkwu6" }, saveComputerComponent.product
                                ? saveComputerComponent.product.name
                                : "Error!")),
                        react_1["default"].createElement("span", { className: "css-k5lh0a" },
                            "SKU:",
                            " ",
                            saveComputerComponent.product
                                ? saveComputerComponent.product.sku
                                : "Error!"))) : (react_1["default"].createElement("div", null, "Vui l\u00F2ng ch\u1ECDn linh ki\u1EC7n"))),
                    this.props.item.status ? (react_1["default"].createElement("div", { className: "css-114vf0c" },
                        react_1["default"].createElement("div", { className: "css-mx5oai" },
                            react_1["default"].createElement("button", { className: "css-1775qfl", onClick: function () {
                                    _this.props.DecreaseQuantity(saveComputerComponent.product
                                        ? saveComputerComponent.product.name
                                        : 0);
                                    _this.props.DeleteProduct(item);
                                } },
                                react_1["default"].createElement("span", { 
                                    // size="16"
                                    color: "#1435c3", className: "css-1hoeh5r" }, "-")),
                            react_1["default"].createElement("div", { className: "css-1hqugw1" }, saveComputerComponent.product
                                ? saveComputerComponent.product.quantity
                                : "Error!"),
                            react_1["default"].createElement("button", { className: "css-1775qfl", onClick: function () {
                                    _this.props.IncreaseQuantity(saveComputerComponent.product
                                        ? saveComputerComponent.product.name
                                        : 0);
                                } },
                                react_1["default"].createElement("span", { className: "css-139qrut" }, "+"))))) : (""),
                    this.props.item.status ? (react_1["default"].createElement("div", { className: "css-114vf0c" },
                        react_1["default"].createElement("div", { className: "css-iarkvp" },
                            react_1["default"].createElement("div", { className: "css-nel2x3" },
                                react_1["default"].createElement("span", { className: "css-wgeuy1" },
                                    saveComputerComponent.product
                                        ? saveComputerComponent.product.price
                                        : "Error!",
                                    react_1["default"].createElement("span", { className: "css-1ul6wk9" }, "\u0111")),
                                react_1["default"].createElement("div", { className: "css-1vptl7o" },
                                    react_1["default"].createElement("span", { className: "css-1lypflo" },
                                        "9.190.000",
                                        react_1["default"].createElement("span", { className: "css-1ul6wk9" }, "\u0111"))))))) : (""),
                    react_1["default"].createElement("div", { className: "css-16u6ie8" },
                        react_1["default"].createElement("button", { id: "chooseComputerComponent", className: "css-7ivzg6", onClick: function () { return _this.ShowPopup(); } }, this.props.item.status ? "Sửa" : "Chọn"),
                        this.state.isShowPopup ? (react_1["default"].createElement("div", { id: "computerComponentContent", className: "screen-blur" },
                            react_1["default"].createElement("div", { className: "css-1272naz" }),
                            react_1["default"].createElement("div", { className: "css-odqcbb" },
                                react_1["default"].createElement("div", { className: "css-u7sw6j" },
                                    react_1["default"].createElement("div", { className: "card-body css-0" },
                                        react_1["default"].createElement("div", { className: "css-1ce6rfj" },
                                            react_1["default"].createElement("div", { color: "#333", className: "css-dcbhpa" },
                                                react_1["default"].createElement("div", { className: "css-1oycjaj" },
                                                    react_1["default"].createElement("div", { color: "#333", className: "css-wsluue" }),
                                                    react_1["default"].createElement("div", { color: "#333", className: "title css-akoccx" }, "B\u1ED9 l\u1ECDc")),
                                                react_1["default"].createElement("button", { className: "close-popup", onClick: function () { return _this.ShowPopup(); } }, "x"),
                                                react_1["default"].createElement("div", { className: "css-bair20" })),
                                            react_1["default"].createElement("div", { className: "css-1509jdm" },
                                                react_1["default"].createElement("div", { className: "css-2sxgp5" },
                                                    react_1["default"].createElement("div", { className: "dropdown css-7q5kcq" },
                                                        react_1["default"].createElement("button", { type: "button", className: "btn dropdown-toggle css-1v2pmh6", "data-toggle": "dropdown" }, "Button"),
                                                        react_1["default"].createElement("div", { className: "dropdown-menu" },
                                                            react_1["default"].createElement("div", { className: "dropdown-item" },
                                                                react_1["default"].createElement("div", { className: "row" },
                                                                    react_1["default"].createElement("div", { className: "col" },
                                                                        react_1["default"].createElement("ul", { className: "list-group list-group-horizontal-sm" },
                                                                            react_1["default"].createElement("li", { className: "list-group-item" }, "Cras justo odio"),
                                                                            react_1["default"].createElement("li", { className: "list-group-item" }, "Dapibus ac facilisis in"),
                                                                            react_1["default"].createElement("li", { className: "list-group-item" }, "Morbi leo risus")))))))),
                                                react_1["default"].createElement("div", { className: "css-2sxgp5" },
                                                    react_1["default"].createElement("div", { className: "dropdown css-7q5kcq" },
                                                        react_1["default"].createElement("button", { type: "button", className: "btn dropdown-toggle css-1v2pmh6", "data-toggle": "dropdown" }, "Button"),
                                                        react_1["default"].createElement("div", { className: "dropdown-menu" },
                                                            react_1["default"].createElement("div", { className: "dropdown-item" },
                                                                react_1["default"].createElement("div", { className: "row" },
                                                                    react_1["default"].createElement("div", { className: "col" },
                                                                        react_1["default"].createElement("ul", { className: "list-group list-group-horizontal-sm" },
                                                                            react_1["default"].createElement("li", { className: "list-group-item" }, "Cras justo odio"),
                                                                            react_1["default"].createElement("li", { className: "list-group-item" }, "Dapibus ac facilisis in"),
                                                                            react_1["default"].createElement("li", { className: "list-group-item" }, "Morbi leo risus")))))))),
                                                react_1["default"].createElement("div", { className: "css-2sxgp5" },
                                                    react_1["default"].createElement("div", { className: "dropdown css-7q5kcq" },
                                                        react_1["default"].createElement("button", { type: "button", className: "btn dropdown-toggle css-1v2pmh6", "data-toggle": "dropdown" }, "Button"),
                                                        react_1["default"].createElement("div", { className: "dropdown-menu" },
                                                            react_1["default"].createElement("div", { className: "dropdown-item" },
                                                                react_1["default"].createElement("div", { className: "row" },
                                                                    react_1["default"].createElement("div", { className: "col" },
                                                                        react_1["default"].createElement("ul", { className: "list-group list-group-horizontal-sm" },
                                                                            react_1["default"].createElement("li", { className: "list-group-item" }, "Cras justo odio"),
                                                                            react_1["default"].createElement("li", { className: "list-group-item" }, "Dapibus ac facilisis in"),
                                                                            react_1["default"].createElement("li", { className: "list-group-item" }, "Morbi leo risus")))))))),
                                                react_1["default"].createElement("div", { className: "css-2sxgp5" },
                                                    react_1["default"].createElement("div", { className: "dropdown css-7q5kcq" },
                                                        react_1["default"].createElement("button", { type: "button", className: "btn dropdown-toggle css-1v2pmh6", "data-toggle": "dropdown" }, "Button"),
                                                        react_1["default"].createElement("div", { className: "dropdown-menu" },
                                                            react_1["default"].createElement("div", { className: "dropdown-item" },
                                                                react_1["default"].createElement("div", { className: "row" },
                                                                    react_1["default"].createElement("div", { className: "col" },
                                                                        react_1["default"].createElement("ul", { className: "list-group list-group-horizontal-sm" },
                                                                            react_1["default"].createElement("li", { className: "list-group-item" }, "Cras justo odio"),
                                                                            react_1["default"].createElement("li", { className: "list-group-item" }, "Dapibus ac facilisis in"),
                                                                            react_1["default"].createElement("li", { className: "list-group-item" }, "Morbi leo risus"))))))))),
                                            react_1["default"].createElement("div", { className: "css-101xial" },
                                                react_1["default"].createElement("div", { className: "css-jusw15" }, "S\u1EAFp x\u1EBFp theo"),
                                                react_1["default"].createElement("div", { className: "css-1xy69fm" },
                                                    react_1["default"].createElement("div", { className: "css-mau3c4" }, " "),
                                                    react_1["default"].createElement("span", { className: "css-f2ehsn" }, "N\u1ED5i b\u1EADt nh\u1EA5t")),
                                                react_1["default"].createElement("div", { className: "css-1xy69fm" },
                                                    react_1["default"].createElement("div", { className: "css-mau3c4" }, " "),
                                                    react_1["default"].createElement("span", { className: "css-f2ehsn" }, "Gi\u00E1 t\u0103ng d\u1EA7n")),
                                                react_1["default"].createElement("div", { className: "css-1xy69fm" },
                                                    react_1["default"].createElement("div", { className: "css-mau3c4" }, " "),
                                                    react_1["default"].createElement("span", { className: "css-f2ehsn" }, "Gi\u00E1 gi\u1EA3m d\u1EA7n")),
                                                react_1["default"].createElement("input", { placeholder: "T\u00ECm linh ki\u1EC7n", className: "css-p6sluc" }))),
                                        react_1["default"].createElement("div", { 
                                            //  height="22.725"
                                            className: "css-1mhyi09" }, this.props.computerComponentDetailData.map(function (item, index) {
                                            return (react_1["default"].createElement(computerComponentDetail_1["default"], { key: index, item: item, handleChangeStatus: function () {
                                                    return _this.props.handleChangeStatus(item);
                                                }, ShowPopup: function () { return _this.ShowPopup(); }, TotalPrice: function () {
                                                    return _this.props.TotalPrice(item, index);
                                                }, ResetQuantity: function () {
                                                    return _this.props.ResetQuantity(item, index);
                                                } }));
                                        })),
                                        react_1["default"].createElement("div", { className: "css-19zm62v" },
                                            react_1["default"].createElement("nav", null,
                                                react_1["default"].createElement("ul", { className: "css-19x39nn" },
                                                    react_1["default"].createElement("li", { "data-track-content": "true", "data-content-region-name": "paging", "data-content-name": "nextPage", className: "css-4utbjj" },
                                                        react_1["default"].createElement("button", { className: "css-9lxisd" },
                                                            react_1["default"].createElement("span", { 
                                                                // size="12"
                                                                className: "css-1szbwkf" }))),
                                                    react_1["default"].createElement("li", { "data-track-content": "true", "data-content-region-name": "paging", "data-content-name": "gotoPage", "data-content-target": "1", className: "css-13f2byv" },
                                                        react_1["default"].createElement("button", { className: "css-g0s58m" }, "1")),
                                                    react_1["default"].createElement("li", { "data-track-content": "true", "data-content-region-name": "paging", "data-content-name": "gotoPage", "data-content-target": "2", className: "css-15il98n" },
                                                        react_1["default"].createElement("button", { className: "css-1gx9tfy" }, "2")),
                                                    react_1["default"].createElement("li", { "data-track-content": "true", "data-content-region-name": "paging", "data-content-name": "gotoPage", "data-content-target": "3", className: "css-15il98n" },
                                                        react_1["default"].createElement("button", { className: "css-1gx9tfy" }, "3")),
                                                    react_1["default"].createElement("li", { "data-track-content": "true", "data-content-region-name": "paging", "data-content-name": "gotoPage", "data-content-target": "4", className: "css-15il98n" },
                                                        react_1["default"].createElement("button", { className: "css-1gx9tfy" }, "4")),
                                                    react_1["default"].createElement("li", { "data-track-content": "true", "data-content-region-name": "paging", "data-content-name": "nextPage", className: "css-1k2r91" },
                                                        react_1["default"].createElement("button", { className: "css-9lxisd" },
                                                            react_1["default"].createElement("span", { 
                                                                // size="12"
                                                                className: "css-94s669" }))))))))))) : null)))));
    };
    return ComputerComponent;
}(react_1.Component));
exports["default"] = ComputerComponent;
