import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddboardinghouseComponent } from './addboardinghouse.component';

describe('AddboardinghouseComponent', () => {
  let component: AddboardinghouseComponent;
  let fixture: ComponentFixture<AddboardinghouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddboardinghouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddboardinghouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
