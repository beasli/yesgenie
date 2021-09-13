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

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 23px;\n    margin-top: 4px; }\n  ion-content ion-avatar {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100px;\n  width: 100px; }\n  ion-content form {\n  padding-top: 230px; }\n  ion-content form ion-item {\n    --padding-start: 0; }\n  ion-content form ion-item ion-label {\n      color: gray; }\n  ion-content form ion-item:nth-child(6) {\n      height: 33px; }\n  ion-content form ion-item:nth-child(6) ion-label {\n        color: red; }\n  ion-content form p {\n    font-size: 14px;\n    font-family: 'roboto-regular';\n    margin-top: 25px !important; }\n  ion-content form p a {\n      color: black !important;\n      font-weight: bold !important; }\n  ion-content form ion-button {\n    text-transform: uppercase;\n    --color: white;\n    margin: 0;\n    border-radius: 0;\n    margin-top: 16px; }\n  .contentbglogin {\n  --background: url(/assets/template-themes/becrux/images/login/background.png); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFHSSxhQUFRLEVBQUE7RUFIWjtJQUtRLGVBQWU7SUFDZixlQUFlLEVBQUE7RUFJbkI7RUFHQSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWSxFQUFBO0VBUFo7RUFZQSxrQkFBa0IsRUFBQTtFQVpsQjtJQWNBLGtCQUFnQixFQUFBO0VBZGhCO01BZ0JBLFdBQVcsRUFBQTtFQWhCWDtNQW1CQSxZQUFZLEVBQUE7RUFuQlo7UUFxQkEsVUFBUyxFQUFBO0VBckJUO0lBMEJBLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsMkJBQTJCLEVBQUE7RUE1QjNCO01BOEJJLHVCQUF1QjtNQUN2Qiw0QkFBNEIsRUFBQTtFQS9CaEM7SUFvQ0EseUJBQXlCO0lBQ3pCLGNBQVE7SUFDUixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0VBTWhCO0VBQ0ksNkVBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL3ZlcmlmeS92ZXJpZnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9yIHRvb2xiYXIgZGVzaWduXG5pb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgLS1jb2xvcjp3aGl0ZTtcbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7ICAgIH1cbiAgICB9XG4gICAgfVxuICAgIFxuICAgIGlvbi1jb250ZW50e1xuICAgIC8vIEZvciBpbWFnZSBkZXNpZ25cbiAgICBpb24tYXZhdGFye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIFxuICAgIC8vIEZvciBGb3JtXG4gICAgZm9ybXtcbiAgICBwYWRkaW5nLXRvcDogMjMwcHg7XG4gICAgaW9uLWl0ZW17XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIGlvbi1sYWJlbHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoNil7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIGlvbi1sYWJlbHtcbiAgICBjb2xvcjpyZWQ7XG4gICAgfVxuICAgIH1cbiAgICB9XG4gICAgcHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgbWFyZ2luLXRvcDogMjVweCAhaW1wb3J0YW50O1xuICAgIGF7XG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICB9XG4gICAgaW9uLWJ1dHRvbntcbiAgICAvLyAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICB9XG4gICAgfVxuICAgIFxuICAgIC5jb250ZW50Ymdsb2dpbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvdGVtcGxhdGUtdGhlbWVzL2JlY3J1eC9pbWFnZXMvbG9naW4vYmFja2dyb3VuZC5wbmcpO1xuICAgICAgICAgIH0iXX0= */"

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