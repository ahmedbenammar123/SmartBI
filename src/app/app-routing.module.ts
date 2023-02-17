import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CategoryVenteComponent } from './components/category-vente/category-vente.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceComponent } from './components/service/service.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
      //http://localhost;4200/home
      {path:'',component:HomeComponent},
      //http://localhost;4200/About
      {path:'About',component:AboutComponent},
      //http://localhost;4200/Service
      {path:'Service',component:ServiceComponent},
      //http://localhost;4200/Contact
      {path:'Contact',component:ContactComponent},
      //http://localhost;4200/CategoryVente
      {path:'CategoryVente',component:CategoryVenteComponent},
      //http://localhost;4200/Signup
      {path:'Signup',component:SignupComponent},
      //http://localhost;4200/SignupAdmin
      {path:'SignupAdmin',component:SignupAdminComponent},
      //http://localhost;4200/login
      {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
