import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTapsComponent } from './side-taps.component';

describe('SideTapsComponent', () => {
  let component: SideTapsComponent;
  let fixture: ComponentFixture<SideTapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideTapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideTapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
