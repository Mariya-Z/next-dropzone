import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[nextDropzone]',
})
export class NextDropzoneDirective {
  @HostBinding('style.background') public background = '#fff';
  @HostBinding('style.border') public border = '2px solid';
  @HostBinding('style.border-radius') public borderRadius = '4px';
  @HostBinding('style.border-color') public borderColor = 'transparent';

  constructor() {}

  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
    this.borderColor = '#0460a9';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#fff';
    this.borderColor = 'transparent';
  }

  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#fff';
    this.borderColor = 'transparent';
    const files = evt.dataTransfer.files;
    // if (files.length > 0) {
    // }
  }
}
