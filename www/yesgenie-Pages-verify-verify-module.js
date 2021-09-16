(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-verify-verify-module"],{

/***/ "./src/app/yesgenie/Pages/verify/verify.module.ts":
/*!********************************************************!*\
  !*** ./src/app/yesgenie/Pages/verify/verify.module.ts ***!
  \********************************************************/
/*! exports provided: VerifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function() { return VerifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify.page */ "./src/app/yesgenie/Pages/verify/verify.page.ts");







var routes = [
    {
        path: '',
        component: _verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]
    }
];
var VerifyPageModule = /** @class */ (function () {
    function VerifyPageModule() {
    }
    VerifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
        })
    ], VerifyPageModule);
    return VerifyPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/verify/verify.page.html":
/*!********************************************************!*\
  !*** ./src/app/yesgenie/Pages/verify/verify.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>verifyvcxvcx</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/yesgenie/Pages/verify/verify.page.scss":
/*!********************************************************!*\
  !*** ./src/app/yesgenie/Pages/verify/verify.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 23px;\n    margin-top: 4px; }\n  ion-content ion-avatar {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100px;\n  width: 100px; }\n  ion-content form {\n  padding-top: 230px; }\n  ion-content form ion-item {\n    --padding-start: 0; }\n  ion-content form ion-item ion-label {\n      color: gray; }\n  ion-content form ion-item:nth-child(6) {\n      height: 33px; }\n  ion-content form ion-item:nth-child(6) ion-label {\n        color: red; }\n  ion-content form p {\n    font-size: 14px;\n    font-family: 'roboto-regular';\n    margin-top: 25px !important; }\n  ion-content form p a {\n      color: black !important;\n      font-weight: bold !important; }\n  ion-content form ion-button {\n    text-transform: uppercase;\n    --color: white;\n    margin: 0;\n    border-radius: 0;\n    margin-top: 16px; }\n  .contentbglogin {\n  --background: url(/assets/template-themes/becrux/images/login/background.png); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy92ZXJpZnkvdmVyaWZ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUdJLGFBQVEsRUFBQTtFQUhaO0lBS1EsZUFBZTtJQUNmLGVBQWUsRUFBQTtFQUluQjtFQUdBLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZLEVBQUE7RUFQWjtFQVlBLGtCQUFrQixFQUFBO0VBWmxCO0lBY0Esa0JBQWdCLEVBQUE7RUFkaEI7TUFnQkEsV0FBVyxFQUFBO0VBaEJYO01BbUJBLFlBQVksRUFBQTtFQW5CWjtRQXFCQSxVQUFTLEVBQUE7RUFyQlQ7SUEwQkEsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QiwyQkFBMkIsRUFBQTtFQTVCM0I7TUE4QkksdUJBQXVCO01BQ3ZCLDRCQUE0QixFQUFBO0VBL0JoQztJQW9DQSx5QkFBeUI7SUFDekIsY0FBUTtJQUNSLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7RUFNaEI7RUFDSSw2RUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb3IgdG9vbGJhciBkZXNpZ25cbmlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAtLWNvbG9yOndoaXRlO1xuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDsgICAgfVxuICAgIH1cbiAgICB9XG4gICAgXG4gICAgaW9uLWNvbnRlbnR7XG4gICAgLy8gRm9yIGltYWdlIGRlc2lnblxuICAgIGlvbi1hdmF0YXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgXG4gICAgLy8gRm9yIEZvcm1cbiAgICBmb3Jte1xuICAgIHBhZGRpbmctdG9wOiAyMzBweDtcbiAgICBpb24taXRlbXtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgaW9uLWxhYmVse1xuICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgICAmOm50aC1jaGlsZCg2KXtcbiAgICBoZWlnaHQ6IDMzcHg7XG4gICAgaW9uLWxhYmVse1xuICAgIGNvbG9yOnJlZDtcbiAgICB9XG4gICAgfVxuICAgIH1cbiAgICBwe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICBtYXJnaW4tdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgYXtcbiAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIH1cbiAgICBpb24tYnV0dG9ue1xuICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmNvbnRlbnRiZ2xvZ2luIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy90ZW1wbGF0ZS10aGVtZXMvYmVjcnV4L2ltYWdlcy9sb2dpbi9iYWNrZ3JvdW5kLnBuZyk7XG4gICAgICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/verify/verify.page.ts":
/*!******************************************************!*\
  !*** ./src/app/yesgenie/Pages/verify/verify.page.ts ***!
  \******************************************************/
/*! exports provided: VerifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPage", function() { return VerifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../refund-policy/refund-policy.page */ "./src/app/yesgenie/Pages/refund-policy/refund-policy.page.ts");
/* harmony import */ var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../privacy-policy/privacy-policy.page */ "./src/app/yesgenie/Pages/privacy-policy/privacy-policy.page.ts");
/* harmony import */ var _term_services_term_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../term-services/term-services.page */ "./src/app/yesgenie/Pages/term-services/term-services.page.ts");







var VerifyPage = /** @class */ (function () {
    function VerifyPage(modalCtrl, 
    // private camera: Camera,
    toastCtrl, translate, navCtrl, menuCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.formData = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            username: '',
            wpgdprc: 1,
            register: 'Register'
        };
        this.errorMessage = 'Invalid username or password.';
    }
    VerifyPage.prototype.dismiss = function () {
        this.navCtrl.navigateForward("bs-login");
    };
    VerifyPage.prototype.goToTermServicesPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Term and Service Clicked',
                            buttons: [
                                {
                                    text: 'Close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Close clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    VerifyPage.prototype.goToPrivacyPolicyPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Privacy Policy Clicked',
                            buttons: [
                                {
                                    text: 'Close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Close clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    VerifyPage.prototype.goToRefundPolicyPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Fund Policy Clicked',
                            buttons: [
                                {
                                    text: 'Close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Close clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    VerifyPage.prototype.ngOnInit = function () {
    };
    VerifyPage.prototype.openTermServicesPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _term_services_term_services_page__WEBPACK_IMPORTED_MODULE_6__["TermServicesPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VerifyPage.prototype.openPrivacyPolicyPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VerifyPage.prototype.openRefundPolicyPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_4__["RefundPolicyPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VerifyPage.prototype.pinchEvent = function (e) {
        this.navCtrl.navigateForward("ui-templates-details");
    };
    VerifyPage.prototype.ionViewWillEnter = function () {
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    };
    VerifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! ./verify.page.html */ "./src/app/yesgenie/Pages/verify/verify.page.html"),
            styles: [__webpack_require__(/*! ./verify.page.scss */ "./src/app/yesgenie/Pages/verify/verify.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], VerifyPage);
    return VerifyPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-verify-verify-module.js.map