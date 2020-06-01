import { Component, OnInit } from '@angular/core';
import { userSignIn } from '../../store/app.actions';
import { SignOutPageFacade } from './sign-out-page.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'ne-sign-out-page',
  templateUrl: './sign-out-page.component.html',
  styleUrls: ['./sign-out-page.component.scss'],
  providers: [SignOutPageFacade],
})
export class SignOutPageComponent implements OnInit {
  constructor(public facade: SignOutPageFacade, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.facade.dispatch(userSignIn());
    this.router.navigateByUrl('/home');
  }
}
