import { Component, OnInit } from '@angular/core';
import { HomePageFacade } from './home-page.facade';
import {
  toggleAccordion,
  fetchUsers,
  userEnroll,
} from '../../store/app.actions';

@Component({
  selector: 'ne-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [HomePageFacade],
})
export class HomePageComponent implements OnInit {
  constructor(public facade: HomePageFacade) {}

  ngOnInit(): void {}

  toggleAccordion() {
    this.facade.dispatch(toggleAccordion());
  }

  fetchUsers() {
    this.facade.dispatch(fetchUsers());
  }

  enroll(e) {
    this.facade.dispatch(userEnroll());
  }
}
