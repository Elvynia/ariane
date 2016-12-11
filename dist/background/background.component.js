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
var core_1 = require("@angular/core");
var BackgroundComponent = (function () {
    function BackgroundComponent() {
        this.position = 0;
        this.scale = new PIXI.Point(0.5, 0.42);
        this.posLayer5 = new PIXI.Point();
        this.posLayer4 = new PIXI.Point();
        this.posLayer3 = new PIXI.Point();
        this.posLayer2 = new PIXI.Point();
        this.posLayer1 = new PIXI.Point();
    }
    BackgroundComponent.prototype.ngOnChanges = function (changes) {
        if (changes['position']) {
            var prevOffset = changes['position'].previousValue;
            var delta = changes['position'].currentValue - (typeof prevOffset === 'number' ? prevOffset : 0);
            this.posLayer5.x += delta / 10;
            this.posLayer4.x += delta / 8;
            this.posLayer3.x += delta / 6;
            this.posLayer2.x += delta / 3;
            this.posLayer1.x += delta / 2;
        }
    };
    return BackgroundComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BackgroundComponent.prototype, "position", void 0);
BackgroundComponent = __decorate([
    core_1.Component({
        selector: 'background',
        templateUrl: '/views/background.template.html'
    }),
    __metadata("design:paramtypes", [])
], BackgroundComponent);
exports.BackgroundComponent = BackgroundComponent;
//# sourceMappingURL=background.component.js.map