import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guard imports
import { AdminGuard } from './core/admin.guard';
import { AdminOnlyComponent } from './core/errors/admin-only/admin-only.component';

// Component routing imports
import { PostBrowserComponent } from './core/post-browser/post-browser.component';
import { PostComponent } from './core/post/post.component';
import { LoginComponent } from './core/login/login.component';
import { UserProfileComponent } from './core/user-profile/user-profile.component';
import { AdminProfileComponent } from './core/admin-profile/admin-profile.component';

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
    path: 'posts',
    component: PostBrowserComponent
  },
  {//INDEV
    path: 'post/:id',
    component: PostComponent
  },
  {//INDEV
    path: 'login',
    component: LoginComponent
  },
  {
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
