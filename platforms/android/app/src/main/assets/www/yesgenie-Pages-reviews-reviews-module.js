(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-reviews-reviews-module"],{

/***/ "./src/app/yesgenie/Pages/reviews/reviews.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/yesgenie/Pages/reviews/reviews.module.ts ***!
  \**********************************************************/
/*! exports provided: ReviewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function() { return ReviewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviews.page */ "./src/app/yesgenie/Pages/reviews/reviews.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]
    }
];
var ReviewsPageModule = /** @class */ (function () {
    function ReviewsPageModule() {
    }
    ReviewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]]
        })
    ], ReviewsPageModule);
    return ReviewsPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/reviews/reviews.page.html":
/*!**********************************************************!*\
  !*** ./src/app/yesgenie/Pages/reviews/reviews.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" routerLink=\"/tabs/bs-home\">\n        <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ecom-title\">Ratings & Reviews</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <!-- <ion-grid no-padding class=\"rating-gird\">\n    <ion-row>\n      <ion-col>\n        <h4>{{'Ratings & Reviews'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n      <ion-col size=\"5\">\n        <h1>{{5| number:'1.2-2'}}\n          <ion-icon name=\"star\"></ion-icon>\n        </h1>\n        <h3>5 {{'rating'|translate}}</h3>\n      </ion-col>\n      <ion-col size=\"7\">\n        <ul>\n          <li>5\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"15+'%'\" style=\"background-color:green;\"></span>\n          </li>\n          <li>4\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"40+'%'\" style=\"background-color:lightgreen;\"></span>\n          </li>\n          <li>3\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"30+'%'\" style=\"background-color:yellow;\"></span>\n          </li>\n          <li>2\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"20+'%'\" style=\"background-color:orange;\"></span>\n          </li>\n          <li>1\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"10+'%'\" style=\"background-color:darkorange;\"></span>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n    \n  </ion-grid> -->\n\n  <ion-row>\n    <ion-col>\n      <ion-button (click)=\"addreview(Id)\" expand=\"block\" color=\"danger\">{{'Rate and write a review'|translate}}</ion-button>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-list>\n    <ion-item *ngFor=\"let r of responseData\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/template-themes/becrux/avatar.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{r.user_username}}</h2>\n        <ul class=\"product-rating\">\n          <li>\n            <div class=\"stars-outer\">\n              <div class=\"stars-inner\" [style.width]=\"(r.rating*20)+'%'\"></div>\n            </div>\n            <h6>{{r.created_at}}</h6>\n          </li>\n        </ul>\n        <p>{{r.review}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/reviews/reviews.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/yesgenie/Pages/reviews/reviews.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 16px; }\n  ion-content {\n  --background: white; }\n  ion-content ion-grid h4 {\n    font-family: 'roboto-regular;';\n    font-size: 16px;\n    margin-top: 0;\n    margin-bottom: 0; }\n  ion-content ion-grid h1 {\n    font-size: 20px;\n    margin-top: 0;\n    text-align: center;\n    font-family: 'roboto-regular;'; }\n  ion-content ion-grid h3 {\n    font-family: 'roboto-regular;';\n    font-size: 14px;\n    margin-bottom: 0;\n    text-align: center;\n    color: var(--ion-color-sec);\n    margin-top: 0; }\n  ion-content ion-grid ul {\n    padding-left: 15px;\n    margin-bottom: 0;\n    border-left: 1px solid #ccc; }\n  ion-content ion-grid ul li {\n      display: flex;\n      align-items: center;\n      font-size: 16px;\n      list-style: none;\n      position: relative; }\n  ion-content ion-grid ul li .icon {\n        margin-left: 5px; }\n  ion-content ion-grid ul li .block {\n        height: 11px;\n        display: inline-block;\n        margin-left: 7px;\n        position: relative;\n        z-index: 2; }\n  ion-content ion-grid ul li::after {\n        content: \"\";\n        background-color: #f4f4f4;\n        height: 11px;\n        width: calc(100% - 36px);\n        position: absolute;\n        left: 36px;\n        z-index: 1;\n        top: 5px; }\n  ion-content ion-list ion-item {\n    --background: transparent;\n    align-items: flex-start;\n    --padding-start: 5px; }\n  ion-content ion-list ion-item ion-avatar {\n      margin-bottom: auto; }\n  ion-content ion-list ion-item h2 {\n      font-weight: bold;\n      font-size: 14px; }\n  ion-content ion-list ion-item .product-rating {\n      margin-top: 0;\n      margin-bottom: 0;\n      padding-left: 0; }\n  ion-content ion-list ion-item .product-rating li {\n        display: flex;\n        align-items: center; }\n  ion-content ion-list ion-item .product-rating li h6 {\n          margin-top: 5px;\n          margin-left: 10px;\n          font-size: 14px; }\n  ion-content ion-list ion-item p {\n      margin-top: 2px;\n      white-space: normal;\n      font-size: 12px; }\n  ion-content .product-rating {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n  ion-content .product-rating .stars-outer {\n      display: inline-block;\n      position: relative;\n      font-size: 25px; }\n  ion-content .product-rating .stars-outer::before {\n        content: \"\\2606\\2606\\2606\\2606\\2606\";\n        color: #ccc; }\n  ion-content .product-rating .stars-outer .stars-inner {\n        font-size: 25px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        white-space: nowrap;\n        overflow: hidden; }\n  ion-content .product-rating .stars-outer .stars-inner::before {\n          content: \"\\2605\\2605\\2605\\2605\\2605\";\n          color: #f8ce0b; }\n  ion-content .product-rating h6 {\n      color: cornflowerblue;\n      margin-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9yZXZpZXdzL3Jldmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksYUFBUSxFQUFBO0VBSFo7SUFLSSxlQUFlLEVBQUE7RUFJZjtFQUNBLG1CQUFhLEVBQUE7RUFEYjtJQUlBLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQixFQUFBO0VBUGhCO0lBVUEsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCLEVBQUE7RUFiOUI7SUFnQkEsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixhQUFhLEVBQUE7RUFyQmI7SUF3QkEsa0JBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwyQkFBMkIsRUFBQTtFQTFCM0I7TUE0QkEsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBO0VBaENsQjtRQWtDQSxnQkFBZSxFQUFBO0VBbENmO1FBcUNBLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsZ0JBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVSxFQUFBO0VBekNWO1FBNENBLFdBQVc7UUFDWCx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFVBQVU7UUFDVixRQUFPLEVBQUE7RUFuRFA7SUEwREEseUJBQWE7SUFDYix1QkFBdUI7SUFDdkIsb0JBQWdCLEVBQUE7RUE1RGhCO01BK0RBLG1CQUFtQixFQUFBO0VBL0RuQjtNQWtFQSxpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0VBbkVmO01Bc0VBLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBO0VBeEVmO1FBMEVBLGFBQVk7UUFDWixtQkFBbUIsRUFBQTtFQTNFbkI7VUE4RUEsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixlQUFlLEVBQUE7RUFoRmY7TUFxRkEsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixlQUFlLEVBQUE7RUF2RmY7SUE0RkEsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQiwyQkFBMEIsRUFBQTtFQTlGMUI7TUFpR0EscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixlQUFlLEVBQUE7RUFuR2Y7UUFxR0Esb0NBQW9DO1FBQ3BDLFdBQVUsRUFBQTtFQXRHVjtRQXlHQSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixPQUFPO1FBQ1AsbUJBQW1CO1FBQ25CLGdCQUFnQixFQUFBO0VBOUdoQjtVQWlIQSxvQ0FBb0M7VUFDcEMsY0FBYyxFQUFBO0VBbEhkO01BdUhBLHFCQUFvQjtNQUNwQixpQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL3Jldmlld3MvcmV2aWV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgLS1jb2xvcjp3aGl0ZTtcbiAgICBpb24taWNvbntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIH1cbiAgICB9XG4gICAgaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBpb24tZ3JpZHtcbiAgICBoNHtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyOyc7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgaDF7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXI7JztcbiAgICB9XG4gICAgaDN7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcjsnO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlYyk7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gICAgdWx7XG4gICAgcGFkZGluZy1sZWZ0OjE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG4gICAgbGl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuaWNvbntcbiAgICBtYXJnaW4tbGVmdDo1cHg7XG4gICAgfVxuICAgIC5ibG9ja3tcbiAgICBoZWlnaHQ6IDExcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OjdweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjsgXG4gICAgfVxuICAgICY6OmFmdGVye1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICBoZWlnaHQ6IDExcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM2cHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzNnB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOjVweDtcbiAgICB9XG4gICAgfVxuICAgIH1cbiAgICB9XG4gICAgaW9uLWxpc3R7XG4gICAgaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICBcbiAgICBpb24tYXZhdGFye1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgfVxuICAgIGgye1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLnByb2R1Y3QtcmF0aW5ne1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbGl7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgaDZ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgfVxuICAgIH1cbiAgICBwe1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgfVxuICAgIH1cbiAgICAucHJvZHVjdC1yYXRpbmd7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcbiAgICBcbiAgICAuc3RhcnMtb3V0ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDI2MDZcXDI2MDZcXDI2MDZcXDI2MDZcXDI2MDZcIjtcbiAgICBjb2xvcjojY2NjO1xuICAgIH1cbiAgICAuc3RhcnMtaW5uZXIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIFxuICAgICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDI2MDVcXDI2MDVcXDI2MDVcXDI2MDVcXDI2MDVcIjtcbiAgICBjb2xvcjogI2Y4Y2UwYjtcbiAgICB9XG4gICAgfVxuICAgIH1cbiAgICBoNntcbiAgICBjb2xvcjpjb3JuZmxvd2VyYmx1ZTtcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xuICAgIH1cbiAgICB9XG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/reviews/reviews.page.ts":
/*!********************************************************!*\
  !*** ./src/app/yesgenie/Pages/reviews/reviews.page.ts ***!
  \********************************************************/
/*! exports provided: ReviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPage", function() { return ReviewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share.service */ "./src/app/share.service.ts");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");






var ReviewsPage = /** @class */ (function () {
    // reviews = [{ name: "Smith Will", date_created: "28-08-2019", rating: "50", review: "this is lorum ipsum" },
    // { name: "Smith Will", date_created: "28-08-2019", rating: "50", review: "this is lorum ipsum" }];
    function ReviewsPage(router, route, shareservices, menuCtrl, navCtrl, toastController, services) {
        this.router = router;
        this.route = route;
        this.shareservices = shareservices;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.services = services;
    }
    ReviewsPage.prototype.ngOnInit = function () {
    };
    ReviewsPage.prototype.pinchEvent = function (e) {
        this.navCtrl.navigateForward("ui-templates-details");
    };
    ReviewsPage.prototype.ionViewWillEnter = function () {
        var userDetails = localStorage.getItem('userdata');
        this.userLogindata = JSON.parse(userDetails);
        this.token = this.userLogindata.token;
        console.log(this.token);
        this.Id = this.route.snapshot.paramMap.get('ProId');
        console.log(JSON.parse(this.Id));
        this.Getproductreviews();
    };
    ReviewsPage.prototype.Getproductreviews = function () {
        var _this = this;
        var userData = 'product_id=' + this.Id;
        console.log(userData);
        this.services.Getproductreviews(userData).subscribe(function (result) {
            _this.responseData = result.response.product_review;
            console.log(_this.responseData);
        }, function (error) {
        });
    };
    ReviewsPage.prototype.addreview = function (id) {
        if (this.userLogindata == null || this.userLogindata == undefined) {
            this.navCtrl.navigateForward("bs-login");
        }
        else {
            this.router.navigate(['bs-add-review', { id: id }]);
        }
    };
    ReviewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.page.html */ "./src/app/yesgenie/Pages/reviews/reviews.page.html"),
            styles: [__webpack_require__(/*! ./reviews.page.scss */ "./src/app/yesgenie/Pages/reviews/reviews.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__["YesServiceService"]])
    ], ReviewsPage);
    return ReviewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-reviews-reviews-module.js.map