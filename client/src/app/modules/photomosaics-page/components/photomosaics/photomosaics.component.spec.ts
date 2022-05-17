import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotomosaicsPage } from './photomosaics.component';

describe('HomeComponent', () => {
  let component: PhotomosaicsPage;
  let fixture: ComponentFixture<PhotomosaicsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotomosaicsPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotomosaicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
