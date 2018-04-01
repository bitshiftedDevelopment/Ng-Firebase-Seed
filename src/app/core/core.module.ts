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
import { ErrorsModule } from './errors/errors.module';

// Custom pipe for iterating over an object
import { KeysPipe } from './keys.pipe';

// App imports
/*Main routing*/
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GoogleButtonComponent } from './login/google-button/google-button.component';
import { GithubButtonComponent } from './login/github-button/github-button.component';
import { FacebookButtonComponent } from './login/facebook-button/facebook-button.component';
import { TwitterButtonComponent } from './login/twitter-button/twitter-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';



@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FormsModule,
    ErrorsModule
  ]
  declarations: [
    PostBrowserComponent,
    LoginComponent,
    HomeComponent,
    GoogleButtonComponent,
    GithubButtonComponent,
    FacebookButtonComponent,
    TwitterButtonComponent,
    UserProfileComponent,
    KeysPipe,
    AdminProfileComponent
  ],
  providers: [
    AuthService,
    CanReadGuard,
    AdminGuard
  ]
})
export class CoreModule { }
