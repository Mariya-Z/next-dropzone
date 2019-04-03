import {Directive, HostListener, HostBinding, Output, EventEmitter, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[nextDropzone]',
})
export class NextDropzoneDirective implements OnInit {
  @HostBinding('style.background') public background;
  @HostBinding('style.border') public border;
  @HostBinding('style.border-radius') public borderRadius;
  @HostBinding('style.border-color') public borderColor;

  @Output() public filesSelected = new EventEmitter<File[]>();

  public fileToUpload: File[] = [];

  constructor(private renderer: Renderer2) {
    renderer.listen(window, 'drag', () => {
      this.borderColor = 'orange';
    });
  }

  public ngOnInit(): void {
    this.renderer.listen(window, 'drag', () => {
      // this.background = 'pink';
      // this.borderColor = 'green';
    });
  }

  @HostListener('window:keyup', ['$event']) public keyEvent(evt) {
    console.log(evt);
    this.background = 'red';
  }

  @HostListener('window:move', ['$event']) public onDrag(evt) {
    console.log(evt);
    this.background = 'red';
  }

  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    // if (evt.dataTransfer.types[0] === 'Files') {
      evt.preventDefault();
      evt.stopPropagation();
      this.border = '2px solid';
      this.borderRadius = '4px';
      this.background = 'rgba(82, 145, 221, 0.3)';
      this.borderColor = '#0460a9';
    // }
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
    if (files.length > 0) {
      Array.from(files).forEach((element: File) => {
        this.fileToUpload.push(element);
      });
      this.filesSelected.emit(this.fileToUpload);
    }
  }
}
