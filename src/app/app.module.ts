import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule,AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProcessComponent } from './process/process.component';
import { NavbarMenuComponent } from './navbar/navbar-menu/navbar-menu.component';
import { MeetanclaComponent } from './meetancla/meetancla.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

//models
import { Contacto } from './modelos/contacto';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RepositorioComponent } from './repositorio/repositorio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    ProcessComponent,
    NavbarMenuComponent,
    MeetanclaComponent,
    ContactoComponent,
    NotFoundComponent,
    UnderConstructionComponent,
    MainPageComponent,
    RepositorioComponent,
    DashboardComponent,
    LoginComponent,
     
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    AppRouting,
    CommonModule,
    BrowserAnimationsModule,
    
    
    FormsModule, // required animations module
    ToastrModule.forRoot(),HttpClientModule, // ToastrModule added
  ],
  providers: [Contacto],
  bootstrap: [AppComponent]
})
export class AppModule { }
