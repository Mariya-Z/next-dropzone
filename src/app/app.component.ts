import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'next-dropzone-lib-app';

  public onGetFiles(event): void {
    console.log(event);
  }
}
