import {Directive, Input, HostBinding, Output, EventEmitter, HostListener} from '@angular/core';

let counter = 0;

@Directive({
  selector: '[nextFileUpload]',
})
export class NextFileUploadDirective {
  @Input() public id: string = `next-dropzone-${++counter}`;
  @Input() public multiple = true;
  @Input() public accept = '*.*';

  @HostBinding('attr.disabled') @Input() public disabled;
  @HostBinding('tabIndex') @Input() public tabIndex = 0;

  @Output() public filesSelected = new EventEmitter<File[]>();

  public fileToUpload: File[] = [];
  public fileSelector = document.createElement('input');

  @HostListener('click', ['$event']) public onClick() {
    this.fileSelector.type = 'file';
    this.fileSelector.multiple = this.multiple;
    this.fileSelector.accept = this.accept;
    this.fileSelector.disabled = this.disabled;
    this.fileSelector.click();
    this.fileSelector.onchange = () => {
      this.handleFileInput(this.fileSelector.files);
    };
  }

  public handleFileInput(files: FileList) {
    Array.from(files).forEach((element) => {
      this.fileToUpload.push(element);
    });
    this.filesSelected.emit(this.fileToUpload);
  }
}
