import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtenantComponent } from './viewtenant.component';

describe('ViewtenantComponent', () => {
  let component: ViewtenantComponent;
  let fixture: ComponentFixture<ViewtenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtenantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
