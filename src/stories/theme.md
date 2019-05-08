## Directive nextDropzone

Directive nextDropzone has theme input. It lets customize dropzone style during drag file.
Theme has to look like this:

```
theme = {
  dragenter: {
    border: string;
    'border-radius': string;
    'border-color': string;
  };
  dragover: {
    border: string;
    'border-radius': string;
    'border-color': string;
    background: string;
  };
}

```

### Tempalte for this example looks like code below

```
customTheme = {
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

<style>
  .zone {
    height: 100px;
    flex: 1;
    background-color: aqua;
    border: 2px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
  }

  .highlight {
    background-color: deeppink;
  }
</style>

<div nextDropzone class="zone" [theme]="customTheme">
    dropzone
</div>
<br/>
<div nextDropzone class="zone highlight">
    dropzone
</div>

```