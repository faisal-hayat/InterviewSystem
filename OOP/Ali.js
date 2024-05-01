"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Ali = /** @class */ (function (_super) {
    __extends(Ali, _super);
    function Ali(middleName, education) {
        if (middleName === void 0) { middleName = ''; }
        if (education === void 0) { education = ''; }
        var _this = _super.call(this) || this;
        _this.middleName = middleName;
        _this.education = education;
        return _this;
    }
    Ali.prototype.getMiddleName = function () {
        throw new Error("Method not implemented.");
    };
    Ali.prototype.getEducation = function () {
        throw new Error("Method not implemented.");
    };
    Ali.prototype.setMiddleName = function (name) {
        throw new Error("Method not implemented.");
    };
    Ali.prototype.setEducation = function (education) {
        throw new Error("Method not implemented.");
    };
    return Ali;
}(Person_1.default));
var obj = new Ali();
obj.setName('Ali');
obj.setAge(10);
obj.completeDetail();
exports.default = Ali;
