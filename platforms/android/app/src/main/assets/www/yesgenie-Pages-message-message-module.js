(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-message-message-module"],{

/***/ "./src/app/yesgenie/Pages/message/message.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/yesgenie/Pages/message/message.module.ts ***!
  \**********************************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.page */ "./src/app/yesgenie/Pages/message/message.page.ts");







var routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]
    }
];
var MessagePageModule = /** @class */ (function () {
    function MessagePageModule() {
    }
    MessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]]
        })
    ], MessagePageModule);
    return MessagePageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/message/message.page.html":
/*!**********************************************************!*\
  !*** ./src/app/yesgenie/Pages/message/message.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"order-header\">\n  <ion-toolbar>\n\n\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n\n    <ion-title class=\"ecom-title\">Message</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"refreshPage()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge>{{services.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/yesgenie/Pages/message/message.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/yesgenie/Pages/message/message.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".doct {\n  font-size: 17px;\n  font-weight: 500;\n  color: black; }\n\n.imgloc {\n  width: 52px;\n  height: 52px; }\n\n.drdesc {\n  text-align: justify;\n  font-size: 14px;\n  font-weight: 500; }\n\n.drbutton {\n  background: white;\n  margin: auto;\n  width: 95px;\n  height: 40px; }\n\n.drdegree {\n  font-size: 15px;\n  font-weight: 400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9tZXNzYWdlL21lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2hCO0VBQ1EsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHcEI7RUFDSSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9tZXNzYWdlL21lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3R7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uaW1nbG9je1xuICAgICAgICB3aWR0aDogNTJweDtcbiAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgIH1cblxuLmRyZGVzY3tcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZHJidXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTVweDtcbiAgICBoZWlnaHQ6IDQwcHg7fVxuXG4uZHJkZWdyZWV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/message/message.page.ts":
/*!********************************************************!*\
  !*** ./src/app/yesgenie/Pages/message/message.page.ts ***!
  \********************************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var MessagePage = /** @class */ (function () {
    function MessagePage(mdCtrl, services, menuCtrl, toastCtrl, shared, config, loadingController, nav, formBuilder, router, events) {
        this.mdCtrl = mdCtrl;
        this.services = services;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.shared = shared;
        this.config = config;
        this.loadingController = loadingController;
        this.nav = nav;
        this.formBuilder = formBuilder;
        this.router = router;
        this.events = events;
    }
    MessagePage.prototype.ngOnInit = function () {
    };
    MessagePage.prototype.ionViewWillEnter = function () {
        var userDetails = localStorage.getItem('userdata');
        this.userdata = JSON.parse(userDetails);
        this.token = this.userdata.token;
        console.log(this.token);
        this.Getmessages();
    };
    MessagePage.prototype.Getmessages = function () {
        var _this = this;
        var userData = 'token=' + this.token;
        console.log(userData);
        this.services.Getmessages(userData).subscribe(function (result) {
            _this.responseData = result.response;
            console.log(_this.responseData);
            //  console.log(this.responseData);
            if (_this.responseData.Status == 0) {
                _this.presentToast(_this.responseData.Message);
            }
            else {
                _this.folloing = _this.responseData.length;
                console.log(_this.responseData);
            }
        }, function (error) {
        });
    };
    MessagePage.prototype.presentToast = function (msg) {
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
    MessagePage.prototype.dismiss = function () {
        this.mdCtrl.dismiss();
    };
    MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.page.html */ "./src/app/yesgenie/Pages/message/message.page.html"),
            styles: [__webpack_require__(/*! ./message.page.scss */ "./src/app/yesgenie/Pages/message/message.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], MessagePage);
    return MessagePage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-message-message-module.js.map