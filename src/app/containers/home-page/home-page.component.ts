import { Component } from '@angular/core';
import {
  fetchUsers,
  toggleAccordion,
  userEnroll
} from '../../store/app.actions';
import { HomePageFacade } from './home-page.facade';

@Component({
  selector: 'ne-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [HomePageFacade],
})
export class HomePageComponent {
  constructor(public facade: HomePageFacade) {}

  toggleAccordion() {
    this.facade.dispatch(toggleAccordion());
  }

  fetchUsers() {
    this.facade.dispatch(fetchUsers());
  }

  enroll() {
    this.facade.dispatch(userEnroll());
  }
}
