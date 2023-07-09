import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCheckboxesComponent } from './dynamic-checkboxes.component';

describe('DynamicCheckboxesComponent', () => {
  let component: DynamicCheckboxesComponent;
  let fixture: ComponentFixture<DynamicCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
