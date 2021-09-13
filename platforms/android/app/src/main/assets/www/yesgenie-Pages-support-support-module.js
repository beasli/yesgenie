(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-support-support-module"],{

/***/ "./src/app/yesgenie/Pages/support/support.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/yesgenie/Pages/support/support.module.ts ***!
  \**********************************************************/
/*! exports provided: SupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support.page */ "./src/app/yesgenie/Pages/support/support.page.ts");







var routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]
    }
];
var SupportPageModule = /** @class */ (function () {
    function SupportPageModule() {
    }
    SupportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]]
        })
    ], SupportPageModule);
    return SupportPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/support/support.page.html":
/*!**********************************************************!*\
  !*** ./src/app/yesgenie/Pages/support/support.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" routerLink=\"/tabs/bs-home\" routerDirection=\"backward\">\n          <ion-icon src=\"assets/back.svg\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n\n    <ion-title>support</ion-title>\n\n    \n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n<p>loading....</p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/yesgenie/Pages/support/support.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/yesgenie/Pages/support/support.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL3N1cHBvcnQvc3VwcG9ydC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/support/support.page.ts":
/*!********************************************************!*\
  !*** ./src/app/yesgenie/Pages/support/support.page.ts ***!
  \********************************************************/
/*! exports provided: SupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function() { return SupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/themeable-browser/ngx */ "./node_modules/@ionic-native/themeable-browser/ngx/index.js");





var SupportPage = /** @class */ (function () {
    // options : InAppBrowserOptions = {
    //   location: 'no',
    //   hidden: 'no',
    //   clearcache: 'yes',
    //   clearsessioncache: 'yes',
    //   zoom: 'yes',
    //   hardwareback: 'no',
    //   mediaPlaybackRequiresUserAction: 'no',
    //   shouldPauseOnSuspend: 'no',
    //   closebuttoncaption: 'close',
    //   disallowoverscroll: 'no',
    //   toolbar: 'yes',
    //   enableViewportScale: 'no',
    //   allowInlineMediaPlayback: 'no',
    //   presentationstyle: 'pagesheet',
    //   fullscreen: 'yes'
    // }
    function SupportPage(iab, platform, themeableBrowser) {
        this.iab = iab;
        this.platform = platform;
        this.themeableBrowser = themeableBrowser;
        this.options = {
            statusbar: {
                color: '#021841'
            },
            toolbar: {
                height: 44,
                color: '#021841'
            },
            title: {
                color: '#ffffffff',
                staticText: 'Support',
                showPageTitle: true,
            },
            backButton: {
                wwwImage: 'assets/back.png',
                align: 'left',
                event: 'backPressed',
            },
            // forwardButton: {
            //     image: 'forward',
            //     imagePressed: 'forward_pressed',
            //     align: 'left',
            //     event: 'forwardPressed'
            // },
            // closeButton: {
            //   wwwImage: 'assets/previous.png',
            //     align: 'right',
            //     event: 'closePressed'
            // },
            // customButtons: [
            //     {
            //         image: 'share',
            //         imagePressed: 'share_pressed',
            //         align: 'right',
            //         event: 'sharePressed'
            //     }
            // ],
            // menu: {
            //     image: 'menu',
            //     imagePressed: 'menu_pressed',
            //     title: 'Test',
            //     cancel: 'Cancel',
            //     align: 'right',
            //     items: [
            //         {
            //             event: 'helloPressed',
            //             label: 'Hello World!'
            //         },
            //         {
            //             event: 'testPressed',
            //             label: 'Test!'
            //         }
            //     ]
            // },
            backButtonCanClose: true
        };
        this.browser = this.themeableBrowser.create('https://www.yesgenie.com/Home_controller/support_board_cat', '_blank', this.options);
        // this.platform.ready().then(() => {
        //  this.iab.create('https://www.yesgenie.com/Home_controller/support_board_cat','_blank',this.options);    
        //   }); 
    }
    SupportPage.prototype.ngOnInit = function () {
        this.browser;
    };
    SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.page.html */ "./src/app/yesgenie/Pages/support/support.page.html"),
            styles: [__webpack_require__(/*! ./support.page.scss */ "./src/app/yesgenie/Pages/support/support.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["ThemeableBrowser"]])
    ], SupportPage);
    return SupportPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-support-support-module.js.map