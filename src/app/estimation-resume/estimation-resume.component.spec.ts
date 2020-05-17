import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationResumeComponent } from './estimation-resume.component';

describe('EstimationResumeComponent', () => {
  let component: EstimationResumeComponent;
  let fixture: ComponentFixture<EstimationResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimationResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
