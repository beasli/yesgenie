(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-add-review-add-review-module"],{

/***/ "./src/app/yesgenie/Pages/add-review/add-review.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/yesgenie/Pages/add-review/add-review.module.ts ***!
  \****************************************************************/
/*! exports provided: AddReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPageModule", function() { return AddReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-review.page */ "./src/app/yesgenie/Pages/add-review/add-review.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _add_review_page__WEBPACK_IMPORTED_MODULE_6__["AddReviewPage"]
    }
];
var AddReviewPageModule = /** @class */ (function () {
    function AddReviewPageModule() {
    }
    AddReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ],
            declarations: [_add_review_page__WEBPACK_IMPORTED_MODULE_6__["AddReviewPage"]]
        })
    ], AddReviewPageModule);
    return AddReviewPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/add-review/add-review.page.html":
/*!****************************************************************!*\
  !*** ./src/app/yesgenie/Pages/add-review/add-review.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"goToproductDetail()\">\n        <ion-icon slot=\"icon-only\" src='assets/back.svg'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ecom-title\">{{'Write a review'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" no-padding class=\"content\">\n  <h4>{{'Comment about this product'|translate}}</h4>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <ion-col size=\"3.6\" no-padding style=\"padding: 14px 0px;\">\n        <h5>{{'Your Rating:'|translate}}</h5>\n      </ion-col>\n      <ion-col size=\"1\" *ngFor=\"let s of ratingStars\" align-self-end>\n        <ion-icon [name]=\"s.fill\" (click)=\"selectRating(s.value)\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <form  class=\"form\" [formGroup]=\"addrating\">\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"{{'Name'|translate}}\" name=\"name\" value={{userdata?.username}} readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"{{'Email'|translate}}\" name=\"email\" value={{userdata?.email}}  readonly></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-textarea rows=\"17\" placeholder=\"Enter a description\" formControlName=\"review\"></ion-textarea>\n    </ion-item>\n  <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!addrating.valid\" (click)=\"Addproductreviews()\">\n    {{ 'Post Comment' | translate }}\n  </ion-button>\n</form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/add-review/add-review.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/yesgenie/Pages/add-review/add-review.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 16px; }\n  ion-content h4 {\n  padding-left: 10px; }\n  ion-content ion-grid ion-row ion-col h5 {\n  padding-left: 10px; }\n  ion-content ion-grid ion-row ion-col ion-icon {\n  zoom: 1.9;\n  color: #d9d027; }\n  ion-content form ion-item {\n  --background: #fafafa; }\n  ion-content ion-button {\n  --color: white;\n  width: 100%;\n  margin: 0;\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9hZGQtcmV2aWV3L2FkZC1yZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBUSxFQUFBO0VBRlo7SUFLSSxlQUFlLEVBQUE7RUFLZjtFQUVBLGtCQUFpQixFQUFBO0VBRmpCO0VBUUEsa0JBQWlCLEVBQUE7RUFSakI7RUFXQSxTQUFRO0VBQ1IsY0FBYSxFQUFBO0VBWmI7RUFtQkEscUJBQWEsRUFBQTtFQW5CYjtFQXVCQSxjQUFRO0VBQ1IsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9hZGQtcmV2aWV3L2FkZC1yZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAtLWNvbG9yOndoaXRlO1xuICAgIGlvbi1idXR0b25ze1xuICAgIGlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgfVxuICAgIH1cbiAgICB9XG4gICAgaW9uLWNvbnRlbnR7XG4gICAgaDR7XG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgfVxuICAgIGlvbi1ncmlke1xuICAgIGlvbi1yb3d7XG4gICAgaW9uLWNvbHtcbiAgICBoNXtcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgICB9XG4gICAgaW9uLWljb257XG4gICAgem9vbToxLjk7XG4gICAgY29sb3I6I2Q5ZDAyNztcbiAgICB9XG4gICAgfVxuICAgIH1cbiAgICB9XG4gICAgZm9ybXtcbiAgICBpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgfVxuICAgIH1cbiAgICBpb24tYnV0dG9ue1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/add-review/add-review.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/yesgenie/Pages/add-review/add-review.page.ts ***!
  \**************************************************************/
/*! exports provided: AddReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPage", function() { return AddReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var AddReviewPage = /** @class */ (function () {
    function AddReviewPage(menuCtrl, mdCtrl, config, translate, nav, applicationRef, navCtrl, services, toastCtrl, formBuilder, route) {
        this.menuCtrl = menuCtrl;
        this.mdCtrl = mdCtrl;
        this.config = config;
        this.translate = translate;
        this.nav = nav;
        this.applicationRef = applicationRef;
        this.navCtrl = navCtrl;
        this.services = services;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.route = route;
        // For Rating Star Icons
        this.ratingStars = [
            { value: '1', fill: 'star-outline' },
            { value: '2', fill: 'star-outline' },
            { value: '3', fill: 'star-outline' },
            { value: '4', fill: 'star-outline' },
            { value: '5', fill: 'star-outline' }
        ];
        this.formData = { name: '', email: '', description: '' };
    }
    AddReviewPage.prototype.ngOnInit = function () {
        this.productreview();
    };
    AddReviewPage.prototype.goToproductDetail = function () {
        this.nav.navigateForward("tabs/bs-home");
    };
    AddReviewPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    AddReviewPage.prototype.ionViewWillEnter = function () {
        var userDetails = localStorage.getItem('userdata');
        this.userdata = JSON.parse(userDetails);
        this.token = this.userdata.token;
        console.log(this.token);
        this.Id = this.route.snapshot.paramMap.get('id');
        console.log(JSON.parse(this.Id));
    };
    AddReviewPage.prototype.selectRating = function (value) {
        this.rating = value;
        for (var _i = 0, _a = this.ratingStars; _i < _a.length; _i++) {
            var v = _a[_i];
            if (v.value <= value)
                v.fill = 'star';
            else
                v.fill = 'star-outline';
        }
        this.applicationRef.tick();
    };
    AddReviewPage.prototype.Addproductreviews = function () {
        var _this = this;
        var userData = 'token=' + this.token + "&product_id=" + this.Id + '&rating=' + this.rating + '&review=' + this.addrating.get('review').value;
        console.log(userData);
        this.services.Addproductreviews(userData).subscribe(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            _this.presentToast("Product Reviews Added Successfully");
            _this.nav.navigateForward("tabs/bs-home");
        }, function (error) {
        });
    };
    AddReviewPage.prototype.productreview = function () {
        this.addrating = this.formBuilder.group({
            //  search_type: ['', Validators.compose([Validators.required])],
            review: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
        });
    };
    AddReviewPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000,
                            position: "middle",
                            color: "primary"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-review',
            template: __webpack_require__(/*! ./add-review.page.html */ "./src/app/yesgenie/Pages/add-review/add-review.page.html"),
            styles: [__webpack_require__(/*! ./add-review.page.scss */ "./src/app/yesgenie/Pages/add-review/add-review.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__["YesServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], AddReviewPage);
    return AddReviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-add-review-add-review-module.js.map