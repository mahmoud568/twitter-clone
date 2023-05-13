import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineForyouComponent } from './timeline-foryou.component';

describe('TimelineForyouComponent', () => {
  let component: TimelineForyouComponent;
  let fixture: ComponentFixture<TimelineForyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineForyouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineForyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
