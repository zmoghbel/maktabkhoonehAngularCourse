import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProjectService } from './services/project.service';
import { AppHomeComponent } from './app-home/app-home.component';
import { ProjectComponent } from './project/project.component';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AppGuard } from './app-guard.guard';
import { RegisterComponent } from './register/register.component';
import { RepositoryService } from './repository.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from 'src/my.interceptor';
import { PersianNumberPipe } from './persian-number.pipe';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TimeLeftPipe } from './time-left.pipe';
import { ForTestComponent } from './for-test/for-test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    TaskListComponent,
    TaskComponent,
    AppHomeComponent,
    ProjectComponent,
    AddTaskDialogComponent,
    AddTaskDialogComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    PersianNumberPipe,
    TimeLeftPipe,
    ForTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    ProjectService,
    AuthService,
    AppGuard,
    RepositoryService,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
