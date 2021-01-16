import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { navItems } from '../../_nav';
var DefaultLayoutComponent = /** @class */ (function () {
    function DefaultLayoutComponent() {
        this.sidebarMinimized = false;
        this.navItems = navItems;
    }
    DefaultLayoutComponent.prototype.toggleMinimize = function (e) {
        this.sidebarMinimized = e;
    };
    DefaultLayoutComponent = __decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './default-layout.component.html'
        })
    ], DefaultLayoutComponent);
    return DefaultLayoutComponent;
}());
export { DefaultLayoutComponent };
//# sourceMappingURL=default-layout.component.js.map