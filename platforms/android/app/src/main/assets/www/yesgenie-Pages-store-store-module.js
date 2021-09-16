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

module.exports = "ion-header ion-toolbar {\n  --background: black;\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 16px; }\n  ion-content ion-list {\n  background: var(--ion-color-primary);\n  margin-bottom: 5px;\n  padding-bottom: 0 !important; }\n  ion-content ion-list .item {\n    --background: transparent ; }\n  ion-content ion-list .button {\n    margin-top: 0;\n    margin-bottom: 15px; }\n  ion-content ion-list .bing-img {\n    padding: 60px;\n    padding-top: 0;\n    padding-bottom: 0; }\n  ion-content .list-avatar {\n  position: relative;\n  text-align: center; }\n  ion-content .list-avatar .item {\n    background-color: transparent; }\n  ion-content .list-avatar .item .item-inner {\n      padding-right: 0; }\n  ion-content .list-avatar .item .item-inner .label {\n        margin-right: 0;\n        margin-bottom: 0; }\n  ion-content .list-avatar .item ion-avatar {\n      min-width: 80px;\n      min-height: 80px;\n      margin-bottom: 15px;\n      margin-left: auto;\n      margin-right: auto; }\n  ion-content .list-avatar .item ion-avatar .icon {\n        color: var(--ion-color-light);\n        font-size: 100px;\n        margin-top: -5px; }\n  ion-content .list-avatar .item ion-avatar img {\n        margin-left: auto;\n        margin-right: auto;\n        height: 80px;\n        width: 80px; }\n  ion-content .list-avatar .item h2 {\n      font-size: 18px;\n      font-family: 'roboto-regular';\n      font-weight: bold;\n      color: white;\n      margin-top: 0;\n      margin-bottom: 0; }\n  ion-content .list-avatar .item p {\n      color: white;\n      white-space: normal;\n      font-size: 14px;\n      font-family: 'roboto-regular';\n      margin-top: 5px;\n      margin-bottom: 15px; }\n  ion-content .list-avatar .item .icon {\n      margin-bottom: 0; }\n  ion-content ion-grid ion-row {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9zdG9yZS9zdG9yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSxtQkFBYTtFQUNiLGFBQVEsRUFBQTtFQUhWO0lBS0UsZUFBZSxFQUFBO0VBSWY7RUFFQSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLDRCQUE0QixFQUFBO0VBSjVCO0lBT0EsMEJBQWEsRUFBQTtFQVBiO0lBVUEsYUFBYTtJQUNiLG1CQUFtQixFQUFBO0VBWG5CO0lBY0EsYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTtFQWhCakI7RUFvQkEsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0VBckJsQjtJQXVCQSw2QkFBNkIsRUFBQTtFQXZCN0I7TUEwQkEsZ0JBQWdCLEVBQUE7RUExQmhCO1FBNEJBLGVBQWU7UUFDZixnQkFBZ0IsRUFBQTtFQTdCaEI7TUFpQ0EsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBO0VBckNsQjtRQXVDQSw2QkFBNkI7UUFDN0IsZ0JBQWdCO1FBQ2hCLGdCQUFnQixFQUFBO0VBekNoQjtRQTRDQSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixXQUFXLEVBQUE7RUEvQ1g7TUFtREEsZUFBZTtNQUNmLDZCQUE2QjtNQUM3QixpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGFBQWE7TUFDYixnQkFBZ0IsRUFBQTtFQXhEaEI7TUEyREEsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsNkJBQTZCO01BQzdCLGVBQWU7TUFDZixtQkFBbUIsRUFBQTtFQWhFbkI7TUFtRUEsZ0JBQWdCLEVBQUE7RUFuRWhCO0VBeUVBLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvc3RvcmUvc3RvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9yIHRvb2xiYXIgZGVzaWduXG5pb24taGVhZGVye1xuICBpb24tdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgLS1jb2xvcjp3aGl0ZTtcbiAgaW9uLWljb257XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICB9XG4gIH1cbiAgaW9uLWNvbnRlbnR7XG4gIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIFxuICAuaXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgO1xuICB9XG4gIC5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5iaW5nLWltZyB7XG4gIHBhZGRpbmc6IDYwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuICB9XG4gIC5saXN0LWF2YXRhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAuaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBcbiAgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAubGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgfVxuICBpb24tYXZhdGFyIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAuaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBmb250LXNpemU6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICB9XG4gIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIH1cbiAgfVxuICBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5pY29ue1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIH1cbiAgfVxuICBpb24tZ3JpZHtcbiAgaW9uLXJvd3tcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIH1cbiAgfSJdfQ== */"

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