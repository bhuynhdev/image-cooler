import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { ImageMagnifierComponent } from './components/image-magnifier/image-magnifier.component';
import { PhotomosaicsPageComponent } from './photomosaics.component';

@NgModule({
  declarations: [PhotomosaicsPageComponent, ImageMagnifierComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
  ],
  exports: [PhotomosaicsPageComponent],
})
export class PhotomosaicsModule {}
