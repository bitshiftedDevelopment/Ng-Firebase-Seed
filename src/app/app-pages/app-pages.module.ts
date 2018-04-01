import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Main pages
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

// PostBrowser imports
import { PostBrowserComponent } from './post-browser/post-browser.component';
import { FormsModule } from '@angular/forms';

// Login imports
import { GoogleButtonComponent } from './login/google-button/google-button.component';
import { GithubButtonComponent } from './login/github-button/github-button.component';
import { FacebookButtonComponent } from './login/facebook-button/facebook-button.component';
import { TwitterButtonComponent } from './login/twitter-button/twitter-button.component';

// Pipe for iterating over key/value pair
import { KeysPipe } from '@app/core/keys.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    UserProfileComponent,
    AdminProfileComponent,
    PostBrowserComponent,
    GoogleButtonComponent,
    GithubButtonComponent,
    FacebookButtonComponent,
    TwitterButtonComponent,
    KeysPipe
  ]
})
export class AppPagesModule { }
