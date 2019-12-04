import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CategoryComponent } from "./category.component";

const routes: Routes = [
    {path: "", component: CategoryComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class CategoryRoutingModule {


}
