import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateboardinghouseComponent } from './updateboardinghouse.component';

describe('UpdateboardinghouseComponent', () => {
  let component: UpdateboardinghouseComponent;
  let fixture: ComponentFixture<UpdateboardinghouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateboardinghouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateboardinghouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
