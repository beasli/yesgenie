(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-search-search-module"],{

/***/ "./src/app/yesgenie/Pages/search/search.module.ts":
/*!********************************************************!*\
  !*** ./src/app/yesgenie/Pages/search/search.module.ts ***!
  \********************************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/share/share.module */ "./src/app/yesgenie/components/share/share.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search.page */ "./src/app/yesgenie/Pages/search/search.page.ts");









var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_8__["SearchPage"]
    }
];
var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _components_share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_8__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/search/search.page.html":
/*!********************************************************!*\
  !*** ./src/app/yesgenie/Pages/search/search.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title class=\"ecom-title\">\n      {{'Search'| translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon class=\"cart-badge\" name=\"cart\"></ion-icon>\n        <ion-badge>{{services.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content products-content\">\n  <form [formGroup]=\"searchproduct\" >\n    <ion-searchbar  name=\"search\" placeholder=\"Search\" debounce=\"500\" formControlName=\"input_value\" (ionChange)=\"Searchformemberandproduct($event)\">\n    </ion-searchbar>\n  </form>\n\n\n  <ion-grid no-padding class=\"animated fadeIn fast\">\n    <ion-row no-padding>\n        <ion-col *ngFor=\"let p of responseData\" size=\"6\" no-padding>\n            <app-product [data]=\"p\"></app-product>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n\n\n\n  <!-- <ion-list>\n    <ion-item *ngFor=\"let product of categories\" routerLink=\"/bs-product-detail\" routerDirection=\"forward\">\n      <ion-avatar slot=\"start\" class=\"animated flipInX delay-900ms\">\n        <img src=\"{{product.img}}\" />\n      </ion-avatar>\n      <ion-label padding>\n        <ion-text>\n          <h2>{{product.name|translate}}</h2>\n          <p>{{product.count}} {{'Products'| translate }}</p>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n  </ion-list> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/search/search.page.scss":
/*!********************************************************!*\
  !*** ./src/app/yesgenie/Pages/search/search.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content ion-searchbar {\n  --background: white; }\n  ion-content ion-list {\n  background: #fafafa; }\n  ion-content ion-item ion-avatar {\n  width: 50px !important;\n  height: 50px !important; }\n  ion-content ion-item ion-label {\n  padding-bottom: 0;\n  padding-top: 0;\n  padding-left: 0; }\n  ion-content ion-item ion-label h2 {\n    font-size: 20px;\n    font-family: 'roboto-regular' !important; }\n  ion-content ion-item ion-label p {\n    color: gray;\n    font-size: 14px;\n    font-family: 'roboto-regular' !important; }\n  .products-content ion-button {\n  --color: white; }\n  .products-content ion-list {\n  background: #fafafa;\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-top: 6px; }\n  .products-content ion-row {\n  margin-right: 10px; }\n  .products-content ion-item {\n  border-bottom: solid #eee;\n  border-top: solid #eee;\n  --padding-start: 0; }\n  .products-content ion-item ion-thumbnail {\n    margin: 0;\n    height: 100px;\n    width: 100px; }\n  .products-content ion-item ion-thumbnail .badge-img {\n      position: absolute;\n      z-index: 1;\n      height: 30px;\n      width: 30px; }\n  .products-content ion-item ion-icon {\n    bottom: 2px;\n    position: absolute;\n    right: 10px;\n    font-size: 14px;\n    width: 20px; }\n  .products-content ion-item ion-label {\n    margin-bottom: auto;\n    margin-left: 10px; }\n  .products-content ion-item ion-label p {\n      font-size: 12px;\n      color: black; }\n  .products-content ion-item .sale {\n    background: black;\n    color: white;\n    position: absolute;\n    z-index: 1;\n    right: 0;\n    top: 0;\n    background: var(--ion-color-primary);\n    text-align: center !important;\n    padding-left: 5px;\n    padding-right: 5px;\n    padding-top: 3px;\n    padding-bottom: 3px;\n    width: 34.12px;\n    height: 14.88px;\n    font-size: 9px; }\n  .products-content ion-item .featured {\n    background: var(--ion-color-primary);\n    color: white;\n    position: absolute;\n    z-index: 1;\n    right: 0;\n    top: 27px;\n    text-align: center !important;\n    padding: 3px 5px 13px 5px;\n    width: 54px;\n    height: 15.57px;\n    font-size: 9px;\n    margin-top: -9px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWNreS9EZXNrdG9wL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxhQUFRLEVBQUE7RUFIaEI7SUFLWSxlQUFlLEVBQUE7RUFMM0I7SUFTZ0IsWUFBWSxFQUFBO0VBVDVCO0lBY2dCLGVBQWUsRUFBQTtFQWQvQjtJQWlCZ0Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFLNUI7RUFFUSxtQkFBYSxFQUFBO0VBRnJCO0VBS1EsbUJBQW1CLEVBQUE7RUFMM0I7RUFTWSxzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7RUFWbkM7RUFhWSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWUsRUFBQTtFQWYzQjtJQWlCZ0IsZUFBZTtJQUNmLHdDQUNKLEVBQUE7RUFuQlo7SUFxQmdCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysd0NBQ0osRUFBQTtFQU9aO0VBRU0sY0FBUSxFQUFBO0VBRmQ7RUFLTSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7RUFSckI7RUFXTSxrQkFBa0IsRUFBQTtFQVh4QjtFQWNNLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWdCLEVBQUE7RUFoQnRCO0lBeUJRLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWSxFQUFBO0VBM0JwQjtNQW1CVSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFlBQVk7TUFDWixXQUFXLEVBQUE7RUF0QnJCO0lBaUNRLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXLEVBQUE7RUFyQ25CO0lBd0NRLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtFQXpDekI7TUEyQ1UsZUFBZTtNQUNmLFlBQVksRUFBQTtFQTVDdEI7SUFpRFEsaUJBQWlCO0lBRWpCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixNQUFNO0lBR04sb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFFbkIsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjLEVBQUE7RUFuRXRCO0lBc0VRLG9DQUFvQztJQUVwQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUVULDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFFekIsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDpibGFjaztcbiAgICAgICAgLS1jb2xvcjp3aGl0ZTtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRpdGxle1xuICAgICAgICAgICAgaW9uLWltZ3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbnN7XG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYmFkZ2V7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWNvbnRlbnR7XG4gICAgaW9uLXNlYXJjaGJhcntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG4gICAgaW9uLWxpc3R7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgICAgICBpb24tYXZhdGFye1xuICAgICAgICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcicgIWltcG9ydGFudFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcicgIWltcG9ydGFudFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLnByb2R1Y3RzLWNvbnRlbnQge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGlvbi1saXN0IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG4gICAgaW9uLXJvdyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkICNlZWU7XG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAjZWVlO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgIC5iYWRnZS1pbWcge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIC8vIGltZ3tcbiAgICAgICAgLy8gZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgYm90dG9tOiAycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICB9XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC5zYWxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIC8vIHBhZGRpbmc6IDJweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMTJweDtcbiAgXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB3aWR0aDogMzQuMTJweDtcbiAgICAgICAgaGVpZ2h0OiAxNC44OHB4O1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgIH1cbiAgICAgIC5mZWF0dXJlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgLy8gcGFkZGluZzogMnB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMjdweDtcbiAgICAgICAgLy8gZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogM3B4IDVweCAxM3B4IDVweDtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB3aWR0aDogNTRweDtcbiAgICAgICAgaGVpZ2h0OiAxNS41N3B4O1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTlweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/search/search.page.ts":
/*!******************************************************!*\
  !*** ./src/app/yesgenie/Pages/search/search.page.ts ***!
  \******************************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");





var SearchPage = /** @class */ (function () {
    function SearchPage(menuCtrl, toastCtrl, nav, formBuilder, services) {
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.formBuilder = formBuilder;
        this.services = services;
        this.categories = [
            { name: "Tops", img: "assets/template-themes/becrux/images/category-images/1.jpg", count: "2" },
            { name: "Bottoms", img: "assets/template-themes/becrux/images/category-images/2.jpg", count: "3" },
            { name: "Shirts", img: "assets/template-themes/becrux/images/category-images/3.jpg", count: "2" },
            { name: "Winter Wear", img: "assets/template-themes/becrux/images/category-images/4.jpg", count: "2" },
            { name: "Shoes", img: "assets/template-themes/becrux/images/category-images/5.jpg", count: "2" },
            { name: "Watches", img: "assets/template-themes/becrux/images/category-images/6.jpg", count: "2" },
        ];
    }
    SearchPage.prototype.ngOnInit = function () {
        this.ProdcutSearch();
    };
    SearchPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    SearchPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    SearchPage.prototype.ionViewWillEnter = function () {
    };
    SearchPage.prototype.Searchformemberandproduct = function () {
        var _this = this;
        var userData = 'search_type=' + 'product' + '&input_value=' + this.searchproduct.get('input_value').value;
        console.log(userData);
        this.services.Searchformemberandproduct(userData).subscribe(function (result) {
            _this.responseData = result.response.response;
            console.log(_this.responseData);
        }, function (error) {
        });
    };
    SearchPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000,
                            position: "middle",
                            color: "primary"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.ProdcutSearch = function () {
        this.searchproduct = this.formBuilder.group({
            //  search_type: ['', Validators.compose([Validators.required])],
            input_value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
    };
    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.page.html */ "./src/app/yesgenie/Pages/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/yesgenie/Pages/search/search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_4__["YesServiceService"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-search-search-module.js.map