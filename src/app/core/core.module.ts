import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Auth imports
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { CanReadGuard } from './can-read.guard';
import { AdminGuard } from './admin.guard';
import { ErrorsModule } from './errors/errors.module';

// App imports


@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    ErrorsModule
  ],
  declarations: [],
  providers: [
    AuthService,
    CanReadGuard,
    AdminGuard
  ]
})
export class CoreModule { }
