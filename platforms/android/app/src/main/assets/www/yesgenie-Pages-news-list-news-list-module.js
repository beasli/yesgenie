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

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content ion-list {\n  background: #fafafa; }\n  ion-content ion-list ion-item ion-thumbnail {\n    margin-bottom: auto; }\n  ion-content ion-list ion-item ion-label {\n    margin-top: 4px; }\n  ion-content ion-list ion-item ion-label h2 {\n      font-size: 18px;\n      font-weight: bold;\n      font-family: 'roboto-regular';\n      white-space: normal; }\n  ion-content ion-list ion-item ion-label h2 small {\n        display: flex;\n        align-items: center;\n        font-size: 14px;\n        color: #707070;\n        font-weight: normal;\n        margin-top: 10px; }\n  ion-content ion-list ion-item ion-label h2 small ion-label {\n          padding-left: 4px; }\n  ion-content ion-list ion-item ion-label p {\n      padding-top: 4px;\n      color: black;\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      overflow: hidden;\n      white-space: normal !important;\n      font-size: 14px;\n      font-family: 'roboto-regular'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9uZXdzLWxpc3QvbmV3cy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGFBQVEsRUFBQTtFQUhoQjtJQUtZLGVBQWUsRUFBQTtFQUwzQjtJQVNnQixZQUFZLEVBQUE7RUFUNUI7SUFjZ0IsZUFBZSxFQUFBO0VBZC9CO0lBaUJnQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVksRUFBQTtFQU01QjtFQUVRLG1CQUFtQixFQUFBO0VBRjNCO0lBS2dCLG1CQUFtQixFQUFBO0VBTG5DO0lBUWdCLGVBQWUsRUFBQTtFQVIvQjtNQVVvQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLDZCQUE2QjtNQUM3QixtQkFBa0IsRUFBQTtFQWJ0QztRQWV3QixhQUFZO1FBQ1osbUJBQWtCO1FBQ2xCLGVBQWM7UUFDZCxjQUFjO1FBQ2QsbUJBQWtCO1FBQ2xCLGdCQUFlLEVBQUE7RUFwQnZDO1VBc0I0QixpQkFBaUIsRUFBQTtFQXRCN0M7TUEyQm9CLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osb0JBQW9CO01BQ3BCLHFCQUFxQjtNQUVyQixnQkFBZ0I7TUFDaEIsOEJBQThCO01BQzlCLGVBQWU7TUFDZiw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL25ld3MtbGlzdC9uZXdzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgICAgICAtLWNvbG9yOndoaXRlO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGl0bGV7XG4gICAgICAgICAgICBpb24taW1ne1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uc3tcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1iYWRnZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1jb250ZW50e1xuICAgIGlvbi1saXN0e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgICBpb24tdGh1bWJuYWlse1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOm5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgc21hbGx7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDsgIFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

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