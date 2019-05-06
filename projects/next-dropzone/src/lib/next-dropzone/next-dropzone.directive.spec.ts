import {NextDropzoneDirective} from './next-dropzone.directive';
import {Component, DebugElement} from '@angular/core';
import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

@Component({
  template: `
    <p class="zone" nextDropzone>text</p>
  `,
  styles: [
    `
      .zone {
        background: white;
        border: 1px dashed;
        border-сolor: #9d9d9d;
        border-radius: 1px;
      }
      p {
        background: white;
        border: 1px dashed;
        border-сolor: #9d9d9d;
        border-radius: 1px;
      }
    `,
  ],
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

  xit('should listen dragenter', () => {
    const directiveInstance = directiveEl.injector.get(NextDropzoneDirective);
    const event: any = new Event('dragenter');
    event.dataTransfer = {
      types: ['Files'],
    };
    componentEl.triggerEventHandler('window:dragenter', event as DragEvent);

    fixture.detectChanges();
    console.log(directiveInstance.background);
    console.log(directiveInstance.theme.dragover.background);
    // expect(directiveInstance.background).toBe(directiveInstance.theme.dragover.background);
    expect(directiveInstance.borderColor).toBe(directiveInstance.theme.dragover['border-color']);
    expect(directiveInstance.border).toBe(directiveInstance.theme.dragover.border);
    expect(directiveInstance.borderRadius).toBe(directiveInstance.theme.dragover['border-radius']);
  });

  it('should listen window:dragend', () => {
    // work incorrect !!!
    const directiveInstance = directiveEl.injector.get(NextDropzoneDirective);

    const eventDragover: any = new Event('dragover');
    eventDragover.dataTransfer = {
      types: ['Files'],
    };
    componentEl.triggerEventHandler('dragover', eventDragover as DragEvent);

    fixture.detectChanges();
    const eventDragend: any = new Event('window:dragend');
    eventDragend.dataTransfer = {
      types: ['Files'],
    };
    componentEl.triggerEventHandler('window:dragend', eventDragend as DragEvent);

    fixture.detectChanges();
    // console.log(directiveInstance.background);
    // console.log(componentEl.styles.background);
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

  xit('should listen dragleave', () => {
    const directiveInstance = directiveEl.injector.get(NextDropzoneDirective);
    let eventDragover: any = new Event('dragover');
    eventDragover.dataTransfer = {
      types: ['Files'],
    };
    directiveEl.triggerEventHandler('dragover', eventDragover as DragEvent);
    // directiveInstance.onDragOver(eventDragover as DragEvent);
    console.log(eventDragover);

    // console.log(componentEl.styles);
    // console.log(componentEl.styles.background);

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      // console.log(directiveInstance.background);
      // console.log(componentEl.styles.background);

      const eventDragleave: any = new Event('dragleave');
      eventDragleave.dataTransfer = {
        types: ['Files'],
      };
      eventDragover = eventDragleave;
      directiveEl.triggerEventHandler('dragleave', eventDragover as DragEvent);
      // directiveEl.triggerEventHandler('dragleave', eventDragleave as DragEvent);

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        // console.log(directiveInstance.background);
        // console.log(componentEl.styles.background);

        // ???
        fixture.detectChanges();
        console.log(directiveInstance.background);
        console.log(componentEl.styles.background);
        expect(directiveInstance.background).toBe(componentEl.styles.background);
      });
    });
  });

  it('should listen drop', () => {
    const mockFile1 = new File(['file1'], 'filename1.txt', {type: 'text/plain', lastModified: new Date().getTime()});
    const directiveInstance = directiveEl.injector.get(NextDropzoneDirective);
    const event: any = new Event('drop');
    event.dataTransfer = {
      types: ['Files'],
      files: [mockFile1],
    };
    directiveEl.triggerEventHandler('drop', event);

    fixture.detectChanges();
    expect(directiveInstance.fileToUpload).toEqual([mockFile1]);
    directiveInstance.filesSelected.subscribe((file) => expect(file).toEqual(mockFile1));
  });
});
