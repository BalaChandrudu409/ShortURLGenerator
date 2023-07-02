import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoadingPageComponent } from './loading-page/loading-page.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    LoadingPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [
  ]
})
export class PagesModule { }
