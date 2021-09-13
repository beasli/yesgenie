(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-address-pages-multiple-shipping-address-multiple-shipping-address-module"],{

/***/ "./src/app/yesgenie/Pages/address-pages/multiple-shipping-address/multiple-shipping-address.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/multiple-shipping-address/multiple-shipping-address.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: MultipleShippingAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleShippingAddressPageModule", function() { return MultipleShippingAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _multiple_shipping_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./multiple-shipping-address.page */ "./src/app/yesgenie/Pages/address-pages/multiple-shipping-address/multiple-shipping-address.page.ts");







var routes = [
    {
        path: '',
        component: _multiple_shipping_address_page__WEBPACK_IMPORTED_MODULE_6__["MultipleShippingAddressPage"]
    }
];
var MultipleShippingAddressPageModule = /** @class */ (function () {
    function MultipleShippingAddressPageModule() {
    }
    MultipleShippingAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_multiple_shipping_address_page__WEBPACK_IMPORTED_MODULE_6__["MultipleShippingAddressPage"]]
        })
    ], MultipleShippingAddressPageModule);
    return MultipleShippingAddressPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/multiple-shipping-address/multiple-shipping-address.page.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/multiple-shipping-address/multiple-shipping-address.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" routerLink=\"/user-settings\">\n        <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ecom-title\">\n      Multiple Shipping Address\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"opensearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge>{{services.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-row style=\"border-bottom: groove;\">\n    <ion-col col-4>\n    <ion-label ></ion-label>\n  </ion-col>\n  <ion-col col-4>\n    <ion-label ></ion-label>\n  </ion-col>\n    <ion-col col-4>\n    <ion-button style=\"color: white;\" (click)=\"AddNewAdress()\">Add New</ion-button>\n  </ion-col>\n</ion-row>\n\n\n  <ion-row style=\"border-bottom: groove; background: #021841;\">\n    <ion-col col-6 style=\"left: 5px;\">\n    <ion-label style=\"color: white;\">Address Location</ion-label>\n  </ion-col>\n  <!-- <ion-col col-4>\n    <ion-label style=\"color: white;\">Contact</ion-label>\n  </ion-col> -->\n    <ion-col col-6>\n    <ion-label style=\"color: white;\">Edit</ion-label>\n  </ion-col>\n</ion-row>\n\n<ion-row style=\"border-bottom: groove;\" *ngFor=\"let a of resMultipleAdd\">\n    <ion-col col-6>\n    <ion-label>{{a.address_detail}}</ion-label>\n  </ion-col>\n  <!-- <ion-col col-4>\n    <ion-label>{{a.shipping_phone_number}}</ion-label>\n  </ion-col> -->\n    <ion-col col-6>\n    <ion-button (click)=\"onClickDetails(a.id)\">Edit</ion-button>\n    <ion-button (click)=\"presentAlertPrompt(a.id, a.address_detail)\">Delete</ion-button>\n  </ion-col>\n</ion-row>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/multiple-shipping-address/multiple-shipping-address.page.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/multiple-shipping-address/multiple-shipping-address.page.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL2FkZHJlc3MtcGFnZXMvbXVsdGlwbGUtc2hpcHBpbmctYWRkcmVzcy9tdWx0aXBsZS1zaGlwcGluZy1hZGRyZXNzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/multiple-shipping-address/multiple-shipping-address.page.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/multiple-shipping-address/multiple-shipping-address.page.ts ***!
  \**********************************************************************************************************/
/*! exports provided: MultipleShippingAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleShippingAddressPage", function() { return MultipleShippingAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../search/search.page */ "./src/app/yesgenie/Pages/search/search.page.ts");












var MultipleShippingAddressPage = /** @class */ (function () {
    function MultipleShippingAddressPage(shared, modalCtrl, config, nav, storage, loadingController, router, route, services, menuCtrl, translate, toastCtrl, formBuilder, events, alertController) {
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.nav = nav;
        this.storage = storage;
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.services = services;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.events = events;
        this.alertController = alertController;
        var userDetails = localStorage.getItem('userdata');
        this.userdata = JSON.parse(userDetails);
        this.token = this.userdata.token;
        console.log(this.token);
    }
    MultipleShippingAddressPage.prototype.ngOnInit = function () {
    };
    MultipleShippingAddressPage.prototype.ionViewWillEnter = function () {
        this.Getmultipleshippingaddress();
    };
    MultipleShippingAddressPage.prototype.Getmultipleshippingaddress = function () {
        var _this = this;
        var userData = {
            token: this.token,
        };
        console.log(userData);
        this.services.Getmultipleshippingaddress(userData).then(function (result) {
            _this.responseAddress = result;
            _this.resMultipleAdd = _this.responseAddress.response.shipping_address;
            console.log(_this.responseAddress);
        }, function (error) {
        });
    };
    MultipleShippingAddressPage.prototype.Deletemultipleshippingaddress = function (id) {
        var _this = this;
        var userData = 'token=' + this.token + '&id=' + id;
        console.log(userData);
        this.services.Deletemultipleshippingaddress(userData).subscribe(function (result) {
            _this.responseDeleteAddress = result;
            _this.Getmultipleshippingaddress();
            //this.resMultipleAdd = this.responseAddress.response.shipping_address;
            console.log(_this.responseDeleteAddress);
            _this.presentToast('Address Deleted Successfully');
        }, function (error) {
        });
    };
    MultipleShippingAddressPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MultipleShippingAddressPage.prototype.presentAlertPrompt = function (id, address) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Are You Sure ? You want to delete ' + address + ' Address',
                            // inputs: [
                            //           // input date with min nor max
                            //   {
                            //     name: 'date',
                            //     type: 'date',
                            //     min: this.minDate,
                            //     max: this.maxDate,
                            //   },
                            // ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel', address);
                                        //  this.utilProvider.showToast('No Data', 'danger', 'bottom');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        _this.Deletemultipleshippingaddress(id);
                                        //  this.utilProvider.showToast(JSON.stringify(data), 'success', 'bottom');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MultipleShippingAddressPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    MultipleShippingAddressPage.prototype.AddNewAdress = function () {
        this.nav.navigateForward("bs-addresses");
    };
    MultipleShippingAddressPage.prototype.opensearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _search_search_page__WEBPACK_IMPORTED_MODULE_10__["SearchPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MultipleShippingAddressPage.prototype.onClickDetails = function (id) {
        this.router.navigate(['/update-shipping-address', { id: id }]);
    };
    MultipleShippingAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multiple-shipping-address',
            template: __webpack_require__(/*! ./multiple-shipping-address.page.html */ "./src/app/yesgenie/Pages/address-pages/multiple-shipping-address/multiple-shipping-address.page.html"),
            styles: [__webpack_require__(/*! ./multiple-shipping-address.page.scss */ "./src/app/yesgenie/Pages/address-pages/multiple-shipping-address/multiple-shipping-address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_7__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], MultipleShippingAddressPage);
    return MultipleShippingAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-address-pages-multiple-shipping-address-multiple-shipping-address-module.js.map