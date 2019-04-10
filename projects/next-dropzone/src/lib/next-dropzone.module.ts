import {NgModule} from '@angular/core';
import {NextDropzoneComponent} from './next-dropzone/next-dropzone.component';
import {NextDropzoneDirective} from './directive/next-dropzone.directive';
import {NextDragAndDropService} from './services/next-drag-and-drop.service';

@NgModule({
  declarations: [NextDropzoneComponent, NextDropzoneDirective],
  exports: [NextDropzoneComponent, NextDropzoneDirective],
  providers: [NextDragAndDropService],
})
export class NextDropzoneModule {}
