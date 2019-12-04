import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import * as SocialShare from "nativescript-social-share";


@Component({
  selector: 'browse',
  templateUrl: './browse.component.html'

})
export class BrowseComponent implements OnInit {
        searchPhrase: string;
  constructor() { }

  ngOnInit() {
  }

    onDrawerButtonTap(): void{
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    public shareUrl() {
        SocialShare.shareUrl("https://www.4bikes.be/","Home of 4bikes","4Bikes Website");
    }

}
