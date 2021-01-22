import { Component } from '@angular/core';
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
    this.facade.toggleAccordion();
  }

  fetchUsers() {
    this.facade.fetchUsers();
  }

  enroll() {
    this.facade.enroll();
  }
}
