import {TestBed} from '@angular/core/testing';

import {NextDragAndDropService} from './next-drag-and-drop.service';

describe('NextDragAndDropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextDragAndDropService = TestBed.get(NextDragAndDropService);
    expect(service).toBeTruthy();
  });

  it('should set remove border value', () => {
    const service: NextDragAndDropService = TestBed.get(NextDragAndDropService);
    service.setRemoveBorder(true);
    expect(service.getRemoveBorder()).toBeTruthy();

    service.setRemoveBorder(false);
    expect(service.getRemoveBorder()).toBeFalsy();
  });

  it('should change remove border value on true', () => {
    const service: NextDragAndDropService = TestBed.get(NextDragAndDropService);
    service.onDrop();
    expect(service.getRemoveBorder()).toBeTruthy();
  })
});
