import { __awaiter, __generator } from "tslib";
import { AppDashboard } from './app.po';
describe('CoreUI template', function () {
    var page;
    var sleep = 300;
    page = new AppDashboard();
    var browser = page.getBrowser();
    browser.driver.manage().window().setSize(600, 800);
    browser.sleep(sleep);
    page.navigateTo();
    // beforeEach(() => {
    //   page = new AppDashboard();
    //   page.navigateTo();
    // });
    it('should display CoreUI Dashboard', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, page.getParagraphText()];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toEqual('Traffic');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should display footer containing creativeLabs', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, page.getFooterText()];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toContain('creativeLabs');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should toggle `sidebar-minimized` body.class on `sidebar-minimizer` click', function () {
        browser.manage().window().maximize();
        browser.sleep(1000);
        var body = page.getBody();
        expect(body.getAttribute('class')).not.toContain('sidebar-minimized');
        var button = page.getByCss('.sidebar-minimizer');
        button.click();
        browser.sleep(sleep);
        expect(body.getAttribute('class')).toContain('sidebar-minimized');
        browser.sleep(sleep);
        button.click();
        browser.sleep(sleep);
        expect(body.getAttribute('class')).not.toContain('sidebar-minimized');
        browser.driver.manage().window().setSize(600, 800);
        browser.sleep(1000);
    });
    it('should toggle `sidebar-show` body.class on `navbar-toggler` click', function () {
        browser.driver.manage().window().setSize(600, 800);
        browser.sleep(1000);
        var body = page.getBody();
        expect(body.getAttribute('class')).not.toContain('sidebar-show');
        var button1 = page.getByCss('.navbar-toggler.d-lg-none').first();
        browser.sleep(sleep);
        button1.click();
        browser.sleep(sleep);
        expect(body.getAttribute('class')).toContain('sidebar-show');
        var button2 = page.getByCss('.navbar-toggler').first();
        browser.sleep(sleep);
        button2.click();
        browser.sleep(sleep);
        expect(body.getAttribute('class')).not.toContain('sidebar-show');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map