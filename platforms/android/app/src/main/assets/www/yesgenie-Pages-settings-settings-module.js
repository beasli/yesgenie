(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-settings-settings-module"],{

/***/ "./src/app/yesgenie/Pages/settings/settings.module.ts":
/*!************************************************************!*\
  !*** ./src/app/yesgenie/Pages/settings/settings.module.ts ***!
  \************************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings.page */ "./src/app/yesgenie/Pages/settings/settings.page.ts");








var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/settings/settings.page.html":
/*!************************************************************!*\
  !*** ./src/app/yesgenie/Pages/settings/settings.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title class=\"ecom-title\">\n      {{'Settings'| translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"opensearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon class=\"cart-badge\" name=\"cart\"></ion-icon>\n        <ion-badge>{{services.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\" >\n    <ion-row class=\"row-img\">\n        <img src=\"assets/template-themes/becrux/icons_stripe.svg\" />\n    </ion-row>\n    <ion-row>\n      <div class=\"div-img\"></div>\n    </ion-row>\n        <ion-grid padding>\n          <ion-row size=\"12\">\n            <ion-col>\n                <ion-avatar>\n                    <ion-icon class=\"avatar-icon\" name=\"contact\"></ion-icon>\n                </ion-avatar>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <!-- <ion-col size=\"12\" class=\"login-col\">\n                <h2>{{ 'Login/Register' | translate }}</h2>\n                <p>{{ 'Please login or create an account for free' | translate }}</p>\n              </ion-col> -->\n\n              <ion-col size=\"12\" class=\"login-col\">\n                <h2>{{userdata?.username}}</h2>\n                <p>{{userdata?.email}}</p>\n              </ion-col>\n\n          </ion-row>\n        </ion-grid>\n  <!-- <ion-list padding>\n    <ion-item lines=\"inset\"> \n      <ion-label><p>{{\"Turn on/off Local Notifications\"|translate}}</p></ion-label>\n      <ion-toggle></ion-toggle>\n    </ion-item>\n    <ion-item lines=\"none\"> \n      <ion-label><p>{{\"Turn on/off Notifications\"|translate}}</p></ion-label>\n      <ion-toggle ></ion-toggle>\n    </ion-item>\n  </ion-list> -->\n  <ion-list padding>\n\n    <!-- <ion-item lines=\"full\" (click)=\"officiaWebSite()\"> \n      <ion-label><p>{{\"Official Website\"|translate}}</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item> -->\n\n    <ion-item (click)=\"openOrdersPage()\" lines=\"full\"> \n      <ion-label><p>Orders</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n\n\n    <ion-item (click)=\"openWalletPage()\" lines=\"full\"> \n      <ion-label><p>Wallet</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)=\"openFollowingPage()\" lines=\"full\"> \n      <ion-label><p>Following</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n\n\n    <ion-item (click)=\"openFollowersPage()\" lines=\"full\"> \n      <ion-label><p>Followers</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n\n\n    <ion-item (click)=\"openMessagePage()\" lines=\"full\">\n      <ion-label><p>Message</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n\n\n    <ion-item (click)=\"usersettings()\" lines=\"full\"> \n      <ion-label><p>User Settings</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n\n\n    <ion-item (click)=\"openDownloadPage()\" lines=\"full\"> \n      <ion-label><p>Downloads</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n\n\n    <ion-item (click)=\"openQuoteRequestPage()\" lines=\"full\"> \n      <ion-label><p>Quote Requests</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n\n\n    <ion-item (click)=\"goToWishListPage()\" lines=\"full\"> \n      <ion-label><p>My Wish List</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n\n\n    <!-- <ion-item (click)=\"goToAddressPage()\" lines=\"full\"> \n      <ion-label><p>Address</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item> -->\n\n\n    <!-- <ion-item (click)=\"#\" lines=\"full\"> \n      <ion-label><p>Settings</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item> -->\n\n    \n\n    <!-- <ion-item (click)=\"openEditProPage()\" lines=\"full\">\n      <ion-label><p>Edit Profile</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item> -->\n\n\n    <!-- <ion-item (click)=\"openChangePassPage()\" lines=\"full\"> \n      <ion-label><p>Change Password</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item> -->\n\n\n\n    <ion-item (click)=\"openPrivacyPolicyPage()\" lines=\"full\"> \n      <ion-label><p>{{\"Privacy Policy\"|translate}}</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)=\"openRefundPolicyPage()\" lines=\"full\"> \n      <ion-label><p>{{\"Refund Policy\"|translate}}</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)=\"openTermServicesPage()\"  lines=\"full\"> \n      <ion-label><p>{{\"Terms and Services\"|translate}}</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n\n    <ion-item  (click)=\"rateUs()\" lines=\"full\" > \n      <ion-label><p>{{\"Rate Us\"|translate}}</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"star-half\"></ion-icon>\n    </ion-item>\n\n    <ion-item  (click)=\"share()\" lines=\"full\"> \n      <ion-label><p>{{\"Share\"|translate}}</p></ion-label>\n      <ion-icon class=\"theme-icon\"  slot=\"end\" name=\"share\"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n\n\n  <ion-item lines=\"none\">\n    <ion-button color=\"secondary\" (click)=\"logOut()\">Log Out</ion-button>\n  </ion-item>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/yesgenie/Pages/settings/settings.page.scss":
/*!************************************************************!*\
  !*** ./src/app/yesgenie/Pages/settings/settings.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content ion-row img {\n  position: absolute !important;\n  opacity: 0.3% !important;\n  top: -100px;\n  margin-top: 10px; }\n  ion-content ion-row div {\n  width: 100%;\n  height: 100px;\n  height: 200px; }\n  ion-content ion-grid {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  width: 100%;\n  color: white;\n  padding-top: 0;\n  padding-bottom: 0; }\n  ion-content ion-grid ion-row ion-col {\n    text-align: center; }\n  ion-content ion-grid ion-row ion-col ion-avatar {\n      margin-left: auto;\n      margin-right: auto; }\n  ion-content ion-grid ion-row ion-col h2 {\n      margin-top: 10px;\n      font-weight: bold;\n      font-size: 20px;\n      font-family: 'roboto-regular'; }\n  ion-content ion-grid ion-row ion-col p {\n      margin-top: 10px;\n      margin-bottom: 8px;\n      font-size: 14px;\n      font-family: 'roboto-regular'; }\n  ion-content ion-grid ion-row ion-col ion-button {\n      height: 25px;\n      --color: white;\n      --border-radius: 0px; }\n  ion-content ion-list {\n  background: #fafafa; }\n  ion-content ion-list ion-item {\n    --background: white !important;\n    padding-bottom: 0;\n    font-size: 14px;\n    font-family: 'roboto-regular'; }\n  ion-content ion-list ion-item ion-toggle {\n      padding-right: 0;\n      --background-checked:  var(--ion-color-primary) !important;\n      --handle-background-checked:  var(--ion-color-primary) !important;\n      --background: white; }\n  ion-content ion-list ion-item p {\n      font-size: 14px !important;\n      color: black;\n      font-family: 'roboto-regular'; }\n  ion-content ion-list:last-child {\n    padding-top: 0; }\n  ion-content ion-item ion-button {\n  width: 100%;\n  margin: 0;\n  height: 30px; }\n  .avatar-icon {\n  zoom: 6 !important;\n  color: lightgray;\n  margin-left: -1.6px; }\n  .row-img {\n  opacity: 0.1 !important; }\n  .login-col {\n  margin-top: 15px; }\n  .div-img {\n  background: var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsYUFBUSxFQUFBO0VBSGhCO0lBS1ksZUFBZSxFQUFBO0VBTDNCO0lBU2dCLFlBQVksRUFBQTtFQVQ1QjtJQWNnQixlQUFlLEVBQUE7RUFkL0I7SUFpQmdCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWSxFQUFBO0VBS3hCO0VBR0EsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7RUFOaEI7RUFVQSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWEsRUFBQTtFQVpiO0VBZ0JBLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQixFQUFBO0VBdEJqQjtJQXlCQSxrQkFBa0IsRUFBQTtFQXpCbEI7TUEyQkEsaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBO0VBNUJsQjtNQStCQSxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZiw2QkFBNkIsRUFBQTtFQWxDN0I7TUFxQ0EsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsNkJBQTZCLEVBQUE7RUF4QzdCO01BMkNBLFlBQVk7TUFFWixjQUFRO01BQ1Isb0JBQWdCLEVBQUE7RUE5Q2hCO0VBcURJLG1CQUFtQixFQUFBO0VBckR2QjtJQXVEQSw4QkFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsNkJBQTZCLEVBQUE7RUExRDdCO01BNERBLGdCQUFnQjtNQUNmLDBEQUFxQjtNQUNyQixpRUFBNEI7TUFDNUIsbUJBQWEsRUFBQTtFQS9EZDtNQXFFQSwwQkFBMEI7TUFDMUIsWUFBWTtNQUNaLDZCQUE2QixFQUFBO0VBdkU3QjtJQTJFQSxjQUFjLEVBQUE7RUEzRWQ7RUFnRkEsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZLEVBQUE7RUFLWjtFQUNBLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7RUFFbkI7RUFDQSx1QkFBdUIsRUFBQTtFQUV2QjtFQUNJLGdCQUFnQixFQUFBO0VBRXBCO0VBQ0ksb0NBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6YmxhY2s7XG4gICAgICAgIC0tY29sb3I6d2hpdGU7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi10aXRsZXtcbiAgICAgICAgICAgIGlvbi1pbWd7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b25ze1xuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJhZGdle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogM3B4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiAgICBpb24tY29udGVudHtcbiAgICBpb24tcm93e1xuICAgIGltZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAwLjMlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAtMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgZGl2e1xuICAgIC8vIGJhY2tncm91bmQ6ICM3MDcwNzA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgICB9XG4gICAgaW9uLWdyaWR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBpb24tcm93e1xuICAgIGlvbi1jb2x7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGlvbi1hdmF0YXJ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICBoMntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICB9XG4gICAgcHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIC8vIC0tYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cbiAgICB9XG4gICAgfVxuICAgIFxuICAgIH1cbiAgICBpb24tbGlzdHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIGlvbi10b2dnbGV7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICAgIGlvbi1pY29ue1xuICAgIC8vIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgcHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGR7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICBpb24tYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgfVxuICAgIH1cbiAgICB9XG4gICAgLmF2YXRhci1pY29ue1xuICAgIHpvb206IDYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgIG1hcmdpbi1sZWZ0OiAtMS42cHg7XG4gICAgfVxuICAgIC5yb3ctaW1ne1xuICAgIG9wYWNpdHk6IDAuMSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubG9naW4tY29se1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgICAuZGl2LWltZ3tcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/settings/settings.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/yesgenie/Pages/settings/settings.page.ts ***!
  \**********************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../refund-policy/refund-policy.page */ "./src/app/yesgenie/Pages/refund-policy/refund-policy.page.ts");
/* harmony import */ var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../privacy-policy/privacy-policy.page */ "./src/app/yesgenie/Pages/privacy-policy/privacy-policy.page.ts");
/* harmony import */ var _term_services_term_services_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../term-services/term-services.page */ "./src/app/yesgenie/Pages/term-services/term-services.page.ts");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/yesgenie/Pages/services/custom-theme.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _followers_followers_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../followers/followers.page */ "./src/app/yesgenie/Pages/followers/followers.page.ts");
/* harmony import */ var _following_following_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../following/following.page */ "./src/app/yesgenie/Pages/following/following.page.ts");
/* harmony import */ var _change_password_change_password_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../change-password/change-password.page */ "./src/app/yesgenie/Pages/change-password/change-password.page.ts");
/* harmony import */ var _my_account_my_account_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../my-account/my-account.page */ "./src/app/yesgenie/Pages/my-account/my-account.page.ts");
/* harmony import */ var _downloads_downloads_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../downloads/downloads.page */ "./src/app/yesgenie/Pages/downloads/downloads.page.ts");
/* harmony import */ var _quote_request_quote_request_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../quote-request/quote-request.page */ "./src/app/yesgenie/Pages/quote-request/quote-request.page.ts");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _wallet_wallet_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../wallet/wallet.page */ "./src/app/yesgenie/Pages/wallet/wallet.page.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../search/search.page */ "./src/app/yesgenie/Pages/search/search.page.ts");




















var SettingsPage = /** @class */ (function () {
    function SettingsPage(services, router, events, toastController, service, menuCtrl, nav, modalCtrl, elementRef, socialSharing, market) {
        this.services = services;
        this.router = router;
        this.events = events;
        this.toastController = toastController;
        this.service = service;
        this.menuCtrl = menuCtrl;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.elementRef = elementRef;
        this.socialSharing = socialSharing;
        this.market = market;
        this.itemColor = [];
        this.iconColorVar = "";
        this.itemColor = ["black"]; //to get the coloe from custom-theme service
        this.data = this.service.getTheme(); //to get the selected theme color which is by default set as #F44336
        this.iconColorVar = this.data;
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        //for the selection of colors
        if (this.data == "black") //if selected color is black 
         {
            this.itemColor = ["black"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
        else if (this.data == "red") //if selected color is red 
         {
            this.itemColor = ["#F44336"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
        else if (this.data == "green") //if selected color is green 
         {
            this.itemColor = ["#4CAF50"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
        else if (this.data == "blue") //if selected color is blue
         {
            this.itemColor = ["#008577"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
        else if (this.data == "gray") //if selected color is gray
         {
            this.itemColor = ["#9E9E9E"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.openAddAccountPage = function () {
        this.nav.navigateForward("bb-my-account");
    };
    SettingsPage.prototype.openTermServicesPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _term_services_term_services_page__WEBPACK_IMPORTED_MODULE_5__["TermServicesPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SettingsPage.prototype.openPrivacyPolicyPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_4__["PrivacyPolicyPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SettingsPage.prototype.openWalletPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _wallet_wallet_page__WEBPACK_IMPORTED_MODULE_15__["WalletPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SettingsPage.prototype.openFollowersPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _followers_followers_page__WEBPACK_IMPORTED_MODULE_8__["FollowersPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SettingsPage.prototype.openFollowingPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _following_following_page__WEBPACK_IMPORTED_MODULE_9__["FollowingPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SettingsPage.prototype.openChangePassPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _change_password_change_password_page__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SettingsPage.prototype.openOrdersPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.nav.navigateForward("bs-my-orders");
                return [2 /*return*/];
            });
        });
    };
    SettingsPage.prototype.openQuoteRequestPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _quote_request_quote_request_page__WEBPACK_IMPORTED_MODULE_13__["QuoteRequestPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SettingsPage.prototype.openEditProPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _my_account_my_account_page__WEBPACK_IMPORTED_MODULE_11__["MyAccountPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SettingsPage.prototype.openDownloadPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _downloads_downloads_page__WEBPACK_IMPORTED_MODULE_12__["DownloadsPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SettingsPage.prototype.openRefundPolicyPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_3__["RefundPolicyPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SettingsPage.prototype.goToWishListPage = function () {
        this.nav.navigateForward("bs-wish-list");
    };
    SettingsPage.prototype.usersettings = function () {
        this.nav.navigateForward("user-settings");
    };
    SettingsPage.prototype.openMessagePage = function () {
        this.nav.navigateForward("message");
    };
    SettingsPage.prototype.goToAddressPage = function () {
        this.nav.navigateForward("bs-addresses");
    };
    SettingsPage.prototype.goToSearchPage = function () {
        this.nav.navigateForward("bs-search");
    };
    SettingsPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    SettingsPage.prototype.officiaWebSite = function () {
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
    // async rateUs() {
    //     const toast = await this.toastController.create({
    //         message: 'Rate Us Clicked',
    //         duration: 2000
    //     });
    //     toast.present();
    // }
    // async share() {
    //     const toast = await this.toastController.create({
    //         message: 'Share Clicked',
    //         duration: 2000
    //     });
    //     toast.present();
    // }
    SettingsPage.prototype.share = function () {
        this.socialSharing.share('https://play.google.com/store/apps/details?id=yesgenie.app.com');
    }; // End of fu
    SettingsPage.prototype.rateUs = function () {
        this.market.open('yesgenie.app.com');
        // this.inAppBrowser.create('https://play.google.com/store/apps/details?id=health.optim');
    };
    SettingsPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var userDetails = localStorage.getItem('userdata');
        this.userdata = JSON.parse(userDetails);
        console.log(this.userdata);
    };
    SettingsPage.prototype.logOut = function () {
        var _this = this;
        localStorage.removeItem('userdata');
        // localStorage.clear();
        setTimeout(function () { return _this.router.navigateByUrl('tabs/bs-home'); }, 1000);
        this.events.publish("updateSideMenu");
        this.events.publish("fblogout");
    };
    SettingsPage.prototype.opensearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _search_search_page__WEBPACK_IMPORTED_MODULE_18__["SearchPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/yesgenie/Pages/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/yesgenie/Pages/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_14__["YesServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_6__["CustomThemeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_16__["SocialSharing"], _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_17__["Market"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-settings-settings-module.js.map