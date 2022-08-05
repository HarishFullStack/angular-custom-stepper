import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountinformationComponent } from './accountinformation/accountinformation.component';
import { EmploymentinformationComponent } from './employmentinformation/employmentinformation.component';
import { PersonalinformationComponent } from './personalinformation/personalinformation.component';

const routes: Routes = [
  { path: '', component: AccountinformationComponent },
  { path: 'account-info', component: AccountinformationComponent },
  { path: 'employment-info', component: EmploymentinformationComponent },
  { path: 'personal-info', component: PersonalinformationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class CyberRoutingModule { }
