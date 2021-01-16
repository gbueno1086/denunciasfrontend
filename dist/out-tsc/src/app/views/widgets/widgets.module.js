import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
var WidgetsModule = /** @class */ (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        NgModule({
            imports: [
                WidgetsRoutingModule,
                ChartsModule,
                BsDropdownModule
            ],
            declarations: [WidgetsComponent]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());
export { WidgetsModule };
//# sourceMappingURL=widgets.module.js.map