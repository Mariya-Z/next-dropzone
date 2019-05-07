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
    border: 2px solid transparent;
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

  .zone \{
    height: 100px;
    flex: 1;
    background-color: aqua;
    border: 2px solid transparent;
  \}

  .a \{
    background-color: deeppink;
  \}

  .download\{
    background-color: #0460a9;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin: 20px 0;
    font-size: 16px;
    cursor: pointer;
  \}

  .download-btn \{
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin: 20px 0;
    font-size: 16px;
    cursor: pointer;
  \}
  </style>
`;

export const customTheme = {
  dragenter: {
    border: '2px solid',
    'border-radius': '4px',
    'border-color': 'red',
  },
  dragover: {
    border: '2px solid',
    'border-radius': '4px',
    'border-color': '#0460a9',
    background: 'orange',
  },
};

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
    alert(event);
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
      ${styles}
      <button nextFileUpload [disabled]="true" class="download-btn"
      >
      select [disabled]="true"
      </button>
      <button nextFileUpload [disabled]="enabled" class="download-btn"
      >
      select2 [disabled]="enabled"
      </button>
      <button nextFileUpload class="download-btn"
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
  }))
  .add('dropzone', () => ({
    template: `
    ${styles}
    <div nextDropzone (filesSelected)="onGetFiles($event)" class="zone">
      dropzone
    </div>

    <p></p>

    <div nextDropzone (filesSelected)="onGetFiles($event)" class="zone a">
      dropzone
    </div>
    `,
    props: {
      onGetFiles: (event) => {
        alert('You have load ' + event[0].name);
      },
    },
  }))
  .add('custom dropzone', () => ({
    template: `
    ${styles}
    <div nextDropzone (filesSelected)="onGetFiles($event)" class="zone" [theme]="customTheme">
      custom dropzone
    </div>

    <p></p>

    <div nextDropzone (filesSelected)="onGetFiles($event)" class="zone a">
      dropzone
    </div>
    `,
    props: {
      customTheme,
      onGetFiles: (event) => {
        alert('You have load ' + event[0].name);
      },
    },
  }));
