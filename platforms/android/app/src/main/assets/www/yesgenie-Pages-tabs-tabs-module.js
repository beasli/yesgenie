(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-tabs-tabs-module"],{

/***/ "./src/app/yesgenie/Pages/tabs/tabs.module.ts":
/*!****************************************************!*\
  !*** ./src/app/yesgenie/Pages/tabs/tabs.module.ts ***!
  \****************************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tabs/tabs.router.module */ "./src/app/yesgenie/Pages/tabs/tabs.router.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.page */ "./src/app/yesgenie/Pages/tabs/tabs.page.ts");








var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]
    }
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _tabs_tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/tabs/tabs.page.html":
/*!****************************************************!*\
  !*** ./src/app/yesgenie/Pages/tabs/tabs.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-tabs>\n    <ion-tab-bar color=\"primary\" slot=\"bottom\">\n\n      <ion-tab-button tab=\"bs-categories\">\n        <ion-img class=\"imgclass\" src=\"assets/tab-icon/catogories.png\"></ion-img>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"bs-wish-list\">\n        <ion-img class=\"imgclass\" src=\"assets/tab-icon/wishlist.png\"></ion-img>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"bs-home\">\n        <ion-img class=\"imgclass\" src=\"assets/tab-icon/home.png\"></ion-img>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"support()\">\n        <ion-icon style=\"color: white;\" class=\"support\" name=\"people\"></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button routerLink=\"/bs-cart\">\n          <ion-icon style=\"color: white;\" class=\"cart-badge\" name=\"cart\"></ion-icon>\n          <ion-badge>{{service.cartTotalItems()}}</ion-badge>\n        <!-- <ion-img class=\"imgclass\" src=\"assets/tab-icon/cart.png\"></ion-img> -->\n      </ion-tab-button>\n      \n    </ion-tab-bar>\n  </ion-tabs>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/tabs/tabs.page.scss":
/*!****************************************************!*\
  !*** ./src/app/yesgenie/Pages/tabs/tabs.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgclass {\n  width: 27px;\n  height: 27px; }\n\nion-badge {\n  position: absolute;\n  right: 15px;\n  bottom: 21px;\n  color: white;\n  font-size: 13px;\n  background-color: #1ab0c1; }\n\n.support {\n  width: 32px;\n  height: 32px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ08sa0JBQWtCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUIsRUFBQTs7QUFJaEM7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdjbGFzc3tcbiAgICB3aWR0aDogMjdweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG59XG5cbmlvbi1iYWRnZXtcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICBib3R0b206IDIxcHg7XG4gICAgICAgY29sb3I6IHdoaXRlOyBcbiAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYjBjMTtcbn1cblxuXG4uc3VwcG9ydHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/tabs/tabs.page.ts":
/*!**************************************************!*\
  !*** ./src/app/yesgenie/Pages/tabs/tabs.page.ts ***!
  \**************************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _yes_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/themeable-browser/ngx */ "./node_modules/@ionic-native/themeable-browser/ngx/index.js");




var TabsPage = /** @class */ (function () {
    function TabsPage(service, themeableBrowser) {
        this.service = service;
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
                wwwImage: 'assets/previous.png',
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
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage.prototype.support = function () {
        this.themeableBrowser.create('https://www.yesgenie.com/Home_controller/support_board_cat', '_blank', this.options);
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/yesgenie/Pages/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/yesgenie/Pages/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_yes_service_service__WEBPACK_IMPORTED_MODULE_2__["YesServiceService"], _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["ThemeableBrowser"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/tabs/tabs.router.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/yesgenie/Pages/tabs/tabs.router.module.ts ***!
  \***********************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/yesgenie/Pages/tabs/tabs.page.ts");




var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'bs-home',
                children: [
                    { path: '', loadChildren: '../home-pages/home6/home6.module#Home6PageModule' },
                ]
            },
            {
                path: 'bs-wish-list',
                children: [
                    { path: '', loadChildren: '../wish-list/wish-list.module#WishListPageModule' },
                ]
            },
            {
                path: 'bs-cart',
                children: [
                    { path: '', loadChildren: '../cart/cart.module#CartPageModule' },
                ]
            },
            {
                path: 'bs-categories',
                children: [
                    { path: '', loadChildren: '../categorie-pages/categories5/categories5.module#Categories5PageModule' },
                ]
            },
            {
                path: 'nearest-product',
                children: [
                    { path: '', loadChildren: '../nearest-product/nearest-product.module#NearestProductPageModule' },
                ]
            },
            {
                path: 'wallet',
                children: [
                    { path: '', loadChildren: '../wallet/wallet.module#WalletPageModule' },
                ]
            }
        ]
    },
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-tabs-tabs-module.js.map