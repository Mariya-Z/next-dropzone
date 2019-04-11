import {NgModule} from '@angular/core';
import {NextDropzoneDirective} from './next-dropzone/next-dropzone.directive';
import {NextDragAndDropService} from './services/next-drag-and-drop.service';
import {NextFileUploadDirective} from './next-file-upload/next-file-upload.directive';

@NgModule({
  declarations: [NextDropzoneDirective, NextFileUploadDirective],
  exports: [NextDropzoneDirective, NextFileUploadDirective],
  providers: [NextDragAndDropService],
})
export class NextDropzoneModule {}
