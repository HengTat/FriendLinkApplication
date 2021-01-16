import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { friend, friendwithproperties, updates } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  URL = 'http://localhost:3000/friend/getfriends/';
  URL1 = 'http://localhost:3000/friend/commonfriends/';
  URL2 = 'http://localhost:3000/friend/linkaccount';
  URL3 = 'http://localhost:3000/update/postupdates';
  URL4 = 'http://localhost:3000/update/getupdates/';
  URL5 = 'http://localhost:3000/friend/subscription/';
  URL6 = 'http://localhost:3000/friend/block/';

  constructor(private _http: HttpClient) {}

  getfriends(email): Observable<friendwithproperties[]> {
    const x = this._http.get<friendwithproperties[]>(this.URL + email);
    return x;
  }

  getcommonfriend(email, friendemail): Observable<friend[]> {
    const withparam = this.URL1 + email + '/' + friendemail;
    const x = this._http.get<friend[]>(withparam);
    return x;
  }
  linkaccount(data) {
    console.log(data);
    return this._http.post(this.URL2, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  postupdates(data) {
    console.log(data);
    return this._http.post(this.URL3, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getupdates(email) {
    const x = this.URL4 + email;
    console.log(x);
    return this._http.get<updates[]>(x);
  }

  changesubscription(payload, email, friendemail) {
    const x = this.URL5 + email + '/' + friendemail;
    return this._http.put(x, payload, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  changeblock(payload, email, friendemail) {
    const x = this.URL6 + email + '/' + friendemail;
    console.log(x);
    return this._http.put(x, payload, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
