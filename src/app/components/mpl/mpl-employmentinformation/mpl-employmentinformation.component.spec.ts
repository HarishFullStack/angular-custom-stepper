import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPLEmploymentinformationComponent } from './mpl-employmentinformation.component';

describe('EmploymentinformationComponent', () => {
  let component: MPLEmploymentinformationComponent;
  let fixture: ComponentFixture<MPLEmploymentinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPLEmploymentinformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MPLEmploymentinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
