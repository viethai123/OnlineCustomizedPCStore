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
require("../../script");
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            id: '',
            usersign: '',
            passsign: '',
            username: '',
            password: '',
            userEmail: '',
            isActive: false,
            data: [],
        };
        return _this;
    }
    LoginPage.prototype.handleSuccessfulAuth = function (data) {
        this.props.handleLogin(data);
        this.props.history.push("/home");
    };
    //handleLogOutClick() {
    //	this.props.handleLogOut();
    //}
    LoginPage.prototype.SignUp = function () {
        var _this = this;
        debugger;
        var _a = this.state, usersign = _a.usersign, passsign = _a.passsign, userEmail = _a.userEmail, data = _a.data;
        if (data !== 0 || usersign == '' || passsign == '') {
            alert("Please fullfill username and password.");
        }
        else {
            axios_1.default({
                method: 'post',
                url: 'api/UserAccount/AddUserAccount',
                params: {
                    Name: usersign,
                    Password: passsign,
                    Email: userEmail,
                },
                withCredentials: true
            }).then(function (response) {
                if (response.data !== 1) {
                    alert("Fail to create account");
                }
                else {
                    alert("Create account success.");
                    _this.setState({ isActive: false, closeSignIn: true });
                }
            });
        }
    };
    ;
    LoginPage.prototype.SignIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var username, password;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = this.state.username;
                        password = this.state.password;
                        return [4 /*yield*/, axios_1.default({
                                method: 'get',
                                url: 'api/UserAccount/CheckAccountLogin',
                                params: {
                                    Name: username,
                                    Password: password,
                                },
                            }).then(function (response) {
                                if (response.data[0] == null) {
                                    alert("Incorrect username or password. Please try again");
                                }
                                else {
                                    _this.props.handleSuccessfulAuth(response.data);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    LoginPage.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { id: "logreg-forms" },
            React.createElement("form", { className: "form-signin" },
                React.createElement("h1", { className: "h3 mb-3 font-weight-normal", style: { textAlign: "center" } }, " Sign in"),
                React.createElement("input", { type: "email", id: "inputEmail", className: "form-control", placeholder: "Email address" }),
                React.createElement("input", { type: "password", id: "inputPassword", className: "form-control", placeholder: "Password" }),
                React.createElement("button", { className: "btn btn-success btn-block", type: "submit", onClick: function () { return _this.SignIn(); } },
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
                React.createElement("button", { className: "btn btn-primary btn-block", type: "submit", onClick: function () { return _this.SignUp(); } },
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