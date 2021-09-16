(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wish-list-wish-list-module"],{

/***/ "./src/app/yesgenie/Pages/wish-list/wish-list.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/yesgenie/Pages/wish-list/wish-list.module.ts ***!
  \**************************************************************/
/*! exports provided: WishListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListPageModule", function() { return WishListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/share/share.module */ "./src/app/yesgenie/components/share/share.module.ts");
/* harmony import */ var _wish_list_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wish-list.page */ "./src/app/yesgenie/Pages/wish-list/wish-list.page.ts");









var routes = [
    {
        path: '',
        component: _wish_list_page__WEBPACK_IMPORTED_MODULE_8__["WishListPage"]
    }
];
var WishListPageModule = /** @class */ (function () {
    function WishListPageModule() {
    }
    WishListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _components_share_share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_wish_list_page__WEBPACK_IMPORTED_MODULE_8__["WishListPage"]]
        })
    ], WishListPageModule);
    return WishListPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/wish-list/wish-list.page.html":
/*!**************************************************************!*\
  !*** ./src/app/yesgenie/Pages/wish-list/wish-list.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title class=\"ecom-title\">\n      Wishlist\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"opensearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge>{{services.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <!-- whan data found -->\n  <ion-grid class=\"data-grid\" no-padding *ngIf=\"gridVisiable\">\n    <ion-row no-padding>\n      <ion-col *ngFor=\"let p of services.wishListProducts\" size=\"6\" no-padding>\n        <app-product [data]=\"p\" [type]=\"'wishList'\"></app-product>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- when no data found -->\n  <ion-grid no-padding *ngIf=\"services.wishListProducts.length == 0\">\n    <ion-row no-padding>\n      <ion-col size=\"12\" no-padding>\n        <ion-icon name=\"heart\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding>\n      <ion-col size=\"12\" no-padding>\n        <h4>{{'Your Wishlist is empty'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding>\n      <ion-col size=\"12\" no-padding>\n        <p>{{'Continue shopping'|translate}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding>\n      <ion-col size=\"12\" no-padding>\n        <ion-button (click)=\"openProductsPage()\">{{'Explore'|translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/wish-list/wish-list.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/yesgenie/Pages/wish-list/wish-list.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 30px;\n    margin-left: 45px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 5px;\n    bottom: 14px; }\n  ion-content p {\n  font-size: 14px !important;\n  font-family: 'roboto-medium' !important;\n  margin-bottom: 10px; }\n  ion-content ion-grid {\n  margin-top: 50%; }\n  ion-content ion-grid ion-row ion-col {\n    text-align: center; }\n  ion-content ion-grid ion-row ion-col ion-icon {\n      zoom: 3.9;\n      color: lightgrey; }\n  ion-content ion-grid ion-row ion-col ion-button {\n      --color: white;\n      --border-radius: 0px;\n      height: 30px; }\n  ion-content ion-grid ion-row ion-col h4 {\n      font-size: 20px;\n      font-family: 'roboto-regular';\n      font-weight: bold;\n      margin-top: 2px; }\n  ion-content .data-grid {\n  margin-right: 10px !important;\n  margin-top: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy93aXNoLWxpc3Qvd2lzaC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGFBQVEsRUFBQTtFQUhoQjtJQUtZLGVBQWUsRUFBQTtFQUwzQjtJQVNnQixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUFWakM7SUFlZ0IsZUFBZSxFQUFBO0VBZi9CO0lBa0JnQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVksRUFBQTtFQUs1QjtFQUVRLDBCQUEwQjtFQUMxQix1Q0FBdUM7RUFDdkMsbUJBQW1CLEVBQUE7RUFKM0I7RUFPUSxlQUFlLEVBQUE7RUFQdkI7SUFVZ0Isa0JBQWtCLEVBQUE7RUFWbEM7TUFZb0IsU0FBUTtNQUNSLGdCQUFlLEVBQUE7RUFibkM7TUFpQm9CLGNBQVE7TUFDUixvQkFBZ0I7TUFDaEIsWUFBWSxFQUFBO0VBbkJoQztNQXNCb0IsZUFBZTtNQUNmLDZCQUE2QjtNQUM3QixpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0VBekJuQztFQStCWSw2QkFBNkI7RUFDN0Isd0JBQ1IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL3dpc2gtbGlzdC93aXNoLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgICAgICAtLWNvbG9yOndoaXRlO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGl0bGV7XG4gICAgICAgICAgICBpb24taW1ne1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uc3tcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1iYWRnZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tY29udGVudHtcbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbWVkaXVtJyAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICBpb24tZ3JpZHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTAlO1xuICAgICAgICBpb24tcm93e1xuICAgICAgICAgICAgaW9uLWNvbHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgICAgIHpvb206My45O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjpsaWdodGdyZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICAgICAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRhdGEtZ3JpZHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50IFxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/wish-list/wish-list.page.ts":
/*!************************************************************!*\
  !*** ./src/app/yesgenie/Pages/wish-list/wish-list.page.ts ***!
  \************************************************************/
/*! exports provided: WishListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListPage", function() { return WishListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/search.page */ "./src/app/yesgenie/Pages/search/search.page.ts");






var WishListPage = /** @class */ (function () {
    // public products: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    function WishListPage(modalCtrl, menuCtrl, renderer, services, nav, loadingController, storage) {
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.renderer = renderer;
        this.services = services;
        this.nav = nav;
        this.loadingController = loadingController;
        this.storage = storage;
        this.count = 5;
        this.gridVisiable = true;
        // setTimeout(() => {
        //   this.products = [
        //     { p_id: '0', badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "12.23", dPrice: "20.00", fav: false, res: true },
        //     { p_id: '1', badge: true, sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "15.64", dPrice: "18.00", fav: false, res: true },
        //     { p_id: '2', badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.14", dPrice: "15.00", fav: false, res: true },
        //     { p_id: '3', badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "12.23", dPrice: "19.00", fav: false, res: true },
        //     { p_id: '4', badge: true, sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "14.64", dPrice: "20.00", fav: false, res: true },
        //     { p_id: '5', badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "14.64", dPrice: "21.00", fav: false, res: true },
        //   ]
        // }, 4000);
        //  this.gService.getTsetDangerBtnValheme().subs
        // this.count--;
        // if (this.count == 0) {
        //   this.gridVisiable = "false";
        // }
    }
    WishListPage.prototype.openProductsPage = function () {
        this.nav.navigateForward("tabs/bs-home");
    };
    WishListPage.prototype.ngOnInit = function () {
    };
    WishListPage.prototype.refreshPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            spinner: 'crescent',
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
    WishListPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    WishListPage.prototype.goToSearchPage = function () {
        this.nav.navigateForward("bs-search");
    };
    WishListPage.prototype.gridVisiableFun = function (i) {
    };
    WishListPage.prototype.removeProduct = function (id) {
        var _this = this;
        this.products.forEach(function (value, index) {
            if (value.p_id == id) {
                _this.products.splice(index, 1);
            }
        });
        if (this.products.length == 0) {
            this.gridVisiable = false;
        }
    };
    WishListPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    WishListPage.prototype.ionViewWillEnter = function () {
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    };
    WishListPage.prototype.opensearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _search_search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"]
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
    ], WishListPage.prototype, "content", void 0);
    WishListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wish-list',
            template: __webpack_require__(/*! ./wish-list.page.html */ "./src/app/yesgenie/Pages/wish-list/wish-list.page.html"),
            styles: [__webpack_require__(/*! ./wish-list.page.scss */ "./src/app/yesgenie/Pages/wish-list/wish-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_4__["YesServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], WishListPage);
    return WishListPage;
}());



/***/ })

}]);
//# sourceMappingURL=wish-list-wish-list-module.js.map