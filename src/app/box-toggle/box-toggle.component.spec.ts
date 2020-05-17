import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxToggleComponent } from './box-toggle.component';

describe('BoxToggleComponent', () => {
  let component: BoxToggleComponent;
  let fixture: ComponentFixture<BoxToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
