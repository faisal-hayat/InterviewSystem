var Hello = /** @class */ (function () {
    //#endregion
    //#region constrcutor
    function Hello(name, age) {
        if (name === void 0) { name = 'hello'; }
        if (age === void 0) { age = 10; }
        this.age = age;
        this.name = name;
    }
    //#endregion
    //#region getter
    Hello.prototype.getName = function () {
        return this.name;
    };
    Hello.prototype.getAge = function () {
        return this.age;
    };
    //#endregion
    //#region setters
    Hello.prototype.setName = function (name) {
        this.name = name;
    };
    Hello.prototype.setAge = function (age) {
        this.age = age;
    };
    return Hello;
}());
