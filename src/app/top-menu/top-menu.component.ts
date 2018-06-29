import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { UNKNOWN_USER } from './../services/user.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.user$
      .pipe(
        map( user => user !== UNKNOWN_USER)
      );
  }

}
