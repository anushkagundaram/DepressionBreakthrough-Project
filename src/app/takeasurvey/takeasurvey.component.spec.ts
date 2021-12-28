import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeasurveyComponent } from './takeasurvey.component';

describe('TakeasurveyComponent', () => {
  let component: TakeasurveyComponent;
  let fixture: ComponentFixture<TakeasurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeasurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeasurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
