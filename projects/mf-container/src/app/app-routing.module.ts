import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ui/pages/login/login.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { AuthGuard } from './infraestructure/guards/auth/auth.guard';
import { AlreadySigninGuard } from './infraestructure/guards/already-signin/already-signin.guard';
import { AboutProjectComponent } from './ui/pages/about-project/about-project.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AlreadySigninGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutProjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: "full"
  },

  /** MicroFrontends */

  {
    path: 'notes',
    loadChildren: () => 
    import('mf-notes/PagesModule').then((m) => m.PagesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contacts',
    loadChildren: () => 
    import('mf-contacts/PagesModule').then((m) => m.PagesModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
