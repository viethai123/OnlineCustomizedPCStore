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
/* eslint-disable import/first */
var React = require("react");
var react_1 = require("react");
var axios_1 = require("axios");
var LogInContent = /** @class */ (function (_super) {
    __extends(LogInContent, _super);
    function LogInContent(props) {
        var _this = _super.call(this, props) || this;
        _this.isActive = function () {
            var isActive = _this.state.isActive;
            var closeSignIn = _this.state.closeSignIn;
            _this.setState({
                isActive: !isActive, closeSignIn: !closeSignIn
            });
        };
        _this.state = {
            id: '',
            usersign: '',
            passsign: '',
            username: '',
            password: '',
            userFullName: '',
            userEmail: '',
            isActive: false,
            data: [],
            inputClass: false,
            inputClass2: false,
            inputClass3: false,
            inputClass4: false,
            inputClass5: false,
            inputClass6: false,
            closeSignIn: true,
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.userSignUp = _this.userSignUp.bind(_this);
        _this.checkUserName = _this.checkUserName.bind(_this);
        return _this;
    }
    LogInContent.prototype.handleChange = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.setState((_a = {},
                            _a[event.target.name] = event.target.value,
                            _a))];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LogInContent.prototype.userSignUp = function () {
        var _this = this;
        debugger;
        var _a = this.state, usersign = _a.usersign, passsign = _a.passsign, userFullName = _a.userFullName, userEmail = _a.userEmail, data = _a.data;
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
    LogInContent.prototype.userLogIn = function () {
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
    LogInContent.prototype.checkUserName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var username;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = this.state.usersign;
                        if (!(username == '')) return [3 /*break*/, 1];
                        alert('Please fill in username');
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, axios_1.default({
                            method: 'post',
                            url: 'api/UserAccount/CheckUserName',
                            params: {
                                userName: username,
                            },
                        }).then(function (response) {
                            if (response.data.length !== 0) {
                                alert("This user name is available");
                            }
                            else {
                                alert("You can use this username.");
                                _this.setState({ data: response.data.length });
                            }
                        })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LogInContent.prototype.focus = function () {
        this.setState({
            inputClass: true
        });
    };
    LogInContent.prototype.focus2 = function () {
        this.setState({
            inputClass2: true
        });
    };
    LogInContent.prototype.focus3 = function () {
        this.setState({
            inputClass3: true
        });
    };
    LogInContent.prototype.focus4 = function () {
        this.setState({
            inputClass4: true
        });
    };
    LogInContent.prototype.focus5 = function () {
        this.setState({
            inputClass5: true
        });
    };
    LogInContent.prototype.focus6 = function () {
        this.setState({
            inputClass6: true
        });
    };
    LogInContent.prototype.render = function () {
        var _this = this;
        var inputs = document.querySelectorAll('.u-input');
        function focusFunc() {
            var parent = this.parentNode.parentNode;
            parent.classList.add('focus');
        }
        function blurFunc() {
            var parent = this.parentNode.parentNode;
            if (this.value == "") {
                parent.classList.remove('focus');
            }
        }
        inputs.forEach(function (input) {
            input.addEventListener('focus', focusFunc);
            input.addEventListener('blur', blurFunc);
        });
        var inputone = this.state.inputClass ? 'input-div one focus' : 'input-div one';
        var inputtwo = this.state.inputClass2 ? 'input-div two focus' : 'input-div two';
        var input1 = this.state.inputClass3 ? 'input-div three focus' : 'input-div three';
        var input2 = this.state.inputClass4 ? 'input-div four focus' : 'input-div four';
        var input3 = this.state.inputClass5 ? 'input-div five focus' : 'input-div five';
        var input4 = this.state.inputClass6 ? 'input-div six focus' : 'input-div six';
        console.log(this.state.passsign);
        console.log(this.state.usersign);
        return (React.createElement("div", { className: "container-fluid-login" },
            this.state.closeSignIn ?
                React.createElement("div", { className: "container login" },
                    React.createElement("div", { className: "login-container" },
                        React.createElement("div", { className: "form" },
                            React.createElement("h2", null, "LOG IN"),
                            React.createElement("div", { className: inputone, onClick: function () { return _this.focus(); } },
                                React.createElement("div", { className: "i" },
                                    React.createElement("i", { className: "fa fa-user", "aria-hidden": "true" })),
                                React.createElement("div", null,
                                    React.createElement("h5", null, "Username"),
                                    React.createElement("input", { className: "box-none u-input", type: "text", name: "username", onChange: this.handleChange }))),
                            React.createElement("div", { className: inputtwo, onClick: function () { return _this.focus2(); } },
                                React.createElement("div", { className: "i" },
                                    React.createElement("i", { className: "fa fa-lock", "aria-hidden": "true" })),
                                React.createElement("div", null,
                                    React.createElement("h5", null, "Password"),
                                    React.createElement("input", { className: "box-none u-input", type: "password", name: "password", onChange: this.handleChange }))),
                            React.createElement("button", { className: "login-a", onClick: function () { return _this.isActive(); } }, "Register an account"),
                            React.createElement("input", { type: "submit", className: "login-btn", value: "Login", onClick: function () { _this.userLogIn(); } })))) : null,
            this.state.isActive ?
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "container login" },
                        React.createElement("div", { className: "login-container" },
                            React.createElement("div", { className: "form" },
                                React.createElement("h2", null, "SIGN UP"),
                                React.createElement("form", null,
                                    React.createElement("div", { className: input1, onClick: function () { return _this.focus3(); } },
                                        React.createElement("div", { className: "i" },
                                            React.createElement("i", { className: "fa fa-user", "aria-hidden": "true" })),
                                        React.createElement("div", null,
                                            React.createElement("h5", null, "Full name"),
                                            React.createElement("input", { className: "box-none u-input", type: "text", name: "userFullName", value: this.state.userFullName, onChange: this.handleChange, required: true }))),
                                    React.createElement("div", { className: input2, onClick: function () { return _this.focus4(); } },
                                        React.createElement("div", { className: "i" },
                                            React.createElement("i", { className: "fa fa-lock", "aria-hidden": "true" })),
                                        React.createElement("div", null,
                                            React.createElement("h5", null, "Username"),
                                            React.createElement("input", { className: "box-none u-input", type: "text", onChange: this.handleChange, name: "usersign", value: this.state.usersign, required: true }))),
                                    React.createElement("button", { className: "check-btn", type: "submit", onClick: function () { return _this.checkUserName(); } }, "Check UserName"),
                                    React.createElement("div", { className: input3, onClick: function () { return _this.focus5(); } },
                                        React.createElement("div", { className: "i" },
                                            React.createElement("i", { className: "fa fa-lock", "aria-hidden": "true" })),
                                        React.createElement("div", null,
                                            React.createElement("h5", null, "Password"),
                                            React.createElement("input", { className: "box-none u-input", type: "text", name: "passsign", value: this.state.passsign, onChange: this.handleChange, required: true }))),
                                    React.createElement("div", { className: input4, onClick: function () { return _this.focus6(); } },
                                        React.createElement("div", { className: "i" },
                                            React.createElement("i", { className: "fa fa-lock", "aria-hidden": "true" })),
                                        React.createElement("div", null,
                                            React.createElement("h5", null, "Email Address"),
                                            React.createElement("input", { className: "box-none u-input", onChange: this.handleChange, type: "text", name: "userEmail", value: this.state.userEmail, required: true }))),
                                    React.createElement("button", { type: "submit", className: "login-btn", onClick: this.userSignUp }, "Sign up"),
                                    React.createElement("button", { type: "submit", className: "login-btn", onClick: function () { return _this.isActive(); } }, "Sign in")))))) : null));
    };
    return LogInContent;
}(react_1.Component));
exports.default = LogInContent;
//# sourceMappingURL=LogInContent.js.map