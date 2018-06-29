import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private errorsSubject = new BehaviorSubject<string[]>([]);
  errors$: Observable<string[]> = this.errorsSubject.asObservable();

  constructor() {
    console.log('메세지 서비스 ......');
  }

  error(...errors: string[]) {
     this.errorsSubject.next(errors);
  }


}
