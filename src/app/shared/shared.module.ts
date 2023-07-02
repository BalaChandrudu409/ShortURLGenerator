import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { URLValidatorDirective } from "./validators/url-validator";

@NgModule({
    imports: [
    CommonModule
    ],
    declarations: [
        URLValidatorDirective
    ],
    exports: [
        URLValidatorDirective
    ]
})
export class SharedModule {

}