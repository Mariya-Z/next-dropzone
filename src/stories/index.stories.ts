import {storiesOf, moduleMetadata} from '@storybook/angular';

import defaultText from './default.md';

import {NextDropzoneComponent} from '../../projects/next-dropzone/src/public_api';

const styles = `
  <style>
  </style>
`;

storiesOf('Next file upload', module)
  .addDecorator(
    moduleMetadata({
      declarations: [NextDropzoneComponent],
    }),
  )
  .add(
    'Install',
    () => ({
      template: `
      <next-dropzone>
      </next-dropzone>
    `,
      props: {},
    }),
    {notes: defaultText},
  )
  .add('tadIndex', () => ({
    template: `
      <next-dropzone [tabindex]="2">
      </next-dropzone>
      <next-dropzone [tabindex]="1">
      </next-dropzone>
      <next-dropzone [tabindex]="4">
      </next-dropzone>
      <next-dropzone [tabindex]="3">
      </next-dropzone>
    `,
  }));
