import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[nextDropzone]',
})
export class NextDropzoneDirective {
  @HostBinding('style.background') public background = '#fff';

  constructor() {}

  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#fff';
  }

  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#fff';
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
    }
  }
}
