import { NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {  NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
import { BrowseComponent } from './browse/browse.component';
import { CategoryComponent } from "./category/category.component";
import { AboutComponent } from "./about/about.component";
import { RoadComponent } from "./category/road/road.component";
import { MountainComponent } from "./category/mountain/mountain.component";
import { KinderComponent } from "./category/kinder/kinder.component";
import { ElectricComponent } from "./category/electric/electric.component";
import { CustomComponent } from "./category/custom/custom.component";

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      NativeScriptModule,
      AppRoutingModule,
      NativeScriptUISideDrawerModule,
      HomeModule,
   ],
   declarations: [
      AppComponent,
      BrowseComponent,
      CategoryComponent,
      AboutComponent,
      RoadComponent,
      MountainComponent,
      KinderComponent,
      ElectricComponent,
      CustomComponent
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
export class AppModule { }
