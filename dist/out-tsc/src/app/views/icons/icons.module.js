import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CoreUIIconsComponent } from './coreui-icons.component';
import { FlagsComponent } from './flags.component';
import { FontAwesomeComponent } from './font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons.component';
import { IconsRoutingModule } from './icons-routing.module';
var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule = __decorate([
        NgModule({
            imports: [IconsRoutingModule],
            declarations: [
                CoreUIIconsComponent,
                FlagsComponent,
                FontAwesomeComponent,
                SimpleLineIconsComponent
            ]
        })
    ], IconsModule);
    return IconsModule;
}());
export { IconsModule };
//# sourceMappingURL=icons.module.js.map