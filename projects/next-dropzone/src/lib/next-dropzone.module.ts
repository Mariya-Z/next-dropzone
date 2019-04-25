import {NgModule} from '@angular/core';
import {NextDropzoneDirective} from './next-dropzone/next-dropzone.directive';
import {NextFileUploadDirective} from './next-file-upload/next-file-upload.directive';

@NgModule({
  declarations: [NextDropzoneDirective, NextFileUploadDirective],
  exports: [NextDropzoneDirective, NextFileUploadDirective],
})
export class NextDropzoneModule {}
