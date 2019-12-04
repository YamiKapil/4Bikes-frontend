import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { MountainComponent } from "./mountain.component";


@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations : [
        MountainComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class MountainModule{

}
