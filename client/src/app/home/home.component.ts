import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  uploadedImage = '';

  constructor() {}

  ngOnInit(): void {}

  // Image Preview
  previewImage($event: Event) {
    const reader = new FileReader();

    const target = $event.target as HTMLInputElement;

    if (target.files && target.files.length) {
      const uploadedFile = target.files[0];
      reader.readAsDataURL(uploadedFile);

      reader.onload = () => {
        this.uploadedImage = reader.result as string;
      };
    }
  }

  onSubmit($event: Event) {
    $event.preventDefault();
  }
}
