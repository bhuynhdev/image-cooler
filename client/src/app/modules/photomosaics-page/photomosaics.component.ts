import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-photomosaics-page',
  templateUrl: './photomosaics.component.html',
  styleUrls: ['./photomosaics.component.scss'],
})
export class PhotomosaicsPageComponent implements OnInit {
  sourceType: string = '';

  uploadedImage!: File;
  uploadedImageSrc = '';
  resultImageSrc = '';

  @ViewChild('resultBlock')
  resultImageRef!: ElementRef<HTMLDivElement>;

  isProcessing = false;
  requestError = '';

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  handleImageUpload($event: Event) {
    const reader = new FileReader();
    const target = $event.target as HTMLInputElement;

    if (target.files && target.files.length) {
      // Preview uploaded image
      const uploadedFile = target.files[0];
      reader.readAsDataURL(uploadedFile);
      this.uploadedImage = uploadedFile;

      reader.onload = () => {
        this.uploadedImageSrc = reader.result as string;
      };
    }
  }

  onSubmit($event: Event, form: NgForm) {
    $event.preventDefault();
    if (!form.valid) {
      return;
    }
    this.isProcessing = true;
    // scroll the result image into view
    // Need to set timeout to wait for the UI to update
    const element = this.resultImageRef.nativeElement;
    element.scrollIntoView({ behavior: 'smooth' });

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
        this.requestError = error.message;
        console.log(error);
      },
    });
  }
}
