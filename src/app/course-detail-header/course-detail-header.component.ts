import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../shared/model/course';
 import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'app-course-detail-header',
  templateUrl: './course-detail-header.component.html',
  styleUrls: ['./course-detail-header.component.scss']
})
export class CourseDetailHeaderComponent implements OnInit {

  @Input() course: Course;
  @Input() lessons: Lesson[];
  constructor() { }

  ngOnInit() {
  }

}
