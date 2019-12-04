import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ElectricComponent } from "./electric.component";

NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        ElectricComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
