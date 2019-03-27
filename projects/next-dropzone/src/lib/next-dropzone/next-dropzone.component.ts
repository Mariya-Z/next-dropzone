import {Component, Input, HostBinding, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'next-dropzone',
  templateUrl: './next-dropzone.component.html',
  styleUrls: ['./next-dropzone.component.scss'],
})
export class NextDropzoneComponent {
  public _uniqueId: string;

  @Input() public id: string = this._uniqueId;
  @Input() public multiple = false;
  @Input() public accept = '*.*';

  @HostBinding('class.disabled')
  @Input() public disabled = false;

  @HostBinding()
  @Input() public tabindex = 0;

  @Output() public filesSelected = new EventEmitter<File[]>();

  @ViewChild('input') public inputFile: ElementRef;

  public onClick(): void {
    console.log(this.inputFile);
    // this.inputFile.click();
    this.inputFile.nativeElement.checked();
  }

}
