import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMagnifierComponent } from './image-magnifier.component';

describe('ImageMagnifierComponent', () => {
  let component: ImageMagnifierComponent;
  let fixture: ComponentFixture<ImageMagnifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageMagnifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageMagnifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
