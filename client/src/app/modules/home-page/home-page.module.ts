import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {
  NbButtonModule,
  NbInputModule,
  NbLayoutModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { ImageMagnifierComponent } from './components/image-magnifier/image-magnifier.component';

@NgModule({
  declarations: [HomeComponent, ImageMagnifierComponent],
  imports: [
    CommonModule,
    NbInputModule,
    NbButtonModule,
    NbLayoutModule,
    NbSpinnerModule,
  ],
  exports: [HomeComponent],
})
export class HomePageModule {}
