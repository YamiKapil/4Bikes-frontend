import { OnInit, Component } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as SocialShare from "nativescript-social-share";
@Component ({
    selector: 'about',
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {  }


    onDrawerButtonTap(): void {
        const sideDrawer= <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    public shareUrl() {
        SocialShare.shareUrl("https://www.4bikes.be/","Home of 4bikes","4Bikes Website");
    }
}
