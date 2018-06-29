import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../shared/model/course';
import { Lesson } from 'src/app/shared/model/lesson';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesHttpService {

 // course: Course;
 // lessons: Lesson[];

  constructor(private http: HttpClient) { }

  findCourseById(courseId: number): Observable<any> {
    return this.http.get(`/api/courses/${courseId}`);
  }

  findLessonDetailById(lessonId) {
    return this.http.get(`/api/lessons/${lessonId}`);
  }

}
