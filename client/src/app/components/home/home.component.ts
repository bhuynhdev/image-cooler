import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  uploadedImage!: File;
  uploadedImageSrc = '';

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
    this.imageService.upload(this.uploadedImage);
  }
}
