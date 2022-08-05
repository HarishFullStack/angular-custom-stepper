import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MPLAccountinformationComponent } from './mpl-accountinformation/mpl-accountinformation.component';
import { MPLEmploymentinformationComponent } from './mpl-employmentinformation/mpl-employmentinformation.component';
import { MPLPersonalinformationComponent } from './mpl-personalinformation/mpl-personalinformation.component';

const routes: Routes = [
  { path: 'account-info', component: MPLAccountinformationComponent },
  { path: 'employment-info', component: MPLEmploymentinformationComponent },
  { path: 'personal-info', component: MPLPersonalinformationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class MPLRoutingModule { }
