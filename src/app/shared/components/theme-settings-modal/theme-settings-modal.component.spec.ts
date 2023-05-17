import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSettingsModalComponent } from './theme-settings-modal.component';

describe('ThemeSettingsModalComponent', () => {
  let component: ThemeSettingsModalComponent;
  let fixture: ComponentFixture<ThemeSettingsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeSettingsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeSettingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
