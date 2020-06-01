import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'ne-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdBannerComponent implements OnInit {
  @Input() enrolled: boolean;
  @Output() enrollEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  emitEnrollEvent() {
    this.enrollEvent.emit();
  }
}
