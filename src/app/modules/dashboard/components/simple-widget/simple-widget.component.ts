import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-widget',
  templateUrl: './simple-widget.component.html',
  styleUrls: ['./simple-widget.component.scss'],
})
export class SimpleWidgetComponent {
  @Input() icon!: string;
  @Input() value!: string;
  @Input() label!: string;
}
