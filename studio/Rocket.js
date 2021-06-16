"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var sum = 0;
        for (var i = 0; i < this.astronauts.length; i++) {
            sum += this.astronauts[i].massKg;
        }
        for (var i = 0; i < this.astronauts.length; i++) {
            sum += this.cargoItems[i].massKg;
        }
        this.sumMass += sum;
        return sum;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg(this.sumMass) + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd() === true) {
            cargo.push(this.cargoItems);
            return true;
        }
        else if (this.canAdd() === false) {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd() === true) {
            astronaut.push(this.astronauts);
            return true;
        }
        else if (this.canAdd() === false) {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
