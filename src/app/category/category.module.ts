import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { CategoryComponent } from "./category.component";
import { CategoryRoutingModule } from "./category-routing.module";

@NgModule({

    imports: [
        NativeScriptCommonModule,
        CategoryRoutingModule
    ],
    declarations: [
        CategoryComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class CategoryModule { }
