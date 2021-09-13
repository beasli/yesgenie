(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-news-list-news-list-module"],{

/***/ "./src/app/yesgenie/Pages/news-list/news-list.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/yesgenie/Pages/news-list/news-list.module.ts ***!
  \**************************************************************/
/*! exports provided: NewsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListPageModule", function() { return NewsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-list.page */ "./src/app/yesgenie/Pages/news-list/news-list.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _news_list_page__WEBPACK_IMPORTED_MODULE_6__["NewsListPage"]
    }
];
var NewsListPageModule = /** @class */ (function () {
    function NewsListPageModule() {
    }
    NewsListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_news_list_page__WEBPACK_IMPORTED_MODULE_6__["NewsListPage"]]
        })
    ], NewsListPageModule);
    return NewsListPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/news-list/news-list.page.html":
/*!**************************************************************!*\
  !*** ./src/app/yesgenie/Pages/news-list/news-list.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title no-padding class=\"ecom-title\">\n      {{'News List'| translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"goToSearchPage()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon class=\"cart-badge\" name=\"cart\"></ion-icon>\n        <ion-badge color=\"secondary\">0</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <ion-list>\n    <ion-item lines=\"full\" *ngFor=\"let post of posts\" (click)=\"showPostDetail(post)\" class=\"animated fadeIn\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img src=\"{{post.image}}\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{post.title}}\n          <br>\n          <small>\n            <ion-icon name=\"clock\"></ion-icon>\n            <ion-label>\n              {{post.date}}\n            </ion-label>\n          </small>\n        </h2>\n        <p>{{post.content}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/news-list/news-list.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/yesgenie/Pages/news-list/news-list.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content ion-list {\n  background: #fafafa; }\n  ion-content ion-list ion-item ion-thumbnail {\n    margin-bottom: auto; }\n  ion-content ion-list ion-item ion-label {\n    margin-top: 4px; }\n  ion-content ion-list ion-item ion-label h2 {\n      font-size: 18px;\n      font-weight: bold;\n      font-family: 'roboto-regular';\n      white-space: normal; }\n  ion-content ion-list ion-item ion-label h2 small {\n        display: flex;\n        align-items: center;\n        font-size: 14px;\n        color: #707070;\n        font-weight: normal;\n        margin-top: 10px; }\n  ion-content ion-list ion-item ion-label h2 small ion-label {\n          padding-left: 4px; }\n  ion-content ion-list ion-item ion-label p {\n      padding-top: 4px;\n      color: black;\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      overflow: hidden;\n      white-space: normal !important;\n      font-size: 14px;\n      font-family: 'roboto-regular'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvbmV3cy1saXN0L25ld3MtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxhQUFRLEVBQUE7RUFIaEI7SUFLWSxlQUFlLEVBQUE7RUFMM0I7SUFTZ0IsWUFBWSxFQUFBO0VBVDVCO0lBY2dCLGVBQWUsRUFBQTtFQWQvQjtJQWlCZ0Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFNNUI7RUFFUSxtQkFBbUIsRUFBQTtFQUYzQjtJQUtnQixtQkFBbUIsRUFBQTtFQUxuQztJQVFnQixlQUFlLEVBQUE7RUFSL0I7TUFVb0IsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQiw2QkFBNkI7TUFDN0IsbUJBQWtCLEVBQUE7RUFidEM7UUFld0IsYUFBWTtRQUNaLG1CQUFrQjtRQUNsQixlQUFjO1FBQ2QsY0FBYztRQUNkLG1CQUFrQjtRQUNsQixnQkFBZSxFQUFBO0VBcEJ2QztVQXNCNEIsaUJBQWlCLEVBQUE7RUF0QjdDO01BMkJvQixnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLG9CQUFvQjtNQUNwQixxQkFBcUI7TUFFckIsZ0JBQWdCO01BQ2hCLDhCQUE4QjtNQUM5QixlQUFlO01BQ2YsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9uZXdzLWxpc3QvbmV3cy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICAvLyAtLWJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgLS1jb2xvcjp3aGl0ZTtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgICAgIGlvbi1pbWd7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbnN7XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1iYWRnZXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgaW9uLWxpc3R7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgIGlvbi10aHVtYm5haWx7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6bm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHNtYWxse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/news-list/news-list.page.ts":
/*!************************************************************!*\
  !*** ./src/app/yesgenie/Pages/news-list/news-list.page.ts ***!
  \************************************************************/
/*! exports provided: NewsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListPage", function() { return NewsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");






var NewsListPage = /** @class */ (function () {
    function NewsListPage(menuCtrl, shared, config, translate, nav) {
        this.menuCtrl = menuCtrl;
        this.shared = shared;
        this.config = config;
        this.nav = nav;
        this.posts = [
            { image: "assets/template-themes/becrux/images/news/2.jpg", title: "Khadi taps for garment e-sales", date: "2019-07-22T 11:03:19", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties' },
            { image: "assets/template-themes/becrux/images/news/7.jpg", title: "Slingshot Softshell Jackets", date: "2019-06-22T 11:12:00", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties' },
            { image: "assets/template-themes/becrux/images/news/6.jpg", title: "Quick n Easy Shopping Festival 2019", date: "2019-05-22T 11:08:18", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties' },
        ];
    }
    NewsListPage.prototype.ngOnInit = function () {
    };
    NewsListPage.prototype.showPostDetail = function () {
        this.nav.navigateForward("bs-news-detail");
    };
    NewsListPage.prototype.goToSearchPage = function () {
        this.nav.navigateForward("bs-search");
    };
    NewsListPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    NewsListPage.prototype.getPosts = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.posts.push({
                image: "assets/template-themes/becrux/images/news/2.jpg", title: "Khadi taps for garment e-sales", date: "2019-07-22T 11:03:19", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties'
            });
        }, 500);
    };
    NewsListPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    NewsListPage.prototype.ionViewWillEnter = function () {
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    };
    NewsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-list',
            template: __webpack_require__(/*! ./news-list.page.html */ "./src/app/yesgenie/Pages/news-list/news-list.page.html"),
            styles: [__webpack_require__(/*! ./news-list.page.scss */ "./src/app/yesgenie/Pages/news-list/news-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], NewsListPage);
    return NewsListPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-news-list-news-list-module.js.map