import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostupdatesComponent } from './postupdates.component';

describe('PostupdatesComponent', () => {
  let component: PostupdatesComponent;
  let fixture: ComponentFixture<PostupdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostupdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
