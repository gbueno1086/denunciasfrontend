import { browser, by, element } from 'protractor';
var AppDashboard = /** @class */ (function () {
    function AppDashboard() {
    }
    AppDashboard.prototype.getBrowser = function () {
        return browser;
    };
    AppDashboard.prototype.navigateTo = function () {
        return browser.get('/');
    };
    AppDashboard.prototype.getParagraphText = function () {
        return element(by.xpath('/html/body/app-dashboard/div/main/div/ng-component/div/div[2]/div[1]/div[1]/div[1]/h4')).getText();
    };
    AppDashboard.prototype.getBody = function () {
        return element(by.xpath('/html/body'));
    };
    AppDashboard.prototype.getByCss = function (selector) {
        return element.all(by.css(selector));
    };
    AppDashboard.prototype.getFooterText = function () {
        return element(by.className('app-footer')).getText();
    };
    return AppDashboard;
}());
export { AppDashboard };
//# sourceMappingURL=app.po.js.map