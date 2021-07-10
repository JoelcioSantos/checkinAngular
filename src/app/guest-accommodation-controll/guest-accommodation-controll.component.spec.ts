import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestAccommodationControllComponent } from './guest-accommodation-controll.component';

describe('GuestAccommodationControllComponent', () => {
  let component: GuestAccommodationControllComponent;
  let fixture: ComponentFixture<GuestAccommodationControllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestAccommodationControllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestAccommodationControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
