import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonfriendtableComponent } from './commonfriendtable.component';

describe('CommonfriendtableComponent', () => {
  let component: CommonfriendtableComponent;
  let fixture: ComponentFixture<CommonfriendtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonfriendtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonfriendtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
