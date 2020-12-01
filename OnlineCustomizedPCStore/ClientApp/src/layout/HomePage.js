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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            TopAMD: {},
            TopIntel: {},
            CompletedBuilds: []
        };
        return _this;
    }
    HomePage.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        return [4 /*yield*/, fetch('api/CompletedBuild/ListOfCompletedBuild')
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                _this.setState({
                                    CompletedBuilds: data,
                                });
                                console.log(_this.state.CompletedBuilds);
                                var AMD2 = 0;
                                var Intel2 = 0;
                                data.forEach(function (item) {
                                    var TopAMD = _this.state.TopAMD;
                                    var TopIntel = _this.state.TopIntel;
                                    debugger;
                                    if (item.type === 1) {
                                        var AMD = item.rate;
                                        if (AMD > AMD2) {
                                            AMD2 = AMD;
                                            TopAMD = item;
                                            _this.setState({ TopAMD: TopAMD });
                                        }
                                    }
                                    if (item.type === 2) {
                                        var Intel = item.rate;
                                        if (Intel > Intel2) {
                                            Intel2 = Intel;
                                            TopIntel = item;
                                            _this.setState({ TopIntel: TopIntel });
                                        }
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.render = function () {
        return (React.createElement("div", { className: this.props.themeMode ? "dark-mode" : "light-mode" },
            React.createElement("section", { className: "main-wrapper xs-col-12" },
                React.createElement("div", { id: "homepage" },
                    React.createElement("div", { className: "wrapper wrapper__buildGuides" },
                        React.createElement("section", { className: "build-guides xs-col-11 lg-col-9 xl-col-8 xs-mx-auto" },
                            React.createElement("div", { className: "guides__info" },
                                React.createElement("h1", null, "Build Guides"),
                                React.createElement("p", null, "Building your own PC and need ideas on where to get started? Explore our build guides which cover systems for a variety of use-cases and budgets."),
                                React.createElement("a", { href: "/guide/", className: "button" }, "View the Build Guides")),
                            React.createElement("li", { className: "guideGroup guideGroup__card" },
                                React.createElement("a", { href: "/guide/PB6MnQ/entry-level-amd-gaming-build", className: "guideGroup__target" }),
                                React.createElement("div", { className: "guideGroup__content--wrapper1" },
                                    React.createElement("h1", { className: "guide__title" }, "Entry Level AMD Gaming Build"),
                                    React.createElement("ul", { className: "guide__keyProducts list-unstyled" },
                                        React.createElement("li", null, this.state.TopAMD.processorSku),
                                        React.createElement("li", null, this.state.TopAMD.vgaSku),
                                        React.createElement("li", null, this.state.TopAMD.radiatorsSku))),
                                React.createElement("div", { className: "guideGroup__content--wrapper2" },
                                    React.createElement("div", { className: "guide__numbers" },
                                        React.createElement("p", { className: "guide__price" }, "$582.93"),
                                        React.createElement("p", { className: "guide__links" },
                                            React.createElement("span", { className: "guide__link--comments" },
                                                React.createElement("svg", { className: "icon shape-comment" },
                                                    React.createElement("use", { xlinkHref: "#shape-comment" })),
                                                this.state.TopAMD.rate))),
                                    React.createElement("ul", { className: "guide__images list-unstyled" },
                                        React.createElement("li", { className: "guide__images--1" },
                                            React.createElement("img", { src: "https://images-na.ssl-images-amazon.com/images/I/51N2BQA3cBL.jpg" })),
                                        React.createElement("li", { className: "guide__images--2" },
                                            React.createElement("img", { src: "//cdna.pcpartpicker.com/static/forever/images/product/55aea2dd64e2e3a3e3b1d678048d8d76.256p.jpg" })),
                                        React.createElement("li", { className: "guide__images--3" },
                                            React.createElement("img", { src: "https://m.media-amazon.com/images/I/41zgLYpzn1L.jpg" }))))),
                            React.createElement("li", { className: "guideGroup guideGroup__card" },
                                React.createElement("a", { href: "/guide/s4V323/excellent-intel-gamingstreaming-build", className: "guideGroup__target" }),
                                React.createElement("div", { className: "guideGroup__content--wrapper1" },
                                    React.createElement("h1", { className: "guide__title" }, "Excellent Intel Gaming/Streaming Build"),
                                    React.createElement("ul", { className: "guide__keyProducts list-unstyled" },
                                        React.createElement("li", null, this.state.TopIntel.processorSku),
                                        React.createElement("li", null, this.state.TopIntel.vgaSku),
                                        React.createElement("li", null, this.state.TopIntel.radiatorsSku))),
                                React.createElement("div", { className: "guideGroup__content--wrapper2" },
                                    React.createElement("div", { className: "guide__numbers" },
                                        React.createElement("p", { className: "guide__price" }, "$1312.54"),
                                        React.createElement("p", { className: "guide__links" },
                                            React.createElement("span", { className: "guide__link--comments" },
                                                React.createElement("svg", { className: "icon shape-comment" },
                                                    React.createElement("use", { xlinkHref: "#shape-comment" })),
                                                this.state.TopIntel.rate))),
                                    React.createElement("ul", { className: "guide__images list-unstyled" },
                                        React.createElement("li", { className: "guide__images--1" },
                                            React.createElement("img", { src: "//cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg" })),
                                        React.createElement("li", { className: "guide__images--2" },
                                            React.createElement("img", { src: "//cdna.pcpartpicker.com/static/forever/images/product/cec5ee818776737baefc9603bdbf9391.256p.jpg" })),
                                        React.createElement("li", { className: "guide__images--3" },
                                            React.createElement("img", { src: "//cdna.pcpartpicker.com/static/forever/images/product/200b4e048d11f6870e697e2693490cd3.256p.jpg" }))))))),
                    React.createElement("div", { className: "wrapper wrapper__completedBuilds" },
                        React.createElement("section", { className: "completed-builds xs-col-11 lg-col-9 xl-col-8 xs-mx-auto" },
                            React.createElement("section", { className: "module-subTitle" },
                                React.createElement("div", { className: "subTitle" },
                                    React.createElement("div", { className: "subTitle__header" },
                                        React.createElement("h2", null, "Completed Builds")))),
                            React.createElement("ul", { id: "userbuild_list", className: "logGrid list-unstyled" },
                                React.createElement("li", { className: "logGroup__card--featured" },
                                    React.createElement("div", { className: "featured__message" },
                                        React.createElement("p", null,
                                            React.createElement("svg", { className: "nav__icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 24" },
                                                React.createElement("g", { "data-name": "Layer 2" },
                                                    React.createElement("g", { "data-name": "Layer 1" },
                                                        React.createElement("path", { d: "M19.08 1l-12-1H7a.62.62 0 0 0-.19 0h-.14l-.09.1-.13.07-.13.09L.45 4.17A1 1 0 0 0 0 5v17a1 1 0 0 0 .84 1l6 1H19a1 1 0 0 0 1-1V2a1 1 0 0 0-.92-1zM6 21.82l-4-.67V5.54l4-2.67zM18 22H8V2.09l10 .83z" }),
                                                        React.createElement("circle", { cx: 13, cy: 18, r: 1 }),
                                                        React.createElement("path", { d: "M17 4.6L9 4v2l8 .6v-2zM17 7.6L9 7v2l8 .6v-2z" }))))),
                                        React.createElement("h1", null, "Featured Build"),
                                        React.createElement("p", null,
                                            "Congratulations ",
                                            React.createElement("a", { href: "/user/_Rip_/" }, "_Rip_"),
                                            "!")),
                                    React.createElement("div", { className: "logGroup logGroup__card" },
                                        React.createElement("a", { href: "/b/72BZxr", className: "logGroup__target" }),
                                        React.createElement("div", { className: "logGroup__content--wrapper1" },
                                            React.createElement("p", { className: "log__author" },
                                                React.createElement("a", { href: "/user/_Rip_/", className: "userAvatar" },
                                                    React.createElement("img", { src: "//cdna.pcpartpicker.com/static/forever/images/user/3845343.42e1e783996dc1669c451b48858a5481.256c.jpg" })),
                                                React.createElement("a", { href: "/user/_Rip_/" }, "_Rip_")),
                                            React.createElement("a", { href: "/b/72BZxr", className: "log__image", style: { backgroundImage: 'url(//cdna.pcpartpicker.com/static/forever/images/userbuild/331461.a4ad9c81e55c97936fc399a8725566f0.512.jpg)' } }),
                                            React.createElement("h1", { className: "log__title" },
                                                React.createElement("a", { href: "/b/72BZxr" }, "Master Build - Corsair Obsidian 1000d")),
                                            React.createElement("ul", { className: "log__keyProducts list-unstyled" },
                                                React.createElement("li", { className: "build__specs" }, "AMD Threadripper 3960X"),
                                                React.createElement("li", { className: "build__specs" }, "GeForce RTX 2080 Ti (x2)"))),
                                        React.createElement("div", { className: "logGroup__content--wrapper2" },
                                            React.createElement("div", { className: "log__numbers" },
                                                React.createElement("p", { className: "log__price" }, "$19405.89+"),
                                                React.createElement("p", { className: "log__links" },
                                                    React.createElement("span", { className: "log__link--followers" },
                                                        React.createElement("svg", { className: "icon shape-arrow-up" },
                                                            React.createElement("use", { xlinkHref: "#shape-arrow-up" })),
                                                        "259"),
                                                    React.createElement("span", { className: "log__link--comments" },
                                                        React.createElement("svg", { className: "icon shape-comment" },
                                                            React.createElement("use", { xlinkHref: "#shape-comment" })),
                                                        "248")))))),
                                React.createElement("li", { className: "logGroup logGroup__card" },
                                    React.createElement("a", { href: "/b/yRMcCJ", className: "logGroup__target" }),
                                    React.createElement("div", { className: "logGroup__content--wrapper1" },
                                        React.createElement("p", { className: "log__author" },
                                            React.createElement("a", { href: "/user/Soldr/", className: "userAvatar" },
                                                React.createElement("img", { src: "/static/img/default-avatar.png" })),
                                            React.createElement("a", { href: "/user/Soldr/" }, "Soldr")),
                                        React.createElement("a", { href: "/b/yRMcCJ", className: "log__image", style: { backgroundImage: 'url(//cdna.pcpartpicker.com/static/forever/images/userbuild/334874.eee74d879b0b0054c6aacda77ba91c03.512.jpg)' } }),
                                        React.createElement("h1", { className: "log__title" },
                                            React.createElement("a", { href: "/b/yRMcCJ" }, "My best build yet")),
                                        React.createElement("ul", { className: "log__keyProducts list-unstyled" },
                                            React.createElement("li", { className: "build__specs" }, "AMD Ryzen 7 3700X"),
                                            React.createElement("li", { className: "build__specs" }, "Radeon RX 580"))),
                                    React.createElement("div", { className: "logGroup__content--wrapper2" },
                                        React.createElement("div", { className: "log__numbers" },
                                            React.createElement("p", { className: "log__price" }, "$821.93+"),
                                            React.createElement("p", { className: "log__links" },
                                                React.createElement("span", { className: "log__link--followers" },
                                                    React.createElement("svg", { className: "icon shape-arrow-up" },
                                                        React.createElement("use", { xlinkHref: "#shape-arrow-up" })),
                                                    "5"),
                                                React.createElement("span", { className: "log__link--comments" },
                                                    React.createElement("svg", { className: "icon shape-comment" },
                                                        React.createElement("use", { xlinkHref: "#shape-comment" })),
                                                    "3"))))),
                                React.createElement("li", { className: "logGroup logGroup__card" },
                                    React.createElement("a", { href: "/b/nFp8TW", className: "logGroup__target" }),
                                    React.createElement("div", { className: "logGroup__content--wrapper1" },
                                        React.createElement("p", { className: "log__author" },
                                            React.createElement("a", { href: "/user/GaronAgrawal/", className: "userAvatar" },
                                                React.createElement("img", { src: "/static/img/default-avatar.png" })),
                                            React.createElement("a", { href: "/user/GaronAgrawal/" }, "GaronAgrawal")),
                                        React.createElement("a", { href: "/b/nFp8TW", className: "log__image", style: { backgroundImage: 'url(//cdna.pcpartpicker.com/static/forever/images/userbuild/334864.83b5210a4855a7a4b40f581d9a8b8327.512.jpg)' } }),
                                        React.createElement("h1", { className: "log__title" },
                                            React.createElement("a", { href: "/b/nFp8TW" }, "First Build")),
                                        React.createElement("ul", { className: "log__keyProducts list-unstyled" },
                                            React.createElement("li", { className: "build__specs" }, "AMD Ryzen 5 3600XT"),
                                            React.createElement("li", { className: "build__specs" }, "GeForce RTX 2060"))),
                                    React.createElement("div", { className: "logGroup__content--wrapper2" },
                                        React.createElement("div", { className: "log__numbers" },
                                            React.createElement("p", { className: "log__price" }, "$1279.27+"),
                                            React.createElement("p", { className: "log__links" },
                                                React.createElement("span", { className: "log__link--followers" },
                                                    React.createElement("svg", { className: "icon shape-arrow-up" },
                                                        React.createElement("use", { xlinkHref: "#shape-arrow-up" })),
                                                    "4"),
                                                React.createElement("span", { className: "log__link--comments" },
                                                    React.createElement("svg", { className: "icon shape-comment" },
                                                        React.createElement("use", { xlinkHref: "#shape-comment" })),
                                                    "6"))))),
                                React.createElement("li", { className: "logGroup logGroup__card" },
                                    React.createElement("a", { href: "/b/jKx6Mp", className: "logGroup__target" }),
                                    React.createElement("div", { className: "logGroup__content--wrapper1" },
                                        React.createElement("p", { className: "log__author" },
                                            React.createElement("a", { href: "/user/Crazydamias7/", className: "userAvatar" },
                                                React.createElement("img", { src: "/static/img/default-avatar.png" })),
                                            React.createElement("a", { href: "/user/Crazydamias7/" }, "Crazydamias7")),
                                        React.createElement("a", { href: "/b/jKx6Mp", className: "log__image", style: { backgroundImage: 'url(//cdna.pcpartpicker.com/static/forever/images/userbuild/334856.5e7af080067b80c178babe8c1c5c04b2.512.jpg)' } }),
                                        React.createElement("h1", { className: "log__title" },
                                            React.createElement("a", { href: "/b/jKx6Mp" }, "My Gaming PC")),
                                        React.createElement("ul", { className: "log__keyProducts list-unstyled" },
                                            React.createElement("li", { className: "build__specs" }, "Intel Core i5-7400"),
                                            React.createElement("li", { className: "build__specs" }, "GeForce GTX 1050 Ti"))),
                                    React.createElement("div", { className: "logGroup__content--wrapper2" },
                                        React.createElement("div", { className: "log__numbers" },
                                            React.createElement("p", { className: "log__price" }, "$1133.88+"),
                                            React.createElement("p", { className: "log__links" },
                                                React.createElement("span", { className: "log__link--followers" },
                                                    React.createElement("svg", { className: "icon shape-arrow-up" },
                                                        React.createElement("use", { xlinkHref: "#shape-arrow-up" })),
                                                    "4"),
                                                React.createElement("span", { className: "log__link--comments" },
                                                    React.createElement("svg", { className: "icon shape-comment" },
                                                        React.createElement("use", { xlinkHref: "#shape-comment" })),
                                                    "3"))))),
                                React.createElement("li", { className: "logGroup logGroup__card" },
                                    React.createElement("a", { href: "/b/6jskcf", className: "logGroup__target" }),
                                    React.createElement("div", { className: "logGroup__content--wrapper1" },
                                        React.createElement("p", { className: "log__author" },
                                            React.createElement("a", { href: "/user/NasTomkinson/", className: "userAvatar" },
                                                React.createElement("img", { src: "/static/img/default-avatar.png" })),
                                            React.createElement("a", { href: "/user/NasTomkinson/" }, "NasTomkinson")),
                                        React.createElement("a", { href: "/b/6jskcf", className: "log__image", style: { backgroundImage: 'url(//cdna.pcpartpicker.com/static/forever/images/userbuild/334855.2c2a42468645676fc90e755996fd237f.512.jpg)' } }),
                                        React.createElement("h1", { className: "log__title" },
                                            React.createElement("a", { href: "/b/6jskcf" }, "5800X + 6800XT Red Team build")),
                                        React.createElement("ul", { className: "log__keyProducts list-unstyled" },
                                            React.createElement("li", { className: "build__specs" }, "AMD Ryzen 7 5800X"),
                                            React.createElement("li", { className: "build__specs" }, "Radeon RX 6800 XT"))),
                                    React.createElement("div", { className: "logGroup__content--wrapper2" },
                                        React.createElement("div", { className: "log__numbers" },
                                            React.createElement("p", { className: "log__price" }, "$1008.39+"),
                                            React.createElement("p", { className: "log__links" },
                                                React.createElement("span", { className: "log__link--followers" },
                                                    React.createElement("svg", { className: "icon shape-arrow-up" },
                                                        React.createElement("use", { xlinkHref: "#shape-arrow-up" })),
                                                    "11"),
                                                React.createElement("span", { className: "log__link--comments" },
                                                    React.createElement("svg", { className: "icon shape-comment" },
                                                        React.createElement("use", { xlinkHref: "#shape-comment" })),
                                                    "6"))))),
                                React.createElement("li", { className: "logGroup logGroup__card" },
                                    React.createElement("a", { href: "/b/rhdmP6", className: "logGroup__target" }),
                                    React.createElement("div", { className: "logGroup__content--wrapper1" },
                                        React.createElement("p", { className: "log__author" },
                                            React.createElement("a", { href: "/user/czvczx/", className: "userAvatar" },
                                                React.createElement("img", { src: "/static/img/default-avatar.png" })),
                                            React.createElement("a", { href: "/user/czvczx/" }, "czvczx")),
                                        React.createElement("a", { href: "/b/rhdmP6", className: "log__image", style: { backgroundImage: 'url(//cdna.pcpartpicker.com/static/forever/images/userbuild/334851.bc573305605e292d84d855144d1d14e1.512.jpg)' } }),
                                        React.createElement("h1", { className: "log__title" },
                                            React.createElement("a", { href: "/b/rhdmP6" }, "2020 build")),
                                        React.createElement("ul", { className: "log__keyProducts list-unstyled" },
                                            React.createElement("li", { className: "build__specs" }, "AMD Ryzen 9 5900X"),
                                            React.createElement("li", { className: "build__specs" }, "GeForce RTX 3080"))),
                                    React.createElement("div", { className: "logGroup__content--wrapper2" },
                                        React.createElement("div", { className: "log__numbers" },
                                            React.createElement("p", { className: "log__price" }, "$3756.47+"),
                                            React.createElement("p", { className: "log__links" },
                                                React.createElement("span", { className: "log__link--followers" },
                                                    React.createElement("svg", { className: "icon shape-arrow-up" },
                                                        React.createElement("use", { xlinkHref: "#shape-arrow-up" })),
                                                    "6"),
                                                React.createElement("span", { className: "log__link--comments" },
                                                    React.createElement("svg", { className: "icon shape-comment" },
                                                        React.createElement("use", { xlinkHref: "#shape-comment" })),
                                                    "7"))))),
                                React.createElement("li", { className: "logGroup__action" },
                                    React.createElement("p", null,
                                        React.createElement("a", { href: "/builds/", className: "button" }, "See All Completed Builds")))))),
                    React.createElement("div", { className: "wrapper wrapper__completedBuilds" },
                        React.createElement("section", { className: "completed-builds xs-col-11 lg-col-9 xl-col-8 xs-mx-auto" },
                            React.createElement("section", { className: "module-subTitle" },
                                React.createElement("div", { className: "subTitle" },
                                    React.createElement("div", { className: "subTitle__header" },
                                        React.createElement("h2", null, "Completed Builds")))),
                            React.createElement("ul", { id: "userbuild_list", className: "logGrid list-unstyled" },
                                React.createElement("li", { className: "logGroup logGroup__card" },
                                    React.createElement("a", { href: "/b/yRMcCJ", className: "logGroup__target" }),
                                    React.createElement("div", { className: "logGroup__content--wrapper1 margin-image-product" },
                                        React.createElement("a", { href: "/b/yRMcCJ", className: "log__image", style: { backgroundImage: "url(" + "https://lh3.googleusercontent.com/XOyZxluqm-sfyMkT2BGM2eDnUMMmcjPC6xmWynaIIUcPM0w1Y1kFckyedveJ7E37Bia-8Bu4wN6XCeTCmZQ=w500-rw" + ")" } }),
                                        React.createElement("h1", { className: "log__title title-center" },
                                            React.createElement("a", { href: "/b/yRMcCJ" }, "AMD Ryzen 5 3600"))),
                                    React.createElement("div", { className: "none-margin-top-logGroup__content--wrapper2" },
                                        React.createElement("div", { className: "log__numbers" },
                                            React.createElement("p", { className: "log__price" }, "$821.93+"),
                                            React.createElement("p", { className: "log__links" })))),
                                React.createElement("li", { className: "logGroup__action" },
                                    React.createElement("p", null,
                                        React.createElement("a", { href: "/completed-build", className: "button" }, "See All Completed Builds"))))))))));
    };
    return HomePage;
}(react_1.Component));
exports.default = HomePage;
//# sourceMappingURL=HomePage.js.map