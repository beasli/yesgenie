(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-about-us-about-us-module"],{

/***/ "./src/app/yesgenie/Pages/about-us/about-us.module.ts":
/*!************************************************************!*\
  !*** ./src/app/yesgenie/Pages/about-us/about-us.module.ts ***!
  \************************************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us.page */ "./src/app/yesgenie/Pages/about-us/about-us.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");







// For Translation Language

var routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]
    }
];
var AboutUsPageModule = /** @class */ (function () {
    function AboutUsPageModule() {
    }
    AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ],
            declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]],
        })
    ], AboutUsPageModule);
    return AboutUsPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/about-us/about-us.page.html":
/*!************************************************************!*\
  !*** ./src/app/yesgenie/Pages/about-us/about-us.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title class=\"ecom-title\">\n      About Us\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button fill=\"clear\" (click)=\"goToSearchPage()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button> -->\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge>{{service1.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <ion-text no-padding>\n    <p>\n      Yes Genie is India’s 1st Full Stack marketplace for all types of Products whether essential, utility, or lifestyle. Our products are carefully selected and processed under stringent standards to deliver the perfect product for Indian people. Yes Genie built on the firm foundation of their promise of providing the products to the customers with honest pricing & the best quality with-quick and fast services to customer door-step 365 days of the year.<br><br>\n\n      Today you can shop from Yes Genie home Brands and eliminate the worry of quality, price, freshness, and hassles of traffic, parking, and be waiting in queues for billing from the comfort of your home. Under Yes Genie, we give access to the customer to buy all kinds of products without having to worry about impulse purchase during the shopping.\n\n\n    </p>\n  </ion-text>\n  <ion-list no-padding>\n    <!-- <ion-item lines=\"full\" (click)=\"officiaWebSite()\">\n      {{\"Official Website\"|translate}}\n      <ion-icon class=\"theme-icon\"  name=\"arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item> -->\n    <ion-item (click)=\"showModal('privacyPolicy')\" lines=\"full\">\n      {{'Privacy Policy'|translate}}\n      <ion-icon class=\"theme-icon\"  name=\"arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"showModal('refundPolicy')\" lines=\"full\">\n      {{'Refund Policy'|translate}}\n      <ion-icon class=\"theme-icon\"  name=\"arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"showModal('termServices')\" lines=\"none\">\n      {{'Term and Services'|translate}}\n      <ion-icon class=\"theme-icon\"  name=\"arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/about-us/about-us.page.scss":
/*!************************************************************!*\
  !*** ./src/app/yesgenie/Pages/about-us/about-us.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content ion-text p {\n  padding-left: 16px;\n  padding-right: 16px;\n  font-family: 'roboto-regular';\n  padding-top: 16px;\n  font-size: 18px;\n  text-align: justify; }\n  ion-content ion-list {\n  margin-left: 10px;\n  margin-right: 10px; }\n  ion-content ion-list ion-item {\n    font-size: 14px;\n    --background:white; }\n  ion-content ion-list ion-item ion-icon {\n      zoom: 1.1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsYUFBUSxFQUFBO0VBSGhCO0lBS1ksZUFBZSxFQUFBO0VBTDNCO0lBU2dCLFlBQVksRUFBQTtFQVQ1QjtJQWNnQixlQUFlLEVBQUE7RUFkL0I7SUFpQmdCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWSxFQUFBO0VBS3hCO0VBR0Esa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUIsRUFBQTtFQVJuQjtFQVlBLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQWJsQjtJQWVBLGVBQWU7SUFDZixrQkFBYSxFQUFBO0VBaEJiO01BbUJBLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICAvLyAtLWJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgLS1jb2xvcjp3aGl0ZTtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgICAgIGlvbi1pbWd7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbnN7XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1iYWRnZXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuICAgIGlvbi1jb250ZW50e1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICBwe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWxpc3R7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgaW9uLWljb257XHJcbiAgICAvLyBjb2xvcjogYmxhY2s7XHJcbiAgICB6b29tOiAxLjE7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/about-us/about-us.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/yesgenie/Pages/about-us/about-us.page.ts ***!
  \**********************************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../privacy-policy/privacy-policy.page */ "./src/app/yesgenie/Pages/privacy-policy/privacy-policy.page.ts");
/* harmony import */ var _term_services_term_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../term-services/term-services.page */ "./src/app/yesgenie/Pages/term-services/term-services.page.ts");
/* harmony import */ var _refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../refund-policy/refund-policy.page */ "./src/app/yesgenie/Pages/refund-policy/refund-policy.page.ts");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/yesgenie/Pages/services/custom-theme.service.ts");
/* harmony import */ var src_app_share_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/share.service */ "./src/app/share.service.ts");
/* harmony import */ var _yes_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../yes-service.service */ "./src/app/yes-service.service.ts");












var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(service1, services, toastController, service, menuCtrl, shared, config, translate, modalCtrl, nav) {
        this.service1 = service1;
        this.services = services;
        this.toastController = toastController;
        this.service = service;
        this.menuCtrl = menuCtrl;
        this.shared = shared;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.itemColor = [];
        this.iconColorVar = "";
        this.itemColor = ["black"]; //to get the coloe from custom-theme service
        this.data = this.service.getTheme(); //to get the selected theme color which is by default set as #F44336
        this.iconColorVar = this.data;
        //for the selection of colors
        if (this.data == "black") //if selected color is black 
         {
            this.itemColor = ["black"];
        }
        else if (this.data == "red") //if selected color is red 
         {
            this.itemColor = ["#F44336"];
        }
        else if (this.data == "green") //if selected color is green 
         {
            this.itemColor = ["#4CAF50"];
        }
        else if (this.data == "blue") //if selected color is blue
         {
            this.itemColor = ["#008577"];
        }
        else if (this.data == "gray") //if selected color is gray
         {
            this.itemColor = ["#9E9E9E"];
        }
    }
    AboutUsPage.prototype.ngOnInit = function () {
    };
    AboutUsPage.prototype.showModal = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, modal, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(value == 'privacyPolicy')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        if (!(value == 'termServices')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _term_services_term_services_page__WEBPACK_IMPORTED_MODULE_6__["TermServicesPage"]
                            })];
                    case 4:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [4 /*yield*/, this.modalCtrl.create({
                            component: _refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_7__["RefundPolicyPage"]
                        })];
                    case 7:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 8: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AboutUsPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    AboutUsPage.prototype.goToSearchPage = function () {
        this.nav.navigateForward("bs-search");
    };
    AboutUsPage.prototype.officiaWebSite = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Official Website Clicked',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutUsPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    AboutUsPage.prototype.ionViewWillEnter = function () {
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    };
    AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.page.html */ "./src/app/yesgenie/Pages/about-us/about-us.page.html"),
            styles: [__webpack_require__(/*! ./about-us.page.scss */ "./src/app/yesgenie/Pages/about-us/about-us.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_yes_service_service__WEBPACK_IMPORTED_MODULE_11__["YesServiceService"], src_app_share_service__WEBPACK_IMPORTED_MODULE_10__["ShareService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_9__["CustomThemeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_8__["SharedDataService"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], AboutUsPage);
    return AboutUsPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-about-us-about-us-module.js.map