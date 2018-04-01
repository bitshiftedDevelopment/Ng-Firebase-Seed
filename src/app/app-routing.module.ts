import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guard imports
import { AdminGuard } from './core/admin.guard';
import { AdminOnlyComponent } from './core/errors/admin-only/admin-only.component';

// Component routing imports
import { LoginComponent } from './app-pages/login/login.component';
import { HomeComponent } from './app-pages/home/home.component';
import { PostBrowserComponent } from './app-pages/post-browser/post-browser.component';
import { UserProfileComponent } from './app-pages/user-profile/user-profile.component';
import { AdminProfileComponent } from './app-pages/admin-profile/admin-profile.component';


const routes: Routes = [
  {//INDEV
    path: 'accessDenied',
    component: AdminOnlyComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {//INDEV
    path: 'home',
    component: HomeComponent
  },
  {//INDEV
    path: 'posts',
    component: PostBrowserComponent
  },
  {//INDEV
    path: 'login',
    component: LoginComponent
  },
  {//INDEV
    path: 'profile',
    component: UserProfileComponent
  },
  {//INDEV
    path: 'admin-profile',
    component: AdminProfileComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
