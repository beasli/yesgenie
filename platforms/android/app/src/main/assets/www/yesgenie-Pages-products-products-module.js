(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-products-products-module"],{

/***/ "./src/app/yesgenie/Pages/products/products.module.ts":
/*!************************************************************!*\
  !*** ./src/app/yesgenie/Pages/products/products.module.ts ***!
  \************************************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/share/share.module */ "./src/app/yesgenie/components/share/share.module.ts");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products.page */ "./src/app/yesgenie/Pages/products/products.page.ts");









var routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
    }
];
var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _components_share_share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]]
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/products/products.page.html":
/*!************************************************************!*\
  !*** ./src/app/yesgenie/Pages/products/products.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"products-header\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button fill=\"clear\" routerLink=\"/tabs/bs-categories\" routerDirection=\"backward\">\n                <ion-icon src=\"assets/back.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title class=\"ecom-title\"> {{SubCatName}} </ion-title>\n\n        <ion-buttons slot=\"end\">\n\n            <ion-button fill=\"clear\" (click)=\"opensearch()\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n              </ion-button>\n\n            <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n                <ion-icon name=\"cart\"></ion-icon>\n                <ion-badge>{{services.cartTotalItems()}}</ion-badge>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <ion-toolbar class=\"segmentToolbar\" *ngIf=\"proid != null\">\n\n        <ion-segment [(ngModel)]=\"scrollSegments\" scrollable>\n            <ion-segment-button *ngFor=\"let pro of responseData\" (click)=\"product(pro.category_id)\">{{pro.name}}</ion-segment-button>\n            <!-- <ion-segment-button value=\"tops\">Tops </ion-segment-button>\n            <ion-segment-button value=\"bottoms\">Bottoms</ion-segment-button>\n            <ion-segment-button value=\"Shirtss\"> Shirts</ion-segment-button>\n            <ion-segment-button value=\"winter\">Winter Wear</ion-segment-button>\n            <ion-segment-button value=\"shoes\">Shoes</ion-segment-button>\n            <ion-segment-button value=\"watches\">Watches</ion-segment-button> -->\n            <!-- <ion-slides [options]=\"sliderConfig\">\n                \n                    <ion-slide *ngFor=\"let pro of responseData\" (click)=\"product(pro.category_id)\">\n                            {{pro.name}}\n                    </ion-slide>\n                  </ion-slides> -->\n        </ion-segment>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" id=\"productContent\" class=\"products-content\">\n    <!-- scrollable segment divisions -->\n            <ion-grid *ngIf=\"productView=='grid'\" class=\"animated fadeIn fast ion-no-padding\">\n                <ion-row class=\"ion-no-padding\">\n                    <ion-col *ngFor=\"let p of ProductResponse\" size=\"6\" class=\"ion-no-padding\">\n                        <app-product [data]=\"p\" [data1]=\"productresvar\"  [type]=\"'normal'\"></app-product>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n\n            <ion-list class=\"list-view\" *ngIf=\"productView=='list'\" class=\"animated fadeIn fast\">\n                <span *ngFor=\"let p of ProductResponse\">\n                  <app-product [data]=\"p\" [data1]=\"productresvar\" [type]=\"'list'\"></app-product>\n                </span>\n            </ion-list>\n\n            <!-- <ion-list class=\"list-view\" *ngIf=\"productView=='list'\" class=\"animated fadeIn fast\">\n                <ion-item style=\"height: 116px;\" *ngFor=\"let p of ProductResponse\" class=\"list\" lines=\"none\" class=\"animated fadeIn fast\">\n                    <ion-thumbnail slot=\"start\" (click)=\"goToProductDetail(p.product_id, p.category_id, Id, p.title)\">\n                         <ion-img class=\"badge-img\" src=\"assets/template-themes/becrux/badge_new.png\"></ion-img>\n                        <img src=\"https://www.medgroc.com/uploads/images/{{p.image_small}}\" />\n\n                        <!-- <img src=\"{{p.img}}\">\n                    </ion-thumbnail>\n                    <ion-label (click)=\"goToProductDetail(p.product_id, p.category_id, Id, p.title)\">\n                        <p>{{p.title}}</p>\n\n                          <div *ngIf=\"p.sale_price != 0\">\n                        <p class=\"name-para\"><del style=\"color: #ccc;\">{{p.price*1 /100*1}} Rs</del></p>\n                        <p class=\"name-para\">{{p.sale_price*1 /100*1}} Rs</p>\n                    </div>\n\n                    <div *ngIf=\"p.sale_price == 0\">\n                        <p class=\"name-para\">{{p.price*1 /100*1}} Rs</p>\n                    </div>\n\n                    </ion-label>\n\n                    <ion-icon class=\"theme-icon\" (click)=\"onIconClick(p)\" name=\"heart-empty\"></ion-icon>\n                    <ion-icon class=\"theme-icon\" (click)=\"onIconClick(p)\" *ngIf=\"p.fav\" name=\"heart\"></ion-icon>\n                    <!-- <div class=\"sale\">SALE</div>\n                    <div class=\"featured\">FEATURED</div>\n                </ion-item>\n            </ion-list> -->\n\n            <ion-col *ngIf=\"ProductResponse == '' || null\" size=\"12\" class=\"animated fadeIn fast\">\n                <h6 text-center *ngIf=\"MessShow == '' || null\">Please Wait...</h6>\n                <h6 text-center>{{MessShow}}</h6>\n            </ion-col>\n\n\n            <!-- <ion-grid class=\"ion-no-padding grid-empty\" *ngIf=\"services1.cartProducts.length==0\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-icon name=\"basket\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h4>{{'Your cart is empty'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h5>{{'continue shopping'|translate}}</h5>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-button color=\"secondary\" (click)=\"openProductsPage()\">{{'Explore'|translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n\n    <!-- infinite scroll -->\n    <!-- <ion-infinite-scroll #infinite (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll> -->\n</ion-content>\n\n<ion-footer class=\"products-footer\">\n    <ion-toolbar color=\"light\">\n        <!-- <ion-buttons left>\n            <small>{{\"Sort Products\"|translate}}\n            </small>\n        </ion-buttons>\n        <ion-button size=\"medium\" fill=\"clear\" class=\"as-btn\" (click)=\"resetFilters()\">\n            {{sortOrder| translate}}\n            <ion-icon name=\"arrow-up\"></ion-icon>\n        </ion-button> -->\n        <ion-buttons slot=\"end\">\n            <!-- <ion-button (click)=\"changeLayout()\">\n                <ion-icon name=\"ios-list\" [name]=\"productView=='grid'? 'list' : 'apps'\"></ion-icon>\n            </ion-button> -->\n            <ion-button (click)=\"refresh()\">\n                <ion-icon name=\"refresh\"></ion-icon>\n            </ion-button>\n            <ion-menu-button (click)=\"openRightMenu()\">\n                <ion-icon name=\"funnel\"></ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>\n\n<!--  For Shop Filter Side Menu  -->\n<ion-menu menuId=\"bbShop\" contentId=\"productContent\" side=\"end\">\n    <ion-header>\n        <ion-menu-toggle auto-hide=\"false\" no-padding>\n            <ion-toolbar class=\"menu-toolbar\">\n                <ion-buttons slot=\"start\">\n                    <ion-button fill=\"clear\">\n                        <ion-icon slot=\"icon-only\" class=\"usd-icon\" name=\"close\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n                <ion-title>Filter</ion-title>\n            </ion-toolbar>\n        </ion-menu-toggle>\n    </ion-header>\n    <ion-content>\n        <h2 class=\"price-heading\">Filter by Price</h2>\n\n        <!-- <ion-item>\n            <ion-range id=\"dual-range\" [(ngModel)]=\"structure\" (ionBlur)=\"FilterProduct()\" dualKnobs=\"true\" pin=\"true\" [min]=\"minAmount\"\n            [max]=\"maxAmount\">\n                <ion-label slot=\"start\">{{structure.lower*1 /100*1}}</ion-label>\n                <ion-label slot=\"end\">{{structure.upper*1 /100*1}}</ion-label>\n            </ion-range>\n        </ion-item> -->\n\n        <ion-row style=\"margin-left: 5px;\">\n            <ion-col>\n            <ion-item class=\"animated fadeInRight\" lines=\"none\" style=\"border: 1px solid; width: 80%; height: 85%;\">\n            <ion-input [(ngModel)]=\"minPrice\" placeholder=\"Min\" type=\"number\" required></ion-input>\n            </ion-item>\n            </ion-col>\n \n             <ion-col>\n             <ion-item class=\"animated fadeInRight\" lines=\"none\" style=\"border: 1px solid; width: 80%; height: 85%;\">\n                 <ion-input [(ngModel)]=\"maxPrice\" placeholder=\"Max\" type=\"number\" required></ion-input>\n               </ion-item>\n             </ion-col>\n \n             <ion-col>\n                 <ion-button (click)=\"FilterProduct()\"><ion-icon name=\"ios-arrow-forward\"></ion-icon></ion-button>\n             </ion-col>\n         </ion-row>\n\n        <ion-card-header>\n            <ion-card-title color=\"primary\">\n                Filter by Categories\n            </ion-card-title>\n          </ion-card-header>\n        \n          <ion-card class=\"CatFilter\">\n      \n          <ion-item (click)=\"toggleMenu()\" *ngFor=\"let pro of responseData\" >\n              <ion-label (click)=\"product(pro.category_id)\">{{pro.name}}</ion-label>\n            </ion-item>\n          </ion-card>\n\n\n          <ion-card class=\"CatFilter\" *ngFor=\"let f of customfieldoption\">\n            <ion-radio-group>\n                <!-- <h2 class=\"price-heading\">{{f.name}}</h2> -->\n            <ion-item *ngFor=\"let lf of f\" (click)=\"toggleMenu()\">\n                <ion-radio (ionSelect)=\"Getcustomfieldproduct(lf.id)\" value={{lf.id}} slot=\"start\"></ion-radio>\n                <p>{{lf.field_option}}</p>\n            </ion-item>\n        </ion-radio-group>\n            </ion-card>\n\n\n      <!--  <ion-item lines=\"none\">\n            <ion-checkbox slot=\"start\"></ion-checkbox>\n            <p>Featured</p>\n        </ion-item>\n        <h2 class=\"price-heading\">By Color</h2>\n        <ion-item>\n            <ion-checkbox slot=\"start\"></ion-checkbox>\n            <p>Red</p>\n        </ion-item>\n        <ion-item lines=\"none\">\n            <ion-checkbox slot=\"start\"></ion-checkbox>\n            <p>Black</p>\n        </ion-item>\n        <h2 class=\"price-heading\">By Size</h2>\n        <ion-item>\n            <ion-checkbox slot=\"start\"></ion-checkbox>\n            <p>Small</p>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox slot=\"start\"></ion-checkbox>\n            <p>Medium</p>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox slot=\"start\"></ion-checkbox>\n            <p>Large</p>\n        </ion-item>\n        <ion-item lines=\"none\">\n            <ion-checkbox slot=\"start\"></ion-checkbox>\n            <p>Extra large</p>\n        </ion-item> -->\n    </ion-content>\n</ion-menu>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/products/products.page.scss":
/*!************************************************************!*\
  !*** ./src/app/yesgenie/Pages/products/products.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products-header ion-toolbar {\n  --color: white; }\n  .products-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 5px;\n    bottom: 14px; }\n  .products-header .segmentToolbar {\n  --background: white; }\n  .products-header ion-segment {\n  background: #f9f9f9; }\n  .products-header ion-segment ion-segment-button {\n    --indicator-color: lightgray;\n    font-size: 14px;\n    --color: #707070;\n    text-transform: capitalize; }\n  .products-content ion-button {\n  --color: white; }\n  .products-content ion-list {\n  background: #fafafa;\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-top: 6px; }\n  .products-content ion-row {\n  margin-right: 0px; }\n  .products-content ion-item {\n  border-bottom: solid #eee;\n  border-top: solid #eee;\n  --padding-start: 0; }\n  .products-content ion-item ion-thumbnail {\n    margin: 0;\n    height: 100px;\n    width: 100px; }\n  .products-content ion-item ion-thumbnail .badge-img {\n      position: absolute;\n      z-index: 1;\n      height: 30px;\n      width: 30px; }\n  .products-content ion-item ion-icon {\n    bottom: 2px;\n    position: absolute;\n    right: 10px;\n    font-size: 30px;\n    width: 20px; }\n  .products-content ion-item ion-label {\n    margin-bottom: auto;\n    margin-left: 10px; }\n  .products-content ion-item ion-label p {\n      font-size: 12px;\n      color: black; }\n  .products-content ion-item .sale {\n    background: black;\n    color: white;\n    position: absolute;\n    z-index: 1;\n    right: 0;\n    top: 0;\n    background: var(--ion-color-primary);\n    text-align: center !important;\n    padding-left: 5px;\n    padding-right: 5px;\n    padding-top: 3px;\n    padding-bottom: 3px;\n    width: 34.12px;\n    height: 14.88px;\n    font-size: 9px; }\n  .products-content ion-item .featured {\n    background: var(--ion-color-primary);\n    color: white;\n    position: absolute;\n    z-index: 1;\n    right: 0;\n    top: 27px;\n    text-align: center !important;\n    padding: 3px 5px 13px 5px;\n    width: 54px;\n    height: 15.57px;\n    font-size: 9px;\n    margin-top: -9px !important; }\n  .products-footer ion-buttons[left] {\n  padding-left: 10px; }\n  .products-footer ion-buttons[left] small {\n    display: block;\n    margin-bottom: -5px;\n    color: white; }\n  .products-footer ion-buttons[left] .bar-button {\n    padding-left: 0;\n    margin-left: 0;\n    margin-bottom: -10px; }\n  .products-footer ion-buttons[left] .bar-button .icon {\n      margin-left: 10px; }\n  .products-footer ion-buttons {\n  color: white; }\n  .products-footer ion-buttons small {\n    padding-left: 7px;\n    padding-top: 8px; }\n  .products-footer ion-buttons .bar-button-menutoggle {\n    display: inline-block; }\n  .products-footer .as-btn {\n  --color: white;\n  height: 28px; }\n  .para-price {\n  font-family: \"roboto-regular\";\n  font-size: 14px !important; }\n  .name-para {\n  font-family: \"roboto-regular\" !important;\n  font-weight: 600 !important; }\n  ion-action-sheet .action-sheet-group.sc-ion-action-sheet-md {\n  background: white; }\n  .cart-badge {\n  font-size: 27px !important; }\n  .back-icon {\n  font-size: 16px !important; }\n  .price-heading {\n  margin-top: 10px !important;\n  font-size: 20px !important;\n  padding-left: 10px !important; }\n  .ion-color-light {\n  --ion-color-base: #021841 !important; }\n  .CatFilter {\n  text-align: left;\n  margin-top: 5px;\n  margin-bottom: 25px;\n  color: black;\n  font-size: 14px;\n  font-family: 'roboto-bold';\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksY0FBUSxFQUFBO0VBSFo7SUFNUSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVksRUFBQTtFQVJwQjtFQWFJLG1CQUFhLEVBQUE7RUFiakI7RUFnQkksbUJBQW1CLEVBQUE7RUFoQnZCO0lBa0JNLDRCQUFrQjtJQUdsQixlQUFlO0lBQ2YsZ0JBQVE7SUFDUiwwQkFBMEIsRUFBQTtFQUloQztFQUVJLGNBQVEsRUFBQTtFQUZaO0VBS0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0VBUm5CO0VBV0ksaUJBQWlCLEVBQUE7RUFYckI7RUFjSSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFnQixFQUFBO0VBaEJwQjtJQXlCTSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVksRUFBQTtFQTNCbEI7TUFtQlEsa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixZQUFZO01BQ1osV0FBVyxFQUFBO0VBdEJuQjtJQWlDTSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVyxFQUFBO0VBckNqQjtJQXdDTSxtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7RUF6Q3ZCO01BMkNRLGVBQWU7TUFDZixZQUFZLEVBQUE7RUE1Q3BCO0lBaURNLGlCQUFpQjtJQUVqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsTUFBTTtJQUdOLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBRW5CLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYyxFQUFBO0VBbkVwQjtJQXNFTSxvQ0FBb0M7SUFFcEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFFVCw2QkFBNkI7SUFDN0IseUJBQXlCO0lBRXpCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztJQUNkLDJCQUEyQixFQUFBO0VBSWpDO0VBRUksa0JBQWtCLEVBQUE7RUFGdEI7SUFJTSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTtFQU5sQjtJQVNNLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0JBQW9CLEVBQUE7RUFYMUI7TUFhUSxpQkFBaUIsRUFBQTtFQWJ6QjtFQWtCSSxZQUFZLEVBQUE7RUFsQmhCO0lBcUJNLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQXRCdEI7SUF5Qk0scUJBQXFCLEVBQUE7RUF6QjNCO0VBNkJJLGNBQVE7RUFDUixZQUFZLEVBQUE7RUFHaEI7RUFDRSw2QkFBNkI7RUFDN0IsMEJBQTBCLEVBQUE7RUFFNUI7RUFDRSx3Q0FBd0M7RUFDeEMsMkJBQTJCLEVBQUE7RUFHN0I7RUFFSSxpQkFBaUIsRUFBQTtFQUdyQjtFQUNFLDBCQUEwQixFQUFBO0VBRTVCO0VBQ0UsMEJBQTBCLEVBQUE7RUFFNUI7RUFDRSwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLDZCQUE2QixFQUFBO0VBRy9CO0VBQ0Usb0NBQWlCLEVBQUE7RUFJbkI7RUFDRSxnQkFBZ0I7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0cy1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICBpb24tYnV0dG9ucyB7XG4gICAgICBpb24tYmFkZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGJvdHRvbTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnNlZ21lbnRUb29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIGlvbi1zZWdtZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAtLWluZGljYXRvci1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgLy8gLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogYmxhY2s7XG4gICAgICAvLyAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgLS1jb2xvcjogIzcwNzA3MDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgfVxufVxuLnByb2R1Y3RzLWNvbnRlbnQge1xuICBpb24tYnV0dG9uIHtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBpb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG4gIGlvbi1yb3cge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG4gIGlvbi1pdGVtIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAjZWVlO1xuICAgIGJvcmRlci10b3A6IHNvbGlkICNlZWU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgLmJhZGdlLWltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgIH1cblxuICAgICAgbWFyZ2luOiAwO1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIC8vIGltZ3tcbiAgICAgIC8vIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICAgICAgLy8gfVxuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICBib3R0b206IDJweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNhbGUge1xuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAvLyBwYWRkaW5nOiAycHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICAvLyBmb250LXNpemU6IDEycHg7XG5cbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgd2lkdGg6IDM0LjEycHg7XG4gICAgICBoZWlnaHQ6IDE0Ljg4cHg7XG4gICAgICBmb250LXNpemU6IDlweDtcbiAgICB9XG4gICAgLmZlYXR1cmVkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIC8vIHBhZGRpbmc6IDJweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogMjdweDtcbiAgICAgIC8vIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogM3B4IDVweCAxM3B4IDVweDtcbiAgICAgIC8vIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIHdpZHRoOiA1NHB4O1xuICAgICAgaGVpZ2h0OiAxNS41N3B4O1xuICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtOXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4ucHJvZHVjdHMtZm9vdGVyIHtcbiAgaW9uLWJ1dHRvbnNbbGVmdF0ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBzbWFsbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5iYXItYnV0dG9uIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gICAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24tYnV0dG9ucyB7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgc21hbGwge1xuICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIH1cbiAgICAuYmFyLWJ1dHRvbi1tZW51dG9nZ2xlIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gIH1cbiAgLmFzLWJ0biB7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICB9XG59XG4ucGFyYS1wcmljZSB7XG4gIGZvbnQtZmFtaWx5OiBcInJvYm90by1yZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuLm5hbWUtcGFyYSB7XG4gIGZvbnQtZmFtaWx5OiBcInJvYm90by1yZWd1bGFyXCIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG5pb24tYWN0aW9uLXNoZWV0IHtcbiAgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxufVxuLmNhcnQtYmFkZ2Uge1xuICBmb250LXNpemU6IDI3cHggIWltcG9ydGFudDtcbn1cbi5iYWNrLWljb24ge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cbi5wcmljZS1oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItbGlnaHR7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMwMjE4NDEgIWltcG9ydGFudDtcbn1cblxuXG4uQ2F0RmlsdGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWJvbGQnO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/products/products.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/yesgenie/Pages/products/products.page.ts ***!
  \**********************************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/yesgenie/Pages/services/custom-theme.service.ts");
/* harmony import */ var _yes_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search/search.page */ "./src/app/yesgenie/Pages/search/search.page.ts");









// import { Content } from '@angular/compiler/src/render3/r3_ast';
var ProductsPage = /** @class */ (function () {
    function ProductsPage(router, services, menuCtrl, shared, route, modalCtrl, config, toastController, actionSheetController, loadingController, nav, service, applicationRef) {
        this.router = router;
        this.services = services;
        this.menuCtrl = menuCtrl;
        this.shared = shared;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.toastController = toastController;
        this.actionSheetController = actionSheetController;
        this.loadingController = loadingController;
        this.nav = nav;
        this.service = service;
        this.applicationRef = applicationRef;
        this.customfieldoption = new Array();
        this.MessShow = '';
        this.maxAmount = 1000000;
        this.minAmount = 0;
        this.structure = { lower: 0, upper: this.maxAmount };
        // @ViewChild(Content,{static:false}) content: Content;
        this.itemColor = [];
        this.iconColorVar = "";
        this.side = "right";
        // @Input('type') type;//product data
        this.products = [1, 1, 1, 1];
        this.scrollSegments = "all"; //scrollable segment
        this.productView = 'grid';
        this.type = "";
        this.sortOrder = 'Newest';
        this.sortArray = ['Newest', 'A - Z', 'Z - A'];
    }
    ProductsPage.prototype.changeLayout = function () {
        if (this.productView == 'list')
            this.productView = "grid";
        else
            this.productView = "list";
    };
    // async onIconClick(i) {
    //   if (i.fav == false) {
    //     i.fav = true;
    //     const toast = await this.toastController.create({
    //       message: 'Added To Wish List!',
    //       duration: 2000
    //     });
    //     toast.present();
    //   }
    //   else {
    //     i.fav = false;
    //     const toast = await this.toastController.create({
    //       message: 'Removed From Wish List!',
    //       duration: 2000
    //     });
    //     toast.present();
    //   }
    // }
    ProductsPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(true, 'Menu2');
    };
    ProductsPage.prototype.resetFilters = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Newest',
                            cssClass: 'action-sheet',
                            buttons: [{
                                    text: 'A - Z',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Z - A',
                                    handler: function () {
                                    }
                                }, {
                                    cssClass: 'as-cancel-color',
                                    text: 'Cancel',
                                    role: 'destructive',
                                    handler: function () {
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsPage.prototype.refresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            spinner: 'lines',
                            duration: 2000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductsPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    ProductsPage.prototype.openRightMenu = function () {
        this.menuCtrl.enable(true, 'bbShop');
    };
    ProductsPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle("bbShop");
    };
    ProductsPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true, 'Menu2');
        this.menuCtrl.enable(false, 'bbShop');
    };
    ProductsPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    ProductsPage.prototype.ionViewWillEnter = function () {
        this.Id = this.route.snapshot.paramMap.get('id');
        console.log(JSON.parse(this.Id));
        this.SubCatName = this.route.snapshot.paramMap.get('name');
        //  this.subcategory();
        this.subcategory(this.Id);
        this.Getcustomfields();
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu2');
        this.menuCtrl.enable(false, 'Menu3');
    };
    ProductsPage.prototype.subcategory = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            spinner: 'lines',
                            duration: 4000,
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        data = {
                            id: id
                        };
                        this.services.subcat(data).subscribe(function (result) {
                            console.log(result);
                            _this.responseData = result.response;
                            //  console.log(result);
                            if (_this.responseData.length == 0) {
                                _this.productbysubcategory(_this.Id);
                                loading.dismiss();
                            }
                            else {
                                _this.proid = result.response[0].category_id;
                                _this.product(_this.proid);
                                if (_this.responseData.Status === 0) {
                                }
                                else {
                                    console.log(_this.responseData);
                                    loading.dismiss();
                                }
                            }
                        }, function (error) {
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsPage.prototype.product = function (id1) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, data1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            spinner: 'lines',
                            duration: 4000,
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        data1 = {
                            id1: id1
                        };
                        this.catproid = id1;
                        this.services.product(data1).subscribe(function (result) {
                            console.log(result);
                            if (result == null) {
                                _this.ProductResponse = result;
                                loading.dismiss();
                                setTimeout(function () {
                                    _this.MessShow = "No products found!";
                                }, 4000);
                            }
                            else {
                                _this.ProductResponse = result.response.product_data;
                                console.log(_this.ProductResponse);
                                setTimeout(function () {
                                    _this.MessShow = "No products found!";
                                }, 4000);
                                _this.applicationRef.tick();
                                //  this.toggleMenu();
                                loading.dismiss();
                            }
                        }, function (error) {
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsPage.prototype.productbysubcategory = function (id5) {
        var _this = this;
        var data5 = {
            id5: id5
        };
        this.services.productbysubcategory(data5).subscribe(function (result) {
            console.log(result);
            if (result.response == null || '') {
                _this.productbycat(_this.Id);
            }
            else {
                _this.ProductResponse = result.response.product_data;
                _this.productresvar = result.response.variations_price;
                console.log(_this.productresvar);
                setTimeout(function () {
                    _this.MessShow = "No products found!";
                }, 4000);
                if (_this.ProductResponse.status == 0) {
                }
                else {
                    console.log(_this.ProductResponse);
                    setTimeout(function () {
                        _this.MessShow = "No products found!";
                    }, 4000);
                }
            }
        }, function (error) {
        });
    };
    ProductsPage.prototype.productbycat = function (id6) {
        var _this = this;
        var data6 = {
            id6: id6
        };
        this.services.productbycat(data6).subscribe(function (result) {
            console.log(result);
            _this.ProductResponse = result.response.product_data;
            _this.productresvar = result.response.variations_price;
            console.log(_this.productresvar);
            setTimeout(function () {
                _this.MessShow = "No products found!";
            }, 4000);
            if (_this.ProductResponse.status == 0) {
            }
            else {
                console.log(_this.ProductResponse);
                setTimeout(function () {
                    _this.MessShow = "No products found!";
                }, 4000);
            }
        }, function (error) {
        });
    };
    ProductsPage.prototype.opensearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _search_search_page__WEBPACK_IMPORTED_MODULE_8__["SearchPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductsPage.prototype.FilterProduct = function () {
        var _this = this;
        var userData = 'third_category_id=' + this.catproid + '&min-price=' + this.minPrice * 100 + '&max-price=' + this.maxPrice * 100;
        this.services.Filterproduct(userData).subscribe(function (result) {
            _this.ProductResponse = result.response.product;
            console.log(result);
            if (_this.ProductResponse.status == 0) {
            }
            else {
                console.log(_this.ProductResponse);
                _this.applicationRef.tick();
                _this.toggleMenu();
                //  this.toggleMenu();
            }
        }, function (error) {
        });
    };
    ProductsPage.prototype.Getcustomfieldoptions = function (id) {
        var _this = this;
        var userData = 'field_id=' + id;
        this.services.Getcustomfieldoptions(userData).subscribe(function (result) {
            console.log(result);
            _this.ResponseFieldOption = result.response.custom_field_options;
            _this.customfieldoption.push(_this.ResponseFieldOption);
            console.log(_this.customfieldoption);
            if (_this.ResponseFieldOption.status == 0) {
            }
            else {
                console.log(_this.ResponseFieldOption);
                _this.applicationRef.tick();
                //  this.toggleMenu();
            }
        }, function (error) {
        });
    };
    ProductsPage.prototype.Getcustomfields = function () {
        var _this = this;
        var userData = 'category_id=' + this.Id;
        this.services.Getcustomfields(userData).subscribe(function (result) {
            console.log(result);
            _this.ResponseFields = result.response.custom_filters;
            for (var _i = 0, _a = _this.ResponseFields; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.Getcustomfieldoptions(value.id);
            }
            if (_this.ResponseFields.status == 0) {
            }
            else {
                console.log(_this.ResponseFields);
                _this.applicationRef.tick();
                //  this.toggleMenu();
            }
        }, function (error) {
        });
    };
    ProductsPage.prototype.Getcustomfieldproduct = function (id) {
        var _this = this;
        var userData = 'field_id=' + id;
        this.services.Getcustomfieldproduct(userData).subscribe(function (result) {
            _this.ProductResponse = result.response.custom_field_options;
            if (_this.ProductResponse.Status === 0) {
            }
            else {
                console.log(_this.ProductResponse);
                _this.applicationRef.tick();
                //  this.toggleMenu();
            }
        }, function (error) {
        });
    };
    ProductsPage.prototype.goToProductDetail = function (id, catid, subcatid, title) {
        this.router.navigate(['bs-product-detail', { id: id, catid: catid, subcatid: subcatid, title: title }]);
    };
    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.page.html */ "./src/app/yesgenie/Pages/products/products.page.html"),
            styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/yesgenie/Pages/products/products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _yes_service_service__WEBPACK_IMPORTED_MODULE_6__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_5__["CustomThemeService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-products-products-module.js.map