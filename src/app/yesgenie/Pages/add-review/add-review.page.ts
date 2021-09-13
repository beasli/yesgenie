import { Component, OnInit, ApplicationRef } from '@angular/core';
import { ModalController, NavController, MenuController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../providers/config/config.service';
import { YesServiceService } from 'src/app/yes-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.page.html',
  styleUrls: ['./add-review.page.scss'],
})
export class AddReviewPage implements OnInit {


    addrating: FormGroup;

    Id: any;


  // For Rating Star Icons
  ratingStars = [
    { value: '1', fill: 'star-outline' },
    { value: '2', fill: 'star-outline' },
    { value: '3', fill: 'star-outline' },
    { value: '4', fill: 'star-outline' },
    { value: '5', fill: 'star-outline' }
  ];

  responseData: any;

  formData = { name: '', email: '', description: '' };
  rating: null;
  userdata: any;
  token: any;

  constructor(
    public menuCtrl: MenuController,
    public mdCtrl: ModalController,
    public config: ConfigService,
    public translate: TranslateService,
    public nav: NavController,
    private applicationRef: ApplicationRef,
    public navCtrl: NavController, public services: YesServiceService,
    private toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.productreview();
  }

  goToproductDetail() {
    this.nav.navigateForward("tabs/bs-home");
  }

  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }


  ionViewWillEnter() {

    const userDetails = localStorage.getItem('userdata');

    this.userdata = JSON.parse(userDetails);

    this.token = this.userdata.token;

    console.log(this.token); 

    this.Id = this.route.snapshot.paramMap.get('id');
    console.log(JSON.parse(this.Id))
  
  }


  selectRating(value) {
    this.rating = value;
    for (let v of this.ratingStars) {
      if (v.value <= value) v.fill = 'star';
      else v.fill = 'star-outline';
    }
    this.applicationRef.tick();
  }


  Addproductreviews() {
    const  userData = 'token=' + this.token + "&product_id=" + this.Id + '&rating=' + this.rating + '&review=' + this.addrating.get('review').value;
    console.log(userData);
    this.services.Addproductreviews(userData).subscribe(result => {
    this.responseData = result;
    console.log(this.responseData);
    this.presentToast("Product Reviews Added Successfully")
    this.nav.navigateForward("tabs/bs-home");
  
  }, error => {

  });
  }



  productreview() {
    this.addrating = this.formBuilder.group({
    //  search_type: ['', Validators.compose([Validators.required])],
    review: ['', Validators.compose([Validators.required])],
    //  search_type: ['', Validators.compose([Validators.required])],
    });
}



async presentToast(msg) {
  const toast = await this.toastCtrl.create({
    message: msg,
    duration: 2000,
    position: "middle",
    color: "primary"
  });
  toast.present();
}




}
