import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/commmon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userName: String;
  city: String;

  twoWayDataBindingVariable: String = 'fdfd';

  constructor(public _commonService: CommonService) {}

  ngOnInit(): void {}

  transmitFromKeypressHandler(val) {
    this.userName = val;
  }

  handleTransmitSelectedCity(val) {
    this.city = val;
  }
}
