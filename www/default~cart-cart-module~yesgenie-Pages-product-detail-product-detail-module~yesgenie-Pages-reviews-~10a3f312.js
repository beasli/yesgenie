(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-cart-module~yesgenie-Pages-product-detail-product-detail-module~yesgenie-Pages-reviews-~10a3f312"],{

/***/ "./src/app/share.service.ts":
/*!**********************************!*\
  !*** ./src/app/share.service.ts ***!
  \**********************************/
/*! exports provided: ShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _yes_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./yes-service.service */ "./src/app/yes-service.service.ts");









var ShareService = /** @class */ (function () {
    function ShareService(http, config, storage, events, platform, oneSignal, alertCtrl, toastCtrl, applicationRef, splashScreen) {
        var _this = this;
        this.http = http;
        this.config = config;
        this.storage = storage;
        this.events = events;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.applicationRef = applicationRef;
        this.splashScreen = splashScreen;
        this.banners = [];
        this.tab1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.tab2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.tab3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.tab4 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.tab5 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.vendors = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.allCategories = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.categories = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.subCategories = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.customerData = {};
        this.recentViewedProducts = new Array();
        this.wishListProducts = new Array();
        this.cartProducts = new Array();
        this.couponArray = new Array();
        this.wishList = new Array();
        this.tempdata = {};
        this.dir = "ltr";
        this.selectedFooterPage = "HomePage";
        this.cartTempProducts = [];
        this.translationListArray = [];
        this.billing = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            email: '',
            phone: ''
        };
        this.billingCountryName = "";
        this.billingStateName = "";
        this.shipping = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: ''
        };
        this.shippingCountryName = "";
        this.shippingStateName = "";
        this.shipping_lines = [];
        this.listTaxRates = [];
        this.sameAddress = false;
        this.checkOutPageText = "Place Your Order";
        this.device = '';
        this.attributes = [];
        this.headerHexColor = "#ff9800";
        this.singleProductPageData = [];
        this.storePageData = [];
        this.splashScreenHide = false;
        //Function calcualte the total items of cart
        this.cartTotalItems = function () {
            this.events.publish('cartChange');
            var total = 0;
            for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
                var value = _a[_i];
                total += parseInt(value.quantity);
            }
            this.cartquantity = total;
            // this.applicationRef.tick();
            return total;
        };
        this.http.get('assets/i18n/' + localStorage.languageCode + ".json").subscribe(function (data) {
            _this.translationListArray = data;
            _this.applicationRef.tick();
        });
        events.subscribe('settingsLoaded', function () {
        });
        //getting translation of the 
        this.translateString(this.checkOutPageText).then(function (res) { _this.checkOutPageText = res; });
        //update settings before calling
        //getting recent viewed items from local storage
        storage.get('customerData').then(function (val) {
            if (val != null || val != undefined)
                _this.customerData = val;
        });
        //getting recent viewed items from local storage
        storage.get('recentViewedProducts').then(function (val) {
            if (val != null)
                _this.recentViewedProducts = val;
        });
        //getting cart from local storage
        storage.get('cartProducts').then(function (val) {
            if (val != null)
                _this.cartProducts = val;
            _this.cartTotalItems();
        });
        this.cartTotalItems();
        //getting wishList items from local storage
        storage.get('wishListProducts').then(function (val) {
            if (val != null)
                _this.wishListProducts = val;
            // console.log(val);
        });
        //---------------- end -----------------
    }
    ShareService.prototype.hideSplashScreen = function () {
        if (this.platform.is('cordova')) {
            if (!this.splashScreenHide) {
                this.splashScreen.hide();
                this.splashScreenHide = true;
            }
        }
    };
    ShareService.prototype.removeHtmlEntites = function (value) {
        var multiple = {
            '&nbsp;': ' ',
            '&lt;': '<',
            '&gt;': '>',
            '&amp;': '&',
            '&quot;': '"',
            '&apos;': '\'',
            '&cent;': '¢',
            '&pound;': '£',
            '&yen;': '¥',
            '&euro;': '€',
            '&copy;': '©',
            '&reg;': '®',
            '&#160;': ' ',
            '&#60;': '<',
            '&#62;': '>',
            '&#38;': '&',
            '&#34;': '"',
            '&#39;': '\'',
            '&#162;': '¢',
            '&#163;': '£',
            '&#165;': '¥',
            '&#8364;': '€',
            '&#169;': '©',
            '&#174;': '®',
        };
        for (var char in multiple) {
            var before = char;
            var after = multiple[char];
            var pattern = new RegExp(before, 'g');
            value = value.replace(pattern, after);
        }
        return value;
    };
    //adding into recent array products
    ShareService.prototype.addToRecent = function (p) {
        var found = false;
        for (var _i = 0, _a = this.recentViewedProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.id == p.id) {
                found = true;
            }
        }
        if (found == false) {
            this.recentViewedProducts.push(p);
            this.storage.set('recentViewedProducts', this.recentViewedProducts);
        }
    };
    //removing from recent array products
    ShareService.prototype.removeRecent = function (p) {
        var _this = this;
        this.recentViewedProducts.forEach(function (value, index) {
            if (value.id == p.id) {
                _this.recentViewedProducts.splice(index, 1);
                _this.storage.set('recentViewedProducts', _this.recentViewedProducts);
            }
        });
        this.events.publish('recentDeleted');
    };
    //adding into cart array products
    ShareService.prototype.addToCart = function (product, variation, quantity, metaData) {
        if (!this.checkCart(product, quantity))
            return 0;
        // if (this.alreadyInCart(product, variation, quantity)) return 0;
        var p = {};
        // p.product_id = product.id;
        // p.name = product.name;
        if (quantity == null || quantity == "null")
            p.quantity = 1;
        else {
            p.quantity = quantity;
            console.log(quantity);
            console.log("quantity not null");
        }
        ;
        var seconds = new Date().getTime();
        // p.cart_id = product.id + seconds;
        // p.image = product.images[0].src;
        //console.log(p.image)
        // p.stock_quantity = product.stock_quantity;
        // p.tax_class = product.tax_class;
        // p.tax_status = product.tax_status;
        // p.price = product.price;
        // p.price_html = product.price_html;
        // p.subtotal = parseFloat(product.price) * parseInt(p.quantity);
        // p.total = parseFloat(product.price) * parseInt(p.quantity);
        // p.on_sale = product.on_sale;
        // p.categories = product.categories;
        // if (metaData != null) p.meta_data = metaData;
        // p.sold_individually = product.sold_individually;
        // if (product.type == 'variable' && variation != null) {
        //   p.variation_id = variation.id;
        //   p.price = parseFloat(variation.price) * parseInt(p.quantity);
        //   p.subtotal = parseFloat(variation.price) * parseInt(p.quantity);
        //   p.total = parseFloat(variation.price) * parseInt(p.quantity);
        //   p.name = variation.name;
        //   p.stock_quantity = variation.stock_quantity;
        //   p.tax_status = variation.tax_status;
        //   if (variation.images[0].src.indexOf('placeholder') == -1) {
        //     p.image = variation.images[0].src;
        //     //console.log(variation.images[0].src)
        //   }
        // }
        console.log(p);
        this.cartProducts.push(p);
        this.storage.set('cartProducts', this.cartProducts);
        console.log(this.cartProducts);
        this.cartTotalItems();
        this.applicationRef.tick();
        // console.log(this.cartProducts);
        //console.log(this.cartProducts);
        this.toast("Added To Cart!");
    };
    ShareService.prototype.checkCart = function (p, quantity) {
        var name = null;
        var onlyOneAllowed = true;
        var quantityCheck = true;
        //check for only one item is allowed
        for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.sold_individually == true && p.id == value.product_id) {
                onlyOneAllowed = false;
                name = value.name;
            }
        }
        if (onlyOneAllowed == false)
            this.showAlertWithTitle(name, "Only One Item Allowed");
        //check for product quantity
        if (quantity == null)
            quantity = 1;
        // if (p.stock_quantity == null || p.stock_quantity > quantity) quantityCheck = true;
        // else if (p.stock_quantity < quantity) {
        //   quantityCheck = false;
        //   this.showAlert("Product Quantity is Limited!");
        // }
        if (onlyOneAllowed && quantityCheck)
            return true;
        else
            return false;
    };
    ShareService.prototype.alreadyInCart = function (p, vId, quantity) {
        var count = 0;
        for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            //console.log(value.variation_id + "  " + vId.id + "  " + value.product_id + "  " + p.id);
            if (p.type != 'variable' && value.product_id == p.id) {
                count++;
                value.quantity = parseInt(value.quantity) + parseInt(quantity);
            }
            else if (value.product_id == p.id && value.variation_id == vId.id) {
                count++;
                value.quantity = parseInt(value.quantity) + parseInt(quantity);
            }
        }
        this.storage.set('cartProducts', this.cartProducts);
        this.cartTotalItems();
        if (count != 0)
            return true;
        else
            return false;
    };
    //removing from recent array products
    ShareService.prototype.removeCart = function (p) {
        //console.log(value);
        this.cartProducts = p;
        this.storage.set('cartProducts', this.cartProducts);
        // this.storage.get('cartProducts').then((val) => {
        //   //console.log(val);
        // });
        this.cartTotalItems();
    };
    ShareService.prototype.emptyCart = function () {
        this.cartProducts = [];
        this.storage.set('cartProducts', this.cartProducts);
        this.cartTotalItems();
    };
    ShareService.prototype.emptyRecentViewed = function () {
        this.recentViewedProducts = [];
        this.storage.set('recentViewedProducts', this.recentViewedProducts);
    };
    ShareService.prototype.productsTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            total = total + parseFloat(value.total);
        }
        return total;
    };
    ShareService.prototype.removeWishList = function (p) {
        var _this = this;
        this.wishListProducts.forEach(function (value, index) {
            if (value.item_id == p.item_id) {
                _this.wishListProducts.splice(index, 1);
                _this.storage.set('wishListProducts', _this.wishListProducts);
            }
        });
        this.events.publish('wishListUpdate', p.id, 0);
        this.toast("Removed From Wish List!");
        this.applicationRef.tick();
    };
    ShareService.prototype.addWishList = function (p) {
        this.wishListProducts.push(p);
        this.storage.set('wishListProducts', this.wishListProducts);
        console.log(this.wishListProducts);
        this.events.publish('wishListUpdate', p.id, 1);
        this.toast("Added To Wish List!");
        this.applicationRef.tick();
    };
    ShareService.prototype.login = function (data) {
        console.log(data);
        this.customerData = data;
        this.storage.set('customerData', this.customerData);
        this.events.publish("updateSideMenu");
    };
    ShareService.prototype.logOut = function () {
        this.customerData = {};
        this.storage.set('customerData', this.customerData);
        this.resetData();
        this.events.publish("updateSideMenu");
        // this.fb.logout();
    };
    //============================================================================================
    //getting token and passing to server
    ShareService.prototype.showAd = function () {
        if (this.platform.is('cordova')) {
            this.events.publish('showAd');
        }
    };
    ShareService.prototype.orderComplete = function () {
        this.cartProducts = [];
        this.couponArray = [];
        this.storage.set('cartProducts', []);
        this.shipping_lines = [];
        this.cartTotalItems();
        console.log("order complete");
    };
    // <!-- 2.0 updates -->
    ShareService.prototype.onePageCheckOut = function () {
        var customer_id = 0;
        var token = null;
        var biling = this.billing;
        var shiping = this.shipping;
        if (this.customerData.id != null) {
            customer_id = this.customerData.id;
            token = this.customerData.cookie;
            biling = this.customerData.billing;
            shiping = this.customerData.shipping;
        }
        var data = {
            token: token,
            billing_info: biling,
            shipping_info: shiping,
            products: this.getProducts(),
            //shipping_ids: this.shipping_lines,
            coupons: this.getCoupons(),
            customer_note: "",
            customer_id: customer_id,
            //sameAddress: this.sameAddress
            platform: this.device,
        };
        console.log(data);
    };
    //=================================================================================================================================
    // <!-- 2.0 updates -->
    ShareService.prototype.getProducts = function () {
        var data = [];
        for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
            var v = _a[_i];
            var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString() };
            if (v.variation_id)
                Object.assign(obj, { variation_id: v.variation_id });
            //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
            data.push(obj);
        }
        return data;
    };
    //=================================================================================================================================
    //Object.assign(c, data
    // <!-- 2.0 updates -->
    ShareService.prototype.getCoupons = function () {
        var data = [];
        for (var _i = 0, _a = this.couponArray; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    //=================================================================================================================================
    // <!-- 2.0 updates -->
    ShareService.prototype.getShippingLines = function () {
        var data = [];
        for (var _i = 0, _a = this.shipping_lines; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    ShareService.prototype.resetData = function () {
        this.billing = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            email: '',
            phone: ''
        };
        this.billingCountryName = "";
        this.billingStateName = "";
        this.shipping = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: ''
        };
        this.shippingCountryName = "";
        this.shippingStateName = "";
    };
    ShareService.prototype.toast = function (msg) {
        var _this = this;
        this.translateString(msg).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: res,
                            duration: 2500,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ShareService.prototype.checkAvatar = function () {
        var result = "";
        if (this.customerData.id != null) {
            if (this.customerData.avatar_url.indexOf('693fe9695abfa1fd64191cdd36fdc310') != -1) {
                result = "avatar";
            }
            else if (this.customerData.avatar_url.indexOf('693fe9695abfa1fd64191cdd36fdc310') == -1) {
                result = "image";
            }
        }
        else
            result = "false";
        return result;
    };
    ShareService.prototype.getNameFirstLetter = function () {
        return this.customerData.first_name.charAt(0);
    };
    //categories page
    ShareService.prototype.getCategoriesPageItems = function (parent) {
        var c = [];
        if (parent == undefined)
            c = this.categories;
        else {
            for (var _i = 0, _a = this.allCategories; _i < _a.length; _i++) {
                var v = _a[_i];
                if (v.parent == parent) {
                    c.push(v);
                }
            }
        }
        return c;
    };
    // translation services
    ShareService.prototype.translateString = function (value) {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.translationListArray[value]);
        });
    };
    ShareService.prototype.translateArray = function (value) {
        var _this = this;
        return new Promise(function (resolve) {
            var tempArray = [];
            value.forEach(function (element) {
                if (_this.translationListArray[element] != undefined)
                    tempArray[element] = _this.translationListArray[element];
                else
                    tempArray[element] = element;
            });
            resolve(tempArray);
        });
    };
    //=================================================
    ShareService.prototype.showAlert = function (text) {
        var _this = this;
        this.translateArray([text, "ok", "Alert"]).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(res);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: res["Alert"],
                                message: res[text],
                                buttons: [res["ok"]]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ShareService.prototype.showAlertWithTitle = function (text, title) {
        var _this = this;
        this.translateArray([text, "ok", title]).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: res[title],
                            message: res[text],
                            buttons: [res["ok"]]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ShareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _yes_service_service__WEBPACK_IMPORTED_MODULE_7__["YesServiceService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"]])
    ], ShareService);
    return ShareService;
}());



/***/ })

}]);
//# sourceMappingURL=default~cart-cart-module~yesgenie-Pages-product-detail-product-detail-module~yesgenie-Pages-reviews-~10a3f312.js.map