import {storiesOf, moduleMetadata} from '@storybook/angular';

import defaultText from './default.md';
import dropzoneText from './dropzone.md';
import themeText from './theme.md';
import fileuploadText from './fileupload.md';
import multiText from './multi.md';
import acceptText from './accept.md';
import tabindexText from './tabindex.md';

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
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
  \}

  .highlight \{
    background-color: deeppink;
  \}

  .download-btn \{
    background-color: #0460a9;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 10px 5px;
    font-size: 16px;
    cursor: pointer;
  \}

  .download-btn\:focus \{
    outline: #D13A32 solid 2px;
  \}

  .download-btn\:hover\:enabled \{
    background-color: #0a4f8f;
  }

  .download-btn\:disabled \{
    opacity: 0.7;
    cursor: default;
  \}

  .fileupload \{
    margin: 10px 5px;
    background-color: #e3e3e3;
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
      <next-file-upload>
      </next-file-upload>
      `,
      props: {
        onGetFiles: (event) => {
          alert('You have load ' + event.map((el) => el.name));
        },
      },
    }),
    {notes: defaultText},
  )
  .add(
    'nextFileUpload disabled/enabled',
    () => ({
      template: `
      ${styles}
      <h2>Buttons with nextFileUpload directive</h2>
      <div>
        <button nextFileUpload class="download-btn" (filesSelected)="onGetFiles($event)">
          select
        </button>
        <span>Using nextFileUpload without any input</span>
      </div>
      <div>
        <button nextFileUpload [disabled]="true" class="download-btn" (filesSelected)="onGetFiles($event)">
          select
        </button>
        <span>Add input property [disabled]="true"</span>
      </div>
      <div>
        <button nextFileUpload [disabled]="enabled" class="download-btn" (filesSelected)="onGetFiles($event)">
          select
        </button>
        <span>Add input property [disabled]="enabled"</span>
      </div>

      <h2>Paragraphs with nextFileUpload directive</h2>
      <p nextFileUpload class="fileupload" (filesSelected)="onGetFiles($event)">
        Click to select file
      </p>
      <p nextFileUpload [disabled]="true" class="fileupload" (filesSelected)="onGetFiles($event)">
        You can't select files because [disabled]="true"
      </p>
      <p nextFileUpload [disabled]="enabled" class="fileupload" (filesSelected)="onGetFiles($event)">
        You can't select files because [disabled]="enabled"
      </p>
    `,
      props: {
        onGetFiles: (event) => {
          alert('You have load ' + event.map((el) => el.name));
        },
      },
    }),
    {notes: fileuploadText},
  )
  .add(
    'nextFileUpload multiple',
    () => ({
      template: `
      ${styles}
      <h2>Buttons with nextFileUpload multiple</h2>
      <div>
        <button nextFileUpload class="download-btn" (filesSelected)="onGetFiles($event)">
          select
        </button>
        <span>Using nextFileUpload without any input</span>
      </div>
      <div>
        <button nextFileUpload class="download-btn" (filesSelected)="onGetFiles($event)" [multiple]="false">
          select
        </button>
        <span>Using nextFileUpload with [multiple]="false"</span>
      </div>
      <div>
        <button nextFileUpload class="download-btn" (filesSelected)="onGetFiles($event)" [multiple]="true">
          select
        </button>
        <span>Using nextFileUpload with [multiple]="true"</span>
      </div>
    `,
      props: {
        onGetFiles: (event) => {
          alert('You have load ' + event.map((el) => el.name));
        },
      },
    }),
    {notes: multiText},
  )
  .add(
    'nextFileUpload accept',
    () => ({
      template: `
      ${styles}
      <h2>Buttons with nextFileUpload multiple</h2>
      <div>
        <button nextFileUpload class="download-btn" (filesSelected)="onGetFiles($event)">
          select
        </button>
        <span>Using nextFileUpload without any input</span>
      </div>
      <div>
        <button nextFileUpload class="download-btn" (filesSelected)="onGetFiles($event)" [accept]="'.txt'">
          select
        </button>
        <span>Using nextFileUpload with [accept]="'.txt'"</span>
      </div>
      <div>
        <button nextFileUpload class="download-btn" (filesSelected)="onGetFiles($event)" [accept]="'.docx'">
          select
        </button>
        <span>Using nextFileUpload with [accept]="'.docx'"</span>
      </div>
    `,
      props: {
        onGetFiles: (event) => {
          alert('You have load ' + event.map((el) => el.name));
        },
      },
    }),
    {notes: acceptText},
  )
  .add(
    'nextFileUpload tabIndex',
    () => ({
      template: `
    ${styles}
    <div>
      <button nextFileUpload class="download-btn" (filesSelected)="onGetFiles($event)" [tabIndex]='1'>
        tabIndex 1
      </button>
    </div>
    <div>
      <button nextFileUpload class="download-btn" (filesSelected)="onGetFiles($event)" [tabIndex]='4'>
        tabIndex 4
      </button>
    </div>
    <div>
      <button nextFileUpload class="download-btn" (filesSelected)="onGetFiles($event)" [tabIndex]='2'>
        tabIndex 2
      </button>
    </div>
    <div>
      <button nextFileUpload class="download-btn" (filesSelected)="onGetFiles($event)" [tabIndex]='3'>
        tabIndex 3
      </button>
    </div>
    `,
      props: {
        onGetFiles: (event) => {
          alert('You have load ' + event.map((el) => el.name));
        },
      },
    }),
    {notes: tabindexText},
  )
  .add(
    'nextDropzone',
    () => ({
      template: `
      ${styles}
      <div nextDropzone (filesSelected)="onGetFiles($event)" class="zone">
        <p class="title">Drag files here</p>
      </div>
      <br/>
      <div nextDropzone (filesSelected)="onGetFiles($event)" class="zone highlight">
        Drag files here
      </div>
    `,
      props: {
        onGetFiles: (event) => {
          alert('You have load ' + event.map((el) => el.name));
        },
      },
    }),
    {notes: dropzoneText},
  )
  .add(
    'nextDropzone theme',
    () => ({
      template: `
    ${styles}
    <div nextDropzone (filesSelected)="onGetFiles($event)" class="zone" [theme]="customTheme">
     dropzone with custom theme
    </div>
    <br/>
    <div nextDropzone (filesSelected)="onGetFiles($event)" class="zone highlight">
      dropzone
    </div>
    `,
      props: {
        customTheme,
        onGetFiles: (event) => {
          alert('You have load ' + event.map((el) => el.name));
        },
      },
    }),
    {notes: themeText},
  );
