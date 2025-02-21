import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavenotificationComponent } from './savenotification.component';

describe('SavenotificationComponent', () => {
  let component: SavenotificationComponent;
  let fixture: ComponentFixture<SavenotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavenotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
