import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userName: String;
  city: String;

  constructor() {}

  ngOnInit(): void {}

  transmitFromKeypressHandler(val) {
    this.userName = val;
  }

  handleTransmitSelectedCity(val) {
    this.city = val;
  }
}
