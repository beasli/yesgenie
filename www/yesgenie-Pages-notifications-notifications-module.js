(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-notifications-notifications-module"],{

/***/ "./src/app/yesgenie/Pages/notifications/notifications.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/notifications/notifications.module.ts ***!
  \**********************************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notifications.page */ "./src/app/yesgenie/Pages/notifications/notifications.page.ts");








var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_7__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_7__["NotificationsPage"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/notifications/notifications.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/notifications/notifications.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title class=\"ecom-title\">Notifications</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"refreshPage()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <!-- <ion-grid class=\"grid\" no-padding> -->\n    <!-- <ion-row no-padding>\n      <ion-col size=\"12\" no-padding>\n        <ion-icon name=\"notifications\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-row no-padding>\n      <ion-col size=\"12\" no-padding>\n        <h4>{{'Your Scratch Card Coupon is Empty'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row no-padding>\n      <ion-col size=\"12\" no-padding>\n        <p class=\"shop-para\">{{'Continue Shopping'|translate}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row no-padding>\n      <ion-col size=\"12\" no-padding>\n        <ion-button (click)=\"openProductsPage()\">{{'Explore'|translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-card *ngFor=\"let order of orders\" (click)=\"goToOrderDetail()\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Order ID'|translate}}\n          </ion-col>\n          <ion-col text-right col-6>\n            {{'#'+order.number}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Date'|translate}}\n          </ion-col>\n          <ion-col text-right size=\"6\">\n            {{order.date_created}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Price'|translate}}\n          </ion-col>\n          <ion-col text-right size=\"6\">\n            {{order.total}}\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"status-row\" >\n          <ion-col size=\"6\">\n            {{'Status'|translate}}\n          </ion-col>\n          <ion-col text-right size=\"6\">\n            <strong>{{order.status|translate}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid> -->\n\n  <ion-infinite-scroll #infinite>\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/notifications/notifications.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/notifications/notifications.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content p {\n  font-size: 14px;\n  font-family: 'roboto-regular';\n  margin-bottom: 5px; }\n  ion-content .grid {\n  margin-top: 50%; }\n  ion-content .grid ion-row ion-col {\n    text-align: center; }\n  ion-content .grid ion-row ion-col ion-icon {\n      zoom: 3.9;\n      color: lightgrey; }\n  ion-content .grid ion-row ion-col ion-button {\n      --color: white;\n      --border-radius: 0px; }\n  ion-content .grid ion-row ion-col h4 {\n      font-size: 20px;\n      font-family: 'roboto-regular';\n      font-weight: bold;\n      margin-top: 2px;\n      margin-bottom: 5px; }\n  .status-row {\n  background: var(--ion-color-primary);\n  color: white;\n  border-radius: 5px; }\n  .shop-para {\n  margin-bottom: 10px !important;\n  margin-top: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsYUFBUSxFQUFBO0VBSGhCO0lBS1ksZUFBZSxFQUFBO0VBTDNCO0lBU2dCLFlBQVksRUFBQTtFQVQ1QjtJQWNnQixlQUFlLEVBQUE7RUFkL0I7SUFpQmdCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWSxFQUFBO0VBSzVCO0VBRVEsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTtFQUoxQjtFQU9RLGVBQWUsRUFBQTtFQVB2QjtJQVVnQixrQkFBa0IsRUFBQTtFQVZsQztNQVlvQixTQUFRO01BQ1IsZ0JBQWUsRUFBQTtFQWJuQztNQWdCb0IsY0FBUTtNQUVSLG9CQUFnQixFQUFBO0VBbEJwQztNQXFCb0IsZUFBZTtNQUNmLDZCQUE2QjtNQUM3QixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGtCQUFrQixFQUFBO0VBV3RDO0VBQ0ksb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtFQUV0QjtFQUNJLDhCQUE4QjtFQUM5Qix3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6YmxhY2s7XG4gICAgICAgIC0tY29sb3I6d2hpdGU7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi10aXRsZXtcbiAgICAgICAgICAgIGlvbi1pbWd7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b25ze1xuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJhZGdle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogM3B4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1jb250ZW50e1xuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLmdyaWR7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICAgICAgaW9uLXJvd3tcbiAgICAgICAgICAgIGlvbi1jb2x7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgICAgICB6b29tOjMuOTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6bGlnaHRncmV5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1ncmlke1xuICAgICAgICBpb24tY2FyZHtcbiAgICAgICAgICAgIC8vIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgIH1cbn1cbi5zdGF0dXMtcm93e1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnNob3AtcGFyYXtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/notifications/notifications.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/notifications/notifications.page.ts ***!
  \********************************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/yesgenie/Pages/services/custom-theme.service.ts");






var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(service, menuCtrl, loadingController, shared, config, nav) {
        this.service = service;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.shared = shared;
        this.config = config;
        this.nav = nav;
        this.itemColor = [];
        this.iconColorVar = "";
        this.orders = [{ number: "1902", date_created: "Jul 30, 2019", total: "USD 229.00", status: "Processing" }];
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
    NotificationsPage.prototype.refreshPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            duration: 2000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationsPage.prototype.ngOnInit = function () {
    };
    NotificationsPage.prototype.openProductsPage = function () {
        this.nav.navigateForward("bs-products");
    };
    NotificationsPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    NotificationsPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    NotificationsPage.prototype.ionViewWillEnter = function () {
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    };
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.page.html */ "./src/app/yesgenie/Pages/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/yesgenie/Pages/notifications/notifications.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_custom_theme_service__WEBPACK_IMPORTED_MODULE_5__["CustomThemeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
            _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-notifications-notifications-module.js.map