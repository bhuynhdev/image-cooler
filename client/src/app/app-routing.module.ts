import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './modules/home-page/components';
import { PhotomosaicsPage } from './modules/photomosaics-page/components';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'photomosaics', component: PhotomosaicsPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
