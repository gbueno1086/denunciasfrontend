import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
var CarouselsComponent = /** @class */ (function () {
    function CarouselsComponent() {
        this.myInterval = 6000;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    CarouselsComponent.prototype.ngOnDestroy = function () {
        this.myInterval = 0;
        this.noWrapSlides = true;
        this.myInterval = false;
    };
    CarouselsComponent.prototype.addSlide = function () {
        var _this = this;
        setTimeout(function () {
            var seed = Math.random().toString(36).slice(-6);
            _this.slides.push({
                image: "https://picsum.photos/seed/" + seed + "/900/500"
            });
        }, 500);
    };
    CarouselsComponent.prototype.removeSlide = function (index) {
        var toRemove = index ? index : this.activeSlideIndex;
        this.slides.splice(toRemove, 1);
    };
    CarouselsComponent = __decorate([
        Component({
            templateUrl: 'carousels.component.html',
            providers: [
                { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselsComponent);
    return CarouselsComponent;
}());
export { CarouselsComponent };
//# sourceMappingURL=carousels.component.js.map