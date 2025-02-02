import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnedboardinghouseComponent } from './ownedboardinghouse.component';

describe('OwnedboardinghouseComponent', () => {
  let component: OwnedboardinghouseComponent;
  let fixture: ComponentFixture<OwnedboardinghouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnedboardinghouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnedboardinghouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
