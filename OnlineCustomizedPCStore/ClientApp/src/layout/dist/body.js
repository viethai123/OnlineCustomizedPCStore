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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var slideShow_1 = require("./componentsBody/slideShow/slideShow");
var computerComponent_1 = require("./componentsBody/computerComponents/computerComponent");
var react_router_dom_1 = require("react-router-dom");
//import ComputerComponentData from "../mockData/computerComponentData";
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChangeStatus = function (computer) {
            return function (e) {
                //const status = computer.status;
                var computerComponentDatas = _this.state.computerComponentDatas;
                var index = computerComponentDatas.indexOf(computer);
                _this.setState({
                    computerComponentDatas: __spreadArrays(computerComponentDatas.slice(0, index), [
                        __assign(__assign({}, computer), { status: true })
                    ], computerComponentDatas.slice(index + 1))
                });
            };
        };
        _this.TotalPrice = function (computer, key, item) {
            var saveComputerComponent = _this.state.saveComputerComponent;
            var totalPrice = 0;
            var quantity = 1;
            var product = __assign(__assign({}, item), { quantity: quantity });
            saveComputerComponent[key].product = product;
            saveComputerComponent.forEach(function (e) {
                if (e.product ? true : false) {
                    totalPrice +=
                        Object.keys(e.product).length === 0
                            ? 0
                            : e.product.price * e.product.quantity;
                }
            });
            _this.setState({
                saveComputerComponent: __spreadArrays(saveComputerComponent),
                totalPrice: totalPrice
            });
            console.log(saveComputerComponent);
            console.log(totalPrice);
        };
        _this.IncreaseQuantity = function (key, quantity) {
            var saveComputerComponent = _this.state.saveComputerComponent;
            var totalPrice = 0;
            saveComputerComponent[key].product.quantity += 1;
            saveComputerComponent.forEach(function (e) {
                if (e.product ? true : false) {
                    totalPrice =
                        Object.keys(e.product).length === 0
                            ? 0
                            : e.product.price * e.product.quantity;
                }
            });
            _this.setState(function (prevState) {
                return {
                    saveComputerComponent: saveComputerComponent,
                    totalPrice: totalPrice
                };
            });
            console.log(_this.state.totalPrice);
            console.log(_this.state.saveComputerComponent);
        };
        _this.DecreaseQuantity = function (key, quantity) {
            var saveComputerComponent = _this.state.saveComputerComponent;
            var totalPrice = 0;
            if (saveComputerComponent[key].product.quantity > 0) {
                saveComputerComponent[key].product.quantity -= 1;
            }
            saveComputerComponent.forEach(function (e) {
                if (e.product ? true : false) {
                    totalPrice =
                        Object.keys(e.product).length === 0
                            ? 0
                            : e.product.price * e.product.quantity;
                }
            });
            _this.setState(function (prevState) {
                return {
                    saveComputerComponent: saveComputerComponent,
                    totalPrice: totalPrice
                };
            });
            console.log(_this.state.totalPrice);
            console.log(_this.state.saveComputerComponent);
        };
        _this.ResetQuantity = function (key, item, index) {
            var saveComputerComponent = _this.state.saveComputerComponent;
            if (saveComputerComponent[key].product ? true : false) {
                if (item.id !== saveComputerComponent[key].id) {
                    saveComputerComponent[key].product.quantity = 1;
                    _this.setState(function (prevState) {
                        return {
                            saveComputerComponent: saveComputerComponent
                        };
                    });
                }
            }
            // console.log(item);
            // console.log(this.state.ComputerComponent);
        };
        _this.DeleteProduct = function (item, key) {
            var saveComputerComponent = _this.state.saveComputerComponent;
            var totalPrice = 0;
            var computerComponentDatas = _this.state.computerComponentDatas;
            if (saveComputerComponent[key].product.quantity === 0) {
                saveComputerComponent.forEach(function (e) {
                    if (e.product ? true : false) {
                        totalPrice =
                            Object.keys(e.product).length === 0
                                ? 0
                                : e.product.price * e.product.quantity;
                    }
                });
                saveComputerComponent[key].product = {};
                computerComponentDatas[key].status = false;
                console.log(totalPrice);
                _this.setState({ computerComponentDatas: computerComponentDatas, totalPrice: totalPrice });
            }
        };
        _this.state = {
            imageSlideShowData: [
                {
                    id: 1,
                    imageURL: "https://xgear.vn/wp-content/uploads/2020/07/Summer-Sale-Slider.jpg",
                    alt: "First slide",
                    isActive: true
                },
                {
                    id: 2,
                    imageURL: "https://xgear.vn/wp-content/uploads/2020/07/win_spacex.jpg",
                    alt: "Second slide",
                    isActive: false
                },
                {
                    id: 3,
                    imageURL: "https://xgear.vn/wp-content/uploads/2020/07/TUF-Gaming-VG27AQ.jpg",
                    alt: "Third slide",
                    isActive: false
                },
            ],
            computerComponentDatas: [
                {
                    id: 1,
                    name: "Vi xử lý",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/cpu-icon.284123fe.svg",
                    status: false
                },
                {
                    id: 2,
                    name: "Bo mạch chủ",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/mother-board-icon.82595f5e.svg",
                    status: false
                },
                {
                    id: 3,
                    name: "RAM",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/RAM-icon.60ea9105.svg",
                    status: false
                },
                {
                    id: 4,
                    name: "Ổ HDD",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/hard-disk-icon.f639705d.svg",
                    status: false
                },
                {
                    id: 5,
                    name: "Ổ SSD",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/ssd-disk-icon.79836a15.svg",
                    status: false
                },
                {
                    id: 6,
                    name: "VGA",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/grphics-card-icon.7b2bb00c.svg",
                    status: false
                },
                {
                    id: 7,
                    name: "Nguồn",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/power-icon.43200d33.svg",
                    status: false
                },
                {
                    id: 8,
                    name: "Vỏ case",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/chassis-icon.76efc8db.svg",
                    status: false
                },
                {
                    id: 9,
                    name: "Tản nhiệt",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/heat-sink-icon.7de4f64e.svg",
                    status: false
                },
                {
                    id: 10,
                    name: "Màn hình",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/monitor-icon.ba848ad5.svg",
                    status: false
                },
                {
                    id: 11,
                    name: "Bàn phím",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/keyboard-icon.87b45d1c.svg",
                    status: false
                },
                {
                    id: 12,
                    name: "Chuột",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/mouse-icon.144f4d99.svg",
                    status: false
                },
            ],
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
                    price: 11990000
                },
            ],
            saveComputerComponent: [
                {
                    id: 1,
                    name: "Vi xử lý",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/cpu-icon.284123fe.svg",
                    status: false
                },
                {
                    id: 2,
                    name: "Bo mạch chủ",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/mother-board-icon.82595f5e.svg",
                    status: false
                },
                {
                    id: 3,
                    name: "RAM",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/RAM-icon.60ea9105.svg",
                    status: false
                },
                {
                    id: 4,
                    name: "Ổ HDD",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/hard-disk-icon.f639705d.svg",
                    status: false
                },
                {
                    id: 5,
                    name: "Ổ SSD",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/ssd-disk-icon.79836a15.svg",
                    status: false
                },
                {
                    id: 6,
                    name: "VGA",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/grphics-card-icon.7b2bb00c.svg",
                    status: false
                },
                {
                    id: 7,
                    name: "Nguồn",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/power-icon.43200d33.svg",
                    status: false
                },
                {
                    id: 8,
                    name: "Vỏ case",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/chassis-icon.76efc8db.svg",
                    status: false
                },
                {
                    id: 9,
                    name: "Tản nhiệt",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/heat-sink-icon.7de4f64e.svg",
                    status: false
                },
                {
                    id: 10,
                    name: "Màn hình",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/monitor-icon.ba848ad5.svg",
                    status: false
                },
                {
                    id: 11,
                    name: "Bàn phím",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/keyboard-icon.87b45d1c.svg",
                    status: false
                },
                {
                    id: 12,
                    name: "Chuột",
                    icon: "http://static.360buyimg.com/master-of-loader/pc/img/mouse-icon.144f4d99.svg",
                    status: false
                },
            ],
            totalPrice: 0
        };
        return _this;
    }
    Body.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "body" },
            React.createElement("div", { className: "container" },
                React.createElement(slideShow_1["default"], { imageSlideShowData: this.state.imageSlideShowData }),
                React.createElement("div", { className: "css-1c5m4ef" },
                    React.createElement("div", { className: "css-l6dpr4" }, this.state.computerComponentDatas.map(function (computer, key) {
                        return (React.createElement(computerComponent_1["default"], { key: key, item: computer, handleChangeStatus: _this.handleChangeStatus(computer), computerComponentDetailData: _this.state.computerComponentDetailData, ComputerComponent: _this.state.ComputerComponent, TotalPrice: function (item) {
                                return _this.TotalPrice(computer, key, item);
                            }, IncreaseQuantity: function (quantity) {
                                return _this.IncreaseQuantity(key, quantity);
                            }, DecreaseQuantity: function (quantity) {
                                return _this.DecreaseQuantity(key, quantity);
                            }, ResetQuantity: function (item, index) {
                                return _this.ResetQuantity(key, item, index);
                            }, saveComputerComponent: _this.state.saveComputerComponent, DeleteProduct: function (item) {
                                return _this.DeleteProduct(item, key);
                            } }));
                    })),
                    React.createElement("div", { className: "css-ecwrjd" },
                        React.createElement("div", { className: "css-1rt0dw9" },
                            React.createElement("div", { className: "css-1pq650a" },
                                React.createElement("div", { className: "card-body css-0" },
                                    React.createElement("div", { className: "css-1hppjzv" },
                                        "Chi ph\u00ED d\u1EF1 t\u00EDnh:",
                                        React.createElement("div", { className: "css-rctmk5" },
                                            React.createElement("div", { className: "css-nel2x3" },
                                                React.createElement("span", { className: "css-wgeuy1" },
                                                    this.state.totalPrice,
                                                    React.createElement("span", { className: "css-1ul6wk9" }, "\u0111"))))),
                                    React.createElement("button", { className: "css-1pzezh5" },
                                        React.createElement(react_router_dom_1.Link, { to: "/cart" }, "Mua ngay")),
                                    React.createElement("button", { className: "css-no0qj7" },
                                        React.createElement("span", { className: "css-1ezgv1" }, "Th\u00EAm v\u00E0o gi\u1ECF h\u00E0ng"))))))))));
    };
    return Body;
}(react_1.Component));
exports["default"] = Body;
