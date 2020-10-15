import { Router } from '@angular/router';
import { userSignIn } from 'src/app/store/app.actions';
import { Mock, mockService } from 'src/test-utils';
import { SignOutPageComponent } from './sign-out-page.component';
import { SignOutPageFacade } from './sign-out-page.facade';

describe('SignOutPageComponent', () => {
  let component: SignOutPageComponent;

  let router: Mock<Router>;
  let facade: Mock<SignOutPageFacade>;

  beforeEach(() => {
    router = mockService(Router);
    facade = mockService(SignOutPageFacade);

    component = new SignOutPageComponent(facade, router);
  });

  it('should dispatch UserSignIn and navigate to home onLogin', () => {
    // given & when
    component.login();

    // then
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
    expect(facade.dispatch).toHaveBeenCalledWith(userSignIn());
  });
});
