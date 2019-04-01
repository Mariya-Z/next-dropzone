import {NgModule} from '@angular/core';
import {NextDropzoneComponent} from './next-dropzone/next-dropzone.component';
import { NextDropzoneDirective } from './directive/next-dropzone.directive';

@NgModule({
  declarations: [NextDropzoneComponent, NextDropzoneDirective],
  imports: [],
  exports: [NextDropzoneComponent],
})
export class NextDropzoneModule {}
