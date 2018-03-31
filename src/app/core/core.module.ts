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

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FormsModule
  ],
  declarations: [PostBrowserComponent],
  providers: [AuthService, CanReadGuard, AdminGuard]
})
export class CoreModule { }
