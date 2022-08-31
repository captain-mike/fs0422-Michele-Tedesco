"use strict";
exports.__esModule = true;
var Address_1 = require("./Address");
var User = /** @class */ (function () {
    function User(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    Object.defineProperty(User.prototype, "setAddress", {
        set: function (address) {
            this.address = address;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User('mario', 'rossi');
/////////////////////////////////////
var address = new Address_1.Address('via roma 1', 'roma', 'italia', 001, 91);
user.setAddress = address;
