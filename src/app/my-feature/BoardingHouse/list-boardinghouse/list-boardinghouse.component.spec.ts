import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoardinghouseComponent } from './list-boardinghouse.component';

describe('ListBoardinghouseComponent', () => {
  let component: ListBoardinghouseComponent;
  let fixture: ComponentFixture<ListBoardinghouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBoardinghouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBoardinghouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
