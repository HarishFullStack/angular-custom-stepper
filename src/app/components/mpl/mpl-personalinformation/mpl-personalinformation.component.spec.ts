import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPLPersonalinformationComponent } from './mpl-personalinformation.component';

describe('PersonalinformationComponent', () => {
  let component: MPLPersonalinformationComponent;
  let fixture: ComponentFixture<MPLPersonalinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPLPersonalinformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MPLPersonalinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
