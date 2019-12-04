import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { RoadComponent } from "./road.component";

const routes: Routes = [
    {path: "", component: RoadComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class RoadRoutingModule {


}
