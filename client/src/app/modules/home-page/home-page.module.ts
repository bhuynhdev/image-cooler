import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NbButtonModule, NbInputModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, NbInputModule, NbButtonModule, NbLayoutModule],
  exports: [HomeComponent],
})
export class HomePageModule {}
