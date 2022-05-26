import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
