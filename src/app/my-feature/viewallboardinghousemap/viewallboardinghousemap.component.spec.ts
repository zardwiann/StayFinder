import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallboardinghousemapComponent } from './viewallboardinghousemap.component';

describe('ViewallboardinghousemapComponent', () => {
  let component: ViewallboardinghousemapComponent;
  let fixture: ComponentFixture<ViewallboardinghousemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallboardinghousemapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallboardinghousemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
