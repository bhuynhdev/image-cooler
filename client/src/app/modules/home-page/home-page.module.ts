import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, RouterModule],
  exports: [HomePage],
})
export class HomePageModule {}
