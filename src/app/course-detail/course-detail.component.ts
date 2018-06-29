import { Component, OnInit } from '@angular/core';
import { AngularFirestore,   } from 'angularfire2/firestore';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../shared/model/course';
import {Lesson} from '../shared/model/lesson';
import * as _ from 'lodash';
import { map, switchMap, first, publishLast, refCount } from 'rxjs/operators';
import { CoursesService } from './../services/courses.service';
import { NewsletterService } from './../services/newsletter.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;

  constructor(private route: ActivatedRoute, private db:  AngularFirestore,
              private coursesService: CoursesService,
              private newsletterService: NewsletterService,

       ) {

  }

  onSubscribe(email: string) {
    this.newsletterService.subscribeToNewsletter(email)
      .subscribe(
          () => {
            alert('Subscription successful ...');
          },
          console.error
      );
  }

  ngOnInit() {

    this.course$ = this.route.data
      .pipe(

        map(data => data['detail'][0])
      );

    this.lessons$ = this.route.data
      .pipe(
        map( data => data['detail'][1])
      );

     /*
    this.course$ = this.route.params
    .pipe(
      switchMap( params => this.coursesService.findCourseByUrl(params['id'])),
      first(),
      publishLast(),
      refCount()
    );

    this.lessons$ = this.course$
     .pipe(switchMap(
       course => this.coursesService.findLessonsForCourse(course.id) ),
       first(),
      publishLast(),
      refCount()
      );
    */
    /*
    this.route.params
    .subscribe( params => {
        const courseUrl = params['id'];
       this.coursesService.findCourseByUrl(courseUrl)
       .subscribe( data  => {

         this.course = data;
        this.coursesService.findLessonsForCourse(data.id)
        .subscribe( (result) => {
          this.lessons = result;
         // console.log('course.detail: ', result);
        });
    });
    */

   // });
  }

}
