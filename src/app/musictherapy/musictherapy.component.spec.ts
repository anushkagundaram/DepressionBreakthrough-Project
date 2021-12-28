import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusictherapyComponent } from './musictherapy.component';

describe('MusictherapyComponent', () => {
  let component: MusictherapyComponent;
  let fixture: ComponentFixture<MusictherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusictherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusictherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
