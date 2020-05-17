import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxOptionComponent } from './box-option.component';

describe('BoxOptionComponent', () => {
  let component: BoxOptionComponent;
  let fixture: ComponentFixture<BoxOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
