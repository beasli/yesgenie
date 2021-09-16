(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-login-login-module"],{

/***/ "./src/app/yesgenie/Pages/login/login.module.ts":
/*!******************************************************!*\
  !*** ./src/app/yesgenie/Pages/login/login.module.ts ***!
  \******************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/yesgenie/Pages/login/login.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/login/login.page.html":
/*!******************************************************!*\
  !*** ./src/app/yesgenie/Pages/login/login.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"thankyou-content bg\">\n    \n\n\n  <div class=\"header-content\">\n      <!-- <div class=\"LoginLogo\">\n          <ion-img src=\"assets/logo1.png\"></ion-img>\n      </div> -->\n    <p style=\"font-size: 20px; font-family: sans-serif; text-align: center; margin-top: 220px;\">Fill the Information Below<p>\n    <h2 style=\"font-size: 23px; font-family: sans-serif; text-align: center;\" class=\"login_accountp\">Login Account</h2>\n  </div>\n\n  <form class=\"form\" (ngSubmit)=\"login()\" #loginForm=\"ngForm\" >\n\n\n<ion-list class=\"list listp\">\n\n    <ion-item class=\"animated fadeInRight\" lines=\"none\">\n      <img class=\"login_iconp\" style=\"width: 35px;\" slot=\"start\" src=\"assets/icons/user-name.png\" />\n      <ion-input [(ngModel)]=\"formData.email\" name=\"email\"  placeholder=\"Username or E-mail\" type=\"text\" required></ion-input>\n    </ion-item>\n    <!-- <div *ngIf=\"userLogin.controls.username.hasError('required')  && userLogin.controls.username.touched\">\n      <p class=\"error-text\">Username is required</p>\n  </div> -->\n\n    <ion-item class=\"animated fadeInRight\" lines=\"none\">\n      <img class=\"login_iconp\" style=\"width: 35px;\" slot=\"start\" src=\"assets/icons/password.png\" />\n      <ion-input placeholder=\"Password\" type=\"text\"  id=\"password\" name=\"password\" [(ngModel)]=\"formData.password\" [type]=\"passwordType\" clearOnEdit=\"false\" required></ion-input>\n      <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n    </ion-item>\n    <!-- <div *ngIf=\"userLogin.controls.password.hasError('required')  && userLogin.controls.password.touched\">\n      <p class=\"error-text\">Password is required</p>\n  </div> -->\n\n</ion-list>\n\n\n<div text-center style=\"color: #165992; font-size: 17px; font-family: sans-serif; text-align: center;\" class=\"forgot_passwordp\"> \n  <p (click)=\"forgot()\">In case you forget password?</p>\n</div>\n\n<div class=\"btn-div\">\n    <ion-button class=\"btn\" type=\"submit\" color=\"primary\" >Login</ion-button>\n  </div>\n\n</form>\n\n<div style=\"color: red; text-align: center;\">\n  <ion-button text-center fill=\"clear\" (click)=\"goToHomeEcom()\">Skip Login</ion-button>\n</div>\n\n\n<ion-grid class=\"grid-or\" style=\"margin-bottom: -25px;\">\n  <ion-row>\n    <ion-col class=\"ion-align-self-center\">\n      <div></div>\n    </ion-col>\n    <ion-col size=\"1\">\n      <p>Or</p>\n    </ion-col>\n    <ion-col class=\"ion-align-self-center\">\n      <div></div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid class=\"grid-icons\" style=\"margin-bottom: 12px; margin-top: 15px\">\n  <ion-row>\n    <ion-col (click)=\"fbLoginuser()\"> \n      <ion-avatar class=\"animated fadeIn\">\n        <ion-img src=\"assets/facebook.png\"></ion-img>\n      </ion-avatar>\n    </ion-col>\n  \n    <ion-col (click)=\"Googlelogin()\">\n      <ion-avatar class=\"animated fadeIn\">\n        <ion-img src=\"assets/google.png\"></ion-img>\n      </ion-avatar>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<p class=\"para-member\">Don't have an account?</p>\n\n<div style=\"color: red; text-align: center;\">\n  <ion-button text-center fill=\"clear\" (click)=\"goToSignUp()\">Register</ion-button>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/yesgenie/Pages/login/login.page.scss":
/*!******************************************************!*\
  !*** ./src/app/yesgenie/Pages/login/login.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thankyou-content {\n  --background: url('login-img.png')\n  no-repeat center center fixed;\n  background-size: cover; }\n  .thankyou-content .header-card {\n    background: var(--ion-color-primary);\n    margin: 0;\n    border-bottom-left-radius: 40px;\n    border-bottom-right-radius: 40px; }\n  .thankyou-content .header-card .header-content {\n      width: 100%;\n      margin-top: 30px;\n      text-align: center; }\n  .thankyou-content .header-card .header-content ion-avatar {\n        margin-left: auto;\n        margin-right: auto;\n        background: white; }\n  .thankyou-content .header-card .header-content ion-avatar div ion-icon {\n          font-size: 50px;\n          margin-top: 10px; }\n  .thankyou-content .header-card .header-content h2 {\n        font-size: 19px;\n        font-family: \"roboto-regular\";\n        color: white;\n        margin-top: 35px;\n        margin-bottom: 30px; }\n  .thankyou-content .list {\n    margin-left: 68px;\n    margin-right: 16px;\n    background: transparent !important;\n    padding-top: 15px;\n    padding-bottom: 0;\n    width: 70%; }\n  .thankyou-content .list ion-item {\n      border-radius: 10px;\n      border: solid 1px #f3edea;\n      --background: #e4e4e4;\n      margin-bottom: 10px; }\n  .thankyou-content .list ion-item ion-input {\n        --placeholder-color: var(--ion-color-primary);\n        --placeholder-opacity: 1; }\n  .thankyou-content .list ion-item ion-icon {\n        font-size: 16px;\n        margin-right: 5px; }\n  .thankyou-content .list ion-item p {\n        font-size: 16px;\n        font-family: \"roboto-regular\";\n        margin-top: auto;\n        margin-bottom: auto;\n        color: black; }\n  .thankyou-content .item-forget-pass {\n    --background: transparent;\n    font-family: \"roboto-regular\";\n    font-size: 12px;\n    --color: black;\n    --inner-padding-start: 18px; }\n  .thankyou-content .item-forget-pass p {\n      margin-top: 0; }\n  .thankyou-content .item-forget-pass ion-button {\n      --color: #fe9130;\n      text-transform: capitalize;\n      font-family: \"roboto-regular\";\n      font-size: 12px;\n      --ripple-color: #fe9130;\n      margin-top: -10px; }\n  .thankyou-content .btn-div {\n    text-align: center;\n    width: 100%;\n    margin-top: 10px; }\n  .thankyou-content .btn-div ion-button {\n      height: 42px;\n      --background: var(--ion-color-primary);\n      width: 58%;\n      --box-shadow: none;\n      --border-radius: 20px;\n      font-family: \"roboto-regular\";\n      font-size: 13px; }\n  .thankyou-content .grid-or ion-col:first-child div, .thankyou-content .grid-or ion-col:last-child div {\n    height: 1px;\n    width: 100%;\n    background: black; }\n  .thankyou-content .grid-or ion-col:first-child {\n    padding-left: 25px; }\n  .thankyou-content .grid-or ion-col:last-child {\n    padding-right: 25px; }\n  .thankyou-content .grid-or ion-col p {\n    font-family: \"roboto-regular\";\n    font-size: 10px;\n    text-align: center;\n    color: black; }\n  .thankyou-content .grid-icons ion-col:first-child ion-avatar {\n    margin-left: auto !important; }\n  .thankyou-content .grid-icons ion-col:last-child ion-avatar {\n    margin-right: auto !important; }\n  .thankyou-content .grid-icons ion-col ion-avatar {\n    height: 46px;\n    width: 46px;\n    border: solid lightgray 1px; }\n  .thankyou-content .grid-icons ion-col ion-avatar ion-icon {\n      font-size: 20px;\n      margin: 12px 0 0 12px; }\n  .thankyou-content .grid-icons ion-col .avatar-center {\n    margin-left: auto;\n    margin-right: auto; }\n  .thankyou-content .para-member {\n    text-align: center;\n    font-family: \"roboto-regular\";\n    font-size: 14px;\n    margin-top: 10px;\n    margin-bottom: 0; }\n  .thankyou-content .create-div {\n    text-align: center;\n    width: 100%;\n    margin-top: 15px; }\n  .thankyou-content .create-div ion-button {\n      height: 33px;\n      --color: black;\n      width: 70%;\n      --box-shadow: none;\n      border-radius: 20px;\n      border: solid 1px black;\n      font-family: \"roboto-regular\";\n      font-size: 11px;\n      text-transform: capitalize; }\n  .LoginLogo {\n  width: 130px;\n  height: 130px;\n  display: block;\n  margin: 0 auto; }\n  @media screen and (max-width: 350px) {\n  .header-content p, .header-content h2 {\n    margin: 0 !important; }\n  .listp {\n    margin-bottom: 0 !important; }\n  .forgot_passwordp p {\n    margin: 0 !important;\n    font-size: 15px; }\n  .login_accountp {\n    font-size: 20px !important; }\n  .LoginLogo img {\n    height: 110px !important; }\n  .thankyou-content {\n    --background: url('login-img.png') no-repeat center center fixed;\n    background-size: cover; }\n  .login_iconp {\n    width: 27px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTsrQkFBYTtFQUlQLHNCQUFzQixFQUFBO0VBTDlCO0lBT00sb0NBQW9DO0lBQ3BDLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0IsZ0NBQWdDLEVBQUE7RUFWdEM7TUFZUSxXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBO0VBZDFCO1FBZ0JVLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsaUJBQWlCLEVBQUE7RUFsQjNCO1VBcUJjLGVBQWU7VUFDZixnQkFBZ0IsRUFBQTtFQXRCOUI7UUEyQlUsZUFBZTtRQUNmLDZCQUE2QjtRQUM3QixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1CQUFtQixFQUFBO0VBL0I3QjtJQW9DTSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFVBQVUsRUFBQTtFQXpDaEI7TUEyQ1EsbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QixxQkFBYTtNQUNiLG1CQUFtQixFQUFBO0VBOUMzQjtRQWdEVSw2Q0FBb0I7UUFDcEIsd0JBQXNCLEVBQUE7RUFqRGhDO1FBb0RVLGVBQWU7UUFDZixpQkFBaUIsRUFBQTtFQXJEM0I7UUF3RFUsZUFBZTtRQUNmLDZCQUE2QjtRQUM3QixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLFlBQVksRUFBQTtFQTVEdEI7SUFpRU0seUJBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGNBQVE7SUFDUiwyQkFBc0IsRUFBQTtFQXJFNUI7TUF1RVEsYUFBYSxFQUFBO0VBdkVyQjtNQTBFUSxnQkFBUTtNQUNSLDBCQUEwQjtNQUMxQiw2QkFBNkI7TUFDN0IsZUFBZTtNQUNmLHVCQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUEvRXpCO0lBbUZNLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7RUFyRnRCO01BdUZRLFlBQVk7TUFDWixzQ0FBYTtNQUNiLFVBQVU7TUFDVixrQkFBYTtNQUNiLHFCQUFnQjtNQUNoQiw2QkFBNkI7TUFDN0IsZUFBZSxFQUFBO0VBN0Z2QjtJQXFHWSxXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQixFQUFBO0VBdkc3QjtJQTJHVSxrQkFBa0IsRUFBQTtFQTNHNUI7SUE4R1UsbUJBQW1CLEVBQUE7RUE5RzdCO0lBaUhVLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTtFQXBIdEI7SUE0SFksNEJBQTRCLEVBQUE7RUE1SHhDO0lBaUlZLDZCQUE2QixFQUFBO0VBakl6QztJQXFJVSxZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQixFQUFBO0VBdklyQztNQXlJWSxlQUFlO01BQ2YscUJBQXFCLEVBQUE7RUExSWpDO0lBOElVLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtFQS9JNUI7SUFvSk0sa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0VBeEp0QjtJQTJKTSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQixFQUFBO0VBN0p0QjtNQStKUSxZQUFZO01BQ1osY0FBUTtNQUNSLFVBQVU7TUFDVixrQkFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsNkJBQTZCO01BQzdCLGVBQWU7TUFDZiwwQkFBMEIsRUFBQTtFQUtoQztFQUVFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWMsRUFBQTtFQUloQjtFQUNFO0lBQ0ksb0JBQW9CLEVBQUE7RUFFeEI7SUFDRSwyQkFBMkIsRUFBQTtFQUU3QjtJQUFxQixvQkFBbUI7SUFBRSxlQUFlLEVBQUE7RUFDekQ7SUFDRywwQkFBMEIsRUFBQTtFQUU3QjtJQUNFLHdCQUF3QixFQUFBO0VBRTFCO0lBQ00sZ0VBQWE7SUFDYixzQkFBc0IsRUFBQTtFQUU1QjtJQUNFLHNCQUFzQixFQUFBLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoYW5reW91LWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvbG9naW4taW1nLnBuZylcbiAgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLmhlYWRlci1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQwcHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDBweDtcbiAgICAgIC5oZWFkZXItY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLXJlZ3VsYXJcIjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5saXN0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA2OHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZjNlZGVhO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJyb2JvdG8tcmVndWxhclwiO1xuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLml0ZW0tZm9yZ2V0LXBhc3Mge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by1yZWd1bGFyXCI7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAtLWNvbG9yOiBibGFjaztcbiAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMThweDtcbiAgICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tY29sb3I6ICNmZTkxMzA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBmb250LWZhbWlseTogXCJyb2JvdG8tcmVndWxhclwiO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIC0tcmlwcGxlLWNvbG9yOiAjZmU5MTMwO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmJ0bi1kaXYge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHdpZHRoOiA1OCU7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJyb2JvdG8tcmVndWxhclwiO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5ncmlkLW9yIHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICAmOmZpcnN0LWNoaWxkLFxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLXJlZ3VsYXJcIjtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZ3JpZC1pY29ucyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgICB3aWR0aDogNDZweDtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIGxpZ2h0Z3JheSAxcHg7XG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDAgMCAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYXZhdGFyLWNlbnRlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5wYXJhLW1lbWJlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LWZhbWlseTogXCJyb2JvdG8tcmVndWxhclwiO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIC5jcmVhdGUtZGl2IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgIC0tY29sb3I6IGJsYWNrO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICAgICAgICBmb250LWZhbWlseTogXCJyb2JvdG8tcmVndWxhclwiO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5Mb2dpbkxvZ297XG5cbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgICAuaGVhZGVyLWNvbnRlbnQgcCwgLmhlYWRlci1jb250ZW50IGgye1xuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmxpc3Rwe1xuICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZm9yZ290X3Bhc3N3b3JkcCBweyBtYXJnaW46MCAhaW1wb3J0YW50OyBmb250LXNpemU6IDE1cHg7IH1cbiAgICAubG9naW5fYWNjb3VudHB7XG4gICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5Mb2dpbkxvZ28gaW1ne1xuICAgICAgaGVpZ2h0OiAxMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAudGhhbmt5b3UtY29udGVudHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvbG9naW4taW1nLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIH1cbiAgICAubG9naW5faWNvbnB7XG4gICAgICB3aWR0aDogMjdweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/login/login.page.ts":
/*!****************************************************!*\
  !*** ./src/app/yesgenie/Pages/login/login.page.ts ***!
  \****************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _yes_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var LoginPage = /** @class */ (function () {
    function LoginPage(modalCtrl, toastCtrl, googlePlus, navCtrl, authService, menuCtrl, translate, router, events, fb, storage, alertController, loadingController, platform) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.googlePlus = googlePlus;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.events = events;
        this.fb = fb;
        this.storage = storage;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.platform = platform;
        this.userDataGoogle = {};
        this.formData = {
            email: '',
            password: '',
        };
        //Invalid username or password.
        this.errorMessage = 'Invalid username or password.';
        // FacebookData: { username: any; email: any;};
        this.FacebookData = { username: '', email: '', };
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        fb.getLoginStatus()
            .then(function (res) {
            console.log(res.status);
            if (res.status === 'connect') {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log(e); });
        events.subscribe('fblogout', function (value) {
            _this.fb.logout()
                .then(function (res) { return _this.isLoggedIn = false; })
                .catch(function (e) { return console.log('Error logout from Facebook', e); });
        });
    }
    LoginPage.prototype.ngOnInit = function () { };
    // googleSignIn() {
    //   this.googlePlus.login({})
    //     .then(result => this.userData = result)
    //     .catch(err => this.userData = `Error ${JSON.stringify(err)}`);
    //     alert(this.userData);
    // }
    // async doGoogleLogin(){
    //   this.googlePlus.login({
    //     'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
    //     'webClientId': '534601769735-nm6cfadr7ur0psi86kr666119n4jgntr.apps.googleusercontent.com', // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
    //     'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    //     })
    //     .then(user => {
    //       this.name = user.displayName,
    //       this.email = user.email,
    //       //save user data on the native storage
    //       alert(this.name)
    //       // .then(() => {
    //       //    this.router.navigate(["/user"]);
    //       // }, (error) => {
    //       //   console.log(error);
    //       // })
    //     }, err => {
    //       console.log(err);
    //     })
    // }
    // async doGoogleLogin(){
    //   const loading = await this.loadingController.create({
    //     message: 'Please wait...'
    //   });
    //   this.presentLoading(loading);
    //   this.googlePlus.login({
    //     'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
    //     'webClientId': environment.googleWebClientId, // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
    //     'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    //     })
    //     .then(user => {
    //       this.FacebookData = {
    //                 username: user.displayName,
    //                 email: user.email,
    //               };
    //               alert(user.email);
    //       //save user data on the native storage
    //       this.storage.set('google_user', {
    //         name: user.displayName,
    //         email: user.email,
    //         picture: user.imageUrl
    //       })
    //       .then(() => {
    //         this.signup();
    //       }, (error) => {
    //         console.log(error);
    //       })
    //       loading.dismiss();
    //     }, err => {
    //       console.log(err);
    //       if(!this.platform.is('cordova')){
    //         this.presentAlert();
    //       }
    //       loading.dismiss();
    //     })
    // }
    LoginPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.forgot = function () {
        this.navCtrl.navigateForward("bs-forgot-password");
    };
    // googleSignIn() {
    //   this.googlePlus.login({})
    //     .then(result => this.userDataGoogle = result)
    //     .catch(err => this.userDataGoogle = `Error ${JSON.stringify(err)}`);
    //     alert(this.userDataGoogle);
    //       this.FacebookData = {
    //         username: this.userDataGoogle.displayName,
    //         email: this.userDataGoogle.email,
    //       };
    //      // alert(this.users);
    //       this.signup();
    // }
    LoginPage.prototype.fbLoginuser = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === 'connected') {
                _this.getUserDetail(res.authResponse.userID);
            }
            else if (res.status === 'connect') {
                _this.getUserDetail(res.authResponse.userID);
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
            .then(function (res) {
            console.log(res);
            _this.users = res;
            _this.FacebookData = {
                username: _this.users.name,
                email: _this.users.email,
            };
            setTimeout(function () {
                _this.signup();
            }, 1000);
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    LoginPage.prototype.Googlelogin = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            console.log(res);
            _this.users = res;
            _this.FacebookData = {
                username: _this.users.displayName,
                email: _this.users.email,
            };
            setTimeout(function () {
                _this.signup();
            }, 1000);
        })
            .catch(function (err) { return console.error(err); });
    };
    LoginPage.prototype.signup = function () {
        var _this = this;
        this.authService.registerUser(this.FacebookData).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            //  this.data = JSON.parse(result["_body"]);
            if (_this.responseData.status.code === 200) {
                localStorage.setItem('userdata', JSON.stringify(_this.responseData.response));
                _this.router.navigateByUrl('tabs/bs-home');
                _this.events.publish("updateSideMenu");
                console.log(_this.responseData);
                //  localStorage.setItem('token', JSON.stringify(this.responseData.response));
                // this.presentToast('User successfully registered');
            }
            else if (_this.responseData.status.code === 404) {
                _this.presentToast('You are already registered');
                _this.fbuserlogin();
                // alert('all ready registered');
            }
        }, function (error) {
            if (error.url == null) {
                _this.fbuserlogin();
                //  alert('all ready registered');
            }
            else {
                _this.fbuserlogin();
                //  alert('all ready registered');
            }
        });
    };
    LoginPage.prototype.fbuserlogin = function () {
        var _this = this;
        console.log(this.FacebookData);
        this.authService.fblogin(this.FacebookData).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            //  this.data = JSON.parse(result["_body"]);
            if (_this.responseData.status.code == 200) {
                console.log(_this.responseData);
                localStorage.setItem('userdata', JSON.stringify(_this.responseData.response));
                // this.presentToast('User successfully registered');
                _this.router.navigateByUrl('tabs/bs-home');
                _this.events.publish("updateSideMenu");
            }
            else if (_this.responseData.status.code == 406) {
                _this.presentToast('Invalid username or password.');
            }
        }, function (error) {
            if (error.url == null) {
                _this.presentToast('Please check your internet connection');
            }
            else {
                _this.presentToast('Invalid username or password.');
            }
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authService.loginUser(this.formData).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            //  this.data = JSON.parse(result["_body"]);
            if (_this.responseData.status.code == 200) {
                console.log(_this.responseData);
                localStorage.setItem('userdata', JSON.stringify(_this.responseData.response));
                // this.presentToast('User successfully registered');
                _this.router.navigateByUrl('tabs/bs-home');
                _this.events.publish("updateSideMenu");
            }
            else if (_this.responseData.status.code == 406) {
                _this.presentToast('Invalid username or password.');
            }
        }, function (error) {
            if (error.url == null) {
                _this.presentToast('Please check your internet connection');
            }
            else {
                _this.presentToast('Invalid username or password.');
            }
        });
    };
    /*function to move back to main menu*/
    LoginPage.prototype.dismiss = function () {
        this.navCtrl.navigateForward("tabs/bs-home");
    };
    LoginPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 3000,
                            position: 'bottom',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.goToSignUp = function () {
        this.navCtrl.navigateForward("bs-sign-up");
    };
    LoginPage.prototype.goToForgot = function () {
        this.navCtrl.navigateForward("bs-forgot-password");
    };
    LoginPage.prototype.goToHomeEcom = function () {
        this.navCtrl.navigateForward('tabs/bs-home');
    };
    LoginPage.prototype.pinchEvent = function (e) {
        this.navCtrl.navigateForward("ui-templates-details");
    };
    LoginPage.prototype.ionViewWillEnter = function () {
    };
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/yesgenie/Pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/yesgenie/Pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _yes_service_service__WEBPACK_IMPORTED_MODULE_4__["YesServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__["Facebook"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-login-login-module.js.map