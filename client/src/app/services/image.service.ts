import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = 'http://localhost:8000/upload';

  constructor(private http: HttpClient) {}

  upload(image: File) {
    const form = new FormData();
    form.append('image', image, image.name);
    this.http.post(this.apiUrl, form).subscribe(console.log);
  }
}
