import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxResumeComponent } from './box-resume.component';

describe('BoxResumeComponent', () => {
  let component: BoxResumeComponent;
  let fixture: ComponentFixture<BoxResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
