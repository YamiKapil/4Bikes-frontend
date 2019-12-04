import { Routes } from "@angular/router";
import { BrowseComponent } from "./browse.component";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {path: "", component: BrowseComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class BrowserRoutingModuel {


}
