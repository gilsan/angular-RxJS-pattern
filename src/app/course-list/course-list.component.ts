import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../shared/model/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  @Input() courses: Course[];
  constructor() { }

  ngOnInit() {
  }

}
