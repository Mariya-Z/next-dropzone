## Directive nextFileUpload

Directive nextFileUpload has accept input. By default use can download any file

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
</style>

<h2>Buttons with nextFileUpload multiple</h2>
<div>
    <button nextFileUpload class="download-btn">
        select
    </button>
    <span>Using nextFileUpload without any input</span>
</div>
<div>
    <button nextFileUpload class="download-btn" [accept]="'.txt'">
        select
    </button>
    <span>Using nextFileUpload with [accept]="'.txt'"</span>
</div>
<div>
    <button nextFileUpload class="download-btn" [accept]="'.docx'">
        select
    </button>
    <span>Using nextFileUpload with [accept]="'.docx'"</span>
</div>

```
