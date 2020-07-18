import {
  EventEmitter,
  Component,
  Input,
  Output,
  OnInit,
  SimpleChange,
} from '@angular/core';
import { CommonService } from '../../services/commmon.service';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <ng-content select="h1"></ng-content>
      <ng-content select="h3"></ng-content>
      <input
        type="text"
        class="form-control"
        placeholder="Enter text"
        (keyup)="getInputValue($event)"
      />
      <p>{{ _commonService.userName }}</p>
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
export class HeaderComponent implements OnInit {
  @Input('abba') abba: any;
  @Output('transmitFromKeypress')
  transmitFromKeypress: EventEmitter<String> = new EventEmitter();

  constructor(public _commonService: CommonService) {}

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnChanges(change: SimpleChange) {
    console.log('ngOnChanges called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

  getInputValue(event) {
    this.transmitFromKeypress.emit(event.target.value);
    this._commonService.setUserName(event.target.value);
  }
}
