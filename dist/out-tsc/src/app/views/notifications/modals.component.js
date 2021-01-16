import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
var ModalsComponent = /** @class */ (function () {
    function ModalsComponent() {
    }
    __decorate([
        ViewChild('myModal'),
        __metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "myModal", void 0);
    __decorate([
        ViewChild('largeModal'),
        __metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "largeModal", void 0);
    __decorate([
        ViewChild('smallModal'),
        __metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "smallModal", void 0);
    __decorate([
        ViewChild('primaryModal'),
        __metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "primaryModal", void 0);
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('warningModal'),
        __metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "warningModal", void 0);
    __decorate([
        ViewChild('dangerModal'),
        __metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "dangerModal", void 0);
    __decorate([
        ViewChild('infoModal'),
        __metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "infoModal", void 0);
    ModalsComponent = __decorate([
        Component({
            templateUrl: 'modals.component.html'
        })
    ], ModalsComponent);
    return ModalsComponent;
}());
export { ModalsComponent };
//# sourceMappingURL=modals.component.js.map