import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'Home',component:HomeComponent},
  { path:'',redirectTo:'Home',pathMatch:'full'},
  { path: 'Chatbot', loadChildren: () => import('./chatbot/chatbot.module').then(m => m.ChatbotModule) },
  { path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
