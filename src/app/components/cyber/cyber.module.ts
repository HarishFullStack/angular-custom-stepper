import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountinformationComponent } from './accountinformation/accountinformation.component';
import { PersonalinformationComponent } from './personalinformation/personalinformation.component';
import { EmploymentinformationComponent } from './employmentinformation/employmentinformation.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { CyberRoutingModule } from './cyber-routing.module';

@NgModule({
  declarations: [
    AccountinformationComponent,
    PersonalinformationComponent,
    EmploymentinformationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CyberRoutingModule
  ]
})
export class CyberModule { }
