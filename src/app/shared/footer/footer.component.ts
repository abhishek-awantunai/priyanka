import { EventEmitter, Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer">
      <h1>{{ abba }}</h1>
      <p>Selected value : {{ selectedCity }}</p>
      <select (change)="getSelectedCity($event)">
        <option>Jaipur</option>
        <option>Ambala</option>
        <option>Patna</option>
        <option>Kolkata</option>
        <option>Muzaffarpur</option>
        <option>Hajipur</option>
      </select>
    </div>
  `,
  styles: [
    `
      .footer {
        padding: 10px 20px;
        border: 1px dashed black;
      }
    `,
  ],
})
export class FooterComponent {
  @Input('abba') abba: any;
  @Output('transmitSelectedCity')
  transmitSelectedCity: EventEmitter<String> = new EventEmitter();
  selectedCity: String;

  getSelectedCity(event) {
    this.selectedCity = event.target.value;
    this.transmitSelectedCity.emit(this.selectedCity);
  }
}
