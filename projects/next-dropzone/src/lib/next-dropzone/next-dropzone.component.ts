import {Component, Input, HostBinding, Output, EventEmitter} from '@angular/core';

let counter = 0;

@Component({
  selector: 'next-dropzone',
  templateUrl: './next-dropzone.component.html',
  styleUrls: ['./next-dropzone.component.scss'],
})
export class NextDropzoneComponent {
  @Input() public id: string = `next-dropzone-${++counter}`;
  @Input() public multiple = false;
  @Input() public accept = '*.*';

  @HostBinding('class.disabled') @Input() public disabled = false;

  @HostBinding('tabindex') @Input() public tabindex = 0;

  @Output() public filesSelected = new EventEmitter<File[]>();

  public fileToUpload: File[] = [];

  public handleFileInput(files: FileList) {
    Array.from(files).forEach((element) => {
      this.fileToUpload.push(element);
    });
    this.filesSelected.emit(this.fileToUpload);
  }
}
