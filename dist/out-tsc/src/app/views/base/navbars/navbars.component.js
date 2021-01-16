import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CollapseDirective } from 'ngx-bootstrap';
var NavbarsComponent = /** @class */ (function () {
    function NavbarsComponent(renderer) {
        this.renderer = renderer;
        this._isCollapsed = true;
    }
    Object.defineProperty(NavbarsComponent.prototype, "isCollapsed", {
        get: function () {
            if (this.collapseRef) {
                // temp fix for "overflow: hidden"
                if (getComputedStyle(this.collapseRef.nativeElement).getPropertyValue('display') === 'flex') {
                    this.renderer.removeStyle(this.collapseRef.nativeElement, 'overflow');
                }
            }
            return this._isCollapsed;
        },
        set: function (value) {
            this._isCollapsed = value;
        },
        enumerable: true,
        configurable: true
    });
    NavbarsComponent.prototype.ngOnInit = function () { };
    NavbarsComponent.prototype.ngAfterViewChecked = function () {
        this.collapseRef = this.collapse;
    };
    __decorate([
        ViewChild(CollapseDirective, { read: ElementRef, static: false }),
        __metadata("design:type", CollapseDirective)
    ], NavbarsComponent.prototype, "collapse", void 0);
    NavbarsComponent = __decorate([
        Component({
            selector: 'app-navbars',
            templateUrl: './navbars.component.html',
            styleUrls: ['./navbars.component.css']
        }),
        __metadata("design:paramtypes", [Renderer2])
    ], NavbarsComponent);
    return NavbarsComponent;
}());
export { NavbarsComponent };
//# sourceMappingURL=navbars.component.js.map