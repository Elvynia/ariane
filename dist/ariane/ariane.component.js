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
var core_2 = require("@trilliangular/core");
var runtime_pixi_1 = require("@trilliangular/runtime-pixi");
var ArianeComponent = (function () {
    function ArianeComponent() {
        this.backgroundOffset = 0;
        this.directions = [false, false];
    }
    Object.defineProperty(ArianeComponent.prototype, "player", {
        get: function () {
            return this.playerComp.instance;
        },
        enumerable: true,
        configurable: true
    });
    ArianeComponent.prototype.update = function (delta) {
        if (this.directions[0]) {
            this.backgroundOffset += delta;
        }
        else if (this.directions[1]) {
            this.backgroundOffset -= delta;
        }
    };
    ArianeComponent.prototype.init = function () {
        this.player.stateData.setMixByName('run', 'idle', 0.4);
        this.player.stateData.setMixByName('idle', 'run', 0.2);
        this.player.stateData.setMixByName('jump', 'idle', 0.4);
        this.player.stateData.setMixByName('jump', 'run', 0.2);
        this.player.stateData.setMixByName('idle', 'jump', 0.2);
        this.player.stateData.setMixByName('run', 'jump', 0.2);
        this.player.state.setAnimationByName(0, 'idle', true);
    };
    ArianeComponent.prototype.updateDirections = function (moving, right) {
        if (right) {
            this.directions[1] = moving;
            this.player.skeleton.flipX = false;
        }
        else {
            this.directions[0] = moving;
            this.player.skeleton.flipX = true;
        }
        if (moving) {
            this.player.state.setAnimationByName(0, 'run', true);
        }
        else {
            this.player.state.setAnimationByName(0, 'idle', true);
        }
    };
    ArianeComponent.prototype.jump = function () {
        this.player.state.setAnimationByName(0, 'jump', false);
        if (this.directions[0] || this.directions[1]) {
            this.player.state.addAnimationByName(0, 'run', true, 1);
        }
        else {
            this.player.state.addAnimationByName(0, 'idle', true, 1);
        }
    };
    return ArianeComponent;
}());
__decorate([
    core_1.ViewChild('player'),
    __metadata("design:type", runtime_pixi_1.PixiSpineComponent)
], ArianeComponent.prototype, "playerComp", void 0);
ArianeComponent = __decorate([
    core_1.Component({
        selector: 'ariane',
        templateUrl: '/views/ariane.template.html',
        styleUrls: ['../css/ariane.css'],
        providers: [core_2.TrilliangularService]
    }),
    __metadata("design:paramtypes", [])
], ArianeComponent);
exports.ArianeComponent = ArianeComponent;
//# sourceMappingURL=ariane.component.js.map