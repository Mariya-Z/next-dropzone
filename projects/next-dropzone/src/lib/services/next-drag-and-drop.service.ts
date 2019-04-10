import {Injectable, HostBinding} from '@angular/core';

@Injectable()
export class NextDragAndDropService {
  public removeBorder: boolean = false;

  @HostBinding('style.background') public background;
  @HostBinding('style.border') public border;
  @HostBinding('style.border-radius') public borderRadius;
  @HostBinding('style.border-color') public borderColor;

  public onDrop(): void {
    this.removeBorder = true;
  }
}
