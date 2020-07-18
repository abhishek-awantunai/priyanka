import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  userName: String;

  setUserName(val) {
    this.userName = val;
    console.log(this.userName);
  }

  getUserName() {
    return this.userName;
  }
}
