import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BadgesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BadgesServiceProvider {

  constructor(public http: HttpClient) {
    console.log('dasdas');
  }

  getAllBadges() {
    console.log('adasdasd')
    return this.http.get('http://localhost:3000/badges');
  }
}
