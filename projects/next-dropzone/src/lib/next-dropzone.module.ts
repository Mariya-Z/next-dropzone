import {NgModule} from '@angular/core';
import {NextDropzoneComponent} from './next-dropzone-old/next-dropzone.component';
import {NextDropzoneDirective} from './next-dropzone/next-dropzone.directive';
import {NextDragAndDropService} from './services/next-drag-and-drop.service';
import { NextFileUploadDirective } from './next-file-upload/next-file-upload.directive';

@NgModule({
  declarations: [NextDropzoneComponent, NextDropzoneDirective, NextFileUploadDirective],
  exports: [NextDropzoneComponent, NextDropzoneDirective, NextFileUploadDirective],
  providers: [NextDragAndDropService],
})
export class NextDropzoneModule {}
