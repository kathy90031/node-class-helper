"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(_firstName, _lastName, _age) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._age = _age;
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._age = _age;
    }
    Object.defineProperty(Student.prototype, "studentId", {
        get: function () {
            return this._studentId;
        },
        set: function (value) {
            this._studentId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=Student.js.map