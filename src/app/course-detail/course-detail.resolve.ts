import { Injectable } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Lesson } from '../shared/model/lesson';
import { Course } from '../shared/model/course';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class CourseDetailResolve implements Resolve<[Course, (Lesson[])]> {

   constructor(
     private coursesService: CoursesService,
     private route: Router) {}

   resolve (route: ActivatedRouteSnapshot): Observable<[Course, (Lesson[])]> {
      return this.coursesService.findCourseByUrl(route.params['id'])
            .pipe(
              switchMap(
                course => this.coursesService.findLessonsForCourse(course.id)
                  .pipe(map(lessons => <any>[course, lessons]))
                  )
            );

   }




}
