import { __decorate } from "tslib";
// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ThemeRoutingModule
            ],
            declarations: [
                ColorsComponent,
                TypographyComponent
            ]
        })
    ], ThemeModule);
    return ThemeModule;
}());
export { ThemeModule };
//# sourceMappingURL=theme.module.js.map