import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';

import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class CanActivateFrontend implements CanActivate {
  constructor(private http: HttpClient, private router: Router) {}

  canActivate() {
    // Check up on server upon visiting the page
    return this.http.get<string>(environment.apiUrl).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        return of(err.message);
      }),
      map((result) => {
        console.log(result);
        if (result !== 'OK') {
          this.router.navigate(['/server-error']);
          return false;
        }
        return true;
      })
    );
  }
}
