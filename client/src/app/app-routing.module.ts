import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/home-page';
import { PhotomosaicsPage } from './modules/photomosaics-page/components';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'photomosaics', component: PhotomosaicsPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
