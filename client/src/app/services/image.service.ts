import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = environment.apiUrl + '/upload';

  constructor(private http: HttpClient) {}

  upload(image: File, srcType: SourceType): Observable<Blob> {
    const form = new FormData();
    form.append('image', image, image.name);
    form.append('src_type', srcType);
    return this.http.post(this.apiUrl, form, { responseType: 'blob' });
  }
}

export type SourceType = 'dog' | 'cat' | 'anime';
