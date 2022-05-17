import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotomosaicsPage } from './components/photomosaics/photomosaics.component';
import {
  NbButtonModule,
  NbInputModule,
  NbLayoutModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { ImageMagnifierComponent } from './components/image-magnifier/image-magnifier.component';

@NgModule({
  declarations: [PhotomosaicsPage, ImageMagnifierComponent],
  imports: [
    CommonModule,
    NbInputModule,
    NbButtonModule,
    NbLayoutModule,
    NbSpinnerModule,
  ],
  exports: [PhotomosaicsPage],
})
export class PhotomosaicsModule {}
