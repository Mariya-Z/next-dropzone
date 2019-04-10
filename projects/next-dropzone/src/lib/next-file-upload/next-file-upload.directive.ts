import {Directive, Input, HostBinding, Output, EventEmitter, HostListener} from '@angular/core';

let counter = 0;

@Directive({
  selector: '[nextFileUpload]',
})
export class NextFileUploadDirective {
  @Input() public id: string = `next-dropzone-${++counter}`;
  @Input() public multiple = false;
  @Input() public accept = '*.*';

  @HostBinding('class.disabled') @Input() public disabled = false;

  @HostBinding('tabindex') @Input() public tabindex = 0;

  @Output() public filesSelected = new EventEmitter<File[]>();

  public fileToUpload: File[] = [];

  @HostListener('click', ['$event']) public onClick() {
    console.log('click');
  }

  public handleFileInput(files: FileList) {
    Array.from(files).forEach((element) => {
      this.fileToUpload.push(element);
    });
    this.filesSelected.emit(this.fileToUpload);
  }
}
