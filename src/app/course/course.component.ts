import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { Course } from '../shared/model/course';
import { CoursesHttpService } from '../services/courses-http.service';
import { Lesson } from '../shared/model/lesson';
import { LessonsPagerService } from '../services/lessons-pager.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [LessonsPagerService]
})
export class CourseComponent implements OnInit {

  @Input() id: number;
  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;
  detail$: Observable<Lesson>;

  constructor(
    private courseService: CoursesHttpService,
    private lessonsPager: LessonsPagerService,
    private messagesService: MessageService
  ) { }

  ngOnInit() {
    this.course$ = this.courseService.findCourseById(this.id);
    this.lessons$ = this.lessonsPager.lessonsPage$;

    this.lessonsPager.loadFirstPage(this.id)
      .subscribe(
        () => {},
        err => this.messagesService.error('Could not find first page')
      );
  }

  backToMaster() {
    this.detail$ = undefined;
  }

  previousLessonsPage() {
    this.lessonsPager.previous()
      .subscribe(
        () => {},
        err => this.messagesService.error('Could not load previous page')
      );
  }

  nextLessonsPage() {
    this.lessonsPager.next()
      .subscribe(
        () => {},
        err => this.messagesService.error('Could not load next page')
      );
  }

  selectDetail(lesson: Lesson) {
    this.detail$ = this.courseService.findLessonDetailById(lesson.url);
  }

}
