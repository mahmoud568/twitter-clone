import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniWhoToFollowComponent } from './mini-who-to-follow.component';

describe('MiniWhoToFollowComponent', () => {
  let component: MiniWhoToFollowComponent;
  let fixture: ComponentFixture<MiniWhoToFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniWhoToFollowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniWhoToFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
