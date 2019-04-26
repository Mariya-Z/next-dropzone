import {TestBed} from '@angular/core/testing';

import {NextDragAndDropService} from './next-drag-and-drop.service';

describe('NextDragAndDropService', () => {
  it('should be created', () => {
    const service: NextDragAndDropService = TestBed.get(NextDragAndDropService);
    expect(service).toBeTruthy();
  });

  it('should call next on init', () => {
    const service: NextDragAndDropService = TestBed.get(NextDragAndDropService);
    const nextSpy = spyOn(service.dropped, 'next');
    service.onDrop();
    expect(nextSpy).toHaveBeenCalled();
  });

  it('should add Observable', () => {
    const service: NextDragAndDropService = TestBed.get(NextDragAndDropService);
    service.ngOnInit();
    expect(service.fileDropped).toBeDefined();
  });
});
