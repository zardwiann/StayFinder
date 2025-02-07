import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinebhComponent } from './declinebh.component';

describe('DeclinebhComponent', () => {
  let component: DeclinebhComponent;
  let fixture: ComponentFixture<DeclinebhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclinebhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclinebhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
