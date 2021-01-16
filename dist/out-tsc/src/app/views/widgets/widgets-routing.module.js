import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WidgetsComponent } from './widgets.component';
var routes = [
    {
        path: '',
        component: WidgetsComponent,
        data: {
            title: 'Widgets'
        }
    }
];
var WidgetsRoutingModule = /** @class */ (function () {
    function WidgetsRoutingModule() {
    }
    WidgetsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], WidgetsRoutingModule);
    return WidgetsRoutingModule;
}());
export { WidgetsRoutingModule };
//# sourceMappingURL=widgets-routing.module.js.map