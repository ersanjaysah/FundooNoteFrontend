import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswardComponent } from './components/reset-passward/reset-passward.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { IconsComponent } from './components/icons/icons.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { RemaindersComponent } from './components/remainders/remainders.component';
import { EditLabelsComponent } from './components/edit-labels/edit-labels.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthorizationService } from './components/service/Authservice/authorization.service';
import { FilterPipe } from './pipes/filter.pipe';
import {MatGridListModule} from '@angular/material/grid-list';
import { DemocomponentComponent } from './components/democomponent/democomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswardComponent,
    DashboardComponent,
    GetAllNotesComponent,
    AddNoteComponent,
    DisplayNotesComponent,
    IconsComponent,
    ArchiveComponent,
    TrashComponent,
    RemaindersComponent,
    EditLabelsComponent,
    UpdatenoteComponent,
    FilterPipe,
    DemocomponentComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,FlexLayoutModule,FormsModule,MatMenuModule,MatDialogModule,MatSnackBarModule,MatGridListModule
  ],
  providers: [AuthorizationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
