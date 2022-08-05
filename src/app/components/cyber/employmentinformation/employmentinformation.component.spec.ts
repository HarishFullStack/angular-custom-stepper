import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentinformationComponent } from './employmentinformation.component';

describe('EmploymentinformationComponent', () => {
  let component: EmploymentinformationComponent;
  let fixture: ComponentFixture<EmploymentinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentinformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
