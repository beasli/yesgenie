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

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 23px;\n    margin-top: 4px; }\n  ion-img {\n  height: 150px;\n  opacity: 0.10; }\n  form {\n  padding-top: 28px; }\n  form ion-item {\n    --padding-start: 0; }\n  form ion-item ion-label {\n      color: gray; }\n  form ion-item:nth-child(2) {\n      height: 33px; }\n  form ion-item:nth-child(2) ion-label {\n        color: red; }\n  form ion-button {\n    --background:#ee4431; }\n  form ion-button:nth-child(3) {\n      text-transform: capitalize;\n      margin-top: 15px; }\n  form ion-button:nth-child(4) {\n      margin-top: 15px;\n      --background: #3b5998;\n      --color: white; }\n  form ion-button:nth-child(5) {\n      margin-top: 20px;\n      --border-width: thin; }\n  img {\n  max-width: 80%;\n  border: 0;\n  padding-left: 47px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUdJLGFBQVEsRUFBQTtFQUhaO0lBS1EsZUFBZTtJQUNmLGVBQWUsRUFBQTtFQUtuQjtFQUNBLGFBQWE7RUFDYixhQUFhLEVBQUE7RUFJYjtFQUNBLGlCQUFpQixFQUFBO0VBRGpCO0lBR0Esa0JBQWdCLEVBQUE7RUFIaEI7TUFLQSxXQUFXLEVBQUE7RUFMWDtNQVFBLFlBQVksRUFBQTtFQVJaO1FBVUEsVUFBUyxFQUFBO0VBVlQ7SUFlSSxvQkFBYSxFQUFBO0VBZmpCO01BaUJJLDBCQUEwQjtNQUMxQixnQkFBZ0IsRUFBQTtFQWxCcEI7TUFxQkksZ0JBQWdCO01BQ2hCLHFCQUFhO01BQ2IsY0FBUSxFQUFBO0VBdkJaO01BMkJJLGdCQUFnQjtNQUVoQixvQkFBZSxFQUFBO0VBSW5CO0VBQ0ksY0FBYztFQUNkLFNBQVM7RUFDVCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9yIHRvb2xiYXIgZGVzaWduXG5pb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgLS1jb2xvcjp3aGl0ZTtcbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7ICAgIH1cbiAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIEZvciBpbWFnZSBkZXNpZ25cbiAgICBpb24taW1ne1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgb3BhY2l0eTogMC4xMDtcbiAgICB9XG4gICAgXG4gICAgLy8gRm9yIEZvcm1cbiAgICBmb3Jte1xuICAgIHBhZGRpbmctdG9wOiAyOHB4O1xuICAgIGlvbi1pdGVte1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICBpb24tbGFiZWx7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDIpe1xuICAgIGhlaWdodDogMzNweDtcbiAgICBpb24tbGFiZWx7XG4gICAgY29sb3I6cmVkO1xuICAgIH1cbiAgICB9XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tYmFja2dyb3VuZDojZWU0NDMxO1xuICAgICAgICAmOm50aC1jaGlsZCgzKXtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpudGgtY2hpbGQoNCl7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzNiNTk5ODtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgJjpudGgtY2hpbGQoNSl7XG4gICAgICAgIC8vIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAvLyAtLWJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0N3B4O1xuICAgIH1cbiAgICAiXX0= */"

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