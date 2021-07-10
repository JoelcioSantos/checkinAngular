import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestControllComponent } from './guest-controll.component';

describe('GuestControllComponent', () => {
  let component: GuestControllComponent;
  let fixture: ComponentFixture<GuestControllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestControllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
