import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component routing imports
import { PostBrowserComponent } from './core/post-browser/post-browser.component';
import { LoginComponent } from './core/login/login.component';
import { UserProfileComponent } from './core/user-profile/user-profile.component';

const routes: Routes = [
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
    path: 'login',
    component: LoginComponent
  },
  {//INDEV
    path: 'profile',
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
