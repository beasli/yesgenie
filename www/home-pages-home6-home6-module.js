(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home6-home6-module"],{

/***/ "./src/app/yesgenie/Pages/home-pages/home6/home6.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/yesgenie/Pages/home-pages/home6/home6.module.ts ***!
  \*****************************************************************/
/*! exports provided: Home6PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home6PageModule", function() { return Home6PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/share/share.module */ "./src/app/yesgenie/components/share/share.module.ts");
/* harmony import */ var _home6_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home6.page */ "./src/app/yesgenie/Pages/home-pages/home6/home6.page.ts");









var routes = [
    {
        path: '',
        component: _home6_page__WEBPACK_IMPORTED_MODULE_8__["Home6Page"]
    }
];
var Home6PageModule = /** @class */ (function () {
    function Home6PageModule() {
    }
    Home6PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _components_share_share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"]
            ],
            declarations: [_home6_page__WEBPACK_IMPORTED_MODULE_8__["Home6Page"]]
        })
    ], Home6PageModule);
    return Home6PageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/home-pages/home6/home6.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/yesgenie/Pages/home-pages/home6/home6.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      <ion-img src=\"assets/logo.png\" alt=\"logo\"></ion-img>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"opensearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"goNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n\n        <!-- <ion-img style=\"width: 26px; height: 26px;\" src=\"assets/tab-icon/notification.png\"></ion-img> -->\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\" class=\"content\">\n    <ion-slides [options]=\"slideOptsOne\">\n        <ion-slide *ngFor=\"let p of responseData\">\n            <ion-img class=\"single-img\" [src]=\"'https://www.yesgenie.com/' + p.image\" ></ion-img>\n    \n        </ion-slide>\n      </ion-slides>\n  <!-- categories swipe slider -->\n  <ion-item lines=\"none\">\n    <ion-icon slot=\"start\" src=\"assets/custom-icon-tc-shop/category.svg\"></ion-icon>\n    <ion-label>\n      <p>{{'Categories' | translate }}</p>\n    </ion-label>\n    <ion-button routerLink=\"/bs-categories\" routerDirection=\"forward\" slot=\"end\" fill=\"clear\" > Shop More\n      <ion-icon class=\"icon-shop-more\" name=\"arrow-dropright\"></ion-icon>\n    </ion-button>\n  </ion-item>\n  <!-- categories component -->\n  <app-categories [type]=\"'withName'\"></app-categories>\n\n  <ion-item style=\"margin-top: 15px;\" class=\"ion-no-padding animate-item\" (click)=\"openCategories('510/Edible Oil')\">\n    <ion-img src=\"assets/7.jpg\"></ion-img>\n  </ion-item>\n\n  <!-- On Sale Header -->\n  <ion-item lines=\"none\" class=\"sale-item\">\n    <ion-icon slot=\"start\" src=\"assets/custom-icon-tc-shop/dollar-ribbon.svg\"></ion-icon>\n    <ion-label>\n      <p>Latest Product</p>\n    </ion-label>\n    <ion-button slot=\"end\" fill=\"clear\" routerLink=\"/bs-categories\" routerDirection=\"forward\" >Shop More\n      <ion-icon class=\"icon-shop-more\" name=\"arrow-dropright\"></ion-icon>\n    </ion-button>\n  </ion-item>\n\n  <ion-slides [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of responseDataLatPro\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-slide>\n    \n  </ion-slides>\n\n\n  <ion-item style=\"margin-top: 15px;\" class=\"ion-no-padding animate-item\" (click)=\"openCategories()\">\n    <ion-img src=\"assets/6.jpg\"></ion-img>\n  </ion-item>\n\n  <div *ngIf=\"latitude != null || latitude == 'undefined'\">\n  <ion-item lines=\"none\" class=\"sale-item\">\n    <ion-icon slot=\"start\" src=\"assets/custom-icon-tc-shop/dollar-ribbon.svg\"></ion-icon>\n    <ion-label>\n      <p>Nearest Product</p>\n    </ion-label>\n    <ion-button slot=\"end\" fill=\"clear\" routerLink=\"/tabs/nearest-product\" routerDirection=\"forward\" >See More\n      <ion-icon class=\"icon-shop-more\" name=\"arrow-dropright\"></ion-icon>\n    </ion-button>\n  </ion-item>\n\n  <ion-slides [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of nearestProduct\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-slide>\n    \n  </ion-slides>\n</div>\n\n\n<ion-item *ngIf=\"latitude == null || latitude == 'undefined'\" style=\"margin-top: 15px;\" class=\"ion-no-padding animate-item\" (click)=\"getGeolocation()\">\n  <ion-img src=\"assets/nearproduct.jpg\"></ion-img>\n</ion-item>\n\n\n\n  <ion-item style=\"margin-top: 15px;\" class=\"ion-no-padding animate-item\" (click)=\"openCategories()\">\n    <ion-img src=\"assets/7.jpg\"></ion-img>\n  </ion-item>\n\n\n  <ion-item lines=\"none\">\n    <ion-icon slot=\"start\" src=\"assets/custom-icon-tc-shop/category.svg\"></ion-icon>\n    <ion-label>\n      <p>Latest Blog</p>\n    </ion-label>\n    <!-- <ion-button routerLink=\"/bs-products\" routerDirection=\"forward\" slot=\"end\" fill=\"clear\" > Shop More\n      <ion-icon class=\"icon-shop-more\" name=\"arrow-dropright\"></ion-icon>\n    </ion-button> -->\n  </ion-item>\n\n\n  <ion-slides class=\"animated bounceInRight delay-900ms slide-h6\" [options]=\"slideOptsOne\">\n    <ion-slide style=\"width: 100%;\" *ngFor=\"let p of responseDatablog\" (click)=\"onClickBlog(p.id)\">\n      <!-- For Real Products -->\n      <ion-card style=\"padding: 10px 30px 0px 30px;\">\n        <ion-img class=\"img-home-six\" src=\"https://www.yesgenie.com/{{p.image_small}}\"></ion-img>\n        <ion-text>\n          <h6 class=\"name\">{{p.title}}</h6>\n        </ion-text>\n       </ion-card>\n\n      <!-- <ion-item (click)=\"openCategories('510/Edible Oil')\">\n        <ion-img src=\"https://www.yesgenie.com/{{p.image_small}}\"></ion-img>\n      </ion-item> -->\n\n       <!-- <ion-text>\n          <h6 class=\"name\">{{p.title}}</h6> -->\n           <!-- <p class=\"count\">{{p.count}} Products</p> -->\n        <!-- </ion-text> -->\n    \n    </ion-slide>\n  </ion-slides>\n  <!-- On Sale Products swipe slider -->\n  <!-- <ion-slides class=\"animated bounceInRight delay-900ms\" [options]=\"sliderConfig\" dir=\"{{shared.dir}}\">\n    <ion-slide *ngFor=\"let p of responseDataLatPro\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-slide>\n  </ion-slides> -->\n  <!-- banner image -->\n \n  <!-- All Products Header -->\n  <!-- <ion-item lines=\"none\">\n    <ion-icon slot=\"start\" src=\"assets/custom-icon-tc-shop/tabs.svg\"></ion-icon>\n    <ion-label>\n      <p>{{'All Products' | translate }}</p>\n    </ion-label>\n    <ion-button routerLink=\"/bs-products\" routerDirection=\"forward\"  slot=\"end\" fill=\"clear\">Shop More\n      <ion-icon name=\"arrow-dropright\" class=\"icon-shop-more\"></ion-icon>\n    </ion-button>\n  </ion-item>\n  <!-- scrolling products component\n  <app-scrolling-featured-products [type]=\"'homeSix'\"></app-scrolling-featured-products>\n\n  <!-- fab button to move at top of page\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"scrollTopButton\">\n    <ion-fab-button size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon name=\"arrow-round-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n  \n\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/yesgenie/Pages/home-pages/home6/home6.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/yesgenie/Pages/home-pages/home6/home6.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .swiper-slide {\n  width: 40%; }\n\nion-content ion-item {\n  --inner-padding-end: 0;\n  --padding-start: 4px;\n  padding-top: 3px; }\n\nion-content ion-item ion-icon {\n    margin-right: 5px;\n    zoom: 0.9;\n    color: #51698f; }\n\nion-content ion-item ion-label p {\n    color: black;\n    font-size: 19px;\n    font-weight: 600; }\n\nion-content ion-item ion-button {\n    color: #557f5f; }\n\nion-content app-product {\n  width: 100%; }\n\nion-content ion-fab {\n  position: fixed; }\n\nion-content ion-fab ion-fab-button {\n    --background: #51698f; }\n\n.img-home-six {\n  height: auto;\n  width: 100%; }\n\n.name {\n  font-size: 17px !important;\n  color: black;\n  font-family: \"roboto-regular\" !important;\n  margin-top: 0 !important;\n  text-align: center;\n  padding: 15px 0px;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9ob21lLXBhZ2VzL2hvbWU2L2hvbWU2LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFVBQVUsRUFBQTs7QUFGbEI7RUFLWSxzQkFBb0I7RUFDcEIsb0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQVA1QjtJQVVnQixpQkFBaUI7SUFDakIsU0FBUztJQUNULGNBQWMsRUFBQTs7QUFaOUI7SUFnQm9CLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBbEJwQztJQXNCWSxjQUFjLEVBQUE7O0FBdEIxQjtFQTBCUSxXQUFXLEVBQUE7O0FBMUJuQjtFQTZCUSxlQUFlLEVBQUE7O0FBN0J2QjtJQStCWSxxQkFBYSxFQUFBOztBQUt6QjtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLHdDQUF3QztFQUN4Qyx3QkFBd0I7RUFDeEIsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixnQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvaG9tZS1wYWdlcy9ob21lNi9ob21lNi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAuc3dpcGVyLXNsaWRlIHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAtMTVweDtcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIHpvb206IDAuOTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzUxNjk4ZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgY29sb3I6ICM1NTdmNWY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXBwLXByb2R1Y3R7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBpb24tZmFie1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGlvbi1mYWItYnV0dG9ue1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNTE2OThmO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW1nLWhvbWUtc2l4e1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm5hbWV7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by1yZWd1bGFyXCIgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgcGFkZGluZzoxNXB4IDBweDtcbiAgICBmb250LXdlaWdodDo2MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/home-pages/home6/home6.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/yesgenie/Pages/home-pages/home6/home6.page.ts ***!
  \***************************************************************/
/*! exports provided: Home6Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home6Page", function() { return Home6Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/custom-theme.service */ "./src/app/yesgenie/Pages/services/custom-theme.service.ts");
/* harmony import */ var _yes_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../search/search.page */ "./src/app/yesgenie/Pages/search/search.page.ts");












var Home6Page = /** @class */ (function () {
    function Home6Page(modalCtrl, geolocation, nativeGeocoder, router, services, menuCtrl, http, service, config, shared, nav) {
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.router = router;
        this.services = services;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.service = service;
        this.config = config;
        this.shared = shared;
        this.nav = nav;
        this.scrollTopButton = false; //for scroll down fab 
        this.itemColor = [];
        this.iconColorVar = "";
        //for product slider after banner
        this.sliderConfig = {
            slidesPerView: 2.5,
            spaceBetween: 0,
        };
        this.saleItems = [1, 1, 1, 1, 1, 1];
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
    }
    Home6Page.prototype.ngOnInit = function () {
    };
    // For FAB Scroll
    Home6Page.prototype.onScroll = function (e) {
        if (e.detail.scrollTop >= 500) {
            this.scrollTopButton = true;
        }
        if (e.detail.scrollTop < 500) {
            this.scrollTopButton = false;
        }
    };
    // For Scroll To Top Content
    Home6Page.prototype.scrollToTop = function () {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
    };
    Home6Page.prototype.goToSearchPage = function () {
        this.nav.navigateForward("bs-search");
    };
    Home6Page.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    Home6Page.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    Home6Page.prototype.goNotification = function () {
        this.nav.navigateForward("bs-notifications");
    };
    Home6Page.prototype.ionViewWillEnter = function () {
        this.getGeolocation();
        this.slider();
        this.LatestPro();
        this.blog();
        this.category();
    };
    Home6Page.prototype.opensearch = function () {
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
    Home6Page.prototype.getGeolocation = function () {
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
    Home6Page.prototype.Searchnearest = function () {
        var _this = this;
        var userData = 'lat=' + this.latitude + '&long=' + this.longitude;
        console.log(userData);
        this.services.Searchnearest(userData).subscribe(function (result) {
            _this.nearestProduct = result.response;
            console.log(_this.nearestProduct);
        }, function (error) {
        });
    };
    Home6Page.prototype.slider = function () {
        var _this = this;
        this.services.slider().subscribe(function (result) {
            _this.responseData = result.response;
            if (_this.responseData.Status === 0) {
            }
            else {
                console.log(_this.responseData);
            }
        }, function (error) {
        });
    };
    Home6Page.prototype.category = function () {
        var _this = this;
        this.services.category().subscribe(function (result) {
            _this.responseDatacat = result.response;
            if (_this.responseDatacat.Status === 0) {
            }
            else {
                console.log(_this.responseDatacat);
            }
        }, function (error) {
        });
    };
    Home6Page.prototype.LatestPro = function () {
        var _this = this;
        this.services.LatestPro().subscribe(function (result) {
            _this.responseDataLatPro = result.response;
            console.log(_this.responseDataLatPro);
            if (_this.responseDataLatPro.Status === 0) {
            }
            else {
            }
        }, function (error) {
        });
    };
    Home6Page.prototype.blog = function () {
        var _this = this;
        this.services.blog().subscribe(function (result) {
            _this.responseDatablog = result.response;
            if (_this.responseDatablog.Status === 0) {
            }
            else {
                console.log(_this.responseDatablog);
            }
        }, function (error) {
        });
    };
    Home6Page.prototype.onClickDetails = function (id) {
        this.router.navigate(['/bs-sub-categories', { id: id }]);
    };
    Home6Page.prototype.onClickBlog = function (idb) {
        this.router.navigate(['/bs-news-detail', { idb: idb }]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], Home6Page.prototype, "content", void 0);
    Home6Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home6',
            template: __webpack_require__(/*! ./home6.page.html */ "./src/app/yesgenie/Pages/home-pages/home6/home6.page.html"),
            styles: [__webpack_require__(/*! ./home6.page.scss */ "./src/app/yesgenie/Pages/home-pages/home6/home6.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeGeocoder"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _yes_service_service__WEBPACK_IMPORTED_MODULE_7__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_6__["CustomThemeService"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"], _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], Home6Page);
    return Home6Page;
}());



/***/ })

}]);
//# sourceMappingURL=home-pages-home6-home6-module.js.map