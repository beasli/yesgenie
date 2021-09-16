import { Component, OnInit } from "@angular/core";

import {
  ModalController,
  NavController,
  LoadingController,
  MenuController,
  ToastController,
} from "@ionic/angular";
import { SelectCountryPage } from "../../select-country/select-country.page";
import { SelectZonesPage } from "../../select-zones/select-zones.page";
import { SharedDataService } from "../../../providers/shared-data/shared-data.service";
import { ConfigService } from "../../../providers/config/config.service";

import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { YesServiceService } from "src/app/yes-service.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-addresses",
  templateUrl: "./addresses.page.html",
  styleUrls: ["./addresses.page.scss"],
})
export class AddressesPage implements OnInit {
  Id: any;
  responseData: any;
  responseDataCity: any;
  userdata: any;
  token: any;
  responseDataAddress: any;
  responseDatainfo: any;
  updatePro: FormGroup;
  shipping_state_user: any;

  constructor(
    public loadingController: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
    public services: YesServiceService,
    public nav: NavController,
    public menuCtrl: MenuController,
    public shared: SharedDataService,
    public config: ConfigService,
    translate: TranslateService,
    public formBuilder: FormBuilder,
    private toastCtrl: ToastController
  ) {
    // setTimeout(()=>{
    //   this.ProUpdate();
    // }, 500);

    const userDetails = localStorage.getItem("userdata");

    this.userdata = JSON.parse(userDetails);

    this.token = this.userdata.token;

    console.log("userdata..", this.userdata);

    this.Personalinfo();
  }

  ngOnInit() {
    this.ProUpdate();
  }

  Personalinfo() {
    const userData = "token=" + this.token;
    console.log(userData);
    this.services.Getpersonalinfo(userData).subscribe(
      (result) => {
        this.responseDatainfo = result.response[0];
        console.log(this.responseDatainfo);
        this.shipping_state_user = this.responseDatainfo.state_id;
        if (this.responseDatainfo.Status === 0) {
          this.presentToast(this.responseDatainfo.Message);
        } else {
          //  console.log(this.responseData);
        }
      },
      (error) => {}
    );
  }

  // async selectCountryPage(value) {
  //   let modal = await this.modalCtrl.create({
  //     component: SelectCountryPage
  //   });
  //   return await modal.present();
  // }

  // async selectZonePage(value) {
  //   let modal = await this.modalCtrl.create({
  //     component: SelectZonesPage
  //   });
  //   return await modal.present();
  // }
  goToCartPage() {
    this.nav.navigateForward("bs-cart");
  }

  async updateAddress() {
    const loadingElement = await this.loadingController.create({
      message: "Please wait...",
      spinner: "crescent",
      duration: 2000,
    });
    return await loadingElement.present();
  }

  ionViewWillEnter() {}

  getallstate(state) {
    this.services.StateByCountry(state).subscribe(
      (result) => {
        this.responseData = result.response;
        if (this.responseData.Status === 0) {
        } else {
          console.log(this.responseData);
        }
      },
      (error) => {}
    );
  }

  Citiesbystate(cit) {
    this.services.Citiesbystate(cit).subscribe(
      (result) => {
        this.responseDataCity = result.response;
        if (this.responseDataCity.Status === 0) {
        } else {
          console.log(this.responseDataCity);
        }
      },
      (error) => {}
    );
  }

  Addnewmultipleshippingaddress() {
    const userData =
      "token=" +
      this.token +
      "&fname=" +
      this.updatePro.get("fname").value +
      "&lname=" +
      this.updatePro.get("lname").value +
      "&phone_number=" +
      this.updatePro.get("phone_number").value +
      "&address=" +
      this.updatePro.get("address").value +
      "&address_2=" +
      this.updatePro.get("address_2").value +
      "&country_id=" +
      this.updatePro.get("country_id").value +
      "&state_id=" +
      this.updatePro.get("state_id").value +
      "&city=" +
      this.updatePro.get("city").value +
      "&zip_code=" +
      this.updatePro.get("zip_code").value;

    console.log(this.updatePro.value);
    
     
      this.services
        .post("addaddress", this.updatePro.value)
        .then((data) => {
        console.log("addaddress..",data);
        })
        .catch((error) => {
          // this.displayErrorMessage(error);
        });
 
    this.updatePro.reset();
    // this.services.Addnewmultipleshippingaddress(userData).subscribe(
    //   (result) => {
    //     this.responseDataAddress = result;
    //     if (this.responseDataAddress === 0) {
    //       this.presentToast(this.responseDataAddress);
    //     } else {
    //       console.log("Added Address..", this.responseDataAddress);
    //       this.presentToast("Address Added Successfully");
    //       // this.events.publish("updateSideMenu");
    //       this.nav.navigateForward("multiple-shipping-address");
    //     }
    //   },
    //   (error) => {}
    // );
  }

  ProUpdate() {
    this.updatePro = this.formBuilder.group({
      // address_detail: ['', Validators.compose([Validators.required])],
      user_id: [this.token, Validators.compose([Validators.required])],
      fname: ["", Validators.compose([Validators.required])],
      lname: ["", Validators.compose([Validators.required])],
      // shipping_email: ['', Validators.compose([Validators.required])],
      phone_number: ["", Validators.compose([Validators.required])],
      address: ["", Validators.compose([Validators.required])],
      address_2: [""],
      country_id: ["", Validators.compose([Validators.required])],
      state_id: ["", Validators.compose([Validators.required])],
      city: ["", Validators.compose([Validators.required])],
      zip_code: ["", Validators.compose([Validators.required])],
    });
  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }
}
