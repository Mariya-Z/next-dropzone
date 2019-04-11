import {Directive, Input, HostBinding, Output, EventEmitter, HostListener} from '@angular/core';

let counter = 0;

@Directive({
  selector: '[nextFileUpload]',
})
export class NextFileUploadDirective {
  @Input() public id: string = `next-dropzone-${++counter}`;
  @Input() public multiple = true;
  @Input() public accept = '*.*';

  @HostBinding('class.disabled') @Input() public disabled = false;

  @HostBinding('tabindex') @Input() public tabindex = 0;

  @Output() public filesSelected = new EventEmitter<File[]>();

  public fileToUpload: File[] = [];

  public fileSelector = document.createElement('input');

  @HostListener('click', ['$event']) public onClick(event) {
    this.fileSelector.type = 'file';
    this.fileSelector.multiple = this.multiple;
    this.fileSelector.accept = this.accept;

    this.fileSelector.onchange = (e) => {
      console.log(e);
    }
    
    // this.fileSelector.addEventListener('select', (evt) => {
    //   console.log('change');
    //   console.log(evt.target);
    //   console.log(evt);
    //   // this.handleFileInput(evt.target.files);

    //   // this.handleFileInput(files);
    // });
    this.fileSelector.click();
  }

  public handleFileInput(files: FileList) {
    Array.from(files).forEach((element) => {
      this.fileToUpload.push(element);
    });
    this.filesSelected.emit(this.fileToUpload);
  }
}
