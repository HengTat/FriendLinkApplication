import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendtableComponent } from './friendtable.component';

describe('FriendtableComponent', () => {
  let component: FriendtableComponent;
  let fixture: ComponentFixture<FriendtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
