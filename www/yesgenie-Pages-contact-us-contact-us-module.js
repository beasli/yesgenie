(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-contact-us-contact-us-module"],{

/***/ "./src/app/yesgenie/Pages/contact-us/contact-us.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/yesgenie/Pages/contact-us/contact-us.module.ts ***!
  \****************************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/yesgenie/Pages/contact-us/contact-us.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");







// For Translation Language

var routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]
    }
];
var ContactUsPageModule = /** @class */ (function () {
    function ContactUsPageModule() {
    }
    ContactUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ],
            declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/contact-us/contact-us.page.html":
/*!****************************************************************!*\
  !*** ./src/app/yesgenie/Pages/contact-us/contact-us.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title class=\"ecom-title\">\n      Contact Us\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button fill=\"clear\" (click)=\"goToSearchPage()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button> -->\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon class=\"cart-badge\" name=\"cart\"></ion-icon>\n        <ion-badge color=\"secondary\">0</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <ion-card no-padding>\n    <ion-card-content no-padding>\n      <!-- <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <ion-icon class=\"theme-icon\"  name=\"pin\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <p wrap-text>\n          </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <ion-icon class=\"theme-icon\"  name=\"mail\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <p>\n          </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <ion-icon class=\"theme-icon\"  name=\"call\"></ion-icon>\n        </ion-avatar>\n\n        <ion-label>\n          <p>\n          </p>\n        </ion-label>\n      </ion-item> -->\n\n      <form>\n        <ion-item >\n          <ion-input type=\"text\" placeholder=\"{{'Name'|translate}}\" name=\"name\" [(ngModel)]=\"contact.name\" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type=\"email\" placeholder=\"{{'Email'|translate}}\" name=\"email\" [(ngModel)]=\"contact.email\" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type=\"text\" placeholder=\"{{'Your Messsage'|translate}}\" name=\"message\" [(ngModel)]=\"contact.message\"\n            required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-button expand=\"full\" type=\"submit\">{{'Contact Us'|translate}}</ion-button>\n        </ion-item>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/contact-us/contact-us.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/yesgenie/Pages/contact-us/contact-us.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content ion-card {\n  margin-top: 50px; }\n  ion-content ion-card ion-card-content ion-item {\n    --inner-padding-end: 0; }\n  ion-content ion-card ion-card-content ion-item ion-avatar {\n      background: #eee !important; }\n  ion-content ion-card ion-card-content ion-item ion-avatar ion-icon {\n        width: 100%;\n        margin-top: 8px;\n        zoom: 1.3; }\n  ion-content ion-card ion-card-content ion-item ion-label p {\n      white-space: normal;\n      font-size: 14px;\n      font-family: 'roboto-regular'; }\n  ion-content ion-card ion-card-content ion-item:last-child ion-button {\n      width: 100%;\n      text-transform: capitalize;\n      --color: white; }\n  ion-content form {\n  padding-left: 16px;\n  padding-right: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvY29udGFjdC11cy9jb250YWN0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGFBQVEsRUFBQTtFQUhoQjtJQUtZLGVBQWUsRUFBQTtFQUwzQjtJQVNnQixZQUFZLEVBQUE7RUFUNUI7SUFjZ0IsZUFBZSxFQUFBO0VBZC9CO0lBaUJnQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVksRUFBQTtFQUs1QjtFQUVRLGdCQUFnQixFQUFBO0VBRnhCO0lBS2dCLHNCQUFvQixFQUFBO0VBTHBDO01BT29CLDJCQUEyQixFQUFBO0VBUC9DO1FBU3dCLFdBQVc7UUFDWCxlQUFlO1FBRWYsU0FBUSxFQUFBO0VBWmhDO01BaUJ3QixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLDZCQUE2QixFQUFBO0VBbkJyRDtNQXlCd0IsV0FBVztNQUNYLDBCQUEwQjtNQUMxQixjQUFRLEVBQUE7RUEzQmhDO0VBbUNRLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgICAgIC0tY29sb3I6d2hpdGU7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXRpdGxle1xyXG4gICAgICAgICAgICBpb24taW1ne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b25ze1xyXG4gICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYmFkZ2V7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgICAgICBpb24tYXZhdGFye1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6b29tOjEuMztcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/contact-us/contact-us.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/yesgenie/Pages/contact-us/contact-us.page.ts ***!
  \**************************************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/yesgenie/Pages/services/custom-theme.service.ts");
/* harmony import */ var src_app_share_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share.service */ "./src/app/share.service.ts");








var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(services, service, menuCtrl, shared, config, translate, nav) {
        this.services = services;
        this.service = service;
        this.menuCtrl = menuCtrl;
        this.shared = shared;
        this.config = config;
        this.nav = nav;
        this.itemColor = [];
        this.iconColorVar = "";
        this.contact = {
            name: '',
            email: '',
            message: ''
        };
        this.errorMessage = '';
        this.itemColor = ["black"]; //to get the coloe from custom-theme service
        this.data = this.service.getTheme(); //to get the selected theme color which is by default set as #F44336
        this.iconColorVar = this.data;
        //for the selection of colors
        if (this.data == "black") //if selected color is black 
         {
            this.itemColor = ["black"];
        }
        else if (this.data == "red") //if selected color is red 
         {
            this.itemColor = ["#F44336"];
        }
        else if (this.data == "green") //if selected color is green 
         {
            this.itemColor = ["#4CAF50"];
        }
        else if (this.data == "blue") //if selected color is blue
         {
            this.itemColor = ["#008577"];
        }
        else if (this.data == "gray") //if selected color is gray
         {
            this.itemColor = ["#9E9E9E"];
        }
    }
    ContactUsPage.prototype.ngOnInit = function () {
    };
    ContactUsPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    ContactUsPage.prototype.goToSearchPage = function () {
        this.nav.navigateForward("bs-search");
    };
    ContactUsPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    ContactUsPage.prototype.ionViewWillEnter = function () {
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    };
    ContactUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.page.html */ "./src/app/yesgenie/Pages/contact-us/contact-us.page.html"),
            styles: [__webpack_require__(/*! ./contact-us.page.scss */ "./src/app/yesgenie/Pages/contact-us/contact-us.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_share_service__WEBPACK_IMPORTED_MODULE_7__["ShareService"], _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_6__["CustomThemeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], ContactUsPage);
    return ContactUsPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-contact-us-contact-us-module.js.map