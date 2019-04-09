import {Directive, HostListener, HostBinding, Output, EventEmitter, ElementRef, ViewChild, Input} from '@angular/core';
import { NextDropzoneComponent } from '../next-dropzone/next-dropzone.component';
@Directive({
  selector: '[nextDropzone]',
})
export class NextDropzoneDirective {
  @HostBinding('style.background') public background;
  @HostBinding('style.border') public border;
  @HostBinding('style.border-radius') public borderRadius;
  @HostBinding('style.border-color') public borderColor;

  @Output() public filesSelected = new EventEmitter<File[]>();

  @ViewChild('input') public dropzone: Input;

  public fileToUpload: File[] = [];
  public enabled: boolean = true;

  constructor(private el: ElementRef) { }

  @HostListener('window:dragenter', ['$event']) public onDragEnter(evt) {
    const input = this.el.nativeElement.getElementsByClassName('input');
    if (input.length > 0) {
      this.enabled = !input[0].disabled;
    }
    if (evt.dataTransfer.types[0] === 'Files' && this.enabled) {
      this.el.nativeElement.style.display = 'block';
      this.border = '2px solid';
      this.borderRadius = '4px';
      this.borderColor = '#0460a9';
    }
  }

  @HostListener('window:dragend', ['$event']) public onDragEnd(evt) {
    if (evt.dataTransfer.types[0] === 'Files' && this.enabled) {
      evt.preventDefault();
      evt.stopPropagation();
      this.background = this.el.nativeElement.background;
      this.border = this.el.nativeElement.border;
      this.borderRadius = this.el.nativeElement.borderRadius;
    }
  }

  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    if (evt.dataTransfer.types[0] === 'Files' && this.enabled) {
      evt.preventDefault();
      evt.stopPropagation();
      this.border = '2px solid';
      this.borderRadius = '4px';
      this.background = 'rgba(82, 145, 221, 0.3)';
      this.borderColor = '#0460a9';
    }
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    if (evt.dataTransfer.types[0] === 'Files'  && this.enabled) {
      evt.preventDefault();
      evt.stopPropagation();
      this.background = this.el.nativeElement.background;
    }
  }

  @HostListener('drop', ['$event']) public onDrop(evt) {
    if (evt.dataTransfer.types[0] === 'Files'  && this.enabled) {
      evt.preventDefault();
      evt.stopPropagation();
      this.background = this.el.nativeElement.background;
      this.border = this.el.nativeElement.border;
      const files = evt.dataTransfer.files;
      if (files.length > 0) {
        Array.from(files).forEach((element: File) => {
          this.fileToUpload.push(element);
        });
        this.filesSelected.emit(this.fileToUpload);
      }
    }
  }
}
