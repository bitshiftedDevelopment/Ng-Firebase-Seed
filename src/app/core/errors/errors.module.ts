import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOnlyComponent } from './admin-only/admin-only.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AdminOnlyComponent
  ],
  declarations: [AdminOnlyComponent, NotFoundComponent]
})
export class ErrorsModule { }
