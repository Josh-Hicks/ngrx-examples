import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignOutPageFacade } from './sign-out-page.facade';

@Component({
  selector: 'ne-sign-out-page',
  templateUrl: './sign-out-page.component.html',
  styleUrls: ['./sign-out-page.component.scss'],
  providers: [SignOutPageFacade],
})
export class SignOutPageComponent {
  constructor(public facade: SignOutPageFacade, private router: Router) {}

  login() {
    this.facade.signIn();
    this.router.navigateByUrl('/home');
  }
}
