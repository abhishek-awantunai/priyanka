import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveForm.component.html',
  styleUrls: ['./reactiveForm.component.scss'],
})
export class ReactiveFormComponent {
  emailForm: FormGroup;

  constructor() {
    this.emailForm = new FormGroup({
      fname: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      address: new FormGroup({
        city: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
          ),
        ]),
      }),
    });
  }

  updatenput() {
    console.log(this.emailForm);
    console.log(this.emailForm.get('fname')['invalid']);
  }
}
