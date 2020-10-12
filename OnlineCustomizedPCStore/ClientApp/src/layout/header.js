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
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Header.prototype.render = function () {
        return (React.createElement("div", { className: "header" },
            React.createElement("nav", { className: "navbar navbar-expand-lg navbar-dark bg-dark" },
                React.createElement("a", { href: "#section", className: "navbar-brand" }, "Navbar"),
                React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                    React.createElement("span", { className: "navbar-toggler-icon" })),
                React.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                    React.createElement("ul", { className: "navbar-nav mr-auto" },
                        React.createElement("li", { className: "nav-item active" },
                            React.createElement("a", { href: "#section", className: "nav-link" },
                                "Home ",
                                React.createElement("span", { className: "sr-only" }, "(current)"))),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { href: "#section", className: "nav-link" }, "Link")),
                        React.createElement("li", { className: "nav-item dropdown" },
                            React.createElement("a", { href: "#section", className: "nav-link dropdown-toggle", id: "navbarDropdown", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Dropdown"),
                            React.createElement("div", { className: "dropdown-menu", "aria-labelledby": "navbarDropdown" },
                                React.createElement("a", { href: "#section", className: "dropdown-item" }, "Action"),
                                React.createElement("a", { href: "#section", className: "dropdown-item" }, "Another action"),
                                React.createElement("div", { className: "dropdown-divider" }),
                                React.createElement("a", { href: "#section", className: "dropdown-item" }, "Something else here"))),
                        React.createElement("li", { className: "nav-item dropdown" },
                            React.createElement("a", { href: "#section", className: "nav-link dropdown-toggle", id: "navbarDropdown", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Dropdown"),
                            React.createElement("div", { className: "dropdown-menu", "aria-labelledby": "navbarDropdown" },
                                React.createElement("a", { href: "#section", className: "dropdown-item" }, "Action"),
                                React.createElement("a", { href: "#section", className: "dropdown-item" }, "Another action"),
                                React.createElement("div", { className: "dropdown-divider" }),
                                React.createElement("a", { href: "#section", className: "dropdown-item" }, "Something else here"))),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { href: "#section", className: "nav-link disabled" }, "Disabled"))),
                    React.createElement("form", { className: "form-inline my-2 my-lg-0" },
                        React.createElement("input", { className: "form-control mr-sm-2", type: "search", placeholder: "Search", "aria-label": "Search" }),
                        React.createElement("button", { className: "btn btn-outline-success my-2 my-sm-0", type: "submit" }, "Search"))))));
    };
    return Header;
}(react_1.Component));
exports.default = Header;
//# sourceMappingURL=header.js.map