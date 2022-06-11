import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CanActivateFrontend } from './health-check.guard';
import { ErrorPageComponent } from './modules/error-page';
import { HomePageComponent } from './modules/home-page';
import { PhotomosaicsPageComponent } from './modules/photomosaics-page';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [CanActivateFrontend],
  },
  {
    path: 'photomosaics',
    component: PhotomosaicsPageComponent,
    canActivate: [CanActivateFrontend],
  },
  {
    path: 'server-error',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [CanActivateFrontend],
})
export class AppRoutingModule {}
