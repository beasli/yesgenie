(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-news-detail-news-detail-module"],{

/***/ "./src/app/yesgenie/Pages/news-detail/news-detail.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/yesgenie/Pages/news-detail/news-detail.module.ts ***!
  \******************************************************************/
/*! exports provided: NewsDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPageModule", function() { return NewsDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-detail.page */ "./src/app/yesgenie/Pages/news-detail/news-detail.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _news_detail_page__WEBPACK_IMPORTED_MODULE_6__["NewsDetailPage"]
    }
];
var NewsDetailPageModule = /** @class */ (function () {
    function NewsDetailPageModule() {
    }
    NewsDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_news_detail_page__WEBPACK_IMPORTED_MODULE_6__["NewsDetailPage"]]
        })
    ], NewsDetailPageModule);
    return NewsDetailPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/news-detail/news-detail.page.html":
/*!******************************************************************!*\
  !*** ./src/app/yesgenie/Pages/news-detail/news-detail.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" routerLink=\"/bs-home\" routerDirection=\"backward\">\n        <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title no-padding class=\"ecom-title\">Blog Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <!-- <ion-spinner *ngIf=\"!post.image\"></ion-spinner> -->\n  <ion-img src=\"https://www.yesgenie.com/{{responseData?.image_small}}\" class=\"animated fadeIn\"></ion-img>\n  <!-- <ion-img class=\"img-home-six\" src=\"https://www.yesgenie.com/{{p.image_small}}\"></ion-img> -->\n\n\n  <h2>{{responseData?.title}}\n    <br>\n    <small>\n      <ion-icon class=\"clock\" name=\"clock\"></ion-icon>{{responseData?.created_at}}\n    </small>\n  </h2>\n  <p [innerHTML]=\"responseData?.content\">\n  </p>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/news-detail/news-detail.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/yesgenie/Pages/news-detail/news-detail.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 16px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 12px; }\n  ion-content ion-img {\n  margin-right: auto;\n  margin-left: auto; }\n  ion-content h2 {\n  padding-left: 16px;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: 'roboto-regular'; }\n  ion-content h2 small {\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n    color: #707070;\n    font-weight: normal;\n    margin-top: 10px; }\n  ion-content h2 small .icon {\n      font-size: 18px;\n      margin-right: 5px;\n      margin-right: 10px; }\n  ion-content p {\n  margin-top: auto;\n  padding-left: 16px;\n  padding-right: 16px;\n  font-family: 'roboto-regular';\n  font-size: 16px;\n  text-align: justify; }\n  .clock {\n  font-size: 18px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9uZXdzLWRldGFpbC9uZXdzLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxhQUFRLEVBQUE7RUFIaEI7SUFNZ0IsZUFBZSxFQUFBO0VBTi9CO0lBU2dCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWSxFQUFBO0VBSzVCO0VBR1Esa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBO0VBSnpCO0VBT1Esa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNkJBQTZCLEVBQUE7RUFWckM7SUFZWSxhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLGdCQUFlLEVBQUE7RUFqQjNCO01BbUJnQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBO0VBckJsQztFQTBCUSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLG1CQUFtQixFQUFBO0VBRzNCO0VBQ0ksMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9uZXdzLWRldGFpbC9uZXdzLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAtLWNvbG9yOndoaXRlO1xuICAgICAgICBpb24tYnV0dG9uc3tcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1iYWRnZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tY29udGVudHtcblxuICAgIGlvbi1pbWd7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxuICAgIGgye1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgICAgICBzbWFsbHtcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgICAgICAgLmljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwe1xuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxufVxuLmNsb2NreyAgICBcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/news-detail/news-detail.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/yesgenie/Pages/news-detail/news-detail.page.ts ***!
  \****************************************************************/
/*! exports provided: NewsDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPage", function() { return NewsDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");








var NewsDetailPage = /** @class */ (function () {
    function NewsDetailPage(router, route, services, nav, menuCtrl, shared, config, translate) {
        this.router = router;
        this.route = route;
        this.services = services;
        this.nav = nav;
        this.menuCtrl = menuCtrl;
        this.shared = shared;
        this.config = config;
        this.posts = { image: "assets/template-themes/becrux/images/news/2.jpg", title: "Best Eid Dresses for Women", date: "2019-07-22T11:25:55", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to' };
    }
    NewsDetailPage.prototype.ngOnInit = function () {
    };
    NewsDetailPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    NewsDetailPage.prototype.ionViewWillEnter = function () {
        this.Id = this.route.snapshot.paramMap.get('idb');
        console.log(JSON.parse(this.Id));
        //  this.subcategory();
        this.blogDetalis(this.Id);
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    };
    NewsDetailPage.prototype.blogDetalis = function (id4) {
        var _this = this;
        var data4 = {
            id4: id4
        };
        this.services.blogdetails(data4).subscribe(function (result) {
            _this.responseData = result.response[0];
            if (_this.responseData.Status === 0) {
            }
            else {
                console.log(_this.responseData);
            }
        }, function (error) {
        });
    };
    NewsDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-detail',
            template: __webpack_require__(/*! ./news-detail.page.html */ "./src/app/yesgenie/Pages/news-detail/news-detail.page.html"),
            styles: [__webpack_require__(/*! ./news-detail.page.scss */ "./src/app/yesgenie/Pages/news-detail/news-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_7__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], NewsDetailPage);
    return NewsDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-news-detail-news-detail-module.js.map