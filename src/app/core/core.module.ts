import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostBrowserComponent } from './post-browser/post-browser.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PostBrowserComponent]
})
export class CoreModule { }
