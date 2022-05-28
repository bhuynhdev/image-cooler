import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotomosaicsPageComponent } from './photomosaics.component';

import { ImageMagnifierComponent } from './components/image-magnifier/image-magnifier.component';

@NgModule({
  declarations: [PhotomosaicsPageComponent, ImageMagnifierComponent],
  imports: [CommonModule],
  exports: [PhotomosaicsPageComponent],
})
export class PhotomosaicsModule {}
