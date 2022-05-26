import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
