import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx'
import { Platform } from '@ionic/angular';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  // options : InAppBrowserOptions = {
  //   location: 'no',
  //   hidden: 'no',
  //   clearcache: 'yes',
  //   clearsessioncache: 'yes',
  //   zoom: 'yes',
  //   hardwareback: 'no',
  //   mediaPlaybackRequiresUserAction: 'no',
  //   shouldPauseOnSuspend: 'no',
  //   closebuttoncaption: 'close',
  //   disallowoverscroll: 'no',
  //   toolbar: 'yes',
  //   enableViewportScale: 'no',
  //   allowInlineMediaPlayback: 'no',
  //   presentationstyle: 'pagesheet',
  //   fullscreen: 'yes'
  // }

  constructor(private iab: InAppBrowser,public platform: Platform, private themeableBrowser: ThemeableBrowser) {
    // this.platform.ready().then(() => {
    //  this.iab.create('https://www.yesgenie.com/Home_controller/support_board_cat','_blank',this.options);    
    //   }); 
 }




 options: ThemeableBrowserOptions = {
  statusbar: {
      color: '#021841'
  },
  toolbar: {
      height: 44,
      color: '#021841'
  },
  title: {
      color: '#ffffffff',
      staticText: 'Support',
      showPageTitle: true,
  },
  backButton: {
    wwwImage: 'assets/back.png',
      align: 'left',
      event: 'backPressed',
  },
  // forwardButton: {
  //     image: 'forward',
  //     imagePressed: 'forward_pressed',
  //     align: 'left',
  //     event: 'forwardPressed'
  // },
  // closeButton: {
  //   wwwImage: 'assets/previous.png',
  //     align: 'right',
  //     event: 'closePressed'
  // },
  // customButtons: [
  //     {
  //         image: 'share',
  //         imagePressed: 'share_pressed',
  //         align: 'right',
  //         event: 'sharePressed'
  //     }
  // ],
  // menu: {
  //     image: 'menu',
  //     imagePressed: 'menu_pressed',
  //     title: 'Test',
  //     cancel: 'Cancel',
  //     align: 'right',
  //     items: [
  //         {
  //             event: 'helloPressed',
  //             label: 'Hello World!'
  //         },
  //         {
  //             event: 'testPressed',
  //             label: 'Test!'
  //         }
  //     ]
  // },
  backButtonCanClose: true
}


 browser: ThemeableBrowserObject = this.themeableBrowser.create('https://www.yesgenie.com/Home_controller/support_board_cat', '_blank', this.options);


 ngOnInit() {
   this.browser;
}



}
