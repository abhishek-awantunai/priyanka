import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from './../../../config/base.url';

@Injectable({
  providedIn: 'root',
})
export class DynamictableService {
  constructor(private _http: HttpClient) {}

  getBooksList() {
    return this._http.get(CONFIG.BASE_URL + '/posts');
  }

  postBooksList() {
    return this._http.post(CONFIG.BASE_URL + '/posts/', {});
  }

  getBooksListById(id) {
    return this._http.get(CONFIG.BASE_URL + '/posts/' + id);
  }
}
