import {NextDropzoneDirective} from './next-dropzone.directive';
import {Component, DebugElement} from '@angular/core';
import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

@Component({
  template: `
    <p nextDropzone>
      text
    </p>
  `,
})
export class TestComponent {}

describe('NextDropzoneDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let componentEl: DebugElement;
  let directiveEl: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextDropzoneDirective, TestComponent],
    }).compileComponents();
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    componentEl = fixture.debugElement.query(By.css('p'));
    directiveEl = fixture.debugElement.query(By.directive(NextDropzoneDirective));
  }));

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should listen host events', () => {
    expect(directiveEl).not.toBeNull();
  });

  it('should listen window:dragend', () => {
    componentEl.nativeElement.background = '#fff';
    componentEl.nativeElement.border = '1px dashed';
    componentEl.nativeElement.borderColor = '#9d9d9d';
    componentEl.nativeElement.borderRadius = '1px';
    const directiveInstance = directiveEl.injector.get(NextDropzoneDirective);
    const eventDragover: any = new Event('dragover');
    eventDragover.dataTransfer = {
      types: ['Files'],
    };
    componentEl.triggerEventHandler('dragover', eventDragover as DragEvent);
    fixture.detectChanges();
    window.dispatchEvent(new DragEvent('dragend'));
    fixture.detectChanges();
    expect(directiveInstance.background).toEqual(componentEl.styles.background);
    expect(directiveInstance.borderColor).toEqual(componentEl.styles['border-color']);
    expect(directiveInstance.border).toEqual(componentEl.styles.border);
    expect(directiveInstance.borderRadius).toEqual(componentEl.styles['border-radius']);
  });

  it('should listen dragover', () => {
    const directiveInstance = directiveEl.injector.get(NextDropzoneDirective);
    const event: any = new Event('dragover');
    event.dataTransfer = {
      types: ['Files'],
    };
    componentEl.triggerEventHandler('dragover', event as DragEvent);
    fixture.detectChanges();
    expect(directiveInstance.background).toBe(directiveInstance.theme.dragover.background);
    expect(directiveInstance.borderColor).toBe(directiveInstance.theme.dragover['border-color']);
    expect(directiveInstance.border).toBe(directiveInstance.theme.dragover.border);
    expect(directiveInstance.borderRadius).toBe(directiveInstance.theme.dragover['border-radius']);
  });

  it('should listen dragleave', () => {
    componentEl.nativeElement.background = '#fff';
    const directiveInstance = directiveEl.injector.get(NextDropzoneDirective);
    const eventDragover: any = new Event('dragover');
    eventDragover.dataTransfer = {
      types: ['Files'],
    };
    directiveEl.triggerEventHandler('dragover', eventDragover as DragEvent);
    fixture.detectChanges();
    const eventDragleave: any = new Event('dragleave');
    eventDragleave.dataTransfer = {
      types: ['Files'],
    };
    directiveEl.triggerEventHandler('dragleave', eventDragleave as DragEvent);
    fixture.detectChanges();
    expect(directiveInstance.background).toBe(componentEl.styles.background);
  });

  it('should listen drop', () => {
    const mockFile1 = new File(['file1'], 'filename1.txt', {type: 'text/plain', lastModified: new Date().getTime()});
    const directiveInstance = directiveEl.injector.get(NextDropzoneDirective);
    fixture.detectChanges();
    const event: any = new Event('drop');
    event.dataTransfer = {
      types: ['Files'],
      files: [mockFile1],
    };
    directiveEl.triggerEventHandler('drop', event as DragEvent);
    fixture.detectChanges();
    expect(directiveInstance.fileToUpload).toEqual([mockFile1]);
    directiveInstance.filesSelected.subscribe((file) => expect(file).toEqual(mockFile1));
  });

  it('should change styles because of window dragover', () => {
    const directiveInstance = directiveEl.injector.get(NextDropzoneDirective);
    const event: any = new Event('dragover');
    event.dataTransfer = {
      types: ['Files'],
    };
    window.dispatchEvent(event as DragEvent);
    fixture.detectChanges();
    expect(directiveInstance.borderColor).toBe(directiveInstance.theme.dragover['border-color']);
    expect(directiveInstance.border).toBe(directiveInstance.theme.dragover.border);
    expect(directiveInstance.borderRadius).toBe(directiveInstance.theme.dragover['border-radius']);
  });

  it('should react on window drop', () => {
    const directiveInstance = directiveEl.injector.get(NextDropzoneDirective);
    const onDragendSpy = spyOn(directiveInstance, 'onDragEnd');
    window.dispatchEvent(new DragEvent('drop'));
    expect(onDragendSpy).toHaveBeenCalled();
  });

  it('should react on window dragleave', () => {
    const directiveInstance = directiveEl.injector.get(NextDropzoneDirective);
    const onDragendSpy = spyOn(directiveInstance, 'onDragEnd');
    window.dispatchEvent(new DragEvent('dragleave'));
    expect(onDragendSpy).toHaveBeenCalled();
  });
});
