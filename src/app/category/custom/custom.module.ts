import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { CustomComponent } from "./custom.component";

NgModule({
    imports:[
        NativeScriptCommonModule
    ],
    declarations:[
        CustomComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
