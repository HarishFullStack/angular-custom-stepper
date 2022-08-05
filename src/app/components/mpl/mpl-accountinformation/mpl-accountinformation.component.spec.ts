import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPLAccountinformationComponent } from './mpl-accountinformation.component';

describe('AccountinformationComponent', () => {
  let component: MPLAccountinformationComponent;
  let fixture: ComponentFixture<MPLAccountinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPLAccountinformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MPLAccountinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
