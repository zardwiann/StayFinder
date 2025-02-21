import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardinghouselistComponent } from './boardinghouselist.component';

describe('BoardinghouselistComponent', () => {
  let component: BoardinghouselistComponent;
  let fixture: ComponentFixture<BoardinghouselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardinghouselistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardinghouselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
