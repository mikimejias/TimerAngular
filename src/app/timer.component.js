"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TimerComponent = (function () {
    function TimerComponent() {
        var _this = this;
        this.resetTimer();
        setInterval(function () { return _this.tick(); }, 1000);
    }
    TimerComponent.prototype.resetTimer = function () {
        this.minutos = 24;
        this.segundos = 59;
        this.buttonLabel = 'Empezar';
        this.togglePause();
    };
    TimerComponent.prototype.tick = function () {
        if (!this.isPaused) {
            this.buttonLabel = 'Detener';
            if (--this.segundos < 0) {
                this.segundos = 59;
                if (--this.minutos < 0) {
                    this.resetTimer();
                }
            }
        }
    };
    TimerComponent.prototype.togglePause = function () {
        this.isPaused = !this.isPaused;
        if (this.minutos < 24 || this.segundos < 59) {
            this.buttonLabel = this.isPaused ? 'Reanudar' : 'Detener';
        }
    };
    return TimerComponent;
}());
TimerComponent = __decorate([
    core_1.Component({
        selector: 'timer',
        template: "\n    <img src=\"../assets/img/reloj.png\" alt=\"Reloj\" style=\"width:300px\"/>\n    <h2>{{ minutos }} : {{ segundos | number: '2.0' }} </h2>\n    <button class=\"btn btn-danger\" (click)=\"togglePause()\">\n        {{ buttonLabel }}\n    </button>\n    \n    "
    }),
    __metadata("design:paramtypes", [])
], TimerComponent);
exports.TimerComponent = TimerComponent;
//# sourceMappingURL=timer.component.js.map