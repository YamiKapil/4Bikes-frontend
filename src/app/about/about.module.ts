import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { AboutComponent } from "./about.component";

@NgModule({

    imports: [
        NativeScriptCommonModule
    ],

    exports: [
        AboutComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AboutModule{

}
