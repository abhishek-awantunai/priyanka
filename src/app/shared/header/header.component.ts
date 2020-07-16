import { EventEmitter, Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <input
        type="text"
        class="form-control"
        placeholder="Enter text"
        (keyup)="getInputValue($event)"
      />
      <h1>{{ abba }}</h1>
    </div>
  `,
  styles: [
    `
      .header {
        padding: 10px 20px;
        border: 1px dashed red;
      }
    `,
  ],
})
export class HeaderComponent {
  @Input('abba') abba: any;
  @Output('transmitFromKeypress')
  transmitFromKeypress: EventEmitter<String> = new EventEmitter();

  getInputValue(event) {
    this.transmitFromKeypress.emit(event.target.value);
  }
}
