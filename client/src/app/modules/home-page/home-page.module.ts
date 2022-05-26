import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule, LayoutModule, MatButtonModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
