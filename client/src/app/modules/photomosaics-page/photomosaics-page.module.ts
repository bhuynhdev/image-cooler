import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ImageMagnifierComponent } from './components/image-magnifier/image-magnifier.component';
import { PhotomosaicsPageComponent } from './photomosaics.component';

@NgModule({
  declarations: [PhotomosaicsPageComponent, ImageMagnifierComponent],
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
  exports: [PhotomosaicsPageComponent],
})
export class PhotomosaicsModule {}
