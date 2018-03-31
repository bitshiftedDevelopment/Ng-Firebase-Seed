import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostBrowserComponent } from './core/post-browser/post-browser.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {//INDEV
    path: 'posts',
    component: PostBrowserComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
