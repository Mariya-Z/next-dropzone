import {Injectable, HostBinding} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NextDragAndDropService {
  private removeBorder: boolean = false;

  public setRemoveBorder(val: boolean): void {
    this.removeBorder = val;
  }

  public getRemoveBorder(): boolean {
    return this.removeBorder;
  }

  public onDrop(): void {
    this.removeBorder = true;
  }
}
