import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingapprovalComponent } from './bookingapproval.component';

describe('BookingapprovalComponent', () => {
  let component: BookingapprovalComponent;
  let fixture: ComponentFixture<BookingapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingapprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
