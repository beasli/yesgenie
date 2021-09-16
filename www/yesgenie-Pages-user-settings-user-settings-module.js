(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-user-settings-user-settings-module"],{

/***/ "./src/app/yesgenie/Pages/user-settings/user-settings.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/user-settings/user-settings.module.ts ***!
  \**********************************************************************/
/*! exports provided: UserSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsPageModule", function() { return UserSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-settings.page */ "./src/app/yesgenie/Pages/user-settings/user-settings.page.ts");







var routes = [
    {
        path: '',
        component: _user_settings_page__WEBPACK_IMPORTED_MODULE_6__["UserSettingsPage"]
    }
];
var UserSettingsPageModule = /** @class */ (function () {
    function UserSettingsPageModule() {
    }
    UserSettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_settings_page__WEBPACK_IMPORTED_MODULE_6__["UserSettingsPage"]]
        })
    ], UserSettingsPageModule);
    return UserSettingsPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/user-settings/user-settings.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/user-settings/user-settings.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" routerLink=\"/bs-settings\">\n        <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"ecom-title\">\n      User Settings\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"opensearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon class=\"cart-badge\" name=\"cart\"></ion-icon>\n        <ion-badge>{{services.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n\n  <ion-row class=\"row-img\">\n    <img src=\"assets/template-themes/becrux/icons_stripe.svg\" />\n</ion-row>\n<ion-row>\n  <div class=\"div-img\"></div>\n</ion-row>\n    <ion-grid padding>\n      <ion-row size=\"12\">\n        <ion-col>\n            <ion-avatar>\n                <ion-icon class=\"avatar-icon\" name=\"contact\"></ion-icon>\n            </ion-avatar>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <!-- <ion-col size=\"12\" class=\"login-col\">\n            <h2>{{ 'Login/Register' | translate }}</h2>\n            <p>{{ 'Please login or create an account for free' | translate }}</p>\n          </ion-col> -->\n\n          <ion-col size=\"12\" class=\"login-col\">\n            <h2>{{userdata?.username}}</h2>\n            <p>{{userdata?.email}}</p>\n          </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  \n  <ion-list no-padding>\n    \n    <ion-item lines=\"full\" (click)=\"updateprofile()\">\n      Update Profile\n      <ion-icon class=\"theme-icon\"  name=\"arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)=\"contactinfo()\" lines=\"full\">\n      Contact Information\n      <ion-icon class=\"theme-icon\"  name=\"arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n    <!-- <ion-item (click)=\"shippingaddress()\" lines=\"full\">\n      Shipping Address\n      <ion-icon class=\"theme-icon\"  name=\"arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item> -->\n\n    <ion-item (click)=\"multipleshippingaddress()\" lines=\"full\">\n      Multiple Shipping Address\n      <ion-icon class=\"theme-icon\"  name=\"arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)=\"changepassword()\" lines=\"none\">\n      Change Password\n      <ion-icon class=\"theme-icon\"  name=\"arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/user-settings/user-settings.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/user-settings/user-settings.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content ion-row img {\n  position: absolute !important;\n  opacity: 0.3% !important;\n  top: -100px;\n  margin-top: 10px; }\n  ion-content ion-row div {\n  width: 100%;\n  height: 100px;\n  height: 200px; }\n  ion-content ion-grid {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  width: 100%;\n  color: white;\n  padding-top: 0;\n  padding-bottom: 0; }\n  ion-content ion-grid ion-row ion-col {\n    text-align: center; }\n  ion-content ion-grid ion-row ion-col ion-avatar {\n      margin-left: auto;\n      margin-right: auto; }\n  ion-content ion-grid ion-row ion-col h2 {\n      margin-top: 10px;\n      font-weight: bold;\n      font-size: 20px;\n      font-family: 'roboto-regular'; }\n  ion-content ion-grid ion-row ion-col p {\n      margin-top: 10px;\n      margin-bottom: 8px;\n      font-size: 14px;\n      font-family: 'roboto-regular'; }\n  ion-content ion-grid ion-row ion-col ion-button {\n      height: 25px;\n      --color: white;\n      --border-radius: 0px; }\n  ion-content ion-list {\n  background: #fafafa; }\n  ion-content ion-list ion-item {\n    --background: white !important;\n    padding-bottom: 0;\n    font-size: 14px;\n    font-family: 'roboto-regular'; }\n  ion-content ion-list ion-item ion-toggle {\n      padding-right: 0;\n      --background-checked:  var(--ion-color-primary) !important;\n      --handle-background-checked:  var(--ion-color-primary) !important;\n      --background: white; }\n  ion-content ion-list ion-item p {\n      font-size: 14px !important;\n      color: black;\n      font-family: 'roboto-regular'; }\n  ion-content ion-list:last-child {\n    padding-top: 0; }\n  ion-content ion-item ion-button {\n  width: 100%;\n  margin: 0;\n  height: 30px; }\n  .avatar-icon {\n  zoom: 6 !important;\n  color: lightgray;\n  margin-left: -1.6px; }\n  .row-img {\n  opacity: 0.1 !important; }\n  .login-col {\n  margin-top: 15px; }\n  .div-img {\n  background: var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy91c2VyLXNldHRpbmdzL3VzZXItc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsYUFBUSxFQUFBO0VBSGhCO0lBS1ksZUFBZSxFQUFBO0VBTDNCO0lBU2dCLFlBQVksRUFBQTtFQVQ1QjtJQWNnQixlQUFlLEVBQUE7RUFkL0I7SUFpQmdCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWSxFQUFBO0VBS3hCO0VBR0EsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7RUFOaEI7RUFVQSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWEsRUFBQTtFQVpiO0VBZ0JBLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQixFQUFBO0VBdEJqQjtJQXlCQSxrQkFBa0IsRUFBQTtFQXpCbEI7TUEyQkEsaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBO0VBNUJsQjtNQStCQSxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZiw2QkFBNkIsRUFBQTtFQWxDN0I7TUFxQ0EsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsNkJBQTZCLEVBQUE7RUF4QzdCO01BMkNBLFlBQVk7TUFFWixjQUFRO01BQ1Isb0JBQWdCLEVBQUE7RUE5Q2hCO0VBcURJLG1CQUFtQixFQUFBO0VBckR2QjtJQXVEQSw4QkFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsNkJBQTZCLEVBQUE7RUExRDdCO01BNERBLGdCQUFnQjtNQUNmLDBEQUFxQjtNQUNyQixpRUFBNEI7TUFDNUIsbUJBQWEsRUFBQTtFQS9EZDtNQXFFQSwwQkFBMEI7TUFDMUIsWUFBWTtNQUNaLDZCQUE2QixFQUFBO0VBdkU3QjtJQTJFQSxjQUFjLEVBQUE7RUEzRWQ7RUFnRkEsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZLEVBQUE7RUFLWjtFQUNBLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7RUFFbkI7RUFDQSx1QkFBdUIsRUFBQTtFQUV2QjtFQUNJLGdCQUFnQixFQUFBO0VBRXBCO0VBQ0ksb0NBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9QYWdlcy91c2VyLXNldHRpbmdzL3VzZXItc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgICAgICAtLWNvbG9yOndoaXRlO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGl0bGV7XG4gICAgICAgICAgICBpb24taW1ne1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uc3tcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1iYWRnZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4gICAgaW9uLWNvbnRlbnR7XG4gICAgaW9uLXJvd3tcbiAgICBpbWd7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMC4zJSAhaW1wb3J0YW50O1xuICAgIHRvcDogLTEwMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIGRpdntcbiAgICAvLyBiYWNrZ3JvdW5kOiAjNzA3MDcwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gICAgfVxuICAgIGlvbi1ncmlke1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgaW9uLXJvd3tcbiAgICBpb24tY29se1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpb24tYXZhdGFye1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG4gICAgaDJ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgfVxuICAgIHB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIH1cbiAgICBpb24tYnV0dG9ue1xuICAgIGhlaWdodDogMjVweDtcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB9XG4gICAgfVxuICAgIH1cbiAgICBcbiAgICB9XG4gICAgaW9uLWxpc3R7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICBpb24tdG9nZ2xle1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cbiAgICBpb24taWNvbntcbiAgICAvLyBjb2xvcjogYmxhY2s7XG4gICAgfVxuICAgIHB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIH1cbiAgICB9XG4gICAgJjpsYXN0LWNoaWxke1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbiAgICB9XG4gICAgaW9uLWl0ZW17XG4gICAgaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIH1cbiAgICB9XG4gICAgfVxuICAgIC5hdmF0YXItaWNvbntcbiAgICB6b29tOiA2ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBtYXJnaW4tbGVmdDogLTEuNnB4O1xuICAgIH1cbiAgICAucm93LWltZ3tcbiAgICBvcGFjaXR5OiAwLjEgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmxvZ2luLWNvbHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG4gICAgLmRpdi1pbWd7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/user-settings/user-settings.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/user-settings/user-settings.page.ts ***!
  \********************************************************************/
/*! exports provided: UserSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsPage", function() { return UserSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_account_my_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-account/my-account.page */ "./src/app/yesgenie/Pages/my-account/my-account.page.ts");
/* harmony import */ var _change_password_change_password_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../change-password/change-password.page */ "./src/app/yesgenie/Pages/change-password/change-password.page.ts");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search/search.page */ "./src/app/yesgenie/Pages/search/search.page.ts");







var UserSettingsPage = /** @class */ (function () {
    function UserSettingsPage(nav, modalCtrl, services) {
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.services = services;
    }
    UserSettingsPage.prototype.ngOnInit = function () {
    };
    UserSettingsPage.prototype.opensearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _search_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserSettingsPage.prototype.ionViewWillEnter = function () {
        var userDetails = localStorage.getItem('userdata');
        this.userdata = JSON.parse(userDetails);
        console.log(this.userdata);
    };
    UserSettingsPage.prototype.updateprofile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _my_account_my_account_page__WEBPACK_IMPORTED_MODULE_3__["MyAccountPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserSettingsPage.prototype.contactinfo = function () {
        this.nav.navigateForward("contact-info");
    };
    UserSettingsPage.prototype.shippingaddress = function () {
        this.nav.navigateForward("bs-shipping-address");
    };
    UserSettingsPage.prototype.multipleshippingaddress = function () {
        this.nav.navigateForward("multiple-shipping-address");
    };
    UserSettingsPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    UserSettingsPage.prototype.changepassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _change_password_change_password_page__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-settings',
            template: __webpack_require__(/*! ./user-settings.page.html */ "./src/app/yesgenie/Pages/user-settings/user-settings.page.html"),
            styles: [__webpack_require__(/*! ./user-settings.page.scss */ "./src/app/yesgenie/Pages/user-settings/user-settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__["YesServiceService"]])
    ], UserSettingsPage);
    return UserSettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-user-settings-user-settings-module.js.map