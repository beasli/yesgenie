(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nearest-product-nearest-product-module"],{

/***/ "./src/app/yesgenie/Pages/nearest-product/nearest-product.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/nearest-product/nearest-product.module.ts ***!
  \**************************************************************************/
/*! exports provided: NearestProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearestProductPageModule", function() { return NearestProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/share/share.module */ "./src/app/yesgenie/components/share/share.module.ts");
/* harmony import */ var _nearest_product_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nearest-product.page */ "./src/app/yesgenie/Pages/nearest-product/nearest-product.page.ts");









var routes = [
    {
        path: '',
        component: _nearest_product_page__WEBPACK_IMPORTED_MODULE_8__["NearestProductPage"]
    }
];
var NearestProductPageModule = /** @class */ (function () {
    function NearestProductPageModule() {
    }
    NearestProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _components_share_share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_nearest_product_page__WEBPACK_IMPORTED_MODULE_8__["NearestProductPage"]]
        })
    ], NearestProductPageModule);
    return NearestProductPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/nearest-product/nearest-product.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/nearest-product/nearest-product.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title class=\"ecom-title\">\n      Nearest Product\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"opensearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge>{{services.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" id=\"productContent\" class=\"products-content\">\n  <!-- scrollable segment divisions -->\n          <ion-grid no-padding class=\"animated fadeIn fast\">\n              <ion-row no-padding>\n                  <ion-col *ngFor=\"let p of nearestProduct\" size=\"6\" no-padding>\n                      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/yesgenie/Pages/nearest-product/nearest-product.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/nearest-product/nearest-product.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products-header ion-toolbar {\n  --color: white; }\n  .products-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 5px;\n    bottom: 14px; }\n  .products-header .segmentToolbar {\n  --background: white; }\n  .products-header ion-segment {\n  background: #f9f9f9; }\n  .products-header ion-segment ion-segment-button {\n    --indicator-color: lightgray;\n    font-size: 14px;\n    --color: #707070;\n    text-transform: capitalize; }\n  .products-content ion-button {\n  --color: white; }\n  .products-content ion-list {\n  background: #fafafa;\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-top: 6px; }\n  .products-content ion-row {\n  margin-right: 10px; }\n  .products-content ion-item {\n  border-bottom: solid #eee;\n  border-top: solid #eee;\n  --padding-start: 0; }\n  .products-content ion-item ion-thumbnail {\n    margin: 0;\n    height: 100px;\n    width: 100px; }\n  .products-content ion-item ion-thumbnail .badge-img {\n      position: absolute;\n      z-index: 1;\n      height: 30px;\n      width: 30px; }\n  .products-content ion-item ion-icon {\n    bottom: 2px;\n    position: absolute;\n    right: 10px;\n    font-size: 14px;\n    width: 20px; }\n  .products-content ion-item ion-label {\n    margin-bottom: auto;\n    margin-left: 10px; }\n  .products-content ion-item ion-label p {\n      font-size: 12px;\n      color: black; }\n  .products-content ion-item .sale {\n    background: black;\n    color: white;\n    position: absolute;\n    z-index: 1;\n    right: 0;\n    top: 0;\n    background: var(--ion-color-primary);\n    text-align: center !important;\n    padding-left: 5px;\n    padding-right: 5px;\n    padding-top: 3px;\n    padding-bottom: 3px;\n    width: 34.12px;\n    height: 14.88px;\n    font-size: 9px; }\n  .products-content ion-item .featured {\n    background: var(--ion-color-primary);\n    color: white;\n    position: absolute;\n    z-index: 1;\n    right: 0;\n    top: 27px;\n    text-align: center !important;\n    padding: 3px 5px 13px 5px;\n    width: 54px;\n    height: 15.57px;\n    font-size: 9px;\n    margin-top: -9px !important; }\n  .products-footer ion-buttons[left] {\n  padding-left: 10px; }\n  .products-footer ion-buttons[left] small {\n    display: block;\n    margin-bottom: -5px;\n    color: white; }\n  .products-footer ion-buttons[left] .bar-button {\n    padding-left: 0;\n    margin-left: 0;\n    margin-bottom: -10px; }\n  .products-footer ion-buttons[left] .bar-button .icon {\n      margin-left: 10px; }\n  .products-footer ion-buttons {\n  color: white; }\n  .products-footer ion-buttons small {\n    padding-left: 7px;\n    padding-top: 8px; }\n  .products-footer ion-buttons .bar-button-menutoggle {\n    display: inline-block; }\n  .products-footer .as-btn {\n  --color: white;\n  height: 28px; }\n  .para-price {\n  font-family: \"roboto-regular\";\n  font-size: 14px !important; }\n  .name-para {\n  font-family: \"roboto-regular\" !important;\n  font-weight: 600 !important; }\n  ion-action-sheet .action-sheet-group.sc-ion-action-sheet-md {\n  background: white; }\n  .cart-badge {\n  font-size: 27px !important; }\n  .back-icon {\n  font-size: 16px !important; }\n  .price-heading {\n  margin-top: 10px !important;\n  font-size: 20px !important;\n  padding-left: 10px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvbmVhcmVzdC1wcm9kdWN0L25lYXJlc3QtcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxjQUFRLEVBQUE7RUFIZDtJQU1VLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWSxFQUFBO0VBUnRCO0VBYU0sbUJBQWEsRUFBQTtFQWJuQjtFQWdCTSxtQkFBbUIsRUFBQTtFQWhCekI7SUFrQlEsNEJBQWtCO0lBR2xCLGVBQWU7SUFDZixnQkFBUTtJQUNSLDBCQUEwQixFQUFBO0VBSWhDO0VBRUksY0FBUSxFQUFBO0VBRlo7RUFLSSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7RUFSbkI7RUFXSSxrQkFBa0IsRUFBQTtFQVh0QjtFQWNJLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWdCLEVBQUE7RUFoQnBCO0lBeUJNLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWSxFQUFBO0VBM0JsQjtNQW1CUSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFlBQVk7TUFDWixXQUFXLEVBQUE7RUF0Qm5CO0lBaUNNLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXLEVBQUE7RUFyQ2pCO0lBd0NNLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtFQXpDdkI7TUEyQ1EsZUFBZTtNQUNmLFlBQVksRUFBQTtFQTVDcEI7SUFpRE0saUJBQWlCO0lBRWpCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixNQUFNO0lBR04sb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFFbkIsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjLEVBQUE7RUFuRXBCO0lBc0VNLG9DQUFvQztJQUVwQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUVULDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFFekIsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsMkJBQTJCLEVBQUE7RUFJakM7RUFFSSxrQkFBa0IsRUFBQTtFQUZ0QjtJQUlNLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWSxFQUFBO0VBTmxCO0lBU00sZUFBZTtJQUNmLGNBQWM7SUFDZCxvQkFBb0IsRUFBQTtFQVgxQjtNQWFRLGlCQUFpQixFQUFBO0VBYnpCO0VBa0JJLFlBQVksRUFBQTtFQWxCaEI7SUFxQk0saUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBdEJ0QjtJQXlCTSxxQkFBcUIsRUFBQTtFQXpCM0I7RUE2QkksY0FBUTtFQUNSLFlBQVksRUFBQTtFQUdoQjtFQUNFLDZCQUE2QjtFQUM3QiwwQkFBMEIsRUFBQTtFQUU1QjtFQUNFLHdDQUF3QztFQUN4QywyQkFBMkIsRUFBQTtFQUc3QjtFQUVJLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0UsMEJBQTBCLEVBQUE7RUFFNUI7RUFDRSwwQkFBMEIsRUFBQTtFQUU1QjtFQUNFLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9uZWFyZXN0LXByb2R1Y3QvbmVhcmVzdC1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0cy1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGlvbi1idXR0b25zIHtcbiAgICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICBib3R0b206IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnNlZ21lbnRUb29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICAgIGlvbi1zZWdtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAtLWluZGljYXRvci1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAvLyAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiBibGFjaztcbiAgICAgICAgLy8gLS1jb2xvci1jaGVja2VkOiBibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAtLWNvbG9yOiAjNzA3MDcwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnByb2R1Y3RzLWNvbnRlbnQge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGlvbi1saXN0IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG4gICAgaW9uLXJvdyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkICNlZWU7XG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAjZWVlO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgIC5iYWRnZS1pbWcge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIC8vIGltZ3tcbiAgICAgICAgLy8gZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgYm90dG9tOiAycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICB9XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC5zYWxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIC8vIHBhZGRpbmc6IDJweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMTJweDtcbiAgXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB3aWR0aDogMzQuMTJweDtcbiAgICAgICAgaGVpZ2h0OiAxNC44OHB4O1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgIH1cbiAgICAgIC5mZWF0dXJlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgLy8gcGFkZGluZzogMnB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMjdweDtcbiAgICAgICAgLy8gZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogM3B4IDVweCAxM3B4IDVweDtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB3aWR0aDogNTRweDtcbiAgICAgICAgaGVpZ2h0OiAxNS41N3B4O1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTlweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAucHJvZHVjdHMtZm9vdGVyIHtcbiAgICBpb24tYnV0dG9uc1tsZWZ0XSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBzbWFsbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAuYmFyLWJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWJ1dHRvbnMge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICBcbiAgICAgIHNtYWxsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICB9XG4gICAgICAuYmFyLWJ1dHRvbi1tZW51dG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgICAuYXMtYnRuIHtcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgIH1cbiAgfVxuICAucGFyYS1wcmljZSB7XG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLXJlZ3VsYXJcIjtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxuICAubmFtZS1wYXJhIHtcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tcmVndWxhclwiICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBpb24tYWN0aW9uLXNoZWV0IHtcbiAgICAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICB9XG4gIC5jYXJ0LWJhZGdlIHtcbiAgICBmb250LXNpemU6IDI3cHggIWltcG9ydGFudDtcbiAgfVxuICAuYmFjay1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgfVxuICAucHJpY2UtaGVhZGluZyB7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/nearest-product/nearest-product.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/nearest-product/nearest-product.page.ts ***!
  \************************************************************************/
/*! exports provided: NearestProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearestProductPage", function() { return NearestProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/yesgenie/Pages/services/custom-theme.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../search/search.page */ "./src/app/yesgenie/Pages/search/search.page.ts");












var NearestProductPage = /** @class */ (function () {
    // @Input('type') type;//product data
    function NearestProductPage(modalCtrl, geolocation, nativeGeocoder, router, services, menuCtrl, http, service, config, loadingController, shared, nav) {
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.router = router;
        this.services = services;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.service = service;
        this.config = config;
        this.loadingController = loadingController;
        this.shared = shared;
        this.nav = nav;
    }
    NearestProductPage.prototype.ngOnInit = function () {
        this.getGeolocation();
    };
    NearestProductPage.prototype.getGeolocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            console.log(_this.latitude);
            console.log(_this.longitude);
            _this.Searchnearest();
        }).catch(function (error) {
            alert('Error getting location' + JSON.stringify(error));
        });
    };
    NearestProductPage.prototype.Searchnearest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, userData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'lines',
                            duration: 6000,
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        userData = 'lat=' + this.latitude + '&long=' + this.longitude;
                        console.log(userData);
                        this.services.Searchnearestall(userData).subscribe(function (result) {
                            _this.nearestProduct = result.response;
                            console.log(_this.nearestProduct);
                            loading.dismiss();
                        }, function (error) {
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    NearestProductPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    NearestProductPage.prototype.opensearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _search_search_page__WEBPACK_IMPORTED_MODULE_11__["SearchPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], NearestProductPage.prototype, "content", void 0);
    NearestProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nearest-product',
            template: __webpack_require__(/*! ./nearest-product.page.html */ "./src/app/yesgenie/Pages/nearest-product/nearest-product.page.html"),
            styles: [__webpack_require__(/*! ./nearest-product.page.scss */ "./src/app/yesgenie/Pages/nearest-product/nearest-product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeGeocoder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_3__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_5__["CustomThemeService"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], NearestProductPage);
    return NearestProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=nearest-product-nearest-product-module.js.map