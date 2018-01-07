import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {
  public global_user_info:any;

  constructor(public http: HttpClient) {
    console.log('Hello GlobalProvider Provider');
  }

}
