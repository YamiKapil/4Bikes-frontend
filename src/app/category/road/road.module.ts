import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { RoadComponent } from "./road.component";
import { RoadRoutingModule } from "./road-routing.module";

@NgModule({

    imports: [
        NativeScriptCommonModule,
        RoadRoutingModule
    ],
    declarations: [
        RoadComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class RoadModule { }
