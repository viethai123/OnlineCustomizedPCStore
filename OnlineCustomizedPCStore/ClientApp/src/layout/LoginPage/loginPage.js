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
require("../../script");
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    LoginPage.prototype.render = function () {
        return (React.createElement("div", { id: "logreg-forms" },
            React.createElement("form", { className: "form-signin" },
                React.createElement("h1", { className: "h3 mb-3 font-weight-normal", style: { textAlign: "center" } }, " Sign in"),
                React.createElement("input", { type: "email", id: "inputEmail", className: "form-control", placeholder: "Email address" }),
                React.createElement("input", { type: "password", id: "inputPassword", className: "form-control", placeholder: "Password" }),
                React.createElement("button", { className: "btn btn-success btn-block", type: "submit" },
                    React.createElement("i", { className: "fas fa-sign-in-alt" }),
                    " Sign in"),
                React.createElement("a", { href: "#", id: "forgot_pswd" }, "Forgot password?"),
                React.createElement("hr", null),
                React.createElement("button", { className: "btn btn-primary btn-block", type: "button", id: "btn-signup" },
                    React.createElement("i", { className: "fas fa-user-plus" }),
                    " Sign up New Account")),
            React.createElement("form", { action: "/reset/password/", className: "form-reset" },
                React.createElement("input", { type: "email", id: "resetEmail", className: "form-control", placeholder: "Email address" }),
                React.createElement("button", { className: "btn btn-primary btn-block", type: "submit" }, "Reset Password"),
                React.createElement("a", { href: "#", id: "cancel_reset" },
                    React.createElement("i", { className: "fas fa-angle-left" }),
                    " Back")),
            React.createElement("form", { action: "/signup/", className: "form-signup" },
                React.createElement("input", { type: "text", id: "user-name", className: "form-control", placeholder: "Full name" }),
                React.createElement("input", { type: "email", id: "user-email", className: "form-control", placeholder: "Email address", required: true }),
                React.createElement("input", { type: "password", id: "user-pass", className: "form-control", placeholder: "Password", required: true }),
                React.createElement("input", { type: "password", id: "user-repeatpass", className: "form-control", placeholder: "Repeat Password", required: true }),
                React.createElement("button", { className: "btn btn-primary btn-block", type: "submit" },
                    React.createElement("i", { className: "fas fa-user-plus" }),
                    " Sign Up"),
                React.createElement("a", { href: "#", id: "cancel_signup" },
                    React.createElement("i", { className: "fas fa-angle-left" }),
                    " Back")),
            React.createElement("br", null)));
    };
    return LoginPage;
}(react_1.Component));
exports.default = LoginPage;
//# sourceMappingURL=loginPage.js.map