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
var axios_1 = require("axios");
var BuildComponent_1 = require("./BuildComponent");
var CompletedBuild = /** @class */ (function (_super) {
    __extends(CompletedBuild, _super);
    function CompletedBuild(props) {
        var _this = _super.call(this, props) || this;
        _this.ChooseCompletedBuild = function (item) {
            debugger;
            var CompletedBuild = _this.state.CompletedBuild;
            CompletedBuild.ProcessorSku = item.processorSku;
            CompletedBuild.MainboarSku = item.mainboarSku;
            CompletedBuild.RAMSku = item.ramSku;
            CompletedBuild.HDDSku = item.hddSku;
            CompletedBuild.SSDSku = item.ssdSku;
            CompletedBuild.VGASku = item.vgaSku;
            CompletedBuild.SourceSku = item.sourceSku;
            CompletedBuild.CaseSku = item.caseSku;
            CompletedBuild.RadiatorsSku = item.radiatorsSku;
            CompletedBuild.ScreenSku = item.screenSku;
            CompletedBuild.KeyboardSku = item.keyboardSku;
            CompletedBuild.MouseSku = item.mouseSku;
            CompletedBuild.HeadphoneSku = item.headphoneSku;
            CompletedBuild.SpeakersSku = item.speakersSku;
            _this.setState({ CompletedBuild: CompletedBuild });
            console.log(CompletedBuild);
        };
        _this.state = {
            CompletedBuilds: [],
            CompletedBuild: {
                ProcessorSku: "",
                MainboarSku: "",
                RAMSku: "",
                HDDSku: "",
                SSDSku: "",
                VGASku: "",
                SourceSku: "",
                CaseSku: "",
                RadiatorsSku: "",
                ScreenSku: "",
                KeyboardSku: "",
                MouseSku: "",
                HeadphoneSku: "",
                SpeakersSku: ""
            }
        };
        return _this;
    }
    CompletedBuild.prototype.componentDidMount = function () {
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
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompletedBuild.prototype.UpdateOptionUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var UserId, CompletedBuild, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        UserId = 1;
                        CompletedBuild = this.state.CompletedBuild;
                        message = 0;
                        return [4 /*yield*/, axios_1.default({
                                method: 'put',
                                url: 'api/ComputerComponent/UpdateUserOption',
                                params: {
                                    ProcessorSku: CompletedBuild.ProcessorSku,
                                    MainboarSku: CompletedBuild.MainboarSku,
                                    RAMSku: CompletedBuild.RAMSku,
                                    HDDSku: CompletedBuild.HDDSku,
                                    SSDSku: CompletedBuild.SSDSku,
                                    VGASku: CompletedBuild.VGASku,
                                    SourceSku: CompletedBuild.SourceSku,
                                    CaseSku: CompletedBuild.CaseSku,
                                    RadiatorsSku: CompletedBuild.RadiatorsSku,
                                    ScreenSku: CompletedBuild.ScreenSku,
                                    KeyboardSku: CompletedBuild.KeyboardSku,
                                    MouseSku: CompletedBuild.MouseSku,
                                    HeadphoneSku: CompletedBuild.HeadphoneSku,
                                    SpeakersSku: CompletedBuild.SpeakersSku,
                                    UserId: UserId
                                }
                            })
                                .then(function (response) {
                                console.log(response);
                                message = response.data;
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axios_1.default({
                                method: 'delete',
                                url: 'api/Quantity/DeleteProductQuantity',
                                params: {
                                    UserId: 1
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, axios_1.default({
                                method: 'post',
                                url: 'api/Quantity/AddCompletedBuildOption',
                                params: {
                                    ProcessorSku: CompletedBuild.ProcessorSku,
                                    MainboarSku: CompletedBuild.MainboarSku,
                                    RAMSku: CompletedBuild.RAMSku,
                                    HDDSku: CompletedBuild.HDDSku,
                                    SSDSku: CompletedBuild.SSDSku,
                                    VGASku: CompletedBuild.VGASku,
                                    SourceSku: CompletedBuild.SourceSku,
                                    CaseSku: CompletedBuild.CaseSku,
                                    RadiatorsSku: CompletedBuild.RadiatorsSku,
                                    ScreenSku: CompletedBuild.ScreenSku,
                                    KeyboardSku: CompletedBuild.KeyboardSku,
                                    MouseSku: CompletedBuild.MouseSku,
                                    HeadphoneSku: CompletedBuild.HeadphoneSku,
                                    SpeakersSku: CompletedBuild.SpeakersSku,
                                    Quantity: 1,
                                    UserId: UserId
                                }
                            })
                                .then(function (response) {
                                console.log(response);
                                message = response.data;
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompletedBuild.prototype.render = function () {
        var _this = this;
        return (React.createElement("section", { className: "main-wrapper xs-col-12" },
            React.createElement("div", { className: "wrapper wrapper__pageTitle" },
                React.createElement("section", { className: "xs-col-11 lg-col-9 xl-col-8 xs-mx-auto" },
                    React.createElement("h1", { className: "pageTitle" }, "Completed Builds"))),
            React.createElement("div", { className: "wrapper wrapper__pageContent " },
                React.createElement("section", { className: "xs-col-11 xs-mx-auto" },
                    React.createElement("div", { className: "wrapper--columns clearfix" },
                        React.createElement("div", { className: "main-content" },
                            React.createElement("div", { className: "block" },
                                React.createElement("section", { id: "module-subTitle" },
                                    React.createElement("div", { className: "subTitle" },
                                        React.createElement("div", { className: "subTitle__header xs-col-12" },
                                            React.createElement("h2", null, "Completed Builds")),
                                        React.createElement("div", { className: "subTitle__form" },
                                            React.createElement("form", null,
                                                React.createElement("label", { className: "form-label xs-inline" }, "Sort by"),
                                                React.createElement("select", { className: "select xs-inline", id: "userbuild_sort" },
                                                    React.createElement("option", { value: "recent" }, "Date Posted (Newest)"),
                                                    React.createElement("option", { value: "-recent" }, "Date Posted (Oldest)"),
                                                    React.createElement("option", { value: "rating" }, "Highest Rated"),
                                                    React.createElement("option", { value: "price" }, "Highest Price"))),
                                            React.createElement("form", null,
                                                React.createElement("label", { className: "form-label xs-inline" },
                                                    React.createElement("svg", { className: "icon shape-search" },
                                                        React.createElement("use", { xlinkHref: "#shape-search" }))),
                                                React.createElement("input", { type: "text", className: "text-input inactive_search", placeholder: "Builds", id: "userbuild_search" }))))),
                                React.createElement("ul", { id: "userbuild_list", className: "logGrid list-unstyled" }, this.state.CompletedBuilds.map(function (item, key) {
                                    return (React.createElement(BuildComponent_1.default, { key: key, item: item, ChooseCompletedBuild: function () { return _this.ChooseCompletedBuild(item); }, UpdateOptionUser: function () { return _this.UpdateOptionUser(); } }));
                                }))),
                            React.createElement("div", { className: "block", id: "page_button_row_bot" },
                                React.createElement("section", { id: "module-pagination" },
                                    React.createElement("ul", { className: "pagination list-unstyled xs-text-center" },
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "?page=1", className: "pagination--current" }, "1")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "?page=2" }, "2")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "?page=3" }, "3")))))))))));
    };
    return CompletedBuild;
}(react_1.Component));
exports.default = CompletedBuild;
//# sourceMappingURL=CompletedBuild.js.map