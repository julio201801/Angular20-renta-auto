import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenModal } from './imagen-modal';

describe('ImagenModal', () => {
  let component: ImagenModal;
  let fixture: ComponentFixture<ImagenModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
