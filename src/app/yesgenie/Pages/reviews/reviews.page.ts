import { Component, OnInit, ApplicationRef } from '@angular/core';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/share.service';
import { YesServiceService } from 'src/app/yes-service.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  Id: any;
  responseData: any;
  token: any;
  userLogindata: any;

  // reviews = [{ name: "Smith Will", date_created: "28-08-2019", rating: "50", review: "this is lorum ipsum" },
  // { name: "Smith Will", date_created: "28-08-2019", rating: "50", review: "this is lorum ipsum" }];

  constructor(private router: Router, private route: ActivatedRoute, public shareservices: ShareService, public menuCtrl: MenuController,
    public navCtrl: NavController, public toastController: ToastController, public services: YesServiceService)  { }

  ngOnInit() {
  }
  pinchEvent(e) {
    this.navCtrl.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {

    const userDetails = localStorage.getItem('userdata');

    this.userLogindata = JSON.parse(userDetails);

    this.token = this.userLogindata.token;

    console.log(this.token); 

      this.Id = this.route.snapshot.paramMap.get('ProId');
      console.log(JSON.parse(this.Id));

      this.Getproductreviews();
  }


  Getproductreviews() {
    const  userData = 'product_id=' + this.Id;
    console.log(userData);
    this.services.Getproductreviews(userData).subscribe(result => {
    this.responseData = result.response.product_review;
    console.log(this.responseData);
  
  }, error => {

  });
  }

  addreview(id:number){
    if (this.userLogindata == null || this.userLogindata == undefined) {
      this.navCtrl.navigateForward("bs-login");
    } else {
      this.router.navigate(['bs-add-review',{id:id}])
    }
    }


}
