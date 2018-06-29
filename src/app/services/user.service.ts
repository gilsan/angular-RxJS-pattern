import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from '../shared/model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, publishLast, refCount } from 'rxjs/operators';

export const UNKNOWN_USER: User = {
  firstName: 'Unknown'
};

@Injectable()
export class UserService {
 private subject = new BehaviorSubject(UNKNOWN_USER);
 user$: Observable<User> =  this.subject.asObservable();
   constructor(private http: HttpClient) {}

   login(email, password)   {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'applicaion/json');
     return  this.http.post('/api/login', {email, password}, {headers: headers} )
         .pipe(
           tap( user => console.log('user service:', user)),
           tap( user => this.subject.next(user)),
           publishLast(), refCount()
         );
   }


}
