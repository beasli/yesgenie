(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-address-pages-shipping-address-shipping-address-module"],{

/***/ "./src/app/yesgenie/Pages/address-pages/shipping-address/shipping-address.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/shipping-address/shipping-address.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ShippingAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressPageModule", function() { return ShippingAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shipping_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipping-address.page */ "./src/app/yesgenie/Pages/address-pages/shipping-address/shipping-address.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");







// For Translation Language

var routes = [
    {
        path: '',
        component: _shipping_address_page__WEBPACK_IMPORTED_MODULE_6__["ShippingAddressPage"]
    }
];
var ShippingAddressPageModule = /** @class */ (function () {
    function ShippingAddressPageModule() {
    }
    ShippingAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ],
            declarations: [_shipping_address_page__WEBPACK_IMPORTED_MODULE_6__["ShippingAddressPage"]]
        })
    ], ShippingAddressPageModule);
    return ShippingAddressPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/shipping-address/shipping-address.page.html":
/*!******************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/shipping-address/shipping-address.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"goToCart()\">\n        <ion-icon class=\"back-icon\" slot=\"icon-only\" src='assets/back.svg'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ecom-title\"> {{'Shipping Address'| translate }} </ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"showLoading()\">\n        <ion-icon slot=\"icon-only\" src=\"assets/custom-icon-tc-shop/indicator.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n\n\n  <ion-item class=\"itemaddress\">\n    <ion-label position=\"floating\">Select Address</ion-label>\n    <ion-select class=\"seloption ionselectborder\" (ionChange)=\"Getshippingaddressbyid($event.detail.value)\">\n      <ion-select-option *ngFor=\"let a of resMultipleAdd\" value={{a.id}}>{{a.address_detail}}</ion-select-option>\n    </ion-select> \n  </ion-item>\n\n       <p>Shipping Address</p>\n\n  <form class=\"form\" [formGroup]=\"updatePro\">\n\n    <ion-item>\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input formControlName=\"shipping_first_name\" type=\"text\" value={{responseDatainfo?.username}}></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n      <ion-input formControlName=\"shipping_last_name\" type=\"text\" name=\"shipping_lastname\" value={{responseDatainfo?.shipping_last_name}} ></ion-input>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input formControlName=\"shipping_email\" type=\"text\" value={{responseDatainfo?.email}} ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Phone</ion-label>\n      <ion-input formControlName=\"shipping_phone_number\" type=\"text\" value={{responseDatainfo?.phone_number}} ></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label position=\"floating\">{{'Compnay'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"company\" value={{responseDatainfo?.username}} required></ion-input>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Address'|translate}} 1</ion-label>\n      <ion-input formControlName=\"shipping_address_1\" type=\"text\" value={{responseDatainfo?.shipping_address_1}} ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Address'|translate}} 2</ion-label>\n      <ion-input formControlName=\"shipping_address_2\" type=\"text\" value={{responseDatainfo?.shipping_address_2}} ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Country'|translate}}</ion-label>\n      <ion-select formControlName=\"shipping_country_id\" value={{responseDatainfo?.shipping_country_id}} class=\"seloption ionselectborder\">\n        <ion-select-option value=\"India\">India</ion-select-option>\n      </ion-select> \n    </ion-item>\n\n    <ion-item>\n       <ion-label position=\"floating\">{{'State'|translate}}</ion-label>\n      <!-- <ion-input formControlName=\"shipping_state\" type=\"text\" value={{responseDatainfo?.shipping_state}} ></ion-input> -->\n\n      <ion-select formControlName=\"shipping_state\" value={{responseDatainfo?.shipping_state}} class=\"seloption ionselectborder\">\n        <ion-select-option value=\"delhi\">Delhi</ion-select-option>\n        <ion-select-option value=\"haryana\">Haryana</ion-select-option>\n        <ion-select-option value=\"UP\">Uttar Pradesh</ion-select-option>\n      </ion-select> \n         </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Place</ion-label>\n       <ion-input formControlName=\"shipping_city\" type=\"text\" value={{responseDatainfo?.shipping_city}} ></ion-input>\n       </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Post code'|translate}}</ion-label>\n      <ion-input formControlName=\"shipping_zip_code\" type=\"text\" value={{responseDatainfo?.shipping_zip_code}} ></ion-input>\n    </ion-item>\n\n   </form>\n\n\n\n\n<div id=\"medibp\">\n  <p>Billing Address</p>\n\n\n   <form class=\"form\">\n\n    <ion-item>\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input name=\"shipping_firstname\" type=\"text\" [(ngModel)]=\"billing.shipping_first_name\" required ></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n      <ion-input formControlName=\"shipping_last_name\" type=\"text\" name=\"shipping_lastname\" value={{responseDatainfo?.shipping_last_name}} ></ion-input>\n    </ion-item> -->\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" name=\"shipping_firstname\" [(ngModel)]=\"billing.shipping_email\" required ></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Phone</ion-label>\n      <ion-input name=\"shipping_firstname\" type=\"text\" [(ngModel)]=\"billing.shipping_phone_number\" required></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label position=\"floating\">{{'Compnay'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"company\" value={{responseDatainfo?.username}} required></ion-input>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Address'|translate}} 1</ion-label>\n      <ion-input type=\"text\" name=\"shipping_firstname\" [(ngModel)]=\"billing.shipping_address_1\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Address'|translate}} 2</ion-label>\n      <ion-input type=\"text\" name=\"shipping_firstname\" [(ngModel)]=\"billing.shipping_address_2\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Country'|translate}}</ion-label>\n      <ion-select [(ngModel)]=\"billing.shipping_country_id\" name=\"shipping_firstname\" class=\"seloption ionselectborder\" required>\n        <ion-select-option value=\"101\">India</ion-select-option>\n       </ion-select> \n       <!-- <ion-input formControlName=\"shipping_country_id\" type=\"text\" value=\"India\" readonly></ion-input> -->\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'State'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_firstname\" [(ngModel)]=\"billing.shipping_state\" required></ion-input> \n       <!-- <ion-input formControlName=\"shipping_state\" type=\"text\" value=\"Delhi\" readonly></ion-input> -->\n         </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Place</ion-label>\n       <ion-input type=\"text\" name=\"shipping_firstname\" [(ngModel)]=\"billing.shipping_city\" required ></ion-input>\n       </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Post code'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_firstname\" [(ngModel)]=\"billing.shipping_zip_code\" required ></ion-input>\n    </ion-item>\n\n   </form>\n\n  </div>\n\n\n   </ion-content>\n \n   <ion-footer>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-checkbox [(ngModel)]=\"checkboxes\" (ionChange)=\"FillBilling(checkboxes)\"></ion-checkbox>\n      </ion-col>\n  \n      <ion-col size=\"10\">\n        Use same address for billing address    \n      </ion-col>\n      </ion-row>\n\n    <ion-item class=\"itemaddress\">\n      <ion-label position=\"floating\">Choose Time Slot for Delivery*</ion-label>\n      <ion-select class=\"seloption ionselectborder\" value=\"1\">\n        <ion-select-option value=\"1\">One business day</ion-select-option>\n      </ion-select>\n     </ion-item>\n\n\n   <ion-button color=\"secondary\" expand=\"full\" type=\"submit\" [disabled]=\"!updatePro.valid\" (click)=\"UpdateShippingAddress()\">\n    {{'Next'|translate}}\n   </ion-button>\n   </ion-footer>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/shipping-address/shipping-address.page.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/shipping-address/shipping-address.page.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 16px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 20px;\n    color: white; }\n  ion-header ion-title {\n  padding-left: 0 !important; }\n  ion-content ion-button {\n  margin: 0; }\n  ion-content p {\n  font-size: 20px;\n  text-align: center;\n  padding-top: 16px; }\n  ion-content form {\n  padding-left: 16px;\n  padding-right: 16px; }\n  ion-content form ion-item {\n    --padding-start: 0; }\n  ion-content form ion-item ion-label {\n      color: gray; }\n  ion-footer ion-button {\n  margin: 0;\n  --color: white; }\n  .back-icon {\n  font-size: 16px !important; }\n  .itemaddress {\n  border: solid 2px #1f699c;\n  margin: 20px 15px 20px 15px; }\n  .bpsh {\n  display: none; }\n  ion-footer {\n  --ion-color-secondary: #008000 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9hZGRyZXNzLXBhZ2VzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxhQUFRLEVBQUE7RUFIaEI7SUFNWSxlQUFlLEVBQUE7RUFOM0I7SUFVZ0IsZUFBZTtJQUNmLFlBQVksRUFBQTtFQVg1QjtFQWdCUSwwQkFBMEIsRUFBQTtFQUdsQztFQUVRLFNBQVMsRUFBQTtFQUZqQjtFQUtRLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7RUFQekI7RUFVUSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7RUFYM0I7SUFhWSxrQkFBZ0IsRUFBQTtFQWI1QjtNQWVnQixXQUFXLEVBQUE7RUFLM0I7RUFFUSxTQUFTO0VBRVQsY0FBUSxFQUFBO0VBR2hCO0VBQ0ksMEJBQTBCLEVBQUE7RUFHOUI7RUFDSSx5QkFBeUI7RUFDekIsMkJBQTJCLEVBQUE7RUFHL0I7RUFDSSxhQUFhLEVBQUE7RUFJZjtFQUNFLHlDQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvYWRkcmVzcy1wYWdlcy9zaGlwcGluZy1hZGRyZXNzL3NoaXBwaW5nLWFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgLS1jb2xvcjp3aGl0ZTtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b25ze1xuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tdGl0bGV7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbmlvbi1jb250ZW50e1xuICAgIGlvbi1idXR0b257XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIH1cbiAgICBmb3Jte1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWZvb3RlcntcbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cbi5iYWNrLWljb257XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtYWRkcmVzc3tcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMWY2OTljO1xuICAgIG1hcmdpbjogMjBweCAxNXB4IDIwcHggMTVweDtcbn1cblxuLmJwc2gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuXG4gIGlvbi1mb290ZXJ7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjMDA4MDAwICFpbXBvcnRhbnQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/shipping-address/shipping-address.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/shipping-address/shipping-address.page.ts ***!
  \****************************************************************************************/
/*! exports provided: ShippingAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressPage", function() { return ShippingAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../select-country/select-country.page */ "./src/app/yesgenie/Pages/select-country/select-country.page.ts");
/* harmony import */ var _select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../select-zones/select-zones.page */ "./src/app/yesgenie/Pages/select-zones/select-zones.page.ts");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");













var ShippingAddressPage = /** @class */ (function () {
    function ShippingAddressPage(shared, modalCtrl, config, nav, storage, loadingController, router, route, services, menuCtrl, translate, toastCtrl, formBuilder, events, applicationRef) {
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
        this.applicationRef = applicationRef;
        // Checkboxes: any;
        this.checkboxes = true;
        this.billing = {
            shipping_first_name: '',
            shipping_email: '',
            shipping_phone_number: '',
            shipping_address_1: '',
            shipping_address_2: '',
            shipping_country_id: '',
            shipping_state: '',
            shipping_city: '',
            shipping_zip_code: '',
        };
        this.shippingCountryName = "";
        this.shippingStateName = "";
        var userDetails = localStorage.getItem('userdata');
        this.userdata = JSON.parse(userDetails);
        this.token = this.userdata.token;
        console.log(this.token);
        // this.Checkboxes = [
        //   {
        //     value: "Captain Marvel",
        //     isItemChecked: true
        //   }, {
        //     value: "Thor",
        //     isItemChecked: false
        //   }
        // ]
    }
    ShippingAddressPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Getmultipleshippingaddress();
        setTimeout(function () {
            _this.Personalinfo();
        }, 500);
        setTimeout(function () {
            _this.FillBilling(_this.checkboxes);
        }, 1000);
    };
    ShippingAddressPage.prototype.ngOnInit = function () {
        this.ProUpdate();
    };
    ShippingAddressPage.prototype.Getmultipleshippingaddress = function () {
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
    ShippingAddressPage.prototype.Getshippingaddressbyid = function (id) {
        var _this = this;
        var userData = 'token=' + this.token + '&id=' + id;
        console.log(userData);
        this.services.Getshippingaddressbyid(userData).subscribe(function (result) {
            _this.responseDatainfo = result.response.shipping_address[0];
            //   this.resMultipleAdd = this.responseAddress.response.shipping_address;
            console.log(_this.responseDatainfo);
            setTimeout(function () {
                _this.FillBilling(_this.checkboxes);
            }, 1000);
        }, function (error) {
        });
    };
    ShippingAddressPage.prototype.changingCart = function () {
        this.products = this.services.cartProducts;
        console.log(this.products);
        // this.shared.couponArray.forEach((value) => {
        //   this.products = this.couponProvider.apply(value, this.shared.cartProducts);
        // });
        this.totalPrice();
        this.applicationRef.tick();
    };
    ShippingAddressPage.prototype.totalPrice = function () {
        var _this = this;
        var price = 0;
        var subPrice = 0;
        var ShipingCost = 0;
        var totalcaltax = 0;
        console.log(this.products);
        var _loop_1 = function (value) {
            subPrice = subPrice + value.product_total_price;
            price = price + value.product_total_price;
            ShipingCost = ShipingCost + value.product_shipping_cost;
            this_1.productid = value.product_id;
            this_1.thirdcategoryid = value.third_category_id;
            this_1.subcategoryid = value.subcategory_id;
            this_1.categoryid = value.category_id;
            this_1.sellerid = value.seller_id;
            this_1.unitprice = value.product_price;
            this_1.saleprice = value.product_sale_price;
            this_1.product_quantity = value.product_quantity;
            //  const shipping_state = value
            this_1.vendorstate = value.vender_state_id;
            var userData = 'product_id=' + this_1.productid + '&third_category_id=' + this_1.thirdcategoryid + '&subcategory_id=' + this_1.subcategoryid + '&category_id=' + this_1.categoryid +
                '&seller_id=' + this_1.sellerid + '&unit_price=' + this_1.unitprice + '&sale_price=' + this_1.saleprice + '&quantity=' + this_1.product_quantity + '&shipping_state=' + this_1.shipping_state_user + '&vendor_state=' + this_1.vendorstate;
            console.log(userData);
            this_1.services.Calculatetax(userData).subscribe(function (result) {
                _this.responseDatatax = result.response.tax_data;
                console.log(_this.responseDatatax);
                value["igst_tax_rate"] = _this.responseDatatax.igst_tax_rate;
                value["igst_tax_amount"] = _this.responseDatatax.igst_tax_amount;
                value["cgst_tax_rate"] = _this.responseDatatax.cgst_tax_rate;
                value["cgst_tax_amount"] = _this.responseDatatax.cgst_tax_amount;
                value["sgst_tax_rate"] = _this.responseDatatax.sgst_tax_rate;
                value["sgst_tax_amount"] = _this.responseDatatax.sgst_tax_amount;
                if (_this.responseDatatax.cgst_tax_amount == '') {
                    _this.responseDatatax.cgst_tax_amount = 0;
                }
                if (_this.responseDatatax.igst_tax_amount == '') {
                    _this.responseDatatax.igst_tax_amount = 0;
                }
                if (_this.responseDatatax.sgst_tax_amount == '') {
                    _this.responseDatatax.sgst_tax_amount = 0;
                }
                totalcaltax = totalcaltax + parseFloat(_this.responseDatatax.cgst_tax_amount) + parseFloat(_this.responseDatatax.igst_tax_amount) + parseFloat(_this.responseDatatax.sgst_tax_amount);
                console.log(totalcaltax);
                _this.storage.set('totalprotax', totalcaltax);
                // this.presentToast('Your order has been placed successfully'); 
            }, function (error) {
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var value = _a[_i];
            _loop_1(value);
        }
        this.CalAllShipingcost = ShipingCost;
        this.product_total_price = price;
        this.storage.get('totalpriceafterdisc').then(function (val) {
            _this.CalAllPrice = val;
            _this.totalAfterDiscShiping = parseFloat(_this.CalAllShipingcost) + parseFloat(_this.CalAllPrice);
            console.log(_this.CalAllPrice);
        });
        //  this.subtotal = subPrice;
        // this.CalAllPrice = parseFloat(this.CalAllPrice) + this.CalAllShipingcost;
        // console.log(price);
    };
    ShippingAddressPage.prototype.selectCountryPage = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_3__["SelectCountryPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ShippingAddressPage.prototype.selectZonePage = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_4__["SelectZonesPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ShippingAddressPage.prototype.goToBillingAddress = function () {
        this.nav.navigateForward("bs-billing-address");
    };
    ShippingAddressPage.prototype.goToCart = function () {
        this.nav.navigateForward("bs-cart");
    };
    ShippingAddressPage.prototype.showLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please Wait...',
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
    ShippingAddressPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    ShippingAddressPage.prototype.UpdateShippingAddress = function () {
        var _this = this;
        if (this.checkboxes == true) {
            this.FillBilling(this.checkboxes);
        }
        if (this.billing.shipping_first_name == "") {
            alert("Please Add Billing Address");
            return false;
        }
        if (this.billing.shipping_email == "") {
            alert("Please Add Billing Address");
            return false;
        }
        if (this.billing.shipping_phone_number == "") {
            alert("Please Add Billing Address");
            return false;
        }
        if (this.billing.shipping_address_1 == "") {
            alert("Please Add Billing Address");
            return false;
        }
        if (this.billing.shipping_country_id == "") {
            alert("Please Add Billing Address");
            return false;
        }
        if (this.billing.shipping_state == "") {
            alert("Please Add Billing Address");
            return false;
        }
        if (this.billing.shipping_city == "") {
            alert("Please Add Billing Address");
            return false;
        }
        if (this.billing.shipping_zip_code == "") {
            alert("Please Add Billing Address");
            return false;
        }
        var userData = 'token=' + this.token + '&shipping_first_name=' + this.updatePro.get('shipping_first_name').value + '&shipping_email=' + this.updatePro.get('shipping_email').value
            + '&shipping_phone_number=' + this.updatePro.get('shipping_phone_number').value + '&shipping_address_1=' + this.updatePro.get('shipping_address_1').value + '&shipping_address_2=' + this.updatePro.get('shipping_address_2').value
            + '&shipping_country_id=' + this.updatePro.get('shipping_country_id').value + '&shipping_state=' + this.updatePro.get('shipping_state').value + '&shipping_city=' + this.updatePro.get('shipping_city').value + '&shipping_zip_code=' + this.updatePro.get('shipping_zip_code').value;
        this.shipping_state_user = this.updatePro.get('shipping_state').value;
        console.log(userData);
        this.services.Updateshippingaddress(userData).subscribe(function (result) {
            _this.responseData1 = result.response;
            if (_this.responseData1.status == 0) {
                _this.presentToast(_this.responseData1.Message);
            }
            else {
                console.log(_this.responseData1);
                _this.changingCart();
                localStorage.setItem('BillingAddress', JSON.stringify(_this.billing));
                // this.presentToast('User successfully registered');
                // this.events.publish("updateSideMenu");
                _this.nav.navigateForward("bs-order");
            }
        }, function (error) {
        });
    };
    ShippingAddressPage.prototype.ProUpdate = function () {
        this.updatePro = this.formBuilder.group({
            shipping_first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])],
            // shipping_last_name: ['', Validators.compose([Validators.required])],
            shipping_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])],
            shipping_phone_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])],
            shipping_address_1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])],
            shipping_address_2: [''],
            shipping_country_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])],
            shipping_state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])],
            shipping_city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])],
            shipping_zip_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])],
        });
    };
    ShippingAddressPage.prototype.FillBilling = function (f) {
        if (f == true) {
            this.billing = {
                shipping_first_name: this.updatePro.get('shipping_first_name').value,
                shipping_email: this.updatePro.get('shipping_email').value,
                shipping_phone_number: this.updatePro.get('shipping_phone_number').value,
                shipping_address_1: this.updatePro.get('shipping_address_1').value,
                shipping_address_2: this.updatePro.get('shipping_address_2').value,
                shipping_country_id: this.updatePro.get('shipping_country_id').value,
                shipping_state: this.updatePro.get('shipping_state').value,
                shipping_city: this.updatePro.get('shipping_city').value,
                shipping_zip_code: this.updatePro.get('shipping_zip_code').value,
            };
            console.log('same billing address');
            var element = document.getElementById("medibp");
            element.classList.add("bpsh");
            console.log(this.billing);
            localStorage.setItem('BillingAddress', JSON.stringify(this.billing));
        }
        if (f == false) {
            console.log('diffrent billing address');
            var element = document.getElementById("medibp");
            element.classList.remove("bpsh");
            this.billing = {
                shipping_first_name: '',
                shipping_email: '',
                shipping_phone_number: '',
                shipping_address_1: '',
                shipping_address_2: '',
                shipping_country_id: '',
                shipping_state: '',
                shipping_city: '',
                shipping_zip_code: '',
            };
            console.log(this.billing);
            localStorage.setItem('BillingAddress', JSON.stringify(this.billing));
        }
    };
    ShippingAddressPage.prototype.presentToast = function (msg) {
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
    ShippingAddressPage.prototype.Personalinfo = function () {
        var _this = this;
        var userData = 'token=' + this.token;
        console.log(userData);
        this.services.Getpersonalinfo(userData).subscribe(function (result) {
            _this.responseDatainfo = result.response[0];
            console.log(_this.responseDatainfo);
            _this.shipping_state_user = _this.responseDatainfo.shipping_state;
            if (_this.responseDatainfo.Status === 0) {
                _this.presentToast(_this.responseDatainfo.Message);
            }
            else {
                //  console.log(this.responseData);
            }
        }, function (error) {
        });
    };
    ShippingAddressPage.prototype.getallstate = function (state) {
        var _this = this;
        this.services.StateByCountry(state).subscribe(function (result) {
            _this.responseData = result.response;
            if (_this.responseData.Status === 0) {
            }
            else {
                console.log(_this.responseData);
            }
        }, function (error) {
        });
    };
    ShippingAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shipping-address',
            template: __webpack_require__(/*! ./shipping-address.page.html */ "./src/app/yesgenie/Pages/address-pages/shipping-address/shipping-address.page.html"),
            styles: [__webpack_require__(/*! ./shipping-address.page.scss */ "./src/app/yesgenie/Pages/address-pages/shipping-address/shipping-address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_9__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
    ], ShippingAddressPage);
    return ShippingAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-address-pages-shipping-address-shipping-address-module.js.map