import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardinghousemapComponent } from './boardinghousemap.component';

describe('BoardinghousemapComponent', () => {
  let component: BoardinghousemapComponent;
  let fixture: ComponentFixture<BoardinghousemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardinghousemapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardinghousemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
