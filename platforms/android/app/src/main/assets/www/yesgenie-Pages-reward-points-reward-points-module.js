(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-reward-points-reward-points-module"],{

/***/ "./src/app/yesgenie/Pages/reward-points/reward-points.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/reward-points/reward-points.module.ts ***!
  \**********************************************************************/
/*! exports provided: RewardPointsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardPointsPageModule", function() { return RewardPointsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _reward_points_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reward-points.page */ "./src/app/yesgenie/Pages/reward-points/reward-points.page.ts");








var routes = [
    {
        path: '',
        component: _reward_points_page__WEBPACK_IMPORTED_MODULE_7__["RewardPointsPage"]
    }
];
var RewardPointsPageModule = /** @class */ (function () {
    function RewardPointsPageModule() {
    }
    RewardPointsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reward_points_page__WEBPACK_IMPORTED_MODULE_7__["RewardPointsPage"]]
        })
    ], RewardPointsPageModule);
    return RewardPointsPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/reward-points/reward-points.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/reward-points/reward-points.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title class=\"ecom-title\"> {{'Reward Point'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"refreshPage()\">\n        <ion-icon class=\"cart-badge\" name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <ion-grid class=\"grid\" no-padding>\n    <ion-row no-padding>\n      <ion-col size=\"12\" no-padding>\n        <ion-icon name=\"happy\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row no-padding>\n      <ion-col size=\"12\" no-padding>\n        <h4>{{'Your Rewards List is Empty'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row no-padding>\n      <ion-col size=\"12\" no-padding>\n        <p class=\"shop-para\">{{'Continue Shopping'|translate}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row no-padding>\n      <ion-col size=\"12\" no-padding>\n        <ion-button (click)=\"openProductsPage()\">Explore</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-card *ngFor=\"let r of rewards\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\">\n            <p>\n            {{'Action'|translate}}\n          </p>\n          </ion-col>\n          <ion-col text-right size=\"6\">\n              <p>\n            {{r.type}}\n              </p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n              <p>\n            {{'Points'|translate}}\n            </p>\n          </ion-col>\n          <ion-col text-right size=\"6\">\n              <p>\n            {{r.points}}\n            </p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n              <p>\n            {{'Date'|translate}}\n            </p>\n          </ion-col>\n          <ion-col text-right size=\"6\">\n            <p>\n            {{r.date}}\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n  <ion-grid class=\"grid-two\">\n    <ion-card *ngFor=\"let r of rewardsTwo\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\">\n            <p>\n            {{'Action'|translate}}\n          </p>\n          </ion-col>\n          <ion-col text-right size=\"6\">\n              <p>\n            {{r.type}}\n              </p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n              <p>\n            {{'Points'|translate}}\n            </p>\n          </ion-col>\n          <ion-col text-right size=\"6\">\n              <p>\n            {{r.points}}\n            </p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n              <p>\n            {{'Date'|translate}}\n            </p>\n          </ion-col>\n          <ion-col text-right size=\"6\">\n            <p>\n            {{r.date}}\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"8\">\n      <h5> {{'Total Points Earned'|translate}}:</h5>\n    </ion-col>\n    <ion-col text-right siz=\"4\">\n      <h5>16</h5>\n    </ion-col>\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/reward-points/reward-points.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/reward-points/reward-points.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content p {\n  font-size: 14px;\n  font-family: 'roboto-regular';\n  margin-bottom: 5px; }\n  ion-content .grid {\n  margin-top: 40%; }\n  ion-content .grid ion-row ion-col {\n    text-align: center; }\n  ion-content .grid ion-row ion-col ion-icon {\n      zoom: 3.9;\n      color: lightgrey; }\n  ion-content .grid ion-row ion-col ion-button {\n      --border-radius: 0px;\n      height: 30px;\n      --color: white; }\n  ion-content .grid ion-row ion-col h4 {\n      font-size: 20px;\n      font-family: 'roboto-regular';\n      font-weight: bold;\n      margin-top: 2px;\n      margin-bottom: 5px; }\n  ion-content ion-grid ion-card {\n  color: black; }\n  ion-content .grid-two {\n  margin-top: -15px !important; }\n  ion-content .shop-para {\n  margin-bottom: 15px !important;\n  margin-top: 0 !important; }\n  ion-footer {\n  color: white;\n  padding-left: 10px;\n  padding-right: 10px; }\n  ion-footer h5 {\n    font-size: 16px;\n    margin-top: 5px;\n    margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9yZXdhcmQtcG9pbnRzL3Jld2FyZC1wb2ludHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsYUFBUSxFQUFBO0VBSGhCO0lBS1ksZUFBZSxFQUFBO0VBTDNCO0lBU2dCLFlBQVksRUFBQTtFQVQ1QjtJQWVnQixlQUFlLEVBQUE7RUFmL0I7SUFrQmdCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWSxFQUFBO0VBSzVCO0VBRVEsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTtFQUoxQjtFQU9RLGVBQWUsRUFBQTtFQVB2QjtJQVVnQixrQkFBa0IsRUFBQTtFQVZsQztNQVlvQixTQUFRO01BQ1IsZ0JBQWUsRUFBQTtFQWJuQztNQWlCb0Isb0JBQWdCO01BQ2hCLFlBQVk7TUFDWixjQUFRLEVBQUE7RUFuQjVCO01Bc0JvQixlQUFlO01BQ2YsNkJBQTZCO01BQzdCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2Ysa0JBQWtCLEVBQUE7RUExQnRDO0VBaUNZLFlBQVksRUFBQTtFQWpDeEI7RUFxQ1EsNEJBQTRCLEVBQUE7RUFyQ3BDO0VBd0NRLDhCQUE4QjtFQUM5Qix3QkFBd0IsRUFBQTtFQUdoQztFQUdJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7RUFMdkI7SUFPUSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvcmV3YXJkLXBvaW50cy9yZXdhcmQtcG9pbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDpibGFjaztcbiAgICAgICAgLS1jb2xvcjp3aGl0ZTtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRpdGxle1xuICAgICAgICAgICAgaW9uLWltZ3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbnN7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1iYWRnZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tY29udGVudHtcbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIC5ncmlke1xuICAgICAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgICAgIGlvbi1yb3d7XG4gICAgICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICAgICAgem9vbTozLjk7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmxpZ2h0Z3JleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1ncmlke1xuICAgICAgICBpb24tY2FyZHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZ3JpZC10d297XG4gICAgICAgIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zaG9wLXBhcmF7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbmlvbi1mb290ZXJ7XG4gICAgXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjpibGFjayA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGg1e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/reward-points/reward-points.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/reward-points/reward-points.page.ts ***!
  \********************************************************************/
/*! exports provided: RewardPointsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardPointsPage", function() { return RewardPointsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var RewardPointsPage = /** @class */ (function () {
    function RewardPointsPage(menuCtrl, loadingController, nav) {
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.nav = nav;
        this.rewards = [{ type: "account-signup", points: "5", date: "Sep 1, 2019" }];
        this.rewardsTwo = [{ type: "order-placed", points: "11", date: "July 30, 2019" }];
    }
    RewardPointsPage.prototype.ngOnInit = function () {
    };
    RewardPointsPage.prototype.refreshPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            duration: 2000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RewardPointsPage.prototype.openProductsPage = function () {
        this.nav.navigateForward("bs-products");
    };
    RewardPointsPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    RewardPointsPage.prototype.ionViewWillEnter = function () {
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    };
    RewardPointsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reward-points',
            template: __webpack_require__(/*! ./reward-points.page.html */ "./src/app/yesgenie/Pages/reward-points/reward-points.page.html"),
            styles: [__webpack_require__(/*! ./reward-points.page.scss */ "./src/app/yesgenie/Pages/reward-points/reward-points.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], RewardPointsPage);
    return RewardPointsPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-reward-points-reward-points-module.js.map