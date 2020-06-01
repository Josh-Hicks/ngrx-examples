import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'ne-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent implements OnInit {
  @Input() open: boolean;
  @Output() toggleAccordion = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitToggleAccordion() {
    this.toggleAccordion.emit();
  }
}
