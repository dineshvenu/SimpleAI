import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';

import { AdminComponent } from './admin.component';
import { CommingsoonComponent } from './commingsoon/commingsoon.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  
  { path: 'aboutus', component: AboutusComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'commingsoon', component: CommingsoonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
