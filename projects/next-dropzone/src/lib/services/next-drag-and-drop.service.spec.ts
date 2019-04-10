import {TestBed} from '@angular/core/testing';

import {NextDragAndDropService} from './next-drag-and-drop.service';

describe('NextDragAndDropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextDragAndDropService = TestBed.get(NextDragAndDropService);
    expect(service).toBeTruthy();
  });
});
