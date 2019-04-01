import {Component, Input, HostBinding, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'next-dropzone',
  templateUrl: './next-dropzone.component.html',
  styleUrls: ['./next-dropzone.component.scss'],
})
export class NextDropzoneComponent {

  // These lines will be added (or removed in future commits)
  // public _uniqueId: string;

  // @Input() public id: string = this._uniqueId;
  // @Input() public multiple = false;
  // @Input() public accept = '*.*';

  // @HostBinding('class.disabled')
  // @Input() public disabled = false;

  // @HostBinding()
  // @Input() public tabindex = 0;

  // @Output() public filesSelected = new EventEmitter<File[]>();

  @ViewChild('input') public inputFile: ElementRef;

  public fileToUpload: File = null;

  public handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
  }

  public onClick(): void {
    this.inputFile.nativeElement.checked();
  }

}
