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
var Payment = /** @class */ (function (_super) {
    __extends(Payment, _super);
    function Payment(props) {
        var _this = _super.call(this, props) || this;
        _this.ShowPopup = function () {
            var isShowPopup = _this.state.isShowPopup;
            isShowPopup = !_this.state.isShowPopup;
            _this.setState({ isShowPopup: isShowPopup });
        };
        _this.ChoooseComputerComponent = function (item) {
            var ComputerComponent = _this.state.ComputerComponent;
            ComputerComponent.id = item.id;
            ComputerComponent.url = item.url;
            ComputerComponent.name = item.name;
            ComputerComponent.sku = item.sku;
            ComputerComponent.price = item.price;
            _this.setState({
                ComputerComponent: ComputerComponent
            });
            //console.log(this.state.ComputerComponent);
        };
        _this.state = {
            ComputerComponent: {
                id: 0,
                url: "",
                name: "",
                sku: "",
                quantity: 1,
                price: 0
            },
            computerComponentDetailData: [
                {
                    id: 1,
                    name: "CPU INTEL Core i7-9700 (8C/8T, 3.00 GHz up to 4.70 GHz, 12MB) - 1151-v2",
                    url: "https://lh3.googleusercontent.com/rblY6iBmaZ83VpzgY4IIuZT8eUEFPJWY3G98_rT7AKmUwbI5WhYjB2FtyD6Ml2DHvwfMERIWx-Qc2BroA0aG=w150-rw",
                    sku: "190900303",
                    price: 8990000
                },
                {
                    id: 2,
                    name: "CPU AMD Ryzen 5 3500X (6C/6T, 3.6 GHz up to 4.1 GHz, 32MB) - AM4",
                    url: "https://lh3.googleusercontent.com/UjJTwABDtQ_pDpV2LK48zdOmp0TwrFng9vT0udEvo_v80mkS9b8Ac20G1DoTyB4FDzjCYiFSSxaBetaieu78=w150",
                    sku: "191201596",
                    price: 3790000
                },
                {
                    id: 3,
                    name: "CPU INTEL Pentium G5420 (2C/4T, 3.80 GHz, 4MB) - 1151-v2",
                    url: "https://lh3.googleusercontent.com/in16EvHftb6G4GtW55IodSIzgbUjd7ZPeTUalbx1CNq81eFBqwaj3bK5e1YyiioD3rnsBqCndEhl8l8XA8Q=w150-rw",
                    sku: "190900303",
                    price: 1690000
                },
                {
                    id: 4,
                    name: "CPU AMD Ryzen 5 3500 (6C/6T, 3.6 GHz up to 4.1 GHz, 16MB) - AM4",
                    url: "https://lh3.googleusercontent.com/LZ25GgiDK-2iUPR61RYozt2blBHxwmJt8OevqyVGnnAxr_PcU_WuUdGxJE9aP_CZOSKwSD7v0-mKCZX0Ze4B=w150-rw",
                    sku: "200300647",
                    price: 3090000
                },
                {
                    id: 5,
                    name: "CPU AMD Ryzen 5 3500 (6C/6T, 3.6 GHz up to 4.1 GHz, 16MB) - AM4",
                    url: "https://lh3.googleusercontent.com/LZ25GgiDK-2iUPR61RYozt2blBHxwmJt8OevqyVGnnAxr_PcU_WuUdGxJE9aP_CZOSKwSD7v0-mKCZX0Ze4B=w150-rw",
                    sku: "200302000",
                    price: 3090000
                },
                {
                    id: 6,
                    name: "CPU INTEL Core i9-9900 (8C/16T, 3.10 GHz up to 5.00 GHz, 16MB) - 1151-v2",
                    url: "https://lh3.googleusercontent.com/kA4MDfhAnD2fSAQdO23MuKlheH6H7KVlmbBeO1DkDpT09CAl7vQZypJZv4aDcoDVD0aB6cOh8EOX1dqbeFY=w150-rw",
                    sku: "200400499",
                    price: "11.990.000"
                },
            ]
        };
        return _this;
    }
    Payment.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "body" },
            react_1["default"].createElement("div", { className: "container" },
                react_1["default"].createElement("div", { className: "css-1c5m4ef" },
                    react_1["default"].createElement("div", { className: "css-l6dpr4" }, this.state.computerComponentDetailData.map(function (item, index) {
                        return (react_1["default"].createElement("div", { className: "css-j0x69t" },
                            react_1["default"].createElement("div", { className: "card-body css-0" },
                                react_1["default"].createElement("div", { className: "css-1sbsckd" },
                                    react_1["default"].createElement("div", { className: "css-16u6ie8" },
                                        react_1["default"].createElement("div", { className: "css-g73s75" }, 1 + 1 === 2 ? (react_1["default"].createElement("picture", null,
                                            react_1["default"].createElement("source", { srcSet: item.url, type: "image/webp" }),
                                            react_1["default"].createElement("source", { srcSet: item.url, type: "image/png" }),
                                            react_1["default"].createElement("img", { className: "lazyload css-jdz5ak", alt: "", "data-src": item.url, src: item.url, loading: "lazy" }))) : (react_1["default"].createElement("img", { className: "css-jdz5ak ls-is-cached lazyloaded", alt: "", "data-src": item.icon, src: item.icon })))),
                                    react_1["default"].createElement("div", { className: "css-1680iyu" }, 1 + 1 === 2 ? (react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("a", { href: "/bo-vi-xu-ly-cpu-intel-core-i79700-12m-cache-up-to-47ghz-s190900303.html", rel: "noreferrer noopener", target: "_blank", className: "css-587jha" },
                                            react_1["default"].createElement("div", { className: "css-1vrkwu6" }, item.name)),
                                        react_1["default"].createElement("span", { className: "css-k5lh0a" },
                                            "SKU: ",
                                            item.sku))) : (react_1["default"].createElement("div", null, "Vui l\u00F2ng ch\u1ECDn linh ki\u1EC7n"))),
                                    1 + 1 === 2 ? (react_1["default"].createElement("div", { className: "css-114vf0c" },
                                        react_1["default"].createElement("div", { className: "css-mx5oai" },
                                            react_1["default"].createElement("button", { className: "css-1775qfl" },
                                                react_1["default"].createElement("span", { 
                                                    // size="16"
                                                    color: "#1435c3", className: "css-1hoeh5r" })),
                                            react_1["default"].createElement("input", { type: "number", className: "css-1bf66dq", defaultValue: "1" }),
                                            react_1["default"].createElement("button", { className: "css-1775qfl" },
                                                react_1["default"].createElement("span", { className: "css-139qrut" }, "+"))))) : (""),
                                    1 + 1 === 2 ? (react_1["default"].createElement("div", { className: "css-114vf0c" },
                                        react_1["default"].createElement("div", { className: "css-iarkvp" },
                                            react_1["default"].createElement("div", { className: "css-nel2x3" },
                                                react_1["default"].createElement("span", { className: "css-wgeuy1" },
                                                    item.price,
                                                    react_1["default"].createElement("span", { className: "css-1ul6wk9" }, "\u0111")),
                                                react_1["default"].createElement("div", { className: "css-1vptl7o" },
                                                    react_1["default"].createElement("span", { className: "css-1lypflo" },
                                                        "9.190.000",
                                                        react_1["default"].createElement("span", { className: "css-1ul6wk9" }, "\u0111"))))))) : (""),
                                    react_1["default"].createElement("div", { className: "css-16u6ie8" },
                                        react_1["default"].createElement("button", { id: "chooseComputerComponent", className: "css-7ivzg6", onClick: function () { return _this.ShowPopup(); } }, 1 + 1 === 2 ? "Sửa" : "Chọn"))))));
                    })),
                    react_1["default"].createElement("div", { className: "css-8xcfft" },
                        react_1["default"].createElement("div", { className: "css-1odjv61" },
                            react_1["default"].createElement("div", { className: "card-header css-0" },
                                react_1["default"].createElement("h5", null, "Thanh to\u00E1n")),
                            react_1["default"].createElement("div", { className: "card-body css-0" },
                                react_1["default"].createElement("div", { className: "css-nouyrl" },
                                    react_1["default"].createElement("table", { className: "css-qc9cbn" },
                                        react_1["default"].createElement("tbody", null,
                                            react_1["default"].createElement("tr", null,
                                                react_1["default"].createElement("td", { color: "#848788", className: "css-8ogxmh" }, "T\u1EA1m t\u00EDnh"),
                                                react_1["default"].createElement("td", { className: "css-1xrkmkn" },
                                                    react_1["default"].createElement("span", { className: "css-htm2b9" },
                                                        "79.995.000 ",
                                                        react_1["default"].createElement("span", { className: "css-1angbw" }, "\u0111")))),
                                            react_1["default"].createElement("tr", null,
                                                react_1["default"].createElement("td", { color: "#848788", className: "css-13izjcd" }, "Ph\u00ED v\u1EADn chuy\u1EC3n"),
                                                react_1["default"].createElement("td", { className: "css-fsu5pb" },
                                                    react_1["default"].createElement("span", { className: "css-htm2b9" },
                                                        "0 ",
                                                        react_1["default"].createElement("span", { className: "css-1angbw" }, "\u0111")))),
                                            react_1["default"].createElement("tr", null,
                                                react_1["default"].createElement("td", { color: "#848788", className: "css-13izjcd" }, "Khuy\u1EBFn m\u00E3i"),
                                                react_1["default"].createElement("td", { className: "css-fsu5pb" },
                                                    react_1["default"].createElement("span", { className: "css-htm2b9" },
                                                        "4.970.000 ",
                                                        react_1["default"].createElement("span", { className: "css-1angbw" }, "\u0111")))),
                                            react_1["default"].createElement("tr", null,
                                                react_1["default"].createElement("td", { color: "#848788", className: "css-13izjcd" }, "Th\u00E0nh ti\u1EC1n"),
                                                react_1["default"].createElement("td", { className: "css-aafp0n" },
                                                    react_1["default"].createElement("span", { className: "css-htm2b9" },
                                                        "75.025.000 ",
                                                        react_1["default"].createElement("span", { className: "css-1ul6wk9" }, "\u0111")))))),
                                    react_1["default"].createElement("div", { className: "css-1jfkofq" }, "(\u0110\u00E3 bao g\u1ED3m VAT)"))),
                            react_1["default"].createElement("div", { className: "card-footer css-0" },
                                react_1["default"].createElement("button", { className: "css-epgzji" },
                                    "THANH TO\u00C1N",
                                    react_1["default"].createElement("span", { className: "help" }, "B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp \u0111\u1EC3 ti\u1EBFp t\u1EE5c")))))))));
    };
    return Payment;
}(react_1.Component));
exports["default"] = Payment;
