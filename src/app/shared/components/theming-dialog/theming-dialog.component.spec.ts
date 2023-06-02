import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemingDialogComponent } from './theming-dialog.component';

describe('ThemingDialogComponent', () => {
  let component: ThemingDialogComponent;
  let fixture: ComponentFixture<ThemingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
