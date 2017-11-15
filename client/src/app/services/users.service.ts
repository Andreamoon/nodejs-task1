import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
@Injectable()
export class UsersService {

  domain = 'http://localhost:3000/route/';
  constructor(public http: Http) {


  }

  getUsers() {
    return this.http.get(this.domain)
      .map(res => res.json());
  }

  addUser(user) {
    return this.http.post(this.domain + 'adduser', user)
      .map(res => res.json());
  }
  getUser(id: string) {
    return this.http.get(this.domain + 'user/' + id)
      .map(res => res.json());

  }
  editUser(id: string, user) {
    return this.http.put(this.domain + 'editUsers/' + id, user)
      .map(res => res.json());
  }

  deleteUser(id: string) {
    return this.http.delete(this.domain + 'deleteUser/' + id)
      .map(res => res.json());
  }



}
