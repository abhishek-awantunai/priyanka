import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <h1>{{ abba?.text?.title }}</h1> `,
  styles: [],
})
export class HeaderComponent {
  @Input('abba') abba: any;
}
