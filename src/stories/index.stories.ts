import {storiesOf, moduleMetadata} from '@storybook/angular';

import defaultText from './default.md';

import {
  NextFileUploadDirective,
  NextDropzoneDirective,
  NextDragAndDropService,
} from '../../projects/next-dropzone/src/public_api';

import {Component} from '@angular/core';

const styles = `
  <style>
  :host \{
    display: block;
  \}

  :host.disabled .uploadfile \{
    opacity: 0.5;
  \}

  .uploadfile \{
    min-width: 400px;
    min-height: 200px;
    width: 100%;
  \}

  .uploadfile__button \{
    padding: 10px 15px;
    margin: 5px;
    border-radius: 2px;
    border-color: #0460a9;
    background-color: #0460a9;
    color: white;
    cursor: pointer;
  \}

  :host.enabled .uploadfile__button \{
    cursor: pointer;
  \}

  .uploadfile__button:hover \{
    background-color: #023761;
  \}

  :host.enabled .uploadfile__button:hover \{
    background-color: #023761;
  \}

  .uploadfile__content \{
    border: 1px dashed #9d9d9d;
    border-radius: 4px;
    min-height: 200px;
    display: flex;
    flex: 1;
    margin: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    user-select: none;
  \}

  </style>
`;

@Component({
  selector: 'next-file-upload',
  template: `
    ${styles}
    <article class="uploadfile" nextDropzone>
      <section class="uploadfile__content">
        <label class="uploadfile__button" nextFileUpload (filesSelected)="onGetFiles($event)">Select</label>
        or drop file here to upload
      </section>
    </article>
  `,
})
export class AppComponent {
  public onGetFiles(event): void {
    console.log(event);
  }
}

storiesOf('Next file upload', module)
  .addDecorator(
    moduleMetadata({
      declarations: [NextFileUploadDirective, NextDropzoneDirective, AppComponent],
      providers: [NextDragAndDropService],
    }),
  )
  .add(
    'Install',
    () => ({
      template: `
      <button nextFileUpload [disabled]="true"
      >
      select [disabled]="true"
      </button>
      <button nextFileUpload [disabled]="enabled"
      >
      select2 [disabled]="enabled"
      </button>
      <button nextFileUpload
      >
      select2
      </button>
      <p nextFileUpload>
        nextFileUpload
      </p>
      <p nextFileUpload [disabled]="true">
        nextFileUpload disabled
      </p>
    `,
      props: {},
    }),
    {notes: defaultText},
  )
  .add('both directives', () => ({
    template: `
    <next-file-upload>
    </next-file-upload>
    `,
  }))
  .add('tabIndex', () => ({
    template: `
    <p nextFileUpload [tabIndex]='3'>
      tabIndex 3
    </p>
    <p nextFileUpload [tabIndex]='4'>
      tabIndex 4
    </p>
    <p nextFileUpload [tabIndex]='2'>
      tabIndex 2
    </p>
    <p nextFileUpload [tabIndex]='1'>
      tabIndex 1
    </p>
    `,
  }));
