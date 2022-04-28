import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ImageService } from './services/image.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [ImageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
