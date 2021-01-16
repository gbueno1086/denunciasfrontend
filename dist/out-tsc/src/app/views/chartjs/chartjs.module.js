import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';
var ChartJSModule = /** @class */ (function () {
    function ChartJSModule() {
    }
    ChartJSModule = __decorate([
        NgModule({
            imports: [
                ChartJSRoutingModule,
                ChartsModule
            ],
            declarations: [ChartJSComponent]
        })
    ], ChartJSModule);
    return ChartJSModule;
}());
export { ChartJSModule };
//# sourceMappingURL=chartjs.module.js.map