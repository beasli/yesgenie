import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { ConfigService } from '../../providers/config/config.service';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { LocationDataService } from '../../providers/location-data/location-data.service';
import { IonSearchbar, NavParams } from '@ionic/angular';
import { Events } from '@ionic/angular';


@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.page.html',
  styleUrls: ['./select-country.page.scss'],
})
export class SelectCountryPage implements OnInit {

  searchQuery: string = '';
  items;
  countries = new Array;

  constructor(
    public events: Events,
    public menuCtrl: MenuController,
    public nav: NavController,
    public config: ConfigService,
    public modalCtrl: ModalController,
    public shared: SharedDataService,
    public navParams: NavParams,
    public location: LocationDataService) {
    setTimeout(() => {
    }, 5000);
    this.items = this.countries = this.location.data.countries;

  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
  }
  // For Modal Dismiss
  dismiss() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
  }


  selectCountry(c) {
    let page = this.navParams.get('page');
    this.events.publish("countryChange", page, c);
    if (page == 'shipping') {
      this.shared.shippingCountryName = c.name;
      this.shared.shipping.country = c.value;
      this.shared.shipping.state = null;
      this.shared.shipping.city = null;
      this.shared.shipping.postcode = null;
      this.shared.shippingStateName = "";
    }
    else if (page == 'billing') {
      this.shared.billingCountryName = c.name;
      this.shared.billing.country = c.value;
      this.shared.billing.state = null;
      this.shared.billing.city = null;
      this.shared.billing.postcode = null;
      this.shared.billingStateName = "";
    }

    this.dismiss();
  }


}
