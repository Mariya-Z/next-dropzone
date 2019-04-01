import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NextDropzoneModule} from 'next-dropzone';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NextDropzoneModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
