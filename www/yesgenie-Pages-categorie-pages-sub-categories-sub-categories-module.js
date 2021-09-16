(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-categorie-pages-sub-categories-sub-categories-module"],{

/***/ "./src/app/yesgenie/Pages/categorie-pages/sub-categories/sub-categories.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/categorie-pages/sub-categories/sub-categories.module.ts ***!
  \****************************************************************************************/
/*! exports provided: SubCategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoriesPageModule", function() { return SubCategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _sub_categories_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sub-categories.page */ "./src/app/yesgenie/Pages/categorie-pages/sub-categories/sub-categories.page.ts");








var routes = [
    {
        path: '',
        component: _sub_categories_page__WEBPACK_IMPORTED_MODULE_7__["SubCategoriesPage"]
    }
];
var SubCategoriesPageModule = /** @class */ (function () {
    function SubCategoriesPageModule() {
    }
    SubCategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]
            ],
            declarations: [_sub_categories_page__WEBPACK_IMPORTED_MODULE_7__["SubCategoriesPage"]]
        })
    ], SubCategoriesPageModule);
    return SubCategoriesPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/categorie-pages/sub-categories/sub-categories.page.html":
/*!****************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/categorie-pages/sub-categories/sub-categories.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" routerLink=\"/tabs/bs-categories\" routerDirection=\"backward\">\n        <ion-icon slot=\"icon-only\" src='assets/back.svg'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{SubCatName}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"opensearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge>{{services.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <ion-col *ngFor=\"let product of responseData\" size=\"6\" no-padding>\n        <ion-card class=\"animated flipInX delay-900ms\" (click)=\"onClickDetails(product.category_id)\">\n          <ion-avatar>\n              <img src=\"https://www.yesgenie.com/{{product.image_1}}\" />\n            </ion-avatar>\n          <ion-text>\n            <h6>{{product.name}}</h6>\n            <!-- <p>{{product.count}} {{'Products'| translate }}</p>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n  <!-- <ion-button routerLink=\"/bs-products\" routerDirection=\"forward\" fill=\"clear\" color=\"dark\"> View all\n    <ion-icon name=\"arrow-dropright\"></ion-icon>\n  </ion-button> -->\n<!-- </ion-content> -->\n\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\" (pinch)=\"pinchEvent($event)\">\n  <ion-item-group *ngFor=\"let product of responseData\">\n    <ion-item-divider lines=\"none\" (click)=\"onClickDetails(product.category_id, product.name)\">\n      <ion-avatar slot=\"end\">\n        <img src=\"https://www.yesgenie.com/{{product.image_1}}\" />\n      </ion-avatar>\n      <ion-label padding>\n        <ion-text>\n          <h2>{{product.name}}</h2>\n        </ion-text>\n      </ion-label>\n    </ion-item-divider>\n    <ion-item *ngFor=\"let subProduct of product.products\" routerLink=\"/bs-products\" routerDirection=\"forward\">\n      <ion-avatar slot=\"end\">\n        <img src=\"{{subProduct.img}}\" />\n      </ion-avatar>\n      <ion-label padding>\n        <ion-text>\n          <h2>{{subProduct.name|translate}}</h2>\n          <p>{{subProduct.count}} {{'Products'| translate }}</p>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n  </ion-item-group>\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/categorie-pages/sub-categories/sub-categories.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/categorie-pages/sub-categories/sub-categories.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content p {\n  font-size: 12px; }\n  ion-content ion-item-divider {\n  --background: #fafafa; }\n  ion-content ion-item-divider ion-avatar {\n    margin-right: 16px; }\n  ion-content ion-item-divider ion-label {\n    padding-bottom: 0;\n    padding-top: 0;\n    margin-top: 5px;\n    margin-bottom: 6px; }\n  ion-content ion-item-divider ion-label h2 {\n      font-size: 18px;\n      color: black; }\n  ion-content ion-item ion-label {\n  padding-bottom: 0;\n  padding-top: 0; }\n  ion-content ion-item ion-label h2 {\n    font-family: 18px; }\n  ion-content ion-item ion-label p {\n    font-family: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9jYXRlZ29yaWUtcGFnZXMvc3ViLWNhdGVnb3JpZXMvc3ViLWNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsYUFBUSxFQUFBO0VBSGhCO0lBS1ksZUFBZSxFQUFBO0VBTDNCO0lBU2dCLFlBQVksRUFBQTtFQVQ1QjtJQWNnQixlQUFlLEVBQUE7RUFkL0I7SUFpQmdCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWSxFQUFBO0VBSzVCO0VBRVEsZUFBZSxFQUFBO0VBRnZCO0VBS1EscUJBQWEsRUFBQTtFQUxyQjtJQU9ZLGtCQUFrQixFQUFBO0VBUDlCO0lBVVksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7RUFiOUI7TUFlZ0IsZUFBZTtNQUNmLFlBQVksRUFBQTtFQWhCNUI7RUFzQlksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTtFQXZCMUI7SUF5QmdCLGlCQUFpQixFQUFBO0VBekJqQztJQTRCZ0IsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9jYXRlZ29yaWUtcGFnZXMvc3ViLWNhdGVnb3JpZXMvc3ViLWNhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgICAgICAtLWNvbG9yOndoaXRlO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGl0bGV7XG4gICAgICAgICAgICBpb24taW1ne1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uc3tcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1iYWRnZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tY29udGVudHtcbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIGlvbi1pdGVtLWRpdmlkZXJ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgaW9uLWF2YXRhcntcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/categorie-pages/sub-categories/sub-categories.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/categorie-pages/sub-categories/sub-categories.page.ts ***!
  \**************************************************************************************/
/*! exports provided: SubCategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoriesPage", function() { return SubCategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _yes_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../search/search.page */ "./src/app/yesgenie/Pages/search/search.page.ts");






var SubCategoriesPage = /** @class */ (function () {
    function SubCategoriesPage(modalCtrl, router, route, menuCtrl, nav, services) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.route = route;
        this.menuCtrl = menuCtrl;
        this.nav = nav;
        this.services = services;
        this.items = [
            { name: "Shirts", img: "assets/images/category-images/shirt.jpg", count: "12" },
            { name: "Top", img: "assets/images/category-images/top.jpg", count: "12" },
            { name: "Bottom", img: "assets/images/category-images/bottom.jpg", count: "12" },
            { name: "Winter", img: "assets/images/category-images/winter.jpg", count: "15" },
            { name: "Shoes", img: "assets/images/category-images/shoes.jpg", count: "12" },
            { name: "Watches", img: "assets/images/category-images/watches.jpg", count: "12" },
        ];
    }
    SubCategoriesPage.prototype.ngOnInit = function () {
    };
    SubCategoriesPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    SubCategoriesPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    SubCategoriesPage.prototype.ionViewWillEnter = function () {
        this.Id = this.route.snapshot.paramMap.get('id');
        console.log(JSON.parse(this.Id));
        this.SubCatName = this.route.snapshot.paramMap.get('name');
        //  this.subcategory();
        this.subcategory(this.Id);
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    };
    SubCategoriesPage.prototype.subcategory = function (id) {
        var _this = this;
        var data = {
            id: id
        };
        this.services.subcat(data).subscribe(function (result) {
            if (result.response == '' || null) {
                _this.GoToProdustsPage(_this.Id, _this.SubCatName);
            }
            else {
                _this.responseData = result.response;
            }
        }, function (error) {
        });
    };
    SubCategoriesPage.prototype.onClickDetails = function (id, name) {
        this.router.navigate(['/bs-products', { id: id, name: name }]);
    };
    SubCategoriesPage.prototype.GoToProdustsPage = function (id, name) {
        this.router.navigate(['/bs-products', { id: id, name: name }]);
    };
    SubCategoriesPage.prototype.opensearch = function () {
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
    SubCategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sub-categories',
            template: __webpack_require__(/*! ./sub-categories.page.html */ "./src/app/yesgenie/Pages/categorie-pages/sub-categories/sub-categories.page.html"),
            styles: [__webpack_require__(/*! ./sub-categories.page.scss */ "./src/app/yesgenie/Pages/categorie-pages/sub-categories/sub-categories.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _yes_service_service__WEBPACK_IMPORTED_MODULE_3__["YesServiceService"]])
    ], SubCategoriesPage);
    return SubCategoriesPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-categorie-pages-sub-categories-sub-categories-module.js.map