import { Component, OnInit } from '@angular/core';
import { YesServiceService } from '../../../yes-service.service';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public service: YesServiceService, private themeableBrowser: ThemeableBrowser) { }

  ngOnInit() {
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
      wwwImage: 'assets/previous.png',
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

  support(){

    this.themeableBrowser.create('https://www.yesgenie.com/Home_controller/support_board_cat', '_blank', this.options);

  }
  
  

}
