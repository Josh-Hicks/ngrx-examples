import { EventEmitter } from '@angular/core';
import { Mock, mockEmiter } from 'src/test-utils';
import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let toggleEmiter: Mock<EventEmitter<void>>;

  let component: AccordionComponent;

  beforeEach(() => {
    toggleEmiter = mockEmiter();

    component = new AccordionComponent();
    component.toggleAccordion = toggleEmiter;
  });

  it('should emit event on emitToggleAccordion', () => {
    // given & when
    component.emitToggleAccordion();

    // then
    expect(toggleEmiter.emit).toHaveBeenCalled();
  });
});
