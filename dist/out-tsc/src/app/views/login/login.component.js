import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formLogin = this.formBuilder.group({
            username: [null, Validators.required],
            password: [null, Validators.required]
        });
    };
    LoginComponent.prototype.loginUser = function (event) {
        console.log(event);
    };
    LoginComponent.prototype.aplicaErro = function (nome) {
    };
    LoginComponent.prototype.resetForm = function () {
        this.formLogin.reset();
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: 'login.component.html'
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map