import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MPLAccountinformationComponent } from './mpl-accountinformation/mpl-accountinformation.component';
import { MPLPersonalinformationComponent } from './mpl-personalinformation/mpl-personalinformation.component';
import { MPLEmploymentinformationComponent } from './mpl-employmentinformation/mpl-employmentinformation.component';
import { SharedModule } from '../shared/shared.module';
import { MPLRoutingModule } from './mpl-routing.module';

@NgModule({
  declarations: [
    MPLAccountinformationComponent,
    MPLPersonalinformationComponent,
    MPLEmploymentinformationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MPLRoutingModule
  ]
})
export class MPLModule { }
