import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './component/catalogue/catalogue.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthService as AuthGuard } from './service/auth.service';


const routes: Routes = [
  {path:"get-started", component:LoginComponent},
{path:"catalogue", component:CatalogueComponent, canActivate: [AuthGuard]},
{path:"profile", component:ProfileComponent, canActivate: [AuthGuard]},
{path:"", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
