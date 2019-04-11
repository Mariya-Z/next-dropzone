import {storiesOf, moduleMetadata} from '@storybook/angular';

import defaultText from './default.md';

import {
  NextFileUploadDirective,
  NextDropzoneDirective,
  NextDragAndDropService,
} from '../../projects/next-dropzone/src/public_api';

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
    background-color: #0460a9;
    color: white;

    cursor: pointer;
  \}

  .uploadfile__button:hover \{
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


    &__button \{
      outline: 1px dotted #000;
      outline: -webkit-focus-ring-color auto 5px;
    \}

  </style>
`;

storiesOf('Next file upload', module)
  .addDecorator(
    moduleMetadata({
      declarations: [NextFileUploadDirective, NextDropzoneDirective],
      providers: [NextDragAndDropService],
    }),
  )
  .add(
    'Install',
    () => ({
      template: `
      <button nextFileUpload>
      select
      </button>
      <p nextFileUpload>
        nextFileUpload
      </p>
    `,
      props: {},
    }),
    {notes: defaultText},
  )
  .add('both directives', () => ({
    template: `
    ${styles}
    <article class="uploadfile" nextDropzone>
      <section class="uploadfile__content">
        <label class="uploadfile__button" nextFileUpload>Select</label>
        or drop file here to upload
      </section>
    </article>
    `,
  }))
  .add('tadIndex', () => ({
    template: `
    <div nextDropzone>
      <p>
        tadIndex
      </p>
    </div>
    `,
  }));
