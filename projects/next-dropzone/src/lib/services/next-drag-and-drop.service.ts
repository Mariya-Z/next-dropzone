import {Injectable, OnInit} from '@angular/core';
import {Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NextDragAndDropService implements OnInit {
  public dropped: Subject<void> = new Subject<void>();
  public fileDropped: Observable<void> = this.dropped.asObservable();

  public ngOnInit(): void {
    this.dropped.next();
  }

  public onDrop(): void {
    this.dropped.next();
  }
}
