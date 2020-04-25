import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessComponent } from './process/process.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RepositorioComponent } from './repositorio/repositorio.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
 // { path: 'portfolio', component: ProcessComponent },
 { path: 'inicio', component: MainPageComponent },
 { path: '', component: MainPageComponent },
 { path: 'landing', component: LandingComponent },
 { path: 'login', component: LoginComponent },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'contacto', component: ContactoComponent },

 { path: 'portafolio', component: ProjectsComponent },
 { path: 'repositorio', component: RepositorioComponent },
 { path: 'blog', component: UnderConstructionComponent },
 { path: '**', component: NotFoundComponent }
];
export const AppRouting = RouterModule.forRoot(routes, { 

});
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
