import { Action, Store } from '@ngrx/store';
import {
  fetchUsers,
  toggleAccordion,
  userEnroll
} from 'src/app/store/app.actions';
import { AppState } from 'src/app/store/app.reducer';
import { Mock, mockService } from 'src/test-utils';
import { HomePageFacade } from './home-page.facade';

describe('HomePageFacade', () => {
  let facade: HomePageFacade;
  let store: Mock<Store<AppState>>;

  beforeEach(() => {
    store = mockService<Store<AppState>>(Store);

    facade = new HomePageFacade(store);
  });

  it('should dispatch toggleAccordion', () => {
    // given
    const action: Action = toggleAccordion();

    // when
    facade.toggleAccordion();

    // then
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch userEnroll', () => {
    // given
    const action: Action = userEnroll();

    // when
    facade.enroll();

    // then
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch fetchUsers', () => {
    // given
    const action: Action = fetchUsers();

    // when
    facade.fetchUsers();

    // then
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
