import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './photomosaics.component.html',
  styleUrls: ['./photomosaics.component.scss'],
})
export class PhotomosaicsPage implements OnInit {
  uploadedImage!: File;
  uploadedImageSrc = '';
  resultImageSrc = '';

  isProcessing = false;
  errorMessage = '';

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  // Image Preview
  previewImage($event: Event) {
    const reader = new FileReader();
    const target = $event.target as HTMLInputElement;

    if (target.files && target.files.length) {
      const uploadedFile = target.files[0];
      reader.readAsDataURL(uploadedFile);
      this.uploadedImage = uploadedFile;

      reader.onload = () => {
        this.uploadedImageSrc = reader.result as string;
      };
    }
  }

  onSubmit($event: Event) {
    $event.preventDefault();
    this.isProcessing = true;
    this.imageService.upload(this.uploadedImage).subscribe({
      next: (result) => {
        let reader = new FileReader();
        reader.onload = () => {
          this.resultImageSrc = reader.result as string;
          this.isProcessing = false;
        };
        reader.readAsDataURL(result);
      },
      error: (error: HttpErrorResponse) => {
        this.isProcessing = false;
        this.errorMessage = error.message;
        console.log(error);
      },
    });
  }
}
