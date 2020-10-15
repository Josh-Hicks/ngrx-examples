import {
  fetchUsers,
  toggleAccordion,
  userEnroll
} from 'src/app/store/app.actions';
import { Mock, mockService } from 'src/test-utils';
import { HomePageComponent } from './home-page.component';
import { HomePageFacade } from './home-page.facade';

describe('HomePageComponent', () => {
  let component: HomePageComponent;

  let facade: Mock<HomePageFacade>;

  beforeEach(() => {
    facade = mockService(HomePageFacade);

    component = new HomePageComponent(facade);
  });

  it('should dispatch [App Home] Toggle Accordion action on toggleAccordion', () => {
    // given & when
    component.toggleAccordion();

    // then
    expect(facade.dispatch).toHaveBeenCalledWith(toggleAccordion());
  });

  it('should dispatch [App Home] Fetch Users action on fetchUsers', () => {
    // given & when
    component.fetchUsers();

    // then
    expect(facade.dispatch).toHaveBeenCalledWith(fetchUsers());
  });

  it('should dispatch [App Home] User Enroll action on enroll', () => {
    // given & when
    component.enroll();

    // then
    expect(facade.dispatch).toHaveBeenCalledWith(userEnroll());
  });
});
