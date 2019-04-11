import {Directive, Input, HostBinding, Output, EventEmitter, HostListener, AfterViewInit} from '@angular/core';

let counter = 0;

@Directive({
  selector: '[nextFileUpload]',
  // host: {
  //   '[attr.disabled]': 'disabled',
  // },
})
export class NextFileUploadDirective implements AfterViewInit {
  @Input() public id: string = `next-dropzone-${++counter}`;
  @Input() public multiple = true;
  @Input() public accept = '*.*';

  // @Input() public disabled = false;
  @HostBinding('attr.disabled') @Input() public disabled;

  @HostBinding('tabIndex') @Input() public tabIndex = 0;

  @Output() public filesSelected = new EventEmitter<File[]>();

  public ngAfterViewInit(): void {
    // if (this.disabled) {
      // @HostBinding('attr.disabled') let att = 'disabled';
    // }
  }

  public fileToUpload: File[] = [];

  public fileSelector = document.createElement('input');

  @HostListener('click', ['$event']) public onClick(event) {
    this.fileSelector.type = 'file';
    this.fileSelector.multiple = this.multiple;
    this.fileSelector.accept = this.accept;
    // this.fileSelector.disabled = this.disabled;
    this.fileSelector.tabIndex = this.tabIndex; // ???
    this.fileSelector.click();
    this.fileSelector.onchange = (e) => {
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
