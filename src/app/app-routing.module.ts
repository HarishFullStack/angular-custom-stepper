import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalinformationComponent } from './components/cyber/personalinformation/personalinformation.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cyber', loadChildren:() => import('./components/cyber/cyber.module').then(m => m.CyberModule)},
  {path: 'mpl', loadChildren:() => import('./components/cyber/cyber.module').then(m => m.CyberModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
