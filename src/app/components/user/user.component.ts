import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ne-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input() user: any;
}
