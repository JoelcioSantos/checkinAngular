import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGuestComponent } from './modal-guest.component';

describe('ModalGuestComponent', () => {
  let component: ModalGuestComponent;
  let fixture: ComponentFixture<ModalGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
