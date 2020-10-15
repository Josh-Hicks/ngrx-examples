import { EventEmitter } from '@angular/core';
import { Mock, mockEmiter } from 'src/test-utils';
import { AdBannerComponent } from './ad-banner.component';

describe('AdBannerComponent', () => {
  let enrollEmiter: Mock<EventEmitter<void>>;

  let component: AdBannerComponent;

  beforeEach(() => {
    enrollEmiter = mockEmiter();

    component = new AdBannerComponent();
    component.enrollEvent = enrollEmiter;
  });

  it('should emit event on emitEnrollEvent', () => {
    // given & when
    component.emitEnrollEvent();

    // then
    expect(enrollEmiter.emit).toHaveBeenCalled();
  });
});
