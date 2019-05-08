## Directive nextFileUpload

Directive nextFileUpload has accept tabindex.

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

  .download-btn\:focus \{
    outline: #D13A32 solid 2px;
  \}
</style>

<div>
    <button nextFileUpload class="download-btn" [tabIndex]='1'>
        tabIndex 1
    </button>
</div>
<div>
    <button nextFileUpload class="download-btn" [tabIndex]='4'>
        tabIndex 4
    </button>
</div>
<div>
    <button nextFileUpload class="download-btn" [tabIndex]='2'>
        tabIndex 2
    </button>
</div>
<div>
    <button nextFileUpload class="download-btn" [tabIndex]='3'>
        tabIndex 3
    </button>
</div>

```
