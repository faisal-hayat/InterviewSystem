"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    //#endregion
    //#region constrcutor
    function Person(name, age) {
        if (name === void 0) { name = 'hello'; }
        if (age === void 0) { age = 10; }
        this.gender = 'M';
        this.age = age;
        this.name = name;
    }
    //#region interface implementation
    Person.prototype.completeDetail = function () {
        console.log('name is : ' + this.name.toString() + '\t' + 'age is : ' + this.age.toString());
    };
    //#endregion
    //#region getter
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    //#endregion
    //#region setters
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var obj = new Person();
obj.setAge(100);
obj.setName('hello');
console.log('name is : ' + obj.getName().toString());
console.log('age is : ' + obj.getAge().toString());
exports.default = Person;
