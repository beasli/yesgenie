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

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content p {\n  font-size: 14px;\n  font-family: 'roboto-regular';\n  margin-bottom: 5px; }\n  ion-content .grid {\n  margin-top: 40%; }\n  ion-content .grid ion-row ion-col {\n    text-align: center; }\n  ion-content .grid ion-row ion-col ion-icon {\n      zoom: 3.9;\n      color: lightgrey; }\n  ion-content .grid ion-row ion-col ion-button {\n      --border-radius: 0px;\n      height: 30px;\n      --color: white; }\n  ion-content .grid ion-row ion-col h4 {\n      font-size: 20px;\n      font-family: 'roboto-regular';\n      font-weight: bold;\n      margin-top: 2px;\n      margin-bottom: 5px; }\n  ion-content ion-grid ion-card {\n  color: black; }\n  ion-content .grid-two {\n  margin-top: -15px !important; }\n  ion-content .shop-para {\n  margin-bottom: 15px !important;\n  margin-top: 0 !important; }\n  ion-footer {\n  color: white;\n  padding-left: 10px;\n  padding-right: 10px; }\n  ion-footer h5 {\n    font-size: 16px;\n    margin-top: 5px;\n    margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvcmV3YXJkLXBvaW50cy9yZXdhcmQtcG9pbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGFBQVEsRUFBQTtFQUhoQjtJQUtZLGVBQWUsRUFBQTtFQUwzQjtJQVNnQixZQUFZLEVBQUE7RUFUNUI7SUFlZ0IsZUFBZSxFQUFBO0VBZi9CO0lBa0JnQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVksRUFBQTtFQUs1QjtFQUVRLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isa0JBQWtCLEVBQUE7RUFKMUI7RUFPUSxlQUFlLEVBQUE7RUFQdkI7SUFVZ0Isa0JBQWtCLEVBQUE7RUFWbEM7TUFZb0IsU0FBUTtNQUNSLGdCQUFlLEVBQUE7RUFibkM7TUFpQm9CLG9CQUFnQjtNQUNoQixZQUFZO01BQ1osY0FBUSxFQUFBO0VBbkI1QjtNQXNCb0IsZUFBZTtNQUNmLDZCQUE2QjtNQUM3QixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGtCQUFrQixFQUFBO0VBMUJ0QztFQWlDWSxZQUFZLEVBQUE7RUFqQ3hCO0VBcUNRLDRCQUE0QixFQUFBO0VBckNwQztFQXdDUSw4QkFBOEI7RUFDOUIsd0JBQXdCLEVBQUE7RUFHaEM7RUFHSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBTHZCO0lBT1EsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL3Jld2FyZC1wb2ludHMvcmV3YXJkLXBvaW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6YmxhY2s7XG4gICAgICAgIC0tY29sb3I6d2hpdGU7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi10aXRsZXtcbiAgICAgICAgICAgIGlvbi1pbWd7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b25ze1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYmFkZ2V7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWNvbnRlbnR7XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgICAuZ3JpZHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDAlO1xuICAgICAgICBpb24tcm93e1xuICAgICAgICAgICAgaW9uLWNvbHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgICAgIHpvb206My45O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjpsaWdodGdyZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICAgICAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tZ3JpZHtcbiAgICAgICAgaW9uLWNhcmR7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmdyaWQtdHdve1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc2hvcC1wYXJhe1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICB9XG59XG5pb24tZm9vdGVye1xuICAgIFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6YmxhY2sgO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBoNXtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgXG59Il19 */"

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