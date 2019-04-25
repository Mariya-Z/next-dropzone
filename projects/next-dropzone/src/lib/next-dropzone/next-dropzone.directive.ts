import {Directive, HostListener, HostBinding, Output, EventEmitter, ElementRef, Input, DoCheck} from '@angular/core';
import {NextDragAndDropService} from '../services/next-drag-and-drop.service';
import {defaultTheme, Theme} from '../theme/theme';

@Directive({
  selector: '[nextDropzone]',
})
export class NextDropzoneDirective implements DoCheck {
  @Input() public theme: Theme = defaultTheme;
  @Output() public filesSelected = new EventEmitter<File[]>();

  @HostBinding('style.background') public background: string;
  @HostBinding('style.border') public border: string;
  @HostBinding('style.border-radius') public borderRadius: string;
  @HostBinding('style.border-color') public borderColor: string;

  public fileToUpload: File[] = [];

  constructor(private el: ElementRef, private dragAndDrop: NextDragAndDropService) {}

  public ngDoCheck(): void {
    if (this.dragAndDrop.getRemoveBorder()) {
      this.onDragEnd();
    }
  }

  @HostListener('window:dragover', ['$event']) public onWindowDragOver(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.onDragEnter(event);
  }

  @HostListener('window:dragenter', ['$event']) public onDragEnter(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragAndDrop.setRemoveBorder(false);
    if (event.dataTransfer.types[0] === 'Files') {
      this.borderColor = this.theme.dragenter['border-color'];
      this.border = this.theme.dragenter.border;
      this.borderRadius = this.theme.dragenter['border-radius'];
    }
  }

  @HostListener('window:dragend', ['$event']) public onDragEnd(): void {
    this.background = this.el.nativeElement.background;
    this.border = this.el.nativeElement.border;
    this.borderColor = this.el.nativeElement.borderColor;
    this.borderRadius = this.el.nativeElement.borderRadius;
  }

  @HostListener('dragover', ['$event']) public onDragOver(event): void {
    if (event.dataTransfer.types[0] === 'Files') {
      this.borderColor = this.theme.dragover['border-color'];
      this.background = this.theme.dragover.background;
      this.border = this.theme.dragover.border;
      this.borderRadius = this.theme.dragover['border-radius'];
    }
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event): void {
    if (event.dataTransfer.types[0] === 'Files') {
      event.preventDefault();
      event.stopPropagation();
      this.background = this.el.nativeElement.background;
    }
  }

  @HostListener('drop', ['$event']) public onDrop(event): void {
    if (event.dataTransfer.types[0] === 'Files') {
      event.preventDefault();
      event.stopPropagation();
      this.background = this.el.nativeElement.background;
      this.border = this.el.nativeElement.border;
      this.borderColor = this.el.nativeElement.borderColor;
      this.borderRadius = this.el.nativeElement.borderRadius;
      this.dragAndDrop.onDrop();
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        Array.from(files).forEach((element: File) => {
          this.fileToUpload.push(element);
        });
        this.filesSelected.emit(this.fileToUpload);
      }
    }
  }

  @HostListener('window:drop', ['$event']) public onWindowDrop(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.onDragEnd();
  }

  @HostListener('window:dragleave', ['$event']) public onWindowLeave(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.onDragEnd();
  }
}
