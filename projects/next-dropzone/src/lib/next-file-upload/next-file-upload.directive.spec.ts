import {NextFileUploadDirective} from './next-file-upload.directive';

describe('NextFileUploadDirective', () => {
  it('should create an instance', () => {
    const directive = new NextFileUploadDirective();
    expect(directive).toBeTruthy();
  });

  it('should catch click on host element', () => {
    const directive = new NextFileUploadDirective();
    const handleFileInputSpy = spyOn(directive, 'handleFileInput');
    directive.onClick();

    expect(directive.fileSelector.type).toBe('file');
    expect(directive.fileSelector.multiple).toBeTruthy();
    expect(directive.fileSelector.accept).toBe('*.*');
    expect(directive.fileSelector.disabled).toBeFalsy();

    directive.fileSelector.onchange(null);
    expect(handleFileInputSpy).toHaveBeenCalled();
  });

  it('sould emit event after files have been selected', () => {
    const directive = new NextFileUploadDirective();
    const filesSelectedSpy = spyOn(directive.filesSelected, 'emit');
    directive.handleFileInput(('filename' as undefined) as FileList);
    expect(filesSelectedSpy).toHaveBeenCalled();
  });
});
