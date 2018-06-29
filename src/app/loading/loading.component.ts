import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationStart, RoutesRecognized } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  loading$: Observable<boolean> ;
  constructor(private router: Router) { }

  ngOnInit() {
    this.loading$ = this.router.events
      .pipe(

        map( event =>
          event instanceof NavigationStart ||
          event instanceof RoutesRecognized )
      );
  }

}
