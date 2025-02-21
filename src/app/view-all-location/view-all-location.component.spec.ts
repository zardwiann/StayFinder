import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllLocationComponent } from './view-all-location.component';

describe('ViewAllLocationComponent', () => {
  let component: ViewAllLocationComponent;
  let fixture: ComponentFixture<ViewAllLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
