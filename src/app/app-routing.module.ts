import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { BrowseComponent } from "./browse/browse.component";
import { HomeComponent } from "./home/home.component";
import { CategoryComponent } from "./category/category.component";
import { AboutComponent } from "./about/about.component";
import { RoadComponent } from "./category/road/road.component";
import { MountainComponent } from "./category/mountain/mountain.component";
import { KinderComponent } from "./category/kinder/kinder.component";
import { ElectricComponent } from "./category/electric/electric.component";
import { CustomComponent } from "./category/custom/custom.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "browse", component: BrowseComponent },
    { path: "category", component: CategoryComponent},
        { path: "category/road", component: RoadComponent},
        { path: "category/mountain", component: MountainComponent},
        { path: "category/kinder", component: KinderComponent},
        { path: "category/electric", component: ElectricComponent},
        { path: "category/custom", component: CustomComponent},

    { path: "about", component: AboutComponent}

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
