(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-news-news-module"],{

/***/ "./src/app/yesgenie/Pages/news/news.module.ts":
/*!****************************************************!*\
  !*** ./src/app/yesgenie/Pages/news/news.module.ts ***!
  \****************************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news.page */ "./src/app/yesgenie/Pages/news/news.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]
    }
];
var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
        })
    ], NewsPageModule);
    return NewsPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/news/news.page.html":
/*!****************************************************!*\
  !*** ./src/app/yesgenie/Pages/news/news.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title no-padding class=\"ecom-title\">\n      {{'News' |translate}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"goToSearchPage()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon class=\"cart-badge\" name=\"cart\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartquantity}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <!-- *ngIf=\"post.image\" -->\n  <ion-slides pager=true paginationType=\"bullets\" class=\"animated slideIn\" (click)=\"goToNewsDetail()\">\n    <ion-slide *ngFor=\"let post of featuredPosts\" (click)=\"showPostDetail(post)\">\n      <ion-spinner *ngIf=\"!post.image\"></ion-spinner>\n      <ion-img src=\"{{post.image}}\" class=\"animated fadeIn\"></ion-img>\n    </ion-slide>\n  </ion-slides>\n  <!-- top Segments  -->\n  <ion-segment [(ngModel)]=\"segments\">\n    <ion-segment-button value=\"newest\">{{'Newest' |translate}}</ion-segment-button>\n    <ion-segment-button value=\"categories\">{{ 'Categories' | translate }} </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]=\"segments\">\n\n    <div *ngSwitchCase=\"'newest'\">\n      <ion-list>\n        <ion-item lines=\"full\" *ngFor=\"let post of posts\" (click)=\"goToNewsDetail()\" class=\"animated fadeIn\">\n          <ion-thumbnail slot=\"start\">\n            <ion-img src=\"{{post.image}}\"></ion-img>\n          </ion-thumbnail>\n          <ion-label>\n            <h2>{{post.title}}\n              <br>\n              <small>\n                <ion-icon class=\"clock\" name=\"clock\"></ion-icon>\n                <ion-label>\n                  {{post.date}}\n                </ion-label>\n              </small>\n            </h2>\n            <p>{{post.content}}</p>\n          </ion-label>\n        </ion-item>\n        <!-- <ion-infinite-scroll #infinite (ionInfinite)=\"getPosts($event)\">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll> -->\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase=\"'categories'\">\n      <ion-grid no-padding class=\"animated fadeIn\">\n        <ion-row>\n          <ion-col no-padding size=\"6\" *ngFor=\"let cat of categories\">\n            <ion-card (click)=\"goToNewsList()\">\n              <ion-card-header>\n                <ion-img src=\"{{cat.image}}\"></ion-img>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-card-title>\n                  {{cat.name}}\n                </ion-card-title>\n                <ion-card-subtitle>\n                  {{cat.count}} {{'Posts'|translate}}\n                </ion-card-subtitle>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/news/news.page.scss":
/*!****************************************************!*\
  !*** ./src/app/yesgenie/Pages/news/news.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content ion-segment {\n  background: #f9f9f9; }\n  ion-content ion-segment ion-segment-button {\n    --indicator-color:lightgray;\n    font-size: 14px;\n    --color: #707070; }\n  ion-content ion-list {\n  background: #fafafa; }\n  ion-content ion-list ion-item ion-thumbnail {\n    margin-bottom: auto; }\n  ion-content ion-list ion-item ion-label {\n    margin-top: 4px; }\n  ion-content ion-list ion-item ion-label h2 {\n      font-size: 18px;\n      font-weight: bold;\n      white-space: normal;\n      font-family: 'roboto-regular'; }\n  ion-content ion-list ion-item ion-label h2 small {\n        display: flex;\n        align-items: center;\n        font-size: 14px;\n        color: #747474;\n        font-weight: normal;\n        margin-top: 5px; }\n  ion-content ion-list ion-item ion-label h2 small ion-label {\n          padding-left: 4px; }\n  ion-content ion-list ion-item ion-label p {\n      padding-top: 4px;\n      color: black;\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      overflow: hidden;\n      white-space: normal !important;\n      font-size: 14px;\n      font-family: 'roboto-regular'; }\n  ion-content ion-grid ion-row ion-col ion-card {\n  border-radius: 0;\n  box-shadow: none;\n  text-align: center;\n  margin: 0;\n  box-shadow: inset 0px 0.1px lightgrey; }\n  ion-content ion-grid ion-row ion-col ion-card ion-card-header ion-img {\n    height: 120px;\n    margin-left: auto;\n    margin-right: auto; }\n  ion-content ion-grid ion-row ion-col ion-card ion-card-content ion-card-title {\n    font-size: 14px;\n    font-weight: bold;\n    color: #000;\n    font-family: 'roboto-regular'; }\n  ion-content ion-grid ion-row ion-col ion-card ion-card-content ion-card-subtitle {\n    font-size: 14px;\n    color: #747474;\n    font-family: 'roboto-regular'; }\n  .clock {\n  font-size: 18px !important;\n  margin-top: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9uZXdzL25ld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsYUFBUSxFQUFBO0VBSGhCO0lBS1ksZUFBZSxFQUFBO0VBTDNCO0lBU2dCLFlBQVksRUFBQTtFQVQ1QjtJQWNnQixlQUFlLEVBQUE7RUFkL0I7SUFpQmdCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWSxFQUFBO0VBSzVCO0VBTVEsbUJBQW1CLEVBQUE7RUFOM0I7SUFRWSwyQkFBa0I7SUFHbEIsZUFBZTtJQUNmLGdCQUFRLEVBQUE7RUFacEI7RUFnQlksbUJBQW1CLEVBQUE7RUFoQi9CO0lBbUJnQixtQkFBbUIsRUFBQTtFQW5CbkM7SUFzQmdCLGVBQWUsRUFBQTtFQXRCL0I7TUF3Qm9CLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsbUJBQWtCO01BQ2xCLDZCQUE0QixFQUFBO0VBM0JoRDtRQTZCd0IsYUFBWTtRQUNaLG1CQUFrQjtRQUNsQixlQUFjO1FBQ2QsY0FBYztRQUNkLG1CQUFrQjtRQUNsQixlQUFjLEVBQUE7RUFsQ3RDO1VBb0M0QixpQkFBaUIsRUFBQTtFQXBDN0M7TUF5Q29CLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osb0JBQW9CO01BQ3BCLHFCQUFxQjtNQUVyQixnQkFBZ0I7TUFDaEIsOEJBQThCO01BQzlCLGVBQWU7TUFDZiw2QkFBNEIsRUFBQTtFQWpEaEQ7RUFtRW9CLGdCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QscUNBQW9DLEVBQUE7RUF2RXhEO0lBOEQ0QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0VBaEU5QztJQTBFNEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsNkJBQTRCLEVBQUE7RUE3RXhEO0lBZ0Y0QixlQUFjO0lBQ2QsY0FBYztJQUNkLDZCQUE0QixFQUFBO0VBU3hEO0VBQ0ksMEJBQTBCO0VBQzFCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL25ld3MvbmV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6YmxhY2s7XG4gICAgICAgIC0tY29sb3I6d2hpdGU7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi10aXRsZXtcbiAgICAgICAgICAgIGlvbi1pbWd7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b25ze1xuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJhZGdle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogM3B4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1jb250ZW50e1xuICAgIGlvbi1zbGlkZXN7XG4gICAgICAgIC8vIC0tYnVsbGV0LWJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAvLyAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogYmxhY2s7XG4gICAgfVxuICAgIGlvbi1zZWdtZW50e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgICAgICBpb24tc2VnbWVudC1idXR0b257XG4gICAgICAgICAgICAtLWluZGljYXRvci1jb2xvcjpsaWdodGdyYXk7XG4gICAgICAgICAgICAvLyAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiBibGFjaztcbiAgICAgICAgICAgIC8vIC0tY29sb3ItY2hlY2tlZDogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAtLWNvbG9yOiAjNzA3MDcwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1saXN0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAgaW9uLXRodW1ibmFpbHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOm5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6J3JvYm90by1yZWd1bGFyJztcbiAgICAgICAgICAgICAgICAgICAgc21hbGx7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzQ3NDc0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseToncm9ib3RvLXJlZ3VsYXInO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWdyaWR7XG4gICAgICAgIGlvbi1yb3d7XG4gICAgICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgICAgIGlvbi1jYXJke1xuICAgICAgICAgICAgICAgICAgICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6aW5zZXQgMHB4IDAuMXB4IGxpZ2h0Z3JleTsgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tY2FyZC10aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6J3JvYm90by1yZWd1bGFyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzQ3NDc0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5Oidyb2JvdG8tcmVndWxhcic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5jbG9ja3sgICAgXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/news/news.page.ts":
/*!**************************************************!*\
  !*** ./src/app/yesgenie/Pages/news/news.page.ts ***!
  \**************************************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");






var NewsPage = /** @class */ (function () {
    function NewsPage(menuCtrl, nav, shared, config, translate) {
        this.menuCtrl = menuCtrl;
        this.nav = nav;
        this.shared = shared;
        this.config = config;
        this.segments = 'newest';
        this.featuredPosts = [
            { image: "assets/template-themes/becrux/images/news/1.jpg" },
            { image: "assets/template-themes/becrux/images/news/2.jpg" },
        ];
        this.posts = [
            { image: "assets/template-themes/becrux/images/news/2.jpg", title: "Khadi taps for garment e-sales", date: "2019-07-22T 11:03:19", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties' },
            { image: "assets/template-themes/becrux/images/news/7.jpg", title: "Slingshot Softshell Jackets", date: "2019-06-22T 11:12:00", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties' },
            { image: "assets/template-themes/becrux/images/news/6.jpg", title: "Quick n Easy Shopping Festival 2019", date: "2019-05-22T 11:08:18", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties' },
        ];
        this.categories = [
            { image: "assets/template-themes/becrux/images/news/4.jpg", name: "App Feature", count: "20" },
            { image: "assets/template-themes/becrux/images/news/6.jpg", name: "Deals", count: "10" },
            { image: "assets/template-themes/becrux/images/news/5.jpg", name: "News", count: "15" },
            { image: "assets/template-themes/becrux/images/news/3.jpg", name: "Promotions", count: "30" },
        ];
    }
    NewsPage.prototype.ngOnInit = function () {
    };
    NewsPage.prototype.goToNewsDetail = function () {
        this.nav.navigateForward('bs-news-detail');
    };
    NewsPage.prototype.goToNewsList = function () {
        this.nav.navigateForward('bs-news-list');
    };
    NewsPage.prototype.goToSearchPage = function () {
        this.nav.navigateForward("bs-search");
    };
    NewsPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    NewsPage.prototype.getPosts = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.posts.push({
                image: "assets/template-themes/becrux/images/news/2.jpg", title: "Khadi taps for garment e-sales", date: "2019-07-22T 11:03:19", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties'
            });
        }, 500);
    };
    NewsPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    NewsPage.prototype.ionViewWillEnter = function () {
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    };
    NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.page.html */ "./src/app/yesgenie/Pages/news/news.page.html"),
            styles: [__webpack_require__(/*! ./news.page.scss */ "./src/app/yesgenie/Pages/news/news.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], NewsPage);
    return NewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-news-news-module.js.map