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
<next-dropzone>
</next-dropzone>
```