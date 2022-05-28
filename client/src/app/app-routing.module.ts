import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/home-page';
import { PhotomosaicsPageComponent } from './modules/photomosaics-page';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'photomosaics', component: PhotomosaicsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
