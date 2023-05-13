import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniTagsComponent } from './mini-tags.component';

describe('MiniTagsComponent', () => {
  let component: MiniTagsComponent;
  let fixture: ComponentFixture<MiniTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
