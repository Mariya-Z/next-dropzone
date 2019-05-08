## Project setup

```
npm i next-dropzone
```

## Basic usage example

### Add module into your app

```
import {NextDropzoneModule} from 'next-dropzone';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NextDropzoneModule
  ],
})
export class AppModule {}
```

### Add markup to the template

```
<article nextDropzone>
  <section>
    <label nextFileUpload>Select</label>
    or drop file here to upload
  </section>
</article>
```

### Library has 2 directives nextDropzone and nextFileUpload. Directive nextDropzone highligth appropriate tag during file drag events. If file is dropped on corresponding tag directive will emit event with this file. Directive nextFileUpload lets download file like in usual file input and also emit event for parent component. Directives can be used together or separately