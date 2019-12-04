import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { KinderComponent } from "./kinder.component";

NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        KinderComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
