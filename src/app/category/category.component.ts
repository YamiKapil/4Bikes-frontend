import { OnInit, Component } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import * as SocialShare from "nativescript-social-share";

@Component ({
    selector: 'category',
    templateUrl: './category.component.html'

})

export class CategoryComponent implements OnInit {

    constructor(public _route: RouterExtensions){
    }

    ngOnInit(){
    }

    onDrawerButtonTap(): void {
        const sideDrawer= <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onRoadTap(_route: String): void{
        this._route.navigate([_route]);
    }
    public shareUrl() {
        SocialShare.shareUrl("https://www.4bikes.be/","Home of 4bikes","4Bikes Website");
    }
}
