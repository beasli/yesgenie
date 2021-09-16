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

module.exports = ".products-header ion-toolbar {\n  --color: white; }\n  .products-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 5px;\n    bottom: 14px; }\n  .products-header .segmentToolbar {\n  --background: white; }\n  .products-header ion-segment {\n  background: #f9f9f9; }\n  .products-header ion-segment ion-segment-button {\n    --indicator-color: lightgray;\n    font-size: 14px;\n    --color: #707070;\n    text-transform: capitalize; }\n  .products-content ion-button {\n  --color: white; }\n  .products-content ion-list {\n  background: #fafafa;\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-top: 6px; }\n  .products-content ion-row {\n  margin-right: 10px; }\n  .products-content ion-item {\n  border-bottom: solid #eee;\n  border-top: solid #eee;\n  --padding-start: 0; }\n  .products-content ion-item ion-thumbnail {\n    margin: 0;\n    height: 100px;\n    width: 100px; }\n  .products-content ion-item ion-thumbnail .badge-img {\n      position: absolute;\n      z-index: 1;\n      height: 30px;\n      width: 30px; }\n  .products-content ion-item ion-icon {\n    bottom: 2px;\n    position: absolute;\n    right: 10px;\n    font-size: 14px;\n    width: 20px; }\n  .products-content ion-item ion-label {\n    margin-bottom: auto;\n    margin-left: 10px; }\n  .products-content ion-item ion-label p {\n      font-size: 12px;\n      color: black; }\n  .products-content ion-item .sale {\n    background: black;\n    color: white;\n    position: absolute;\n    z-index: 1;\n    right: 0;\n    top: 0;\n    background: var(--ion-color-primary);\n    text-align: center !important;\n    padding-left: 5px;\n    padding-right: 5px;\n    padding-top: 3px;\n    padding-bottom: 3px;\n    width: 34.12px;\n    height: 14.88px;\n    font-size: 9px; }\n  .products-content ion-item .featured {\n    background: var(--ion-color-primary);\n    color: white;\n    position: absolute;\n    z-index: 1;\n    right: 0;\n    top: 27px;\n    text-align: center !important;\n    padding: 3px 5px 13px 5px;\n    width: 54px;\n    height: 15.57px;\n    font-size: 9px;\n    margin-top: -9px !important; }\n  .products-footer ion-buttons[left] {\n  padding-left: 10px; }\n  .products-footer ion-buttons[left] small {\n    display: block;\n    margin-bottom: -5px;\n    color: white; }\n  .products-footer ion-buttons[left] .bar-button {\n    padding-left: 0;\n    margin-left: 0;\n    margin-bottom: -10px; }\n  .products-footer ion-buttons[left] .bar-button .icon {\n      margin-left: 10px; }\n  .products-footer ion-buttons {\n  color: white; }\n  .products-footer ion-buttons small {\n    padding-left: 7px;\n    padding-top: 8px; }\n  .products-footer ion-buttons .bar-button-menutoggle {\n    display: inline-block; }\n  .products-footer .as-btn {\n  --color: white;\n  height: 28px; }\n  .para-price {\n  font-family: \"roboto-regular\";\n  font-size: 14px !important; }\n  .name-para {\n  font-family: \"roboto-regular\" !important;\n  font-weight: 600 !important; }\n  ion-action-sheet .action-sheet-group.sc-ion-action-sheet-md {\n  background: white; }\n  .cart-badge {\n  font-size: 27px !important; }\n  .back-icon {\n  font-size: 16px !important; }\n  .price-heading {\n  margin-top: 10px !important;\n  font-size: 20px !important;\n  padding-left: 10px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9uZWFyZXN0LXByb2R1Y3QvbmVhcmVzdC1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdNLGNBQVEsRUFBQTtFQUhkO0lBTVUsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFSdEI7RUFhTSxtQkFBYSxFQUFBO0VBYm5CO0VBZ0JNLG1CQUFtQixFQUFBO0VBaEJ6QjtJQWtCUSw0QkFBa0I7SUFHbEIsZUFBZTtJQUNmLGdCQUFRO0lBQ1IsMEJBQTBCLEVBQUE7RUFJaEM7RUFFSSxjQUFRLEVBQUE7RUFGWjtFQUtJLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQVJuQjtFQVdJLGtCQUFrQixFQUFBO0VBWHRCO0VBY0kseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBZ0IsRUFBQTtFQWhCcEI7SUF5Qk0sU0FBUztJQUNULGFBQWE7SUFDYixZQUFZLEVBQUE7RUEzQmxCO01BbUJRLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsWUFBWTtNQUNaLFdBQVcsRUFBQTtFQXRCbkI7SUFpQ00sV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVcsRUFBQTtFQXJDakI7SUF3Q00sbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0VBekN2QjtNQTJDUSxlQUFlO01BQ2YsWUFBWSxFQUFBO0VBNUNwQjtJQWlETSxpQkFBaUI7SUFFakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLE1BQU07SUFHTixvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUVuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWMsRUFBQTtFQW5FcEI7SUFzRU0sb0NBQW9DO0lBRXBDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBRVQsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUV6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCwyQkFBMkIsRUFBQTtFQUlqQztFQUVJLGtCQUFrQixFQUFBO0VBRnRCO0lBSU0sY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7RUFObEI7SUFTTSxlQUFlO0lBQ2YsY0FBYztJQUNkLG9CQUFvQixFQUFBO0VBWDFCO01BYVEsaUJBQWlCLEVBQUE7RUFiekI7RUFrQkksWUFBWSxFQUFBO0VBbEJoQjtJQXFCTSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUF0QnRCO0lBeUJNLHFCQUFxQixFQUFBO0VBekIzQjtFQTZCSSxjQUFRO0VBQ1IsWUFBWSxFQUFBO0VBR2hCO0VBQ0UsNkJBQTZCO0VBQzdCLDBCQUEwQixFQUFBO0VBRTVCO0VBQ0Usd0NBQXdDO0VBQ3hDLDJCQUEyQixFQUFBO0VBRzdCO0VBRUksaUJBQWlCLEVBQUE7RUFHckI7RUFDRSwwQkFBMEIsRUFBQTtFQUU1QjtFQUNFLDBCQUEwQixFQUFBO0VBRTVCO0VBQ0UsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQiw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL25lYXJlc3QtcHJvZHVjdC9uZWFyZXN0LXByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RzLWhlYWRlciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgaW9uLWJ1dHRvbnMge1xuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgIGJvdHRvbTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuc2VnbWVudFRvb2xiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG4gICAgaW9uLXNlZ21lbnQge1xuICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgIC8vIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAgICAgICAvLyAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIC0tY29sb3I6ICM3MDcwNzA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAucHJvZHVjdHMtY29udGVudCB7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgaW9uLWxpc3Qge1xuICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIH1cbiAgICBpb24tcm93IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgI2VlZTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkICNlZWU7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgLmJhZGdlLWltZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICB9XG4gIFxuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgLy8gaW1ne1xuICAgICAgICAvLyBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgIH1cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLnNhbGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgLy8gcGFkZGluZzogMnB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgLy8gZm9udC1zaXplOiAxMnB4O1xuICBcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiAzNC4xMnB4O1xuICAgICAgICBoZWlnaHQ6IDE0Ljg4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgfVxuICAgICAgLmZlYXR1cmVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAvLyBwYWRkaW5nOiAycHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAyN3B4O1xuICAgICAgICAvLyBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAzcHggNXB4IDEzcHggNXB4O1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIHdpZHRoOiA1NHB4O1xuICAgICAgICBoZWlnaHQ6IDE1LjU3cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtOXB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5wcm9kdWN0cy1mb290ZXIge1xuICAgIGlvbi1idXR0b25zW2xlZnRdIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIHNtYWxsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC5iYXItYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpb24tYnV0dG9ucyB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gIFxuICAgICAgc21hbGwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgIH1cbiAgICAgIC5iYXItYnV0dG9uLW1lbnV0b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICAgIC5hcy1idG4ge1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgfVxuICB9XG4gIC5wYXJhLXByaWNlIHtcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tcmVndWxhclwiO1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5uYW1lLXBhcmEge1xuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by1yZWd1bGFyXCIgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGlvbi1hY3Rpb24tc2hlZXQge1xuICAgIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG4gIH1cbiAgLmNhcnQtYmFkZ2Uge1xuICAgIGZvbnQtc2l6ZTogMjdweCAhaW1wb3J0YW50O1xuICB9XG4gIC5iYWNrLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcmljZS1oZWFkaW5nIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */"

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