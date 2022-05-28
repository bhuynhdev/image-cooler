import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotomosaicsPageComponent } from './photomosaics.component';

describe('HomeComponent', () => {
  let component: PhotomosaicsPageComponent;
  let fixture: ComponentFixture<PhotomosaicsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotomosaicsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotomosaicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
