import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = 'http://localhost:8000/upload';

  constructor(private http: HttpClient) {}

  upload(image: File): Observable<Blob> {
    const form = new FormData();
    form.append('image', image, image.name);
    return this.http.post(this.apiUrl, form, { responseType: 'blob' });
  }
}
