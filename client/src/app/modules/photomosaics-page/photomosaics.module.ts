import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotomosaicsPage } from './components/photomosaics/photomosaics.component';

import { ImageMagnifierComponent } from './components/image-magnifier/image-magnifier.component';

@NgModule({
  declarations: [PhotomosaicsPage, ImageMagnifierComponent],
  imports: [CommonModule],
  exports: [PhotomosaicsPage],
})
export class PhotomosaicsModule {}
