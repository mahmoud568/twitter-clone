import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineFollowingComponent } from './timeline-following.component';

describe('TimelineFollowingComponent', () => {
  let component: TimelineFollowingComponent;
  let fixture: ComponentFixture<TimelineFollowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineFollowingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
