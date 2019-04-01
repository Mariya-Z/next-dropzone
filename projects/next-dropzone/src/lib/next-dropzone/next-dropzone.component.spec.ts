import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NextDropzoneComponent} from './next-dropzone.component';

describe('NextDropzoneComponent', () => {
  let component: NextDropzoneComponent;
  let fixture: ComponentFixture<NextDropzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextDropzoneComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextDropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
