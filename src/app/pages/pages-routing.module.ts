import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';

const routes: Routes = [
  {
    path: '',  
    component: LandingPageComponent
  },
  {
    path: 'short/:shortenurl',
    component: LoadingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
