import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTPComponent } from './booking-tp.component';

describe('BookingTPComponent', () => {
  let component: BookingTPComponent;
  let fixture: ComponentFixture<BookingTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingTPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
