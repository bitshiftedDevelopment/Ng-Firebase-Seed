import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PostBrowser imports
import { PostBrowserComponent } from './post-browser/post-browser.component';
import { FormsModule } from '@angular/forms';

// Auth imports
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { CanReadGuard } from './can-read.guard';
import { AdminGuard } from './admin.guard';

// Custom pipe for iterating over an object
import { KeysPipe } from './keys.pipe';

// App imports
import { LoginComponent } from './login/login.component';
import { GoogleButtonComponent } from './login/google-button/google-button.component';
import { GithubButtonComponent } from './login/github-button/github-button.component';
import { FacebookButtonComponent } from './login/facebook-button/facebook-button.component';
import { TwitterButtonComponent } from './login/twitter-button/twitter-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FormsModule
  ],
  declarations: [
    PostBrowserComponent,
    LoginComponent,
    GoogleButtonComponent,
    GithubButtonComponent,
    FacebookButtonComponent,
    TwitterButtonComponent,
    UserProfileComponent,
    KeysPipe
  ],
  providers: [
    AuthService,
    CanReadGuard,
    AdminGuard
  ]
})
export class CoreModule { }
