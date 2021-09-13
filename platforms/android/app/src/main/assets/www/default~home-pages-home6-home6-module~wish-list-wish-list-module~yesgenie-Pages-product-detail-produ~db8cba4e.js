(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-pages-home6-home6-module~wish-list-wish-list-module~yesgenie-Pages-product-detail-produ~db8cba4e"],{

/***/ "./src/app/yesgenie/components/banner-two/banner-two.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/components/banner-two/banner-two.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-slides pager=\"true\" #ionSlides>\n  <ion-slide *ngFor=\"let slide of slides\" no-padding>\n   <img src=\"{{slide}}\" alt=\"banner\" />\n  </ion-slide>\n</ion-slides>"

/***/ }),

/***/ "./src/app/yesgenie/components/banner-two/banner-two.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/components/banner-two/banner-two.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides .swiper-pagination-bullet {\n  margin: 0 10px !important;\n  width: 8px !important;\n  height: 8px !important;\n  border-radius: 10px !important;\n  border: solid 1px #707070;\n  background: #C8C8C8;\n  opacity: 1 !important; }\n\nion-slides .swiper-pagination-bullet-active {\n  background: var(--ion-color-primary);\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWNreS9EZXNrdG9wL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvY29tcG9uZW50cy9iYW5uZXItdHdvL2Jhbm5lci10d28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixxQkFBcUIsRUFBQTs7QUFUM0I7RUFZTSxvQ0FBb0M7RUFDcEMsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9jb21wb25lbnRzL2Jhbm5lci10d28vYmFubmVyLXR3by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gICAgLy8gRm9yIEN1c3RvbWl6ZSBCdWxsZXRzXHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICAgICAgbWFyZ2luOiAwIDEwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICM3MDcwNzA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNDOEM4Qzg7XHJcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/yesgenie/components/banner-two/banner-two.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/yesgenie/components/banner-two/banner-two.component.ts ***!
  \************************************************************************/
/*! exports provided: BannerTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerTwoComponent", function() { return BannerTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerTwoComponent = /** @class */ (function () {
    function BannerTwoComponent() {
        //banner images
        this.slides = [
            "assets/template-themes/becrux/images/banner_images/4.png",
            "assets/template-themes/becrux/images/banner_images/5.png",
            "assets/template-themes/becrux/images/banner_images/6.jpg"
        ];
    }
    BannerTwoComponent.prototype.ngOnInit = function () { };
    BannerTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            selector: 'app-banner-two',
            template: __webpack_require__(/*! ./banner-two.component.html */ "./src/app/yesgenie/components/banner-two/banner-two.component.html"),
            styles: [__webpack_require__(/*! ./banner-two.component.scss */ "./src/app/yesgenie/components/banner-two/banner-two.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerTwoComponent);
    return BannerTwoComponent;
}());



/***/ }),

/***/ "./src/app/yesgenie/components/banner/banner.component.html":
/*!******************************************************************!*\
  !*** ./src/app/yesgenie/components/banner/banner.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-slides pager=\"true\" #ionSlides>\n    <ion-slide *ngFor=\"let slide of slides\" no-padding>\n     <img src=\"{{slide}}\" alt=\"banner\" />\n    </ion-slide>\n  </ion-slides>"

/***/ }),

/***/ "./src/app/yesgenie/components/banner/banner.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/yesgenie/components/banner/banner.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides .swiper-pagination-bullet {\n  margin: 0 10px !important;\n  width: 8px !important;\n  height: 8px !important;\n  border-radius: 10px !important;\n  border: solid 1px #707070;\n  background: #C8C8C8;\n  opacity: 1 !important; }\n\nion-slides .swiper-pagination-bullet-active {\n  background: var(--ion-color-primary);\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWNreS9EZXNrdG9wL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0kseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7O0FBVHpCO0VBWUksb0NBQW9DO0VBQ3BDLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XG4gIC8vIEZvciBDdXN0b21pemUgQnVsbGV0c1xuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICBtYXJnaW46IDAgMTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDhweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNzA3MDcwO1xuICAgIGJhY2tncm91bmQ6ICNDOEM4Qzg7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICB9XG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/yesgenie/components/banner/banner.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/yesgenie/components/banner/banner.component.ts ***!
  \****************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        //banner images
        this.slides = [
            "assets/template-themes/becrux/images/banner_images/1.jpg",
            "assets/template-themes/becrux/images/banner_images/2.jpg",
            "assets/template-themes/becrux/images/banner_images/3.jpg"
        ];
    }
    BannerComponent.prototype.ngOnInit = function () { };
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/yesgenie/components/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/yesgenie/components/banner/banner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/yesgenie/components/categories/categories.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/components/categories/categories.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- For Home-6 -->\n<!-- =========================================================== with name and product -->\n<div class=\"name\" *ngIf=\"type=='withName'\">\n\n  <ion-slides class=\"animated bounceInRight delay-900ms slide-h6\" [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of responseDatacat\" (click)=\"onClickDetails(p.category_id, p.name)\">\n      <!-- For Real Products -->\n      <ion-card>\n        <ion-img class=\"img-home-six\" src=\"https://www.yesgenie.com/{{p.app_icon}}\"></ion-img>\n        <!-- <img src=\"https://www.yesgenie.com/{{product.image_1}}\" /> -->\n        <ion-text>\n          <h6 class=\"name\">{{p.name}}</h6>\n          <!-- <p class=\"count\">{{p.count}} Products</p> -->\n        </ion-text>\n      </ion-card>\n      <!-- For Skeleton -->\n      <!-- <ion-card *ngIf=\"p==1\">\n        <ion-skeleton-text animated>\n        </ion-skeleton-text>\n        <p>\n          <ion-skeleton-text animated>\n          </ion-skeleton-text>\n        </p>\n      </ion-card> -->\n    </ion-slide>\n  </ion-slides>\n</div>\n<!-- For Home-7 -->\n<!-- =========================================================== with name and product count -->\n<div class=\"name-count\" *ngIf=\"type=='name&count'\">\n  <ion-slides class=\"animated bounceInRight delay-900ms\" [options]=\"sliderConfigHomeSix\" dir=\"{{shared.dir}}\">\n    <ion-slide *ngFor=\"let p of categories\" (click)=\"goToSubCategories()\">\n      <!-- For Real Products -->\n      <ion-card *ngIf=\"p!=1\" class=\"card-h7\">\n        <ion-avatar>\n          <ion-img src=\"{{p.img}}\"></ion-img>\n        </ion-avatar>\n        <ion-text>\n          <h6 class=\"name\">{{p.name}}</h6>\n          <p class=\"count\">{{p.count}} Products</p>\n        </ion-text>\n      </ion-card>\n      <!-- For Skeleton -->\n      <ion-card *ngIf=\"p==1\" class=\"skeleton-fome-seven-card\">\n        <div class=\"div\">\n          <ion-skeleton-text animated>\n          </ion-skeleton-text>\n        </div>\n        <p class=\"para\">\n          <ion-skeleton-text animated>\n          </ion-skeleton-text>\n        </p>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</div>\n<!-- For Home-8 -->\n<!-- =========================================================== with name and round image -->\n<div class=\"round\" *ngIf=\"type=='roundImage'\">\n  <ion-slides class=\"animated bounceInRight delay-900ms\" [options]=\"sliderConfig\" dir=\"{{shared.dir}}\">\n    <ion-slide *ngFor=\"let p of categories\" (click)=\"goToSubCategories()\">\n      <!-- For Real Products -->\n      <ion-card *ngIf=\"p!=1\" class=\"card-h8\" routerLink=\"/bs-sub-categories\" routerDirection=\"forward\">\n        <ion-avatar>\n          <img src=\"{{p.img}}\" />\n        </ion-avatar>\n        <ion-text>\n          <h6 class=\"name\">{{p.name}}</h6>\n          <p class=\"count\">{{p.count}} Products</p>\n        </ion-text>\n\n      </ion-card>\n      <!-- For Skeleton -->\n      <ion-card *ngIf=\"p==1\" class=\"card-skeleton-h8\">\n        <ion-avatar>\n          <ion-skeleton-text class=\"skeleton-h8\" animated>\n          </ion-skeleton-text>\n        </ion-avatar>\n        <p>\n          <ion-skeleton-text animated>\n          </ion-skeleton-text>\n        </p>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</div>\n\n<!-- // For Home-9 -->\n<!-- =========================================================== with name and round image -->\n<div class=\"grid\" *ngIf=\"type=='grid'\">\n  <ion-grid no-padding class=\"categories-grid\" (click)=\"goToSubCategories()\">\n    <ion-row no-padding>\n      <ion-col size=\"4\" *ngFor=\"let p of categories \" class=\"animated fadeIn\">\n        <ion-card *ngIf=\"p!=1\" class=\"card-h9\">\n          <ion-avatar class=\"avatar-h9\">\n            <img src=\"{{p.img}}\" />\n          </ion-avatar>\n          <ion-text>\n            <h6 class=\"name\">{{p.name}}</h6>\n            <p class=\"count\">{{p.count}} Products</p>\n          </ion-text>\n        </ion-card>\n        <ion-card *ngIf=\"p==1\" class=\"card-skeleton-h8\">\n          <ion-avatar class=\"skeleton-avatar-h9\">\n            <ion-skeleton-text class=\"skeleton-h8\" animated>\n            </ion-skeleton-text>\n          </ion-avatar>\n          <p>\n            <ion-skeleton-text animated>\n            </ion-skeleton-text>\n          </p>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>"

/***/ }),

/***/ "./src/app/yesgenie/components/categories/categories.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/components/categories/categories.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div .swiper-slide {\n  width: 40%; }\n\ndiv:first-child ion-slides ion-slide:last-child {\n  padding-right: 10px; }\n\ndiv:first-child ion-slides ion-slide ion-card {\n  background: #fafafa;\n  margin: 10px;\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: none; }\n\ndiv:first-child ion-slides ion-slide ion-card:nth-child(2) {\n    background: none; }\n\ndiv:first-child ion-slides ion-slide ion-card ion-avatar {\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px; }\n\ndiv:first-child ion-slides ion-slide ion-card:last-child {\n    width: 100%;\n    margin-top: 15px;\n    border-radius: 0px;\n    margin: 4px; }\n\ndiv:first-child ion-slides ion-slide ion-card:last-child ion-skeleton-text {\n      height: 90px; }\n\ndiv:first-child ion-slides ion-slide ion-card:last-child p {\n      height: 20px;\n      padding-left: 10px;\n      padding-right: 10px; }\n\ndiv:first-child ion-slides ion-slide ion-card:last-child ion-skeleton-text {\n      width: 100%;\n      height: 180px;\n      margin-top: 0; }\n\ndiv:first-child ion-slides ion-slide ion-card img {\n    width: 100%; }\n\ndiv:first-child ion-slides ion-slide ion-card h6 {\n    font-size: 14px !important;\n    font-family: 'roboto-medium';\n    text-align: center;\n    margin-bottom: 0;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    margin-top: 10px; }\n\ndiv:first-child ion-slides ion-slide ion-card p {\n    font-size: 14px;\n    font-family: 'roboto-medium' !important;\n    text-align: center;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    margin-top: 0; }\n\n.card-h7 {\n  width: 100% !important;\n  margin-top: 15px !important;\n  border-radius: 0px !important;\n  margin: 0px !important;\n  border: solid 7px #fafafa !important;\n  border-right: 0 !important;\n  background: white !important; }\n\n.card-h8 {\n  background: none !important;\n  box-shadow: none !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n\n.card-skeleton-h8 {\n  box-shadow: none !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n\n.card-skeleton-h8 .skeleton-h8 {\n    height: 90% !important; }\n\n.card-h9 {\n  margin: 0;\n  border-radius: 0;\n  background: white;\n  box-shadow: none; }\n\n.card-h9 .avatar-h9 {\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px; }\n\n.card-h9 h6 {\n    font-weight: bold;\n    text-align: center;\n    margin-bottom: 0;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap; }\n\n.card-h9 p {\n    text-align: center;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    margin-top: 0; }\n\n.name {\n  font-size: 14px !important;\n  color: black;\n  font-family: \"roboto-regular\" !important;\n  margin-top: 0 !important; }\n\n.count {\n  font-size: 12px !important;\n  margin-bottom: 0; }\n\n.img-home-six {\n  height: 180px !important; }\n\n.skeleton-fome-seven-card {\n  padding-bottom: 0; }\n\n.skeleton-fome-seven-card div {\n    height: 29px;\n    width: 40%;\n    border-radius: 84px;\n    margin-left: auto;\n    margin-right: auto; }\n\n.skeleton-fome-seven-card div ion-skeleton-text {\n      height: 70px !important; }\n\n.skeleton-fome-seven-card .para {\n    margin-top: 70px !important; }\n\n.skeleton-avatar-h9 {\n  margin-left: auto;\n  margin-right: auto; }\n\n.slide-h6 {\n  margin-left: 7px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWNreS9EZXNrdG9wL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxVQUFVLEVBQUE7O0FBRmxCO0VBUXdCLG1CQUFtQixFQUFBOztBQVIzQztFQVd3QixtQkFBa0I7RUE0QmxCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFlLEVBQUE7O0FBMUN2QztJQWE0QixnQkFBZSxFQUFBOztBQWIzQztJQWdCNEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTs7QUFsQjVDO0lBcUI0QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7O0FBeEJ2QztNQTBCZ0MsWUFBWSxFQUFBOztBQTFCNUM7TUE2QmdDLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsbUJBQW1CLEVBQUE7O0FBL0JuRDtNQWtDZ0MsV0FBVztNQUNYLGFBQWE7TUFDYixhQUFhLEVBQUE7O0FBcEM3QztJQTRDNEIsV0FBVyxFQUFBOztBQTVDdkM7SUErQzRCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0IsRUFBQTs7QUF0RDVDO0lBeUQ0QixlQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWEsRUFBQTs7QUFPekM7RUFDSSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQiw0QkFBNEIsRUFBQTs7QUFFaEM7RUFDSSwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLDJCQUEyQixFQUFBOztBQUgvQjtJQUtRLHNCQUFzQixFQUFBOztBQUc5QjtFQUNJLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUpwQjtJQU1RLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7O0FBUnhCO0lBV1EsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTs7QUFoQjVCO0lBbUJRLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNwQixhQUFhLEVBQUE7O0FBR3JCO0VBQ0ksMEJBQTBCO0VBQzFCLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsd0JBQXdCLEVBQUE7O0FBRTVCO0VBQ0ksMEJBQTBCO0VBQzFCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHdCQUF3QixFQUFBOztBQUU1QjtFQUNJLGlCQUFpQixFQUFBOztBQURyQjtJQUdRLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTs7QUFQMUI7TUFTWSx1QkFBdUIsRUFBQTs7QUFUbkM7SUFhUSwyQkFBMkIsRUFBQTs7QUFHbkM7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9jb21wb25lbnRzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIC5zd2lwZXItc2xpZGUge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIH1cclxuICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGlvbi1zbGlkZXN7XHJcbiAgICAgICAgICAgICAgICBpb24tc2xpZGV7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmFmYWZhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tYXZhdGFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLXNrZWxldG9uLXRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tc2tlbGV0b24tdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogI2VlZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbWVkaXVtJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLW1lZGl1bScgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgICAgXHJcbn1cclxuLmNhcmQtaDd7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBzb2xpZCA3cHggI2ZhZmFmYSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLWg4e1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLXNrZWxldG9uLWg4e1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgLnNrZWxldG9uLWg4e1xyXG4gICAgICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLmNhcmQtaDl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLmF2YXRhci1oOXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIGg2e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxufVxyXG4ubmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLXJlZ3VsYXJcIiAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb3VudHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uaW1nLWhvbWUtc2l4e1xyXG4gICAgaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5za2VsZXRvbi1mb21lLXNldmVuLWNhcmR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIGRpdntcclxuICAgICAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4NHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBpb24tc2tlbGV0b24tdGV4dHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBhcmF7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5za2VsZXRvbi1hdmF0YXItaDl7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uc2xpZGUtaDZ7XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/components/categories/categories.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/yesgenie/components/categories/categories.component.ts ***!
  \************************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(router, services, config, shared, nav, applicationRef) {
        this.router = router;
        this.services = services;
        this.config = config;
        this.shared = shared;
        this.nav = nav;
        this.applicationRef = applicationRef;
        //for product slider after banner
        this.sliderConfig = {
            slidesPerView: 2.5,
            spaceBetween: 0,
        };
        this.sliderConfigHomeSix = {
            slidesPerView: 2.2,
            spaceBetween: 0
        };
        // setTimeout(() => {
        //   this.categories = [
        //    { name: "Tops", img: "assets/template-themes/becrux/images/category-images/1.jpg", count: "2" },
        //    { name: "Bottoms", img: "assets/template-themes/becrux/images/category-images/2.jpg", count: "3" },
        //    { name: "Shirts", img: "assets/template-themes/becrux/images/category-images/3.jpg", count: "2" },
        //    { name: "Winter Wear", img: "assets/template-themes/becrux/images/category-images/4.jpg", count: "2" },
        //    { name: "Shoes", img: "assets/template-themes/becrux/images/category-images/5.jpg",  count: "2" },
        //    { name: "Watches", img: "assets/template-themes/becrux/images/category-images/6.jpg", count: "2" },
        //  ];
        // }, 4000);
    }
    CategoriesComponent.prototype.goToSubCategories = function () {
        this.nav.navigateForward("bs-products");
    };
    CategoriesComponent.prototype.ngOnInit = function () {
        this.category();
    };
    CategoriesComponent.prototype.ionViewWillEnter = function () {
        this.category();
    };
    CategoriesComponent.prototype.category = function () {
        var _this = this;
        this.services.category().subscribe(function (result) {
            _this.responseDatacat = result.response;
            if (_this.responseDatacat.Status === 0) {
            }
            else {
                _this.responseDatacat.length = 6;
                console.log(_this.responseDatacat);
            }
        }, function (error) {
        });
        this.applicationRef.tick();
    };
    CategoriesComponent.prototype.onClickDetails = function (id, name) {
        this.router.navigate(['/bs-sub-categories', { id: id, name: name }]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoriesComponent.prototype, "type", void 0);
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/yesgenie/components/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/yesgenie/components/categories/categories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__["YesServiceService"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/yesgenie/components/product/product.component.html":
/*!********************************************************************!*\
  !*** ./src/app/yesgenie/components/product/product.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- skeleton text until data not loaded -->\n<div *ngIf=\"p==1\">\n  <ion-card class=\"skeleton-card\">\n    <ion-skeleton-text animated>\n    </ion-skeleton-text>\n    <p>\n      <ion-skeleton-text animated>\n      </ion-skeleton-text>\n    </p>\n    <p>\n      <ion-skeleton-text animated class=\"skeleton-para\">\n      </ion-skeleton-text>\n    </p>\n  </ion-card>\n</div>\n\n<div>\n  <ion-card>\n    <div class=\"sale-featured\">\n      <div *ngIf=\"p.sale==true\" class=\"sale\">SALE</div>\n      <div *ngIf=\"p.featured==true\" class=\"featured\">FEATURED</div>\n    </div>\n    <img src=\"assets/template-themes/becrux/new-badge.svg\" />\n    <!-- <img src=\"{{p.img}}\" (click)=\"goToProductDetail()\" /> -->\n    <img src=\"https://www.yesgenie.com/uploads/images/{{p.image_small}}\" (click)=\"goToProductDetail(p.product_id, p.category_id, p.title)\" />\n    <p>{{p.title}}</p>\n    <ion-grid no-padding>\n\n      <ion-row no-padding>\n        <ion-col size=\"10\" no-padding *ngIf=\"p.sale_price != 0\">\n          <p><del style=\"color: red;\">{{p.price*1 /100*1}} Rs</del> <span>{{p.sale_price*1 /100*1}} Rs</span></p>\n        </ion-col>\n\n        <ion-col size=\"10\" no-padding *ngIf=\"p.sale_price == 0\">\n          <p>{{p.price*1 /100*1}} Rs</p>\n        </ion-col>\n        <!-- <ion-col size=\"5\" no-padding>\n          <p></p>\n        </ion-col> -->\n        <ion-col size=\"2\" no-padding>\n          <ion-icon class=\"icon\" (click)=\"clickWishList()\" *ngIf=\"isLiked==0\" name=\"heart-empty\"></ion-icon>\n          <ion-icon class=\"icon\" (click)=\"clickWishList()\" *ngIf=\"isLiked!=0\" name=\"heart\"></ion-icon>\n        </ion-col>\n          <ion-button *ngIf=\"type=='recent'\" color=\"danger\" (click)=\"removeRecent()\">REMOVE</ion-button>\n\n          <ion-button *ngIf=\"type=='wishList'\" color=\"danger\" (click)=\"removeWishList()\">REMOVE\n          </ion-button>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <!-- //====================================  list view for shop page ==================================== -->\n  <ion-item lines=\"none\" *ngIf=\"type=='list'\" class=\"animated fadeIn\">\n    <ion-thumbnail slot=\"start\">\n      <ion-img class=\"badge-img\" src=\"assets/template-themes/becrux/badge_new.png\"></ion-img>\n      <img class=\"img-list\" src=\"assets/template-themes/becrux/images/item-images/1.png\" />\n    </ion-thumbnail>\n    <ion-label>\n      <p>{{p.name}}</p>\n      <p><del>26.00 $</del>-<b>22.00$</b></p>\n    </ion-label>\n    <ion-icon class=\"icon\" (click)=\"onIconClick(p)\" *ngIf=\"!p.fav\" name=\"heart-empty\"></ion-icon>\n    <ion-icon class=\"icon\" (click)=\"onIconClick(p)\" *ngIf=\"p.fav\" name=\"heart\"></ion-icon>\n    <div class=\"sale-featured\">\n      <div [ngStyle]=\"{'background':itemColor}\" *ngIf=\"p.sale==true\" class=\"sale\">SALE</div>\n      <div [ngStyle]=\"{'background':itemColor}\" *ngIf=\"p.featured==true\" class=\"featured\">FEATURED</div>\n    </div>\n  </ion-item>\n</div>"

/***/ }),

/***/ "./src/app/yesgenie/components/product/product.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/yesgenie/components/product/product.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div:first-child ion-card {\n  height: 180px;\n  margin-top: 15px;\n  border-radius: 0px; }\n  div:first-child ion-card ion-skeleton-text {\n    height: 90px; }\n  div:first-child ion-card p {\n    height: 20px;\n    padding-left: 10px; }\n  div:first-child ion-card ion-skeleton-text:first-child {\n    width: 100%;\n    height: 110px;\n    margin-top: 0; }\n  div:first-child ion-card ion-skeleton-text:last-child {\n    height: 20px;\n    width: 90%;\n    margin-top: 5px; }\n  div:last-child ion-card {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  margin-bottom: 1px;\n  height: auto;\n  border-radius: 0px; }\n  div:last-child ion-card .img-div {\n    font-size: 11px;\n    font-weight: 400;\n    color: #ffffff;\n    position: absolute;\n    right: 0;\n    top: 0;\n    z-index: 9;\n    text-align: right;\n    text-transform: uppercase; }\n  div:last-child ion-card .img-div .sale {\n      padding: 3px 5px 2px 5px;\n      margin-bottom: 4px;\n      display: inline-block; }\n  div:last-child ion-card .img-div .featured {\n      padding: 3px 5px 2px 5px; }\n  div:last-child ion-card img:nth-child(2) {\n    display: none;\n    height: 40px;\n    position: absolute;\n    z-index: 1;\n    left: 0px !important;\n    width: 53px;\n    top: -1px;\n    margin-left: -8px; }\n  div:last-child ion-card p {\n    padding-left: 10px;\n    padding-right: 10px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    text-align: left;\n    margin-top: 5px;\n    margin-bottom: 0px;\n    color: black;\n    font-size: 12px; }\n  div:last-child ion-card ion-grid ion-row ion-col:first-child p {\n    padding-right: 0;\n    margin-top: 0px;\n    font-size: 12px;\n    color: black;\n    font-family: 'roboto-bold'; }\n  div:last-child ion-card ion-grid ion-row ion-col:first-child p span {\n      font-size: 12px;\n      color: black;\n      margin-left: 5px;\n      font-weight: 600; }\n  div:last-child ion-card ion-grid ion-row ion-col:first-child p del {\n      font-size: 12px;\n      color: black;\n      font-weight: 600; }\n  div:last-child ion-card ion-grid ion-row ion-col:nth-child(3) ion-icon {\n    zoom: 1.2;\n    color: var(--ion-color-primary); }\n  div:last-child ion-card ion-grid ion-row ion-button {\n    width: 100%;\n    height: 25px; }\n  div ion-item {\n  border-bottom: solid #eee;\n  border-top: solid #eee;\n  --padding-start:0; }\n  div ion-item ion-thumbnail {\n    margin: 0;\n    height: 100px;\n    width: 100px; }\n  div ion-item ion-thumbnail .badge-img {\n      position: absolute;\n      z-index: 1;\n      height: 45px;\n      width: 45px; }\n  div ion-item ion-icon {\n    margin-bottom: 0;\n    position: absolute;\n    top: 60px;\n    right: 10px; }\n  div ion-item ion-label {\n    margin-bottom: auto;\n    margin-left: 10px; }\n  div ion-item ion-label p {\n      margin-top: 10px;\n      font-size: 12px;\n      color: black;\n      font-family: 'roboto-bold'; }\n  .skeleton-card {\n  margin-top: 0px; }\n  .skeleton-para {\n  width: 80px !important;\n  height: 20px !important;\n  margin-top: -6px !important; }\n  .sale-featured {\n  position: absolute !important;\n  right: 0;\n  color: white;\n  z-index: 1 !important;\n  top: 0;\n  font-family: 'roboto-regular'; }\n  .sale-featured .sale {\n    background: var(--ion-color-primary);\n    text-align: center !important;\n    padding-left: 5px;\n    padding-right: 5px;\n    padding-top: 3px;\n    padding-bottom: 3px;\n    margin-left: auto;\n    width: 34.12px;\n    height: 17.88px;\n    font-size: 9px;\n    margin-bottom: 3px; }\n  .sale-featured .featured {\n    background: var(--ion-color-primary);\n    text-align: center !important;\n    padding: 4px 5px 13px 5px;\n    width: 56px;\n    height: 18.57px;\n    font-size: 9px; }\n  .img-list {\n  -webkit-filter: none !important;\n          filter: none !important; }\n  .div-recent-btn {\n  width: 98% !important; }\n  .icon {\n  color: #0ecbe0; }\n  .sc-ion-card-md-s img {\n  height: 165px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWNreS9EZXNrdG9wL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJb0IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQU50QztJQVF3QixZQUFZLEVBQUE7RUFScEM7SUFXd0IsWUFBWTtJQUNaLGtCQUFrQixFQUFBO0VBWjFDO0lBZ0I0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWEsRUFBQTtFQWxCekM7SUFxQjRCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZSxFQUFBO0VBdkIzQztFQThCeUIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0VBbEMzQztJQW9DNEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sVUFBVTtJQUNWLGlCQUFpQjtJQUNqQix5QkFBeUIsRUFBQTtFQTVDckQ7TUE4Q2dDLHdCQUF3QjtNQUN4QixrQkFBa0I7TUFDbEIscUJBQXFCLEVBQUE7RUFoRHJEO01Bb0RnQyx3QkFBd0IsRUFBQTtFQXBEeEQ7SUF5RGdDLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFNBQVM7SUFDVCxpQkFBaUIsRUFBQTtFQWhFakQ7SUF5RTZCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWUsRUFBQTtFQWxGNUM7SUEwRjRDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWiwwQkFBMEIsRUFBQTtFQTlGdEU7TUFnR2dELGVBQWU7TUFDZixZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLGdCQUFnQixFQUFBO0VBbkdoRTtNQXNHZ0QsZUFBZTtNQUNmLFlBQVk7TUFDWixnQkFBZ0IsRUFBQTtFQXhHaEU7SUE4RzZDLFNBQVM7SUFDVCwrQkFBZ0MsRUFBQTtFQS9HN0U7SUFvSHdDLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFySHBEO0VBNkhRLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsaUJBQWdCLEVBQUE7RUEvSHhCO0lBdUlZLFNBQVE7SUFDUixhQUFhO0lBQ2IsWUFBWSxFQUFBO0VBekl4QjtNQWtJZ0Isa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixZQUFZO01BQ1osV0FBVyxFQUFBO0VBckkzQjtJQTRJWSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXLEVBQUE7RUEvSXZCO0lBa0pZLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtFQW5KN0I7TUFxSmdCLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsWUFBWTtNQUNaLDBCQUEwQixFQUFBO0VBSzFDO0VBQ0ksZUFBZSxFQUFBO0VBRW5CO0VBQ0ksc0JBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QiwyQkFBMkIsRUFBQTtFQUUvQjtFQUNJLDZCQUE2QjtFQUM3QixRQUFRO0VBQ1IsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixNQUFNO0VBQ04sNkJBQTZCLEVBQUE7RUFOakM7SUFRUSxvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQ2pDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7RUFsQnRCO0lBcUJRLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYyxFQUFBO0VBR2xCO0VBQ0ksK0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0VBRTNCO0VBQ0kscUJBQXFCLEVBQUE7RUFFekI7RUFDSSxjQUFjLEVBQUE7RUFHbEI7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgICAmOmZpcnN0LWNoaWxke1xuICAgIC8vc3dpcGUgc2xpZGVyXG4gICAgICAgICAgICBpb24tY2FyZHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgICAgICAgICBpb24tc2tlbGV0b24tdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlvbi1za2VsZXRvbi10ZXh0e1xuICAgICAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1jYXJke1xuICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2FsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDVweCAycHggNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZlYXR1cmVke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDVweCAycHggNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2JhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hlaWdodDogMTYwcHg7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1ncmlke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tcm93e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWNvbHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3JvYm90by1ib2xkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tOiAxLjI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKCAtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4OztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyBmb3IgcHJvZHVjdCBsaXN0XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkICNlZWU7XG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkICNlZWU7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDowO1xuICAgICAgICBpb24tdGh1bWJuYWlse1xuICAgICAgICAgICAgLmJhZGdlLWltZ3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIH0gICBcbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWJvbGQnO1xuICAgICAgICAgICAgfSAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgfVxuLnNrZWxldG9uLWNhcmR7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnNrZWxldG9uLXBhcmF7XG4gICAgd2lkdGg6ODBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IC02cHggIWltcG9ydGFudDtcbn1cbi5zYWxlLWZlYXR1cmVke1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIC5zYWxle1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgd2lkdGg6IDM0LjEycHg7XG4gICAgaGVpZ2h0OiAxNy44OHB4O1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICB9XG4gICAgLmZlYXR1cmVke1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiA0cHggNXB4IDEzcHggNXB4O1xuICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgaGVpZ2h0OiAxOC41N3B4O1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICB9XG4gICAgfVxuICAgIC5pbWctbGlzdHtcbiAgICAgICAgZmlsdGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kaXYtcmVjZW50LWJ0bntcbiAgICAgICAgd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaWNvbntcbiAgICAgICAgY29sb3I6ICMwZWNiZTA7XG4gICAgfVxuXG4gICAgLnNjLWlvbi1jYXJkLW1kLXMgaW1ne1xuICAgICAgICBoZWlnaHQ6IDE2NXB4O1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/components/product/product.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/yesgenie/components/product/product.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");







var ProductComponent = /** @class */ (function () {
    function ProductComponent(services, router, translate, toastController, renderer, nav, storage, events, toastCtrl) {
        var _this = this;
        this.services = services;
        this.router = router;
        this.translate = translate;
        this.toastController = toastController;
        this.renderer = renderer;
        this.nav = nav;
        this.storage = storage;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.wishArray = [];
        // @ViewChild('myProduct', { read: ElementRef }) myProduct;
        this.itemColor = [];
        this.iconColorVar = "";
        this.isLiked = 0;
        this.segments = "Newest"; //first segment by default
        events.subscribe('wishListUpdate', function (id, value) {
            if (id == _this.p.id)
                _this.isLiked = value;
        });
        this.storage.get('wishListProducts').then(function (val) {
            _this.wishArray = val;
            _this.checkWishList();
        });
        // this.itemColor = ["black"];//to get the coloe from custom-theme service
        // this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
        //  this.iconColorVar = this.data;
        //for the selection of colors
        //  if (this.data == "black")//if selected color is black 
        // {
        //   this.itemColor = ["black"];
        // }
        // else if (this.data == "red")//if selected color is red 
        // {
        //   this.itemColor = ["#F44336"];
        // }
        // else if (this.data == "green")//if selected color is green 
        // {
        //   this.itemColor = ["#4CAF50"];
        // }
        // else if (this.data == "blue")//if selected color is blue
        // {
        //   this.itemColor = ["#008577"];
        // }
        // else if (this.data == "gray")//if selected color is gray
        // {
        //   this.itemColor = ["#9E9E9E"];
        // }
    }
    ProductComponent.prototype.checkWishList = function () {
        //getting wishList items from local storage
        var count = 0;
        if (this.wishArray != null)
            for (var _i = 0, _a = this.wishArray; _i < _a.length; _i++) {
                var value = _a[_i];
                if (value.id == this.p.id)
                    count++;
            }
        if (count != 0)
            this.isLiked = 1;
        else
            this.isLiked = 0;
    };
    ProductComponent.prototype.clickWishList = function () {
        // this.loading.autoHide(500);
        if (this.isLiked == 0) {
            this.addWishList();
        }
        else {
            this.removeWishList();
        }
    };
    ProductComponent.prototype.addWishList = function () {
        this.services.addWishList(this.p);
    };
    ProductComponent.prototype.removeWishList = function () {
        this.services.removeWishList(this.p);
    };
    //icon funtion for wishlist
    ProductComponent.prototype.onIconClick = function (i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(i.fav == false)) return [3 /*break*/, 2];
                        i.fav = true;
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Added To Wish List!',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 4];
                    case 2:
                        i.fav = false;
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Removed From Wish List!',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // goToProductDetail() {
    //   this.nav.navigateForward("bs-product-detail");
    // }
    ProductComponent.prototype.goToProductDetail = function (id, catid, title) {
        this.router.navigate(['bs-product-detail', { id: id, catid: catid, title: title }]);
    };
    ProductComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductComponent.prototype, "p", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductComponent.prototype, "type", void 0);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/yesgenie/components/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/yesgenie/components/product/product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__["YesServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/yesgenie/components/scrolling-featured-products/scrolling-featured-products.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/yesgenie/components/scrolling-featured-products/scrolling-featured-products.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid no-padding *ngIf=\"type=='homeSix'\">\n  <ion-row no-padding>\n    <ion-col *ngFor=\"let p of products\" size=\"6\" no-padding>\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid no-padding *ngIf=\"type=='homeNine'\">\n  <ion-row no-padding>\n    <ion-col *ngFor=\"let p of featured\" size=\"6\" no-padding>\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-infinite-scroll #infinite (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>"

/***/ }),

/***/ "./src/app/yesgenie/components/scrolling-featured-products/scrolling-featured-products.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/yesgenie/components/scrolling-featured-products/scrolling-featured-products.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid ion-row {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWNreS9EZXNrdG9wL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvY29tcG9uZW50cy9zY3JvbGxpbmctZmVhdHVyZWQtcHJvZHVjdHMvc2Nyb2xsaW5nLWZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9jb21wb25lbnRzL3Njcm9sbGluZy1mZWF0dXJlZC1wcm9kdWN0cy9zY3JvbGxpbmctZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZHtcclxuICAgIGlvbi1yb3d7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/yesgenie/components/scrolling-featured-products/scrolling-featured-products.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/yesgenie/components/scrolling-featured-products/scrolling-featured-products.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ScrollingFeaturedProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingFeaturedProductsComponent", function() { return ScrollingFeaturedProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");




var ScrollingFeaturedProductsComponent = /** @class */ (function () {
    function ScrollingFeaturedProductsComponent(config, shared) {
        var _this = this;
        this.config = config;
        this.shared = shared;
        this.count = 0;
        this.visiable = false; //for which home it display
        // For products
        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.featured = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        setTimeout(function () {
            if (_this.type == "homeSix") {
                console.log("not image");
                _this.visiable = true;
            }
            else if (_this.type == "homeNine") {
                console.log("image");
                _this.visiable = false;
            }
            _this.products = [
                { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/22.jpg", name: "Denim Jacket Reverse", price: "12.23", dPrice: "21.00", fav: false, res: true },
                { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/12.jpg", name: "Quilted gilet Hoodie", price: "14.64", dPrice: "21.00", fav: false, res: true },
                { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/16.jpg", name: "Printed Sweatshirt", price: "14.64", dPrice: "20.00", fav: false, res: true },
                { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/21.jpg", name: "Pearly Sleeve Tshirt", price: "15.36", dPrice: "21.00", fav: false, res: true },
                { sale: false, featured: false, img: "assets/template-themes/becrux/images/item-images/23.jpg", name: "Culottes Pent", price: "12.23", dPrice: "31.00", fav: false, res: true },
                { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/7.jpg", name: "Double Tank Tshirt", price: "14.64", dPrice: "21.00", fav: false, res: true },
                { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/24.jpg", name: "Cotton Printed Tshirt", price: "14.64", dPrice: "21.00", fav: false, res: true },
                { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "15.36", dPrice: "21.00", fav: false, res: true }
            ];
            _this.featured = [
                { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/20.jpg", name: "Rose Petal Shirt", price: "12.23", dPrice: "11.00", fav: false, res: true },
                { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/7.jpg", name: "Double Tank Shirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
                { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/21.jpg", name: "Perly Sleeve Tshirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
                { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/12.jpg", name: "Quilted Gilet Hoodie", price: "10.14", dPrice: "20.00", fav: true, res: true },
                { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/13.jpg", name: "Brown Long Coat", price: "18.13", dPrice: "21.00", fav: false, res: true },
                { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/26.jpg", name: "Straight Long Coat", price: "15.25", dPrice: "30.00", fav: false, res: true },
                { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/16.jpg", name: "Printed Sweatshirt", price: "18.13", dPrice: "21.00", fav: false, res: true },
                { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/27.jpg", name: "Flowing Blazer White", price: "15.25", dPrice: "30.00", fav: false, res: true }
            ];
        }, 10000);
    }
    ScrollingFeaturedProductsComponent.prototype.ngOnInit = function () { };
    //for infinite scroll
    ScrollingFeaturedProductsComponent.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log(event);
            if (_this.count == 0) {
                _this.products.push({
                    img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "14.64", dPrice: "25.00", fav: false, res: true
                }, { img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "12.23", dPrice: "21.00", fav: false, res: true });
                _this.featured.push({
                    img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "14.64", dPrice: "25.00", fav: false, res: true
                }, { img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "12.23", dPrice: "21.00", fav: false, res: true });
                _this.count++;
            }
            else if (_this.count == 1) {
                _this.products.push({
                    img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.64", dPrice: "25.00", fav: false, res: true
                }, { img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "12.23", dPrice: "21.00", fav: false, res: true });
                _this.featured.push({
                    img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.64", dPrice: "25.00", fav: false, res: true
                }, { img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "12.23", dPrice: "21.00", fav: false, res: true });
                _this.count++;
            }
            else if (_this.count == 2) {
                _this.products.push({
                    img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "14.64", dPrice: "11.00", fav: false, res: true
                }, { img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "12.23", dPrice: "11.00", fav: false, res: true });
                _this.featured.push({
                    img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "14.64", dPrice: "11.00", fav: false, res: true
                }, { img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "12.23", dPrice: "11.00", fav: false, res: true });
                _this.count = 0;
            }
            event.target.complete();
        }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScrollingFeaturedProductsComponent.prototype, "type", void 0);
    ScrollingFeaturedProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scrolling-featured-products',
            template: __webpack_require__(/*! ./scrolling-featured-products.component.html */ "./src/app/yesgenie/components/scrolling-featured-products/scrolling-featured-products.component.html"),
            styles: [__webpack_require__(/*! ./scrolling-featured-products.component.scss */ "./src/app/yesgenie/components/scrolling-featured-products/scrolling-featured-products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]])
    ], ScrollingFeaturedProductsComponent);
    return ScrollingFeaturedProductsComponent;
}());



/***/ }),

/***/ "./src/app/yesgenie/components/share/share.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/yesgenie/components/share/share.module.ts ***!
  \***********************************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../banner/banner.component */ "./src/app/yesgenie/components/banner/banner.component.ts");
/* harmony import */ var _banner_two_banner_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../banner-two/banner-two.component */ "./src/app/yesgenie/components/banner-two/banner-two.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product/product.component */ "./src/app/yesgenie/components/product/product.component.ts");
/* harmony import */ var _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vendor-list/vendor-list.component */ "./src/app/yesgenie/components/vendor-list/vendor-list.component.ts");
/* harmony import */ var _sliding_tabs_sliding_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sliding-tabs/sliding-tabs.component */ "./src/app/yesgenie/components/sliding-tabs/sliding-tabs.component.ts");
/* harmony import */ var _scrolling_featured_products_scrolling_featured_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scrolling-featured-products/scrolling-featured-products.component */ "./src/app/yesgenie/components/scrolling-featured-products/scrolling-featured-products.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../categories/categories.component */ "./src/app/yesgenie/components/categories/categories.component.ts");





//for home banner

//for home banner

// for product

//for vendor list

//for sliding tab

//for featrued product scrolling

//for categories

// import { EMenuComponentComponent } from '../e-menu-component/e-menu-component.component';
// import { MenuComponentComponent } from '../../components/menu-component/menu-component.component';
var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"],
                _banner_two_banner_two_component__WEBPACK_IMPORTED_MODULE_6__["BannerTwoComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
                _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_8__["VendorListComponent"],
                _sliding_tabs_sliding_tabs_component__WEBPACK_IMPORTED_MODULE_9__["SlidingTabsComponent"],
                _scrolling_featured_products_scrolling_featured_products_component__WEBPACK_IMPORTED_MODULE_10__["ScrollingFeaturedProductsComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesComponent"],
            ],
            entryComponents: [],
            exports: [
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"],
                _banner_two_banner_two_component__WEBPACK_IMPORTED_MODULE_6__["BannerTwoComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
                _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_8__["VendorListComponent"],
                _sliding_tabs_sliding_tabs_component__WEBPACK_IMPORTED_MODULE_9__["SlidingTabsComponent"],
                _scrolling_featured_products_scrolling_featured_products_component__WEBPACK_IMPORTED_MODULE_10__["ScrollingFeaturedProductsComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesComponent"],
            ],
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/components/sliding-tabs/sliding-tabs.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/yesgenie/components/sliding-tabs/sliding-tabs.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Home-1 For Segments With Not Image -->\n<ion-segment *ngIf=\"type=='notImage'\" [(ngModel)]=\"scrollSegments\" scrollable>\n  <ion-segment-button (click)=\"enableLoadingController()\" value=\"all\">All</ion-segment-button>\n  <ion-segment-button (click)=\"enableLoadingController()\" value=\"tops\">Tops </ion-segment-button>\n  <ion-segment-button (click)=\"enableLoadingController()\" value=\"bottoms\">Bottoms</ion-segment-button>\n  <ion-segment-button (click)=\"enableLoadingController()\" value=\"Shirtss\"> Shirts</ion-segment-button>\n  <ion-segment-button (click)=\"enableLoadingController()\" value=\"winter\">Winter Wear</ion-segment-button>\n  <ion-segment-button (click)=\"enableLoadingController()\" value=\"shoes\">Shoes</ion-segment-button>\n  <ion-segment-button (click)=\"enableLoadingController()\" value=\"watches\">Watches</ion-segment-button>\n\n  <!-- <ion-infinite-scroll threshold=\"10px\" (ionInfinite)=\"loadData($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"lines\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll> -->\n</ion-segment>\n<!-- Home-2 For Segments With Image -->\n<ion-segment *ngIf=\"type=='image'\" [(ngModel)]=\"scrollSegmentsImage\" scrollable>\n  <ion-segment-button (click)=\"enableLoadingController()\" value=\"allImage\">\n    <ion-thumbnail>\n      <img src=\"assets/template-themes/becrux/images/slider-images/1.jpg\">\n    </ion-thumbnail>\n    All\n  </ion-segment-button>\n  <ion-segment-button (click)=\"enableLoadingController()\" value=\"topsImage\">\n    <ion-thumbnail>\n      <img src=\"assets/template-themes/becrux/images/slider-images/2.jpg\">\n    </ion-thumbnail> Tops\n  </ion-segment-button>\n  <ion-segment-button (click)=\"enableLoadingController()\" value=\"bottomsImage\">\n    <ion-thumbnail>\n      <img src=\"assets/template-themes/becrux/images/slider-images/3.jpg\">\n    </ion-thumbnail>Bottoms\n  </ion-segment-button>\n  <ion-segment-button (click)=\"enableLoadingController()\" value=\"shirtssImage\">\n    <ion-thumbnail>\n      <img src=\"assets/template-themes/becrux/images/slider-images/4.png\">\n    </ion-thumbnail> Shirts\n  </ion-segment-button>\n  <ion-segment-button (click)=\"enableLoadingController()\" value=\"winterImage\">\n    <ion-thumbnail>\n      <img src=\"assets/template-themes/becrux/images/slider-images/5.png\">\n    </ion-thumbnail> Winter Wear\n  </ion-segment-button>\n  <ion-segment-button (click)=\"enableLoadingController()\" value=\"shoesImage\">\n    <ion-thumbnail>\n      <img src=\"assets/template-themes/becrux/images/slider-images/6.png\">\n    </ion-thumbnail> Shoes\n  </ion-segment-button>\n  <ion-segment-button (click)=\"enableLoadingController(1)\" value=\"watchesImage\">\n    <ion-thumbnail>\n      <img src=\"assets/template-themes/becrux/images/slider-images/7.jpg\">\n    </ion-thumbnail>Watches\n  </ion-segment-button>\n  <!-- <ion-infinite-scroll threshold=\"10px\" (ionInfinite)=\"loadData($event)\">\n            <ion-infinite-scroll-content loadingSpinner=\"lines\">\n            </ion-infinite-scroll-content>\n          </ion-infinite-scroll> -->\n</ion-segment>\n<!-- scrollable segment divisions -->\n<div [ngSwitch]=\"scrollSegments\" *ngIf=\"visiable\">\n  <div *ngSwitchCase=\"'all'\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col *ngFor=\"let p of products\" size=\"6\" no-padding>\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngSwitchCase=\"'tops'\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col *ngFor=\"let p of products\" size=\"6\" no-padding>\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngSwitchCase=\"'bottoms'\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col *ngFor=\"let p of products\" size=\"6\" no-padding>\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngSwitchCase=\"'shirtss'\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col *ngFor=\"let p of products\" size=\"6\" no-padding>\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngSwitchCase=\"'winter'\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col *ngFor=\"let p of products\" size=\"6\" no-padding>\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngSwitchCase=\"'shoes'\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col *ngFor=\"let p of products\" size=\"6\" no-padding>\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngSwitchCase=\"'watches'\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col *ngFor=\"let p of products\" size=\"6\" no-padding>\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div>\n<!-- scrollable image segment divisions -->\n<div [ngSwitch]=\"scrollSegmentsImage\" *ngIf=\"!visiable\">\n  <div *ngSwitchCase=\"'allImage'\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col *ngFor=\"let p of productsImage\" size=\"6\" no-padding>\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngSwitchCase=\"'topsImage'\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col *ngFor=\"let p of productsImage\" size=\"6\" no-padding>\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngSwitchCase=\"'bottomsImage'\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col *ngFor=\"let p of productsImage\" size=\"6\" no-padding>\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngSwitchCase=\"'shirtssImage'\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col *ngFor=\"let p of productsImage\" size=\"6\" no-padding>\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngSwitchCase=\"'winterImage'\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col *ngFor=\"let p of productsImage\" size=\"6\" no-padding>\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngSwitchCase=\"'shoesImage'\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col *ngFor=\"let p of productsImage\" size=\"6\" no-padding>\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngSwitchCase=\"'watchesImage'\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col *ngFor=\"let p of productsImage\" size=\"6\" no-padding>\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div>\n\n<!-- infinite scroll -->\n<ion-infinite-scroll #infinite (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>"

/***/ }),

/***/ "./src/app/yesgenie/components/sliding-tabs/sliding-tabs.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/yesgenie/components/sliding-tabs/sliding-tabs.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment {\n  background: #f9f9f9; }\n  ion-segment ion-segment-button {\n    --indicator-color:lightgray;\n    font-size: 14px;\n    background: white;\n    --color: #707070;\n    text-transform: capitalize; }\n  ion-segment ion-segment-button ion-thumbnail {\n      height: 32px;\n      width: 32px; }\n  ion-segment ion-segment-button img {\n      height: 45px;\n      padding: 6px;\n      padding-bottom: 16px; }\n  ion-grid ion-row {\n  margin-right: 10px; }\n  .slides {\n  opacity: 0.50; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWNreS9EZXNrdG9wL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvY29tcG9uZW50cy9zbGlkaW5nLXRhYnMvc2xpZGluZy10YWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CLEVBQUE7RUFEdkI7SUFHUSwyQkFBa0I7SUFDbEIsZUFBZTtJQUdmLGlCQUFpQjtJQUNqQixnQkFBUTtJQUNSLDBCQUEwQixFQUFBO0VBVGxDO01BV1ksWUFBWTtNQUNaLFdBQVcsRUFBQTtFQVp2QjtNQWdCWSxZQUFZO01BQ1osWUFBWTtNQUNaLG9CQUFvQixFQUFBO0VBSWhDO0VBRVEsa0JBQWtCLEVBQUE7RUFJMUI7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9jb21wb25lbnRzL3NsaWRpbmctdGFicy9zbGlkaW5nLXRhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudHtcclxuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICBpb24tc2VnbWVudC1idXR0b257XHJcbiAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6bGlnaHRncmF5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAvLyAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiBibGFjaztcclxuICAgICAgICAvLyAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIC0tY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgaW9uLXRodW1ibmFpbHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAvLyB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5pb24tZ3JpZHtcclxuICAgIGlvbi1yb3d7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi5zbGlkZXN7XHJcbiAgICBvcGFjaXR5OiAwLjUwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/yesgenie/components/sliding-tabs/sliding-tabs.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/yesgenie/components/sliding-tabs/sliding-tabs.component.ts ***!
  \****************************************************************************/
/*! exports provided: SlidingTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidingTabsComponent", function() { return SlidingTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SlidingTabsComponent = /** @class */ (function () {
    function SlidingTabsComponent(loadingController) {
        var _this = this;
        this.loadingController = loadingController;
        this.products = [1, 1, 1, 1, 1, 1, 1, 1];
        this.productsImage = [1, 1, 1, 1, 1, 1, 1, 1];
        this.scrollSegments = "all"; //scrollable segment
        this.scrollSegmentsImage = "allImage"; //scrollable segment for image
        this.visiable = false;
        this.count = 0;
        setTimeout(function () {
            if (_this.type == "notImage") {
                _this.visiable = true;
            }
            else if (_this.type == "image") {
                _this.visiable = false;
            }
        }, 4000);
        setTimeout(function () {
            _this.products = [
                { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "12.23", dPrice: "21.00", fav: false, res: true },
                { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/7.jpg", name: "Double Tank Shirt", price: "14.64", dPrice: "31.00", fav: false, res: true },
                { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/8.jpg", name: "Printed T Shirt", price: "14.64", dPrice: "20.00", fav: false, res: true },
                { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/9.jpg", name: "Red Frock", price: "15.36", dPrice: "25.00", fav: false, res: true },
                { sale: false, featured: false, img: "assets/template-themes/becrux/images/item-images/10.jpg", name: "Mid Weist Pent", price: "12.23", dPrice: "18.00", fav: false, res: true },
                { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/11.jpg", name: "Flowing Blazer", price: "14.64", dPrice: "18.00", fav: false, res: true },
                { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/12.jpg", name: "Quilted gilet Hoodie", price: "14.64", dPrice: "21.00", fav: false, res: true },
                { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/13.jpg", name: "Brown Long Coat", price: "15.36", dPrice: "25.00", fav: false, res: true }
            ];
            _this.productsImage = [
                { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/8.jpg", name: "Casual Cotton T Shirt", price: "12.23", dPrice: "21.00", fav: false, res: true },
                { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Ladies Jacket ", price: "14.64", dPrice: "25.00", fav: false, res: true },
                { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/14.jpg", name: "Polo T-Shirt", price: "14.64", dPrice: "21.00", fav: false, res: true },
                { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/15.jpg", name: "Ladies Jeans Pent", price: "15.36", dPrice: "25.00", fav: false, res: true },
                { sale: false, featured: false, img: "assets/template-themes/becrux/images/item-images/16.jpg", name: "Printed Sweatshirt", price: "12.23", dPrice: "21.00", fav: false, res: true },
                { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/18.jpg", name: "Ladies Jackets", price: "14.64", dPrice: "21.00", fav: false, res: true },
                { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Polo T-Shirt", price: "14.64", dPrice: "25.00", fav: false, res: true },
                { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/17.jpg", name: "Casual Cotton T Shirt", price: "15.36", dPrice: "21.00", fav: false, res: true }
            ];
        }, 4000);
    }
    //for infinite scroll
    SlidingTabsComponent.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            if (_this.count == 0) {
                _this.products.push({
                    img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "14.64", dPrice: "25.00", fav: false, res: true
                }, { img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "12.23", dPrice: "21.00", fav: false, res: true });
                _this.productsImage.push({
                    img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "14.64", dPrice: "25.00", fav: false, res: true
                }, { img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "12.23", dPrice: "21.00", fav: false, res: true });
                _this.count++;
            }
            else if (_this.count == 1) {
                _this.products.push({
                    img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.64", dPrice: "25.00", fav: false, res: true
                }, { img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "12.23", dPrice: "21.00", fav: false, res: true });
                _this.productsImage.push({
                    img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.64", dPrice: "25.00", fav: false, res: true
                }, { img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "12.23", dPrice: "21.00", fav: false, res: true });
                _this.count++;
            }
            else if (_this.count == 2) {
                _this.products.push({
                    img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "14.64", dPrice: "11.00", fav: false, res: true
                }, { img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "12.23", dPrice: "11.00", fav: false, res: true });
                _this.productsImage.push({
                    img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "14.64", dPrice: "11.00", fav: false, res: true
                }, { img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "12.23", dPrice: "11.00", fav: false, res: true });
                _this.count = 0;
            }
            event.target.complete();
        }, 500);
    };
    SlidingTabsComponent.prototype.ngOnInit = function () { };
    SlidingTabsComponent.prototype.enableLoadingController = function (i) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SlidingTabsComponent.prototype, "type", void 0);
    SlidingTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sliding-tabs',
            template: __webpack_require__(/*! ./sliding-tabs.component.html */ "./src/app/yesgenie/components/sliding-tabs/sliding-tabs.component.html"),
            styles: [__webpack_require__(/*! ./sliding-tabs.component.scss */ "./src/app/yesgenie/components/sliding-tabs/sliding-tabs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], SlidingTabsComponent);
    return SlidingTabsComponent;
}());



/***/ }),

/***/ "./src/app/yesgenie/components/vendor-list/vendor-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/yesgenie/components/vendor-list/vendor-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- vendor list Heading -->\n<!-- <ion-row>\n  <ion-col size=\"1\" align-self-center>\n    <ion-icon name=\"md-list\"></ion-icon>\n  </ion-col>\n  <ion-col size=\"11\" align-self-end>\n    <h5>\n      Featured Vendors\n    </h5>\n  </ion-col>\n</ion-row> -->\n<!-- vendor list swipe slider -->\n<!-- <ion-slides class=\"animated bounceInRight delay-900ms\" [options]=\"sliderConfig\">\n  <ion-slide *ngFor=\"let p of ven1\"> -->\n    <!-- skeleton text until data not loaded -->\n    <!-- <ion-card>\n      <ion-img src=\"{{p.img}}\"></ion-img>\n      <p>{{p.name}}</p>\n    </ion-card>\n  </ion-slide>\n</ion-slides> -->"

/***/ }),

/***/ "./src/app/yesgenie/components/vendor-list/vendor-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/yesgenie/components/vendor-list/vendor-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row ion-col h5 {\n  margin-top: 7px;\n  margin-bottom: 6px; }\n\nion-row ion-col ion-icon {\n  zoom: 1.2; }\n\nion-card {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0px; }\n\nion-card ion-img {\n    -webkit-filter: brightness(0.9);\n            filter: brightness(0.9);\n    background: #fff;\n    height: 140px; }\n\nion-card p {\n    padding-left: 10px;\n    padding-right: 10px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    text-align: center;\n    margin-top: 5px;\n    margin-bottom: 0px;\n    color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWNreS9EZXNrdG9wL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvY29tcG9uZW50cy92ZW5kb3ItbGlzdC92ZW5kb3ItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdZLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFKOUI7RUFPWSxTQUFTLEVBQUE7O0FBS3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBSnRCO0lBTVksK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBOztBQVJ6QjtJQVdRLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvY29tcG9uZW50cy92ZW5kb3ItbGlzdC92ZW5kb3ItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yb3d7XHJcbiAgICBpb24tY29se1xyXG4gICAgICAgIGg1e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIHpvb206IDEuMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBpb24taW1ne1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/components/vendor-list/vendor-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/components/vendor-list/vendor-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: VendorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorListComponent", function() { return VendorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VendorListComponent = /** @class */ (function () {
    function VendorListComponent() {
        //for product slider after banner
        this.sliderConfig = {
            slidesPerView: 2.5,
            spaceBetween: 0
        };
        // For products
        this.ven1 = [
            { img: "assets/template-themes/becrux/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false },
            { img: "assets/template-themes/becrux/images/item-images/2.png", name: "Ladies Jacket ", price: "14.64", dPrice: "11.00", fav: false },
            { img: "assets/template-themes/becrux/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false },
            { img: "assets/template-themes/becrux/images/item-images/4.png", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false },
            { img: "assets/template-themes/becrux/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false },
            { img: "assets/template-themes/becrux/images/item-images/2.png", name: "Ladies Jackets", price: "14.64", dPrice: "11.00", fav: false },
            { img: "assets/template-themes/becrux/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false },
            { img: "assets/template-themes/becrux/images/item-images/4.png", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false }
        ];
    }
    VendorListComponent.prototype.ngOnInit = function () { };
    VendorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-list',
            template: __webpack_require__(/*! ./vendor-list.component.html */ "./src/app/yesgenie/components/vendor-list/vendor-list.component.html"),
            styles: [__webpack_require__(/*! ./vendor-list.component.scss */ "./src/app/yesgenie/components/vendor-list/vendor-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VendorListComponent);
    return VendorListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~home-pages-home6-home6-module~wish-list-wish-list-module~yesgenie-Pages-product-detail-produ~db8cba4e.js.map