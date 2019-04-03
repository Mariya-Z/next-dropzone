import {Directive, HostListener, HostBinding, Output, EventEmitter, ElementRef} from '@angular/core';
// import '../../vars.scss';
@Directive({
  selector: '[nextDropzone]',
})
export class NextDropzoneDirective {
  @HostBinding('style.background') public background;
  @HostBinding('style.border') public border;
  @HostBinding('style.border-radius') public borderRadius;
  @HostBinding('style.border-color') public borderColor;

  @Output() public filesSelected = new EventEmitter<File[]>();

  public fileToUpload: File[] = [];

  constructor(private el: ElementRef) {}

  @HostListener('window:dragenter', ['$event']) public onDragEnter(evt) {
    console.log('window:dragenter');
    if (evt.dataTransfer.types[0] === 'Files') {
      this.border = '2px solid';
      this.borderRadius = '4px';
      this.borderColor = '$blue';
    }
  }

  @HostListener('window:drag', ['$event']) public onDragEnd(evt) {
    // if (evt.dataTransfer.types[0] === 'Files') {
    console.log('end');
    evt.preventDefault();
    evt.stopPropagation();
    this.background = this.el.nativeElement.background;
    this.border = this.el.nativeElement.border;
    this.borderRadius = this.el.nativeElement.borderRadius;
    // }
  }

  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    console.log('dragover');
    if (evt.dataTransfer.types[0] === 'Files') {
      evt.preventDefault();
      evt.stopPropagation();
      this.border = '2px solid';
      this.borderRadius = '4px';
      this.background = '$blue-light';
      this.borderColor = '$blue';
    }
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    console.log('dragleave');
    if (evt.dataTransfer.types[0] === 'Files') {
      evt.preventDefault();
      evt.stopPropagation();
      this.background = this.el.nativeElement.background;
      // this.border = this.el.nativeElement.border;
    }
  }

  @HostListener('drop', ['$event']) public onDrop(evt) {
    console.log('drop');
    // if (evt.dataTransfer.types[0] === 'Files') {
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
    // }
  }
}
