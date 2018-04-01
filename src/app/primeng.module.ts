import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CustomStepMenuModule } from "./custom-step-menu/custom-step-menu.module";


@NgModule({
    imports:[
        FormsModule
    ],
    exports:[
        CustomStepMenuModule
    ]
})
export class PrimengComponentsModule{}