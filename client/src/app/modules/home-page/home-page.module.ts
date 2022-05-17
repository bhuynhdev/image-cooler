import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './components/home/home.component';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule],
  exports: [HomePage],
})
export class HomePageModule {}
