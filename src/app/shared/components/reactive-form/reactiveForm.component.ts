import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveForm.component.html',
  styleUrls: ['./reactiveForm.component.scss'],
})
export class ReactiveFormComponent {
  emailForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    // this.emailForm = new FormGroup({
    //   fname: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(5),
    //   ]),
    //   address: new FormGroup({
    //     city: new FormControl('', [
    //       Validators.required,
    //       Validators.pattern(
    //         /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
    //       ),
    //     ]),
    //   }),
    // });

    this.emailForm = this._fb.group({
      fname: ['', [Validators.required, Validators.minLength(5)]],
      lname: [''],
      age: [''],
      email: [''],
      password: [''],
      remember: [''],
      address: this._fb.group({
        street: [''],
        city: [''],
        country: [''],
      }),
    });
  }

  updatenput() {
    console.log(this.emailForm.value);
  }
}
