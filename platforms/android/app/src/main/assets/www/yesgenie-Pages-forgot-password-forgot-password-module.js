(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-forgot-password-forgot-password-module"],{

/***/ "./src/app/yesgenie/Pages/forgot-password/forgot-password.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/forgot-password/forgot-password.module.ts ***!
  \**************************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/yesgenie/Pages/forgot-password/forgot-password.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/forgot-password/forgot-password.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/forgot-password/forgot-password.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ecom-title\" no-padding>{{'Forgot Password'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" padding class=\"content\">\n  <img src=\"assets/logo.png\"/>\n\n  <form class=\"form\" [formGroup]=\"ForgotPass\">\n    <ion-item>\n      <ion-label position=\"floating\">{{'Email'|translate}}</ion-label>\n      <ion-input type=\"text\" formControlName=\"email\">\n      </ion-input>\n    </ion-item>\n\n    <!-- <ion-item *ngIf=\"errorMessage!=''\" lines=\"none\">\n      <ion-label>\n        {{errorMessage| translate}}\n      </ion-label>\n    </ion-item> -->\n\n    <ion-button expand=\"full\" block  type=\"submit\" [disabled]=\"!ForgotPass.valid\" (click)=\"forgotPassword()\">{{ 'SEND' | translate }}\n    </ion-button>\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/forgot-password/forgot-password.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/forgot-password/forgot-password.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 23px;\n    margin-top: 4px; }\n  ion-img {\n  height: 150px;\n  opacity: 0.10; }\n  form {\n  padding-top: 28px; }\n  form ion-item {\n    --padding-start: 0; }\n  form ion-item ion-label {\n      color: gray; }\n  form ion-item:nth-child(2) {\n      height: 33px; }\n  form ion-item:nth-child(2) ion-label {\n        color: red; }\n  form ion-button {\n    --background:#ee4431; }\n  form ion-button:nth-child(3) {\n      text-transform: capitalize;\n      margin-top: 15px; }\n  form ion-button:nth-child(4) {\n      margin-top: 15px;\n      --background: #3b5998;\n      --color: white; }\n  form ion-button:nth-child(5) {\n      margin-top: 20px;\n      --border-width: thin; }\n  img {\n  max-width: 80%;\n  border: 0;\n  padding-left: 47px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFHSSxhQUFRLEVBQUE7RUFIWjtJQUtRLGVBQWU7SUFDZixlQUFlLEVBQUE7RUFLbkI7RUFDQSxhQUFhO0VBQ2IsYUFBYSxFQUFBO0VBSWI7RUFDQSxpQkFBaUIsRUFBQTtFQURqQjtJQUdBLGtCQUFnQixFQUFBO0VBSGhCO01BS0EsV0FBVyxFQUFBO0VBTFg7TUFRQSxZQUFZLEVBQUE7RUFSWjtRQVVBLFVBQVMsRUFBQTtFQVZUO0lBZUksb0JBQWEsRUFBQTtFQWZqQjtNQWlCSSwwQkFBMEI7TUFDMUIsZ0JBQWdCLEVBQUE7RUFsQnBCO01BcUJJLGdCQUFnQjtNQUNoQixxQkFBYTtNQUNiLGNBQVEsRUFBQTtFQXZCWjtNQTJCSSxnQkFBZ0I7TUFFaEIsb0JBQWUsRUFBQTtFQUluQjtFQUNJLGNBQWM7RUFDZCxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvciB0b29sYmFyIGRlc2lnblxyXG5pb24taGVhZGVye1xyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgLS1jb2xvcjp3aGl0ZTtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7ICAgIH1cclxuICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRm9yIGltYWdlIGRlc2lnblxyXG4gICAgaW9uLWltZ3tcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjEwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBGb3IgRm9ybVxyXG4gICAgZm9ybXtcclxuICAgIHBhZGRpbmctdG9wOiAyOHB4O1xyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAtLWJhY2tncm91bmQ6I2VlNDQzMTtcclxuICAgICAgICAmOm50aC1jaGlsZCgzKXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCg0KXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzNiNTk5ODtcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoNSl7XHJcbiAgICAgICAgLy8gLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAvLyAtLWJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDdweDtcclxuICAgIH1cclxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/forgot-password/forgot-password.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/forgot-password/forgot-password.page.ts ***!
  \************************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ForgotPasswordPage = /** @class */ (function () {
    //The Email not Valid exist
    function ForgotPasswordPage(modalCtrl, services, toastCtrl, nav, translate, menuCtrl, formBuilder, router) {
        this.modalCtrl = modalCtrl;
        this.services = services;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.formData = {
            customers_email_address: '',
        };
        this.errorMessage = '';
    }
    ForgotPasswordPage.prototype.dismiss = function () {
        this.nav.navigateForward("bs-login");
    };
    ForgotPasswordPage.prototype.ngOnInit = function () {
        this.PassForgot();
    };
    ForgotPasswordPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    ForgotPasswordPage.prototype.ionViewWillEnter = function () {
    };
    ForgotPasswordPage.prototype.forgotPassword = function () {
        var _this = this;
        var userData = 'email_address=' + this.ForgotPass.get('email').value;
        console.log(userData);
        this.services.forgetpassword(userData).subscribe(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.status == 404) {
                _this.presentToast(_this.responseData.message);
            }
            else {
                console.log(_this.responseData);
                // this.presentToast('User successfully registered');
                _this.router.navigateByUrl('bs-login');
            }
        }, function (error) {
            if (error.url == null) {
                _this.presentToast('Invalid Email Id');
                //  alert('all ready registered');
            }
            else {
                _this.presentToast('Invalid Email Id');
                //  alert('all ready registered');
            }
        });
    };
    ForgotPasswordPage.prototype.PassForgot = function () {
        this.ForgotPass = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
        });
    };
    ForgotPasswordPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
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
    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.page.html */ "./src/app/yesgenie/Pages/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/yesgenie/Pages/forgot-password/forgot-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__["YesServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-forgot-password-forgot-password-module.js.map