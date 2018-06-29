import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterService } from './../services/newsletter.service';
import { UserService } from '../services/user.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  firstName$: Observable<string>;
  constructor(
    private userService: UserService,
    private   newsletterService: NewsletterService
  ) { }

  ngOnInit() {
    this.firstName$ = this.userService.user$
      .pipe(
        tap( user => console.log('newsletter: ', user)),
        map( user => user.firstName)
      );
  }

  subscribeToNewsletter(emailField) {
    this.newsletterService.subscribeToNewsletter(emailField.value)
     .subscribe(
       () => {
         emailField.value = '';
         alert('Subscription successful....');
       },
       console.error
     );
  }

}
