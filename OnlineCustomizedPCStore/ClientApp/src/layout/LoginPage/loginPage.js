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
var LogInContent_1 = require("./LogInContent");
var LogInPage = /** @class */ (function (_super) {
    __extends(LogInPage, _super);
    function LogInPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.handleSuccessfulAuth = _this.handleSuccessfulAuth.bind(_this);
        _this.handleLogOutClick = _this.handleLogOutClick.bind(_this);
        return _this;
    }
    ;
    LogInPage.prototype.handleSuccessfulAuth = function (data) {
        this.props.handleLogin(data);
        this.props.history.push("/home");
    };
    LogInPage.prototype.handleLogOutClick = function () {
        this.props.handleLogOut();
    };
    LogInPage.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "container-fluid" }, this.props.loggedInStatus == "LOGGED_IN" ?
            React.createElement("button", { onClick: function () { return _this.handleLogOutClick(); } }, "Log Out") :
            React.createElement("div", null,
                React.createElement(LogInContent_1.default, { handleSuccessfulAuth: this.handleSuccessfulAuth }))));
    };
    return LogInPage;
}(react_1.Component));
exports.default = LogInPage;
//# sourceMappingURL=LogInPage.js.map