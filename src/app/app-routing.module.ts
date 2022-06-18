import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authguard/auth.guard';
import { ArchiveComponent } from './components/archive/archive.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditLabelsComponent } from './components/edit-labels/edit-labels.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RemaindersComponent } from './components/remainders/remainders.component';
import { ResetPasswardComponent } from './components/reset-passward/reset-passward.component';
import { TrashComponent } from './components/trash/trash.component';

//routes defines array of the roots that map a path to a component
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'reset-password/:token',component:ResetPasswardComponent},
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],
  
  children:[
    {path:'notes',component:GetAllNotesComponent},
    {path:'remainders',component:RemaindersComponent},
    {path:'edit-labels',component:EditLabelsComponent},
    {path:'archive',component:ArchiveComponent},
    {path:'trash',component:TrashComponent},
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
