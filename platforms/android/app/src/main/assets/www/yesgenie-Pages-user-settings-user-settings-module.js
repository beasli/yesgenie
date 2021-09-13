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

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content ion-row img {\n  position: absolute !important;\n  opacity: 0.3% !important;\n  top: -100px;\n  margin-top: 10px; }\n  ion-content ion-row div {\n  width: 100%;\n  height: 100px;\n  height: 200px; }\n  ion-content ion-grid {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  width: 100%;\n  color: white;\n  padding-top: 0;\n  padding-bottom: 0; }\n  ion-content ion-grid ion-row ion-col {\n    text-align: center; }\n  ion-content ion-grid ion-row ion-col ion-avatar {\n      margin-left: auto;\n      margin-right: auto; }\n  ion-content ion-grid ion-row ion-col h2 {\n      margin-top: 10px;\n      font-weight: bold;\n      font-size: 20px;\n      font-family: 'roboto-regular'; }\n  ion-content ion-grid ion-row ion-col p {\n      margin-top: 10px;\n      margin-bottom: 8px;\n      font-size: 14px;\n      font-family: 'roboto-regular'; }\n  ion-content ion-grid ion-row ion-col ion-button {\n      height: 25px;\n      --color: white;\n      --border-radius: 0px; }\n  ion-content ion-list {\n  background: #fafafa; }\n  ion-content ion-list ion-item {\n    --background: white !important;\n    padding-bottom: 0;\n    font-size: 14px;\n    font-family: 'roboto-regular'; }\n  ion-content ion-list ion-item ion-toggle {\n      padding-right: 0;\n      --background-checked:  var(--ion-color-primary) !important;\n      --handle-background-checked:  var(--ion-color-primary) !important;\n      --background: white; }\n  ion-content ion-list ion-item p {\n      font-size: 14px !important;\n      color: black;\n      font-family: 'roboto-regular'; }\n  ion-content ion-list:last-child {\n    padding-top: 0; }\n  ion-content ion-item ion-button {\n  width: 100%;\n  margin: 0;\n  height: 30px; }\n  .avatar-icon {\n  zoom: 6 !important;\n  color: lightgray;\n  margin-left: -1.6px; }\n  .row-img {\n  opacity: 0.1 !important; }\n  .login-col {\n  margin-top: 15px; }\n  .div-img {\n  background: var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvdXNlci1zZXR0aW5ncy91c2VyLXNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGFBQVEsRUFBQTtFQUhoQjtJQUtZLGVBQWUsRUFBQTtFQUwzQjtJQVNnQixZQUFZLEVBQUE7RUFUNUI7SUFjZ0IsZUFBZSxFQUFBO0VBZC9CO0lBaUJnQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVksRUFBQTtFQUt4QjtFQUdBLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGdCQUFnQixFQUFBO0VBTmhCO0VBVUEsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhLEVBQUE7RUFaYjtFQWdCQSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtFQXRCakI7SUF5QkEsa0JBQWtCLEVBQUE7RUF6QmxCO01BMkJBLGlCQUFpQjtNQUNqQixrQkFBa0IsRUFBQTtFQTVCbEI7TUErQkEsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsNkJBQTZCLEVBQUE7RUFsQzdCO01BcUNBLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLDZCQUE2QixFQUFBO0VBeEM3QjtNQTJDQSxZQUFZO01BRVosY0FBUTtNQUNSLG9CQUFnQixFQUFBO0VBOUNoQjtFQXFESSxtQkFBbUIsRUFBQTtFQXJEdkI7SUF1REEsOEJBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDZCQUE2QixFQUFBO0VBMUQ3QjtNQTREQSxnQkFBZ0I7TUFDZiwwREFBcUI7TUFDckIsaUVBQTRCO01BQzVCLG1CQUFhLEVBQUE7RUEvRGQ7TUFxRUEsMEJBQTBCO01BQzFCLFlBQVk7TUFDWiw2QkFBNkIsRUFBQTtFQXZFN0I7SUEyRUEsY0FBYyxFQUFBO0VBM0VkO0VBZ0ZBLFdBQVc7RUFDWCxTQUFTO0VBQ1QsWUFBWSxFQUFBO0VBS1o7RUFDQSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0VBRW5CO0VBQ0EsdUJBQXVCLEVBQUE7RUFFdkI7RUFDSSxnQkFBZ0IsRUFBQTtFQUVwQjtFQUNJLG9DQUFvQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvdXNlci1zZXR0aW5ncy91c2VyLXNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDpibGFjaztcbiAgICAgICAgLS1jb2xvcjp3aGl0ZTtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRpdGxle1xuICAgICAgICAgICAgaW9uLWltZ3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbnN7XG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYmFkZ2V7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuICAgIGlvbi1jb250ZW50e1xuICAgIGlvbi1yb3d7XG4gICAgaW1ne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDAuMyUgIWltcG9ydGFudDtcbiAgICB0b3A6IC0xMDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICBkaXZ7XG4gICAgLy8gYmFja2dyb3VuZDogIzcwNzA3MDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuICAgIH1cbiAgICBpb24tZ3JpZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGlvbi1yb3d7XG4gICAgaW9uLWNvbHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW9uLWF2YXRhcntcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuICAgIGgye1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIH1cbiAgICBwe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICB9XG4gICAgaW9uLWJ1dHRvbntcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgfVxuICAgIH1cbiAgICB9XG4gICAgXG4gICAgfVxuICAgIGlvbi1saXN0e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIGlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgaW9uLXRvZ2dsZXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG4gICAgaW9uLWljb257XG4gICAgLy8gY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICBwe1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICB9XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMzBweDtcbiAgICAvLyAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbiAgICB9XG4gICAgfVxuICAgIH1cbiAgICAuYXZhdGFyLWljb257XG4gICAgem9vbTogNiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgbWFyZ2luLWxlZnQ6IC0xLjZweDtcbiAgICB9XG4gICAgLnJvdy1pbWd7XG4gICAgb3BhY2l0eTogMC4xICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sb2dpbi1jb2x7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICAgIC5kaXYtaW1ne1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfSJdfQ== */"

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