## Directive nextFileUpload

Directive nextFileUpload can be add for any tag. It has disabled input property. There are examples of using this input. To prohibit open fileSelector disabled should be equal true. To let open fileSelector directive can be used with out disabled input or disabled should be equal enabled.

### Tempalte for this example looks like code below

```
<style>
  .download-btn {
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
  }

  .download-btn:hover:enabled {
    background-color: #0a4f8f;
  }

  .download-btn:disabled {
    opacity: 0.7;
    cursor: default;
  }

  .fileupload {
    margin: 10px 5px;
    background-color: #e3e3e3;
    cursor: pointer;
  }
</style>

<h2>Buttons with nextFileUpload directive</h2>
<div>
    <button nextFileUpload class="download-btn" >
        select
    </button>
    <span>Using nextFileUpload without any input</span>
</div>
<div>
    <button nextFileUpload [disabled]="true" class="download-btn">
        select
    </button>
    <span>Add input property [disabled]="true"</span>
</div>
<div>
    <button nextFileUpload [disabled]="enabled" class="download-btn">
        select
    </button>
    <span>Add input property [disabled]="enabled"</span>
</div>

<h2>Paragraphs with nextFileUpload directive</h2>
<p nextFileUpload class="fileupload">
    Click to select file
</p>
<p nextFileUpload [disabled]="true" class="fileupload">
    You can't select files because [disabled]="true"
</p>
<p nextFileUpload [disabled]="enabled" class="fileupload">
    You can't select files because [disabled]="enabled"
</p>
```
