## Directive nextDropzone

Directive nextDropzone highlight element during drag and drop file

### Tempalte for this example looks like code below

```
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

<div nextDropzone class="zone">
    dropzone
</div>
<br/>
<div nextDropzone class="zone highlight">
    dropzone
</div>

```