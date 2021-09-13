(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-store-store-module"],{

/***/ "./src/app/yesgenie/Pages/store/store.module.ts":
/*!******************************************************!*\
  !*** ./src/app/yesgenie/Pages/store/store.module.ts ***!
  \******************************************************/
/*! exports provided: StorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePageModule", function() { return StorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/share/share.module */ "./src/app/yesgenie/components/share/share.module.ts");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store.page */ "./src/app/yesgenie/Pages/store/store.page.ts");









var routes = [
    {
        path: '',
        component: _store_page__WEBPACK_IMPORTED_MODULE_8__["StorePage"]
    }
];
var StorePageModule = /** @class */ (function () {
    function StorePageModule() {
    }
    StorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _components_share_share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_store_page__WEBPACK_IMPORTED_MODULE_8__["StorePage"]]
        })
    ], StorePageModule);
    return StorePageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/store/store.page.html":
/*!******************************************************!*\
  !*** ./src/app/yesgenie/Pages/store/store.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <ion-list class=\"list-avatar\">\n    <img class=\"bing-img\" src=\"{{banner}}\">\n    <ion-item no-padding text-center>\n      <ion-label>\n        <ion-avatar>\n          <img src=\"{{gravatar}}\">\n        </ion-avatar>\n        <h2>{{name}}</h2>\n        <p class=\"icon\">\n          <ion-icon name=\"star-outline\"></ion-icon>&nbsp;&nbsp;{{rating}}\n        </p>\n        <p>{{email}}</p>\n        <ion-button color=\"light\">\n          {{'Contact Us' | translate }}\n        </ion-button>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <ion-col *ngFor=\"let p of products\" size=\"6\" no-padding>\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll #infinite>\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/store/store.page.scss":
/*!******************************************************!*\
  !*** ./src/app/yesgenie/Pages/store/store.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --background: black;\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 16px; }\n  ion-content ion-list {\n  background: var(--ion-color-primary);\n  margin-bottom: 5px;\n  padding-bottom: 0 !important; }\n  ion-content ion-list .item {\n    --background: transparent ; }\n  ion-content ion-list .button {\n    margin-top: 0;\n    margin-bottom: 15px; }\n  ion-content ion-list .bing-img {\n    padding: 60px;\n    padding-top: 0;\n    padding-bottom: 0; }\n  ion-content .list-avatar {\n  position: relative;\n  text-align: center; }\n  ion-content .list-avatar .item {\n    background-color: transparent; }\n  ion-content .list-avatar .item .item-inner {\n      padding-right: 0; }\n  ion-content .list-avatar .item .item-inner .label {\n        margin-right: 0;\n        margin-bottom: 0; }\n  ion-content .list-avatar .item ion-avatar {\n      min-width: 80px;\n      min-height: 80px;\n      margin-bottom: 15px;\n      margin-left: auto;\n      margin-right: auto; }\n  ion-content .list-avatar .item ion-avatar .icon {\n        color: var(--ion-color-light);\n        font-size: 100px;\n        margin-top: -5px; }\n  ion-content .list-avatar .item ion-avatar img {\n        margin-left: auto;\n        margin-right: auto;\n        height: 80px;\n        width: 80px; }\n  ion-content .list-avatar .item h2 {\n      font-size: 18px;\n      font-family: 'roboto-regular';\n      font-weight: bold;\n      color: white;\n      margin-top: 0;\n      margin-bottom: 0; }\n  ion-content .list-avatar .item p {\n      color: white;\n      white-space: normal;\n      font-size: 14px;\n      font-family: 'roboto-regular';\n      margin-top: 5px;\n      margin-bottom: 15px; }\n  ion-content .list-avatar .item .icon {\n      margin-bottom: 0; }\n  ion-content ion-grid ion-row {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvc3RvcmUvc3RvcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUUsbUJBQWE7RUFDYixhQUFRLEVBQUE7RUFIVjtJQUtFLGVBQWUsRUFBQTtFQUlmO0VBRUEsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQiw0QkFBNEIsRUFBQTtFQUo1QjtJQU9BLDBCQUFhLEVBQUE7RUFQYjtJQVVBLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQVhuQjtJQWNBLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCLEVBQUE7RUFoQmpCO0VBb0JBLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtFQXJCbEI7SUF1QkEsNkJBQTZCLEVBQUE7RUF2QjdCO01BMEJBLGdCQUFnQixFQUFBO0VBMUJoQjtRQTRCQSxlQUFlO1FBQ2YsZ0JBQWdCLEVBQUE7RUE3QmhCO01BaUNBLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixrQkFBa0IsRUFBQTtFQXJDbEI7UUF1Q0EsNkJBQTZCO1FBQzdCLGdCQUFnQjtRQUNoQixnQkFBZ0IsRUFBQTtFQXpDaEI7UUE0Q0EsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVyxFQUFBO0VBL0NYO01BbURBLGVBQWU7TUFDZiw2QkFBNkI7TUFDN0IsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixhQUFhO01BQ2IsZ0JBQWdCLEVBQUE7RUF4RGhCO01BMkRBLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLDZCQUE2QjtNQUM3QixlQUFlO01BQ2YsbUJBQW1CLEVBQUE7RUFoRW5CO01BbUVBLGdCQUFnQixFQUFBO0VBbkVoQjtFQXlFQSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL3N0b3JlL3N0b3JlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvciB0b29sYmFyIGRlc2lnblxuaW9uLWhlYWRlcntcbiAgaW9uLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIC0tY29sb3I6d2hpdGU7XG4gIGlvbi1pY29ue1xuICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgfVxuICB9XG4gIGlvbi1jb250ZW50e1xuICBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBcbiAgLml0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IDtcbiAgfVxuICAuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuYmluZy1pbWcge1xuICBwYWRkaW5nOiA2MHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbiAgfVxuICAubGlzdC1hdmF0YXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLml0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgXG4gIC5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgLmxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIH1cbiAgaW9uLWF2YXRhciB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWluLWhlaWdodDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgLmljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgfVxuICBpbWcge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICB9XG4gIH1cbiAgaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuaWNvbntcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICB9XG4gIH1cbiAgaW9uLWdyaWR7XG4gIGlvbi1yb3d7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/store/store.page.ts":
/*!****************************************************!*\
  !*** ./src/app/yesgenie/Pages/store/store.page.ts ***!
  \****************************************************/
/*! exports provided: StorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePage", function() { return StorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var StorePage = /** @class */ (function () {
    function StorePage(nav, menuCtrl) {
        this.nav = nav;
        this.menuCtrl = menuCtrl;
        this.name = "Hannan";
        this.banner = "assets/images/2.jpg";
        this.gravatar = "assets/images/2.jpg";
        this.email = "hannan@gmail.com";
        this.rating = null;
        this.products = [
            { img: "assets/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false },
            { img: "assets/images/item-images/2.png", name: "Ladies Jacket ", price: "14.64", dPrice: "11.00", fav: false },
            { img: "assets/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false },
            { img: "assets/images/item-images/4.png", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false },
            { img: "assets/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false },
            { img: "assets/images/item-images/2.png", name: "Ladies Jackets", price: "14.64", dPrice: "11.00", fav: false },
            { img: "assets/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false },
            { img: "assets/images/item-images/4.png", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false }
        ];
        this.scrollSegments = "all"; //scrollable segment
    }
    StorePage.prototype.ngOnInit = function () {
    };
    //for infinite scroll
    StorePage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.products.push({ img: "assets/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false }, { img: "assets/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false });
            event.target.complete();
        }, 500);
    };
    StorePage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    StorePage.prototype.ionViewWillEnter = function () {
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StorePage.prototype, "type", void 0);
    StorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! ./store.page.html */ "./src/app/yesgenie/Pages/store/store.page.html"),
            styles: [__webpack_require__(/*! ./store.page.scss */ "./src/app/yesgenie/Pages/store/store.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], StorePage);
    return StorePage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-store-store-module.js.map