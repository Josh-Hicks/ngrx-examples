import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'ne-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdBannerComponent {
  @Input() enrolled: boolean;
  @Output() enrollEvent = new EventEmitter();

  emitEnrollEvent() {
    this.enrollEvent.emit();
  }
}
